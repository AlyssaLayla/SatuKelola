"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ChevronRight,
} from "lucide-react";

export const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      id: 1,
      iconImage: "/service-1.png",
      title: "Komunitas UMKM",
      description:
        "Bergabung dengan komunitas UMKM terbesar di Indonesia untuk berbagi pengalaman dan tips bisnis",
      color: "#FEE480",
      href: "/komunitas",
      hasDarkBackground: true,
      hasYellowBackground: false,
    },
    {
      id: 2,
      iconImage: "/service-2.png",
      title: "Manajemen Keuangan",
      description:
        "Kelola keuangan bisnis dengan sistem yang terintegrasi dan laporan real-time",
      color: "#FDD741",
      href: "/dashboard",
      hasYellowBackground: true,
      hasDarkBackground: false,
    },
    {
      id: 3,
      iconImage: "/service-3.png",
      title: "Legalitas Usaha",
      description:
        "Urus dokumen legal bisnis dengan mudah, cepat, dan sesuai regulasi terbaru",
      color: "#20273A",
      href: "/legalitas",
      hasDarkBackground: true,
    },
    {
      id: 4,
      iconImage: "/service-4.png",
      title: "Konsultan Pemasaran",
      description:
        "Strategi pemasaran yang efektif dan teruji untuk meningkatkan penjualan bisnis",
      color: "#151A27",
      href: "/pemasaran",
      hasYellowBackground: true,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector(".services-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      const newScrollLeft =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition();

      return () => container.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);

  return (
    <section
      className="services-section"
      style={{
        paddingTop: "80px",
        paddingBottom: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          paddingLeft: "24px",
          paddingRight: "24px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Header yang sudah diperbaiki - sekarang center */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "3rem",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div
            style={{
              maxWidth: "800px",
              width: "100%",
            }}
          >
            <h2
              style={{
                fontSize: "3rem",
                fontWeight: "900",
                marginTop: "12px",
                marginBottom: "24px",
                lineHeight: "1.1",
                letterSpacing: "-0.03em",
                textAlign: "center",
              }}
            >
              <span style={{ color: "#20273A" }}>Cari Tahu Layanan Kami!</span>
            </h2>
            <p
              style={{
                fontSize: "1.5rem",
                color: "#555555",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: "1.7",
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              Kami hadir dengan 4 layanan utama yang dirancang untuk membantu
              bisnismu berkembang lebih mudah dalam satu platform praktis
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "stretch",
            gap: "24px",
            flexWrap: "wrap",
            paddingBottom: "40px",
            paddingTop: "40px",
            paddingLeft: "20px",
            paddingRight: "20px",
            marginTop: "-20px",
            marginBottom: "-20px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(50px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s",
          }}
        >
          {services.map((service, index) => {
            return (
              <div
                key={service.id}
                style={{
                  minWidth: "300px",
                  width: "300px",
                  maxWidth: "300px",
                  minHeight: "280px",
                  background: service.hasYellowBackground
                    ? "#FDD741"
                    : service.hasDarkBackground
                    ? "#20273A"
                    : "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "24px",
                  border: service.hasYellowBackground
                    ? "1px solid rgba(253, 215, 65, 0.3)"
                    : service.hasDarkBackground
                    ? "1px solid rgba(32, 39, 58, 0.3)"
                    : "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: service.hasYellowBackground
                    ? "0 2px 8px rgba(253, 215, 65, 0.2)"
                    : service.hasDarkBackground
                    ? "0 2px 8px rgba(32, 39, 58, 0.2)"
                    : "0 2px 8px rgba(0, 0, 0, 0.04)",
                  padding: "2rem",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  transformOrigin: "center center",
                  overflow: "visible",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transitionDelay: `${0.4 + index * 0.1}s`,
                  display: "flex",
                  flexDirection: "column",
                  willChange: "transform",
                }}
                onClick={() => (window.location.href = service.href)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-6px) scale(1.03) rotate(1deg)";
                  e.currentTarget.style.boxShadow = service.hasYellowBackground
                    ? `0 6px 20px rgba(253, 215, 65, 0.3)`
                    : service.hasDarkBackground
                    ? `0 6px 20px rgba(32, 39, 58, 0.3)`
                    : `0 6px 20px rgba(0, 0, 0, 0.08)`;
                  e.currentTarget.style.borderColor =
                    service.hasYellowBackground
                      ? `rgba(253, 215, 65, 0.5)`
                      : service.hasDarkBackground
                      ? `rgba(32, 39, 58, 0.5)`
                      : `${service.color}50`;

                  const innerGlow = e.currentTarget.querySelector(
                    `.inner-glow-${service.id}`
                  ) as HTMLElement;
                  if (innerGlow) {
                    innerGlow.style.opacity = "1";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(0) scale(1) rotate(0deg)";
                  e.currentTarget.style.boxShadow = service.hasYellowBackground
                    ? "0 2px 8px rgba(253, 215, 65, 0.2)"
                    : service.hasDarkBackground
                    ? "0 2px 8px rgba(32, 39, 58, 0.2)"
                    : "0 2px 8px rgba(0, 0, 0, 0.04)";
                  e.currentTarget.style.borderColor =
                    service.hasYellowBackground
                      ? "rgba(253, 215, 65, 0.3)"
                      : service.hasDarkBackground
                      ? "rgba(32, 39, 58, 0.3)"
                      : "rgba(255, 255, 255, 0.2)";

                  const innerGlow = e.currentTarget.querySelector(
                    `.inner-glow-${service.id}`
                  ) as HTMLElement;
                  if (innerGlow) {
                    innerGlow.style.opacity = "0";
                  }
                }}
              >
                {/* Decorative gradient circles */}
                <div
                  style={{
                    position: "absolute",
                    top: "-40px",
                    right: "-40px",
                    width: "140px",
                    height: "140px",
                    background: service.hasYellowBackground
                      ? `radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent 70%)`
                      : service.hasDarkBackground
                      ? `radial-gradient(circle, rgba(255, 255, 255, 0.08), transparent 70%)`
                      : `radial-gradient(circle, ${service.color}15, transparent 70%)`,
                    borderRadius: "50%",
                    pointerEvents: "none",
                    transition: "all 0.5s ease",
                  }}
                />

                <div
                  className={`inner-glow-${service.id}`}
                  style={{
                    position: "absolute",
                    inset: "0",
                    borderRadius: "24px",
                    background: service.hasYellowBackground
                      ? `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.08), transparent 50%)`
                      : service.hasDarkBackground
                      ? `radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05), transparent 50%)`
                      : `radial-gradient(circle at 50% 50%, ${service.color}08, transparent 50%)`,
                    opacity: "0",
                    transition: "opacity 0.4s ease",
                    pointerEvents: "none",
                  }}
                />

                {/* Icon dan Title bersebelahan */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1.5rem",
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  {/* Icon Container */}
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "16px",
                      background: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      border: "1px solid rgba(0, 0, 0, 0.05)",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={service.iconImage}
                      alt={`${service.title} Icon`}
                      style={{
                        width: "32px",
                        height: "32px",
                        objectFit: "contain",
                        filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      color: service.hasDarkBackground
                        ? "#ffffff"
                        : service.hasYellowBackground
                        ? "#20273A"
                        : "#111827",
                      lineHeight: "1.3",
                      letterSpacing: "-0.01em",
                      margin: "0",
                      flex: "1",
                      wordWrap: "break-word",
                      hyphens: "auto",
                    }}
                  >
                    {service.title}
                  </h3>
                </div>

                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    flex: "1",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1.15rem",
                      color: service.hasDarkBackground
                        ? "rgba(255, 255, 255, 0.9)"
                        : service.hasYellowBackground
                        ? "#20273A"
                        : "#64748b",
                      lineHeight: "1.6",
                      marginBottom: "1.5rem",
                      fontWeight: "400",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {service.description}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: service.hasDarkBackground
                        ? "#ffffff"
                        : service.hasYellowBackground
                        ? "#20273A"
                        : service.color,
                      fontSize: "1rem",
                      fontWeight: "700",
                    }}
                  >
                    <span>Pelajari lebih lanjut</span>
                    <ChevronRight
                      size={16}
                      style={{
                        transition: "transform 0.3s ease",
                      }}
                      className="service-arrow"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "-10%",
            width: "25rem",
            height: "25rem",
            background:
              "linear-gradient(135deg, rgba(253, 215, 65, 0.1), rgba(196, 167, 59, 0.05))",
            borderRadius: "50%",
            filter: "blur(3rem)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            right: "-15%",
            width: "30rem",
            height: "30rem",
            background:
              "linear-gradient(135deg, rgba(32, 39, 58, 0.05), rgba(144, 147, 157, 0.03))",
            borderRadius: "50%",
            filter: "blur(4rem)",
          }}
        />
      </div>

      <style jsx>{`
        .services-section .service-arrow {
          transition: transform 0.3s ease;
        }

        .services-section div:hover .service-arrow {
          transform: translateX(2px);
        }

        @media (max-width: 1400px) {
          .services-section div[style*="justifyContent: \"center\""] {
            justify-content: flex-start !important;
            overflow-x: auto !important;
            flex-wrap: nowrap !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
          
          .services-section div[style*="justifyContent: \"center\""] > div {
            flex-shrink: 0 !important;
          }
        }

        @media (max-width: 1024px) {
          .services-section h2 {
            font-size: 2.5rem !important;
          }

          .services-section p {
            font-size: 1.125rem !important;
          }

          .services-section div[style*='minWidth: "300px"'] {
            min-width: 300px !important;
            width: 300px !important;
          }
        }

        @media (max-width: 768px) {
          .services-section h2 {
            font-size: 2.2rem !important;
            text-align: center !important;
          }

          .services-section p {
            text-align: center !important;
            font-size: 1.125rem !important;
          }

          .services-section div[style*='minWidth: "300px"'] {
            min-width: 280px !important;
            width: 280px !important;
            padding: 1.5rem !important;
            min-height: 260px !important;
          }

          .services-section div[style*='width: "60px"'] {
            width: 50px !important;
            height: 50px !important;
          }

          .services-section div[style*='width: "60px"'] img {
            width: 28px !important;
            height: 28px !important;
          }

          .services-section h3 {
            font-size: 1.125rem !important;
          }
        }

        @media (max-width: 640px) {
          .services-section h2 {
            font-size: 2rem !important;
            text-align: center !important;
          }

          .services-section p {
            text-align: center !important;
          }

          .services-section div[style*='minWidth: "300px"'] {
            min-width: 260px !important;
            width: 260px !important;
            padding: 1.25rem !important;
            min-height: 240px !important;
          }

          .services-section div[style*='width: "60px"'] {
            width: 45px !important;
            height: 45px !important;
          }

          .services-section div[style*='width: "60px"'] img {
            width: 24px !important;
            height: 24px !important;
          }

          .services-section h3 {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;