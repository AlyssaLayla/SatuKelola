import React from "react";
import { ShoppingBag, Plus, ChevronLeft, ChevronRight } from "lucide-react";

interface DigitalStore {
  name: string;
  subtitle: string;
  status: string;
}

interface DigitalStoresCardProps {
  digitalStoresData: DigitalStore[];
  currentIndex: number;
  handlePrevious: () => void;
  handleNext: () => void;
  itemsPerPage: number;
  maxIndex: number;
}

const DigitalStoresCard: React.FC<DigitalStoresCardProps> = ({
  digitalStoresData,
  currentIndex,
  handlePrevious,
  handleNext,
  itemsPerPage,
  maxIndex,
}) => {
  const totalItems = digitalStoresData.length + 1;
  const isMobile = itemsPerPage === 1;

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: isMobile ? "20px" : "32px",
        padding: isMobile ? "1.5rem" : "2.5rem",
        border: "1px solid #f1f5f9",
        boxShadow: "0 8px 20px -6px rgba(0, 0, 0, 0.08)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "2rem",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {/* Icon Container */}
          <div
            style={{
              width: isMobile ? "40px" : "48px",
              height: isMobile ? "40px" : "48px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #8b5cf6, #7c3aed)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ShoppingBag size={isMobile ? 20 : 24} style={{ color: "#ffffff" }} />
          </div>
          
          {/* Title Container */}
          <h3
            style={{
              fontSize: isMobile ? "1.25rem" : "1.5rem",
              fontWeight: "700",
              color: "#111827",
              margin: "0",
              letterSpacing: "-0.02em",
            }}
          >
            Toko Digital
          </h3>
        </div>

        {/* Navigation Controls - Hide on mobile if single item view */}
        {(!isMobile || totalItems > 1) && (
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              style={{
                width: isMobile ? "36px" : "40px",
                height: isMobile ? "36px" : "40px",
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
                backgroundColor: currentIndex === 0 ? "#f8fafc" : "#ffffff",
                color: currentIndex === 0 ? "#9ca3af" : "#374151",
                cursor: currentIndex === 0 ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (currentIndex !== 0) {
                  e.currentTarget.style.backgroundColor = "#f1f5f9";
                  e.currentTarget.style.borderColor = "#d1d5db";
                }
              }}
              onMouseLeave={(e) => {
                if (currentIndex !== 0) {
                  e.currentTarget.style.backgroundColor = "#ffffff";
                  e.currentTarget.style.borderColor = "#e2e8f0";
                }
              }}
            >
              <ChevronLeft size={isMobile ? 16 : 18} />
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              style={{
                width: isMobile ? "36px" : "40px",
                height: isMobile ? "36px" : "40px",
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
                backgroundColor:
                  currentIndex >= maxIndex ? "#f8fafc" : "#ffffff",
                color: currentIndex >= maxIndex ? "#9ca3af" : "#374151",
                cursor: currentIndex >= maxIndex ? "not-allowed" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (currentIndex < maxIndex) {
                  e.currentTarget.style.backgroundColor = "#f1f5f9";
                  e.currentTarget.style.borderColor = "#d1d5db";
                }
              }}
              onMouseLeave={(e) => {
                if (currentIndex < maxIndex) {
                  e.currentTarget.style.backgroundColor = "#ffffff";
                  e.currentTarget.style.borderColor = "#e2e8f0";
                }
              }}
            >
              <ChevronRight size={isMobile ? 16 : 18} />
            </button>
          </div>
        )}
      </div>

      {/* Cards Container */}
      <div style={{ overflow: "hidden", width: "100%" }}>
        <div
          style={{
            display: "flex",
            gap: isMobile ? "16px" : "24px",
            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
            transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            width: `${(totalItems / itemsPerPage) * 100}%`,
          }}
        >
          {/* Add New Store Card */}
          <div
            style={{
              flex: `0 0 ${100 / itemsPerPage}%`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: isMobile ? "1.5rem" : "2rem",
              border: "2px dashed #d1d5db",
              borderRadius: isMobile ? "16px" : "20px",
              minHeight: isMobile ? "160px" : "200px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              background: "linear-gradient(135deg, #fafbfc 0%, #f1f5f9 100%)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#FDD741";
              e.currentTarget.style.background =
                "linear-gradient(135deg, #fefce8 0%, #fef3c7 100%)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#d1d5db";
              e.currentTarget.style.background =
                "linear-gradient(135deg, #fafbfc 0%, #f1f5f9 100%)";
            }}
          >
            <div
              style={{
                width: isMobile ? "48px" : "64px",
                height: isMobile ? "48px" : "64px",
                background: "linear-gradient(135deg, #FDD741, #FEE480)",
                borderRadius: isMobile ? "16px" : "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px",
                boxShadow: "0 8px 20px -6px rgba(253, 215, 65, 0.4)",
              }}
            >
              <Plus size={isMobile ? 20 : 28} style={{ color: "#20273A" }} />
            </div>
            <h4
              style={{
                fontSize: isMobile ? "1rem" : "1.125rem",
                fontWeight: "600",
                color: "#111827",
                margin: "0 0 8px 0",
                textAlign: "center",
              }}
            >
              Tambah Toko Baru
            </h4>
            <p
              style={{
                fontSize: isMobile ? "0.75rem" : "0.875rem",
                color: "#6b7280",
                margin: "0",
                textAlign: "center",
              }}
            >
              Ekspansi bisnis Anda ke platform digital
            </p>
          </div>

          {/* Existing Stores */}
          {digitalStoresData.map((store, index) => (
            <div
              key={index}
              style={{
                flex: `0 0 ${100 / itemsPerPage}%`,
                padding: isMobile ? "1.5rem" : "2rem",
                border: "1px solid #e5e7eb",
                borderRadius: isMobile ? "16px" : "20px",
                textAlign: "center",
                background: "#ffffff",
                transition: "all 0.3s ease",
                cursor: "pointer",
                minHeight: isMobile ? "160px" : "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 30px -8px rgba(0, 0, 0, 0.15)";
                e.currentTarget.style.borderColor =
                  store.status === "active" ? "#FDD741" : "#e5e7eb";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "#e5e7eb";
              }}
            >
              <div>
                <div
                  style={{
                    width: isMobile ? "48px" : "64px",
                    height: isMobile ? "48px" : "64px",
                    background:
                      store.status === "active"
                        ? "linear-gradient(135deg, #22c55e, #16a34a)"
                        : "linear-gradient(135deg, #e5e7eb, #d1d5db)",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px auto",
                    position: "relative",
                  }}
                >
                  <ShoppingBag size={isMobile ? 20 : 28} style={{ color: "#ffffff" }} />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      right: "-4px",
                      width: isMobile ? "16px" : "20px",
                      height: isMobile ? "16px" : "20px",
                      background:
                        store.status === "active" ? "#22c55e" : "#ef4444",
                      borderRadius: "50%",
                      border: "3px solid #ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: isMobile ? "4px" : "8px",
                        height: isMobile ? "4px" : "8px",
                        background: "#ffffff",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                </div>

                <h4
                  style={{
                    fontSize: isMobile ? "1rem" : "1.125rem",
                    fontWeight: "600",
                    color: "#111827",
                    margin: "0 0 8px 0",
                  }}
                >
                  {store.name}
                </h4>
                <p
                  style={{
                    fontSize: isMobile ? "0.75rem" : "0.875rem",
                    color: "#6b7280",
                    margin: "0 0 20px 0",
                  }}
                >
                  {store.subtitle}
                </p>
              </div>

              <button
                style={{
                  padding: isMobile ? "8px 16px" : "10px 20px",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  backgroundColor:
                    store.status === "active" ? "#FDD741" : "#f3f4f6",
                  color: store.status === "active" ? "#20273A" : "#6b7280",
                  border: "none",
                  borderRadius: "12px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  width: "100%",
                }}
                onMouseEnter={(e) => {
                  if (store.status === "active") {
                    e.currentTarget.style.backgroundColor = "#FEE480";
                  } else {
                    e.currentTarget.style.backgroundColor = "#e5e7eb";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    store.status === "active" ? "#FDD741" : "#f3f4f6";
                }}
              >
                {store.status === "active" ? "Kelola Toko" : "Aktivasi"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalStoresCard;