import React from "react";
import { Package, AlertTriangle } from "lucide-react";

interface StockItem {
  name: string;
  quantity: string;
  iconComponent: any;
}

interface StockStatusCardProps {
  stokSectionData: StockItem[];
}

const StockStatusCard: React.FC<StockStatusCardProps> = ({ stokSectionData }) => {
  // Batasi hanya 3 item pertama
  const limitedStockData = stokSectionData.slice(0, 2);

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
            background: "linear-gradient(135deg, #f59e0b, #d97706)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Package size={24} style={{ color: "#ffffff" }} />
        </div>
        <h3
          style={{
            fontSize: "1.125rem",
            fontWeight: "600",
            color: "#111827",
            margin: "0",
          }}
        >
          Status Stok
        </h3>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {limitedStockData.map((item, index) => {
          const IconComponent = item.iconComponent;
          const isLowStock = index === 1;
          return (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "16px",
                backgroundColor: isLowStock ? "#fef3c7" : "#f0fdf4",
                borderRadius: "16px",
                border: `1px solid ${isLowStock ? "#fcd34d" : "#bbf7d0"}`,
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: isLowStock ? "#f59e0b" : "#22c55e",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <IconComponent size={20} style={{ color: "#ffffff" }} />
                {isLowStock && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-2px",
                      right: "-2px",
                      width: "12px",
                      height: "12px",
                      backgroundColor: "#ef4444",
                      borderRadius: "50%",
                      border: "2px solid #ffffff",
                    }}
                  />
                )}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    color: "#111827",
                    marginBottom: "4px",
                  }}
                >
                  {item.name}
                </div>
                <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>
                  {isLowStock ? "Perlu restok segera" : "Stok tersedia"}
                </div>
              </div>
              <div
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  color: isLowStock ? "#f59e0b" : "#22c55e",
                }}
              >
                {item.quantity}
              </div>
            </div>
          );
        })}
      </div>

     
    </div>
  );
};

export default StockStatusCard;