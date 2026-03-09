"use client";
import Sidebar from "@/Components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faMicrophone,
  faBookmark,
  faStar,
  faLightbulb,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import SearchBar from "@/Components/SearchBar";
import "./styles.css";
import { use, useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

interface BookInfoProps {
  id: string;
  title: string;
  author: string;
  subtitle: string;
  averageRating: number;
  totalRatings: number;
  duration: string;
  type: string;
  bookDescription: string;
  authorDescription: string;
  tags: string[];
  imageLink: string;
  keyIdeas: number;
}

export default function BookInfo({params}: {params: Promise<{bookId: string}>}) {
      const { bookId } = use(params);
        const [bookInfo, setBookInfo] = useState<BookInfoProps | null>(null);
      const [isLoading, setIsLoading] = useState(true);
console.log(bookId);

      useEffect(() => {
        axios.get(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${bookId}`)
          .then(response => {
            setBookInfo(response.data);
            setIsLoading(false);
            console.log(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            setIsLoading(false);
          });
      }, []);
  // if (!book) {
  //   return (
  //     <>
  //       <div className="wrapper">
  //         <SearchBar />
  //       </div>
  //       <div className="sidebar__overlay">
  //         <Sidebar />
  //       </div>
  //       <div className="row">
  //         <div className="container">
  //           <div className="inner__wrapper">
  //             <div>Book not found</div>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }

  return (
    <>
      <div className="wrapper">
        <SearchBar />
      <div className="sidebar__overlay">
        <Sidebar />
      </div>
      <div className="row">
        <div className="container">
          <div className="inner__wrapper">
            <div className="inner__book">
              <div className="inner-book__title">{bookInfo?.title}</div>
              <div className="inner-book__author">{bookInfo?.author}</div>
              <div className="inner-book__subtitle">{bookInfo?.subtitle}</div>
              <div className="inner-book__wrapper">
                <div className="inner-book__description--wrapper">
                  <div className="inner-book__description">
                    <div className="inner-book__icon">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="inner-book__overall--rating">
                      {bookInfo?.averageRating}
                    </div>
                    <div className="inner-book__total--rating">
                      ({bookInfo?.totalRatings} ratings)
                    </div>
                  </div>
                  <div className="inner-book__description">
                    <div className="inner-book__icon">
                      <FontAwesomeIcon icon={faClock} />
                    </div>
                    <div className="inner-book__duration">{bookInfo?.duration}</div>
                  </div>
                  <div className="inner-book__description">
                    <div className="inner-book__icon">
                      <FontAwesomeIcon icon={faMicrophone} />
                    </div>
                    <div className="inner-book__type">{bookInfo?.type}</div>
                  </div>
                  <div className="inner-book__description">
                    <div className="inner-book__icon">
                      <FontAwesomeIcon icon={faLightbulb} />
                    </div>
                    <div className="inner-book__key--ideas">
                       {bookInfo?.keyIdeas} Key Ideas
                    </div>
                  </div>
                </div>
              </div>
              <div className="inner-book__read--btn-wrapper">
                <Link href={`ForYou/${bookId}/player`}>
                  <button className="inner-book__read--btn">
                    <div className="inner-book__read--icon">
                      <FontAwesomeIcon icon={faBook} />
                    </div>
                    <div className="inner-book__read--text">Read Now</div>
                  </button>
                </Link>
                <Link href={`/5bxl50cz4bt/player?bookId=5bxl50cz4bt`}>
                  <button className="inner-book__read--btn">
                    <div className="inner-book__read--icon">
                      <FontAwesomeIcon icon={faMicrophone} />
                    </div>
                    <div className="inner-book__read--text">Listen Now</div>
                  </button>
                </Link>
              </div>
              <div className="inner-book__bookmark">
                <div className="inner-book__bookmark--icon">
                  <FontAwesomeIcon icon={faBookmark} />
                </div>
                <div className="inner-book__bookmark--text">
                  Add to My Library
                </div>
              </div>
              <div className="inner-book__secondary--title">
                What is this book about?
              </div>
              <div className="inner-book__tags--wrapper">
                
                  <div className="inner-book__tag">
                    #tag1
                  </div>
              </div>
              <div className="inner-book__book--description">
                {bookInfo?.bookDescription}
              </div>
              <h2 className="inner-book__secondary--title">About the Author</h2>
              <div className="inner-book__author--description">
                {bookInfo?.authorDescription}
              </div>
            </div>
            <div className="inner-book--image-wrapper">
              <figure
                className="book__image--wrapper"
                style={{ height: "300px", width: "240px", minWidth: "240px" }}
              >
                <img
                  className="book__image"
                  src={`${bookInfo?.imageLink}`}
                  alt="Book Cover"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
