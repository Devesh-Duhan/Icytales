/** @format */
"use client";
import React from "react";
import Button from "../common/Button";
import { ArrowIcon } from "../common/Icons";
import Image from "next/image";
import Link from "next/link";

const SummerSpecial = () => {
  return (
    <div className="w-full bg-[linear-gradient(105deg,#582686_55%,#f53b90_55%)] h-screen relative overflow-hidden">
      <div className="container flex items-center justify-between h-full">
        <article className="max-w-135 w-full">
          <h2 className="heading text-[112px]! leading-28! text-white max">
            Summer Special!
          </h2>
          <p className="text-white text-[30px] mt-10">
            Buy One Sundae, Get One 50% Off!
          </p>
          <div className="flex mt-9 items-center gap-3.5">
            <Link href="/special-offers">
              <Button
                theme="primary"
                height="h-12"
                width="w-44"
                leading="leading-5"
                className="  flex gap-[17.65px]"
                type="button"
              >
                Get This Deal
                {/* <ArrowIcon /> */}
              </Button>
            </Link>
            <p className="text-white">Use code: SUMMER50 at checkout.</p>
          </div>
        </article>
        <aside className="  ">
          <Image
            src="/images/summer-special-icecream.png"
            alt="Summer Special"
            width={658}
            height={540}
          />
        </aside>
      </div>
      <Image
        src="/images/special-rightimage.png"
        alt="Summer Special Decoration"
        width={222}
        height={369}
        className="absolute top-1/2 -right-28 transform -translate-x-1/2 -translate-y-1/2 "
      />
      <Image
        src="/images/summer-special-triangle.png"
        alt="Summer Special Decoration"
        width={47}
        height={52}
        className="absolute top-115 left-28 transform translate-x-30 -translate-y-1/2 "
      />
      <Image
        src="/images/summer-special-dots.png"
        alt="Summer Special Decoration"
        width={120}
        height={120}
        className="absolute top-154 left-28 transform translate-x-10 -translate-y-1/2"
      />
    </div>
  );
};

export default SummerSpecial;
