import "./AudioPlayer.modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRotateBack,
  faArrowRotateForward,
  faCirclePlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function AudioPlayer({ bookInfo }) {
  const audioRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const togglePlay = async () => {
    try {
      if (audioRef.current) {
        if (isPlaying) {
          await audioRef.current.pause();
        } else {
          await audioRef.current.play();
        }
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error("Error playing audio:", error);
    }
  };
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
    }
  };

  React.useEffect(() => {
    console.log(audioRef);
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, [bookInfo]);

  return (
    <>
      <audio className="audio__player" ref={audioRef}>
        <source src={bookInfo?.audioLink || null} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="audio__track--wrapper">
        <figure className="audio__track--image-mask">
          <figure className="audio__track--image-border">
            <img
              className="audio__track--image"
              src={
                bookInfo?.imageLink ||
                "https://www.thebookdesigner.com/wp-content/uploads/2024/05/J.R.R.Tolkien-The-Hobbit.png"
              }
              alt="Book Cover"
              style={{ height: "48px", width: "48px" }}
            />
          </figure>
        </figure>
        <div className="audio__track--info-wrapper">
          <div className="audio__track--title">
            {bookInfo?.title || "Book Title"}
          </div>
          <div className="audio__track--author">
            {bookInfo?.author || "Author Name"}
          </div>
        </div>
      </div>
      <div className="audio__controls--wrapper">
        <div className="audio__controls">
          <button className="audio__control--button">
            <FontAwesomeIcon
              icon={faArrowRotateBack}
              style={{
                height: "26px",
                width: "26px",
                color: "#fff",
                paddingTop: "5px",
              }}
            />
          </button>
          <button className="audio__control--button" onClick={togglePlay}>
            <FontAwesomeIcon
              icon={isPlaying ? faPause : faCirclePlay}
              style={{ height: "40px", width: "40px", color: "#fff" }}
            />
          </button>
          <button className="audio__control--button">
            <FontAwesomeIcon
              icon={faArrowRotateForward}
              style={{
                height: "26px",
                width: "26px",
                color: "#fff",
                paddingTop: "5px",
              }}
            />
          </button>
        </div>
      </div>
      <div className="audio__progress--wrapper">
        <div className="audio__time"> 00:00</div>
        <input
          onChange={(e) => {handleTimeUpdate(e)}}
          type="range"
          className="audio__progress--bar"
          min="0"
          max="204.048"
          value="0"
          style={{
            background:
              "linear-gradient(to right, rgb(43, 217, 124) 0%, rgb(109.120,125)0%); --range-progress: 0%",
          }}
        />
        <div className="audio__time">00:00</div>
      </div>
    </>
  );
}
