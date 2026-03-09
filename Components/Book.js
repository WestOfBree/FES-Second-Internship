import "./Book.modal.css";
import { FaStar, FaClock} from "react-icons/fa";
import { Router } from "next/link";

export default function Book({ title, author, subtitle, duration, averageRating, imageLink, subscriptionRequired }) {
  return (
    <>
        <div className="for-you__recommended--books-link">
          {subscriptionRequired ? <div className="book__pill book__pill--subscription-required">Premium</div> : null}
          <figure
            className="book__image--wrapper"
            style={{ marginBottom: "8px" }}
          >
          <img
            className="book__image"
            src={imageLink}
            alt={`Cover of ${title}`}
          />
        </figure>
          <div className="recommended__book--title">{title}</div>
          <div className="recommended__book--author">by {author}</div>
          <div className="recommended__book--sub-title">{subtitle}</div>
          <div className="recommended__book--details-wrapper">
            <div className="recommended__book--details">
            <div className="recommended__book--details-icon"><FaClock /></div>
            <div className="recommended__book--details-text">{duration}</div>
            </div>
          <div className="recommended__book--details">
            <div className="recommended__book--details-icon"><FaStar /></div>
            <div className="recommended__book--details-text">{averageRating}</div>
            </div>
          </div>
        </div>
    </>
  );
}
