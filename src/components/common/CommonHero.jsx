"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const CommonHero = ({ title }) => {
  return (
    <section className="w-full py-37.5 max-lg:py-32 max-md:py-26 max-sm:py-20 bg-[linear-gradient(106.17deg,#EFD7EF_8%,#F5F9FC_40%,#F8EAE1_66%,#EAF8F9_91%)] flex flex-col gap-8.75 max-md:gap-6  max-sm:gap-4 items-center justify-center">
      {/* Title */}
      <h1 className="text-[80px] max-lg:text-7xl max-md:text-6xl max-sm:text-5xl berkshire leading-20 font-semibold text-darkbrown text-center px-2">
        {title}
      </h1>

      {/* Breadcrumb */}
      <div className="px-8.5 text-lg max-lg:px-7 max-md:px-5 max-lg:py-4 max-md:py-3  max-sm:py-1 py-4.5 rounded-[35px] bg-white shadow-[0px_2px_73px_2px_#0000000D] max-sm:px-3.5 max-md:text-base flex max-lg:gap-6 max-md:gap-4 max-sm:gap-3 gap-8.5">
        <>
          <Link href="/">
            <span>Home</span>
          </Link>

          <span>/</span>

          <Link href="/about">
            <span> {title}</span>
          </Link>
        </>
      </div>
    </section>
  );
};

export default CommonHero;
