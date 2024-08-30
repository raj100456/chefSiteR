import React from "react";

function ChefProduct({ productImg, Name, oldPrice, newPrice }) {
  return (
    <div className="w-full max-w-xs mx-auto my-4">
      <div className="w-full h-auto">
        <img className="w-full h-auto" src={productImg} alt="item1" />
      </div>
      <h1 className="text-[#D29A5A] font-[400] text-[18px] mt-4 flex justify-center items-center leading-[21px]">
        {Name}
      </h1>
      <h2 className="text-white font-[400] text-[14px] mt-2 mb-4 leading-[21px] flex items-center justify-center gap-3">
        <span className="line-through">{oldPrice}</span>
        {newPrice}
      </h2>
    </div>
  );
}

export default ChefProduct;
