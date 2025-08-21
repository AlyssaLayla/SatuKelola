"use client";

import React, { useState, useMemo, useEffect } from "react";
import { 
  Plus,
  Utensils,
  Coffee,
  Shirt,
  Wrench,
  Monitor,
  ShoppingCart,
  Box,
  Package
} from "lucide-react";
import SummaryCards from "./_components/stok-card.component";
import InventoryTable from "./_components/stok-table.component";

const mockInventoryData = [
  {
    id: "INV001",
    namaBarang: "Beras Premium 5kg",
    jenis: "Pemasukan",
    kategori: "Bahan Makanan",
    subkategori: "Beras & Serealia",
    jumlah: 150000,
    deskripsi: "Beras premium kualitas terbaik untuk nasi goreng special",
    stok: 25,
    minStok: 10,
    maxStok: 50,
    unit: "karung",
    supplier: "CV Beras Sejahtera",
    lokasi: "Gudang A - Rak 1",
    tanggalMasuk: "2024-08-20",
    tanggalKadaluarsa: "2025-02-20",
    hargaBeli: 150000,
    hargaJual: 180000,
    status: "Normal",
    barcode: "8991234567890",
    catatan: "Stok cukup untuk 2 minggu"
  },
  {
    id: "INV002",
    namaBarang: "Minyak Goreng 2L",
    jenis: "Pengeluaran",
    kategori: "Bahan Makanan",
    subkategori: "Minyak & Lemak",
    jumlah: 35000,
    deskripsi: "Minyak goreng berkualitas untuk keperluan dapur",
    stok: 8,
    minStok: 15,
    maxStok: 30,
    unit: "botol",
    supplier: "PT Minyak Sehat",
    lokasi: "Gudang A - Rak 2",
    tanggalMasuk: "2024-08-18",
    tanggalKadaluarsa: "2025-08-18",
    hargaBeli: 35000,
    hargaJual: 42000,
    status: "Stok Rendah",
    barcode: "8991234567891",
    catatan: "Perlu restok segera"
  },
  {
    id: "INV003",
    namaBarang: "Ayam Potong Fresh",
    jenis: "Pemasukan",
    kategori: "Protein",
    subkategori: "Daging Unggas",
    jumlah: 85000,
    deskripsi: "Ayam potong segar untuk menu ayam bakar dan goreng",
    stok: 12,
    minStok: 5,
    maxStok: 20,
    unit: "ekor",
    supplier: "Peternakan Maju",
    lokasi: "Kulkas Besar",
    tanggalMasuk: "2024-08-20",
    tanggalKadaluarsa: "2024-08-22",
    hargaBeli: 85000,
    hargaJual: 110000,
    status: "Kadaluarsa",
    barcode: "8991234567892",
    catatan: "Harus digunakan dalam 2 hari"
  },
  {
    id: "INV004",
    namaBarang: "Kemasan Box Makanan",
    jenis: "Pemasukan",
    kategori: "Packaging",
    subkategori: "Kemasan Makanan",
    jumlah: 50000,
    deskripsi: "Box makanan untuk packaging takeaway dan delivery",
    stok: 150,
    minStok: 50,
    maxStok: 200,
    unit: "pcs",
    supplier: "CV Kemasan Jaya",
    lokasi: "Gudang B - Rak 1",
    tanggalMasuk: "2024-08-15",
    tanggalKadaluarsa: "-",
    hargaBeli: 2500,
    hargaJual: 3500,
    status: "Normal",
    barcode: "8991234567893",
    catatan: "Stock mencukupi untuk 1 bulan"
  },
  {
    id: "INV005",
    namaBarang: "Kopi Arabica Premium 1kg",
    jenis: "Pemasukan",
    kategori: "Minuman",
    subkategori: "Kopi & Teh",
    jumlah: 120000,
    deskripsi: "Biji kopi arabica premium untuk menu kopi special",
    stok: 18,
    minStok: 10,
    maxStok: 25,
    unit: "kg",
    supplier: "Kedai Kopi Nusantara",
    lokasi: "Gudang A - Rak 3",
    tanggalMasuk: "2024-08-17",
    tanggalKadaluarsa: "2025-08-17",
    hargaBeli: 120000,
    hargaJual: 150000,
    status: "Normal",
    barcode: "8991234567894",
    catatan: "Kualitas premium, margin bagus"
  }
];

const summaryData = {
  totalItems: 213,
  lowStock: 12,
  expiringSoon: 3,
  totalValue: 15750000
};

const formatCurrency = (amount : any ) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
};

const StokInventoriPage = () => {
  const [filter, setFilter] = useState("Semua");
  const [searchTerm, setSearchTerm] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const filteredStokData = useMemo(() => {
    let filtered = mockInventoryData;

    if (filter !== "Semua") {
      filtered = filtered.filter((item) => item.jenis === filter);
    }

    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.namaBarang.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.kategori.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.supplier.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [filter, searchTerm]);

  const getStatusColor = (status : any) => {
    switch (status) {
      case "Normal": return { bg: "#dcfce7", color: "#166534" };
      case "Stok Rendah": return { bg: "#fef3c7", color: "#92400e" };
      case "Kadaluarsa": return { bg: "#fee2e2", color: "#991b1b" };
      case "Kadaluarsa": return { bg: "#f3f4f6", color: "#374151" };
      default: return { bg: "#f3f4f6", color: "#374151" };
    }
  };

  const getCategoryIcon = (kategori : any) => {
    switch (kategori) {
      case "Bahan Makanan": return Utensils;
      case "Protein": return ShoppingCart;
      case "Minuman": return Coffee;
      case "Packaging": return Box;
      case "Peralatan": return Wrench;
      default: return Package;
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ffffff 0%, #fefce8 50%, #ffffff 100%)",
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
            background: "linear-gradient(135deg, rgba(253, 215, 65, 0.1), rgba(196, 167, 59, 0.05))",
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
            background: "linear-gradient(135deg, rgba(32, 39, 58, 0.08), rgba(144, 147, 157, 0.05))",
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
          background: "rgba(255, 255, 255, 0.95)",
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
              <span style={{ color: "#20273A" }}>Stok & Inventori</span>
            </h1>
          </div>

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
            <span>Tambah Item</span>
          </button>
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
        <SummaryCards 
          summaryData={summaryData}
          isVisible={isVisible}
          formatCurrency={formatCurrency}
        />

        {/* Inventory Table */}
        <InventoryTable
          isVisible={isVisible}
          filter={filter}
          setFilter={setFilter}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filteredStokData={filteredStokData}
          mockInventoryData={mockInventoryData}
          formatCurrency={formatCurrency}
          getStatusColor={getStatusColor}
          getCategoryIcon={getCategoryIcon}
        />
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
          
          .add-button {
            padding: 0.875rem 1.5rem !important;
            font-size: 0.875rem !important;
          }
          
          .main-content {
            padding: 2rem 1rem !important;
          }

          table {
            font-size: 0.875rem !important;
          }
        }

        @media (max-width: 640px) {
          h1 {
            font-size: 1.5rem !important;
          }
          
          .main-content {
            padding: 1.5rem 0.75rem !important;
          }

          table {
            font-size: 0.8rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default StokInventoriPage;