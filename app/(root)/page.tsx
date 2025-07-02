"use client";
import AboutMe from "@/components/AboutMe";
import Cards from "@/components/Cards";
import HeroSection from "@/components/HeroSection";
import MyPortfolio from "@/components/MyPortfolio";
import Testimonials from "@/components/Testimonials";
export default function Home() {
  return (
    <section className="overflow-x-hidden">
      <HeroSection />
      <AboutMe />
      <Cards />
      <MyPortfolio/>
      <Testimonials/>
    </section>
  );
}
