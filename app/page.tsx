'use client'
import "./globals.css";
import NavBar from "../Components/NavBar";
import Landing from "./Landing/page";
import Footer from "../Components/Footer";
import '@fortawesome/fontawesome-svg-core/styles.css'; 
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically



export default function Home() {
 

  return (
    <div>
      <NavBar />
      <Landing />
      <Footer/>
    </div>
  );
}
