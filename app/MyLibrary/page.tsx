"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "@/Components/SearchBar";
import Sidebar from "@/Components/Sidebar";
import "./styles.css";
import { useEffect, useRef } from "react";

export default function MyLibrary() {
    const savedBooks = []; // Replace with actual data fetching logic
    const finishedBooks = []; // Replace with actual data fetching logic
    const hasShownAlert = useRef(false);
    
    useEffect(() => {
      if (!hasShownAlert.current) {
        alert("My Library page is under construction. Please check back later!");
        hasShownAlert.current = true;
      }
    }, []);
  return (
    <div className="wrapper">
      <SearchBar />
      <div className="sidebar__overlay">
        <Sidebar />
      </div>
      <div className="row">
        <div className="container">
            <div className="section__title page__title">Saved Books</div>
            <div className="sub-title">{savedBooks.length} items</div>
            {savedBooks.length === 0 ? <div className="empty-state">No saved books yet. Start exploring and save your favorites!</div> : (
              <div className="library__content">
                {/* Render saved books here */}
              </div>
            )}
            <div className="section__title page__title">Finished Books</div>
            {finishedBooks.length === 0 ? <div className="empty-state">No finished books yet. Start exploring and save your favorites!</div> : (
              <div className="library__content">
                {/* Render finished books here */}
              </div>
            )}
        </div>
      </div>
    </div>
  );
}