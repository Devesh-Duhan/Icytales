"use client";
import Image from "next/image";
import { useState } from "react";
import { AddToWishlist, RightArrow } from "../common/Icons";
import { StarRating } from "../common/StarRating";
import Button from "../common/Button";
import Link from "next/link";
import { homeProducts } from "../common/Helper";

export default function ProductDetail({ productId }) {
  const productData = homeProducts.find(
    (item) => item.id === parseInt(productId),
  );

  const [mainImage, setMainImage] = useState(
    productData ? productData.image[0] : null,
  );
  const [qty, setQty] = useState(1);
  const [activeColor, setActiveColor] = useState(null);
  const [activeSize, setActiveSize] = useState(null);
  const [wishlist, setWishlist] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  if (!productData) {
    return (
      <div className="container mx-auto pt-16 text-center">
        <h1 className="text-2xl font-bold text-red-500 mb-4">
          Product Not Found
        </h1>
        <Link href="/">
          <p className="text-pink-500 hover:underline cursor-pointer">
            Back to Home
          </p>
        </Link>
      </div>
    );
  }

  const increaseQty = () => setQty((p) => p + 1);
  const decreaseQty = () => setQty((p) => (p > 1 ? p - 1 : 1));

  return (
    <div>
      <section className="container mx-auto pt-35.5 max-lg:pt-24 max-md:pt-16 max-sm:pt-8">
        <div className="flex gap-16 max-lg:gap-8 max-md:flex-col max-md:justify-center max-md:items-center">
          {/* LEFT IMAGE SECTION */}
          <div className="flex max-sm:justify-center max-sm:items-center max-sm:gap-4 gap-7.5">
            {/* Thumbnails */}
            <div className="flex flex-col gap-4 pt-11">
              {productData.image.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setMainImage(img)}
                  className={`cursor-pointer rounded-[10px] border-2 transition ${
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
                    unoptimized
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="rounded-[10px] max-w-120 w-full">
              <Image
                src={mainImage}
                alt="main product"
                width={480}
                height={571}
                className="object-contain"
                unoptimized
              />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="max-md:px-3 max-w-110 w-full">
            {/* Rating */}
            <StarRating
              rating={productData.ratings}
              size="w-5 h-5"
              showText={true}
            />

            {/* Title */}
            <h1 className="text-3xl max-md:text-2xl max-sm:text-xl max-md:leading-5 font-bold leading-7.5 pt-5.25 max-lg:pt-2">
              {productData.title}
            </h1>

            {/* Price */}
            <p className="text-darkpurple text-3xl max-md:text-2xl max-md:leading-5 font-bold leading-7.5 py-6 max-lg:py-3 mt-1">
              {productData.price}Rs
            </p>

            {/* Category Badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-semibold bg-pink-100 text-pink-600 px-3 py-1 rounded-full">
                {productData.category}
              </span>
              {productData.type && (
                <span className="text-xs font-semibold bg-blue-100 text-blue-600 px-3 py-1 rounded-full capitalize">
                  {productData.type}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-lightbrown max-sm:text-sm max-sm:pb-2 max-sm:leading-5 leading-7 max-w-109.75 w-full max-lg:pb-3 pb-6.5">
              {productData.heading}
            </p>

            {/* COLOR SELECT */}
            <div className="mb-7 max-lg:mb-4 max-md:mb-2">
              <p className="font-bold mb-4 text-md:mb-2 leading-4.5">Color:</p>
              <div className="flex gap-2.25">
                {productData.colors.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveColor(c)}
                    className={`w-9 h-9 max-sm:h-6 max-sm:w-6 flex items-center cursor-pointer justify-center rounded-full border transition-all duration-300 ${
                      activeColor === c
                        ? "border-black shadow-md"
                        : "border-[#E3E4E5]"
                    }`}
                  >
                    {/* Inner Color Circle */}
                    <div
                      style={{ background: c }}
                      className={`h-4.5 w-4.5 max-sm:h-3 max-sm:w-3 rounded-full transition-all duration-300 ${
                        activeColor === c ? "scale-160" : "scale-100"
                      }`}
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
                {productData.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setActiveSize(s)}
                    className={`h-10.75 w-10.75 text-lg max-sm:text-base max-sm:h-8 max-sm:w-8 flex justify-center items-center cursor-pointer leading-10.75 rounded-full border transition ${
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
              <div className="flex items-center leading-6.75 max-w-40.25 max-md:max-w-28 w-full justify-center max-md:py-0 border border-[#E3E4E5] rounded-full px-4 gap-4">
                <button
                  onClick={decreaseQty}
                  className="text-lg font-bold leading-6.75 cursor-pointer"
                >
                  -
                </button>
                <span className="max-w-15 max-md:max-w-12 max-md:py-1.5 py-3 flex items-center justify-center border border-[#E3E4E5] leading-6.75 text-lg font-bold w-full text-center">
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
              <Link href="/cart">
                <Button
                  theme="primary"
                  height="h-[52px] max-md:h-10"
                  width="w-[167px] max-md:w-[148px]"
                  icons={<RightArrow />}
                  className="uppercase max-sm:text-xs"
                  type="button"
                  disabled={false}
                >
                  Add to Cart
                </Button>
              </Link>
            </div>

            {/* Wishlist */}
            <div className="flex items-center max-lg:gap-7 gap-14.25">
              <button
                onClick={() => setWishlist(!wishlist)}
                className="flex items-center gap-2.5 max-sm:text-sm leading-6 text-lightgray transition"
              >
                <span className="overflow-hidden cursor-pointer">
                  <AddToWishlist liked={wishlist} />
                </span>
                Add to wishlist
              </button>
              <p className="text-lightgray max-sm:text-sm leading-6">Compare</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container pt-17.5 max-md:pt-14 max-sm:pt-8">
        {/* Tabs Header */}
        <div className="border-b border-[#E3E4E5]">
          <div className="flex gap-10.5 max-md:gap-7 max-sm:gap-5">
            {["description", "info", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-5.5 max-md:pb-3 max-sm:pb-2 max-md:text-base cursor-pointer max-md:font-semibold font-bold relative text-lg transition-all duration-300 ${
                  activeTab === tab
                    ? "text-pink-500"
                    : "text-darkbrown hover:text-pink-400"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}

                {/* Pink underline */}
                {activeTab === tab && (
                  <span className="absolute left-0 bottom-0 w-full h-0.75 bg-pink-500"></span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tabs Content */}
        <div className="pt-8.75 pb-11.75 max-md:py-6 max-sm:py-4 text-lightgray border-b border-[#E3E4E5] leading-7 max-md:leading-5 max-md:text-sm max-sm:text-xs max-sm:leading-4 max-w-274.5 w-full">
          {/* DESCRIPTION */}
          {activeTab === "description" && (
            <div className="space-y-6.5 max-md:space-y-4 max-sm:space-y-2">
              <p>
                Ratione volurtatem serui nesciunt neaue porro quisquam est, qui
                dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                sed quia non numquam eius modi tempora incidunt ut labore et
                dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
                veniam corporis suscipit laboriosam, nisi ut aliquid ex ea
                commodi consequatur.
              </p>

              <p>
                Quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt porro quisquam est, qui dolore ipsum quia dolor sit
                amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptate ruis aute irure dolor in reprehenderit.
              </p>
            </div>
          )}

          {/* ADDITIONAL INFO */}
          {activeTab === "info" && (
            <div className="space-y-3">
              <p>
                <span className="font-semibold text-gray-700">Weight:</span>{" "}
                250g
              </p>
              <p>
                <span className="font-semibold text-gray-700">Category:</span>{" "}
                {productData.category}
              </p>
              <p>
                <span className="font-semibold text-gray-700">
                  Product Type:
                </span>{" "}
                {productData.type || "Standard"}
              </p>
              <p>
                <span className="font-semibold text-gray-700">Shelf Life:</span>{" "}
                12 Months
              </p>
              <p>
                <span className="font-semibold text-gray-700">Storage:</span>{" "}
                Keep Frozen (-18°C)
              </p>
              <p>
                <span className="font-semibold text-gray-700">
                  Ingredients:
                </span>{" "}
                Milk, Cream, Sugar, Natural Flavors
              </p>
            </div>
          )}

          {/* REVIEWS */}
          {activeTab === "reviews" && (
            <div className="space-y-6 max-md:space-y-4 max-sm:space-y-2">
              {productData.reviews &&
                productData.reviews.map((review) => (
                  <div key={review.id} className="border-b pb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-800">
                          {review.name}
                        </p>
                        <p className="text-xs text-gray-500">{review.role}</p>
                      </div>
                      <StarRating
                        rating={review.rating || productData.ratings}
                        size="w-4 h-4"
                        showText={true}
                        textClass="text-xs ml-2"
                      />
                    </div>
                    <p className="text-sm max-sm:text-xs mt-1">{review.text}</p>
                  </div>
                ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
