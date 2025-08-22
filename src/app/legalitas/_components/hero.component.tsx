import Link from "next/link";
import React from "react";

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
      className="legalitas-hero-section"
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
          className="hero-image"
          style={{
            flex: "0 0 auto",
            position: "relative",
            zIndex: 1,
            animation: "float 6s ease-in-out infinite",
            marginRight: "2rem",
          }}
        >
          <img
            src="legalitas-header.png"
            alt="Legalitas Usaha Illustration"
            style={{
              width: "auto",
              height: "100%",
              maxHeight: "600px",
              objectFit: "contain",
              filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.08))",
              display: "block",
            }}
            className="hero-image-img"
          />

          <div
            className="decorative-star"
            style={{
              position: "absolute",
              top: "10%",
              right: "15%",
              fontSize: "2.5rem",
              color: "#DC2626",
              animation: "bounceSubtle 3s ease-in-out infinite",
              animationDelay: "0.5s",
              transform: "rotate(15deg)",
              zIndex: 2,
            }}
          >
            ⚖️
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

        <div
          className="content-container"
          style={{
            flex: "1",
            paddingTop: "3rem",
            paddingBottom: "3rem",
            position: "relative",
            zIndex: 2,
            maxWidth: "600px",
          }}
        >
          <h1
            className="hero-title"
            style={{
              fontSize: "3.5rem",
              fontWeight: "900",
              color: "#111827",
              lineHeight: "1.05",
              marginBottom: "1.5rem",
              letterSpacing: "-0.03em",
            }}
          >
            Legalitas Usaha
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
            Mudah, cepat, dan terarah dengan panduan lengkap
          </p>

          <div style={{ position: "relative" }} className="button-container">
            <a
              href="https://oss.go.id/"
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
                boxShadow: "0 6px 20px rgba(251, 191, 36, 0.25)",
                letterSpacing: "0.025em",
                fontSize: "1.125rem",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#D3B336";
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(251, 191, 36, 0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#FDD741";
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(251, 191, 36, 0.25)";
              }}
            >
              <span>Akses Website OSS</span>
            </a>
          </div>
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
            top: "-12rem",
            left: "-10rem",
            width: "30rem",
            height: "30rem",
            background: "linear-gradient(135deg, #fde68a, #DC2626)",
            borderRadius: "50%",
            opacity: 0.15,
            filter: "blur(4rem)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-10rem",
            right: "-10rem",
            width: "25rem",
            height: "25rem",
            background: "linear-gradient(135deg, #fce7f3, #f59e0b)",
            borderRadius: "50%",
            opacity: 0.15,
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
          .hero-image-img {
            max-height: 650px !important;
          }
        }

        /* Desktop Medium (992px - 1199px) */
        @media (max-width: 1199px) {
          .hero-title {
            font-size: 3.25rem !important;
          }
          .hero-image {
            margin-right: 1.5rem !important;
          }
        }

        /* Tablet Landscape (768px - 991px) */
        @media (max-width: 991px) {
          .legalitas-hero-section {
            min-height: 80vh !important;
            padding: 1rem 0 !important;
          }
          
          .hero-container {
            flex-direction: column !important;
            text-align: center !important;
            padding: 1.5rem !important;
            align-items: center !important;
          }

          .hero-image {
            order: 1 !important;
            margin: 0 0 2rem 0 !important;
            max-width: 500px !important;
            display: flex !important;
            justify-content: center !important;
          }

          .hero-image-img {
            max-height: 400px !important;
            width: 100% !important;
          }

          .content-container {
            order: 2 !important;
            max-width: 100% !important;
            padding: 0 !important;
            text-align: center !important;
          }

          .hero-title {
            font-size: 2.75rem !important;
            margin-bottom: 1.25rem !important;
          }

          .hero-description {
            text-align: center !important;
            max-width: 600px !important;
            margin: 0 auto 2rem auto !important;
          }

          .button-container {
            display: flex !important;
            justify-content: center !important;
          }
        }

        /* Tablet Portrait (576px - 767px) */
        @media (max-width: 767px) {
          .hero-container {
            padding: 1rem !important;
          }

          .hero-image {
            margin-bottom: 1.5rem !important;
            max-width: 400px !important;
          }

          .hero-image-img {
            max-height: 320px !important;
          }

          .hero-title {
            font-size: 2.25rem !important;
            line-height: 1.2 !important;
          }

          .hero-description {
            font-size: 1.1rem !important;
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

        /* Mobile Large (481px - 575px) */
        @media (max-width: 575px) {
          .legalitas-hero-section {
            min-height: 70vh !important;
          }

          .hero-container {
            padding: 0.75rem !important;
          }

          .hero-image {
            max-width: 300px !important;
            margin-bottom: 1.25rem !important;
          }

          .hero-image-img {
            max-height: 250px !important;
          }

          .hero-title {
            font-size: 1.875rem !important;
            margin-bottom: 1rem !important;
          }

          .hero-description {
            font-size: 1rem !important;
            margin-bottom: 1.5rem !important;
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

          .hero-image {
            max-width: 250px !important;
          }

          .hero-image-img {
            max-height: 200px !important;
          }

          .hero-title {
            font-size: 1.625rem !important;
            line-height: 1.3 !important;
          }

          .hero-description {
            font-size: 0.9rem !important;
            margin-bottom: 1.25rem !important;
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
          .hero-image {
            max-width: 200px !important;
          }

          .hero-image-img {
            max-height: 180px !important;
          }

          .hero-title {
            font-size: 1.5rem !important;
          }

          .hero-description {
            font-size: 0.85rem !important;
          }

          .hero-button {
            padding: 0.75rem 1.25rem !important;
            font-size: 0.85rem !important;
          }
        }

        /* Landscape orientation for mobile */
        @media (max-height: 500px) and (orientation: landscape) {
          .legalitas-hero-section {
            min-height: 100vh !important;
          }
          
          .hero-container {
            flex-direction: row !important;
            align-items: center !important;
          }
          
          .hero-image {
            order: 1 !important;
            margin: 0 1rem 0 0 !important;
            max-width: 300px !important;
          }
          
          .hero-image-img {
            max-height: 250px !important;
          }
          
          .content-container {
            order: 2 !important;
            text-align: left !important;
          }
          
          .hero-title {
            font-size: 2rem !important;
            margin-bottom: 0.75rem !important;
          }
          
          .hero-description {
            font-size: 0.9rem !important;
            text-align: left !important;
            margin: 0 0 1rem 0 !important;
          }
          
          .button-container {
            justify-content: flex-start !important;
          }
        }

        /* Focus states for accessibility */
        .hero-button:focus {
          outline: 2px solid #D3B336 !important;
          outline-offset: 2px !important;
        }

        /* High contrast mode */
        @media (prefers-contrast: high) {
          .hero-button {
            border: 2px solid #111827 !important;
          }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .hero-image {
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