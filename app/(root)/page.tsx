"use client";
import AboutMe from "@/components/AboutMe";
import Cards from "@/components/Cards";
import HeroSection from "@/components/HeroSection";
import MyPortfolio from "@/components/MyPortfolio";
export default function Home() {
  return (
    <section>
      <HeroSection />
      <AboutMe />
      <Cards />
      <MyPortfolio/>
    </section>
  );
}
