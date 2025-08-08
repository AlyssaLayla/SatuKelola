"use client";

import React from 'react';

const StokInventoriPage: React.FC = () => {
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
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "48px",
            border: "1px solid #e5e7eb",
            boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
            textAlign: "center"
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "600",
              color: "#111827",
              marginBottom: "16px"
            }}
          >
            Stok dan Inventori
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#6b7280",
              margin: "0"
            }}
          >
            Halaman ini sedang dalam pengembangan...
          </p>
        </div>
      </div>
    </div>
  );
};

export default StokInventoriPage;