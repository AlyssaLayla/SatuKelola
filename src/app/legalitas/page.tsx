"use client";

import React from "react";
import { useProcessExpansion } from "./_hooks/legalitas.hook";
import { HeroSection, PageHeader, ProcessCard, StepGuideSection } from "./_components";
import { ossProcessData } from "@/data/legalitas";

const LegalStepsPage: React.FC = () => {
  const { activeProcess, toggleProcess } = useProcessExpansion();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #FEF9C3, #FCD34D)",
        padding: "2rem 1rem",
      }}
    >
      <div style={{ maxWidth: "72rem", margin: "0 auto" }}>
        <PageHeader />
        
        <HeroSection />

        <StepGuideSection />

        <div style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#1F2937",
              marginBottom: "2rem",
              textAlign: "center",
            }}
          >
            Proses Legalitas Apa Saja yang Bisa Dilakukan di OSS
          </h2>
          
          {ossProcessData.map((process) => (
            <ProcessCard
              key={process.id}
              process={process}
              isActive={activeProcess === process.id}
              onClick={() => toggleProcess(process.id)}
            />
          ))}
        </div>

        {/* Footer Info */}
        <div
          style={{
            background: "rgba(255, 255, 255, 0.8)",
            borderRadius: "1.5rem",
            padding: "2rem",
            textAlign: "center",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#1F2937",
              marginBottom: "1rem",
            }}
          >
            Siap Mengurus Legalitas Usaha?
          </h3>
          <p
            style={{
              fontSize: "1rem",
              color: "#6B7280",
              marginBottom: "1.5rem",
              lineHeight: "1.6",
            }}
          >
            Kunjungi website OSS resmi untuk memulai proses legalitas usaha Anda.
            Semua proses dilakukan secara online dan terintegrasi.
          </p>
          <button
            style={{
              background: "linear-gradient(135deg, #DC2626, #B91C1C)",
              color: "white",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.75rem",
              border: "none",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 4px 14px 0 rgba(220, 38, 38, 0.3)",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
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
            🌐 Buka Website OSS
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalStepsPage;