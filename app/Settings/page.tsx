"use client";
import SearchBar from "@/Components/SearchBar";
import Sidebar from "@/Components/Sidebar";
import "./styles.css";
import { auth } from "../Firebase/init.js";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import LoginModule from "@/Components/LoginModule";
import Router from "next/router";
import { useRouter } from "next/navigation";
  
export default function Settings() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  if (currentUser?.isAnonymous) {
    return (
      <div className="wrapper">
        <SearchBar setIsOpen={setIsOpen} />
        <div className="sidebar__overlay">
          <Sidebar />
        </div>
        <div className="row">
          <div className="container">
            <div className="section__title page__title">Please Log In</div>
            <div className="settings__text">You need to be logged in to access settings.</div>
            <button className="btn" onClick={() => setIsOpen(true)} style={{ maxWidth: "400px" }}>Login</button>
            <LoginModule isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
        </div>
      );
    }
  else {
  return (
    <div className="wrapper">
      <SearchBar setIsOpen={setIsOpen} />
      <div className="sidebar__overlay">
        <Sidebar />
      </div>
      <div className="row">
        <div className="container">
          <div className="section__title page__title">Settings</div>
          <div className="settings__content">
            <div className="settings__sub-title">Subscription Plan</div>
            <div className="settings__text">Premium</div>
            <button className="btn" style={{ maxWidth: "400px" }} onClick={() => router.push("/Subscriptions")}>Manage Subscription</button>
          </div>
        <div className="settings__content">
          <div className="settings__sub-title">Email</div>
          <div className="settings__text">{currentUser?.email}</div>
        </div>
      </div>
    </div>
    </div>
  );
  }
}
