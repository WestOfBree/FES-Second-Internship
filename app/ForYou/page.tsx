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
import SelectedBook from "@/Components/SelectedBook";

export default function ForYou() {
  const [isOpen, setIsOpen] = useState(false);
    const [recommendedBooks, setRecommendedBooks] = useState([]);
    const [suggestedBooks, setSuggestedBooks] = useState([]);
    const [selectedBook, setSelectedBook] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
          useEffect(() => {
        axios.get('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected')
          .then(response => {
            setSelectedBook(response.data);
            setIsLoading(false);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            setIsLoading(false);
          });
      }, []);
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
        <SearchBar setIsOpen={setIsOpen}/>
        <div className="sidebar__overlay">
          <Sidebar />
        </div>
        <div className="row">
          <div className="container">
            <div className="for-you__wrapper">
              <div className="for-you__title"> Selected just for you </div>
              <SelectedBook selectedBook={selectedBook} />
              <div>
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
