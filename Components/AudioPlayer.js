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
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

  const formatTime = (timeInSeconds) => {
    if (!Number.isFinite(timeInSeconds) || timeInSeconds < 0) {
      return "00:00";
    }
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const getProgressPercent = () => {
    if (!duration) {
      return 0;
    }
    return (currentTime / duration) * 100;
  };

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
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const handleSeek = (e) => {
    const seekTime = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
    setCurrentTime(seekTime);
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration || 0);
      setCurrentTime(audioRef.current.currentTime || 0);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleSkip = (direction) => {
    if (!audioRef.current) {
      return;
    }

    const skipAmount = 10;
    const nextUnclampedTime = audioRef.current.currentTime + direction * skipAmount;
    const hasDuration = Number.isFinite(audioRef.current.duration) && audioRef.current.duration > 0;

    const nextTime = hasDuration
      ? Math.min(Math.max(nextUnclampedTime, 0), audioRef.current.duration)
      : Math.max(nextUnclampedTime, 0);

    audioRef.current.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  React.useEffect(() => {
    console.log(audioRef);
    if (audioRef.current) {
      audioRef.current.load();
      setCurrentTime(0);
      setDuration(0);
      setIsPlaying(false);
    }
  }, [bookInfo]);

  return (
    <>
      <audio
        className="audio__player"
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      >
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
          <button className="audio__control--button" onClick={() => handleSkip(-1)}>
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
          <button className="audio__control--button" onClick={() => handleSkip(1)}>
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
        <div className="audio__time">{formatTime(currentTime)}</div>
        <input
          onChange={handleSeek}
          type="range"
          className="audio__progress--bar"
          min="0"
          max={duration || 0}
          value={currentTime}
          style={{
            background:
              `linear-gradient(to right, rgb(43, 217, 124) ${getProgressPercent()}%, rgb(109, 120, 125) ${getProgressPercent()}%)`,
          }}
        />
        <div className="audio__time">-{formatTime(duration - currentTime)}</div>
      </div>
    </>
  );
}
