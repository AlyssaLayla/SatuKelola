import React, { useState, useMemo, useEffect } from "react";
import { MoreVertical } from "lucide-react";
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

    return filtered;
  }, [transactions, activeFilter]);

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "8px",
        overflow: "hidden",
        border: "1px solid #e5e7eb",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Filter tabs - sesuai gambar tanpa DateRangePicker */}
      <div style={{ borderBottom: "1px solid #e5e7eb" }}>
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
                        ? "2px solid #000"
                        : "2px solid transparent",
                    fontWeight: "500",
                    fontSize: isMobile ? "12px" : "14px",
                    color: activeFilter === filter ? "#000" : "#6b7280",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    transition: "color 0.2s ease",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    if (activeFilter !== filter) {
                      e.currentTarget.style.color = "#000";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeFilter !== filter) {
                      e.currentTarget.style.color = "#6b7280";
                    }
                  }}
                >
                  {filter}
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
            <tr style={{ backgroundColor: "#f9fafb" }}>
              <th
                style={{
                  padding: "12px 24px",
                  textAlign: "left",
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#6b7280",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                Tanggal
              </th>
              {!isMobile && (
                <th
                  style={{
                    padding: "12px 24px",
                    textAlign: "left",
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "#6b7280",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  Jenis
                </th>
              )}
              {!isMobile && (
                <th
                  style={{
                    padding: "12px 24px",
                    textAlign: "left",
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "#6b7280",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  Kategori
                </th>
              )}
              <th
                style={{
                  padding: "12px 24px",
                  textAlign: "left",
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#6b7280",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                Jumlah
              </th>
              <th
                style={{
                  padding: "12px 24px",
                  textAlign: "left",
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#6b7280",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                Deskripsi
              </th>
              {!isMobile && (
                <th
                  style={{
                    padding: "12px 24px",
                    textAlign: "left",
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "#6b7280",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  Metode
                </th>
              )}
              <th
                style={{
                  padding: "12px 24px",
                  textAlign: "left",
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#6b7280",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  borderBottom: "1px solid #e5e7eb",
                  width: "80px",
                }}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction, index) => {
              const amount =
                transaction.jenis === "Pemasukan"
                  ? transaction.kredit
                  : transaction.debet;
              const isIncome = transaction.jenis === "Pemasukan";
              const isEven = index % 2 === 0;

              return (
                <tr
                  key={index}
                  style={{
                    backgroundColor: isEven ? "white" : "#fafafa",
                    borderBottom: "1px solid #f3f4f6",
                    transition: "background-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#f3f4f6";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = isEven
                      ? "white"
                      : "#fafafa";
                  }}
                >
                  <td
                    style={{
                      padding: isMobile ? "12px 16px" : "16px 24px",
                      fontSize: isMobile ? "12px" : "14px",
                      fontWeight: "500",
                      color: "#111827",
                    }}
                  >
                    {formatDate(transaction.tanggal)}
                  </td>
                  {!isMobile && (
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
                          color: isIncome ? "#166534" : "#991b1b",
                        }}
                      >
                        {transaction.jenis} {isIncome ? "↑" : "↓"}
                      </span>
                    </td>
                  )}
                  {!isMobile && (
                    <td
                      style={{
                        padding: "16px 24px",
                        fontSize: "14px",
                        color: "#111827",
                      }}
                    >
                      {getCategory(transaction.nama_akun)}
                    </td>
                  )}
                  <td
                    style={{
                      padding: isMobile ? "12px 16px" : "16px 24px",
                      fontSize: isMobile ? "12px" : "14px",
                      fontWeight: "600",
                    }}
                  >
                    <span style={{ color: isIncome ? "#059669" : "#dc2626" }}>
                      {isIncome ? "+" : "-"}
                      {formatCurrency(amount)}
                    </span>
                    {isMobile && (
                      <div
                        style={{
                          fontSize: "10px",
                          color: "#6b7280",
                          marginTop: "2px",
                          display: "flex",
                          alignItems: "center",
                          gap: "4px",
                        }}
                      >
                      </div>
                    )}
                  </td>
                  <td
                    style={{
                      padding: isMobile ? "12px 16px" : "16px 24px",
                      fontSize: isMobile ? "12px" : "14px",
                      color: "#111827",
                      maxWidth: isMobile ? "120px" : "300px",
                    }}
                  >
                    <div
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                      title={transaction.keterangan}
                    >
                      {transaction.keterangan}
                    </div>
                  </td>
                  {!isMobile && (
                    <td
                      style={{
                        padding: "16px 24px",
                        fontSize: "14px",
                        color: "#111827",
                      }}
                    >
                      {getPaymentMethod(transaction.keterangan)}
                    </td>
                  )}
                  <td
                    style={{
                      padding: isMobile ? "12px 16px" : "16px 24px",
                      textAlign: "center",
                      verticalAlign: "middle",
                    }}
                  >
                    <button
                      style={{
                        color: "#6b7280",
                        padding: isMobile ? "6px" : "8px",
                        borderRadius: "50%",
                        border: "none",
                        background: "none",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
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
                      <MoreVertical size={isMobile ? 14 : 16} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Table footer */}
      <div
        style={{
          padding: isMobile ? "12px 16px" : "16px 24px",
          borderTop: "1px solid #e5e7eb",
          backgroundColor: "#f9fafb",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "12px" : "0",
          }}
        >
          <span
            style={{ fontSize: isMobile ? "12px" : "14px", color: "#6b7280" }}
          >
            Menampilkan {filteredTransactions.length} dari {transactions.length}{" "}
            transaksi
          </span>

          {/* Pagination */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <button
              style={{
                padding: isMobile ? "3px 8px" : "4px 12px",
                fontSize: isMobile ? "12px" : "14px",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                backgroundColor: "white",
                color: "#374151",
                cursor: "pointer",
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f9fafb";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
              }}
            >
              Previous
            </button>
            <span
              style={{
                padding: isMobile ? "3px 8px" : "4px 12px",
                fontSize: isMobile ? "12px" : "14px",
                backgroundColor: "#fef3c7",
                color: "#92400e",
                borderRadius: "6px",
                fontWeight: "500",
              }}
            >
              1
            </span>
            <button
              style={{
                padding: isMobile ? "3px 8px" : "4px 12px",
                fontSize: isMobile ? "12px" : "14px",
                border: "1px solid #d1d5db",
                borderRadius: "6px",
                backgroundColor: "white",
                color: "#374151",
                cursor: "pointer",
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f9fafb";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "white";
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;