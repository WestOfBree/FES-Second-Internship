"use client";
import Footer from "@/Components/Footer";
import subscriptionHeader from "@/public/pricing-top.png";
import { auth } from "../Firebase/init.js";
import { onAuthStateChanged, User } from "firebase/auth";
import {
  addDoc,
  collection,
  getFirestore,
  onSnapshot,
} from "firebase/firestore";
import { FirebaseApp } from "firebase/app";
import Router from "next/router";
import { useRouter } from "next/navigation";


export const getCheckoutUrl = async (
  plan: string,
  app: FirebaseApp,
) => {
  const userId = auth.currentUser?.uid;
  if (!userId) {
    throw new Error("User not authenticated");
  }
  const priceId = "prod_UDSyrwKg8JggNm";
  const db = getFirestore(app);
  const checkoutRef = collection(db, "checkout_sessions", "customers", userId, "sessions");
  const docRef = await addDoc(checkoutRef, {
    userId,
    plan,
    price: priceId,
    success_url: window.location.origin + "/success",
    cancel_url: window.location.origin + "/cancel",
  });
  return new Promise<string>((resolve, reject) => {

    const unsubscribe = onSnapshot(docRef, (doc) => {
      const {error, url} = doc.data() as {error ?: {message: string}, url?: string};
      if (error) {
        unsubscribe();
        reject(new Error(error.message));
      }
      if (url) {
        console.log("Stripe Checkout URL:", url);
        unsubscribe();
        resolve(url);
      }
    });
    
  })
};

export default function Subscriptions() {
    throw new Error("Function not implemented.");
  }
      const upgradeToPremium = async () => {
        const priceId = "prod_UDSyrwKg8JggNm";
        const checkoutUrl = await getCheckoutUrl(priceId, app);
        Router.push(checkoutUrl);
        console.log ("upgraded");
    };

  return (
    <div className="subscriptions">
      <div className="subscriptions__header--wrapper">
        <div className="subscriptions__header">
          Manage Subscription
          <div className="subscriptions__title">
            Get unlimited access to many amazing books to read
          </div>
          <div className="subscriptions__sub-title">
            Turn ordinary moments into amazing learning opportunities
          </div>
          <figure className="subscriptions__image--wrapper">
            <img
              className="subscriptions__image"
              src={subscriptionHeader.src}
              alt="Subscriptions Image"
            />
          </figure>
        </div>
      </div>
      <div className="row">
        <div className="container">
          <div className="subscriptions__features--wrapper">
            <div className="subscriptions__feature">
              <figure className="subscriptions__feature--icon"></figure>
              <div className="subscriptions__feature--text">
                <b>Key ideas in a few mins</b> with many books to read
              </div>
            </div>
            <div className="subscriptions__feature">
              <figure className="subscriptions__feature--icon"></figure>
              <div className="subscriptions__feature--text">
                <b>3 million</b> people growing with Summarist every day
              </div>
            </div>
            <div className="subscriptions__feature">
              <figure className="subscriptions__feature--icon"></figure>
              <div className="subscriptions__feature--text">
                <b>Precise recommendations</b>collections curated by experts
              </div>
            </div>
          </div>
          <div className="section__title">Choose the plan that fits you</div>
          <div className="plan__card plan__card--active">
            <div className="plan__card--circle">
              <div className="plan__card--dot"></div>
            </div>
            <div className="plan__card--content">
              <div className="plan__card--title">Premium Plus Yearly</div>
              <div className="plan__card--price">$99.99/year</div>
              <div className="plan__card--text">
                {" "}
                7-day free trial, then $99.99/year. Cancel anytime.
              </div>
            </div>
          </div>
          <div className="plan__card--separator"></div>
          <div className="plan__card">
            <div className="plan__card--circle">
              <div className="plan__card--dot"></div>
            </div>
            <div className="plan__card--content">
              <div className="plan__card--title">Premium Monthly</div>
              <div className="plan__card--price">$9.99/month</div>
              <div className="plan__card--text"> No trial included</div>
            </div>
          </div>
          <div className="plan__card--cta">
            <span className="btn--wrapper">
              <button onClick={() => upgradeToPremium()} className="btn" style={{ width: "300px" }}>
                {" "}
                <span>Start your 7-day free trial</span>
              </button>
            </span>
            <div className="plan__disclaimer">
              Cancel anytime. No commitment.
            </div>
          </div>
          <div className="faq--wrapper">
            <div className="accordion__card">
              <div className="accordion__card--header">
                <div className="accordion__card--title">
                  How does the free 7-day trial work?
                </div>
                {/* insert arrow icon here */}
              </div>
              <div className="collapse show" style={{ height: "96px" }}>
                <div className="accordion__card--body">
                  Begin your complimentary 7-day trial with a Summarist annual
                  membership. You are under no obligation to continue your
                  subscription, and you will only be billed when the trial
                  period expires. With Premium access, you can learn at your own
                  pace and as frequently as you desire, and you may terminate
                  your subscription prior to the conclusion of the 7-day free
                  trial.
                </div>
              </div>
            </div>
            <div className="accordion__card">
              <div className="accordion__card--header">
                <div className="accordion__card--title">
                  Can I switch subscriptions from monthly to yearly, or yearly
                  to monthly?
                </div>
                {/* insert arrow icon here */}
              </div>
              <div className="collapse show" style={{ height: "96px" }}>
                <div className="accordion__card--body">
                  While an annual plan is active, it is not feasible to switch
                  to a monthly plan. However, once the current month ends,
                  transitioning from a monthly plan to an annual plan is an
                  option.
                </div>
              </div>
            </div>
            <div className="accordion__card">
              <div className="accordion__card--header">
                <div className="accordion__card--title">
                  What's included in the Premium plan?
                </div>
                {/* insert arrow icon here */}
              </div>
              <div className="collapse show" style={{ height: "96px" }}>
                <div className="accordion__card--body">
                  Premium membership provides you with the ultimate Summarist
                  experience, including unrestricted entry to many best-selling
                  books high-quality audio, the ability to download titles for
                  offline reading, and the option to send your reads to your
                  Kindle.
                </div>
              </div>
            </div>
            <div className="accordion__card">
              <div className="accordion__card--header">
                <div className="accordion__card--title">
                  Can I cancel during my trial or subscription?
                </div>
                {/* insert arrow icon here */}
              </div>
              <div className="collapse show" style={{ height: "96px" }}>
                <div className="accordion__card--body">
                  You will not be charged if you cancel your trial before its
                  conclusion. While you will not have complete access to the
                  entire Summarist library, you can still expand your knowledge
                  with one curated book per day.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
