"use client";
import { faMagnifyingGlass, faPlay } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import Sidebar from "@/Components/Sidebar";
import Slider from "@/Components/Slider";
import SearchBar from "@/Components/SearchBar";
import { useEffect, useState } from "react";
import LoginModule from "@/Components/LoginModule";
import axios from "axios";

export default function ForYou() {
  const [isOpen, setIsOpen] = useState(false);
    const [recommendedBooks, setRecommendedBooks] = useState([]);
    const [suggestedBooks, setSuggestedBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
      useEffect(() => {
        axios.get('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended')
          .then(response => {
            setRecommendedBooks(response.data);
            setIsLoading(false);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            setIsLoading(false);
          });
      }, []);
            useEffect(() => {
        axios.get('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested')
          .then(response => {
            setSuggestedBooks(response.data);
            setIsLoading(false);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            setIsLoading(false);
          });
      }, []);

  return (
    <>
      <div className="wrapper">
        <SearchBar />
        <div className="sidebar__overlay">
          <Sidebar />
        </div>
        <div className="row">
          <div className="container">
            <div className="for-you__wrapper">
              <div className="for-you__title"> Selected just for you </div>
              <a href="#" className="selected__book">
                <div className="selected__book--subtitle">
                  Book summary goes here
                </div>
                <div className="selected__book--divider"></div>
                <div className="selected__book--content">
                  <figure
                    className="book__image--wrapper"
                    style={{
                      height: "140px",
                      width: "140px",
                      minWidth: "140px",
                    }}
                  >
                    <img
                      className="book__image"
                      src="https://images-na.ssl-images-amazon.com/images/I/41N9Zy8n2L._SX331_BO1,204,203,200_.jpg"
                      alt="Book Cover"
                    />
                  </figure>
                  <div className="selected__book--details">
                    <h3 className="selected__book--title">Book Title</h3>
                    <p className="selected__book--author">Author Name</p>
                    <div className="selected__book--duration-wrapper">
                      <div className="selected__book--play-button">
                        <FontAwesomeIcon icon={faPlay} />
                      </div>
                      <div className="selected__book--duration">10 min</div>
                    </div>
                  </div>
                </div>
              </a>
              <div>
                {/* probably move this to its own component to reuse */}
                <div className="for-you__title"> Recommended For You </div>
                <div className="for-you__sub-title">
                  We think you'll like these...
                </div>
                <div className="for-you__recommended--books">
                  <Slider setIsOpen={setIsOpen} books={recommendedBooks} />
                  {isOpen && <LoginModule isOpen={isOpen} setIsOpen={setIsOpen} />}
                </div>
              </div>
              <div>
                <div className="for-you__title"> Suggested Books </div>
                <div className="for-you__sub-title">Browse other books</div>
                <div className="for-you__recommended--books">
                  <Slider setIsOpen={setIsOpen} books={suggestedBooks} />
                  {isOpen && <LoginModule isOpen={isOpen} setIsOpen={setIsOpen} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
