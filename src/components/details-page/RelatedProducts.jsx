"use client";
import { homeProducts, products } from "@/components/common/Helper";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { AddToCard, AddToWishlist, Star } from "@/components/common/Icons";
import Link from "next/link";
import Button from "@/components/common/Button";
import Image from "next/image";

const RelatedProducts = ({ productId }) => {
  const ProductData = homeProducts.find(
    (items) => items.id === parseInt(productId),
  );
  const [liked, setLiked] = useState({});
  const [hovered, setHovered] = useState(0);

  const toggleLike = (itemId) => {
    setLiked((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };
  console.log(homeProducts[0].image[0],hovered, "liked");
  // Dynamic Background Color Based on Title
  const getCardBgColor = (heading) => {
    const text = heading?.toLowerCase().trim();

    if (text.includes("strawberry sundae")) return "bg-[#FFEFF0]";
    if (text.includes("chocolate chip cookie cone")) return "bg-[#FFF3EA]";
    if (text.includes("rocky road sundae")) return "bg-[#F8EBE4]";
    return "bg-[#FFEFD8]";
  };
  return (
    <section className="container pt-35.5 pb-40.5 max-lg:py-30 max-md:py-16 max-sm:py-8">
      <div className=" flex flex-col justify-center items-center">
        <h2 className="heading text-darkbrown">
          Related <span className="text-pink">Products</span>
        </h2>
        <p className="text-lightbrown text-xl leading-6.5 pt-4.5 text-center max-md:leading-4 max-lg:text-lg max-md:text-base max-sm:text-sm max-lg:pt-5 max-md:pt-5 max-sm:pt-3">
          Choose from some of related products
        </p>
      </div>

      <div>
        <Swiper
          className=" 
        pb-12.5! max-md:pb-8!
    [&_.swiper-pagination]:bottom-1.5!
    [&_.swiper-pagination]:flex
    [&_.swiper-pagination]:justify-center
    [&_.swiper-pagination]:items-center
    [&_.swiper-pagination]:gap-2

    [&_.swiper-pagination-bullet]:w-2
    [&_.swiper-pagination-bullet]:h-2
    [&_.swiper-pagination-bullet]:rounded-full
    [&_.swiper-pagination-bullet]:bg-gray-300
    [&_.swiper-pagination-bullet]:opacity-100
    [&_.swiper-pagination-bullet]:transition-all
    [&_.swiper-pagination-bullet]:duration-300

    [&_.swiper-pagination-bullet-active]:!bg-[rgba(248,61,142,1)]
    [&_.swiper-pagination-bullet-active]:scale-125
  "
          slidesPerView={4}
          spaceBetween={20}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          // autoplay={{
          //   delay: 1000,
          //   disableOnInteraction: false,
          // }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {homeProducts
            .filter((item) => item.type === "discount")
            .map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  // onMouseEnter={() => setHovered(0)}
                  // onMouseLeave={() => setHovered(1)}
                  className="bg-white p-2.75 rounded-xl shadow-md  mx-auto mt-12.5 max-lg:mt-9 max-md:mt-6"
                >
                  {/* Image Section */}
                  <div
                    className={`${getCardBgColor(item.heading)} relative  overflow-hidden rounded-[10px] p-4`}
                  >
                    <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center absolute top-2.5 left-2.5 shadow-sm cursor-pointer z-20">
                      <span className="cursor-pointer">
                        <AddToWishlist
                          liked={liked[item.id]}
                          onClick={() => toggleLike(item.id)}
                        />
                      </span>
                    </div>
                    <Link href={`/products/${item.id}`}>
                      <div className="flex justify-center relative px-7.75 py-8.75 min-w-24.25 w-full h-61">
                        <Image
                          src={item.image[hovered]}
                          alt="productphoto"
                          fill
                          className="object-contain"
                        />
                      </div>
                    </Link>
                  </div>

                  {/* Content Section */}
                  <Link href={`/products/${item.id}`}>
                    <div className="mt-5.25">
                      {/* Heading & Rating */}
                      <div className="flex justify-between items-center">
                        <h3 className="text-darkbrown text-xl font-bold leading-6 max-w-40 w-full">
                          {item.heading}
                        </h3>

                        <div className="flex gap-0.75 items-center">
                          <Star />
                          <p className="text-sm font-semibold text-darkbrown">
                            {item.ratings}/5
                          </p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mt-3.25 max-md:mt-2 max-w-45 max-sm:max-w-72.5 w-full text-sm leading-5.5 text-gray-600">
                        {item.title}
                      </p>

                      {/* Price & Cart Button */}
                      <div className="mt-3 max-md:mt-2  flex justify-between items-center">
                        <p className="font-bold text-[22px] text-pink">
                          {item.price}
                        </p>

                        <Link href="/cart">
                          <Button
                            theme="secondary"
                            height="h-[46px]"
                            width="w-[46px]"
                            icons={<AddToCard />}
                            type="button"
                          />
                        </Link>
                      </div>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RelatedProducts;
