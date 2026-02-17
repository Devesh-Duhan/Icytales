import React from "react";
import { AddToCard, AddToWishlist, Star } from "./Icons";
import Button from "./Button";
import Link from "next/link";
import { useWishlist } from "../context/WishlistContext";

const ProductDetailsCard = ({ id,image, heading, title, ratings, price }) => {
   const { wishlist, toggleWishlist } = useWishlist();

  const isLiked = wishlist.some((item) => item.id === id);

  const productData = { id, image, heading, title, ratings, price };

  // Dynamic Background Color Based on Title
  const cardBgColor = title?.toLowerCase().includes("vanilla")
    ? "bg-[rgba(247,242,247,1)]"
    : title?.toLowerCase().includes("chocolate")
    ? "bg-[rgba(255,238,238,1)]"
    : title?.toLowerCase().includes("mint")
    ? "bg-[rgba(246,249,225,1)]"
     : title?.toLowerCase().includes("peach")
    ? "rgba(255,239,216,1)"
    : "bg-[rgba(255,250,244,1)]";

  return (
    <div className="bg-white p-2.75 rounded-xl shadow-md  mx-auto">
      
      {/* Image Section */}
      <div className={`${cardBgColor} relative rounded-[10px] p-4`}>
        
        {/* Wishlist Button */}
          <div className="absolute top-2 left-2 z-10">
        <AddToWishlist
          liked={isLiked}
          onClick={() => toggleWishlist(productData)}
        />
      </div>

        <div className="flex justify-center">
          {image}
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-5.25">

        {/* Heading & Rating */}
        <div className="flex justify-between items-center">
          <h3 className="text-darkbrown text-xl font-bold leading-6 max-w-40 w-full" >
            {heading}
          </h3>

          <div className="flex gap-0.75 items-center">
            <Star />
            <p className="text-sm font-semibold text-darkbrown">
              {ratings}/5
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="mt-3.25 max-w-45 w-full text-sm leading-5.5 text-gray-600">
          {title}
        </p>

        {/* Price & Cart Button */}
        <div className="mt-3  flex justify-between items-center">
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
