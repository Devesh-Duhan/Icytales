import React from "react";
import { AddToCard, AddToWishlist, Star } from "./Icons";
import Button from "./Button";
import Link from "next/link";

const ProductDetailsCard = ({ image, heading, title, price }) => {
  // Dynamic Background Color Based on Title
  const cardBgColor = title?.toLowerCase().includes("vanilla")
    ? "bg-[rgba(247,242,247,1)]"
    : title?.toLowerCase().includes("chocolate")
    ? "bg-[rgba(255,238,238,1)]"
    : title?.toLowerCase().includes("mint")
    ? "bg-[rgba(246,249,225,1)]"
    : "bg-[rgba(255,250,244,1)]";

  return (
    <div className="bg-white p-[11px] rounded-[12px] shadow-md  mx-auto">
      
      {/* Image Section */}
      <div className={`${cardBgColor} relative rounded-[10px] p-4`}>
        
        {/* Wishlist Button */}
        <div  className="bg-white rounded-full w-[40px] h-[40px] flex items-center justify-center absolute top-[10px] left-[10px] shadow-sm">
          <AddToWishlist />
        </div>

        <div className="flex justify-center">
          {image}
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-[21px]">

        {/* Heading & Rating */}
        <div className="flex justify-between items-center">
          <h3 className="text-darkbrown text-xl font-bold leading-[24px] max-w-[160px] w-full" >
            {heading}
          </h3>

          <div className="flex gap-[3px] items-center">
            <Star />
            <p className="text-sm font-semibold text-darkbrown">
              4.9/5
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="mt-[13px] max-w-[180px] w-full text-sm leading-[22px] text-gray-600">
          {title}
        </p>

        {/* Price & Cart Button */}
        <div className="mt-[12px]  flex justify-between items-center">
          <p className="font-bold text-[22px] text-pink">
            {price}
          </p>
<Link href="/" >
          <Button
            theme="secondary"
            height="h-[46px]"
            width="w-[46px]"
            icons={<AddToCard/>}
          
            
            type="button"
            
          />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
