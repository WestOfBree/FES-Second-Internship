'use client'
import "./globals.css";
import NavBar from "../Components/NavBar";
import HomePage from "./Home/page";
import Footer from "../Components/Footer";
import type { ComponentType } from "react";
import { auth } from './Firebase/init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useState, type Dispatch, type SetStateAction } from "react";
import '@fortawesome/fontawesome-svg-core/styles.css'; 
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically



export default function Home() {
 

  return (
    <div>
      <NavBar />
      <HomePage />
      <Footer/>
    </div>
  );
}
