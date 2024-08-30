import React from "react";
import ChefProductSwiper from "./ChefProductSwiper";

import leafs from "../assets/images/leafs.png";
// import product1 from "../assets/images/Ellipse5.png";
// import product2 from "../assets/images/Ellipse6.png";
// import product3 from "../assets/images/Ellipse7.png";
// import product4 from "../assets/images/Ellipse8.png";
import aero from "../assets/images/VectorAero.png";
import aeroRight from "../assets/images/Vectoraeroright.png";

const MattProductInfo = () => {
  return (
    <>
      <div className="ml-[150px]">
        <div className="top-[798px] left-[158px] -mt-[160px]">
          <img src={leafs} className="w-[319px] h-[319px] " alt="leafs pic" />
        </div>
        <div className="w-[414px] h-[57px] top-[1091px] left-[795px]">
          <h2 className="relative bottom-[87px] left-16 text-[#D29A5A] text-[38px] font-[400] items-center border-b-4 border-[#D29A5A]">
            CHEF MATT PRODUCTS
          </h2>
        </div>
        <div className="w-[575px] mt-10">
          <h3 className="text-white text-[18px] z-50 relative bottom-[87px] left-16 font-[400] leading-[27px]">
            Shop Gourmet Chef Quality products from the Chef Matt brand. Chef it
            yourself and Thank us later.
          </h3>
        </div>
        <div className="flex absolute mt-24 ml-10">
          <img src={aero} alt="aero" />
          <img src={aero} alt="aero" />
        </div>
        <div className="w-[1100px] top-[332px] flex justify-center items-center pl-20">
          <ChefProductSwiper />
        </div>
        <div className="relative w-full bottom-[215px] flex justify-end items-center -ml-40 ">
          <img src={aeroRight} alt="aero" />
          <img src={aeroRight} alt="aero" />
        </div>
      </div>
    </>
  );
};

export default MattProductInfo;
