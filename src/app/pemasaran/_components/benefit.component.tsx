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
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <h2
            style={{
              fontSize: "2.75rem",
              fontWeight: "700",
              color: "#000",
              marginBottom: "20px",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
            }}
          >
            Apa Yang Kamu Dapatkan?
          </h2>
        </div>

        {/* Benefits Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
            gap: "32px",
            padding: "0 20px",
          }}
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
                    borderRadius: "32px",
                    padding: "2.5rem",
                    height: "100%",
                    boxShadow: "0 4px 15px -3px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden",
                    border: "1px solid #f1f5f9",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                    e.currentTarget.style.boxShadow = "0 10px 30px -5px rgba(0, 0, 0, 0.12), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "0 4px 15px -3px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)";
                  }}
                >
                  {/* Image Container */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "2rem",
                    }}
                  >
                    <div style={{ position: "relative" }}>
                      <div
                        style={{
                          width: "140px",
                          height: "140px",
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "8px",
                          boxShadow: "0 4px 15px -4px rgba(0, 0, 0, 0.15)",
                          transition: "transform 0.3s ease",
                        }}
                      >
                        <img
                          src={benefit.image}
                          alt={benefit.title}
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "contain",
                            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                            transition: "transform 0.6s ease",
                          }}
                          className="group-hover:scale-110 group-hover:rotate-6"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ textAlign: "center" }}>
                    <h3
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        color: "#111827",
                        marginBottom: "0.75rem",
                        lineHeight: "1.3",
                        transition: "color 0.3s ease",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {benefit.title}
                    </h3>
                    <p
                      style={{
                        color: "#64748b",
                        fontSize: "18px",
                        lineHeight: "1.6",
                        padding: "0 16px",
                        transition: "color 0.3s ease",
                        fontWeight: "400",
                        margin: 0,
                      }}
                    >
                      {benefit.description}
                    </p>
                  </div>

                  {/* Background decoration */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-20px",
                      right: "-20px",
                      width: "100px",
                      height: "100px",
                      background: "linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))",
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

      {/* Custom Animations */}
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

        @media (max-width: 768px) {
          .benefit-card {
            min-width: 320px !important;
          }
        }

        @media (max-width: 480px) {
          .benefit-card {
            min-width: 280px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default BenefitsSection;