"use client";

import React, { useMemo, useState, useEffect } from "react";
import { Package, AlertTriangle } from "lucide-react";
import FinancialCard from "./_components/finance-card.component";
import PerformanceCard from "./_components/performance-card.component";
import OrdersSummaryCard from "./_components/summary-card.component";
import StockStatusCard from "./_components/stok-card.component";
import DigitalStoresCard from "./_components/store-card.component";

// Mock data dengan struktur yang lebih kaya
const mockTransaksiData = [
  { jenis: "Pemasukan", kredit: 150000, debet: 0, tanggal: "2024-08-20" },
  { jenis: "Pengeluaran", kredit: 0, debet: 85000, tanggal: "2024-08-20" },
  { jenis: "Pemasukan", kredit: 75000, debet: 0, tanggal: "2024-08-19" },
  { jenis: "Pengeluaran", kredit: 0, debet: 120000, tanggal: "2024-08-19" },
  { jenis: "Pemasukan", kredit: 200000, debet: 0, tanggal: "2024-08-18" },
];

const performanceData = [
  { label: "Sen", value: 25 },
  { label: "Sel", value: 30 },
  { label: "Rab", value: 35 },
  { label: "Kam", value: 40 },
  { label: "Jum", value: 20 },
  { label: "Sab", value: 45 },
  { label: "Min", value: 38 },
];

const keuanganData = {
  saldo: 2750000,
  profit: 1250000,
  profitPercentage: 15.2,
  pemasukan: 3500000,
  pemasukanPercentage: 12.5,
  pengeluaran: 2250000,
  pengeluaranPercentage: -8.3,
  piutang: 450000,
};

const orderStatsData = [
  { label: "Selesai", count: 26, percentage: 45, color: "#22c55e" },
  { label: "Proses", count: 8, percentage: 25, color: "#f59e0b" },
  { label: "Pending", count: 5, percentage: 20, color: "#ef4444" },
  { label: "Batal", count: 2, percentage: 10, color: "#6b7280" },
];

const stokSectionData = [
  { name: "Beras Premium", quantity: "25 karung", iconComponent: Package },
  { name: "Minyak Goreng", quantity: "8 botol", iconComponent: AlertTriangle },
  { name: "Ayam Potong", quantity: "12 ekor", iconComponent: Package },
  { name: "Kemasan Box", quantity: "150 pcs", iconComponent: Package },
];

const digitalStoresData = [
  { name: "Tokopedia", subtitle: "Toko Online", status: "active" },
  { name: "Shopee", subtitle: "E-commerce", status: "active" },
  { name: "Instagram", subtitle: "Social Media", status: "inactive" },
  { name: "WhatsApp", subtitle: "Business", status: "active" },
  { name: "Grab Food", subtitle: "Food Delivery", status: "inactive" },
];

const formatCurrency = (amount: any) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
};

const calculateSummary = (transactions: any) => {
  const totalPemasukan = transactions
    .filter((t: any) => t.jenis === "Pemasukan")
    .reduce((sum: any, t: any) => sum + t.kredit, 0);

  const totalPengeluaran = transactions
    .filter((t: any) => t.jenis === "Pengeluaran")
    .reduce((sum: any, t: any) => sum + t.debet, 0);

  return {
    totalPemasukan,
    totalPengeluaran,
    saldoBersih: totalPemasukan - totalPengeluaran,
  };
};

const DashboardPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const itemsPerPage = 4;
  const totalItems = digitalStoresData.length + 1;
  const maxIndex = Math.max(0, totalItems - itemsPerPage);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const summary = useMemo(() => {
    return calculateSummary(mockTransaksiData);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #ffffff 0%, #fefce8 50%, #ffffff 100%)",
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
            background:
              "linear-gradient(135deg, rgba(253, 215, 65, 0.1), rgba(196, 167, 59, 0.05))",
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
            background:
              "linear-gradient(135deg, rgba(32, 39, 58, 0.08), rgba(144, 147, 157, 0.05))",
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
              <span style={{ color: "#20273A" }}>Dashboard</span>
            </h1>
            <p
              style={{
                fontSize: "1.125rem",
                color: "#6b7280",
                margin: "0",
                fontWeight: "400",
              }}
            >
              Pantau perkembangan bisnis Anda dalam satu tampilan
            </p>
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
        {/* Financial Overview */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            marginBottom: "40px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s",
          }}
        >
          <FinancialCard
            keuanganData={keuanganData}
            formatCurrency={formatCurrency}
          />

          <PerformanceCard performanceData={performanceData} />
        </div>

        {/* Orders and Stock */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            marginBottom: "40px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s",
          }}
        >
          <OrdersSummaryCard orderStatsData={orderStatsData} />

          <StockStatusCard stokSectionData={stokSectionData} />
        </div>

        {/* Digital Stores */}
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s",
          }}
        >
          <DigitalStoresCard
            digitalStoresData={digitalStoresData}
            currentIndex={currentIndex}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
            itemsPerPage={itemsPerPage}
            maxIndex={maxIndex}
          />
        </div>
      </div>

      {/* Global Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
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

          .main-content {
            padding: 2rem 1rem !important;
          }

          .financial-cards {
            grid-template-columns: 1fr !important;
          }

          .orders-stock-cards {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 640px) {
          h1 {
            font-size: 1.5rem !important;
          }

          .main-content {
            padding: 1.5rem 0.75rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default DashboardPage;
