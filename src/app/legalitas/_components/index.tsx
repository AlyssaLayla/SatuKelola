"use client";

import React from "react";
import {
  ChevronRight,
  Check,
  Clock,
  DollarSign,
  CheckCircle,
  User,
} from "lucide-react";
import { LegalStep } from "@/types/legalitas.type";

// Progress Header Component
interface ProgressHeaderProps {
  completionRate: number;
}

export const ProgressHeader: React.FC<ProgressHeaderProps> = ({
  completionRate,
}) => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #FCD34D, #F59E0B)",
        padding: "3rem 2rem",
        borderRadius: "1.5rem",
        marginBottom: "2rem",
        color: "#1F2937",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "2rem",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                margin: "0 0 0.5rem 0",
                color: "#1F2937",
              }}
            >
              LEGAL SIMPLIFIED
            </h1>
            <p
              style={{
                fontSize: "1.25rem",
                margin: 0,
                color: "#374151",
                fontWeight: "500",
              }}
            >
              Your one stop legality solution
            </p>
          </div>

          {/* OSS Logo placeholder */}
          <div
            style={{
              width: "200px",
              height: "120px",
              background: "#DC2626",
              borderRadius: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "1.5rem",
              fontWeight: "bold",
              flexShrink: 0,
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🦅</div>
              <div>OSS</div>
              <div style={{ fontSize: "0.75rem", opacity: 0.8 }}>
                KEMENTERIAN INVESTASI DAN HILIRISASI/BKPM
              </div>
            </div>
          </div>
        </div>

        {/* Yellow info box */}
        <div
          style={{
            background: "rgba(254, 240, 138, 0.9)",
            borderRadius: "1rem",
            padding: "1.5rem",
            marginBottom: "2rem",
            border: "2px solid #FCD34D",
          }}
        >
          <p
            style={{
              fontSize: "1.125rem",
              margin: 0,
              color: "#1F2937",
              fontWeight: "500",
              lineHeight: "1.6",
            }}
          >
            Ikuti langkah - langkah berikut untuk mengurus legalitas usaha
            secara mandiri
          </p>
        </div>

        {/* Progress bar */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.3)",
            borderRadius: "1rem",
            padding: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.75rem",
            }}
          >
            <span
              style={{ fontSize: "1rem", fontWeight: "600", color: "#1F2937" }}
            >
              Progress Anda
            </span>
            <span
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: "#1F2937",
              }}
            >
              {completionRate}%
            </span>
          </div>
          <div
            style={{
              width: "100%",
              height: "0.75rem",
              background: "rgba(255, 255, 255, 0.5)",
              borderRadius: "0.5rem",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${completionRate}%`,
                height: "100%",
                background: "linear-gradient(90deg, #10B981, #059669)",
                borderRadius: "0.5rem",
                transition: "width 0.5s ease",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Category Badge Component
interface CategoryBadgeProps {
  category: string;
}

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category }) => {
  const getCategoryColor = (cat: string): string => {
    const colors: Record<string, string> = {
      registration: "#3B82F6",
      licensing: "#8B5CF6",
      tax: "#EF4444",
      legal: "#F59E0B",
      insurance: "#10B981",
      reporting: "#6B7280",
    };
    return colors[cat] || "#6B7280";
  };

  const getCategoryLabel = (cat: string): string => {
    const labels: Record<string, string> = {
      registration: "Pendaftaran",
      licensing: "Perizinan",
      tax: "Perpajakan",
      legal: "Legal",
      insurance: "Asuransi",
      reporting: "Laporan",
    };
    return labels[cat] || cat;
  };

  return (
    <span
      style={{
        background: getCategoryColor(category) + "20",
        color: getCategoryColor(category),
        padding: "0.25rem 0.75rem",
        borderRadius: "9999px",
        fontSize: "0.75rem",
        fontWeight: "600",
      }}
    >
      {getCategoryLabel(category)}
    </span>
  );
};

// Step Card Component - Updated with blue card style
interface StepCardProps {
  step: LegalStep;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
  onToggleComplete: () => void;
}

export const StepCard: React.FC<StepCardProps> = ({
  step,
  isActive,
  isCompleted,
  onClick,
  onToggleComplete,
}) => {
  return (
    <div
      style={{
        background: "white",
        borderRadius: "1.5rem",
        overflow: "hidden",
        boxShadow: isActive
          ? "0 20px 40px -10px rgba(0, 0, 0, 0.15)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        border: isActive ? "3px solid #3B82F6" : "1px solid #E5E7EB",
        transition: "all 0.3s ease",
        marginBottom: "1.5rem",
        transform: isActive ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      {/* Header - Blue card style like in the image */}
      <div
        onClick={onClick}
        style={{
          padding: "1.5rem",
          background: isCompleted
            ? "linear-gradient(135deg, #10B981, #059669)"
            : "linear-gradient(135deg, #6366F1, #4F46E5)",
          color: "white",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div
            style={{
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              flexShrink: 0,
              fontSize: "1.25rem",
              fontWeight: "bold",
            }}
          >
            {isCompleted ? <Check className="w-6 h-6" /> : step.id}
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <h3
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                margin: "0 0 0.5rem 0",
                lineHeight: "1.4",
              }}
            >
              {step.title}
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                opacity: 0.9,
                margin: 0,
                lineHeight: "1.5",
              }}
            >
              {step.description}
            </p>
          </div>

          <ChevronRight
            className="w-6 h-6"
            style={{
              transform: isActive ? "rotate(90deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
              opacity: 0.8,
              flexShrink: 0,
            }}
          />
        </div>
      </div>

      {/* Expanded Content */}
      {isActive && (
        <div
          style={{
            padding: "2rem",
            background: "#F8FAFC",
            borderTop: "1px solid #E2E8F0",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            <div
              style={{
                background: "white",
                padding: "1.5rem",
                borderRadius: "1rem",
                border: "1px solid #E2E8F0",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "0.75rem",
                }}
              >
                <Clock className="w-5 h-5" style={{ color: "#3B82F6" }} />
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: "700",
                    color: "#1F2937",
                  }}
                >
                  Estimasi Waktu
                </span>
              </div>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#6B7280",
                  margin: 0,
                  fontWeight: "500",
                }}
              >
                {step.estimatedTime}
              </p>
            </div>

            <div
              style={{
                background: "white",
                padding: "1.5rem",
                borderRadius: "1rem",
                border: "1px solid #E2E8F0",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "0.75rem",
                }}
              >
                <DollarSign className="w-5 h-5" style={{ color: "#10B981" }} />
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: "700",
                    color: "#1F2937",
                  }}
                >
                  Biaya
                </span>
              </div>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#6B7280",
                  margin: 0,
                  fontWeight: "500",
                }}
              >
                {step.cost}
              </p>
            </div>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h4
              style={{
                fontSize: "1rem",
                fontWeight: "700",
                color: "#1F2937",
                marginBottom: "1rem",
              }}
            >
              Persyaratan yang Dibutuhkan:
            </h4>
            <ul style={{ margin: 0, paddingLeft: "1.5rem" }}>
              {step.requirements.map((req, index) => (
                <li
                  key={index}
                  style={{
                    fontSize: "0.95rem",
                    color: "#6B7280",
                    marginBottom: "0.5rem",
                    lineHeight: "1.5",
                  }}
                >
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "2rem",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                background: step.isOnline ? "#DCFCE7" : "#FEF3C7",
                color: step.isOnline ? "#166534" : "#92400E",
                padding: "0.5rem 1rem",
                borderRadius: "9999px",
                fontSize: "0.875rem",
                fontWeight: "600",
              }}
            >
              {step.isOnline ? "🌐 Online" : "🏢 Offline"}
            </span>

            <span
              style={{
                background:
                  step.priority === "high"
                    ? "#FEE2E2"
                    : step.priority === "medium"
                    ? "#FEF3C7"
                    : "#F3F4F6",
                color:
                  step.priority === "high"
                    ? "#991B1B"
                    : step.priority === "medium"
                    ? "#92400E"
                    : "#6B7280",
                padding: "0.5rem 1rem",
                borderRadius: "9999px",
                fontSize: "0.875rem",
                fontWeight: "600",
                textTransform: "capitalize",
              }}
            >
              Prioritas {step.priority}
            </span>

            <CategoryBadge category={step.category} />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleComplete();
            }}
            style={{
              width: "100%",
              padding: "1rem 1.5rem",
              background: isCompleted
                ? "linear-gradient(135deg, #F3F4F6, #E5E7EB)"
                : "linear-gradient(135deg, #10B981, #059669)",
              color: isCompleted ? "#6B7280" : "white",
              border: "none",
              borderRadius: "1rem",
              fontSize: "1rem",
              fontWeight: "700",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              boxShadow: isCompleted
                ? "none"
                : "0 4px 14px 0 rgba(16, 185, 129, 0.3)",
            }}
            onMouseOver={(e) => {
              if (!isCompleted) {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px 0 rgba(16, 185, 129, 0.4)";
              }
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = isCompleted
                ? "none"
                : "0 4px 14px 0 rgba(16, 185, 129, 0.3)";
            }}
          >
            {isCompleted ? (
              <>
                <CheckCircle className="w-5 h-5" />
                Selesai - Klik untuk batalkan
              </>
            ) : (
              <>
                <Check className="w-5 h-5" />
                Tandai Selesai
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

// Completion Celebration Component - Updated with OSS style
export const CompletionCelebration: React.FC = () => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #FEF3C7, #F59E0B)",
        borderRadius: "2rem",
        padding: "3rem 2rem",
        textAlign: "center",
        color: "#1F2937",
        marginTop: "3rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background illustration area */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "2rem",
          width: "200px",
          height: "150px",
          background: "rgba(255, 255, 255, 0.3)",
          borderRadius: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "4rem",
        }}
      >
        🎉👥
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: "4rem", marginBottom: "1.5rem" }}>🎉</div>
        <h3
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            color: "#1F2937",
          }}
        >
          Ayo urus legalitas usaha Anda!
        </h3>
        <p
          style={{
            fontSize: "1.25rem",
            margin: "0 0 2rem 0",
            color: "#374151",
            fontWeight: "500",
          }}
        >
          Mudah, cepat, dan terarah
        </p>

        <button
          style={{
            background: "linear-gradient(135deg, #6366F1, #4F46E5)",
            color: "white",
            padding: "1rem 2rem",
            borderRadius: "1rem",
            border: "none",
            fontSize: "1.125rem",
            fontWeight: "700",
            cursor: "pointer",
            boxShadow: "0 4px 14px 0 rgba(99, 102, 241, 0.3)",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 6px 20px 0 rgba(99, 102, 241, 0.4)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 4px 14px 0 rgba(99, 102, 241, 0.3)";
          }}
        >
          Akses Website OSS Sekarang
        </button>
      </div>
    </div>
  );
};
