import React from "react";
import Footer from "../components/Footer";
import MattProductInfo from "../components/MattProductInfo";
import OfferSwiper from "../components/OfferSwiper";
import HeroSlider from "../components/HeroSlider";
import Hamburger from "../components/Hamburger";

const Homepage = () => {
  return (
    <>
      <div className=" bg-[#130f0c]">
        <HeroSlider />
        <MattProductInfo />
        {/* <ChefProductSwiper /> */}
        <OfferSwiper />
        {/* <MenuItem /> */}
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
