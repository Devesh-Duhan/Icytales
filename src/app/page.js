import Explore from "@/components/home/Explore";
import SignUp from "@/components/home/SignUp";
import Image from "next/image";
import Header from "@/components/common/Header";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <>
     {/* <Explore/> */}
     {/* <SignUp/> */}
      {/* Shared gradient parent for Header + Hero */}
      <div className="bg-[url(/images/heroBg.png)] bg-cover bg-no-repeat">
        <Header />
        <HeroSection />
      </div>
    </>
  );
}

