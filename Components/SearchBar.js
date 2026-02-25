import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.modal.css";
export default function SearchBar() {
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
                      />
                      <div className="search__icon">
                        <FontAwesomeIcon
                          className="search__icon--svg"
                          icon={faMagnifyingGlass}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            );
}