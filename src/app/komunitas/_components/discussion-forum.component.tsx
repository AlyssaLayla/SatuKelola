"use client";

import React from "react";
import FilterHeader from "./filter.component";
import { DiscussionCard } from "./discussion-card.component";
import Pagination from "./pagination.component";
import { Discussion } from "../_constants/komunitas.constant";

interface DiscussionForumProps {
  discussions: Discussion[];
  visibleCards: number[];
  activeFilter: string;
  filterOptions: string[];
  currentPage: number;
  totalPages: number;
  onFilterChange: (filter: string) => void;
  onPageChange: (page: number) => void;
}

export const DiscussionForum: React.FC<DiscussionForumProps> = ({
  discussions,
  visibleCards,
  activeFilter,
  filterOptions,
  currentPage,
  totalPages,
  onFilterChange,
  onPageChange,
}) => {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "32px",
        padding: "3rem",
        boxShadow: "0 8px 20px -6px rgba(0, 0, 0, 0.08)",
        border: "1px solid #f1f5f9",
      }}
    >
      {/* Forum Header */}
      <FilterHeader
        activeFilter={activeFilter}
        filterOptions={filterOptions}
        onFilterChange={onFilterChange}
      />

      {/* Discussion List */}
      <div style={{ marginBottom: "3rem" }}>
        {discussions.map((discussion, index) => (
          <DiscussionCard
            key={discussion.id}
            discussion={discussion}
            isVisible={visibleCards.includes(index)}
            index={index}
            isLast={index === discussions.length - 1}
          />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />

      <style jsx>{`
        @media (max-width: 768px) {
          div:first-child {
            padding: 2rem !important;
            border-radius: 24px !important;
          }
        }

        @media (max-width: 480px) {
          div:first-child {
            padding: 1.5rem !important;
            border-radius: 20px !important;
          }

          div:first-child > div:nth-child(2) {
            margin-bottom: 2rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default DiscussionForum;
