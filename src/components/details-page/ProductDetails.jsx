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
    <section className="container mx-auto pt-35.5">
      <div className="flex gap-16">
        {/* LEFT IMAGE SECTION */}
        <div className="flex gap-6">
          {/* Thumbnails */}
          <div className="flex flex-col gap-4">
            {productImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setMainImage(img)}
                className={`cursor-pointer rounded-xl p-2 border transition
                ${
                  mainImage === img
                    ? "border-pink-500 scale-105"
                    : "border-gray-200 hover:border-pink-300"
                }`}
              >
                <Image src={img} alt="thumb" width={70} height={70} />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="bg-[#F6F2EC] rounded-2xl p-10 flex items-center justify-center w-full max-w-[450px] h-[450px]">
            <Image
              src={mainImage}
              alt="main product"
              width={320}
              height={320}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          {/* Rating */}
          <div className="flex gap-0.75 items-center">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            <p className="text-sm font-semibold lesding-4 text-darkbrown">
              4.9/5
            </p>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold leading-7.5 pt-5.25">
            Classic Vanilla Ice Cream
          </h1>

          {/* Price */}
          <p className="text-darkpurple text-3xl font-bold leading-7.5 py-6 mt-1">
            $5.99
          </p>

          {/* Description */}
          <p className="text-lightbrown leading-7 max-w-109.75 w-full pb-6.5">
            Neque porro ruisquam est aui dolorem iesum ruia do sit amet
            consectetur, adipisci velit, sed quia non num eius modi tempoa
            incidunt ut labore et dolore magna.
          </p>

          {/* COLOR SELECT */}
          <div className="mb-7">
            <p className="font-bold mb-4 text-lg leading-4.5">Color:</p>
            <div className="flex gap-2.25">
              {colors.map((c, i) => (
                <button
                  key={i}
                  onClick={() => setActiveColor(c)}
                  className={`w-9 h-9 flex items-center cursor-pointer justify-center rounded-full border transition-all duration-300
               ${activeColor === c ? "border-black shadow-md" : "border-[#E3E4E5]"}`}
                >
                  {/* Inner Color Circle */}
                  <div
                    style={{ background: c }}
                    className={`h-4.5 w-4.5 rounded-full transition-all duration-300
                ${activeColor === c ? "scale-160" : "scale-100"}`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* SIZE SELECT */}
          <div className="pb-7.5 border-b border-[#E3E4E5]">
            <p className="font-bold mb-4 text-lg leading-4.5">Size:</p>
            <div className="flex gap-4 text-darkbrown">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setActiveSize(s)}
                  className={`h-10.75 w-10.75 text-lg cursor-pointer leading-10.75 rounded-full border transition
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
          <div className="flex items-center gap-12.25 pt-7.75 pb-9.5">
            {/* Qty */}
            <div className="flex items-center w-40.25 h-13.25 border border-[#E3E4E5] rounded-full px-4 py-2 gap-4">
              <button
                onClick={decreaseQty}
                className="text-lg font-bold leading-6.75 cursor-pointer"
              >
                -
              </button>
              <span className="max-w-15 flex items-center justify-center border border-[#E3E4E5] leading-6.75 text-lg font-bold w-full h-12.75 text-center">
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
              height="h-[52px]"
              width="w-[167px]"
              icons={<RightArrow />}
              className="uppercase"
              type="button"
              disabled={false}
            >
              Add to Cart
            </Button>
          </div>

          {/* Wishlist */}
          <div className="flex items-center gap-14.25">
            <button
              onClick={() => setWishlist(!wishlist)}
              className="flex items-center gap-2.5 leading-6 text-lightgray transition"
            >
              <span>
                <Productlike />
              </span>
              Add to wishlist
            </button>
            <p className="text-lightgray leading-6">Compare</p>
          </div>
        </div>
      </div>
    </section>
  );
}
