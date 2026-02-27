

"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { peopleReviews } from "../common/Helper";

const HappyCustomer = () => {
  return (
    <section className="relative bg-[url('/images/happy-customer-gradient-bg.png')] bg-cover bg-center bg-no-repeat py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto relative flex items-center justify-center">
        {/* LEFT IMAGE */}
        <Image
          src="/images/customers-left.png"
          width={295}
          height={546}
          alt="Customers Left"
          className="hidden xl:block absolute left-0 top-1/2 -translate-y-1/2 w-45 2xl:w-[295px]"
        />

        {/* CONTENT */}
        <div className="w-full max-w-4xl text-center px-4 relative ">
          {/* QUOTE BG IMAGE */}
          <Image
            src="/images/happy-customer-bg-colon.png"
            width={221}
            height={205}
            alt="Quote Background"
            className="absolute left-85 top-60 max-lg:top-20 duration-300 max-md:hidden"
          />

          {/* HEADING */}
          <h2 className="heading max-w-2xl mx-auto relative z-10 pb-34.5 max-lg:pb-0 duration-300 ">
            Heart from Our{" "}
            <span className="text-pink-500">Happy Ice Cream</span> Lovers
          </h2>

          {/* SWIPER */}
          <div className="mt-10 max-sm:mt-2 max-w-175 w-full mx-auto ">
            <Swiper
              modules={[Pagination, Autoplay]}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              className="pb-24! max-md:pb-16!">
              {peopleReviews.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="px-4 sm:px-8 md:px-16">
                    <p className="text-gray-700 text-[20px] max-lg:text-[16px] max-md:text-[14px] leading-relaxed">
                      {item.text}
                    </p>

                    <div className="mt-6 md:mt-8">
                      <h4 className="text-pink-500 font-semibold text-base md:text-lg">
                        {item.name}
                      </h4>

                      <p className="text-gray-500 text-xs md:text-sm">
                        {item.role}
                      </p>

                      <div className="flex justify-center mt-3 text-yellow-400 text-base md:text-lg">
                        ⭐⭐⭐⭐⭐
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <Image
          src="/images/customers-right.png"
          width={295}
          height={546}
          alt="Customers Right"
          className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 w-[180px] 2xl:w-[295px]"
        />
      </div>

      {/* PAGINATION STYLE */}
      <style>{`
        .swiper-pagination {
          bottom: 10px !important;
        }
        .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
          width: 8px;
          height: 8px;
        }
        .swiper-pagination-bullet-active {
          background: #ec4899;
          transform: scale(1.3);
        }
      `}</style>
    </section>
  );
};

export default HappyCustomer;
