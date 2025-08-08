"use client";

import React from "react";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
  isActive?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  className = "",
}) => {
  const handleClick = (href?: string) => {
    if (href) {
      window.location.href = href;
    }
  };

  return (
    <nav
      aria-label="Breadcrumb"
      className={`breadcrumbs-nav ${className}`}
      style={{
        marginBottom: "2rem",
      }}
    >
      <ol
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
          flexWrap: "wrap",
        }}
        className="breadcrumbs-list"
      >
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
            className="breadcrumb-item"
          >
            {item.href && !item.isActive ? (
              <button
                onClick={() => handleClick(item.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#64748b",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  padding: "0.25rem 0.5rem",
                  borderRadius: "6px",
                  transition: "all 0.2s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
                className="breadcrumb-link"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#f1f5f9";
                  e.currentTarget.style.color = "#334155";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#64748b";
                }}
              >
                {item.label}
              </button>
            ) : (
              <span
                style={{
                  color: item.isActive ? "#111827" : "#64748b",
                  fontSize: "0.875rem",
                  fontWeight: item.isActive ? "600" : "500",
                  padding: "0.25rem 0.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
                className={`breadcrumb-text ${item.isActive ? "active" : ""}`}
              >
                {index === 0 && !item.href && (
                  <Home size={14} style={{ marginRight: "0.125rem" }} />
                )}
                {item.label}
              </span>
            )}

            {index < items.length - 1 && (
              <ChevronRight
                size={14}
                style={{
                  color: "#94a3b8",
                  flexShrink: 0,
                }}
                className="breadcrumb-separator"
              />
            )}
          </li>
        ))}
      </ol>

      <style jsx>{`
        @media (max-width: 768px) {
          .breadcrumbs-nav {
            margin-bottom: 1.5rem !important;
          }

          .breadcrumbs-list {
            gap: 0.375rem !important;
          }

          .breadcrumb-item {
            gap: 0.375rem !important;
          }

          .breadcrumb-link,
          .breadcrumb-text {
            font-size: 0.8rem !important;
            padding: 0.2rem 0.375rem !important;
          }

          .breadcrumb-separator {
            width: 12px !important;
            height: 12px !important;
          }
        }

        @media (max-width: 480px) {
          .breadcrumb-link,
          .breadcrumb-text {
            font-size: 0.75rem !important;
            padding: 0.15rem 0.25rem !important;
          }

          .breadcrumbs-list {
            gap: 0.25rem !important;
          }

          .breadcrumb-item {
            gap: 0.25rem !important;
          }
        }

        /* Hover effects for better UX */
        .breadcrumb-link:focus {
          outline: 2px solid #fdd741 !important;
          outline-offset: 2px !important;
        }

        .breadcrumb-text.active {
          background-color: #fee480 !important;
          border-radius: 6px !important;
        }
      `}</style>
    </nav>
  );
};
