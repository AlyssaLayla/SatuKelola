"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  User as UserIcon,
  ChevronDown,
  LogIn,
  UserPlus,
  User,
} from "lucide-react";
import Link from "next/link";

interface User {
  id: string;
  username: string;
  email?: string;
  name?: string;
  role?: string;
  permissions?: string[];
  accessToken?: string;
  refreshToken?: string;
}

const UserMenuDropdown = ({
  user,
  isOpen,
  onClose,
  onLogout,
}: {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: "calc(100% + 12px)",
        right: 0,
        minWidth: "240px",
        background: "rgba(255, 255, 255, 0.98)",
        backdropFilter: "blur(20px)",
        borderRadius: "20px",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
        padding: "1rem",
        zIndex: 1000,
        animation: "slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "12px",
          marginBottom: "12px",
          background: "rgba(253, 215, 65, 0.08)",
          borderRadius: "16px",
        }}
      >
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #FDD741, #FEE480)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.25rem",
              color: "#111827",
              width: "100%",
              height: "100%",
            }}
          >
            <User size={20} />
          </div>
        </div>
        <div>
          <p
            style={{
              fontSize: "1rem",
              fontWeight: "600",
              color: "#111827",
              margin: 0,
              lineHeight: "1.3",
            }}
          >
            {user?.name || "Sari Dewi"}
          </p>
          <p
            style={{
              fontSize: "0.875rem",
              color: "#64748b",
              margin: 0,
              lineHeight: "1.3",
            }}
          >
            {user?.email || "sari@example.com"}
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <Link
          href="/profile"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px 16px",
            borderRadius: "12px",
            textDecoration: "none",
            color: "#374151",
            fontSize: "0.95rem",
            fontWeight: "500",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(253, 215, 65, 0.08)";
            e.currentTarget.style.color = "#111827";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#374151";
          }}
        >
          Profil Saya
        </Link>

        <Link
          href="/settings"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px 16px",
            borderRadius: "12px",
            textDecoration: "none",
            color: "#374151",
            fontSize: "0.95rem",
            fontWeight: "500",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(253, 215, 65, 0.08)";
            e.currentTarget.style.color = "#111827";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#374151";
          }}
        >
          Pengaturan
        </Link>

        <div
          style={{
            height: "1px",
            background: "rgba(0, 0, 0, 0.06)",
            margin: "8px 12px",
          }}
        />

        <button
          onClick={onLogout}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            width: "100%",
            padding: "12px 16px",
            borderRadius: "12px",
            border: "none",
            background: "transparent",
            color: "#EF4444",
            fontSize: "0.95rem",
            fontWeight: "500",
            cursor: "pointer",
            transition: "all 0.3s ease",
            textAlign: "left",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(239, 68, 68, 0.08)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
          }}
        >
          Keluar
        </button>
      </div>
    </div>
  );
};

const AuthButtons = () => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
    }}
  >
    <Link
      href="/auth"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "12px 20px",
        background: "#FDD741",
        border: "none",
        borderRadius: "50px",
        textDecoration: "none",
        color: "#111827",
        fontSize: "0.95rem",
        fontWeight: "600",
        transition: "all 0.3s ease",
        boxShadow: "0 4px 12px rgba(253, 215, 65, 0.3)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 6px 20px rgba(253, 215, 65, 0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(253, 215, 65, 0.3)";
      }}
    >
      <User size={18} />
      Masuk
    </Link>
  </div>
);

const UserAvatarButton = ({
  user,
  onClick,
  isOpen,
}: {
  user: User | null;
  onClick: () => void;
  isOpen: boolean;
}) => (
  <button
    onClick={onClick}
    style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "12px 20px",
      cursor: "pointer",
      transition: "all 0.3s ease",
      minWidth: "180px",
      background: "transparent",
      border: "none",
    }}
  >
    <div
      style={{
        width: "32px",
        height: "32px",
        borderRadius: "50%",
        background: "#111827",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      <UserIcon size={18} style={{ color: "#ffffff" }} />
    </div>

    <div
      style={{
        textAlign: "left",
        flex: 1,
      }}
    >
      <p
        style={{
          fontSize: "1rem",
          fontWeight: "600",
          color: "#111827",
          margin: 0,
          lineHeight: "1.3",
        }}
      >
        Halo,{" "}
        <span style={{ color: "#FDD741", fontWeight: "700" }}>
          {user && user.name ? user.name.split(" ")[0] : "Sari"}
        </span>
      </p>
    </div>

    <ChevronDown
      size={16}
      style={{
        color: "#64748b",
        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.3s ease",
      }}
    />
  </button>
);

export const LandingNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const checkAuthStatus = async () => {
      setIsLoading(true);

      try {
        await new Promise((resolve) => setTimeout(resolve, 500));

        const authToken =
          typeof window !== "undefined"
            ? localStorage.getItem("auth_token")
            : null;

        if (authToken && authToken !== "") {
          setIsAuthenticated(true);

          const mockUser: User = {
            id: "1",
            username: "sari_dewi",
            name: "Sari Dewi",
            email: "sari.dewi@example.com",
            role: "user",
            permissions: ["read", "write"],
          };

          setUser(mockUser);
        } else {
          setIsAuthenticated(false);
          setUser(null);
        }
      } catch (error) {
        console.error("Error checking auth status:", error);
        setIsAuthenticated(false);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "auth_token") {
        checkAuthStatus();
      }
    };

    const handleAuthStateChange = () => {
      checkAuthStatus();
    };

    if (typeof window !== "undefined") {
      window.addEventListener("storage", handleStorageChange);
      window.addEventListener("authStateChanged", handleAuthStateChange);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("storage", handleStorageChange);
        window.removeEventListener("authStateChanged", handleAuthStateChange);
      }
    };
  }, [isMounted]);

  const navItems = [
    { name: "Komunitas", href: "/komunitas" },
    { name: "Legalitas", href: "/legalitas" },
    { name: "Pemasaran", href: "/pemasaran" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  const handleLogout = () => {
    if (typeof window === "undefined") return;

    localStorage.removeItem("auth_token");
    localStorage.removeItem("refresh_token");

    setIsAuthenticated(false);
    setUser(null);
    setIsUserMenuOpen(false);

    window.dispatchEvent(new Event("authStateChanged"));

    window.location.href = "/";
  };

  useEffect(() => {
    if (!isMounted) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        isUserMenuOpen &&
        !(event.target as Element).closest(".user-menu-container")
      ) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isUserMenuOpen, isMounted]);

  if (!isMounted) {
    return (
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "rgba(255, 255, 255, 0.95)",
          backdropFilter: "blur(20px)",
          border: "none",
          borderBottom: "1px solid rgba(253, 215, 65, 0.15)",
          boxShadow: "0 2px 20px rgba(0, 0, 0, 0.06)",
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "80px",
            }}
          >
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <img
                src="/logo.png"
                alt="SatuKelola Logo"
                style={{
                  height: "44px",
                  width: "auto",
                  objectFit: "contain",
                }}
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const fallback = target.parentElement?.querySelector(
                    ".logo-fallback"
                  ) as HTMLElement;
                  if (fallback) {
                    fallback.style.display = "flex";
                  }
                }}
              />
              <div
                className="logo-fallback"
                style={{
                  display: "none",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    background: "linear-gradient(135deg, #FDD741, #C4A73B)",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "900",
                    fontSize: "1.25rem",
                    color: "#111827",
                    boxShadow: "0 4px 12px rgba(253, 215, 65, 0.3)",
                  }}
                >
                  SK
                </div>
                <span
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "800",
                    color: "#111827",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Satu<span style={{ color: "#C4A73B" }}>Kelola</span>
                </span>
              </div>
            </Link>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 20px",
                minWidth: "180px",
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  border: "2px solid #f3f3f3",
                  borderTop: "2px solid #FDD741",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                }}
              />
              <span
                style={{
                  fontSize: "0.95rem",
                  color: "#64748b",
                  fontWeight: "500",
                }}
              >
                Loading...
              </span>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </nav>
    );
  }

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(20px)",
        border: "none",
        borderBottom: "1px solid rgba(253, 215, 65, 0.15)",
        boxShadow: "0 2px 20px rgba(0, 0, 0, 0.06)",
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "80px",
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <img
              src="/logo.png"
              alt="SatuKelola Logo"
              style={{
                height: "44px",
                width: "auto",
                objectFit: "contain",
              }}
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
                const fallback = target.parentElement?.querySelector(
                  ".logo-fallback"
                ) as HTMLElement;
                if (fallback) {
                  fallback.style.display = "flex";
                }
              }}
            />
            <div
              className="logo-fallback"
              style={{
                display: "none",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  background: "linear-gradient(135deg, #FDD741, #C4A73B)",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "900",
                  fontSize: "1.25rem",
                  color: "#111827",
                  boxShadow: "0 4px 12px rgba(253, 215, 65, 0.3)",
                }}
              >
                SK
              </div>
              <span
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "800",
                  color: "#111827",
                  letterSpacing: "-0.02em",
                }}
              >
                Satu<span style={{ color: "#C4A73B" }}>Kelola</span>
              </span>
            </div>
          </Link>

          <div
            className="desktop-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "#374151",
                    textDecoration: "none",
                    padding: "12px 0",
                    borderBottom: "2px solid transparent",
                    transition: "all 0.3s ease",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#FDD741";
                    e.currentTarget.style.borderBottomColor = "#FDD741";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#374151";
                    e.currentTarget.style.borderBottomColor = "transparent";
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {isLoading ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 20px",
                  minWidth: "180px",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    border: "2px solid #f3f3f3",
                    borderTop: "2px solid #FDD741",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.95rem",
                    color: "#64748b",
                    fontWeight: "500",
                  }}
                >
                  Loading...
                </span>
              </div>
            ) : isAuthenticated ? (
              <div
                className="user-menu-container"
                style={{ position: "relative" }}
              >
                <UserAvatarButton
                  user={user}
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  isOpen={isUserMenuOpen}
                />
                <UserMenuDropdown
                  user={user}
                  isOpen={isUserMenuOpen}
                  onClose={() => setIsUserMenuOpen(false)}
                  onLogout={handleLogout}
                />
              </div>
            ) : (
              <AuthButtons />
            )}
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              width: "48px",
              height: "48px",
              border: "none",
              background: "transparent",
              cursor: "pointer",
              borderRadius: "12px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(253, 215, 65, 0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            {isMobileMenuOpen ? (
              <X size={24} style={{ color: "#374151" }} />
            ) : (
              <Menu size={24} style={{ color: "#374151" }} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div
            className="mobile-menu"
            style={{
              display: "none",
              flexDirection: "column",
              padding: "20px 0",
              borderTop: "1px solid rgba(253, 215, 65, 0.15)",
              animation: "slideDown 0.3s ease-out",
            }}
          >
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                style={{
                  padding: "16px 0",
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  color: "#374151",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.04)",
                  transition: "all 0.3s ease",
                }}
                onClick={() => setIsMobileMenuOpen(false)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#FDD741";
                  e.currentTarget.style.paddingLeft = "12px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#374151";
                  e.currentTarget.style.paddingLeft = "0";
                }}
              >
                {item.name}
              </Link>
            ))}

            {isAuthenticated ? (
              <div
                style={{
                  marginTop: "20px",
                  padding: "20px",
                  background: "rgba(253, 215, 65, 0.08)",
                  borderRadius: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "16px",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #FDD741, #FEE480)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    <User size={20} color="#111827" />
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: "700",
                        color: "#111827",
                        margin: 0,
                      }}
                    >
                      Halo,{" "}
                      {user && user.name ? user.name.split(" ")[0] : "Sari"}
                    </p>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "#64748b",
                        margin: 0,
                      }}
                    >
                      {user?.email || "sari@example.com"}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <Link
                    href="/profile"
                    style={{
                      padding: "12px 16px",
                      background: "rgba(255, 255, 255, 0.9)",
                      borderRadius: "12px",
                      textDecoration: "none",
                      color: "#374151",
                      fontSize: "0.95rem",
                      fontWeight: "500",
                      transition: "all 0.3s ease",
                    }}
                  >
                    Profil Saya
                  </Link>
                  <Link
                    href="/settings"
                    style={{
                      padding: "12px 16px",
                      background: "rgba(255, 255, 255, 0.9)",
                      borderRadius: "12px",
                      textDecoration: "none",
                      color: "#374151",
                      fontSize: "0.95rem",
                      fontWeight: "500",
                      transition: "all 0.3s ease",
                    }}
                  >
                    Pengaturan
                  </Link>
                  <button
                    onClick={handleLogout}
                    style={{
                      padding: "12px 16px",
                      background: "rgba(239, 68, 68, 0.1)",
                      border: "none",
                      borderRadius: "12px",
                      color: "#EF4444",
                      fontSize: "0.95rem",
                      fontWeight: "500",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      textAlign: "left",
                    }}
                  >
                    Keluar
                  </button>
                </div>
              </div>
            ) : (
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <Link
                  href="/auth"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "16px",
                    background: "transparent",
                    border: "2px solid rgba(253, 215, 65, 0.3)",
                    borderRadius: "16px",
                    textDecoration: "none",
                    color: "#374151",
                    fontSize: "1rem",
                    fontWeight: "600",
                    transition: "all 0.3s ease",
                  }}
                >
                  <LogIn size={20} />
                  Masuk
                </Link>

                <Link
                  href="/auth"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    padding: "16px",
                    background: "linear-gradient(135deg, #FDD741, #C4A73B)",
                    border: "none",
                    borderRadius: "16px",
                    textDecoration: "none",
                    color: "#111827",
                    fontSize: "1rem",
                    fontWeight: "600",
                    transition: "all 0.3s ease",
                  }}
                >
                  <UserPlus size={20} />
                  Daftar
                </Link>
              </div>
            )}
          </div>
        )}
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

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Mobile Styles */
        @media (max-width: 1024px) {
          .desktop-nav {
            display: none !important;
          }

          .mobile-menu-btn {
            display: flex !important;
          }

          .mobile-menu {
            display: flex !important;
          }
        }

        /* Tablet and smaller desktop */
        @media (max-width: 1200px) {
          .desktop-nav > div:first-child {
            gap: 1.5rem !important;
          }
        }

        /* Additional responsive adjustments */
        @media (max-width: 768px) {
          nav > div {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
        }

        @media (max-width: 480px) {
          nav > div {
            padding-left: 12px !important;
            padding-right: 12px !important;
          }

          .logo-fallback span {
            font-size: 1.25rem !important;
          }

          .logo-fallback div {
            width: 36px !important;
            height: 36px !important;
            font-size: 1rem !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default LandingNavbar;
