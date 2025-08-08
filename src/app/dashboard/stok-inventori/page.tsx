"use client";

import React, { useState, useMemo } from 'react';
import { MoreVertical } from 'lucide-react';
import { stokItemsData, stokSectionData, inventarisSectionData } from '@/data/stok';
import { formatCurrency } from '@/utils/transaksi.util';

const StokInventoriPage: React.FC = () => {
  const [filter, setFilter] = useState<'Semua' | 'Pemasukan' | 'Pengeluaran'>('Semua');

  // Filter stok data
  const filteredStokData = useMemo(() => {
    if (filter === 'Semua') return stokItemsData;
    return stokItemsData.filter(item => item.jenis === filter);
  }, [filter]);

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
            Stok dan Inventori
          </h1>
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
        {/* Top Section - Stok & Inventaris */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "32px",
            marginBottom: "32px"
          }}
        >
          {/* Stok Section */}
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
              Stok
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {stokSectionData.map((item, index) => {
                const IconComponent = item.iconComponent;
                return (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      padding: "16px",
                      backgroundColor: "#f0fdfa",
                      borderRadius: "8px"
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        backgroundColor: "#e0f2f1",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative"
                      }}
                    >
                      <IconComponent size={20} style={{ color: "#059669" }} />
                      <div
                        style={{
                          position: "absolute",
                          top: "4px",
                          right: "4px",
                          width: "8px",
                          height: "8px",
                          backgroundColor: "#ef4444",
                          borderRadius: "50%"
                        }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "14px", fontWeight: "500", color: "#111827" }}>
                        {item.name}
                      </div>
                    </div>
                    <div style={{ fontSize: "12px", color: "#6b7280" }}>
                      {item.quantity}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Inventaris Section */}
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
              Inventaris
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {inventarisSectionData.map((item, index) => {
                const IconComponent = item.iconComponent;
                return (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      padding: "16px",
                      backgroundColor: "#f0fdfa",
                      borderRadius: "8px"
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        backgroundColor: "#e0f2f1",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative"
                      }}
                    >
                      <IconComponent size={20} style={{ color: "#059669" }} />
                      <div
                        style={{
                          position: "absolute",
                          top: "4px",
                          right: "4px",
                          width: "8px",
                          height: "8px",
                          backgroundColor: "#ef4444",
                          borderRadius: "50%"
                        }}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: "14px", fontWeight: "500", color: "#111827" }}>
                        {item.name}
                      </div>
                    </div>
                    <div style={{ fontSize: "12px", color: "#6b7280" }}>
                      {item.quantity}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            overflow: "hidden",
            border: "1px solid #e5e7eb",
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
          }}
        >
          {/* Filter Tabs */}
          <div style={{ borderBottom: "1px solid #e5e7eb" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "16px 24px 0 24px"
              }}
            >
              <div style={{ display: "flex", gap: "32px" }}>
                {(['Semua', 'Pemasukan', 'Pengeluaran'] as const).map((filterOption) => (
                  <button
                    key={filterOption}
                    onClick={() => setFilter(filterOption)}
                    style={{
                      paddingBottom: "16px",
                      paddingLeft: "4px",
                      paddingRight: "4px",
                      borderBottom: filter === filterOption ? "2px solid #000" : "2px solid transparent",
                      fontWeight: "500",
                      fontSize: "14px",
                      color: filter === filterOption ? "#000" : "#6b7280",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      transition: "color 0.2s ease"
                    }}
                  >
                    {filterOption}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Table */}
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ backgroundColor: "#f9fafb" }}>
                  <th style={{ padding: "12px 24px", textAlign: "left", width: "40px" }}>
                    <input type="checkbox" style={{ margin: 0 }} />
                  </th>
                  <th style={{ 
                    padding: "12px 24px", 
                    textAlign: "left", 
                    fontSize: "12px", 
                    fontWeight: "500", 
                    color: "#6b7280", 
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    borderBottom: "1px solid #e5e7eb"
                  }}>
                    Nama Barang
                  </th>
                  <th style={{ 
                    padding: "12px 24px", 
                    textAlign: "left", 
                    fontSize: "12px", 
                    fontWeight: "500", 
                    color: "#6b7280", 
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    borderBottom: "1px solid #e5e7eb"
                  }}>
                    Jenis
                  </th>
                  <th style={{ 
                    padding: "12px 24px", 
                    textAlign: "left", 
                    fontSize: "12px", 
                    fontWeight: "500", 
                    color: "#6b7280", 
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    borderBottom: "1px solid #e5e7eb"
                  }}>
                    Kategori
                  </th>
                  <th style={{ 
                    padding: "12px 24px", 
                    textAlign: "left", 
                    fontSize: "12px", 
                    fontWeight: "500", 
                    color: "#6b7280", 
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    borderBottom: "1px solid #e5e7eb"
                  }}>
                    Jumlah
                  </th>
                  <th style={{ 
                    padding: "12px 24px", 
                    textAlign: "left", 
                    fontSize: "12px", 
                    fontWeight: "500", 
                    color: "#6b7280", 
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    borderBottom: "1px solid #e5e7eb"
                  }}>
                    Deskripsi
                  </th>
                  <th style={{ 
                    padding: "12px 24px", 
                    textAlign: "left", 
                    fontSize: "12px", 
                    fontWeight: "500", 
                    color: "#6b7280", 
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    borderBottom: "1px solid #e5e7eb"
                  }}>
                    Stok
                  </th>
                  <th style={{ 
                    padding: "12px 24px", 
                    textAlign: "left", 
                    fontSize: "12px", 
                    fontWeight: "500", 
                    color: "#6b7280", 
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    borderBottom: "1px solid #e5e7eb",
                    width: "80px"
                  }}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredStokData.map((item, index) => {
                  const isIncome = item.jenis === 'Pemasukan';
                  const isEven = index % 2 === 0;

                  return (
                    <tr
                      key={item.id}
                      style={{
                        backgroundColor: isEven ? "white" : "#fafafa",
                        borderBottom: "1px solid #f3f4f6"
                      }}
                    >
                      <td style={{ padding: "16px 24px" }}>
                        <input type="checkbox" style={{ margin: 0 }} />
                      </td>
                      <td style={{ 
                        padding: "16px 24px", 
                        fontSize: "14px", 
                        fontWeight: "500", 
                        color: "#111827" 
                      }}>
                        {item.namaBarang}
                      </td>
                      <td style={{ padding: "16px 24px" }}>
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                            padding: "4px 10px",
                            borderRadius: "20px",
                            fontSize: "12px",
                            fontWeight: "500",
                            backgroundColor: isIncome ? "#dcfce7" : "#fee2e2",
                            color: isIncome ? "#166534" : "#991b1b"
                          }}
                        >
                          {item.jenis} {isIncome ? "↑" : "↓"}
                        </span>
                      </td>
                      <td style={{ 
                        padding: "16px 24px", 
                        fontSize: "14px", 
                        color: "#111827" 
                      }}>
                        {item.kategori}
                      </td>
                      <td style={{ 
                        padding: "16px 24px", 
                        fontSize: "14px", 
                        fontWeight: "600",
                        color: isIncome ? "#059669" : "#dc2626"
                      }}>
                        {isIncome ? "+" : "-"}{formatCurrency(item.jumlah)}
                      </td>
                      <td style={{ 
                        padding: "16px 24px", 
                        fontSize: "14px", 
                        color: "#111827",
                        maxWidth: "300px"
                      }}>
                        <div
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                          }}
                          title={item.deskripsi}
                        >
                          {item.deskripsi}
                        </div>
                      </td>
                      <td style={{ 
                        padding: "16px 24px", 
                        fontSize: "14px", 
                        fontWeight: "500",
                        color: "#111827"
                      }}>
                        {item.stok}
                      </td>
                      <td style={{ 
                        padding: "16px 24px", 
                        textAlign: "center" 
                      }}>
                        <button
                          style={{
                            color: "#6b7280",
                            padding: "8px",
                            borderRadius: "50%",
                            border: "none",
                            background: "none",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center"
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "#111827";
                            e.currentTarget.style.backgroundColor = "#f3f4f6";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = "#6b7280";
                            e.currentTarget.style.backgroundColor = "transparent";
                          }}
                        >
                          <MoreVertical size={16} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div
            style={{
              padding: "16px 24px",
              borderTop: "1px solid #e5e7eb",
              backgroundColor: "#f9fafb"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <span style={{ fontSize: "14px", color: "#6b7280" }}>
                Menampilkan {filteredStokData.length} dari {stokItemsData.length} item
              </span>

              {/* Pagination */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <button
                  style={{
                    padding: "4px 12px",
                    fontSize: "14px",
                    border: "1px solid #d1d5db",
                    borderRadius: "6px",
                    backgroundColor: "white",
                    color: "#374151",
                    cursor: "pointer"
                  }}
                >
                  Previous
                </button>
                <span
                  style={{
                    padding: "4px 12px",
                    fontSize: "14px",
                    backgroundColor: "#fef3c7",
                    color: "#92400e",
                    borderRadius: "6px",
                    fontWeight: "500"
                  }}
                >
                  1
                </span>
                <button
                  style={{
                    padding: "4px 12px",
                    fontSize: "14px",
                    border: "1px solid #d1d5db",
                    borderRadius: "6px",
                    backgroundColor: "white",
                    color: "#374151",
                    cursor: "pointer"
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StokInventoriPage;