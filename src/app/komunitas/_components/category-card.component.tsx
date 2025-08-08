"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { Category } from "../_constants/komunitas.constant";

interface CategoryCardProps {
  category: Category;
  isSelected: boolean;
  isVisible: boolean;
  index: number;
  onToggle: (categoryId: string) => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  isSelected,
  isVisible,
  index,
  onToggle,
}) => {
  return (
    <div
      className={`category-card transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{
        background: "#ffffff",
        borderRadius: "24px",
        padding: "2rem",
        boxShadow: isSelected
          ? `0 8px 20px -6px ${category.color}30`
          : "0 4px 12px -4px rgba(0, 0, 0, 0.08)",
        border: isSelected
          ? `3px solid ${category.color}`
          : "1px solid #f1f5f9",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        animationDelay: `${index * 0.1}s`,
        transitionDelay: `${index * 0.1}s`,
      }}
      onClick={() => onToggle(category.id)}
      onMouseEnter={(e) => {
        if (!isSelected) {
          e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
          e.currentTarget.style.boxShadow =
            "0 6px 16px -4px rgba(0, 0, 0, 0.12)";
          e.currentTarget.style.borderColor = "#FEE480";
          e.currentTarget.style.background = `#FEE48005`;
        }
      }}
      onMouseLeave={(e) => {
        if (!isSelected) {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow =
            "0 4px 12px -4px rgba(0, 0, 0, 0.08)";
          e.currentTarget.style.borderColor = "#f1f5f9";
          e.currentTarget.style.background = "#ffffff";
        }
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "16px",
              background: `linear-gradient(135deg, ${category.color}, ${category.color}dd)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <category.icon
              size={24}
              style={{
                color:
                  category.color === "#FDD741" || category.color === "#FEE480"
                    ? "#111827"
                    : "#ffffff",
              }}
            />
          </div>

          <div>
            <h3
              style={{
                fontSize: "1.125rem",
                fontWeight: "600",
                color: isSelected ? "#D3B336" : "#111827",
                marginBottom: "0.25rem",
                transition: "color 0.3s ease",
              }}
            >
              {category.name}
            </h3>
            <p
              style={{
                fontSize: "0.875rem",
                color: "#64748b",
                margin: 0,
              }}
            >
              {category.count} diskusi
            </p>
          </div>
        </div>

        <ChevronRight
          size={20}
          style={{
            color: isSelected ? category.color : "#90939D",
            transition: "color 0.3s ease",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          top: "-10px",
          right: "-10px",
          width: "60px",
          height: "60px",
          background: `linear-gradient(135deg, ${category.color}20, ${category.color}10)`,
          borderRadius: "50%",
          transition: "opacity 0.3s ease",
          opacity: isSelected ? 0.3 : 0.1,
        }}
      />

      <style jsx>{`
        .category-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @media (max-width: 1024px) {
          .category-card {
            min-width: 280px !important;
          }
        }

        @media (max-width: 768px) {
          .category-card {
            min-width: 100% !important;
            padding: 1.5rem !important;
          }

          .category-card h3 {
            font-size: 1rem !important;
          }

          .category-card p {
            font-size: 0.8rem !important;
          }
        }

        @media (max-width: 480px) {
          .category-card {
            padding: 1.25rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CategoryCard;
