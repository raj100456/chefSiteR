import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import OfferPage from "./Productoffer";
import "./OfferSwiper.css";

function OfferSwiper() {
  return (
    <div className="w-full">
      <Swiper
        className="offerSwiper"
        spaceBetween={-1}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="">
          <OfferPage />
        </SwiperSlide>
        <SwiperSlide className="">
          <OfferPage />
        </SwiperSlide>
        <SwiperSlide className="">
          <OfferPage />
        </SwiperSlide>
        <SwiperSlide className="">
          <OfferPage />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default OfferSwiper;
