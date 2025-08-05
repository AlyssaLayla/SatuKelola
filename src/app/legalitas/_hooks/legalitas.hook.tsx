"use client";

import { useState } from "react";

export const useProcessExpansion = () => {
  const [activeProcess, setActiveProcess] = useState<number | null>(null);

  const toggleProcess = (processId: number) => {
    setActiveProcess(activeProcess === processId ? null : processId);
  };

  return {
    activeProcess,
    toggleProcess,
  };
};