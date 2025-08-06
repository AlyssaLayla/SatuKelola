"use client";

import React from "react";
import { ChevronDown } from "lucide-react";

export default function MarketingAdvisorHero() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "rgba(254, 242, 192, 0.5)",
        display: "flex",
        alignItems: "center",
        minHeight: "500px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "0",
          alignItems: "center",
          width: "100%",
          position: "relative",
        }}
      >
        {/* Content - Left Side */}
        <div
          className="content-container"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "5rem 40rem 5rem 4rem",
            position: "relative",
            zIndex: 2,
          }}
        >
          <h1
            className="hero-title"
            style={{
              fontSize: "48px",
              fontWeight: "900",
              color: "#111827",
              lineHeight: "1.1",
              marginBottom: "3rem",
              letterSpacing: "-0.025em",
            }}
          >
            Yuk Temukan Cara Promosi Paling Cocok Versi Kamu!
          </h1>

          <div style={{ position: "relative" }}>
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
                size={24}
                style={{
                  marginLeft: "0.75rem",
                  transition: "transform 0.3s ease",
                }}
              />
            </button>
          </div>
        </div>

        {/* Hero Image - Absolute positioned to right edge */}
        <div
          className="hero-image"
          style={{
            position: "absolute",
            top: "50%",
            right: "0",
            transform: "translateY(-50%)",
            zIndex: 1,
            animation: "float 6s ease-in-out infinite",
          }}
        >
          <img
            src="pemasaran-header.png"
            alt="Marketing Advisor Illustration"
            style={{
              width: "auto",
              height: "100%",
              maxHeight: "600px",
              minHeight: "550px",
              objectFit: "contain",
              filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))",
              display: "block",
            }}
          />

          {/* Decorative Star */}
          <div
            className="decorative-star"
            style={{
              position: "absolute",
              top: "20%",
              left: "15%",
              fontSize: "2.5rem",
              color: "#f59e0b",
              animation: "bounceSubtle 3s ease-in-out infinite",
              animationDelay: "0.5s",
              transform: "rotate(15deg)",
              zIndex: 2,
            }}
          >
            ✦
          </div>

          {/* Small decorative elements */}
          <div
            className="decorative-circle-1"
            style={{
              position: "absolute",
              top: "35%",
              left: "-5%",
              width: "12px",
              height: "12px",
              backgroundColor: "#fb923c",
              borderRadius: "50%",
              animation: "bounceSubtle 4s ease-in-out infinite",
              animationDelay: "1.5s",
            }}
          />
          <div
            className="decorative-circle-2"
            style={{
              position: "absolute",
              bottom: "30%",
              left: "10%",
              width: "8px",
              height: "8px",
              backgroundColor: "#ec4899",
              borderRadius: "50%",
              animation: "bounceSubtle 3.5s ease-in-out infinite",
              animationDelay: "2.5s",
            }}
          />
        </div>
      </div>

      {/* Background Decoration */}
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
            top: "-10rem",
            right: "-8rem",
            width: "24rem",
            height: "24rem",
            background: "linear-gradient(135deg, #fde68a, #fb923c)",
            borderRadius: "50%",
            opacity: 0.2,
            filter: "blur(3rem)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-8rem",
            left: "-8rem",
            width: "20rem",
            height: "20rem",
            background: "linear-gradient(135deg, #fce7f3, #a855f7)",
            borderRadius: "50%",
            opacity: 0.2,
            filter: "blur(3rem)",
          }}
        />
      </div>

{/* Custom Styles */}
      <style jsx>{`
        .hero-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(-50%);
          }
          50% {
            transform: translateY(calc(-50% - 20px));
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceSubtle {
          0%,
          100% {
            transform: translateY(0px) rotate(15deg);
          }
          50% {
            transform: translateY(-8px) rotate(15deg);
          }
        }

        /* Large desktop */
        @media (max-width: 1440px) {
          .content-container {
            padding: 4rem 35rem 4rem 3rem !important;
          }
        }

        /* Desktop */
        @media (max-width: 1280px) {
          .content-container {
            padding: 4rem 25rem 4rem 3rem !important;
          }
          .hero-title {
            font-size: 44px !important;
          }
        }

        /* Small desktop */
        @media (max-width: 1150px) {
          .content-container {
            padding: 4rem 20rem 4rem 3rem !important;
          }
          .hero-title {
            font-size: 40px !important;
          }
        }

        /* Tablet landscape */
        @media (max-width: 1024px) {
          .content-container {
            padding: 3rem 2rem 1rem 2rem !important;
            text-align: center;
            max-width: 100% !important;
          }

          .hero-image {
            position: relative !important;
            right: auto !important;
            top: auto !important;
            transform: none !important;
            margin-top: 2rem;
            text-align: center;
            display: flex;
            justify-content: center;
            width: 100%;
            height: auto;
          }

          .hero-image img {
            width: 100% !important;
            height: auto !important;
            max-width: 500px !important;
            max-height: none !important;
            min-height: auto !important;
          }

          .hero-title {
            font-size: 42px !important;
            margin-bottom: 2rem !important;
          }
        }

        /* Tablet portrait */
        @media (max-width: 768px) {
          .content-container {
            padding: 2.5rem 1.5rem 1rem 1.5rem !important;
          }

          .hero-image {
            margin-top: 1.5rem !important;
          }

          .hero-image img {
            max-width: 400px !important;
          }

          .hero-title {
            font-size: 40px !important;
            line-height: 1.1 !important;
            margin-bottom: 1.5rem !important;
          }

          .hero-button {
            padding: 1rem 2rem !important;
            font-size: 1rem !important;
          }

          .decorative-star {
            font-size: 2rem !important;
          }
        }

        /* Mobile landscape */
        @media (max-width: 640px) {
          .content-container {
            padding: 2rem 1rem 1rem 1rem !important;
          }

          .hero-image {
            display: none !important;
          }

          .hero-title {
            font-size: 38px !important;
          }

          .hero-button {
            padding: 0.875rem 1.75rem !important;
            font-size: 0.95rem !important;
          }
        }

        /* Mobile portrait */
        @media (max-width: 480px) {
          .content-container {
            padding: 1.5rem 1rem 0.5rem 1rem !important;
          }

          .hero-image {
            display: none !important;
          }

          .hero-title {
            font-size: 36px !important;
            margin-bottom: 1.25rem !important;
            line-height: 1.1 !important;
          }

          .hero-button {
            padding: 0.75rem 1.5rem !important;
            font-size: 0.9rem !important;
          }
        }

        /* Very small mobile */
        @media (max-width: 360px) {
          .content-container {
            padding: 1rem 0.75rem 0.5rem 0.75rem !important;
          }

          .hero-image {
            display: none !important;
          }

          .hero-title {
            font-size: 32px !important;
            margin-bottom: 1rem !important;
          }

          .hero-button {
            padding: 0.625rem 1.25rem !important;
            font-size: 0.85rem !important;
          }
        }
      `}</style>
    </section>
  );
}