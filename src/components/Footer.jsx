import React from "react";
import subscribeImg from "../assets/images/Rectangle16.png";
import logo from "../assets/images/Chef-Matt-rev-white-high-res-1-2048x1365_2.png";
import Vector from "../assets/images/Vector.png";
import Vector1 from "../assets/images/Vector1.png";
import Vector2 from "../assets/images/Vector2.png";

function Footer() {
  return (
    <section className="w-full px-4 lg:w-[1282px] lg:ml-[150px] relative overflow-hidden bg-[#130F0C] font-poppins">
      <div className="w-full lg:w-[1282px] h-[401px]">
        <div className="absolute">
          <div className="mt-56 w-full lg:w-[575px] h-[57px] top-[1091px] lg:left-[795px]">
            <h2 className="relative bottom-[87px] lg:left-16 text-white text-[24px] lg:text-[38px] font-[400] items-center border-b-4 border-white">
              SIGN UP SPECIAL PROMOTIONS
            </h2>
          </div>
          <div className="w-full lg:w-[650px] mt-10">
            <h3 className="text-white text-[14px] lg:text-[18px] z-50 relative bottom-[87px] lg:left-16 font-[400] leading-[27px]">
              Get exclusive deals you won’t find anywhere else straight to your
              inbox!
            </h3>
          </div>
          <div className="w-full lg:ml-16 -mt-14">
            <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-10 z-50">
              <div className="border-2 bg-white bg-opacity-10">
                <input
                  className="flex h-10 w-full lg:w-[516px] h-[40px] border-4 border-white bg-transparent px-3 py-2 text-sm placeholder:text-gray-100 
              text-white disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Enter Email Address"
                />
              </div>

              <button
                className="w-full lg:w-3/6 text-[14px] px-2 bg-[#D29A5A] text-white rounded-sm"
                type="submit"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <img className="w-full" src={subscribeImg} alt="footer" />
      </div>

      <div className="w-full h-[75px] container">
        <div className="border-b-8 border-[#D29A5A]">
          <div className="flex flex-col lg:flex-row justify-between px-10 items-center mt-16 mb-10 ml-10">
            <div className="w-full lg:w-[371px] h-[73px] mb-4 lg:mb-0">
              <h2 className="text-[#D29A5A] text-[18px] lg:text-[24px] flex gap-5">
                <img className="w-[36px] h-[32px]" src={Vector} alt="" />
                FREE SHIPPING WORLDWIDE
              </h2>
              <h3 className="text-white text-[14px] lg:text-[18px] ml-14 mt-3">
                Guaranteed Delivery
              </h3>
            </div>
            <div className="w-full lg:w-[371px] h-[73px] mb-4 lg:mb-0">
              <h2 className="text-[#D29A5A] text-[18px] lg:text-[24px] flex gap-5">
                <img className="w-[36px] h-[32px]" src={Vector1} alt="" />
                24/7 CUSTOMER SERVICE
              </h2>
              <h3 className="text-white text-[14px] lg:text-[18px] ml-14 mt-3">
                Text Us 24/7 at 070-7782-9137
              </h3>
            </div>
            <div className="w-full lg:w-[371px] h-[73px]">
              <h2 className="text-[#D29A5A] text-[18px] lg:text-[24px] flex gap-5">
                <img className="w-[36px] h-[32px]" src={Vector2} alt="" />
                QUALITY GUARANTEE!
              </h2>
              <h3 className="text-white text-[14px] lg:text-[18px] ml-14 mt-3">
                Send Within 30 Days
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="-m-8 flex flex-wrap items-center justify-between">
          <div className="w-auto p-8">
            <a href="#">
              <div className="inline-flex items-center w-36">
                <img src="" alt="" />
              </div>
            </a>
          </div>
          <div className="">
            <div className="top-[2743px] left-[575px]">
              <img
                className="w-full lg:w-[447px] h-auto lg:h-[299px]"
                src={logo}
                alt="logo"
              />
            </div>
          </div>
          <div className="w-auto p-8">
            <div className="-m-1.5 flex flex-wrap">
              {/* <div className="w-auto p-1.5">
                <a href="#">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400"></div>
                </a>
              </div> */}
              {/* <div className="w-auto p-1.5">
                <a href="#">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400"></div>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
