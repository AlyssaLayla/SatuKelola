"use client";

import React from "react";
import { Filter } from "lucide-react";

interface FilterHeaderProps {
  activeFilter: string;
  filterOptions: string[];
  onFilterChange: (filter: string) => void;
}

export const FilterHeader: React.FC<FilterHeaderProps> = ({
  activeFilter,
  filterOptions,
  onFilterChange,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "2rem",
        paddingBottom: "2rem",
        borderBottom: "1px solid #f1f5f9",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <h2
        style={{
          fontSize: "1.75rem",
          fontWeight: "700",
          color: "#111827",
          margin: 0,
          letterSpacing: "-0.02em",
        }}
      >
        100 Topics
      </h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Filter size={20} style={{ color: "#64748b" }} />
        <select
          value={activeFilter}
          onChange={(e) => onFilterChange(e.target.value)}
          style={{
            background: "#f8fafc",
            border: "1px solid #e2e8f0",
            borderRadius: "12px",
            padding: "0.75rem 1rem",
            fontSize: "0.95rem",
            color: "#374151",
            fontWeight: "500",
            cursor: "pointer",
            outline: "none",
            minWidth: "160px",
          }}
        >
          {filterOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div:first-child {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1.5rem !important;
          }

          h2 {
            font-size: 1.5rem !important;
          }

          div:first-child > div:last-child {
            width: 100% !important;
            justify-content: space-between !important;
          }

          select {
            flex: 1 !important;
            min-width: auto !important;
          }
        }

        @media (max-width: 480px) {
          h2 {
            font-size: 1.3rem !important;
          }

          select {
            padding: 0.6rem 0.8rem !important;
            font-size: 0.9rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default FilterHeader;
