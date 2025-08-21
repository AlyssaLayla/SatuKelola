import React from "react";
import { Users } from "lucide-react";

interface OrderStat {
  label: string;
  count: number;
  percentage: number;
  color: string;
}

interface OrdersSummaryCardProps {
  orderStatsData: OrderStat[];
}

const OrdersSummaryCard: React.FC<OrdersSummaryCardProps> = ({ orderStatsData }) => {
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
        e.currentTarget.style.boxShadow = "0 12px 30px -8px rgba(0, 0, 0, 0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "0 8px 20px -6px rgba(0, 0, 0, 0.08)";
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "16px",
            background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Users size={24} style={{ color: "#ffffff" }} />
        </div>
        <h3
          style={{
            fontSize: "1.125rem",
            fontWeight: "600",
            color: "#111827",
            margin: "0",
          }}
        >
          Ringkasan Pesanan
        </h3>
      </div>

      <div
        style={{
          height: "12px",
          backgroundColor: "#f3f4f6",
          borderRadius: "8px",
          marginBottom: "20px",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {orderStatsData.map((stat, index) => (
          <div
            key={index}
            style={{
              width: `${stat.percentage}%`,
              backgroundColor: stat.color,
              height: "100%",
            }}
          />
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }}>
        {orderStatsData.map((stat, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: stat.color,
                borderRadius: "50%",
              }}
            />
            <div>
              <div style={{ fontSize: "0.875rem", fontWeight: "600", color: "#111827" }}>
                {stat.count}
              </div>
              <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          paddingTop: "20px",
          borderTop: "2px solid #f3f4f6",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: "1.5rem", fontWeight: "700", color: "#22c55e" }}>26</span>
        </div>
        <div>
          <div style={{ fontSize: "1.125rem", fontWeight: "700", color: "#111827" }}>
            Pesanan Selesai
          </div>
          <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>
            Hari ini
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersSummaryCard;