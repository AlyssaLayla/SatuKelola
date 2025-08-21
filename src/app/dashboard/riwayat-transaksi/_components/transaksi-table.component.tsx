import React, { useState, useMemo, useEffect } from "react";
import { Search, Download, Eye, MoreVertical } from "lucide-react";
import { Transaction, FilterType } from "@/types/transaksi.type";
import {
  formatCurrency,
  formatDate,
  getCategory,
  getPaymentMethod,
} from "@/utils/transaksi.util";

interface TransactionTableProps {
  transactions: Transaction[];
}

const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions,
}) => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("Semua");
  const [searchTerm, setSearchTerm] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const filteredTransactions = useMemo(() => {
    let filtered = transactions;

    if (activeFilter !== "Semua") {
      filtered = filtered.filter(
        (transaction) => transaction.jenis === activeFilter
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (transaction) =>
          transaction.keterangan.toLowerCase().includes(searchTerm.toLowerCase()) ||
          transaction.kategori?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          transaction.pelanggan?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          transaction.supplier?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  }, [transactions, activeFilter, searchTerm]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return { bg: "#dcfce7", color: "#166534" };
      case "Pending": return { bg: "#fef3c7", color: "#92400e" };
      case "Failed": return { bg: "#fee2e2", color: "#991b1b" };
      default: return { bg: "#f3f4f6", color: "#374151" };
    }
  };

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "32px",
        overflow: "hidden",
        border: "1px solid #f1f5f9",
        boxShadow: "0 8px 20px -6px rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* Header dengan Search dan Judul */}
      <div
        style={{
          padding: isMobile ? "1.5rem 1rem" : "2rem 2.5rem",
          borderBottom: "1px solid #f1f5f9",
          background: "#ffffff",
        }}
      >
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          marginBottom: "1.5rem", 
          flexWrap: "wrap", 
          gap: "1rem" 
        }}>
          <h2
            style={{
              fontSize: isMobile ? "1.5rem" : "1.75rem",
              fontWeight: "700",
              color: "#111827",
              margin: "0",
              letterSpacing: "-0.02em",
            }}
          >
            Daftar Transaksi
          </h2>
          
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: isMobile ? "0.625rem 1.25rem" : "0.75rem 1.5rem",
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "16px",
                fontSize: "0.875rem",
                color: "#374151",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#f1f5f9";
                e.currentTarget.style.borderColor = "#d1d5db";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#f8fafc";
                e.currentTarget.style.borderColor = "#e2e8f0";
              }}
            >
              <Download size={16} />
              {!isMobile && "Ekspor"}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div style={{ 
          position: "relative", 
          maxWidth: isMobile ? "100%" : "400px", 
        }}>
          <div
            style={{
              position: "absolute",
              left: "16px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#9ca3af",
            }}
          >
            <Search size={20} />
          </div>
          <input
            type="text"
            placeholder={isMobile ? "Cari transaksi..." : "Cari berdasarkan deskripsi, kategori, atau pelanggan..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              padding: "0.75rem 1rem 0.75rem 3rem",
              border: "1px solid #e2e8f0",
              borderRadius: "16px",
              fontSize: "0.875rem",
              outline: "none",
              transition: "border-color 0.3s ease",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "#FDD741";
              e.currentTarget.style.boxShadow = "0 0 0 3px rgba(253, 215, 65, 0.1)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = "#e2e8f0";
              e.currentTarget.style.boxShadow = "none";
            }}
          />
        </div>
      </div>

      {/* Filter Tabs Section */}
      <div
        style={{
          borderBottom: "1px solid #f1f5f9",
          background: "#ffffff",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: isMobile ? "12px 16px 0 16px" : "16px 24px 0 24px",
          }}
        >
          <div style={{ display: "flex", gap: "32px" }}>
            {(["Semua", "Pemasukan", "Pengeluaran"] as FilterType[]).map(
              (filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  style={{
                    paddingBottom: "16px",
                    paddingLeft: "4px",
                    paddingRight: "4px",
                    borderBottom:
                      activeFilter === filter
                        ? "2px solid #FDD741"
                        : "2px solid transparent",
                    fontWeight: "600",
                    fontSize: isMobile ? "14px" : "16px",
                    color: activeFilter === filter ? "#20273A" : "#6b7280",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    if (activeFilter !== filter) {
                      e.currentTarget.style.color = "#20273A";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeFilter !== filter) {
                      e.currentTarget.style.color = "#6b7280";
                    }
                  }}
                >
                  {filter}
                  {filter !== "Semua" && (
                    <span
                      style={{
                        marginLeft: "8px",
                        fontSize: "12px",
                        padding: "2px 8px",
                        borderRadius: "12px",
                        background: activeFilter === filter ? "#FDD741" : "#f3f4f6",
                        color: activeFilter === filter ? "#20273A" : "#6b7280",
                        fontWeight: "600",
                      }}
                    >
                      {transactions.filter(t => t.jenis === filter).length}
                    </span>
                  )}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Table */}
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ background: "#f8fafc" }}>
              <th style={{ 
                padding: isMobile ? "0.75rem 1rem" : "1rem 1.5rem", 
                textAlign: "left", 
                fontSize: "0.75rem", 
                fontWeight: "600", 
                color: "#6b7280", 
                textTransform: "uppercase", 
                letterSpacing: "0.05em" 
              }}>
                Tanggal & Waktu
              </th>
              {!isMobile && (
                <th style={{ 
                  padding: "1rem 1.5rem", 
                  textAlign: "left", 
                  fontSize: "0.75rem", 
                  fontWeight: "600", 
                  color: "#6b7280", 
                  textTransform: "uppercase", 
                  letterSpacing: "0.05em" 
                }}>
                  ID & Status
                </th>
              )}
              <th style={{ 
                padding: isMobile ? "0.75rem 1rem" : "1rem 1.5rem", 
                textAlign: "left", 
                fontSize: "0.75rem", 
                fontWeight: "600", 
                color: "#6b7280", 
                textTransform: "uppercase", 
                letterSpacing: "0.05em" 
              }}>
                Deskripsi
              </th>
              {!isMobile && (
                <th style={{ 
                  padding: "1rem 1.5rem", 
                  textAlign: "left", 
                  fontSize: "0.75rem", 
                  fontWeight: "600", 
                  color: "#6b7280", 
                  textTransform: "uppercase", 
                  letterSpacing: "0.05em" 
                }}>
                  Kategori
                </th>
              )}
              <th style={{ 
                padding: isMobile ? "0.75rem 1rem" : "1rem 1.5rem", 
                textAlign: "right", 
                fontSize: "0.75rem", 
                fontWeight: "600", 
                color: "#6b7280", 
                textTransform: "uppercase", 
                letterSpacing: "0.05em" 
              }}>
                Jumlah
              </th>
              {!isMobile && (
                <th style={{ 
                  padding: "1rem 1.5rem", 
                  textAlign: "left", 
                  fontSize: "0.75rem", 
                  fontWeight: "600", 
                  color: "#6b7280", 
                  textTransform: "uppercase", 
                  letterSpacing: "0.05em" 
                }}>
                  Pembayaran
                </th>
              )}
              <th style={{ 
                padding: isMobile ? "0.75rem 1rem" : "1rem 1.5rem", 
                textAlign: "center", 
                fontSize: "0.75rem", 
                fontWeight: "600", 
                color: "#6b7280", 
                textTransform: "uppercase", 
                letterSpacing: "0.05em" 
              }}>
                Aksi
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction, index) => {
              const amount = transaction.jenis === "Pemasukan" ? transaction.kredit : transaction.debet;
              const isIncome = transaction.jenis === "Pemasukan";
              const statusStyle = getStatusColor(transaction.status || "Completed");

              return (
                <tr
                  key={transaction.id || index}
                  style={{
                    borderBottom: "1px solid #f3f4f6",
                    transition: "background-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#fafbfc";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <td style={{ padding: isMobile ? "1rem" : "1.5rem 1.5rem" }}>
                    <div>
                      <div style={{ 
                        fontSize: "0.875rem", 
                        fontWeight: "600", 
                        color: "#111827", 
                        marginBottom: "0.25rem" 
                      }}>
                        {formatDate(transaction.tanggal)}
                      </div>
                      {!isMobile && transaction.waktu && (
                        <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>
                          {transaction.waktu}
                        </div>
                      )}
                    </div>
                  </td>
                  
                  {!isMobile && (
                    <td style={{ padding: "1.5rem 1.5rem" }}>
                      <div>
                        <div style={{ 
                          fontSize: "0.875rem", 
                          fontWeight: "600", 
                          color: "#111827", 
                          marginBottom: "0.5rem" 
                        }}>
                          {transaction.id || `TRX${String(index + 1).padStart(3, '0')}`}
                        </div>
                        <span
                          style={{
                            fontSize: "0.75rem",
                            fontWeight: "500",
                            padding: "0.25rem 0.75rem",
                            borderRadius: "12px",
                            background: statusStyle.bg,
                            color: statusStyle.color,
                          }}
                        >
                          {transaction.status || "Completed"}
                        </span>
                      </div>
                    </td>
                  )}

                  <td style={{ 
                    padding: isMobile ? "1rem" : "1.5rem 1.5rem", 
                    maxWidth: isMobile ? "150px" : "250px" 
                  }}>
                    <div>
                      <div
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: "500",
                          color: "#111827",
                          marginBottom: "0.25rem",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                        title={transaction.keterangan}
                      >
                        {transaction.keterangan}
                      </div>
                      {!isMobile && (transaction.pelanggan || transaction.supplier) && (
                        <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>
                          {transaction.pelanggan ? `Pelanggan: ${transaction.pelanggan}` : `Supplier: ${transaction.supplier}`}
                        </div>
                      )}
                      {isMobile && (
                        <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>
                          {getCategory(transaction.nama_akun)}
                        </div>
                      )}
                    </div>
                  </td>

                  {!isMobile && (
                    <td style={{ padding: "1.5rem 1.5rem" }}>
                      <div>
                        <div style={{ 
                          fontSize: "0.875rem", 
                          fontWeight: "500", 
                          color: "#111827", 
                          marginBottom: "0.25rem" 
                        }}>
                          {transaction.kategori || getCategory(transaction.nama_akun)}
                        </div>
                        {transaction.subkategori && (
                          <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>
                            {transaction.subkategori}
                          </div>
                        )}
                      </div>
                    </td>
                  )}

                  <td style={{ 
                    padding: isMobile ? "1rem" : "1.5rem 1.5rem", 
                    textAlign: "right" 
                  }}>
                    <div
                      style={{
                        fontSize: isMobile ? "0.875rem" : "1rem",
                        fontWeight: "700",
                        color: isIncome ? "#059669" : "#dc2626",
                      }}
                    >
                      {isIncome ? "+" : "-"}{formatCurrency(amount)}
                    </div>
                    {!isMobile && transaction.invoice && (
                      <div
                        style={{
                          fontSize: "0.75rem",
                          color: "#6b7280",
                          marginTop: "0.25rem",
                        }}
                      >
                        {transaction.invoice}
                      </div>
                    )}
                  </td>

                  {!isMobile && (
                    <td style={{ padding: "1.5rem 1.5rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <span style={{ fontSize: "0.875rem", color: "#374151" }}>
                          {transaction.metode_pembayaran || getPaymentMethod(transaction.keterangan)}
                        </span>
                      </div>
                    </td>
                  )}

                  <td style={{ 
                    padding: isMobile ? "1rem" : "1.5rem 1.5rem", 
                    textAlign: "center" 
                  }}>
                    <div style={{ 
                      display: "flex", 
                      justifyContent: "center", 
                      gap: isMobile ? "0.25rem" : "0.5rem" 
                    }}>
                      <button
                        style={{
                          padding: isMobile ? "0.375rem" : "0.5rem",
                          borderRadius: "8px",
                          border: "none",
                          background: "#f3f4f6",
                          color: "#6b7280",
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#e5e7eb";
                          e.currentTarget.style.color = "#374151";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "#f3f4f6";
                          e.currentTarget.style.color = "#6b7280";
                        }}
                      >
                        <Eye size={isMobile ? 14 : 16} />
                      </button>
                      <button
                        style={{
                          padding: isMobile ? "0.375rem" : "0.5rem",
                          borderRadius: "8px",
                          border: "none",
                          background: "#f3f4f6",
                          color: "#6b7280",
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "#e5e7eb";
                          e.currentTarget.style.color = "#374151";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "#f3f4f6";
                          e.currentTarget.style.color = "#6b7280";
                        }}
                      >
                        <MoreVertical size={isMobile ? 14 : 16} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer dengan Pagination */}
      <div
        style={{
          padding: isMobile ? "1rem" : "1.5rem 2.5rem",
          borderTop: "1px solid #f1f5f9",
          background: "#f8fafc",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span style={{ fontSize: "0.875rem", color: "#6b7280" }}>
          Menampilkan {filteredTransactions.length} dari {transactions.length} transaksi
        </span>

        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <button
            style={{
              padding: isMobile ? "0.375rem 0.75rem" : "0.5rem 1rem",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              background: "white",
              color: "#374151",
              cursor: "pointer",
              fontSize: "0.875rem",
              fontWeight: "500",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#f9fafb";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "white";
            }}
          >
            Previous
          </button>
          <span
            style={{
              padding: isMobile ? "0.375rem 0.75rem" : "0.5rem 1rem",
              background: "#FDD741",
              color: "#20273A",
              borderRadius: "8px",
              fontSize: "0.875rem",
              fontWeight: "600",
            }}
          >
            1
          </span>
          <button
            style={{
              padding: isMobile ? "0.375rem 0.75rem" : "0.5rem 1rem",
              border: "1px solid #d1d5db",
              borderRadius: "8px",
              background: "white",
              color: "#374151",
              cursor: "pointer",
              fontSize: "0.875rem",
              fontWeight: "500",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#f9fafb";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "white";
            }}
          >
            Next
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          table {
            font-size: 0.875rem;
          }
        }

        @media (max-width: 640px) {
          table {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
};

export default TransactionTable;