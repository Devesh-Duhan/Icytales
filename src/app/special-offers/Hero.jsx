import CommonHero from "@/components/common/CommonHero";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div>
      <CommonHero
        title="Special Offers"
        breadcrumb={
          <>
            <Link href="/">
              <span>Home</span>
            </Link>

            <span>/</span>

            <Link href="/pages">
              <span>Pages</span>
            </Link>

            <span>/</span>

            <Link href="/special-offers">
              <span>Special Offers</span>
            </Link>
          </>
        }
      />
    </div>
  );
};

export default Hero;
