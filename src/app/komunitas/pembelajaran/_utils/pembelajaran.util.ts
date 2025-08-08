export const getLevelColor = (level: string): string => {
  switch (level) {
    case "beginner":
      return "#4CAF50";
    case "intermediate":
      return "#FFC107";
    case "advanced":
      return "#D32F2F";
    default:
      return "#6B7280";
  }
};

export const getLevelLabel = (level: string): string => {
  switch (level) {
    case "beginner":
      return "Pemula";
    case "intermediate":
      return "Menengah";
    case "advanced":
      return "Lanjutan";
    default:
      return "Unknown";
  }
};