import React from "react";
import { formatCurrency } from "@/utils/transaksi.util";
import TransactionChart from "../_components/transaksi-chart.component";
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
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "24px",
        marginBottom: "32px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "24px",
          border: "1px solid #e5e7eb",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3
          style={{
            fontSize: "14px",
            fontWeight: "500",
            color: "#6b7280",
            marginBottom: "8px",
            margin: "0 0 8px 0",
          }}
        >
          Total Pemasukan
        </h3>
        <p
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#10b981",
            margin: "0",
          }}
        >
          {formatCurrency(totalPemasukan)}
        </p>
      </div>

      <div
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "24px",
          border: "1px solid #e5e7eb",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3
          style={{
            fontSize: "14px",
            fontWeight: "500",
            color: "#6b7280",
            marginBottom: "8px",
            margin: "0 0 8px 0",
          }}
        >
          Total Pengeluaran
        </h3>
        <p
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#ef4444",
            margin: "0",
          }}
        >
          {formatCurrency(totalPengeluaran)}
        </p>
      </div>

      <div
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "24px",
          border: "1px solid #e5e7eb",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#6b7280",
                marginBottom: "8px",
                margin: "0 0 8px 0",
              }}
            >
              Saldo Bersih
            </h3>
            <p
              style={{
                fontSize: "28px",
                fontWeight: "700",
                color: saldoBersih >= 0 ? "#3b82f6" : "#ef4444",
                margin: "0",
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
