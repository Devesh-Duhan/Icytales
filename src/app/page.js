import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";
import HeroSection from "@/components/home/HeroSection";
import Explore from "@/components/home/Explore";

import SignUp from "@/components/home/SignUp";
import SummerSpecial from "@/components/home/SummerSpecial";


export default function Home() {
  return (
    <>
      {/* Shared gradient parent for Header + Hero */}
      <div className="bg-[url(/images/heroBg.png)] bg-cover bg-no-repeat">
        <Header/>
        <HeroSection />
        
        <ScrollToTop/>
      </div>
     {/* <Explore/>
     <Favourite/>
    
     <SignUp/> */}
     {/* <Categories/> */}
      <Explore />
      {/* <Favourite /> */}
      <SummerSpecial />
      <SignUp />
      <Footer/>
    </>
  );
}
