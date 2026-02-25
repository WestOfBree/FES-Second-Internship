import Sidebar from "@/Components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faMicrophone, faBookmark, faStar, faLightbulb, faClock } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import SearchBar from "@/Components/SearchBar";
import "./styles.css";

export default function BookInfo() {
  return (
    <>
      <div className="wrapper">
        <SearchBar />
      </div>
      <div className="sidebar__overlay">
        <Sidebar />
      </div>
      <div className="row">
        <div className="container">
          <div className="inner__wrapper">
            <div className="inner__book">
              <div className="inner-book__title">Title</div>
              <div className="inner-book__author">Author</div>
              <div className="inner-book__subtitle">Subtitle</div>
              <div className="inner-book__wrapper">
                <div className="inner-book__description--wrapper">
                  <div className="inner-book__description">
                    <div className="inner-book__icon"><FontAwesomeIcon icon={faStar} /></div>
                    <div className="inner-book__overall--rating">4.5</div>
                    <div className="inner-book__total--rating">(783 ratings)</div>
                  </div>
                  <div className="inner-book__description">
                    <div className="inner-book__icon"><FontAwesomeIcon icon={faClock} /></div>
                    <div className="inner-book__duration">10 min</div>
                  </div>
                  <div className="inner-book__description">
                    <div className="inner-book__icon"><FontAwesomeIcon icon={faMicrophone} /></div>
                    <div className="inner-book__type">Audio & Text</div>
                  </div>
                  <div className="inner-book__description">
                    <div className="inner-book__icon"><FontAwesomeIcon icon={faLightbulb} /></div>
                    <div className="inner-book__key--ideas">4 Key Ideas</div>
                  </div>
                </div>
                </div>
                <div className="inner-book__read--btn-wrapper">
                  <button className="inner-book__read--btn">
                    <div className="inner-book__read--icon"><FontAwesomeIcon icon={faBook} /></div>
                    <div className="inner-book__read--text">Read Now</div>
                  </button>
                  <button className="inner-book__read--btn">
                    <div className="inner-book__read--icon"><FontAwesomeIcon icon={faMicrophone} /></div>
                    <div className="inner-book__read--text">Listen Now</div>
                  </button>
                </div>
                <div className="inner-book__bookmark">
                    <div className="inner-book__bookmark--icon"><FontAwesomeIcon icon={faBookmark} /></div>
                    <div className="inner-book__bookmark--text">Add title to My Library</div>
                </div>
                <div className="inner-book__secondary--title">What is this book about?</div>
                <div className="inner-book__tags--wrapper">
                    <div className="inner-book__tag">#Tag1</div>
                    <div className="inner-book__tag">#Tag2</div>
                    <div className="inner-book__tag">#Tag3</div>
                </div>
                <div className="inner-book__description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl eget nunc.
                </div>
              </div>
                <div className="inner-book--image-wrapper">
              <figure
                className="book__image--wrapper"
                style={{ height: "300px", width: "240px", minWidth: "240px" }}
              >
                <img className="book__image" src="https://d29xot63vimef3.cloudfront.net/image/jrr-tolkien-books/7-8.jpg" alt="Book Cover" />
              </figure>
            </div>
            </div>
          </div>
        </div>
    </>
  );
}
