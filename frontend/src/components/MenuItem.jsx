import React from "react";
import Group5 from "../assets/images/Group5.png";
import image6 from "../assets/images/image6.png";
import Rectangle13 from "../assets/images/Rectangle13.png";
import Rectangle14 from "../assets/images/Rectangle14.png";

const images = [Group5, image6, Rectangle13, Rectangle14];

const MenuItem = () => (
  <div className="grid grid-cols-2 grid-rows-2 ml-[150px]">
    {images.map((src, index) => (
      <div key={index} className="w-full">
        <img src={src} alt="menuitem" className="w-full" />
      </div>
    ))}
  </div>
);

export default MenuItem;
