
import BestSells from "@/components/home/BestSells";
import Categories from "@/components/home/Categories";
import Explore from "@/components/home/Explore";
import Favourite from "@/components/home/Favourite";
import FollowUs from "@/components/home/FollowUs";
import HappyCustomer from "@/components/home/HappyCustomer";
import HeroSection from "@/components/home/HeroSection";
import SignUp from "@/components/home/SignUp";
import SummerSpecial from "@/components/home/SummerSpecial";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <Explore/>
     <Favourite/>
     <Categories/>
     <SummerSpecial/>
     <BestSells/>
     <HappyCustomer/>
     <SignUp/>
     <FollowUs/>
    </>
  );
}
