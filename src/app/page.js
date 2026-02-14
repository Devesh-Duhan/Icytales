import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ScrollToTop from "@/components/common/ScrollToTop";
import HeroSection from "@/components/home/HeroSection";

import Categories from "@/components/home/Categories";


export default function Home() {
  return (
    <>
      {/* Shared gradient parent for Header + Hero */}
      <div className="bg-[url(/images/heroBg.png)] bg-cover bg-no-repeat">
        <Header />
        <HeroSection />
        <Footer/>
        <ScrollToTop/>
      </div>
     {/* <Explore/>
     <Favourite/>
    
     <SignUp/> */}
     <Categories/>
    </>
  );
}
