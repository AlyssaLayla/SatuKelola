"use client";

import React, { useState, useEffect } from "react";

interface LoadingWrapperProps {
  children: React.ReactNode;
}

const LoadingScreen = ({
  isLoading,
  onLoadingComplete,
}: {
  isLoading: boolean;
  onLoadingComplete?: () => void;
}) => {
  const [progress, setProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!isLoading) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete?.(), 500);
          return 100;
        }
        return prev + Math.random() * 8 + 2;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [isLoading, onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <div
      className="loading-screen"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#ffffff",
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
            "radial-gradient(circle, rgba(253, 215, 65, 0.6), transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          transition: "all 0.1s ease-out",
          zIndex: 1,
        }}
      />

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

      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ marginBottom: "3rem" }}>
          <div
            style={{
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="/logo.png"
              alt="Logo"
              style={{
                width: "auto",
                height: "120px",
                maxWidth: "200px",
                objectFit: "contain",
                display: "block",
              }}
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = "none";
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = "flex";
              }}
            />

            <div
              style={{
                display: "none",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "200px",
                height: "120px",
                color: "#64748b",
                fontSize: "0.875rem",
                textAlign: "center",
                fontFamily: "var(--font-inter)",
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  background: "linear-gradient(135deg, #FDD741, #FEE480)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                    stroke="#20273A"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span style={{ fontSize: "0.875rem", fontWeight: "500" }}>
                Logo
              </span>
            </div>
          </div>

          <p
            style={{
              fontSize: "1.125rem",
              color: "#64748b",
              fontWeight: "500",
              marginBottom: "0",
              fontFamily: "var(--font-inter)",
            }}
          >
            Satu Solusi Untuk Bisnis Hebatmu
          </p>
        </div>

        <div style={{ width: "320px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem",
              fontFamily: "var(--font-inter)",
            }}
          >
            <span
              style={{
                fontSize: "0.875rem",
                color: "#64748b",
                fontWeight: "500",
              }}
            >
              Loading...
            </span>
            <span
              style={{
                fontSize: "0.875rem",
                color: "#20273A",
                fontWeight: "700",
              }}
            >
              {Math.round(Math.min(progress, 100))}%
            </span>
          </div>

          <div
            style={{
              width: "100%",
              height: "8px",
              background: "rgba(229, 231, 235, 1)",
              borderRadius: "50px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                background:
                  progress > 80
                    ? "linear-gradient(90deg, #20273A 0%, #FDD741 100%)"
                    : "#20273A",
                borderRadius: "50px",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                width: `${Math.min(progress, 100)}%`,
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                  animation: "shimmer 2s infinite",
                }}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginTop: "2rem",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              background: "#FDD741",
              borderRadius: "50%",
              animation: "bounce 1.4s ease-in-out infinite both",
            }}
          />
          <div
            style={{
              width: "8px",
              height: "8px",
              background: "#FDD741",
              borderRadius: "50%",
              animation: "bounce 1.4s ease-in-out infinite both",
              animationDelay: "0.16s",
            }}
          />
          <div
            style={{
              width: "8px",
              height: "8px",
              background: "#FDD741",
              borderRadius: "50%",
              animation: "bounce 1.4s ease-in-out infinite both",
              animationDelay: "0.32s",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes bounce {
          0%,
          80%,
          100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .loading-screen div[style*="width: 320px"] {
            width: 280px !important;
          }

          .loading-screen img {
            height: 100px !important;
            max-width: 180px !important;
          }
        }

        @media (max-width: 640px) {
          .loading-screen div[style*="width: 320px"] {
            width: 260px !important;
          }

          .loading-screen img {
            height: 80px !important;
            max-width: 160px !important;
          }
        }
      `}</style>
    </div>
  );
};

const LoadingWrapper: React.FC<LoadingWrapperProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const minLoadTime = 2000;
    const startTime = Date.now();

    const handleLoad = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadTime - elapsedTime);

      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!isClient) {
    return <>{children}</>;
  }

  return (
    <>
      <LoadingScreen
        isLoading={isLoading}
        onLoadingComplete={() => setIsLoading(false)}
      />

      <div
        className={`main-content`}
        style={{
          opacity: isLoading ? 0 : 1,
          visibility: isLoading ? "hidden" : "visible",
          transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: isLoading
            ? "translateY(20px) scale(0.98)"
            : "translateY(0) scale(1)",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default LoadingWrapper;
