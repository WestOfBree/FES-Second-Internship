import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.modal.css";
import { useRef } from "react";
import Link from "next/link";

export default function SearchBar({ bookInfo }) {
  const debounceTimeout = 2000;

  const SearchBarResult = () => {
    const timeoutRef = useRef(null);

    const handleSearch = (event) => {
      const query = event.target.value;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        const searchUrl = `https://us-central1-summaristt.cloudfunctions.net/getBooksByAuthorOrTitle?search=${query}`;
        console.log("Search URL:", searchUrl);
      }, debounceTimeout);
    };
  
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
                        onKeyDown={handleSearch}
                      />
                      <div className="search__icon">
                        <FontAwesomeIcon
                          className="search__icon--svg"
                          icon={faMagnifyingGlass}
                        />
                      </div>
                    </div>
                  </div>
                <div className="search__results--wrapper">
                  <Link className="search__result--link" href={`/book/${bookInfo?.id || "1"}`}>
                  <audio className="search__result--audio"></audio>
                  <figure className="search__result--image-mask">
                    <img src={bookInfo?.imageLink} alt={bookInfo?.title} />
                    </figure>
                    <div className="search__result--info-wrapper">
                    <div className="search__result--title">{bookInfo?.title}</div>
                    <div className="search__result--author">{bookInfo?.author}</div>
                    <div className="search__result--duration">{bookInfo?.duration}</div>
                    </div>
                  </Link>
                  </div>
                </div>
              </div>
            </div>
            );
  };
  return <SearchBarResult />;
}
