import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import product1 from "../assets/images/Ellipse5.png";
import product2 from "../assets/images/Ellipse6.png";
import product3 from "../assets/images/Ellipse7.png";
import product4 from "../assets/images/Ellipse8.png";
import Item from "./ChefProduct";

function ChefProductSwiper() {
  return (
    <div className="w-full">
      <Swiper
        className="ml-32 mr-16"
        spaceBetween={-10}
        onNavigationShow={true}
        onPaginationRender={true}
        slidesPerView={4}
        autoplay
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="">
          <Item
            productImg={product1}
            Name="CINNAMON HONEY"
            oldPrice="$12.00"
            newPrice=" $9.00"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Item
            productImg={product2}
            Name="COCONUT OIL"
            oldPrice="$20.00"
            newPrice=" $15.00"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Item
            productImg={product3}
            Name="MANGO HONEY"
            oldPrice="$9.00"
            newPrice=" $6.00"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Item
            productImg={product4}
            Name="HONEY HABANERO"
            oldPrice="$12.00"
            newPrice=" $9.00"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Item
            productImg={product1}
            Name="CINNAMON HONEY"
            oldPrice="$12.00"
            newPrice=" $9.00"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Item
            productImg={product2}
            Name="COCONUT OIL"
            oldPrice="$20.00"
            newPrice=" $15.00"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Item
            productImg={product3}
            Name="MANGO HONEY"
            oldPrice="$9.00"
            newPrice=" $6.00"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Item
            productImg={product4}
            Name="HONEY HABANERO"
            oldPrice="$12.00"
            newPrice=" $9.00"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Item
            productImg={product1}
            Name="CINNAMON HONEY"
            oldPrice="$12.00"
            newPrice=" $9.00"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Item
            productImg={product2}
            Name="COCONUT OIL"
            oldPrice="$20.00"
            newPrice=" $15.00"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Item
            productImg={product3}
            Name="MANGO HONEY"
            oldPrice="$9.00"
            newPrice=" $6.00"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Item
            productImg={product4}
            Name="HONEY HABANERO"
            oldPrice="$12.00"
            newPrice=" $9.00"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Item
            productImg={product1}
            Name="CINNAMON HONEY"
            oldPrice="$12.00"
            newPrice=" $9.00"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Item
            productImg={product2}
            Name="COCONUT OIL"
            oldPrice="$20.00"
            newPrice=" $15.00"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Item
            productImg={product3}
            Name="MANGO HONEY"
            oldPrice="$9.00"
            newPrice=" $6.00"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Item
            productImg={product4}
            Name="HONEY HABANERO"
            oldPrice="$12.00"
            newPrice=" $9.00"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ChefProductSwiper;
