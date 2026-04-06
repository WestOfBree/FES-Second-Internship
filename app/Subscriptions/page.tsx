"use client";
import Footer from "@/Components/Footer";
import subscriptionHeader from "@/public/pricing-top.png";
import { onAuthStateChanged, User } from "firebase/auth";
import {
  addDoc,
  collection,
  getFirestore,
  onSnapshot,
} from "firebase/firestore";
import { FirebaseApp } from "firebase/app";
import { db, auth } from "../Firebase/init.js";
import { useRouter } from "next/navigation";
import { getCheckoutUrl, getPortalUrl } from "./stripePayment";
import { useEffect, useState } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faFileLines,
  faHandshake,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

export default function Subscriptions() {
  const router = useRouter();
  const userName = auth.currentUser?.displayName;
  const email = auth.currentUser?.email;
  const [isPremium, setIsPremium] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<"yearly" | "monthly">(
    "yearly",
  );
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);




  const toggleAccordion = (index: number) => {
    setOpenAccordion((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const verifyUserDataLoaded = async (): Promise<User> => {
    if (auth.currentUser) {
      return auth.currentUser;
    }

    if (!loading && !user) {
      throw new Error("Please sign in first");
    }

    return new Promise<User>((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(auth, (authUser) => {
        unsubscribe();
        if (authUser) {
          resolve(authUser);
          return;
        }
        reject(new Error("Please sign in first"));
      });
    });
  };

  const upgradeToPremium = async () => {
    try {
      await verifyUserDataLoaded();
      const priceId = "prod_UDSyrwKg8JggNm";
      const checkoutUrl = await getCheckoutUrl(priceId);
      router.push(checkoutUrl);
      console.log("upgraded");
    } catch (error) {
      console.error("Error upgrading to premium:", error);
      alert("Failed to upgrade. Please try again.");
    }
  };

  return (
    <div className="subscriptions">
      <div className="subscriptions__header--wrapper">
        <div className="subscriptions__header">
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
              <figure className="subscriptions__feature--icon">
                <FontAwesomeIcon icon={faFileLines} size="3x" />
              </figure>
              <div className="subscriptions__feature--text">
                <b>Key ideas in a few mins</b> with many books to read
              </div>
            </div>
            <div className="subscriptions__feature">
              <figure className="subscriptions__feature--icon">
                <FontAwesomeIcon icon={faSeedling} size="3x" />
              </figure>
              <div className="subscriptions__feature--text">
                <b>3 million</b> people growing with Summarist every day
              </div>
            </div>
            <div className="subscriptions__feature">
              <figure className="subscriptions__feature--icon">
                <FontAwesomeIcon icon={faHandshake} size="3x" />
              </figure>
              <div className="subscriptions__feature--text">
                <b>Precise recommendations</b> collections curated by experts
              </div>
            </div>
          </div>
          <div className="section__title">Choose the plan that fits you</div>
          <div
            className={`plan__card ${selectedPlan === "yearly" ? "plan__card--active" : ""}`}
            onClick={() => setSelectedPlan("yearly")}
          >
            <div className="plan__card--circle">
              {selectedPlan === "yearly" && (
                <div className="plan__card--dot"></div>
              )}
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
          <div className="plan__card--separator">or</div>
          <div
            className={`plan__card ${selectedPlan === "monthly" ? "plan__card--active" : ""}`}
            onClick={() => setSelectedPlan("monthly")}
          >
            <div className="plan__card--circle">
              {selectedPlan === "monthly" && (
                <div className="plan__card--dot"></div>
              )}
            </div>
            <div className="plan__card--content">
              <div className="plan__card--title">Premium Monthly</div>
              <div className="plan__card--price">$9.99/month</div>
              <div className="plan__card--text"> No trial included</div>
            </div>
          </div>
          <div className="plan__card--cta">
            <span className="btn--wrapper">
              <button
                onClick={() => upgradeToPremium()}
                className="btn"
                style={{ width: "300px" }}
              >
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
                <button
                  type="button"
                  className="accordion__card--toggle"
                  onClick={() => toggleAccordion(0)}
                >
                  <FontAwesomeIcon
                    icon={openAccordion === 0 ? faChevronUp : faChevronDown}
                  />
                </button>
              </div>
              <div
                className={`accordion__content ${openAccordion === 0 ? "accordion__content--open" : ""}`}
              >
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
                <button
                  type="button"
                  className="accordion__card--toggle"
                  onClick={() => toggleAccordion(1)}
                >
                  <FontAwesomeIcon
                    icon={openAccordion === 1 ? faChevronUp : faChevronDown}
                  />
                </button>
              </div>
              <div
                className={`accordion__content ${openAccordion === 1 ? "accordion__content--open" : ""}`}
              >
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
                <button
                  type="button"
                  className="accordion__card--toggle"
                  onClick={() => toggleAccordion(2)}
                >
                  <FontAwesomeIcon
                    icon={openAccordion === 2 ? faChevronUp : faChevronDown}
                  />
                </button>
              </div>
              <div
                className={`accordion__content ${openAccordion === 2 ? "accordion__content--open" : ""}`}
              >
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
                <button
                  type="button"
                  className="accordion__card--toggle"
                  onClick={() => toggleAccordion(3)}
                >
                  <FontAwesomeIcon
                    icon={openAccordion === 3 ? faChevronUp : faChevronDown}
                  />
                </button>
              </div>
              <div
                className={`accordion__content ${openAccordion === 3 ? "accordion__content--open" : ""}`}
              >
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
