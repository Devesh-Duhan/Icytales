"use client"
import { Discountproducts, products } from '@/components/common/Helper';
import ProductDetailsCard from '@/components/common/ProductDetailsCard';
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";



const Discount = () => {
  return (
    <section className="container">
      <div className=" flex flex-col justify-center items-center">
        <h2 className="heading">
          Upto <span className="text-pink">30%</span> Discount
        </h2>
        <p className="text-lightbrown text-xl leading-6.5 pt-4.5">
          Discover the favorites that keep our customers coming back for more.
        </p>
      </div>

      <div>
        <Swiper
          className=" 
    !pb-[66px]

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
          //   autoplay={{
          //     delay: 1000,
          //     disableOnInteraction: false,
          //   }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {Discountproducts.map((item) => (
            <SwiperSlide key={item.id}>
              <ProductDetailsCard
                image={
                  <img
                    src={item.image}
                    alt={item.heading}
                    className="mx-auto h-37.5 w-full object-contain"
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
    </section>
  );
}

export default Discount