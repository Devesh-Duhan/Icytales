/** @format */
"use client";

import Image from "next/image";
import React from "react";

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
        </article>
        <aside className=" "></aside>
      </div>
    </div>
  );
};

export default SummerSpecial;
