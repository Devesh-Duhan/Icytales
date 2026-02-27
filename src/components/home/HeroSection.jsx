import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ContactArrow } from "../common/Icons";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-5.5">
      <div className="max-w-369.75 w-full mx-auto px-4">
        <div className="flex flex-col justify-center lg:flex-row items-center py-10 lg:py-16 gap-8 lg:gap-0">
          {/* Left Content */}
          <div className="max-w-210.5 w-full z-10">
            {/* Welcome Tag */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-0.5 bg-darkbrown"></span>
              <p className="text-[40px] text-[#0F0200] berkshire">
                Welcome to The
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="text-[48px] max-w-210.5 w-full md:text-[56px] lg:text-[112px] leading-27 berkshire font-normal mb-5 ">
              <span className="bekshire text-darkbrown">Discover </span>
              <span className="bekshire text-pink italic">Sweet</span>
              <br />
              <span className="bekshire text-darkbrown">Delights!</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[22px] leading-7.5 text-[#0F0200] max-w-[560.15px] mb-8">
              Relish the timeless taste of handcrafted ice cream, made with
              passion and the finest ingredients.
            </p>

            {/* CTA Button */}
            <Link
              href="/about-us"
              className="inline-flex items-center gap-4 px-8 py-4 bg-darkpurple text-white text-[16px] font-semibold rounded-[30px] hover:shadow-lg hover:shadow-darkpurple/30 transition-all duration-300 hover:scale-105"
            >
              Browse Our Classic Flavors
              <ContactArrow />
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative flex items-center justify-center lg:justify-end w-full lg:w-auto">
            {/* Background Circle */}
            <div
              className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] lg:max-w-[728px] rounded-[728px] lg:top-[-37px] lg:left-[-59px] bg-[linear-gradient(to_bottom,#FFFFFF,#000000)]"
            ></div>

            {/* Ice Cream Image */}
            <Image
              src="/images/heroIceCream.png"
              alt="Delicious Ice Cream"
              width={669}
              height={783}
              className="relative max-w-[669px] w-full z-10 drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      {/* <div className="w-full -mb-[1px]">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40L80 35C160 30 320 20 480 25C640 30 800 50 960 55C1120 60 1280 50 1360 45L1440 40V80H1360C1280 80 1120 80 960 80C800 80 640 80 480 80C320 80 160 80 80 80H0V40Z"
            fill="url(#waveGradient)"
          />
          <path
            d="M0 40L80 35C160 30 320 20 480 25C640 30 800 50 960 55C1120 60 1280 50 1360 45L1440 40"
            stroke="url(#waveStroke)"
            strokeWidth="1.5"
            fill="none"
          />
          <defs>
            <linearGradient
              id="waveGradient"
              x1="0"
              y1="0"
              x2="1440"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#EAF8F9" />
              <stop offset="30%" stopColor="#F8EAE1" />
              <stop offset="60%" stopColor="#EFD7EF" />
              <stop offset="100%" stopColor="#E8F4FA" />
            </linearGradient>
            <linearGradient
              id="waveStroke"
              x1="0"
              y1="0"
              x2="1440"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#D5EFF1" />
              <stop offset="30%" stopColor="#F0DDD0" />
              <stop offset="60%" stopColor="#E5C5E0" />
              <stop offset="100%" stopColor="#D5EFF1" />
            </linearGradient>
          </defs>
        </svg>
      </div> */}
    </section>
  );
};

export default HeroSection;