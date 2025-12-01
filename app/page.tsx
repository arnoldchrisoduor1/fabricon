// app/page.tsx - Updated
"use client";
import { useEffect } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/ui/Footer";
import Benefits from "@/sections/BenefitsSection";
import FeaturedCompanies from "@/sections/FeaturedCompanies";
import HeroSection from "@/sections/HeroSection";
import PricingSection from "@/sections/PricingSection";
import ServicesSection from "@/sections/ServicesSection";

export default function Home() {
  useEffect(() => {
  }, []);

  return (
    <div className="relative">
      <Navigation />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="benefits">
          <Benefits />
        </section>
        <section id="pricing">
          <PricingSection />
        </section>
        <section id="clients">
          <FeaturedCompanies />
        </section>
      </main>
      <Footer />
    </div>
  );
}