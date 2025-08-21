import React from "react";
import { Activity, TrendingUp } from "lucide-react";

interface PerformanceCardProps {
  performanceData: Array<{ label: string; value: number }>;
}

const PerformanceCard: React.FC<PerformanceCardProps> = ({ performanceData }) => {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "24px",
        padding: "2rem",
        border: "1px solid #f1f5f9",
        boxShadow: "0 8px 20px -6px rgba(0, 0, 0, 0.08)",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
        e.currentTarget.style.boxShadow = "0 12px 30px -8px rgba(253, 215, 65, 0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "0 8px 20px -6px rgba(253, 215, 65, 0.2)";
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "16px",
              background: "#20273A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Activity size={24} style={{ color: "#ffffff" }} />
          </div>
          <h3
            style={{
              fontSize: "1.125rem",
              fontWeight: "600",
              color: "#20273A",
              margin: "0",
            }}
          >
            Performa Toko
          </h3>
        </div>
      </div>

      <div
        style={{
          height: "140px",
          display: "flex",
          alignItems: "end",
          justifyContent: "space-between",
          gap: "8px",
          marginBottom: "1.5rem",
          padding: "0 8px",
        }}
      >
        {performanceData.map((item, index) => (
          <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
            <div
              style={{
                width: "100%",
                maxWidth: "20px",
                height: `${(item.value / 50) * 100}px`,
                background: index === 5 ? "linear-gradient(135deg, #20273A, #374151)" : "rgba(32, 39, 58, 0.3)",
                borderRadius: "4px",
                marginBottom: "8px",
                position: "relative",
              }}
            >
            </div>
            <span style={{ fontSize: "0.75rem", color: "#20273A", fontWeight: "500" }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "16px",
          borderTop: "2px solid rgba(32, 39, 58, 0.1)",
        }}
      >
        <span style={{ fontSize: "0.875rem", color: "#20273A", fontWeight: "500" }}>
          Omzet bulan ini
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <TrendingUp size={16} style={{ color: "#20273A" }} />
          <span style={{ fontSize: "1.125rem", fontWeight: "700", color: "#20273A" }}>
            20%
          </span>
        </div>
      </div>

    </div>
  );
};

export default PerformanceCard;