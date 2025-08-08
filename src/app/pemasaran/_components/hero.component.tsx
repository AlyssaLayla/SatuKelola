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
        paddingTop: "20px",
        paddingBottom: "20px",
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
      >
        {/* Content - Left Side */}
        <div
          className="content-container"
          style={{
            flex: "1",
            paddingTop: "5rem",
            paddingBottom: "5rem",
            paddingRight: "3rem",
            position: "relative",
            zIndex: 2,
            maxWidth: "600px",
          }}
        >
          <h1
            style={{
              fontSize: "4rem !important",
              fontWeight: "900",
              color: "#111827",
              lineHeight: "1.05",
              marginBottom: "1.5rem",
              letterSpacing: "-0.03em",
            }}
          >
            Yuk Temukan Cara Promosi Paling Cocok Versi Kamu!
          </h1>

          {/* Button Container */}
          <div
            className="button-container"
            style={{
              position: "relative",
              marginTop: "3rem",
              maxWidth: "400px",
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

        {/* Hero Image - Enhanced */}
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
          />

          {/* Decorative Elements */}
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

          {/* Small decorative elements - Reduced visibility */}
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

      {/* Enhanced Background Decoration - Reduced visibility */}
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

      {/* Gradient Transition to Next Section */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "100px",
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.8) 100%)",
          pointerEvents: "none",
          zIndex: 3,
        }}
      />

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-25px);
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
          .content-container h1 {
            font-size: 3rem !important;
          }
          .hero-image-container img {
            max-height: 550px !important;
            min-height: 400px !important;
          }
        }

        /* Desktop */
        @media (max-width: 1280px) {
          .content-container {
            padding-right: 2rem !important;
          }
          .content-container h1 {
            font-size: 2.8rem !important;
          }
          .hero-image-container img {
            max-height: 500px !important;
            min-height: 350px !important;
          }
        }

        /* Small desktop */
        @media (max-width: 1150px) {
          .content-container {
            padding-right: 1.5rem !important;
          }
          .content-container h1 {
            font-size: 2.5rem !important;
          }
          .hero-image-container img {
            max-height: 450px !important;
            min-height: 300px !important;
          }
        }

        /* Tablet landscape - Stack vertically */
        @media (max-width: 1024px) {
          section > div {
            flex-direction: column !important;
            text-align: center !important;
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
          }

          .content-container {
            max-width: 100% !important;
            padding-top: 3rem !important;
            padding-bottom: 2rem !important;
            padding-right: 0 !important;
            text-align: center !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }

          .content-container h1 {
            font-size: 2.8rem !important;
          }

          .button-container {
            width: 100% !important;
            max-width: 400px !important;
            display: flex !important;
            justify-content: center !important;
          }

          .hero-image-container {
            margin-left: 0 !important;
            margin-top: 1.5rem !important;
            display: flex !important;
            justify-content: center !important;
          }

          .hero-image-container img {
            width: 100% !important;
            max-width: 500px !important;
            max-height: none !important;
            min-height: auto !important;
            height: auto !important;
          }
        }

        /* Tablet portrait */
        @media (max-width: 768px) {
          section > div {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }

          .content-container {
            padding-top: 2.5rem !important;
            padding-bottom: 1.5rem !important;
          }

          .content-container h1 {
            font-size: 2.2rem !important;
          }

          .hero-image-container img {
            max-width: 400px !important;
          }
        }

        /* Mobile landscape & portrait */
        @media (max-width: 640px) {
          .content-container {
            padding-top: 2rem !important;
            padding-bottom: 1rem !important;
          }

          .content-container h1 {
            font-size: 1.8rem !important;
            margin-bottom: 1rem !important;
          }

          .button-container {
            max-width: 100% !important;
            margin-top: 1.5rem !important;
          }

          .hero-image-container {
            display: none !important;
          }
        }

        /* Extra small mobile */
        @media (max-width: 480px) {
          section > div {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }

          .content-container h1 {
            font-size: 1.6rem !important;
          }

          .hero-button {
            padding: 1rem 2rem !important;
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}