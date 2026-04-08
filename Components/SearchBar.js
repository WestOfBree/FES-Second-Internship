import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.modal.css";
import { useRef } from "react";
import Router from "next/link";
import React from "react";
import { height } from "@fortawesome/free-brands-svg-icons/fa11ty";
import { useState } from "react";

export default function SearchBar( { setIsOpen } ) {
  const debounceTimeout = 1000;
  const [userQuery, setUserQuery] = React.useState("");
  const timeoutRef = useRef(null);
  const [searchResults, setSearchResults] = React.useState([]);

  const handleSearch = (event) => {
    const query = event.target.value;
    setUserQuery(query);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(async () => {
      const searchUrl = `https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${query}`;
      try {
        const response = await fetch(searchUrl);
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error("Search error:", error);
      }
    }, debounceTimeout);
  };
    function openSidebar() {
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".sidebar__overlay");
    overlay?.classList.remove("sidebar__overlay--hidden");
    sidebar?.classList.add("sidebar--open");
  }

  return (
    <div className="search__background">
      <div className="search__wrapper">
        <div className="search__content">
          <div className="search">
            <div className="search__input--wrapper">
              <input
                type="text"
                placeholder="Search for books..."
                className="search__input"
                onChange={handleSearch}
              />
              <div className="search__icon">
                <FontAwesomeIcon
                  className="search__icon--svg"
                  icon={faMagnifyingGlass}
                />
              </div>
            </div>
            <div className="sidebar__toggle"> 
              <FontAwesomeIcon
                className="sidebar__toggle--icon"
                icon={faBars}
                onClick={() => {
                  openSidebar();
                }}
              />
            </div>
          </div>
          {userQuery && (
            <div className="search__results--wrapper">
              {searchResults.map((result) => (
                <Router 
                  href={!result.subscriptionRequired ? `/ForYou/${result.id}` : "#"}
                  key={result.id}
                  className="search__result--link"
                  onClick={() => {
                    if (result.subscriptionRequired) {
                      setIsOpen(true);
                    }
                  }}
                >
                  <audio className="search__result--audio"></audio>
                  <figure className="search__result--image-mask">
                    {result.subscriptionRequired ? <div className="book__pill book__pill--subscription-required">Premium</div> : null}
                    <img src={result.imageLink} alt={result.title} style={{height: "80px", width: "80px", minWidth: "80px"}} />
                  </figure>
                  <div className="search__result--info-wrapper">
                    <div className="search__result--title">{result.title}</div>
                    <div className="search__result--author">{result.author}</div>
                    <div className="search__result--duration">{result.duration}</div>
                  </div>
                </Router>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
