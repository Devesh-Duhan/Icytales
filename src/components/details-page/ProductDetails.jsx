"use client";
import Image from "next/image";
import { useState } from "react";
import { Productlike, RightArrow, Star } from "../common/Icons";
import Button from "../common/Button";

const productImages = [
  "/images/singleProductMain.png",
  "/images/productThumbnailsecond.png",
  "/images/productThumbnailThird.png",
  "/images/productThumbnailForth.png",
];

const colors = ["#BE2A36", "#E4CCAF", "#BCEC9F", "#9A5F2E"];
const sizes = ["S", "M", "L"];

export default function ProductDetail() {
  const [mainImage, setMainImage] = useState(productImages[0]);
  const [qty, setQty] = useState(1);
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [activeSize, setActiveSize] = useState("M");
  const [wishlist, setWishlist] = useState(false);

  const increaseQty = () => setQty((p) => p + 1);
  const decreaseQty = () => setQty((p) => (p > 1 ? p - 1 : 1));

  return (
    <section className="container mx-auto pt-35.5 max-lg:pt-24 max-md:pt-16 max-sm:pt-8">
      <div className="flex gap-16 max-lg:gap-8 max-md:flex-col max-md:justify-center max-md:items-center">
        {/* LEFT IMAGE SECTION */}
        <div className="flex max-sm:justify-center max-sm:items-center max-sm:gap-4 gap-7.5">
          {/* Thumbnails */}
          <div className="flex flex-col gap-4">
            {productImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setMainImage(img)}
                className={`cursor-pointer rounded-[10px]  border-2 transition
                ${
                  mainImage === img
                    ? "border-pink-500 scale-105"
                    : "border-gray-200 hover:border-pink-300"
                }`}
              >
                <Image
                  className="rounded-[10px]"
                  src={img}
                  alt="thumb"
                  width={88}
                  height={88}
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className=" rounded-[10px] max-w-120  w-full ">
            <Image
              src={mainImage}
              alt="main product"
              width={480}
              height={571}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className=" max-md:px-3 max-w-110 w-full">
          {/* Rating */}
          <div className="flex gap-0.75 items-center">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <p className="text-sm font-semibold leading-4 text-darkbrown">
              4.9/5
            </p>
          </div>

          {/* Title */}
          <h1 className="text-3xl max-md:text-2xl max-sm:text-xl max-md:leading-5 font-bold leading-7.5 pt-5.25 max-lg:pt-2">
            Classic Vanilla Ice Cream
          </h1>

          {/* Price */}
          <p className="text-darkpurple text-3xl max-md:text-2xl max-md:leading-5 font-bold leading-7.5 py-6 max-lg:py-3 mt-1">
            $5.99
          </p>

          {/* Description */}
          <p className="text-lightbrown max-sm:text-sm max-sm:pb-2 max-sm:leading-5 leading-7 max-w-109.75 w-full max-lg:pb-3 pb-6.5">
            Neque porro ruisquam est aui dolorem iesum ruia do sit amet
            consectetur, adipisci velit, sed quia non num eius modi tempoa
            incidunt ut labore et dolore magna.
          </p>

          {/* COLOR SELECT */}
          <div className="mb-7 max-lg:mb-4 max-md:mb-2 ">
            <p className="font-bold mb-4 text-md:mb-2 leading-4.5">Color:</p>
            <div className="flex gap-2.25">
              {colors.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setActiveColor(c)}
                  className={`w-9 h-9 max-sm:h-6 max-sm:w-6 flex items-center cursor-pointer justify-center rounded-full border transition-all duration-300
               ${activeColor === c ? "border-black shadow-md" : "border-[#E3E4E5]"}`}
                >
                  {/* Inner Color Circle */}
                  <div
                    style={{ background: c }}
                    className={`h-4.5 w-4.5 max-sm:h-3 max-sm:w-3 rounded-full transition-all duration-300
                ${activeColor === c ? "scale-160" : "scale-100"}`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* SIZE SELECT */}
          <div className="pb-7.5 max-lg:pb-3 border-b border-[#E3E4E5]">
            <p className="font-bold mb-4 max-sm:mb-2 max-sm:text-base text-lg leading-4.5">
              Size:
            </p>
            <div className="flex gap-4 text-darkbrown">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setActiveSize(s)}
                  className={`h-10.75 w-10.75 text-lg max-sm:text-base max-sm:h-8 max-sm:w-8 flex justify-center items-center cursor-pointer leading-10.75 rounded-full border transition
                  ${
                    activeSize === s
                      ? "bg-black text-white"
                      : "border-[#E3E4E5] hover:border-black"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* CART + QTY */}
          <div className="flex items-center gap-12.25 max-lg:py-4 max-lg:gap-4 pt-7.75 pb-9.5 max-md:pt-4 max-md:pb-4">
            {/* Qty */}
            <div className="flex items-center  leading-6.75 max-w-40.25 max-md:max-w-28 w-full py-3 max-md:py-0 border border-[#E3E4E5] rounded-full px-4 gap-4">
              <button
                onClick={decreaseQty}
                className="text-lg font-bold leading-6.75 cursor-pointer"
              >
                -
              </button>
              <span className="max-w-15 max-md:max-w-12 max-md:py-1.5 py-3 flex items-center justify-center border border-[#E3E4E5] leading-6.75 text-lg font-bold w-full  text-center">
                {qty}
              </span>
              <button
                onClick={increaseQty}
                className="text-lg font-bold leading-6.75 cursor-pointer"
              >
                +
              </button>
            </div>

            {/* Add to Cart */}
            <Button
              theme="primary"
              height="h-[52px]  max-md:h-10"
              width="w-[167px] max-md:w-[148px]"
              icons={<RightArrow />}
              className="uppercase max-sm:text-xs"
              type="button"
              disabled={false}
            >
              Add to Cart
            </Button>
          </div>

          {/* Wishlist */}
          <div className="flex items-center max-lg:gap-7 gap-14.25">
            <button
              onClick={() => setWishlist(!wishlist)}
              className="flex items-center gap-2.5  max-sm:text-sm leading-6 text-lightgray transition"
            >
              <span>
                <Productlike />
              </span>
              Add to wishlist
            </button>
            <p className="text-lightgray max-sm:text-sm leading-6">Compare</p>
          </div>
        </div>
      </div>
    </section>
  );
}
