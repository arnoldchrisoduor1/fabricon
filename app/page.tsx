import Benefits from "@/sections/BenefitsSection";
import HeroSection from "@/sections/HeroSection";
import PricingSection from "@/sections/PricingSection";
import ServicesSection from "@/sections/ServicesSection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <Benefits />
      <PricingSection />
    </div>
  );
}
