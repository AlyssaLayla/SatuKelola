"use client";

import { useState } from "react";
import Image from "next/image";
import LoginForm from "./_components/login.component";
import RegisterForm from "./_components/register.component";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTransition = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setIsLogin(!isLogin);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 400);
    }, 800);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className={`absolute left-0 top-0 bottom-0 z-50 transition-all ease-in-out duration-700 w-full lg:w-1/2 ${
          isTransitioning ? "translate-y-0" : "translate-y-full"
        }`}
        style={{
          backgroundColor: "#20273A",
        }}
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center px-4 sm:px-8">
            <h3
              className={`text-xl sm:text-2xl lg:text-3xl font-bold transition-all duration-500 ${
                isTransitioning
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                color: "white",
                marginBottom: "16px",
              }}
            >
              Memulai pengalaman yang lebih baik...
            </h3>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: "5rem",
            left: "5rem",
            width: "1rem",
            height: "1rem",
            backgroundColor: "#FDD741",
            borderRadius: "50%",
            opacity: 0.3,
            animation: "bounce 2s infinite",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "8rem",
            left: "4rem",
            width: "1.5rem",
            height: "1.5rem",
            backgroundColor: "#FDD741",
            borderRadius: "50%",
            opacity: 0.2,
            animation: "bounce 2s infinite",
            animationDelay: "1s",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "2.5rem",
            width: "0.75rem",
            height: "0.75rem",
            backgroundColor: "#FDD741",
            borderRadius: "50%",
            opacity: 0.4,
            animation: "bounce 2s infinite",
            animationDelay: "0.5s",
          }}
        ></div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          minHeight: "100vh",
          position: "relative",
          zIndex: 10,
        }}
        className="auth-container"
      >
        <div
          style={{
            flex: 1,
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ffffff",
            position: "relative",
            zIndex: 10,
          }}
          className="form-section"
        >
          <div
            style={{
              width: "100%",
              maxWidth: "32rem",
              padding: "2rem",
            }}
            className="form-container"
          >
            <div style={{ position: "relative" }}>
              <div
                style={{
                  transition: "all 0.5s ease",
                  opacity: isLogin ? 1 : 0,
                  position: isLogin ? "relative" : "absolute",
                  inset: isLogin ? "auto" : 0,
                  pointerEvents: isLogin ? "auto" : "none",
                }}
              >
                <LoginForm />
              </div>

              <div
                style={{
                  transition: "all 0.5s ease",
                  opacity: !isLogin ? 1 : 0,
                  position: !isLogin ? "relative" : "absolute",
                  inset: !isLogin ? "auto" : 0,
                  pointerEvents: !isLogin ? "auto" : "none",
                }}
              >
                <RegisterForm />
              </div>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <div
                style={{
                  backgroundColor: "#111827",
                  color: "#ffffff",
                  padding: "1.5rem",
                  borderRadius: "20px",
                  boxShadow: "0 6px 5px -8px rgba(0, 0, 0, 0.15)",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "1rem",
                    marginBottom: "0.75rem",
                    color: "#ffffff",
                    fontWeight: "500",
                  }}
                >
                  {isLogin ? "Belum memiliki akun?" : "Sudah memiliki akun?"}
                </p>
                <button
                  onClick={handleTransition}
                  disabled={isTransitioning}
                  style={{
                    width: "100%",
                    transition: "all 0.3s ease",
                    backgroundColor: "#FDD741",
                    color: "#111827",
                    border: "none",
                    borderRadius: "20px",
                    padding: "0.75rem 1.5rem",
                    fontSize: "1rem",
                    fontWeight: "600",
                    cursor: isTransitioning ? "not-allowed" : "pointer",
                    opacity: isTransitioning ? 0.5 : 1,
                    transform: isTransitioning ? "scale(0.98)" : "scale(1)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isTransitioning) {
                      e.currentTarget.style.backgroundColor = "#C4A73B";
                      e.currentTarget.style.transform = "scale(1.02)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isTransitioning) {
                      e.currentTarget.style.backgroundColor = "#FDD741";
                      e.currentTarget.style.transform = "scale(1)";
                    }
                  }}
                >
                  {isLogin ? "Daftar di sini" : "Masuk di sini"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#FDD741",
          }}
          className="illustration-section"
        >
          <div style={{ position: "absolute", inset: 0 }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(196, 167, 59, 0.1), rgba(253, 215, 65, 0.2))",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.1,
                backgroundImage:
                  "radial-gradient(circle, #111827 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            ></div>
          </div>

          <div
            style={{
              position: "relative",
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "3rem",
              padding: "2rem",
              height: "100%",
            }}
          >
            <div
              style={{
                transform: "scale(1)",
                transition: "all 0.5s ease",
              }}
              className="shopping-illustration"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05) rotate(1deg)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1) rotate(0deg)";
              }}
            >
              <div style={{ position: "relative" }}>
                <Image
                  src="/img/logo-shopping.png"
                  alt="Shopping Illustration"
                  width={400}
                  height={400}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "400px",
                    minWidth: "300px",
                    objectFit: "contain",
                    borderRadius: "12px",
                    filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.1))",
                    transition: "all 0.3s ease",
                  }}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const fallback = target.parentElement?.querySelector(
                      ".fallback-shopping"
                    ) as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />

                <div
                  className="fallback-shopping"
                  style={{
                    display: "none",
                    width: "400px",
                    height: "300px",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    borderRadius: "12px",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px dashed rgba(255, 255, 255, 0.3)",
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      color: "rgba(255, 255, 255, 0.7)",
                    }}
                  >
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 1rem",
                      }}
                    >
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </div>
                    <p style={{ fontSize: "0.875rem", margin: 0 }}>
                      Shopping Illustration
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    position: "absolute",
                    inset: "-1rem",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    borderRadius: "1rem",
                    animation: "pulse 4s infinite",
                  }}
                ></div>
              </div>
            </div>

            <div
              style={{
                transform: "scale(1)",
                transition: "all 0.3s ease",
              }}
              className="logo-container"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <Image
                src="/img/logo-light.png"
                alt="Satu Kelola Logo"
                width={350}
                height={150}
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "350px",
                  minWidth: "250px",
                  objectFit: "contain",
                  filter: "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1))",
                  transition: "all 0.3s ease",
                }}
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const fallback = target.parentElement?.querySelector(
                    ".fallback-logo"
                  ) as HTMLElement;
                  if (fallback) fallback.style.display = "flex";
                }}
              />

              <div
                className="fallback-logo"
                style={{
                  display: "none",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1rem",
                  padding: "2rem",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "16px",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "#111827",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "900",
                    fontSize: "1.5rem",
                    color: "#FDD741",
                  }}
                >
                  SK
                </div>
                <div>
                  <span
                    style={{
                      fontSize: "2rem",
                      fontWeight: "800",
                      color: "#111827",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Satu<span style={{ color: "#111827" }}>Kelola</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "5rem",
          left: "5rem",
          width: "0.75rem",
          height: "0.75rem",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderRadius: "50%",
          animation: "bounce 2s infinite",
          zIndex: 1,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "8rem",
          right: "4rem",
          width: "1rem",
          height: "1rem",
          backgroundColor: "rgba(255, 255, 255, 0.15)",
          borderRadius: "50%",
          animation: "bounce 2s infinite",
          animationDelay: "1s",
          zIndex: 1,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "2.5rem",
          width: "0.5rem",
          height: "0.5rem",
          backgroundColor: "rgba(255, 255, 255, 0.25)",
          borderRadius: "50%",
          animation: "bounce 2s infinite",
          animationDelay: "0.5s",
          zIndex: 1,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "8rem",
          right: "8rem",
          width: "0.75rem",
          height: "0.75rem",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          borderRadius: "50%",
          animation: "pulse 4s infinite",
          animationDelay: "2s",
          zIndex: 1,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "5rem",
          left: "8rem",
          width: "1.25rem",
          height: "1.25rem",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          borderRadius: "50%",
          animation: "pulse 4s infinite",
          animationDelay: "1.5s",
          zIndex: 1,
        }}
      ></div>

      <style jsx>{`
        @keyframes bounce {
          0%,
          20%,
          53%,
          80%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          40%,
          43% {
            transform: translate3d(0, -30px, 0);
          }
          70% {
            transform: translate3d(0, -15px, 0);
          }
          90% {
            transform: translate3d(0, -4px, 0);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.1);
          }
        }

        /* Mobile Responsive */
        @media (max-width: 1024px) {
          .auth-container {
            flex-direction: column !important;
          }

          .illustration-section {
            order: -1 !important;
            min-height: 40vh !important;
            flex: none !important;
          }

          .form-section {
            min-height: 60vh !important;
          }

          .form-container {
            padding: 1.5rem !important;
            max-width: 28rem !important;
          }
        }

        @media (max-width: 768px) {
          .illustration-section {
            min-height: 35vh !important;
            padding: 1rem !important;
          }

          .form-container {
            padding: 1rem !important;
          }

          .shopping-illustration img,
          .shopping-illustration .fallback-shopping {
            max-width: 280px !important;
            min-width: 220px !important;
          }

          .logo-container img,
          .logo-container .fallback-logo {
            max-width: 280px !important;
            min-width: 200px !important;
          }
        }

        @media (max-width: 480px) {
          .illustration-section {
            min-height: 30vh !important;
            gap: 2rem !important;
          }

          .shopping-illustration img,
          .shopping-illustration .fallback-shopping {
            max-width: 240px !important;
            min-width: 180px !important;
          }

          .logo-container img,
          .logo-container .fallback-logo {
            max-width: 240px !important;
            min-width: 160px !important;
          }

          .transition-overlay h2 {
            font-size: 1.5rem !important;
          }

          .transition-overlay p {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
}
