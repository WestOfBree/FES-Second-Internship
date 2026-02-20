import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import Sidebar from "@/Components/Sidebar";

export default function ForYou() {
  return (
    <>
      <div className="wrapper">
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
      </div>
      <div className="sidebar__overlay">
        <Sidebar />
      </div>
    </>
  );
}
