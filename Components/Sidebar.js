"use client";
import {
  faMagnifyingGlass,
  faBookBookmark,
  faHouse,
  faPen,
  faPersonThroughWindow,
  faGear,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sidebar.modal.css";
import logo from "../public/logo.png";
import Router from "next/link";
import { auth } from "@/app/Firebase/init";
import { signOut } from "firebase/auth";
import { useState } from "react";
import Link from "next/link";

function logout() {
  signOut(auth)
    .then(() => {
      console.log("User signed out successfully");
    })
    .catch((error) => {
      console.error("Error signing out: ", error);
    });
}


export default function Sidebar( ) {
  function closeSidebar() {
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".sidebar__overlay");
    overlay?.classList.add("sidebar__overlay--hidden");
    sidebar?.classList.remove("sidebar--open");
  }


  const [sidebarHeight, setSidebarHeight] = useState("100vh");

  useState(() => {
    if (typeof window !== "undefined") {
      const isPlayerPage = window.location.pathname.includes("/Player");
      setSidebarHeight(isPlayerPage ? "calc(-240px + 100vh)" : "");
    }
  }, []);

  return (
    <>
      <div onClick={closeSidebar} className="sidebar__overlay sidebar__overlay--hidden"></div>
      <div className="sidebar" >
        <div className="sidebar__header">
          <Router href="/Landing"><img className="sidebar__header--icon" src={logo.src} alt="logo" /></Router>
        </div>
        <div className="sidebar__wrapper" style={{ height: sidebarHeight }}>
          <div className="sidebar__menu--top">
            <Router href="/ForYou" className="sidebar__link--wrapper">
              <div className="sidebar__link--line"></div>
              <div className="sidebar__icon--wrapper">  <FontAwesomeIcon icon={faHouse} />  </div> For you
            </Router>
          <Router href="/MyLibrary" className="sidebar__link--wrapper">
            <div className="sidebar__link--line"></div>
            <div className="sidebar__icon--wrapper"> <FontAwesomeIcon icon={faBookBookmark} /> </div> My Library
          </Router>
          <a className="sidebar__link--wrapper no-click">
            <div className="sidebar__link--line"></div>
            <div className="sidebar__icon--wrapper"> <FontAwesomeIcon icon={faPen} /> </div> Highlights
          </a>
          <a className="sidebar__link--wrapper no-click">
            <div className="sidebar__link--line"></div>
            <div className="sidebar__icon--wrapper"> <FontAwesomeIcon icon={faMagnifyingGlass} /> </div> Search
          </a>
        </div>
        <div className="sidebar__menu--bottom">
          <Router href="/Settings" className="sidebar__link--wrapper">
            <div className="sidebar__link--line"></div>
            <div className="sidebar__icon--wrapper"> <FontAwesomeIcon icon={faGear} /> </div> Settings
          </Router>
          <a className="sidebar__link--wrapper no-click">
            <div className="sidebar__link--line"></div>
            <div className="sidebar__icon--wrapper"> <FontAwesomeIcon icon={faQuestionCircle} /> </div> Help
          </a>
          <Router href="/" onClick={() => {logout()}} className="sidebar__link--wrapper">
            <div className="sidebar__link--line"></div>
            <div className="sidebar__icon--wrapper"> <FontAwesomeIcon icon={faPersonThroughWindow} /> </div>
            Logout
          </Router>
        </div>
      </div>
    </div>
    </>
  );
}
