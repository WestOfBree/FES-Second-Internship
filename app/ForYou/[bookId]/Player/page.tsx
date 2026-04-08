"use client";
import SearchBar from "@/Components/SearchBar";
import AudioPlayer from "@/Components/AudioPlayer";
import Sidebar from "@/Components/Sidebar";
import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { use } from "react";

export default function Player({params}: {params: Promise<{bookId: string}>}) {
        const { bookId } = use(params);
        const [bookInfo, setBookInfo] = useState<any | null>(null);
        const [isLoading, setIsLoading] = useState(true);
        const [isOpen, setIsOpen] = useState(false);
  console.log(bookId);
  
        useEffect(() => {
          axios.get(`https://us-central1-summaristt.cloudfunctions.net/getBook?id=${bookId}`)
            .then(response => {
              setBookInfo(response.data);
              setIsLoading(false);
              console.log(response.data);
            })
            .catch(error => {
              console.error('Error fetching data:', error);
              setIsLoading(false);
            });
        }, [bookId]);
  return (
    <div className="wrapper">
      <SearchBar setIsOpen={setIsOpen}  />
      <Sidebar /> 
      <div className="summary">
        <div className="audio__book--summary">
          <div className="audio__book--summary-title">
            <b>{bookInfo?.title || "Book Title"}</b>
          </div>
        <div className="audio__book--summary-text">
          {bookInfo?.summary}
        </div>
        </div>
        <div className="audio__wrapper">
            <AudioPlayer bookInfo={bookInfo} />
        </div>
      </div>
    </div>
  );
}
