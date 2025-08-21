"use client";

import React, { useMemo, useState, useEffect } from "react";
import { Plus, Calendar } from "lucide-react";
import TransactionSummaryCard from "./_components/transaksi-card.component";
import TransactionTable from "./_components/transaksi-table.component";
import { transaksiData } from "@/data/transaksi";
import { calculateSummary } from "@/utils/transaksi.util";
import DateRangePicker from "@/components/date-picker.component";

const RiwayatTransaksiPage: React.FC = () => {
  const [dateRange, setDateRange] = useState<{
    start: Date | null;
    end: Date | null;
  }>({
    start: null,
    end: null,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const filteredTransactions = useMemo(() => {
    if (!dateRange.start || !dateRange.end) {
      return transaksiData;
    }

    return transaksiData.filter((transaction) => {
      const transactionDate = new Date(transaction.tanggal);
      return (
        transactionDate >= dateRange.start! && transactionDate <= dateRange.end!
      );
    });
  }, [dateRange]);

  const summary = useMemo(() => {
    return calculateSummary(filteredTransactions);
  }, [filteredTransactions]);

  const handleDateRangeChange = (
    startDate: Date | null,
    endDate: Date | null
  ) => {
    setDateRange({ start: startDate, end: endDate });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fefce8",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decorations */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-15rem",
            left: "-10rem",
            width: "30rem",
            height: "30rem",
            background: "FEF2C0",
            borderRadius: "50%",
            opacity: 0.7,
            filter: "blur(4rem)",
            animation: "float 6s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-15rem",
            right: "-15rem",
            width: "35rem",
            height: "35rem",
            background: "FEF2C0",
            borderRadius: "50%",
            opacity: 0.6,
            filter: "blur(5rem)",
            animation: "float 8s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* Header */}
      <div
        style={{
          background: "#ffffff",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(241, 245, 249, 0.8)",
          padding: "2rem 0",
          position: "relative",
          zIndex: 2,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(-20px)",
          transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "900",
                color: "#111827",
                margin: "0 0 0.5rem 0",
                lineHeight: "1.1",
                letterSpacing: "-0.02em",
              }}
            >
              <span style={{ color: "#20273A" }}> Riwayat Transaksi</span>
            </h1> 
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>

              <DateRangePicker onDateRangeChange={handleDateRangeChange} />


            {/* Add Transaction Button */}
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1rem 2rem",
                background: "#FDD741",
                color: "#20273A",
                fontWeight: "700",
                borderRadius: "20px",
                border: "2px solid rgba(255, 255, 255, 0.9)",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                letterSpacing: "0.025em",
                fontSize: "1rem",
                boxShadow: "0 8px 20px -6px rgba(253, 215, 65, 0.4)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 12px 30px -8px rgba(253, 215, 65, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 8px 20px -6px rgba(253, 215, 65, 0.4)";
              }}
            >
              <Plus size={20} />
              <span>Tambah Transaksi</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "3rem 2rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Summary Cards */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s",
            zIndex: 2,
          }}
        >
          <TransactionSummaryCard
            totalPemasukan={summary.totalPemasukan}
            totalPengeluaran={summary.totalPengeluaran}
            saldoBersih={summary.saldoBersih}
            transactions={filteredTransactions}
          />
        </div>

        {/* Transaction Table */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s",
          }}
        >
          <TransactionTable transactions={filteredTransactions} />
        </div>
      </div>

      {/* Global Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          h1 {
            font-size: 2rem !important;
          }
          
          .main-content {
            padding: 2rem 1.5rem !important;
          }
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 1.75rem !important;
          }
          
          p {
            font-size: 1rem !important;
          }
          
          .header {
            padding: 1.5rem 0 !important;
          }
          
          .header-container {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1rem !important;
          }
          
          .header-actions {
            width: 100% !important;
            justify-content: space-between !important;
          }
          
          .add-button {
            padding: 0.875rem 1.5rem !important;
            font-size: 0.875rem !important;
          }
          
          .main-content {
            padding: 2rem 1rem !important;
          }
        }

        @media (max-width: 640px) {
          h1 {
            font-size: 1.5rem !important;
          }
          
          .header-actions {
            flex-direction: column !important;
            gap: 0.75rem !important;
          }
          
          .date-picker,
          .add-button {
            width: 100% !important;
            justify-content: center !important;
          }
          
          .main-content {
            padding: 1.5rem 0.75rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default RiwayatTransaksiPage;