"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Router from "next/link";
import Image from "next/image";
export default function SelectedBook( { selectedBook } ) {
  if (!selectedBook || selectedBook.length === 0) {
    return null;
  }
  return (
    <Router href={`/ForYou/${selectedBook[0]?.id}`} className="selected__book">
                <div className="selected__book--subtitle">
                  {selectedBook[0]?.subTitle}
                </div>
                <div className="selected__book--divider"></div>
                <div className="selected__book--content">
                  <figure
                    className="book__image--wrapper"
                    style={{
                      height: "140px",
                      width: "140px",
                      minWidth: "140px",
                    }}
                  >
                    <Image
                      className="book__image"
                      src={selectedBook[0]?.imageLink}
                      alt="Book Cover"
                      width={140}
                      height={140}
                    />
                  </figure>
                  <div className="selected__book--details">
                    <h3 className="selected__book--title">{selectedBook[0]?.title || "Book Title"}</h3>
                    <p className="selected__book--author">{selectedBook[0]?.author || "Author Name"}</p>
                    <div className="selected__book--duration-wrapper">
                      <div className="selected__book--play-button">
                        <FontAwesomeIcon icon={faPlay} />
                      </div>
                      <div className="selected__book--duration">10 min</div>
                    </div>
                  </div>
                </div>
              </Router>
    );
}