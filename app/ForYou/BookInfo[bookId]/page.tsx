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
import { books } from "@/public/data";

export default function BookInfo({ params }: { params: { bookId: string } }) {
  const book = books.find((b) => b.id === parseInt(params.bookId));
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
                    <div className="inner-book__icon">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="inner-book__overall--rating">4.5</div>
                    <div className="inner-book__total--rating">
                      (783 ratings)
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
                    <div className="inner-book__type">Audio & Text</div>
                  </div>
                  <div className="inner-book__description">
                    <div className="inner-book__icon">
                      <FontAwesomeIcon icon={faLightbulb} />
                    </div>
                    <div className="inner-book__key--ideas">4 Key Ideas</div>
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
                  Add title to My Library
                </div>
              </div>
              <div className="inner-book__secondary--title">
                What is this book about?
              </div>
              <div className="inner-book__tags--wrapper">
                <div className="inner-book__tag">#Tag1</div>
                <div className="inner-book__tag">#Tag2</div>
                <div className="inner-book__tag">#Tag3</div>
              </div>
              <div className="inner-book__book--description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, ad ipsum quis dolorem quo sequi minus in dolorum nam
                ex consectetur eum sapiente asperiores ea, possimus quos amet
                pariatur praesentium! Necessitatibus voluptates aspernatur,
                ullam accusantium quo modi sequi atque omnis quaerat nulla
                nesciunt officiis dolorum iusto optio amet reiciendis, nemo
                error porro at nam quasi! Rerum ex eius ducimus at incidunt quae
                ab harum id accusantium tempore quaerat, cumque exercitationem
                illum sunt quisquam quod aliquam, consequuntur alias est!
                Accusamus eius laboriosam eligendi magnam blanditiis aut
                delectus aperiam eum, officia, rem ipsa et id ducimus dolores
                totam aliquam sed! Facere, quos.
              </div>
              <h2 className="inner-book__secondary--title">About the Author</h2>
              <div className="inner-book__author--description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
                molestiae dolore! Impedit eum beatae numquam? Suscipit nostrum,
                iure facilis nobis ipsum nulla cumque sunt, et explicabo cum
                numquam assumenda accusantium, optio ducimus. Consequuntur
                asperiores error beatae unde nihil ratione, deserunt porro
                eveniet. Praesentium quaerat dolor sit, blanditiis beatae ex
                corporis sed molestiae cumque vero provident quas iure delectus
                est aliquid rerum nobis asperiores, doloribus minima architecto
                sequi amet facere itaque impedit. Ab officiis provident vero,
                voluptates animi ipsam sunt nam possimus exercitationem
                incidunt. Natus a, molestiae tempore ipsa ex commodi odio
                laborum, aliquam laboriosam cumque delectus, vero aspernatur
                placeat soluta.
              </div>
            </div>
            <div className="inner-book--image-wrapper">
              <figure
                className="book__image--wrapper"
                style={{ height: "300px", width: "240px", minWidth: "240px" }}
              >
                <img
                  className="book__image"
                  src="https://d29xot63vimef3.cloudfront.net/image/jrr-tolkien-books/7-8.jpg"
                  alt="Book Cover"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
