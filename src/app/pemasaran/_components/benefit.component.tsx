"use client";
import React, { useState, useEffect } from "react";

const BenefitsSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const benefits = [
    {
      id: 1,
      title: "Hemat Waktu",
      description: "Gak perlu bingung lagi harus mulai darimana!",
      image: "pemasaran-card1.png",
      delay: "0s",
    },
    {
      id: 2,
      title: "Maksimalkan Potensi",
      description: "Bantu kamu tampil standout di platform yang paling cocok",
      image: "pemasaran-card2.png",
      delay: "0.2s",
    },
    {
      id: 3,
      title: "Tepat Sasaran",
      description: "Rekomendasi sesuai gaya dan kekuatan kamu",
      image: "pemasaran-card3.png",
      delay: "0.4s",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2]);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      style={{
        paddingTop: "5rem",
        paddingBottom: "5rem",
      }}
      className="benefits-section"
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
        className="benefits-container"
      >
        <div style={{ textAlign: "center", marginBottom: "4rem" }} className="benefits-header">
          <h2
            style={{
              fontSize: "2.75rem",
              fontWeight: "700",
              color: "#000",
              marginBottom: "1rem",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
            }}
            className="benefits-title"
          >
            Apa Yang Kamu Dapatkan?
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            padding: "0",
          }}
          className="benefits-grid"
        >
          {benefits.map((benefit, index) => {
            const isVisible = visibleCards.includes(index);

            return (
              <div
                key={benefit.id}
                className={`benefit-card group cursor-pointer transform transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{
                  animationDelay: benefit.delay,
                  transitionDelay: benefit.delay,
                }}
              >
                <div
                  style={{
                    background: "#FDD741",
                    borderRadius: "2rem",
                    padding: "2rem",
                    height: "100%",
                    boxShadow:
                      "0 4px 15px -3px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden",
                    border: "1px solid #f1f5f9",
                    cursor: "pointer",
                    minHeight: "320px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                  className="benefit-card-inner"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-8px) scale(1.02)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 30px -5px rgba(0, 0, 0, 0.12), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 15px -3px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "1.5rem",
                    }}
                    className="benefit-image-container"
                  >
                    <div style={{ position: "relative" }}>
                      <div
                        style={{
                          width: "120px",
                          height: "120px",
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "8px",
                          boxShadow: "0 4px 15px -4px rgba(0, 0, 0, 0.15)",
                          transition: "transform 0.3s ease",
                        }}
                        className="benefit-image-circle"
                      >
                        <img
                          src={benefit.image}
                          alt={benefit.title}
                          style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "contain",
                            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                            transition: "transform 0.6s ease",
                          }}
                          className="benefit-image group-hover:scale-110 group-hover:rotate-6"
                        />
                      </div>
                    </div>
                  </div>

                  <div style={{ textAlign: "center" }}>
                    <h3
                      style={{
                        fontSize: "1.375rem",
                        fontWeight: "600",
                        color: "#111827",
                        marginBottom: "0.75rem",
                        lineHeight: "1.3",
                        transition: "color 0.3s ease",
                        letterSpacing: "-0.01em",
                      }}
                      className="benefit-title"
                    >
                      {benefit.title}
                    </h3>
                    <p
                      style={{
                        color: "#64748b",
                        fontSize: "1rem",
                        lineHeight: "1.6",
                        padding: "0 0.5rem",
                        transition: "color 0.3s ease",
                        fontWeight: "400",
                        margin: 0,
                      }}
                      className="benefit-description"
                    >
                      {benefit.description}
                    </p>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      top: "-20px",
                      right: "-20px",
                      width: "100px",
                      height: "100px",
                      background:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))",
                      borderRadius: "50%",
                      transition: "all 0.3s ease",
                      opacity: 0.1,
                    }}
                    className="group-hover:opacity-20 group-hover:scale-120"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .group-hover\\:scale-110:hover {
          transform: scale(1.1);
        }

        .group-hover\\:rotate-6:hover {
          transform: rotate(6deg) scale(1.1);
        }

        .group-hover\\:opacity-20:hover {
          opacity: 0.2;
        }

        .group-hover\\:scale-120:hover {
          transform: scale(1.2);
        }

        /* Desktop Large (1200px+) */
        @media (min-width: 1200px) {
          .benefits-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 2.5rem !important;
          }
          
          .benefits-title {
            font-size: 3rem !important;
          }
        }

        /* Desktop Medium (992px - 1199px) */
        @media (max-width: 1199px) {
          .benefits-grid {
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)) !important;
          }
        }

        /* Tablet Landscape (768px - 991px) */
        @media (max-width: 991px) {
          .benefits-section {
            padding: 4rem 0 !important;
          }
          
          .benefits-container {
            padding: 0 1.25rem !important;
          }
          
          .benefits-header {
            margin-bottom: 3rem !important;
          }
          
          .benefits-title {
            font-size: 2.25rem !important;
          }
          
          .benefits-grid {
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important;
            gap: 1.5rem !important;
          }
          
          .benefit-card-inner {
            padding: 1.75rem !important;
            min-height: 300px !important;
          }
        }

        /* Tablet Portrait (576px - 767px) */
        @media (max-width: 767px) {
          .benefits-section {
            padding: 3rem 0 !important;
          }
          
          .benefits-container {
            padding: 0 1rem !important;
          }
          
          .benefits-title {
            font-size: 2rem !important;
            margin-bottom: 0.75rem !important;
          }
          
          .benefits-grid {
            grid-template-columns: 1fr !important;
            gap: 1.25rem !important;
          }
          
          .benefit-card-inner {
            padding: 1.5rem !important;
            min-height: 280px !important;
          }
          
          .benefit-image-circle {
            width: 100px !important;
            height: 100px !important;
          }
          
          .benefit-image {
            width: 70px !important;
            height: 70px !important;
          }
          
          .benefit-title {
            font-size: 1.25rem !important;
          }
          
          .benefit-description {
            font-size: 0.95rem !important;
          }
        }

        /* Mobile Large (481px - 575px) */
        @media (max-width: 575px) {
          .benefits-section {
            padding: 2.5rem 0 !important;
          }
          
          .benefits-container {
            padding: 0 0.75rem !important;
          }
          
          .benefits-header {
            margin-bottom: 2rem !important;
          }
          
          .benefits-title {
            font-size: 1.75rem !important;
          }
          
          .benefit-card-inner {
            border-radius: 1.5rem !important;
            padding: 1.25rem !important;
            min-height: 260px !important;
          }
          
          .benefit-image-container {
            margin-bottom: 1rem !important;
          }
          
          .benefit-image-circle {
            width: 90px !important;
            height: 90px !important;
          }
          
          .benefit-image {
            width: 60px !important;
            height: 60px !important;
          }
        }

        /* Mobile Small (320px - 480px) */
        @media (max-width: 480px) {
          .benefits-section {
            padding: 2rem 0 !important;
          }
          
          .benefits-container {
            padding: 0 0.5rem !important;
          }
          
          .benefits-title {
            font-size: 1.5rem !important;
            line-height: 1.2 !important;
          }
          
          .benefit-card-inner {
            border-radius: 1.25rem !important;
            padding: 1rem !important;
            min-height: 240px !important;
          }
          
          .benefit-image-circle {
            width: 80px !important;
            height: 80px !important;
          }
          
          .benefit-image {
            width: 50px !important;
            height: 50px !important;
          }
          
          .benefit-title {
            font-size: 1.125rem !important;
            margin-bottom: 0.5rem !important;
          }
          
          .benefit-description {
            font-size: 0.875rem !important;
            padding: 0 !important;
          }
        }

        /* Extra Small Mobile (320px and below) */
        @media (max-width: 320px) {
          .benefits-title {
            font-size: 1.375rem !important;
          }
          
          .benefit-card-inner {
            padding: 0.875rem !important;
            min-height: 220px !important;
          }
          
          .benefit-image-circle {
            width: 70px !important;
            height: 70px !important;
          }
          
          .benefit-image {
            width: 45px !important;
            height: 45px !important;
          }
          
          .benefit-title {
            font-size: 1rem !important;
          }
          
          .benefit-description {
            font-size: 0.8rem !important;
            line-height: 1.4 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default BenefitsSection;