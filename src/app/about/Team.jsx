"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { teamData } from "@/components/common/Helper";
import {
  Facebookicon,
  Instaicon,
  OurTeamNext,
  OurTeamPrev,
  Youtubeicon,
} from "@/components/common/Icons";

import Image from "next/image";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const Team = () => {
  return (
    <section className="w-full py-35.5 bg-[linear-gradient(299.54deg,#EFD7EF_8%,#F5F9FC_43%,#F8EAE1_64%,#EAF8F9_87%)]">
      <div className="max-w-6xl mx-auto px-6 text-center relative">
        {/* Heading */}
        <h2 className="heading text-darkbrown">
          Our <span className="text-pink">Team</span> Members
        </h2>

        {/* Subtitle */}
        <p className="pt-4.5 text-lightbrown leading-6.5 text-xl">
          Get to know the friendly faces behind your favorite flavors.
        </p>

        {/* ===== Navigation Buttons (OUTSIDE SWIPER) ===== */}

        {/* Prev */}
        <button className="team-prev absolute left-0 top-[60%] -translate-y-1/2 z-10 cursor-pointer">
          <OurTeamPrev />
        </button>

        {/* Next */}
        <button className="team-next absolute right-0 top-[60%] -translate-y-1/2 z-10 cursor-pointer">
          <OurTeamNext />
        </button>

        {/* ===== Swiper ===== */}
        <div className="mt-16 px-10">
          {/* px diya taaki buttons overlap na kare */}

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2500 }}
            navigation={{
              prevEl: ".team-prev",
              nextEl: ".team-next",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {teamData.map((member) => (
              <SwiperSlide key={member.id}>
                <div className="flex flex-col items-center">
                  {/* Image */}
                  <div className="relative w-52 h-52 rounded-full overflow-hidden shadow-[0px_12px_105px_12px_#00000008]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Name */}
                  <h3 className="pt-8 text-[22px] font-bold leading-5.5 text-darkbrown">
                    {member.name}
                  </h3>

                  {/* Role */}
                  <p className="text-lightbrown leading-6 pt-1.75">
                    {member.role}
                  </p>

                  {/* Social */}
                  <div className="flex gap-2.5 pt-5">
                    <div className="w-11.25 h-11.25 rounded-full bg-pink flex items-center justify-center text-white cursor-pointer hover:scale-105 duration-300">
                      <Facebookicon />
                    </div>
                    <div className="w-11.25 h-11.25 rounded-full bg-pink flex items-center justify-center text-white cursor-pointer hover:scale-105 duration-300">
                      <Instaicon />
                    </div>
                    <div className="w-11.25 h-11.25 rounded-full bg-pink flex items-center justify-center text-white cursor-pointer hover:scale-105 duration-300">
                      <Youtubeicon />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Team;
