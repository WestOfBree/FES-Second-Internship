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

const Slider = ({ books }) => {

  return (
    <Swiper
      modules={[Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
        1200: {
          slidesPerView: 4
        }
      }}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {books.map((book, index) => (
        <SwiperSlide key={index}>
            <Router href={`/ForYou/${book.id}`}>
              <Book {...book} />
            </Router>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
