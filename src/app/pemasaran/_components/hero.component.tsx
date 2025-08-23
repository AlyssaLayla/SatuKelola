"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

export default function MarketingAdvisorHero() {
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
            Yuk Temukan Cara Promosi Paling Cocok Versi Kamu!
          </h1>

          <div
            className="button-container"
            style={{
              position: "relative",
              marginTop: "2rem",
            }}
          >
            <button
              className="hero-button"
              style={{
                display: "inline-flex",
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
              <span>Mulai Disini</span>
              <ChevronDown
                size={20}
                style={{
                  marginLeft: "0.75rem",
                  transition: "transform 0.3s ease",
                }}
              />
            </button>
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
            src="pemasaran-header.png"
            alt="Marketing Advisor Illustration"
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
            ✦
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
          section {
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
          }

          .hero-title {
            font-size: 2.75rem !important;
            margin-bottom: 1rem !important;
          }

          .button-container {
            margin-top: 1.5rem !important;
            display: flex !important;
            justify-content: center !important;
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
          section {
            min-height: 70vh !important;
          }

          .hero-container {
            padding: 0.75rem !important;
          }

          .hero-title {
            font-size: 1.875rem !important;
            margin-bottom: 1rem !important;
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

          .hero-image-container {
            max-width: 250px !important;
          }

          .hero-image {
            max-height: 200px !important;
          }

          .hero-button {
            padding: 0.75rem 1.5rem !important;
            font-size: 0.9rem !important;
            max-width: 280px !important;
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
          section {
            min-height: 100vh !important;
          }
          
          .hero-container {
            flex-direction: row !important;
          }
          
          .content-container {
            order: 1 !important;
          }
          
          .hero-image-container {
            order: 2 !important;
          }
        }
      `}</style>
    </section>
  );
}