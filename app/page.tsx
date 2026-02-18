'use client'
import "./globals.css";
import NavBar from "../Components/NavBar";
import HomePage from "./Home/page";
import Footer from "../Components/Footer";
import type { ComponentType } from "react";
import { auth } from './Firebase/init';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useState, type Dispatch, type SetStateAction } from "react";

const FooterComponent = Footer as unknown as ComponentType<any>;
const NavBarComponent = NavBar as unknown as ComponentType<{ login: () => void; logout: () => void }>;

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function register() {
    // Registration logic using auth
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Successfully registered
        const user = userCredential.user;
        console.log('User registered:', user);
      })
      .catch((error: any) => {
        console.error('Error registering user:', error);
      });
  }

  function login() {
    // Login logic using auth
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User logged in:', user);
      })
      .catch((error: any) => {
        console.error('Error logging in:', error);
      });
    console.log('Login function called');
  }

  function logout() {
    // Logout logic using auth
    signOut(auth)
      .then(() => {
        console.log('User signed out');
      })
      .catch((error: any) => {
        console.error('Error signing out:', error);
      });
  }

  return (
    <div>
      <NavBarComponent login={login} logout={logout} />
      <HomePage />
      <FooterComponent />
    </div>
  );
}
