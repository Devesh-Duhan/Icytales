/** @format */
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
    <section className="relative bg-[url('/images/happy-customer-gradient-bg.png')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center">
      <div className="container mx-auto relative flex items-center justify-between">
     
        <Image
          src="/images/customers-left.png"
          width={295}
          height={546}
          alt="Customers Left"
          className="hidden lg:block"
        />

      
        <div className="flex-1 text-center px-4 relative">
          
          <Image
            className="absolute left-1/2 -translate-x-1/2 top-20 opacity-20"
            src="/images/happy-customer-bg-colon.png"
            width={221}
            height={205}
            alt="Quote Background"
          />

          <h2 className="heading text-center max-w-2xl mx-auto">
            Hear from Our <span className="text-pink-500">Happy Ice Cream</span>{" "}
            Lovers
          </h2>

          <div className="mt-12 max-w-3xl mx-auto">
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
              className="pb-16">
              {peopleReviews.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="relative px-6 md:px-16">
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                      {item.text}
                    </p>

                    <div className="mt-8">
                      <h4 className="text-pink-500 font-semibold text-lg">
                        {item.name}
                      </h4>
                      <p className="text-gray-500 text-sm">{item.role}</p>

                      <div className="flex justify-center mt-3 text-yellow-400 text-lg">
                        ⭐⭐⭐⭐⭐
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

      
        <Image
          src="/images/customers-right.png"
          width={295}
          height={546}
          alt="Customers Right"
          className="hidden lg:block"
        />
      </div>

   
      <style jsx global>{`
        .swiper-pagination {
          bottom: 0px !important;
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
