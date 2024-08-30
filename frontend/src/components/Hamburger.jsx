import React, { useState } from "react";
import verticalLogo from "../assets/images/Chef-Matt-rev-white-high-res-1-2048x1365_1.png";
import logo from "../assets/images/Chef-Matt-rev-white-high-res-1-2048x1365_2.png";
import Bag from "../assets/images/Bag.png";
import Fav from "../assets/images/Fav.png";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Hamburger = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      navigate("/menupage");
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <div
        className={`absolute
             top-0 left-0 h-full z-50 ${
               isExpanded
                 ? "w-[345px]"
                 : "w-[150px] border-r-8 border-[#D29A5A]"
             } bg-[#130F0CCC] text-white transition-all duration-100`}
      >
        <div className="flex items-center justify-between p-4 pl-14">
          {isExpanded ? (
            <div>
              <IoClose
                size={35}
                className="cursor-pointer top-10 left-[5px]"
                onClick={toggleSidebar}
              />
            </div>
          ) : (
            <div>
              <FaBars
                size={28}
                className="cursor-pointer top-10 left-[5px]"
                onClick={toggleSidebar}
              />
            </div>
          )}
        </div>

        {isExpanded ? (
          <nav className="ml-3">
            <img
              className="w-[330px] h-[221px] top-[10px] left-[8px]"
              src={logo}
              alt="logo"
            />
            <ul className="text-[18px]">
              <li className="ml-4 p-4 cursor-pointer hover:text-[#D29A5A]">
                HOME
              </li>
              <li className="ml-4 p-4 cursor-pointer hover:text-[#D29A5A]">
                PRODUCTS
              </li>
              <li className="ml-4 p-4 cursor-pointer hover:text-[#D29A5A]">
                MEET CHEF MATT
              </li>
              <li className="ml-4 p-4 cursor-pointer hover:text-[#D29A5A]">
                FAQ
              </li>
              <li className="ml-4 p-4 cursor-pointer hover:text-[#D29A5A]">
                CONNECT WITH US
              </li>
            </ul>
          </nav>
        ) : (
          <div className="mt-36 top-[673px] -left-72 w-[447px] h-[299px]">
            <img className=" " src={verticalLogo} alt="logo" />
          </div>
        )}

        {isExpanded && (
          <>
            <div className="w-full justify-center items-center ml-10 mt-40">
              <h1 className="absolute h-[24px] font-[400] text-[16px]">
                TEXT SUPPORT 24/7
                <span className="text-[#D29A5A] ml-1 underline">
                  {" "}
                  070-7782-9137
                </span>
              </h1>
            </div>
            <div className="w-[340px] flex gap-10 mt-52 border-t-2 p-2">
              <div className="flex gap-2 ml-7">
                <img src={Bag} alt="" />
                <h1 className="text-[18px]">CART</h1>
              </div>
              <div className="flex gap-2 ml-4">
                <img src={Fav} alt="" />
                <h1 className="text-[18px]">WISHLIST</h1>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Hamburger;
