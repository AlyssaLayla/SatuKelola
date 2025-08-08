"use client";

import React, { useState, useEffect } from "react";
import CategoriesSection from "./category-section.component";
import DiscussionForum from "./discussion-forum.component";
import {
  CATEGORIES,
  DISCUSSIONS,
  FILTER_OPTIONS,
  PAGINATION_CONFIG,
} from "../_constants/komunitas.constant";

export const CommunityDiscussionSection = () => {
  const [activeFilter, setActiveFilter] = useState("Recently active");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      const totalItems = CATEGORIES.length + DISCUSSIONS.length;
      setVisibleCards(Array.from({ length: totalItems }, (_, index) => index));
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <section
      style={{
        paddingTop: "100px",
        paddingBottom: "100px",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        <CategoriesSection
          categories={CATEGORIES}
          selectedCategories={selectedCategories}
          visibleCards={visibleCards}
          onToggleCategory={toggleCategory}
        />

        <DiscussionForum
          discussions={DISCUSSIONS}
          visibleCards={visibleCards}
          activeFilter={activeFilter}
          filterOptions={FILTER_OPTIONS}
          currentPage={currentPage}
          totalPages={PAGINATION_CONFIG.totalPages}
          onFilterChange={setActiveFilter}
          onPageChange={setCurrentPage}
        />
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding-top: 60px !important;
            padding-bottom: 60px !important;
          }

          section > div {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
        }

        @media (max-width: 480px) {
          section {
            padding-top: 40px !important;
            padding-bottom: 40px !important;
          }

          section > div {
            padding-left: 12px !important;
            padding-right: 12px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CommunityDiscussionSection;
