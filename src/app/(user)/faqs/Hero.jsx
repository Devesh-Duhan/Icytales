import CommonHero from "@/components/common/CommonHero";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div>
      <CommonHero
        title="Faq's"
        breadcrumb={
          <>
            <Link href="/">
              <span>Home</span>
            </Link>

            <span>/</span>

            <Link href="/faqs">
              <span>Faq's</span>
            </Link>
          </>
        }
      />
    </div>
  );
};

export default Hero;
