"use client";

import React, { useMemo } from "react";
import { Plus, TrendingUp } from "lucide-react";
import { transaksiData } from "@/data/transaksi";
import { calculateSummary, formatCurrency } from "@/utils/transaksi.util";

const DashboardPage: React.FC = () => {
  // Calculate summary dari semua transactions
  const summary = useMemo(() => {
    return calculateSummary(transaksiData);
  }, []);

  // Mock data untuk charts dan inventory (sesuai gambar)
  const performanceData = [
    { month: 'Jan', value: 20 },
    { month: 'Feb', value: 15 },
    { month: 'Mar', value: 35 }, // highlighted bar
    { month: 'Apr', value: 15 },
    { month: 'May', value: 28 },
    { month: 'Jun', value: 12 },
    { month: 'Jul', value: 18 },
    { month: 'Aug', value: 32 },
    { month: 'Sep', value: 20 },
    { month: 'Oct', value: 14 },
    { month: 'Nov', value: 16 },
  ];

  const orderStats = [
    { label: 'Baru', count: 10, color: '#fb923c', percentage: 15 },
    { label: 'Diproses', count: 35, color: '#fbbf24', percentage: 52 },
    { label: 'Dikirim', count: 10, color: '#3b82f6', percentage: 15 },
    { label: 'Selesai', count: 26, color: '#10b981', percentage: 38 }
  ];

  const inventoryItems = [
    { name: 'Bakso Cuanki', quantity: '50 gr', status: 'red' },
    { name: 'Telur', quantity: '1 butir', status: 'red' },
    { name: 'Lengkuas', quantity: '75 gr', status: 'red' }
  ];

  const digitalStores = [
    { name: 'GrabFood', subtitle: 'Seblak BarBar Depok', status: 'active' },
    { name: 'GoFood', subtitle: 'Seblak BarBar Depok', status: 'active' },
    { name: 'Shopee', subtitle: 'Seblak BarBar Depok', status: 'inactive' }
  ];

  return (
    <div
      style={{ 
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
        padding: "0"
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
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#111827",
              margin: "0"
            }}
          >
            Dashboard
          </h1>
          
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "14px",
              color: "#6b7280"
            }}
          >
            <span>Halo, </span>
            <span style={{ color: "#fbbf24", fontWeight: "500" }}>Sari</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "32px"
        }}
      >
        {/* Top Section - Keuangan Toko & Performa Toko */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
            marginBottom: "32px"
          }}
        >
          {/* Keuangan Toko */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "24px",
              border: "1px solid #e5e7eb",
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "24px"
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#111827",
                  margin: "0"
                }}
              >
                Keuangan Toko
              </h3>
              <span
                style={{
                  fontSize: "12px",
                  color: "#6b7280"
                }}
              >
                17 Juli 2025
              </span>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h4
                style={{
                  fontSize: "14px",
                  color: "#6b7280",
                  margin: "0 0 4px 0"
                }}
              >
                Saldo
              </h4>
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#111827",
                  margin: "0"
                }}
              >
                Rp4.500.000,00
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "14px", color: "#6b7280" }}>Profit</span>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "500", color: "#111827" }}>
                    {formatCurrency(summary.saldoBersih)}
                  </span>
                  <span style={{ fontSize: "12px", color: "#10b981" }}>↗8%</span>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "14px", color: "#6b7280" }}>Pemasukan</span>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "500", color: "#111827" }}>
                    {formatCurrency(summary.totalPemasukan)}
                  </span>
                  <span style={{ fontSize: "12px", color: "#10b981" }}>↗6%</span>
                </div>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "14px", color: "#6b7280" }}>Pengeluaran</span>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "14px", fontWeight: "500", color: "#111827" }}>
                    {formatCurrency(summary.totalPengeluaran)}
                  </span>
                  <span style={{ fontSize: "12px", color: "#ef4444" }}>↘4%</span>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid #f3f4f6" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "14px", color: "#6b7280" }}>Piutang</span>
                <span style={{ fontSize: "14px", fontWeight: "500", color: "#111827" }}>
                  Rp3.000.000,00
                </span>
              </div>
            </div>
          </div>

          {/* Performa Toko */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "24px",
              border: "1px solid #e5e7eb",
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "24px"
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#111827",
                  margin: "0"
                }}
              >
                Performa Toko
              </h3>
              <span
                style={{
                  fontSize: "12px",
                  color: "#6b7280"
                }}
              >
                Seblak Original
              </span>
            </div>

            {/* Chart Area */}
            <div
              style={{
                height: "160px",
                display: "flex",
                alignItems: "end",
                justifyContent: "space-between",
                gap: "8px",
                marginBottom: "16px",
                padding: "0 8px"
              }}
            >
              {performanceData.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flex: 1
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "20px",
                      height: `${(item.value / 40) * 120}px`,
                      backgroundColor: index === 2 ? "#fbbf24" : "#d1d5db",
                      borderRadius: "2px",
                      marginBottom: "8px"
                    }}
                  />
                </div>
              ))}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingTop: "16px",
                borderTop: "1px solid #f3f4f6"
              }}
            >
              <span style={{ fontSize: "14px", color: "#6b7280" }}>
                Omzet bulan ini
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <TrendingUp size={16} style={{ color: "#10b981" }} />
                <span style={{ fontSize: "16px", fontWeight: "600", color: "#10b981" }}>
                  20%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section - Ringkasan Pesanan & Inventaris */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
            marginBottom: "32px"
          }}
        >
          {/* Ringkasan Pesanan */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "24px",
              border: "1px solid #e5e7eb",
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#111827",
                margin: "0 0 24px 0"
              }}
            >
              Ringkasan Pesanan
            </h3>

            {/* Progress Bar */}
            <div
              style={{
                height: "8px",
                backgroundColor: "#f3f4f6",
                borderRadius: "4px",
                marginBottom: "16px",
                display: "flex",
                overflow: "hidden"
              }}
            >
              {orderStats.map((stat, index) => (
                <div
                  key={index}
                  style={{
                    width: `${stat.percentage}%`,
                    backgroundColor: stat.color,
                    height: "100%"
                  }}
                />
              ))}
            </div>

            {/* Legend */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
                marginBottom: "20px"
              }}
            >
              {orderStats.map((stat, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px"
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      backgroundColor: stat.color,
                      borderRadius: "50%"
                    }}
                  />
                  <span style={{ fontSize: "12px", color: "#6b7280" }}>
                    {stat.count} {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <div
              style={{
                paddingTop: "16px",
                borderTop: "1px solid #f3f4f6"
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                <span style={{ fontSize: "24px", fontWeight: "700", color: "#111827" }}>
                  26
                </span>
                <span style={{ fontSize: "14px", color: "#6b7280" }}>
                  Pesanan Selesai
                </span>
              </div>
            </div>
          </div>

          {/* Inventaris */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              padding: "24px",
              border: "1px solid #e5e7eb",
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "24px"
              }}
            >
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  color: "#111827",
                  margin: "0"
                }}
              >
                Inventaris
              </h3>
              <select
                style={{
                  fontSize: "12px",
                  color: "#6b7280",
                  border: "1px solid #d1d5db",
                  borderRadius: "4px",
                  padding: "4px 8px",
                  backgroundColor: "white"
                }}
              >
                <option>Rentang</option>
              </select>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {inventoryItems.map((item, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px",
                    backgroundColor: "#f0fdfa",
                    borderRadius: "8px"
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      backgroundColor: "#ef4444",
                      borderRadius: "50%"
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "14px", fontWeight: "500", color: "#111827" }}>
                      {item.name}
                    </div>
                  </div>
                  <div style={{ fontSize: "12px", color: "#6b7280" }}>
                    {item.quantity}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section - Toko Digital */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "24px",
            border: "1px solid #e5e7eb",
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#111827",
              margin: "0 0 24px 0"
            }}
          >
            Toko Digital
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px"
            }}
          >
            {/* Add Store Card */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "32px",
                border: "2px dashed #d1d5db",
                borderRadius: "8px",
                minHeight: "120px"
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  backgroundColor: "#fbbf24",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "12px"
                }}
              >
                <Plus size={24} style={{ color: "white" }} />
              </div>
              <span style={{ fontSize: "14px", fontWeight: "500", color: "#111827" }}>
                Tambah Toko Barumu!
              </span>
            </div>

            {/* Store Cards */}
            {digitalStores.map((store, index) => (
              <div
                key={index}
                style={{
                  padding: "20px",
                  border: "1px solid #e5e7eb",
                  borderRadius: "8px",
                  textAlign: "center"
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    backgroundColor: "#e5e7eb",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 12px auto"
                  }}
                >
                  <div
                    style={{
                      width: "24px",
                      height: "16px",
                      backgroundColor: "#6b7280",
                      borderRadius: "2px"
                    }}
                  />
                </div>
                <h4
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#111827",
                    margin: "0 0 4px 0"
                  }}
                >
                  {store.name}
                </h4>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#6b7280",
                    margin: "0 0 16px 0"
                  }}
                >
                  {store.subtitle}
                </p>
                <button
                  style={{
                    padding: "6px 16px",
                    fontSize: "12px",
                    fontWeight: "500",
                    backgroundColor: store.status === 'active' ? "#fbbf24" : "#e5e7eb",
                    color: store.status === 'active' ? "white" : "#6b7280",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer"
                  }}
                >
                  {store.status === 'active' ? 'Kunjungi' : 'Nonaktif'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;