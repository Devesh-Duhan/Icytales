import CommonHero from "@/components/common/CommonHero";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div>
      <CommonHero
        title="About Us"
        breadcrumb={
          <>
            <Link href="/">
              <span>Home</span>
            </Link>

            <span>/</span>

            <Link href="/about">
              <span>About Us</span>
            </Link>
          </>
        }
      />
    </div>
  );
};

export default Hero;
