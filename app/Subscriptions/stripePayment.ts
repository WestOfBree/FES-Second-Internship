"use client";
import { FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  onSnapshot,
  doc,
  addDoc,
  collection,
} from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";

export const getCheckoutUrl = async (
  priceId: string
): Promise<string> => {
  const auth = getAuth();
  const userId = auth.currentUser?.uid;
  if (!userId) throw new Error("User is not authenticated");

  const db = getFirestore();

  // Create a new checkout session document
  // The Stripe extension listens to writes in this collection
  const checkoutSessionRef = collection(
    db,
    "customers",
    userId,
    "checkout_sessions"
  );

  const docRef = await addDoc(checkoutSessionRef, {
    price: priceId,
    success_url: window.location.origin,
    cancel_url: window.location.origin,
    created: new Date(),
  });

  return new Promise<string>((resolve, reject) => {
    let timeoutId: NodeJS.Timeout;

    const unsubscribe = onSnapshot(
      docRef,
      (snap) => {
        const data = snap.data();

        if (!data) {
          return;
        }

        const { error, url } = data as {
          error?: { message: string };
          url?: string;
        };

        // Check for error from the Stripe extension
        if (error) {
          clearTimeout(timeoutId);
          unsubscribe();
          console.error("Stripe Extension Error:", error);
          reject(
            new Error(
              error.message ||
                "Stripe checkout creation failed. Ensure your Stripe account is properly configured.",
            ),
          );
          return;
        }

        // Check for successful URL
        if (url) {
          clearTimeout(timeoutId);
          unsubscribe();
          console.log("Stripe Checkout URL received:", url);
          resolve(url);
          return;
        }
      },
      (error) => {
        clearTimeout(timeoutId);
        unsubscribe();
        console.error("Firestore error:", error);
        reject(
          new Error("Failed to monitor checkout session: " + error.message),
        );
      },
    );

    // Timeout after 10 seconds - gives the extension time to process
    timeoutId = setTimeout(() => {
      unsubscribe();
      reject(
        new Error(
          "Checkout session creation timed out. Please check your Stripe extension configuration.",
        ),
      );
    }, 10000);
  });
};

export const getPortalUrl = async (app: FirebaseApp): Promise<string> => {
  const auth = getAuth(app);
  const user = auth.currentUser;

  let dataWithUrl: any;
  try {
    const functions = getFunctions(app, "us-central1");
    const functionRef = httpsCallable(
      functions,
      "ext-firestore-stripe-payments-createPortalLink"
    );
    const { data } = await functionRef({
      customerId: user?.uid,
      returnUrl: window.location.origin,
    });

    // Add a type to the data
    dataWithUrl = data as { url: string };
    console.log("Reroute to Stripe portal: ", dataWithUrl.url);
  } catch (error) {
    console.error(error);
  }

  return new Promise<string>((resolve, reject) => {
    if (dataWithUrl.url) {
      resolve(dataWithUrl.url);
    } else {
      reject(new Error("No url returned"));
    }
  });
};