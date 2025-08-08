"use client";

import React from "react";
import CategoryCard from "./category-card.component";
import { Category } from "../_constants/komunitas.constant";

interface CategoriesSectionProps {
  categories: Category[];
  selectedCategories: string[];
  visibleCards: number[];
  onToggleCategory: (categoryId: string) => void;
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  categories,
  selectedCategories,
  visibleCards,
  onToggleCategory,
}) => {
  return (
    <div style={{ marginBottom: "80px" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
        }}
      >
        {categories.map((category, index) => (
          <CategoryCard
            key={category.id}
            category={category}
            isSelected={selectedCategories.includes(category.id)}
            isVisible={visibleCards.includes(index)}
            index={index}
            onToggle={onToggleCategory}
          />
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          div:first-child > div {
            grid-template-columns: repeat(
              auto-fit,
              minmax(280px, 1fr)
            ) !important;
            gap: 20px !important;
          }
        }

        @media (max-width: 768px) {
          div:first-child {
            margin-bottom: 60px !important;
          }

          div:first-child > div {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }

        @media (max-width: 480px) {
          div:first-child {
            margin-bottom: 40px !important;
          }

          div:first-child > div {
            gap: 12px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CategoriesSection;
