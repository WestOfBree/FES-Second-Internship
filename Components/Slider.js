"use client";
import React from "react";
import { Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Book from "./Book";
import {books} from "../public/data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default () => {
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
          <Book {...book} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

