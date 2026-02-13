import CommonHero from "@/components/common/CommonHero";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div>
      <CommonHero
        title="Privacy Policy"
        breadcrumb={
          <>
            <Link href="/">
              <span>Home</span>
            </Link>

            <span>/</span>

            <Link href="/privacy-policy">
              <span>Privacy Policy</span>
            </Link>
          </>
        }
      />
    </div>
  );
};

export default Hero;
