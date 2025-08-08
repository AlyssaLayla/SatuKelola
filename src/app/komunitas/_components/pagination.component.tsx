"use client";

import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        paddingTop: "2rem",
        borderTop: "1px solid #f1f5f9",
      }}
    >
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "12px",
          background: currentPage === 1 ? "#f8fafc" : "#20273A",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: currentPage === 1 ? "not-allowed" : "pointer",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          if (currentPage !== 1) {
            e.currentTarget.style.background = "#151A27";
          }
        }}
        onMouseLeave={(e) => {
          if (currentPage !== 1) {
            e.currentTarget.style.background = "#20273A";
          }
        }}
      >
        <ArrowLeft
          size={18}
          style={{
            color: currentPage === 1 ? "#90939D" : "#ffffff",
          }}
        />
      </button>

      <div
        className="pagination-numbers"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        {[1, 2, 3, 4].map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "12px",
              background: page === currentPage ? "#20273A" : "transparent",
              border: "none",
              color: page === currentPage ? "#ffffff" : "#64748b",
              fontSize: "0.95rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              if (page !== currentPage) {
                e.currentTarget.style.background = "#f8fafc";
                e.currentTarget.style.color = "#111827";
              }
            }}
            onMouseLeave={(e) => {
              if (page !== currentPage) {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#64748b";
              }
            }}
          >
            {page}
          </button>
        ))}

        <span
          style={{
            color: "#64748b",
            fontSize: "0.95rem",
            margin: "0 0.5rem",
          }}
        >
          ...
        </span>

        <button
          onClick={() => onPageChange(totalPages)}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "12px",
            background: currentPage === totalPages ? "#20273A" : "transparent",
            border: "none",
            color: currentPage === totalPages ? "#ffffff" : "#64748b",
            fontSize: "0.95rem",
            fontWeight: "600",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            if (currentPage !== totalPages) {
              e.currentTarget.style.background = "#f8fafc";
              e.currentTarget.style.color = "#111827";
            }
          }}
          onMouseLeave={(e) => {
            if (currentPage !== totalPages) {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#64748b";
            }
          }}
        >
          {totalPages}
        </button>
      </div>

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "12px",
          background: currentPage === totalPages ? "#f8fafc" : "#20273A",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: currentPage === totalPages ? "not-allowed" : "pointer",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          if (currentPage !== totalPages) {
            e.currentTarget.style.background = "#151A27";
          }
        }}
        onMouseLeave={(e) => {
          if (currentPage !== totalPages) {
            e.currentTarget.style.background = "#20273A";
          }
        }}
      >
        <ArrowRight
          size={18}
          style={{
            color: currentPage === totalPages ? "#90939D" : "#ffffff",
          }}
        />
      </button>

      <style jsx>{`
        @media (max-width: 640px) {
          .pagination-numbers {
            gap: 0.25rem !important;
          }

          .pagination-numbers button {
            width: 35px !important;
            height: 35px !important;
            font-size: 0.85rem !important;
          }

          .pagination-numbers span {
            font-size: 0.85rem !important;
            margin: 0 0.25rem !important;
          }
        }

        @media (max-width: 480px) {
          /* Hide some page numbers on very small screens */
          .pagination-numbers button:nth-child(3),
          .pagination-numbers button:nth-child(4) {
            display: none !important;
          }

          .pagination-numbers {
            gap: 0.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Pagination;
