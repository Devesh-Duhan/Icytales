import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ContactArrow } from "../common/Icons";

const HeroSection = () => {
  return (
    <section className="pt-10 sm:pt-16 lg:pt-24 relative overflow-hidden">
      {/* Decorative side image - hidden on mobile to avoid overlap */}
      <div className="absolute top-0 left-0 z-1 opacity-40 xl:opacity-100 hidden lg:block">
        <Image src="/images/homesidepic.png" alt="side-pic" width={244} height={393} priority />
      </div>

      <div className="container relative z-10 w-full mx-auto px-4 flex flex-col xl:flex-row items-center justify-between gap-10">
        
          {/* Left Content */}
          <div className="w-full xl:w-1/2 flex flex-col items-center xl:items-start text-center xl:text-left z-10">
            {/* Welcome Tag */}
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <span className="w-8 md:w-12 h-0.5 bg-darkbrown"></span>
              <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#0F0200] berkshire">
                Welcome to The
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[112px] xl:leading-[1.1] berkshire font-normal mb-6">
              <span className="text-darkbrown">Discover </span>
              <span className="text-pink italic">Sweet</span>
              <br className="hidden sm:block" />
              <span className="text-darkbrown"> Delights!</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl xl:text-2xl leading-relaxed text-[#0F0200] max-w-[600px] mb-8 md:mb-12">
              Relish the timeless taste of handcrafted ice cream, made with
              passion and the finest ingredients.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center xl:justify-start w-full">
              <Link
                href="/flavors"
                className="inline-flex items-center gap-3 lg:gap-4 px-8 md:px-10 py-4 md:py-5 bg-darkpurple text-white text-sm md:text-base lg:text-lg font-semibold rounded-[40px] hover:shadow-xl hover:shadow-darkpurple/30 transition-all duration-300 hover:scale-105"
              >
                Browse Our Classic Flavors
                <ContactArrow />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full xl:w-1/2 flex justify-center xl:justify-end mt-12 xl:mt-0">
            <div className="relative w-full max-w-[320px] sm:max-w-112.5 lg:max-w-137.5 xl:max-w-167.25">
              <Image 
                src="/images/homehero.png" 
                alt="hero-img" 
                width={669} 
                height={783} 
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        
      </div>

      {/* Hero Wave - Ensures smooth transition to next section */}
      <div className="w-full mt-12 lg:-mt-10 overflow-hidden">
        <Image 
          src="/images/homewave.png" 
          alt="wave" 
          width={1920} 
          height={120} 
          className="w-full h-auto min-w-300 lg:min-w-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;