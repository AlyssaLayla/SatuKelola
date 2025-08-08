"use client";
import BenefitsSection from "./_components/benefit.component";
import MarketingAdvisorHero from "./_components/hero.component";
import QuizSection from "./_components/quiz.component";

const MarketingAdvisorPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <MarketingAdvisorHero />
      <BenefitsSection />
      <QuizSection />
    </div>
  );
};

export default MarketingAdvisorPage;