/** @format */
"use client";

import Image from "next/image";
import React from "react";
import Button from "../common/Button";
import { ArrowIcon } from "../common/Icons";

const SummerSpecial = () => {
  return (
    <div className="w-full bg-[linear-gradient(105deg,#582686_55%,#f53b90_55%)] h-screen">
      <div className="container flex items-center justify-between h-full">
        <article className="max-w-199.25 w-full">
          <h2 className="heading text-[112px]! leading-28! text-white max">
            Summer Special!
          </h2>
          <p className="text-white text-[30px] mt-10">
            Buy One Sundae, Get One 50% Off!
          </p>
          <div className="flex items-center gap-3.5">
            <Button
              theme="primary"
              height="h-12"
              width="w-44"
              leading="leading-5"
              className="  flex gap-[17.65px]"
              type="button">
              Get This Deal
              <ArrowIcon />
            </Button>
            <p className="text-white">Use code: SUMMER50 at checkout.</p>
          </div>
        </article>
        <aside className=" "></aside>
      </div>
    </div>
  );
};

export default SummerSpecial;
