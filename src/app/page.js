import Header from "@/components/common/Header";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <>
      {/* Shared gradient parent for Header + Hero */}
      <div className="bg-[url(/images/heroBg.png)] bg-cover bg-no-repeat">
        <Header />
        <HeroSection />
      </div>
    </>
  );
}
