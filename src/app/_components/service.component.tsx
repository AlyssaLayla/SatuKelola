"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Users,
  TrendingUp,
  Scale,
  Lightbulb,
  ChevronLeft,
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
      icon: Users,
      title: "Komunitas UMKM",
      description:
        "Bergabung dengan komunitas UMKM terbesar di Indonesia untuk berbagi pengalaman dan tips bisnis",
      color: "#FEE480",
      href: "/komunitas",
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Manajemen Keuangan",
      description:
        "Kelola keuangan bisnis dengan sistem yang terintegrasi dan laporan real-time",
      color: "#FDD741",
      href: "/dashboard",
    },
    {
      id: 3,
      icon: Scale,
      title: "Legalitas Usaha",
      description:
        "Urus dokumen legal bisnis dengan mudah, cepat, dan sesuai regulasi terbaru",
      color: "#20273A",
      href: "/legalitas",
    },
    {
      id: 4,
      icon: Lightbulb,
      title: "Konsultan Pemasaran",
      description:
        "Strategi pemasaran yang efektif dan teruji untuk meningkatkan penjualan bisnis",
      color: "#151A27",
      href: "/pemasaran",
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3rem",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div style={{ flex: 1 }}>
            <h2
              style={{
                fontSize: "3rem",
                fontWeight: "900",
                marginBottom: "20px",
                lineHeight: "1.1",
                letterSpacing: "-0.03em",
              }}
            >
              <span style={{ color: "#20273A" }}>
                Cari Tahu <br />
                Layanan Kami!
              </span>
            </h2>
            <p
              style={{
                fontSize: "1.25rem",
                color: "#64748b",
                maxWidth: "600px",
                lineHeight: "1.7",
                fontWeight: "400",
              }}
            >
              Kami hadir dengan 4 layanan utama yang dirancang untuk membantu
              bisnismu berkembang lebih mudah dalam satu platform praktis
            </p>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          style={{
            display: "flex",
            gap: "24px",
            overflowX: "auto",
            overflowY: "visible",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            paddingBottom: "20px",
            paddingTop: "20px",
            marginTop: "-20px",
            marginBottom: "-20px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(50px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s",
          }}
          onScroll={checkScrollPosition}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;

            return (
              <div
                key={service.id}
                style={{
                  minWidth: "320px",
                  width: "320px",
                  background: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "24px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                  padding: "2rem",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  transformOrigin: "center center",
                  overflow: "hidden",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  transitionDelay: `${0.4 + index * 0.1}s`,
                }}
                onClick={() => (window.location.href = service.href)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-6px) scale(1.03) rotate(1deg)";
                  e.currentTarget.style.boxShadow = `0 6px 20px rgba(0, 0, 0, 0.08)`;
                  e.currentTarget.style.borderColor = `${service.color}50`;

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
                  e.currentTarget.style.boxShadow =
                    "0 2px 8px rgba(0, 0, 0, 0.04)";
                  e.currentTarget.style.borderColor =
                    "rgba(255, 255, 255, 0.2)";

                  const innerGlow = e.currentTarget.querySelector(
                    `.inner-glow-${service.id}`
                  ) as HTMLElement;
                  if (innerGlow) {
                    innerGlow.style.opacity = "0";
                  }
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-40px",
                    right: "-40px",
                    width: "140px",
                    height: "140px",
                    background: `radial-gradient(circle, ${service.color}15, transparent 70%)`,
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
                    background: `radial-gradient(circle at 50% 50%, ${service.color}08, transparent 50%)`,
                    opacity: "0",
                    transition: "opacity 0.4s ease",
                    pointerEvents: "none",
                  }}
                />

                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "20px",
                    background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                    boxShadow: `0 4px 12px ${service.color}30`,
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <IconComponent
                    size={40}
                    style={{
                      color:
                        service.color === "#FDD741" ||
                        service.color === "#FEE480"
                          ? "#111827"
                          : "#ffffff",
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                    }}
                  />
                </div>

                <div style={{ position: "relative", zIndex: 2 }}>
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      color: "#111827",
                      marginBottom: "0.75rem",
                      lineHeight: "1.3",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "1rem",
                      color: "#64748b",
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
                      color: service.color,
                      fontSize: "0.875rem",
                      fontWeight: "600",
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
        /* Enhanced hover effects */

        .services-section .service-arrow {
          transition: transform 0.3s ease;
        }

        .services-section div:hover .service-arrow {
          transform: translateX(2px);
        }

        /* Hide scrollbar */
        .services-section div[style*="overflow-x: auto"]::-webkit-scrollbar {
          display: none;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .services-section h2 {
            font-size: 2.5rem !important;
          }

          .services-section p {
            font-size: 1.125rem !important;
          }

          .services-section div[style*='minWidth: "320px"'] {
            min-width: 300px !important;
            width: 300px !important;
          }
        }

        @media (max-width: 768px) {
          .services-section
            div[style*="display: flex"][style*="justify-content: space-between"] {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1.5rem !important;
          }

          .services-section div[style*="display: flex"][style*='gap: "12px"'] {
            margin-left: 0 !important;
          }

          .services-section h2 {
            font-size: 2.2rem !important;
          }

          .services-section div[style*='minWidth: "320px"'] {
            min-width: 280px !important;
            width: 280px !important;
            padding: 1.5rem !important;
          }

          .services-section div[style*='width: "80px"'] {
            width: 70px !important;
            height: 70px !important;
          }

          .services-section div[style*='width: "80px"'] svg {
            width: 36px !important;
            height: 36px !important;
          }
        }

        @media (max-width: 640px) {
          .services-section h2 {
            font-size: 2rem !important;
          }

          .services-section div[style*='minWidth: "320px"'] {
            min-width: 260px !important;
            width: 260px !important;
            padding: 1.25rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
