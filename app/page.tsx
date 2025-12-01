import Benefits from "@/sections/Benefits";
import HeroSection from "@/sections/HeroSection";
import ServicesSection from "@/sections/ServicesSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <Benefits />
    </div>
  );
}
