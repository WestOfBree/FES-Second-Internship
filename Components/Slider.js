"use client";
import React from "react";
import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Book from "./Book";
// import {books} from "../public/data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Router from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";


export default ({ setIsOpen, books }) => {
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      axios.get('https://us-central1-summaristt.cloudfunctions.net/getBooks?status=recommended')
        .then(response => {
          setRecommendedBooks(response.data);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setIsLoading(false);
        });
    }, []);
    
  return (
    <Swiper
      modules={[Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {books.map((book, index) => (
        <SwiperSlide key={index}>
          {book.subscriptionRequired ? <Router onClick={() => setIsOpen(true)}href="#"><Book  {...book} /></Router> : <Router href={`/ForYou/${book.id}`}><Book {...book} /></Router>}
          
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

