import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import SliderImages from "../assets/images/slide4_image_1.png";
import NamePlate from "./MattNamePlate";
import Hamburger from "./Hamburger";
import "./HeroSlider.css";

const HeroSlider = () => {
  return (
    <div className="w-full relative">
      <Hamburger />
      <Swiper
        className="heroSwiper"
        spaceBetween={50}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <NamePlate />
          <img className="w-full h-auto" src={SliderImages} alt="img1" />
        </SwiperSlide>
        <SwiperSlide>
          <NamePlate />
          <img className="w-full h-auto" src={SliderImages} alt="img2" />
        </SwiperSlide>
        <SwiperSlide>
          <NamePlate />
          <img className="w-full h-auto" src={SliderImages} alt="img3" />
        </SwiperSlide>
        <SwiperSlide>
          <NamePlate />
          <img className="w-full h-auto" src={SliderImages} alt="img4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
