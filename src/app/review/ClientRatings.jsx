"use client";

import { testimonialData } from "@/components/common/Helper";
import { RatingsStar } from "@/components/common/Icons";
import Image from "next/image";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const ClientRatings = () => {
  return (
    <section className="container py-38.25">
      {/* Heading */}
      <div className="flex flex-col justify-center items-center">
        <h2 className="heading max-w-145 w-full text-center text-darkbrown">
          Hear From Our <span className="text-pink">Gelato</span> Enthusiasts
        </h2>
        <p className="text-lightbrown pt-5 leading-6.5 text-xl">
          Read testimonials from those who have enjoyed our artisan gelato.
        </p>
      </div>

      {/* Swiper */}
      <div className="pt-12.5">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonialSwiper"
        >
          {testimonialData.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="bg-white rounded-[20px] p-[50px_32px_51px_35px] relative
                shadow-[0px_2px_73px_2px_#0000000D]
                border-b-2 border-pink transition-all duration-300 ease-out
                hover:-translate-y-2 hover:shadow-[0px_20px_60px_rgba(236,72,153,0.35)]"
              >
                {/* Quote */}
                <Image
                  src="/images/testimonialQuote.png"
                  height={28}
                  width={41}
                  alt="quote"
                />

                {/* Text */}
                <p className="text-lightbrown pt-5.75 leading-6">{item.text}</p>

                {/* Bottom User */}
                <div className="flex gap-4.75 pt-7.5">
                  {/* Image */}
                  <div className="w-13.5 h-13.5 relative rounded-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    {/* Stars */}
                    <div className="flex gap-1 text-yellow-400 pb-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <RatingsStar key={i} />
                      ))}
                    </div>

                    {/* Name */}
                    <h4 className="text-pink font-bold leading-6 text-lg">
                      {item.name}
                    </h4>

                    {/* Role */}
                    <p className="text-lightbrown leading-5 text-sm">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientRatings;
