"use client";

import React from "react";
import { useProcessExpansion } from "./_hooks/legalitas.hook";
import { LegalitasHeroSection } from "./_components/hero.component";
import { StepGuideSection } from "./_components/step-guide.component";
import { ProcessCardSection } from "./_components/proses.component";

const LegalStepsPage: React.FC = () => {
  const { activeProcess, toggleProcess } = useProcessExpansion();

  return (
    <div>
      <div>
        <LegalitasHeroSection />

        <StepGuideSection />

        <ProcessCardSection />
      </div>
    </div>
  );
};

export default LegalStepsPage;
