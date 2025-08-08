import React from "react";
import HeroSection from "./_components/hero.component";
import CommunityDiscussionSection from "./_components/discussion-section.component";

const KomunitasMainPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Community Discussion Section */}
      <CommunityDiscussionSection />
    </div>
  );
};

export default KomunitasMainPage;