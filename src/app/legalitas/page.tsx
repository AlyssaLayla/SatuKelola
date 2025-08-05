"use client";

import React from "react";
import { useStepProgress } from "./_hooks/legalitas.hook";
import { CompletionCelebration, ProgressHeader, StepCard } from "./_components";
import { legalStepsData } from "@/data/legalitas";

const LegalStepsPage: React.FC = () => {
  const {
    activeStep,
    setActiveStep,
    toggleStepCompletion,
    isStepCompleted,
    getCompletionRate,
  } = useStepProgress();

  const completionRate = getCompletionRate();
  const allStepsCompleted = completionRate === 100;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #FEF9C3, #FCD34D)",
        padding: "2rem 1rem",
      }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <ProgressHeader completionRate={completionRate} />

        <div style={{ marginBottom: "3rem" }}>
          {legalStepsData.map((step) => (
            <StepCard
              key={step.id}
              step={step}
              isActive={activeStep === step.id}
              isCompleted={isStepCompleted(step.id)}
              onClick={() =>
                setActiveStep(activeStep === step.id ? null : step.id)
              }
              onToggleComplete={() => toggleStepCompletion(step.id)}
            />
          ))}
        </div>

        {allStepsCompleted && <CompletionCelebration />}
      </div>
    </div>
  );
};

export default LegalStepsPage;
