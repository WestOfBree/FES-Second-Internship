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
import { books } from "@/public/data";
import "./styles.css";
import {collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/init";

interface Book {
  id: string;
  title: string;
  author: string;
  subtitle: string;
  averageRating: number;
  totalRatings: number;
  type: string;
  keyIdeas: number;
  imageLink: string;
  tags: string[];
  summary: string;
  authorDescription?: string;
}

async function getBook({ bookId }: { bookId: string; }): Promise<Book | undefined> {
    const booksCollection = collection(db, "books");
    const booksSnapshot = await getDocs(booksCollection);
    const booksList = booksSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Book));
    return booksList.find((b) => b.id === bookId);
    }

export default async function BookInfo({ params }: { params: Promise<{ bookId: string }> }) {
  const { bookId } = await params;
  const book = await getBook({ bookId });

  if (!book) {
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
              <div>Book not found</div>
            </div>
          </div>
        </div>
      </>
    );
  }

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
              <div className="inner-book__title">{book.title}</div>
              <div className="inner-book__author">{book.author}</div>
              <div className="inner-book__subtitle">{book.subtitle}</div>
              <div className="inner-book__wrapper">
                <div className="inner-book__description--wrapper">
                  <div className="inner-book__description">
                    <div className="inner-book__icon">
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="inner-book__overall--rating">
                      {book.averageRating}
                    </div>
                    <div className="inner-book__total--rating">
                      ({book.totalRatings} ratings)
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
                    <div className="inner-book__type">{book.type}</div>
                  </div>
                  <div className="inner-book__description">
                    <div className="inner-book__icon">
                      <FontAwesomeIcon icon={faLightbulb} />
                    </div>
                    <div className="inner-book__key--ideas">
                      {book.keyIdeas} Key Ideas
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
                  Add {book.title} to My Library
                </div>
              </div>
              <div className="inner-book__secondary--title">
                What is this book about?
              </div>
              <div className="inner-book__tags--wrapper">
                {book.tags.map((tag, index) => (
                  <div key={index} className="inner-book__tag">
                    #{tag}
                  </div>
                ))}
              </div>
              <div className="inner-book__book--description">
                {book.summary}
              </div>
              <h2 className="inner-book__secondary--title">About the Author</h2>
              <div className="inner-book__author--description">
                {book.authorDescription ||
                  `${book.author} is the author of "${book.title}". Learn more about this talented writer and their other works.`}
              </div>
            </div>
            <div className="inner-book--image-wrapper">
              <figure
                className="book__image--wrapper"
                style={{ height: "300px", width: "240px", minWidth: "240px" }}
              >
                <img
                  className="book__image"
                  src={book.imageLink}
                  alt={book.title}
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
