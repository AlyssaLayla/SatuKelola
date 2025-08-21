import React from "react";
import { Package, AlertTriangle, TrendingUp, TrendingDown } from "lucide-react";

interface SummaryData {
  totalItems: number;
  lowStock: number;
  expiringSoon: number;
  totalValue: number;
}

interface SummaryCardsProps {
  summaryData: SummaryData;
  isVisible: boolean;
  formatCurrency: (amount: any) => string;
}

const SummaryCards: React.FC<SummaryCardsProps> = ({ summaryData, isVisible, formatCurrency }) => {
  return (
    <>
      <style jsx>{`
        .summary-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-bottom: 40px;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? "translateY(0)" : "translateY(30px)"};
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s;
        }

        @media (max-width: 1200px) {
          .summary-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 768px) {
          .summary-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }

        @media (max-width: 480px) {
          .summary-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>
      
      <div className="summary-grid">
      {/* Total Items */}
      <div
        style={{
          background: "#ffffff",
          borderRadius: "24px",
          padding: "2rem",
          border: "1px solid rgba(34, 197, 94, 0.1)",
          boxShadow: "0 8px 20px -6px rgba(34, 197, 94, 0.15)",
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          height: "180px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
          e.currentTarget.style.boxShadow = "0 12px 30px -8px rgba(34, 197, 94, 0.25)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow = "0 8px 20px -6px rgba(34, 197, 94, 0.15)";
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #22c55e, #16a34a)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Package size={24} style={{ color: "#ffffff" }} />
          </div>
          <div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "500",
                color: "#16a34a",
                margin: "0",
              }}
            >
              Total Item
            </h3>
          </div>
        </div>
        <p
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            color: "#15803d",
            margin: "0",
            lineHeight: "1.1",
          }}
        >
          {summaryData.totalItems.toLocaleString()}
        </p>
      </div>

      {/* Low Stock */}
      <div
        style={{
          background: "#ffffff",
          borderRadius: "24px",
          padding: "2rem",
          border: "1px solid rgba(251, 191, 36, 0.1)",
          boxShadow: "0 8px 20px -6px rgba(251, 191, 36, 0.15)",
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          height: "180px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
          e.currentTarget.style.boxShadow = "0 12px 30px -8px rgba(251, 191, 36, 0.25)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow = "0 8px 20px -6px rgba(251, 191, 36, 0.15)";
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #f59e0b, #d97706)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <AlertTriangle size={24} style={{ color: "#ffffff" }} />
          </div>
          <div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "500",
                color: "#d97706",
                margin: "0",
              }}
            >
              Stok Rendah
            </h3>
          </div>
        </div>
        <p
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            color: "#d97706",
            margin: "0",
            lineHeight: "1.1",
          }}
        >
          {summaryData.lowStock}
        </p>
      </div>

      {/* Expiring Soon */}
      <div
        style={{
          background: "#ffffff",
          borderRadius: "24px",
          padding: "2rem",
          border: "1px solid rgba(239, 68, 68, 0.1)",
          boxShadow: "0 8px 20px -6px rgba(239, 68, 68, 0.15)",
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          height: "180px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
          e.currentTarget.style.boxShadow = "0 12px 30px -8px rgba(239, 68, 68, 0.25)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow = "0 8px 20px -6px rgba(239, 68, 68, 0.15)";
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #ef4444, #dc2626)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <TrendingDown size={24} style={{ color: "#ffffff" }} />
          </div>
          <div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#dc2626",
                margin: "0",
              }}
            >
              Kadaluarsa
            </h3>
          </div>
        </div>
        <p
          style={{
            fontSize: "2rem",
            fontWeight: "700",
            color: "#dc2626",
            margin: "0",
            lineHeight: "1.1",
          }}
        >
          {summaryData.expiringSoon}
        </p>
      </div>

      {/* Total Value */}
      <div
        style={{
          background: "#FDD741",
          borderRadius: "24px",
          padding: "2rem",
          border: "1px solid rgba(253, 215, 65, 0.3)",
          boxShadow: "0 8px 20px -6px rgba(253, 215, 65, 0.2)",
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          height: "180px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
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
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "16px",
              background: "#20273A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <TrendingUp size={24} style={{ color: "#ffffff" }} />
          </div>
          <div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "500",
                color: "#20273A",
                margin: "0",
              }}
            >
              Total Nilai
            </h3>
          </div>
        </div>
        <p
          style={{
            fontSize: "1.5rem",
            fontWeight: "700",
            color: "#20273A",
            margin: "0",
            lineHeight: "1.1",
          }}
        >
          {formatCurrency(summaryData.totalValue)}
        </p>
      </div>
      </div>
    </>
  );
};

export default SummaryCards;