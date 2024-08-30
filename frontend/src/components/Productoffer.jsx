import React from "react";
import offer from "../assets/images/Rectangle7.png";

const Productoffer = () => {
  return (
    <div className="w-full lg:w-[1282px] ml-0 lg:ml-[150px] mt-16 h-[383px] mb-0">
      <h1 className="text-black absolute z-40 mt-10 align-middle pl-0 lg:pl-[520px] text-[24px] lg:text-[38px] flex justify-center items-center">
        ONLINE ONLY
      </h1>
      <h3 className="text-black absolute pr-24 -ml-28 z-40 mt-24 pl-0 lg:pl-[520px] text-[12px] lg:text-[15px]">
        GET 20% OFF YOUR ORDER OF $50 OR MORE Use code
        <span className="font-bold"> “Chef20”</span>
      </h3>

      <img className="w-full h-auto" src={offer} alt="offer page" />

      <div
        className="flex justify-center items-center 
    "
      >
        <div className="absolute z-40 border-[3px] mb-64 mr-26 -ml-26 border-[#161111] w-[200px] lg:w-[359px] h-[50px] lg:h-[76px] flex justify-center items-center cursor-pointer">
          <h1 className="text-[#161111] font-[900] text-[16px] lg:text-[24px] p-3 flex justify-center items-center">
            SHOP NOW
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Productoffer;
