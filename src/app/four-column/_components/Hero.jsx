import CommonHero from "@/components/common/CommonHero";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div>
      <CommonHero
        title="Four Column"
        breadcrumb={
          <>
            <Link href="/">
              <span>Home</span>
            </Link>

            <span>/</span>

            <Link href="/fourColumn">
              <span>Four Column</span>
            </Link>
          </>
        }
      />
    </div>
  );
};

export default Hero;
