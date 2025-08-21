import React, { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

export const LandingHeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);

  const fullText = "Satu Solusi Untuk Bisnis Hebatmu";

  const scrollToServices = () => {
    const servicesSection = document.querySelector(".services-section");
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  useEffect(() => {
  const initialDelay = setTimeout(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, 1850);

  return () => clearTimeout(initialDelay);
}, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsImageVisible(true);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const imageContainer = document.querySelector(".hero-image-container");
    if (imageContainer) {
      observer.observe(imageContainer);
    }

    return () => {
      if (imageContainer) {
        observer.unobserve(imageContainer);
      }
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      const rect = document
        .querySelector(".hero-section")
        ?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const heroSection = document.querySelector(".hero-section");
    if (heroSection) {
      heroSection.addEventListener("mousemove", handleMouseMove);
      return () =>
        heroSection.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  return (
    <section
      className="hero-section"
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #ffffff 0%, #ffffff 30%, #fefce8 100%)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "40px",
        paddingBottom: "20px",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: mousePosition.x - 50,
          top: mousePosition.y - 50,
          width: "100px",
          height: "100px",
          background:
            "radial-gradient(circle, rgba(253, 215, 65, 0.80), transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          transition: "all 0.1s ease-out",
          zIndex: 1,
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          zIndex: 2,
        }}
      >
        <div
          style={{
            marginBottom: "1rem",
            position: "relative",
            overflow: "hidden",
            maxWidth: "900px",
            width: "100%",
          }}
        >
          <div style={{ position: "relative", zIndex: 2 }}>
            <h1
              style={{
                fontSize: "4rem",
                fontWeight: "900",
                lineHeight: "0.9",
                letterSpacing: "-0.05em",
                color: "#111827",
                minHeight: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  color: "#FFB700",
                }}
              >
                {displayText.split(" ").slice(0, 2).join(" ")}
              </span>
              {displayText.split(" ").length > 2 && (
                <span style={{ color: "#20273A" }}>
                  {displayText.split(" ").slice(2).join(" ")}
                  {displayText.length < fullText.length && (
                    <span
                      style={{
                        opacity: 0.7,
                        animation: "blink 1s infinite",
                        marginLeft: "2px",
                      }}
                    >
                      |
                    </span>
                  )}
                </span>
              )}
            </h1>

            <p
              style={{
                fontSize: "1.5rem",
                color: "#555555",
                lineHeight: "1.7",
                marginBottom: "0.5rem",
                fontWeight: "400",
                maxWidth: "600px",
                margin: "0 auto 1.5rem auto",
              }}
            >
              Dukung bisnismu dengan layanan lengkap,{" "}
              <span style={{ fontWeight: "700" }}>
                <span style={{ color: "#FFB700" }}>Satu</span>
                <span style={{ color: "#20273A" }}>Kelola</span>
              </span>
              .
            </p>

            <div style={{ position: "relative" }}>
              <button
                className="hero-cta-button"
                onClick={scrollToServices}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "1rem 2rem",
                  background: "#FDD741",
                  color: "#111827",
                  fontWeight: "700",
                  borderRadius: "20px",
                  border: "2px solid rgba(255, 255, 255, 0.9)",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  letterSpacing: "0.025em",
                  fontSize: "1rem",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-3px) scale(1.02)";
                  setIsHovered(true);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  setIsHovered(false);
                }}
              >
                <span>Jelajahi Selengkapnya</span>
              </button>
            </div>
          </div>
        </div>

        <div
          className="hero-image-container"
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: isImageVisible ? 1 : 0,
            transform: isImageVisible ? "translateY(0)" : "translateY(50px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "500px",
              height: "500px",
              background: "linear-gradient(135deg, #FDD741, #FEE480)",
              borderRadius: "50%",
              zIndex: -1,
              animation: "pulse 4s ease-in-out infinite",
              boxShadow: "0 20px 60px -15px rgba(253, 215, 65, 0.4)",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 2,
              animation: "float 6s ease-in-out infinite",
            }}
          >
            <img
              src="/hero.png"
              alt="Hero Illustration - Business Team"
              style={{
                width: "600px",
                height: "600px",
                objectFit: "contain",
                filter: "drop-shadow(0 30px 60px rgba(0, 0, 0, 0.15))",
                display: "block",
              }}
            />
          </div>

          <div
            className="floating-element-1"
            style={{
              position: "absolute",
              top: "15%",
              left: "15%",
              width: "80px",
              height: "80px",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "bounceSubtle 3s ease-in-out infinite",
              animationDelay: "0.5s",
              zIndex: 3,
            }}
          >
            <span
              style={{
                fontSize: "2rem",
                filter: "brightness(1.2)",
              }}
            >
              📊
            </span>
          </div>

          <div
            className="floating-element-2"
            style={{
              position: "absolute",
              top: "25%",
              right: "15%",
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "bounceSubtle 3.5s ease-in-out infinite",
              animationDelay: "1s",
              zIndex: 3,
            }}
          >
            <span
              style={{
                fontSize: "1.75rem",
                filter: "brightness(1.1)",
              }}
            >
              💼
            </span>
          </div>

          <div
            className="floating-element-3"
            style={{
              position: "absolute",
              bottom: "15%",
              left: "25%",
              width: "60px",
              height: "60px",
              borderRadius: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "bounceSubtle 4s ease-in-out infinite",
              animationDelay: "1.5s",
              zIndex: 3,
            }}
          >
            <span
              style={{
                fontSize: "1.5rem",
                filter: "brightness(1.3)",
              }}
            >
              ⚖️
            </span>
          </div>

          <div
            className="floating-element-4"
            style={{
              position: "absolute",
              bottom: "30%",
              right: "20%",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              animation: "bounceSubtle 3.2s ease-in-out infinite",
              animationDelay: "2s",
              zIndex: 3,
            }}
          >
            <span
              style={{
                fontSize: "1.25rem",
                filter: "brightness(0.9)",
              }}
            >
              🚀
            </span>
          </div>
        </div>
      </div>

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
            left: "-10rem",
            width: "30rem",
            height: "30rem",
            background:
              "linear-gradient(135deg, rgba(253, 215, 65, 0.1), rgba(196, 167, 59, 0.05))",
            borderRadius: "50%",
            opacity: 0.7,
            filter: "blur(4rem)",
            animation: "float 6s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-15rem",
            right: "-15rem",
            width: "35rem",
            height: "35rem",
            background:
              "linear-gradient(135deg, rgba(32, 39, 58, 0.08), rgba(144, 147, 157, 0.05))",
            borderRadius: "50%",
            opacity: 0.6,
            filter: "blur(5rem)",
            animation: "float 8s ease-in-out infinite reverse",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes bounceSubtle {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.05);
            opacity: 0.9;
          }
        }

        /* Responsive Design */
        @media (max-width: 1440px) {
          .hero-image-container img {
            width: 550px !important;
            height: 550px !important;
          }
          .hero-image-container > div:first-child {
            width: 450px !important;
            height: 450px !important;
          }
        }

        @media (max-width: 1280px) {
          .hero-image-container img {
            width: 500px !important;
            height: 500px !important;
          }
          .hero-image-container > div:first-child {
            width: 400px !important;
            height: 400px !important;
          }
        }

        @media (max-width: 1024px) {
          .hero-section h1 {
            font-size: 3rem !important;
            min-height: 120px !important;
          }

          .hero-image-container img {
            width: 450px !important;
            height: 450px !important;
          }

          .hero-image-container > div:first-child {
            width: 350px !important;
            height: 350px !important;
          }
        }

        @media (max-width: 768px) {
          .hero-section > div {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }

          .hero-section h1 {
            font-size: 2.5rem !important;
            min-height: 100px !important;
          }

          .hero-section p {
            font-size: 1.1rem !important;
          }

          .hero-image-container img {
            width: 350px !important;
            height: 350px !important;
          }

          .hero-image-container > div:first-child {
            width: 280px !important;
            height: 280px !important;
          }

          /* Scale down floating elements */
          .floating-element-1 {
            width: 60px !important;
            height: 60px !important;
          }

          .floating-element-2 {
            width: 50px !important;
            height: 50px !important;
          }

          .floating-element-3 {
            width: 45px !important;
            height: 45px !important;
          }

          .floating-element-4 {
            width: 40px !important;
            height: 40px !important;
          }
        }

        @media (max-width: 640px) {
          .hero-section h1 {
            font-size: 2.2rem !important;
            min-height: 90px !important;
          }

          .hero-cta-button {
            padding: 1.25rem 2rem !important;
            font-size: 1.125rem !important;
          }

          .hero-image-container {
            margin-top: 1rem !important;
          }

          .hero-image-container img {
            width: 280px !important;
            height: 280px !important;
          }

          .hero-image-container > div:first-child {
            width: 220px !important;
            height: 220px !important;
          }

          /* Hide some floating elements on mobile */
          .floating-element-3,
          .floating-element-4 {
            display: none !important;
          }
        }

        @media (max-width: 480px) {
          .hero-section h1 {
            font-size: 2rem !important;
            min-height: 80px !important;
          }

          .hero-image-container img {
            width: 250px !important;
            height: 250px !important;
          }

          .hero-image-container > div:first-child {
            width: 200px !important;
            height: 200px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default LandingHeroSection;