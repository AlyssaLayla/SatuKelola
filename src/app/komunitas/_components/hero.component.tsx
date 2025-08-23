"use client";

import React from "react";
import { Search } from "lucide-react";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(to bottom, #FEF2C0 0%, transparent 100%)",
        display: "flex",
        alignItems: "center",
        minHeight: "100vh",
        paddingTop: "2rem",
        paddingBottom: "2rem",
      }}
      className="hero-section"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          position: "relative",
          paddingLeft: "2rem",
          paddingRight: "2rem",
        }}
        className="hero-container"
      >
        <div
          className="content-container"
          style={{
            flex: "1",
            paddingTop: "3rem",
            paddingBottom: "3rem",
            paddingRight: "2rem",
            position: "relative",
            zIndex: 2,
            maxWidth: "600px",
          }}
        >
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "900",
              color: "#111827",
              lineHeight: "1.05",
              marginBottom: "1.5rem",
              letterSpacing: "-0.03em",
            }}
            className="hero-title"
          >
            Komunitas UMKM
          </h1>

          <p
            style={{
              fontSize: "1.25rem",
              color: "#374151",
              marginBottom: "2rem",
              lineHeight: "1.6",
              fontWeight: "400",
              maxWidth: "500px",
            }}
            className="hero-description"
          >
            Jelajahi diskusi populer dan terhubung dengan berbagai UMKM di
            seluruh Indonesia
          </p>

          <div
            className="search-container"
            style={{ position: "relative", maxWidth: "400px" }}
          >
            <div
              style={{
                position: "relative",
                background: "#ffffff",
                borderRadius: "20px",
                padding: "4px",
                boxShadow: "0 10px 20px -6px rgba(0, 0, 0, 0.15)",
                border: "2px solid rgba(255, 255, 255, 0.3)",
                marginBottom: "1.25rem",
              }}
              className="search-input-container"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 20px",
                }}
              >
                <Search
                  size={20}
                  style={{
                    color: "#90939D",
                    flexShrink: 0,
                  }}
                />
                <input
                  type="text"
                  placeholder="Search ..."
                  style={{
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    fontSize: "1rem",
                    color: "#111827",
                    width: "100%",
                    fontWeight: "400",
                  }}
                  className="search-input"
                />
              </div>
            </div>

            <div
              className="button-container"
              style={{
                position: "relative",
                maxWidth: "400px",
              }}
            >
              <Link
                href="/komunitas/pembelajaran"
                className="hero-button"
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "1.25rem 2.5rem",
                  backgroundColor: "#FDD741",
                  color: "#111827",
                  fontWeight: "700",
                  borderRadius: "20px",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 10px 30px rgba(251, 191, 36, 0.4)",
                  letterSpacing: "0.025em",
                  fontSize: "1.125rem",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#D3B336";
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(251, 191, 36, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#FDD741";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(251, 191, 36, 0.4)";
                }}
              >
                <span>Ikuti Pembelajaran</span>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="hero-image-container"
          style={{
            flex: "0 0 auto",
            position: "relative",
            zIndex: 1,
            animation: "float 6s ease-in-out infinite",
            marginLeft: "auto",
          }}
        >
          <img
            src="komunitas-header.png"
            alt="Komunitas UMKM Illustration"
            style={{
              width: "auto",
              height: "100%",
              maxHeight: "600px",
              objectFit: "contain",
              filter: "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1))",
              display: "block",
            }}
            className="hero-image"
          />

          <div
            className="decorative-star"
            style={{
              position: "absolute",
              top: "10%",
              left: "15%",
              fontSize: "2.5rem",
              color: "#C4A73B",
              animation: "bounceSubtle 3s ease-in-out infinite",
              animationDelay: "0.5s",
              transform: "rotate(15deg)",
              zIndex: 2,
            }}
          >
            💬
          </div>

          <div
            className="decorative-circle-1"
            style={{
              position: "absolute",
              top: "35%",
              left: "-5%",
              width: "8px",
              height: "8px",
              backgroundColor: "#20273A",
              borderRadius: "50%",
              animation: "bounceSubtle 4s ease-in-out infinite",
              animationDelay: "1.5s",
              opacity: 0.3,
            }}
          />
          <div
            className="decorative-circle-2"
            style={{
              position: "absolute",
              bottom: "35%",
              left: "8%",
              width: "6px",
              height: "6px",
              backgroundColor: "#C4A73B",
              borderRadius: "50%",
              animation: "bounceSubtle 3.5s ease-in-out infinite",
              animationDelay: "2.5s",
              opacity: 0.4,
            }}
          />
        </div>
      </div>

      {/* Background decorations */}
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
            right: "-12rem",
            width: "25rem",
            height: "25rem",
            background:
              "linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(196, 167, 59, 0.05))",
            borderRadius: "50%",
            opacity: 0.3,
            filter: "blur(4rem)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-12rem",
            left: "-12rem",
            width: "20rem",
            height: "20rem",
            background:
              "linear-gradient(135deg, rgba(32, 39, 58, 0.05), rgba(144, 147, 157, 0.05))",
            borderRadius: "50%",
            opacity: 0.2,
            filter: "blur(4rem)",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
        }

        @keyframes bounceSubtle {
          0%, 100% { transform: translateY(0px) rotate(15deg); }
          50% { transform: translateY(-8px) rotate(15deg); }
        }

        /* Desktop Large (1200px+) */
        @media (min-width: 1200px) {
          .hero-title {
            font-size: 3.75rem !important;
          }
          .hero-image {
            max-height: 650px !important;
          }
        }

        /* Desktop Medium (992px - 1199px) */
        @media (max-width: 1199px) {
          .hero-title {
            font-size: 3.25rem !important;
          }
          .content-container {
            padding-right: 1.5rem !important;
          }
        }

        /* Tablet Landscape (768px - 991px) */
        @media (max-width: 991px) {
          .hero-section {
            min-height: 80vh !important;
            padding: 1rem 0 !important;
          }
          
          .hero-container {
            flex-direction: column !important;
            text-align: center !important;
            padding: 1.5rem !important;
            align-items: center !important;
          }

          .content-container {
            max-width: 100% !important;
            padding: 2rem 0 1rem 0 !important;
            text-align: center !important;
            order: 2 !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }

          .hero-title {
            font-size: 2.75rem !important;
            margin-bottom: 1rem !important;
          }

          .hero-description {
            text-align: center !important;
            max-width: 600px !important;
          }

          .search-container {
            width: 100% !important;
            max-width: 500px !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }

          .search-input-container {
            width: 100% !important;
            max-width: 400px !important;
          }

          .button-container {
            width: 100% !important;
            max-width: 400px !important;
          }

          .hero-image-container {
            order: 1 !important;
            margin: 0 0 1rem 0 !important;
            max-width: 500px !important;
          }

          .hero-image {
            max-height: 400px !important;
            width: 100% !important;
          }
        }

        /* Tablet Portrait (576px - 767px) */
        @media (max-width: 767px) {
          .hero-container {
            padding: 1rem !important;
          }

          .content-container {
            padding: 1.5rem 0 !important;
          }

          .hero-title {
            font-size: 2.25rem !important;
            line-height: 1.2 !important;
          }

          .hero-description {
            font-size: 1.1rem !important;
            margin-bottom: 1.5rem !important;
          }

          .search-container {
            max-width: 450px !important;
          }

          .hero-image-container {
            max-width: 400px !important;
          }

          .hero-image {
            max-height: 320px !important;
          }

          .hero-button {
            padding: 1rem 2rem !important;
            font-size: 1rem !important;
          }
        }

        /* Mobile Large (481px - 575px) */
        @media (max-width: 575px) {
          .hero-section {
            min-height: 70vh !important;
          }

          .hero-container {
            padding: 0.75rem !important;
          }

          .hero-title {
            font-size: 1.875rem !important;
            margin-bottom: 1rem !important;
          }

          .hero-description {
            font-size: 1rem !important;
            margin-bottom: 1.5rem !important;
          }

          .search-container {
            max-width: 100% !important;
          }

          .search-input-container {
            border-radius: 16px !important;
          }

          .search-input {
            font-size: 0.9rem !important;
          }

          .hero-image-container {
            max-width: 300px !important;
          }

          .hero-image {
            max-height: 250px !important;
          }

          .hero-button {
            padding: 0.875rem 1.75rem !important;
            font-size: 0.95rem !important;
          }
        }

        /* Mobile Small (320px - 480px) */
        @media (max-width: 480px) {
          .hero-container {
            padding: 0.5rem !important;
          }

          .hero-title {
            font-size: 1.625rem !important;
            line-height: 1.3 !important;
          }

          .hero-description {
            font-size: 0.9rem !important;
            margin-bottom: 1.25rem !important;
          }

          .search-input-container {
            padding: 2px !important;
            border-radius: 14px !important;
          }

          .search-input-container > div {
            padding: 10px 16px !important;
          }

          .search-input {
            font-size: 0.85rem !important;
          }

          .search-input-container {
            margin-bottom: 1rem !important;
          }

          .hero-image-container {
            max-width: 250px !important;
          }

          .hero-image {
            max-height: 200px !important;
          }

          .hero-button {
            padding: 0.75rem 1.5rem !important;
            font-size: 0.9rem !important;
            border-radius: 16px !important;
          }

          .decorative-star {
            font-size: 1.5rem !important;
          }
        }

        /* Extra Small Mobile (320px and below) */
        @media (max-width: 320px) {
          .hero-title {
            font-size: 1.5rem !important;
          }

          .hero-description {
            font-size: 0.85rem !important;
          }

          .search-input-container > div {
            padding: 8px 14px !important;
          }

          .search-input {
            font-size: 0.8rem !important;
          }

          .hero-image-container {
            max-width: 200px !important;
          }

          .hero-image {
            max-height: 180px !important;
          }

          .hero-button {
            padding: 0.75rem 1.25rem !important;
            font-size: 0.85rem !important;
          }
        }

        /* Landscape orientation for mobile */
        @media (max-height: 500px) and (orientation: landscape) {
          .hero-section {
            min-height: 100vh !important;
          }
          
          .hero-container {
            flex-direction: row !important;
            align-items: center !important;
          }
          
          .content-container {
            order: 1 !important;
            padding: 1rem 1rem 1rem 0 !important;
            text-align: left !important;
          }
          
          .hero-title {
            font-size: 2rem !important;
            margin-bottom: 0.75rem !important;
          }
          
          .hero-description {
            font-size: 0.9rem !important;
            margin-bottom: 1rem !important;
            text-align: left !important;
          }
          
          .search-container {
            max-width: 350px !important;
          }
          
          .hero-image-container {
            order: 2 !important;
            margin: 0 0 0 1rem !important;
            max-width: 300px !important;
          }
          
          .hero-image {
            max-height: 250px !important;
          }
        }

        /* Focus states for accessibility */
        .search-input:focus {
          outline: 2px solid #FDD741 !important;
          outline-offset: 2px !important;
        }
        
        .hero-button:focus {
          outline: 2px solid #D3B336 !important;
          outline-offset: 2px !important;
        }

        /* High contrast mode */
        @media (prefers-contrast: high) {
          .search-input-container {
            border: 3px solid #111827 !important;
          }
          
          .hero-button {
            border: 2px solid #111827 !important;
          }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .hero-image-container {
            animation: none !important;
          }
          
          .decorative-star,
          .decorative-circle-1,
          .decorative-circle-2 {
            animation: none !important;
          }
          
          .hero-button {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;