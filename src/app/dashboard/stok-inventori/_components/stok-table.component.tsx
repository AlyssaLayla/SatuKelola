import React from "react";
import { Search, Download, Eye, MoreVertical } from "lucide-react";

interface InventoryItem {
  id: string;
  namaBarang: string;
  jenis: string;
  kategori: string;
  subkategori: string;
  jumlah: number;
  deskripsi: string;
  stok: number;
  minStok: number;
  maxStok: number;
  unit: string;
  supplier: string;
  lokasi: string;
  tanggalMasuk: string;
  tanggalKadaluarsa: string;
  hargaBeli: number;
  hargaJual: number;
  status: string;
  barcode: string;
  catatan: string;
}

interface InventoryTableProps {
  isVisible: boolean;
  filter: string;
  setFilter: (filter: string) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filteredStokData: InventoryItem[];
  mockInventoryData: InventoryItem[];
  formatCurrency: (amount: any) => string;
  getStatusColor: (status: any) => { bg: string; color: string };
  getCategoryIcon: (kategori: any) => any;
}

const InventoryTable: React.FC<InventoryTableProps> = ({
  isVisible,
  filter,
  setFilter,
  searchTerm,
  setSearchTerm,
  filteredStokData,
  mockInventoryData,
  formatCurrency,
  getStatusColor,
  getCategoryIcon,
}) => {
  return (
    <div
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          borderRadius: "32px",
          overflow: "hidden",
          border: "1px solid #f1f5f9",
          boxShadow: "0 8px 20px -6px rgba(0, 0, 0, 0.08)",
        }}
      >
        {/* Header dengan Search */}
        <div
          style={{
            padding: "2rem 2.5rem",
            borderBottom: "1px solid #f1f5f9",
            background: "#ffffff",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1.5rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: "700",
                color: "#111827",
                margin: "0",
                letterSpacing: "-0.02em",
              }}
            >
              Daftar Inventori
            </h2>

            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.5rem",
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
                Export
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div
            style={{
              position: "relative",
              maxWidth: "400px",
            }}
          >
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
              placeholder="Cari berdasarkan nama barang, kategori, atau supplier..."
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
                e.currentTarget.style.boxShadow =
                  "0 0 0 3px rgba(253, 215, 65, 0.1)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "#e2e8f0";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
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
                  Item & Kategori
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
                  Stok & Status
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
                  Nilai & Harga
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
                  Lokasi & Supplier
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
                    width: "80px",
                  }}
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredStokData.map((item, index) => {
                const isIncome = item.jenis === "Pemasukan";
                const isEven = index % 2 === 0;
                const statusStyle = getStatusColor(item.status);
                const CategoryIcon = getCategoryIcon(item.kategori);

                return (
                  <tr
                    key={item.id}
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
                    {/* Item & Kategori */}
                    <td style={{ padding: "16px 24px" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                        }}
                      >
                        <div
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "12px",
                            background: `linear-gradient(135deg, ${
                              isIncome ? "#22c55e" : "#ef4444"
                            }, ${isIncome ? "#16a34a" : "#dc2626"})`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <CategoryIcon
                            size={20}
                            style={{ color: "#ffffff" }}
                          />
                        </div>
                        <div>
                          <div
                            style={{
                              fontSize: "14px",
                              fontWeight: "600",
                              color: "#111827",
                              marginBottom: "4px",
                            }}
                          >
                            {item.namaBarang}
                          </div>
                          <div
                            style={{
                              fontSize: "12px",
                              color: "#6b7280",
                            }}
                          >
                            {item.kategori} {item.subkategori}
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Stok & Status */}
                    <td style={{ padding: "16px 24px" }}>
                      <div>
                        <div
                          style={{
                            fontSize: "14px",
                            fontWeight: "600",
                            color: "#111827",
                            marginBottom: "4px",
                          }}
                        >
                          {item.stok} {item.unit}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <span
                            style={{
                              fontSize: "12px",
                              fontWeight: "500",
                              padding: "2px 8px",
                              borderRadius: "12px",
                              background: statusStyle.bg,
                              color: statusStyle.color,
                            }}
                          >
                            {item.status}
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Nilai & Harga */}
                    <td style={{ padding: "16px 24px" }}>
                      <div>
                        <div
                          style={{
                            fontSize: "14px",
                            fontWeight: "600",
                            color: isIncome ? "#059669" : "#dc2626",
                            marginBottom: "4px",
                          }}
                        >
                          {isIncome ? "+" : "-"}
                          {formatCurrency(item.jumlah)}
                        </div>
                        <div
                          style={{
                            fontSize: "12px",
                            color: "#6b7280",
                          }}
                        >
                          Beli: {formatCurrency(item.hargaBeli)} <br />
                          Jual: {formatCurrency(item.hargaJual)}
                        </div>
                      </div>
                    </td>

                    {/* Lokasi & Supplier */}
                    <td style={{ padding: "16px 24px" }}>
                      <div>
                        <div
                          style={{
                            fontSize: "14px",
                            fontWeight: "500",
                            color: "#111827",
                            marginBottom: "4px",
                          }}
                        >
                          {item.lokasi}
                        </div>
                        <div
                          style={{
                            fontSize: "12px",
                            color: "#6b7280",
                          }}
                        >
                          {item.supplier}
                        </div>
                      </div>
                    </td>

                    {/* Actions */}
                    <td
                      style={{
                        padding: "16px 24px",
                        textAlign: "center",
                        verticalAlign: "middle",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <button
                          style={{
                            padding: "0.5rem",
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
                          <Eye size={16} />
                        </button>
                        <button
                          style={{
                            padding: "0.5rem",
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
                          <MoreVertical size={16} />
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
            padding: "16px 24px",
            borderTop: "1px solid #e5e7eb",
            backgroundColor: "#f9fafb",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <span style={{ fontSize: "14px", color: "#6b7280" }}>
              Menampilkan {filteredStokData.length} dari{" "}
              {mockInventoryData.length} item
            </span>

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <button
                style={{
                  padding: "4px 12px",
                  fontSize: "14px",
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
                  padding: "4px 12px",
                  fontSize: "14px",
                  backgroundColor: "#FDD741",
                  color: "#20273A",
                  borderRadius: "6px",
                  fontWeight: "500",
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
    </div>
  );
};

export default InventoryTable;
