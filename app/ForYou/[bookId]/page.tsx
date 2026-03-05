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

export default function BookInfo() {
  // const { bookId } = params;
  // const res = await fetch(`https://summarist.vercel.app/book/${bookId}`);
  // if (!res.ok) throw new Error('Failed to fetch book');
  // const book = await res.json();

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
              <div className="inner-book__title">title</div>
              <div className="inner-book__author">author</div>
              <div className="inner-book__subtitle">subtitle</div>
              <div className="inner-book__wrapper">
                <div className="inner-book__description--wrapper">
                  <div className="inner-book__description">
                    <div className="inner-book__icon">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="inner-book__overall--rating">
                      averageRating
                    </div>
                    <div className="inner-book__total--rating">
                      (totalRatings ratings)
                    </div>
                  </div>
                  <div className="inner-book__description">
                    <div className="inner-book__icon">
                      <FontAwesomeIcon icon={faClock} />
                    </div>
                    <div className="inner-book__duration">10 min</div>
                  </div>
                  <div className="inner-book__description">
                    <div className="inner-book__icon">
                      <FontAwesomeIcon icon={faMicrophone} />
                    </div>
                    <div className="inner-book__type">type</div>
                  </div>
                  <div className="inner-book__description">
                    <div className="inner-book__icon">
                      <FontAwesomeIcon icon={faLightbulb} />
                    </div>
                    <div className="inner-book__key--ideas">
                       Key Ideas
                    </div>
                  </div>
                </div>
              </div>
              <div className="inner-book__read--btn-wrapper">
                <button className="inner-book__read--btn">
                  <div className="inner-book__read--icon">
                    <FontAwesomeIcon icon={faBook} />
                  </div>
                  <div className="inner-book__read--text">Read Now</div>
                </button>
                <button className="inner-book__read--btn">
                  <div className="inner-book__read--icon">
                    <FontAwesomeIcon icon={faMicrophone} />
                  </div>
                  <div className="inner-book__read--text">Listen Now</div>
                </button>
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
                book description goes here. This is a brief summary of the book's content, highlighting the main themes and ideas presented in the book. It provides readers with an overview of what to expect and why they should read it.
              </div>
              <h2 className="inner-book__secondary--title">About the Author</h2>
              <div className="inner-book__author--description">
                authorDescription 
              </div>
            </div>
            <div className="inner-book--image-wrapper">
              <figure
                className="book__image--wrapper"
                style={{ height: "300px", width: "240px", minWidth: "240px" }}
              >
                <img
                  className="book__image"
                  src={"https://www.thebookdesigner.com/wp-content/uploads/2024/05/J.R.R.Tolkien-The-Hobbit.png"}
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
