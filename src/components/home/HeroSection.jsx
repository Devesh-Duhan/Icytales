import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ContactArrow } from "../common/Icons";

const HeroSection = () => {
  return (
    <section className=" pt-0 lg:pt-9.25 relative">
      <div className="absolute top-0 z-1"><Image src="/images/homesidepic.png" alt="side-pic" width={244} height={393}/></div>
      <div className="max-w-369.75 realative z-5 w-full mx-auto justify-between gap-0 xl:gap-8 px-4 flex max-sm:flex-col xl:items-center">
        
          {/* Left Content */}
          <div className="pt-8 sm:pt-20 lg:pt-20 xl:pt-41.75 z-10">
            {/* Welcome Tag */}
            <div className="flex items-center max-sm:justify-center gap-3 mb-5">
              <span className="w-10 h-0.5 bg-darkbrown"></span>
              <p className="text-[25px] lg:text-[30px] xl:text-[40px] text-[#0F0200] berkshire">
                Welcome to The
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="lg:max-w-210.5 max-sm:text-center w-full text-[40px] md:text-[55px] lg:text-[80px] xl:text-[112px] xl:leading-27 berkshire font-normal mb-5 ">
              <span className="bekshire text-darkbrown">Discover </span>
              <span className="bekshire text-pink italic">Sweet</span>
              <br />
              <span className="bekshire text-darkbrown">Delights!</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[18px] md:text-[20px] max-sm:text-center xl:text-[22px] leading-7.5 text-[#0F0200] max-w-[560.15px] mb-4 md:mb-8">
              Relish the timeless taste of handcrafted ice cream, made with
              passion and the finest ingredients.
            </p>

            {/* CTA Button */}
            <div className="flex max-sm:justify-center max-sm:items-center">
              <Link
              href="/flavors"
              className="inline-flex mb-2 md:mb-25 lg:mb- items-50.5center gap-2 lg:gap-4 px-6 md:px-8 py-3 md:py-4 bg-darkpurple text-white text-[11px] md:text-[14px] lg:text-[16px] font-semibold rounded-[30px] hover:shadow-lg hover:shadow-darkpurple/30 transition-all duration-300 hover:scale-105"
            >
              Browse Our Classic Flavors
              <ContactArrow />
            </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="max-lg:pt-10 max-md:pt-10 max-sm:pt-10 max-xl:mx-auto">
            <Image className="max-sm:max-w-75  max-md:max-w-100 max-xl:max-w-137.5 max-lg:max-w-112.5" src="/images/homehero.png" alt="hero-img" width={669} height={783}/>
          </div>
        
      </div>
      <div className="mt-0 lg:-mt-20 mx-auto flex justify-center "><Image src="/images/homewave.png" alt="wave" width={1920} height={125}/></div>
    </section>
  );
};

export default HeroSection;