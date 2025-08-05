"use client";

import { useState } from "react";
import { StepProgress } from "@/types/legalitas.type";
import { legalStepsData } from "@/data/legalitas";

export const useStepProgress = () => {
  const [progress, setProgress] = useState<StepProgress[]>([]);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const toggleStepCompletion = (stepId: number) => {
    setProgress((prev) => {
      const existingIndex = prev.findIndex((p) => p.stepId === stepId);
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          isCompleted: !updated[existingIndex].isCompleted,
          completedAt: !updated[existingIndex].isCompleted
            ? new Date().toISOString()
            : undefined,
        };
        return updated;
      } else {
        return [
          ...prev,
          {
            stepId,
            isCompleted: true,
            completedAt: new Date().toISOString(),
          },
        ];
      }
    });
  };

  const isStepCompleted = (stepId: number): boolean => {
    return progress.find((p) => p.stepId === stepId)?.isCompleted || false;
  };

  const getCompletionRate = (): number => {
    const completedSteps = progress.filter((p) => p.isCompleted).length;
    return Math.round((completedSteps / legalStepsData.length) * 100);
  };

  return {
    progress,
    activeStep,
    setActiveStep,
    toggleStepCompletion,
    isStepCompleted,
    getCompletionRate,
  };
};
