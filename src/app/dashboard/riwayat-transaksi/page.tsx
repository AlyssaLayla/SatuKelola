"use client";

import React, { useMemo, useState } from "react";
import TransactionSummaryCard from "./_components/transaksi-card.component";
import TransactionTable from "./_components/transaksi-table.component";
import { transaksiData } from "@/data/transaksi";
import { calculateSummary } from "@/utils/transaksi.util";
import DateRangePicker from "@/components/date-picker.component";

const RiwayatTransaksiPage: React.FC = () => {
  // State untuk date range filtering
  const [dateRange, setDateRange] = useState<{
    start: Date | null;
    end: Date | null;
  }>({
    start: null,
    end: null,
  });

  // Filter transactions berdasarkan date range
  const filteredTransactions = useMemo(() => {
    if (!dateRange.start || !dateRange.end) {
      return transaksiData;
    }

    return transaksiData.filter((transaction) => {
      const transactionDate = new Date(transaction.tanggal);
      return (
        transactionDate >= dateRange.start! &&
        transactionDate <= dateRange.end!
      );
    });
  }, [dateRange]);

  // Calculate summary dari filtered transactions
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
        backgroundColor: "#f8fafc",
        padding: "0",
        position: "relative"
      }}
    >
      {/* Header Section */}
      <div
        style={{
          backgroundColor: "white",
          borderBottom: "1px solid #e5e7eb",
          padding: "24px 32px"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "1200px",
            margin: "0 auto"
          }}
        >
          {/* Title */}
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#111827",
              margin: "0"
            }}
          >
            Riwayat Transaksi
          </h1>
          
          {/* Date Range Picker */}
          <div>
            <DateRangePicker onDateRangeChange={handleDateRangeChange} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "32px",
          position: "relative"
        }}
      >
        {/* Summary Cards */}
        <div style={{ marginBottom: "32px" }}>
          <TransactionSummaryCard
            totalPemasukan={summary.totalPemasukan}
            totalPengeluaran={summary.totalPengeluaran}
            saldoBersih={summary.saldoBersih}
            transactions={filteredTransactions}
          />
        </div>

        {/* Transaction Table */}
        <div style={{ position: "relative" }}>
          <TransactionTable transactions={filteredTransactions} />
          
          {/* Floating Add Button */}
          <a
            href="#"
            style={{
              position: "absolute",
              bottom: "24px",
              right: "24px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              backgroundColor: "#fbbf24",
              borderRadius: "50%",
              textDecoration: "none",
              boxShadow: "0 8px 24px -4px rgba(0, 0, 0, 0.2)",
              transition: "all 0.2s ease",
              zIndex: 10
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.boxShadow = "0 12px 32px -4px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 24px -4px rgba(0, 0, 0, 0.2)";
            }}
          >
            <span
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "white",
                lineHeight: "1"
              }}
            >
              +
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default RiwayatTransaksiPage;