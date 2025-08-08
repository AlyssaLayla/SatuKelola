"use client";

import React, { useMemo, useState } from "react";
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
        backgroundColor: "#f8fafc",
        padding: "0",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderBottom: "1px solid #e5e7eb",
          padding: "24px 32px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#111827",
              margin: "0",
            }}
          >
            Riwayat Transaksi
          </h1>

          <div>
            <DateRangePicker onDateRangeChange={handleDateRangeChange} />
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "32px",
          position: "relative",
        }}
      >
        <div style={{ marginBottom: "32px" }}>
          <TransactionSummaryCard
            totalPemasukan={summary.totalPemasukan}
            totalPengeluaran={summary.totalPengeluaran}
            saldoBersih={summary.saldoBersih}
            transactions={filteredTransactions}
          />
        </div>

        <div style={{ position: "relative" }}>
          <TransactionTable transactions={filteredTransactions} />

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
              zIndex: 10,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.boxShadow =
                "0 12px 32px -4px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 8px 24px -4px rgba(0, 0, 0, 0.2)";
            }}
          >
            <span
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "white",
                lineHeight: "1",
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
