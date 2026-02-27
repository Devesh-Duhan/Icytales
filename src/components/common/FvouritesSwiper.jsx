"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import ProductDetailsCard from "./ProductDetailsCard";
import { homeProducts } from "./Helper";

const FavouritesSwiper = () => {
  const favouriteProducts = homeProducts.filter(
    (item) => item.type === "favourite",
  );

  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        className="pb-16"
      >
        {favouriteProducts.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductDetailsCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination {
          bottom: 0 !important;
          display: flex;
          justify-content: center;
          gap: 8px;
        }
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #d1d5db;
          opacity: 1;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #f83d8e;
          transform: scale(1.3);
        }
      `}</style>
    </div>
  );
};

export default FavouritesSwiper;
