import React from "react";
import Footer from "../components/Footer";
import MenuItem from "../components/MenuItem";
// import Productoffer from "../components/Productoffer";
import OfferSwiper from "../components/OfferSwiper";
import ChefProductSwiper from "../components/ChefProductSwiper";
import MattProductInfo from "../components/MattProductInfo";
import HeroSlider from "../components/HeroSlider";

const Menupage = () => {
  return (
    <>
      <div className=" bg-[#130f0c]">
        <HeroSlider />
        <MattProductInfo />
        {/* <ChefProductSwiper /> */}
        <OfferSwiper />
        <MenuItem />
        <Footer />
      </div>
    </>
  );
};

export default Menupage;
