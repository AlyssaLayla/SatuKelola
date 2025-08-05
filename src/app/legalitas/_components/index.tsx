"use client";

import React from "react";
import {
  ChevronRight,
  FileText,
} from "lucide-react";
import { OSSProcess } from "@/types/legalitas.type";

// Hero Section Component
export const HeroSection: React.FC = () => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #FCD34D, #F59E0B)",
        padding: "4rem 2rem",
        borderRadius: "2rem",
        marginBottom: "3rem",
        color: "#1F2937",
        textAlign: "center",
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
        <div style={{ fontSize: "4rem", marginBottom: "1.5rem" }}>🎯</div>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            margin: "0 0 1rem 0",
            color: "#1F2937",
          }}
        >
          Ayo Urus Legalitas Usaha Anda!
        </h1>
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
            background: "linear-gradient(135deg, #DC2626, #B91C1C)",
            color: "white",
            padding: "1rem 2rem",
            borderRadius: "1rem",
            border: "none",
            fontSize: "1.125rem",
            fontWeight: "700",
            cursor: "pointer",
            boxShadow: "0 4px 14px 0 rgba(220, 38, 38, 0.3)",
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            margin: "0 auto",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 6px 20px 0 rgba(220, 38, 38, 0.4)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 4px 14px 0 rgba(220, 38, 38, 0.3)";
          }}
          onClick={() => window.open("https://oss.go.id", "_blank")}
        >
          <span>🦅</span>
          Akses Website OSS Sekarang
        </button>
      </div>
    </div>
  );
};

// Page Header Component
export const PageHeader: React.FC = () => {
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

          {/* OSS Logo */}
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

        {/* Info box */}
        <div
          style={{
            background: "rgba(254, 240, 138, 0.9)",
            borderRadius: "1rem",
            padding: "1.5rem",
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
      </div>
    </div>
  );
};

// Step Guide Section Component
export const StepGuideSection: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Masuk ke oss.go.id",
      illustration: "🌐",
      bgColor: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
    },
    {
      id: 2,
      title: "Klik 'Panduan OSS' pada landing page",
      illustration: "📖",
      bgColor: "linear-gradient(135deg, #10B981, #047857)",
    },
    {
      id: 3,
      title: "Pilih kategori Usaha Mikro dan Kecil (UMK)",
      illustration: "🏪",
      bgColor: "linear-gradient(135deg, #8B5CF6, #6D28D9)",
    },
    {
      id: 4,
      title: "Pilih subkategori sesuai bisnis Anda",
      illustration: "🎯",
      bgColor: "linear-gradient(135deg, #F59E0B, #D97706)",
    },
    {
      id: 5,
      title: "Ikuti langkah pendaftaran",
      illustration: "📝",
      bgColor: "linear-gradient(135deg, #EF4444, #DC2626)",
    },
    {
      id: 6,
      title: "Isi data usaha & pemilik",
      illustration: "👤",
      bgColor: "linear-gradient(135deg, #06B6D4, #0891B2)",
    },
    {
      id: 7,
      title: "Unggah dokumen yang sesuai",
      illustration: "📎",
      bgColor: "linear-gradient(135deg, #84CC16, #65A30D)",
    },
    {
      id: 8,
      title: "Klik submit",
      illustration: "✅",
      bgColor: "linear-gradient(135deg, #F97316, #EA580C)",
    },
    {
      id: 9,
      title: "Cek dashboard untuk melihat update status",
      illustration: "📊",
      bgColor: "linear-gradient(135deg, #EC4899, #DB2777)",
    },
    {
      id: 10,
      title: "Dokumen Legal Anda sudah siap!",
      illustration: "🎉",
      bgColor: "linear-gradient(135deg, #14B8A6, #0F766E)",
    },
  ];

  return (
    <div style={{ marginBottom: "4rem" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#1F2937",
            marginBottom: "1rem",
          }}
        >
          Langkah-Langkah Mengurus Legalitas
        </h2>
        <p
          style={{
            fontSize: "1.125rem",
            color: "#6B7280",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Ikuti panduan step-by-step berikut untuk mengurus legalitas usaha
          secara mandiri di website OSS
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        {steps.map((step, index) => (
          <div
            key={step.id}
            style={{
              background: "white",
              borderRadius: "1.5rem",
              overflow: "hidden",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              border: "1px solid #E5E7EB",
              transition: "all 0.3s ease",
              transform: "translateY(0)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 20px 40px -10px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
            }}
          >
            {/* Header dengan warna berbeda */}
            <div
              style={{
                background: step.bgColor,
                padding: "1.5rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background pattern */}
              <div
                style={{
                  position: "absolute",
                  top: "-50%",
                  right: "-50%",
                  width: "100%",
                  height: "100%",
                  background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
                  pointerEvents: "none",
                }}
              />
              
              <div style={{ position: "relative", zIndex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
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
                      fontSize: "1rem",
                      fontWeight: "bold",
                      flexShrink: 0,
                    }}
                  >
                    {step.id}
                  </div>
                  <div
                    style={{
                      fontSize: "3rem",
                      flexShrink: 0,
                    }}
                  >
                    {step.illustration}
                  </div>
                </div>
                
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "bold",
                    color: "white",
                    margin: 0,
                    lineHeight: "1.4",
                  }}
                >
                  {step.title}
                </h3>
              </div>
            </div>

            {/* Body dengan info tambahan */}
            <div style={{ padding: "1.5rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#6B7280",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: step.bgColor,
                  }}
                />
                Step {step.id} dari 10
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to action after steps */}
      <div
        style={{
          background: "linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(79, 70, 229, 0.1))",
          borderRadius: "1.5rem",
          padding: "2rem",
          textAlign: "center",
          border: "2px solid rgba(99, 102, 241, 0.2)",
        }}
      >
        <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>🚀</div>
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#1F2937",
            marginBottom: "0.5rem",
          }}
        >
          Siap Memulai?
        </h3>
        <p
          style={{
            fontSize: "1rem",
            color: "#6B7280",
            marginBottom: "1.5rem",
          }}
        >
          Akses website OSS sekarang dan ikuti langkah-langkah di atas
        </p>
        <button
          style={{
            background: "linear-gradient(135deg, #6366F1, #4F46E5)",
            color: "white",
            padding: "0.75rem 2rem",
            borderRadius: "1rem",
            border: "none",
            fontSize: "1rem",
            fontWeight: "600",
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
          onClick={() => window.open("https://oss.go.id", "_blank")}
        >
          🌐 Mulai di OSS Sekarang
        </button>
      </div>
    </div>
  );
};

// Process Card Component
interface ProcessCardProps {
  process: OSSProcess;
  isActive: boolean;
  onClick: () => void;
}

export const ProcessCard: React.FC<ProcessCardProps> = ({
  process,
  isActive,
  onClick,
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
      {/* Header */}
      <div
        onClick={onClick}
        style={{
          padding: "1.5rem",
          background: "linear-gradient(135deg, #6366F1, #4F46E5)",
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
              fontSize: "1.5rem",
            }}
          >
            {process.illustration}
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
              {process.title}
            </h3>
            <p
              style={{
                fontSize: "0.95rem",
                opacity: 0.9,
                margin: 0,
                lineHeight: "1.5",
              }}
            >
              {process.description}
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
          <div style={{ marginBottom: "2rem" }}>
            <h4
              style={{
                fontSize: "1rem",
                fontWeight: "700",
                color: "#1F2937",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <FileText className="w-5 h-5" style={{ color: "#3B82F6" }} />
              Persyaratan yang Dibutuhkan:
            </h4>
            <ul style={{ margin: 0, paddingLeft: "1.5rem" }}>
              {process.requirements.map((req, index) => (
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
              background: "rgba(99, 102, 241, 0.1)",
              borderRadius: "1rem",
              padding: "1.5rem",
              border: "1px solid rgba(99, 102, 241, 0.2)",
            }}
          >
            <p
              style={{
                fontSize: "0.9rem",
                color: "#4F46E5",
                margin: 0,
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              💡 Proses ini dilakukan langsung di website OSS (oss.go.id)
            </p>
          </div>
        </div>
      )}
    </div>
  );
};