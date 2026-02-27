import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FacebookLink,
  FooterEmail,
  FooterLocation,
  FooterMobile,
  InstagramLink,
} from "./Icons";

const Footer = () => {
  return (
    <div className="bg-darkpurple relative">
      <div className="absolute bottom-0 left-0 z-1">
        <Image
          src="/images/footericecream.png"
          alt="footer pic"
          width={244}
          height={293}
        />
      </div>
      <div className="max-w-293 relative z-5 w-full justify-center  md:flex gap-12.5 xl:gap-[109.09px] mx-auto px-4 lg:pt-25 pt-10">
        <div className="max-lg:flex-col flex gap-10 lg:gap-10 xl:gap-16.5">
          <div className="flex items-center">
            <Image
              className="max-sm:w-37.5"
              src="/images/footerlogo.png"
              alt="footer logo"
              width={195}
              height={75}
            />
          </div>
          <div>
            <h3 className="text-[18px] sm:text-[22px] font-semibold text-white">
              Navigation
            </h3>
            <ul className="grid grid-cols-2 max-sm:grid-cols-3 max-md:grid-cols-6 gap-x-2 lg:gap-x-6.25 xl:gap-x-[47.68px] gap-y-4.5 text-[#CFB6E2] text-[12px] sm:text-[14px] font-light max-w-md  lg:mx-auto pt-6.25">
              <li className="flex items-center gap-1 md:gap-4">
                <span className="min-w-2 max-w-2 h-2 bg-pink-400 rounded-full"></span>
                <Link href="#">Home</Link>
              </li>

              <li className="flex items-center gap-1 md:gap-4">
                <span className="min-w-2 max-w-2 h-2 bg-pink-400 rounded-full"></span>
                <Link href="#">Products</Link>
              </li>

              <li className="flex items-center gap-1 md:gap-4 relative">
                <span className="min-w-2 max-w-2 h-2 bg-pink-400 rounded-full"></span>
                <Link href="#" className="relative">
                  About
                </Link>
              </li>

              <li className="flex items-center gap-1 md:gap-4">
                <span className="min-w-2 max-w-2 h-2 bg-pink-400 rounded-full"></span>
                <Link href="#">Blog</Link>
              </li>

              <li className="flex items-center gap-1 md:gap-4">
                <span className="min-w-2 max-w-2 h-2 bg-pink-400 rounded-full"></span>
                <Link href="#">Shop</Link>
              </li>

              <li className="flex items-center gap-1 md:gap-4">
                <span className="min-w-2 max-w-2 h-2 bg-pink-400 rounded-full"></span>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-2 sm:gap-6.25 xl:gap-[69.38px] max-md:justify-between max-md:pt-10 max-lg:pt-32 ">
          <div className="flex flex-col gap-6 ">
            <div className="flex gap-2 sm:gap-5.5 cursor-pointer">
              <FooterLocation />
              <div>
                <h3 className="text-[14px] sm:text-[16px] font-semibold text-white">
                  Address:
                </h3>
                <p className="text-[10px] sm:text-[14px] text-[#CFB6E2] pt-2 w-[120px] sm:w-[206.62px]">
                  121 King Street Melbourne, 3000, Australia
                </p>
              </div>
            </div>
            <div className="flex gap-2 sm:gap-5.5 cursor-pointer">
              <FooterEmail />
              <div>
                <h3 className="text-[14px] sm:text-[16px] font-semibold text-white">
                  Email:
                </h3>
                <p className="text-[10px] sm:text-[14px] text-[#CFB6E2] pt-2.5">
                  info@example.com
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-7.5">
            <div className="flex gap-1 sm:gap-5.5 cursor-pointer">
              <div className="pt-2">
                <FooterMobile />
              </div>
              <div>
                <h3 className="text-[12px] sm:text-[16px] lg:text-[20px] font-bold text-white">
                  +123456780123
                </h3>
                <p className="text-[8px] sm:text-[14px] text-[#CFB6E2] pt-1.5 ">
                  Got Questions? Call us 24/7
                </p>
              </div>
            </div>
            <div className="flex gap-[15.36px] cursor-pointer">
              <Link href="">
                <FacebookLink />
              </Link>
              <div className="w-8 h-8 sm:w-11.5 sm:h-11.5 flex items-center justify-center bg-[#FFFFFF1A] rounded-full">
                <Link href="">
                  <Image
                    src="/images/whatsapp1.jpg"
                    className="max-sm:w-6 max-sm:h-6"
                    alt="pic"
                    width={35}
                    height={35}
                  />
                </Link>
              </div>
              <Link href="">
                <InstagramLink />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-285.5 border-[#FFFFFF26] border-t w-full mx-auto px-4 mt-22.5">
        <p className="text-[10px] sm:text-[12px] text-[#CFB6E2] text-center py-4.5">
          Copyright © 2024 BlackRise Themes Inc All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
