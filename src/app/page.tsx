"use client";
import React from "react";
import LandingNavbar from "@/components/navbar.component";
import LandingHeroSection from "./_components/hero.component";
import ServicesSection from "./_components/service.component";
import TestimonialsSection from "./_components/testimoni.component";
import LandingFooter from "@/components/footer.componnet";

const LandingMainPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <LandingHeroSection />

      <ServicesSection />

      <TestimonialsSection />

      <LandingFooter />
    </div>
  );
};

export default LandingMainPage;
