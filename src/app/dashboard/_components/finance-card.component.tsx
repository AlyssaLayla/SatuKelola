import React from "react";
import { DollarSign } from "lucide-react";

interface FinancialCardProps {
  keuanganData: {
    saldo: number;
    profit: number;
    profitPercentage: number;
    pemasukan: number;
    pemasukanPercentage: number;
    pengeluaran: number;
    pengeluaranPercentage: number;
    piutang: number;
  };
  formatCurrency: (amount: any) => string;
}

const FinancialCard: React.FC<FinancialCardProps> = ({ keuanganData, formatCurrency }) => {
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
        e.currentTarget.style.boxShadow = "0 12px 30px -8px rgba(34, 197, 94, 0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "0 8px 20px -6px rgba(34, 197, 94, 0.15)";
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #22c55e, #16a34a)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <DollarSign size={24} style={{ color: "#ffffff" }} />
          </div>
          <h3
            style={{
              fontSize: "1.125rem",
              fontWeight: "600",
              color: "#16a34a",
              margin: "0",
            }}
          >
            Keuangan Toko
          </h3>
        </div>
        <span style={{ fontSize: "0.75rem", color: "#6b7280", background: "#f3f4f6", padding: "4px 8px", borderRadius: "8px" }}>
          17 Juli 2025
        </span>
      </div>

      <div style={{ marginBottom: "1.5rem" }}>
        <h4 style={{ fontSize: "0.875rem", color: "#6b7280", margin: "0 0 8px 0", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Saldo Total
        </h4>
        <p style={{ fontSize: "2rem", fontWeight: "900", color: "#15803d", margin: "0" }}>
          {formatCurrency(keuanganData.saldo)}
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {[
          { label: "Profit", value: keuanganData.profit, percentage: keuanganData.profitPercentage, isPositive: true },
          { label: "Pemasukan", value: keuanganData.pemasukan, percentage: keuanganData.pemasukanPercentage, isPositive: true },
          { label: "Pengeluaran", value: keuanganData.pengeluaran, percentage: Math.abs(keuanganData.pengeluaranPercentage), isPositive: false }
        ].map((item, index) => (
          <div key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "0.875rem", color: "#6b7280" }}>{item.label}</span>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "0.875rem", fontWeight: "600", color: "#111827" }}>
                {formatCurrency(item.value)}
              </span>
              <span
                style={{
                  fontSize: "0.75rem",
                  color: item.isPositive ? "#10b981" : "#ef4444",
                  background: item.isPositive ? "#dcfce7" : "#fee2e2",
                  padding: "2px 6px",
                  borderRadius: "6px",
                  fontWeight: "600",
                }}
              >
                {item.isPositive ? "↗" : "↘"}{item.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default FinancialCard;