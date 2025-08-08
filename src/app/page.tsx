'use client'; 
import React from "react";
import LandingNavbar from "@/components/navbar.component";
import LandingHeroSection from "./_components/hero.component";
import ServicesSection from "./_components/service.component";
import TestimonialsSection from "./_components/testimoni.component";
// import { LandingFooter } from "./LandingFooter";

// Main Landing Page Component
const LandingMainPage = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <LandingHeroSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Footer */}
      {/* <LandingFooter /> */}
    </div>
  );
};

export default LandingMainPage;