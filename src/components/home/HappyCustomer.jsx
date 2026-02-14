/** @format */
"use client";
import Image from "next/image";
import React from "react";

const HappyCustomer = () => {
 

  return (
    <div className="bg-[url('/images/happy-customer-gradient-bg.png')] bg-cover bg-no-repeat h-screen">
      <div className="container relative h-full flex items-center justify-center gap-2">
        <Image src="/images/customers-left.png" width={295} height={546} />
        <Image
          className="absolute"
          src="/images/happy-customer-bg-colon.png"
          width={221}
          height={205}
          alt="Happy Customer"
        />
        <div>
          <h2 className="heading w-xl text-center ">
            Hear from Our <span className="text-pink">Happy Ice Cream</span>{" "}
            Lovers
          </h2>
          <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#f4e7f7] to-[#e6f0ff] px-4">
            <div className="max-w-4xl w-full text-center relative">
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
                {testimonials.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="relative px-6 md:px-20">
                      {/* Large Quote Background */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="text-[200px] md:text-[260px] font-bold text-pink-100 opacity-30 select-none leading-none">
                          “
                        </span>
                      </div>

                      {/* Testimonial Text */}
                      <p className="relative z-10 text-gray-700 text-base md:text-lg leading-relaxed">
                        {item.text}
                      </p>

                      {/* Name + Role */}
                      <div className="relative z-10 mt-10">
                        <h4 className="text-pink-500 font-semibold text-lg">
                          {item.name}
                        </h4>
                        <p className="text-gray-500 text-sm">{item.role}</p>

                        {/* Stars */}
                        <div className="flex justify-center mt-3 text-yellow-400 text-lg">
                          ⭐⭐⭐⭐⭐
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Custom Pagination Styling */}
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
        </div>
        <Image src="/images/customers-right.png" width={295} height={546} />
      </div>
    </div>
  );
};

export default HappyCustomer;
