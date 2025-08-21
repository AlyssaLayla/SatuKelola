import React, { useState, useEffect } from "react";
import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";
import { formatCurrency } from "@/utils/transaksi.util";
import TransactionChart from "./transaksi-chart.component";
import { Transaction } from "@/types/transaksi.type";

interface TransactionSummaryCardProps {
  totalPemasukan: number;
  totalPengeluaran: number;
  saldoBersih: number;
  transactions: Transaction[];
}

const TransactionSummaryCard: React.FC<TransactionSummaryCardProps> = ({
  totalPemasukan,
  totalPengeluaran,
  saldoBersih,
  transactions,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // Unified card styles
  const baseCardStyle = {
    background: "#ffffff",
    borderRadius: "24px",
    padding: "1.5rem 2rem",
    position: "relative" as const,
    overflow: "hidden" as const,
    cursor: "pointer",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    height: "200px",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center" as const, // Ini yang ditambahkan untuk center vertical
  };

  const createHoverHandlers = (shadowColor: string) => ({
    onMouseEnter: (e: React.MouseEvent<HTMLDivElement>) => {
      e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
      e.currentTarget.style.boxShadow = `0 6px 15px -4px ${shadowColor.replace('0.15', '0.25')}`;
    },
    onMouseLeave: (e: React.MouseEvent<HTMLDivElement>) => {
      e.currentTarget.style.transform = "translateY(0) scale(1)";
      e.currentTarget.style.boxShadow = `0 8px 20px -6px ${shadowColor}`;
    }
  });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "24px",
        marginBottom: "40px",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Total Pemasukan */}
      <div
        style={{
          ...baseCardStyle,
          border: "1px solid rgba(34, 197, 94, 0.1)",
          boxShadow: "0 8px 20px -6px rgba(34, 197, 94, 0.15)",
        }}
        {...createHoverHandlers("rgba(34, 197, 94, 0.15)")}
      >
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
            <TrendingUp size={24} style={{ color: "#ffffff" }} />
          </div>
          <div>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#16a34a",
                margin: "0",
                letterSpacing: "0.05em",
              }}
            >
              Total Pemasukan
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
          {formatCurrency(totalPemasukan)}
        </p>
      </div>

      {/* Total Pengeluaran */}
      <div
        style={{
          ...baseCardStyle,
          border: "1px solid rgba(239, 68, 68, 0.1)",
          boxShadow: "0 8px 20px -6px rgba(239, 68, 68, 0.15)",
        }}
        {...createHoverHandlers("rgba(239, 68, 68, 0.15)")}
      >
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
                letterSpacing: "0.05em",
              }}
            >
              Total Pengeluaran
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
          {formatCurrency(totalPengeluaran)}
        </p>
      </div>

      {/* Saldo Bersih dengan Chart */}
      <div
        style={{
          ...baseCardStyle,
          border: "1px solid rgba(253, 215, 65, 0.3)",
          boxShadow: "0 8px 20px -6px rgba(253, 215, 65, 0.2)",
          justifyContent: "center", // Override untuk card ini karena layout berbeda
        }}
        {...createHoverHandlers("rgba(253, 215, 65, 0.2)")}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <div>
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
                  width: "48px",
                  height: "48px",
                  borderRadius: "16px",
                  background:
                    saldoBersih >= 0
                      ? "#20273A"
                      : "linear-gradient(135deg, #ef4444, #dc2626)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <DollarSign size={24} style={{ color: "#ffffff" }} />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    color: saldoBersih >= 0 ? "#20273A" : "#dc2626",
                    margin: "0",
                    letterSpacing: "0.05em",
                  }}
                >
                  Saldo Bersih
                </h3>
              </div>
            </div>
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                color: saldoBersih >= 0 ? "#20273A" : "#dc2626",
                margin: "0",
                lineHeight: "1.1",
              }}
            >
              {saldoBersih >= 0 ? "+" : ""}
              {formatCurrency(saldoBersih)}
            </p>
          </div>

          <div
            style={{
              flexShrink: 0,
              marginLeft: "16px",
              transform: "scale(1.3)",
              transformOrigin: "center right",
            }}
          >
            <TransactionChart
              transactions={transactions}
              saldoBersih={saldoBersih}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionSummaryCard;