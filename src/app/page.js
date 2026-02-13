import FavouritesSwiper from "@/components/common/FvouritesSwiper";
import Explore from "@/components/home/Explore";
import Favourite from "@/components/home/Favourite";
import SignUp from "@/components/home/SignUp";
import Image from "next/image";
import Header from "@/components/common/Header";
import HeroSection from "@/components/home/HeroSection";
/** @format */

import SummerSpecial from "@/components/home/SummerSpecial";

export default function Home() {
  return (
    <>
      {/* Shared gradient parent for Header + Hero */}
      <div className="bg-[url(/images/heroBg.png)] bg-cover bg-no-repeat">
        <Header />
        <HeroSection />
      </div>
      <Explore />
      <Favourite />
      <SummerSpecial />
      <SignUp />
    </>
  );
}
