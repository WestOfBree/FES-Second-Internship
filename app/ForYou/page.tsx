"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
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

type BookItem = {
  id?: string | number;
  [key: string]: unknown;
};

export default function ForYou() {
  const [isOpen, setIsOpen] = useState(false);
  const [recommendedBooks, setRecommendedBooks] = useState<BookItem[]>([]);
  const [suggestedBooks, setSuggestedBooks] = useState<BookItem[]>([]);
  const [selectedBook, setSelectedBook] = useState<BookItem[]>([]);

  useEffect(() => {
    axios
      .get(
        "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=selected",
      )
      .then((response) => {
        setSelectedBook(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended",
      )
      .then((response) => {
        setRecommendedBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        "https://us-central1-summaristt.cloudfunctions.net/getBooks?status=suggested",
      )
      .then((response) => {
        setSuggestedBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  // function openSidebar() {
  //   const sidebar = document.querySelector(".sidebar");
  //   const overlay = document.querySelector(".sidebar__overlay");
  //   overlay?.classList.remove("sidebar__overlay--hidden");
  //   sidebar?.classList.add("sidebar--open");
  // }

  // function closeSidebar() {
  //   const sidebar = document.querySelector(".sidebar");
  //   const overlay = document.querySelector(".sidebar__overlay");
  //   overlay?.classList.add("sidebar__overlay--hidden");
  //   sidebar?.classList.remove("sidebar--open");
  // }

  return (
    <div className="wrapper">
      <header>
        <SearchBar setIsOpen={setIsOpen} />
      </header>
      <Sidebar />
      <main className="row" id="main-content">
        <div className="container">
          <div className="for-you__wrapper">
            <h1 className="visually-hidden">For You</h1>

            <section aria-labelledby="selected-for-you-heading">
              <h2 className="for-you__title" id="selected-for-you-heading">
                Selected just for you
              </h2>
              <SelectedBook selectedBook={selectedBook} />
            </section>

            <section aria-labelledby="recommended-for-you-heading">
              <h2 className="for-you__title" id="recommended-for-you-heading">
                Recommended For You
              </h2>
              <p className="for-you__sub-title">We think you&apos;ll like these...</p>
              <div className="for-you__recommended--books">
                <Slider books={recommendedBooks} />
                {isOpen && <LoginModule isOpen={isOpen} setIsOpen={setIsOpen} />}
            </div>
            </section>

            <section aria-labelledby="suggested-books-heading">
              <h2 className="for-you__title" id="suggested-books-heading">
                Suggested Books
              </h2>
              <p className="for-you__sub-title">Browse other books</p>
              <div className="for-you__recommended--books">
                <Slider books={suggestedBooks} />
                {isOpen && <LoginModule isOpen={isOpen} setIsOpen={setIsOpen} />}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
