'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import ProductDetailsCard from "../common/ProductDetailsCard";
import { homeProducts} from "./Helper";



const FavouritesSwiper = () => {
  return (
    <div>
      <Swiper
      className="
    !pb-[66px]

    [&_.swiper-pagination]:!bottom-1.5
    [&_.swiper-pagination]:flex
    [&_.swiper-pagination]:justify-center
    [&_.swiper-pagination]:items-center
    [&_.swiper-pagination]:gap-[8px]

    [&_.swiper-pagination-bullet]:w-[8px]
    [&_.swiper-pagination-bullet]:h-[8px]
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
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {homeProducts.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductDetailsCard
              image={
                <img
                  src={item.image}
                  alt={item.heading}
                  className="mx-auto h-[150px] object-contain"
                />
              }
              heading={item.heading}
              title={item.title}
              price={item.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FavouritesSwiper;
