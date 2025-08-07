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
        backgroundColor: "#f8fafc",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
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
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
            margin: "0 auto",
          }}
        >
          {benefits.map((benefit, index) => (
            <div
              key={benefit.id}
              className={`benefit-card group cursor-pointer transform transition-all duration-700 ${
                visibleCards.includes(index)
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
                  padding: "40px 32px",
                  height: "100%",
                  boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.12)",
                  transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
                className="hover:shadow-2xl hover:-translate-y-4 hover:scale-[1.02]"
              >
                {/* Image Container */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "40px",
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
                      }}
                    >
                      <img
                        src={benefit.image}
                        alt={benefit.title}
                        style={{
                          width: "100px",
                          height: "100px",
                          objectFit: "contain",
                          filter: "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.1))",
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
                      fontSize: "1.875rem",
                      fontWeight: "600",
                      color: "#000",
                      marginBottom: "20px",
                      lineHeight: "1.2",
                      transition: "color 0.3s ease",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    style={{
                      color: "#374151",
                      fontSize: "1.125rem",
                      lineHeight: "1.7",
                      padding: "0 16px",
                      transition: "color 0.3s ease",
                      fontWeight: "400",
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
                    width: "80px",
                    height: "80px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "50%",
                    transition: "opacity 0.3s ease",
                  }}
                  className="group-hover:opacity-20"
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;