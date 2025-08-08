'use client';

import React, { useState } from "react";
import { Menu, X, User, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";

export const LandingNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const navItems = [
    { name: "Legalitas", href: "/legalitas" },
    { name: "Pemasaran", href: "/pemasaran" },
    { name: "Komunitas", href: "/komunitas" },
    { name: "Dashboard", href: "/dashboard" }
  ];

  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 1000,
      background: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid rgba(254, 228, 128, 0.3)",
      boxShadow: "0 4px 20px -4px rgba(0, 0, 0, 0.1)"
    }}>
      <div style={{
        maxWidth: "1280px",
        margin: "0 auto",
        paddingLeft: "24px",
        paddingRight: "24px"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "80px"
        }}>
          {/* Logo */}
          <Link 
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none"
            }}
          >
            <div style={{
              width: "40px",
              height: "40px",
              background: "linear-gradient(135deg, #FDD741, #C4A73B)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "900",
              fontSize: "1.25rem",
              color: "#111827",
              boxShadow: "0 8px 20px -6px rgba(253, 215, 65, 0.4)"
            }}>
              SK
            </div>
            <span style={{
              fontSize: "1.5rem",
              fontWeight: "800",
              color: "#111827",
              letterSpacing: "-0.02em"
            }}>
              Satu<span style={{ color: "#C4A73B" }}>Kelola</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div 
            className="desktop-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem"
            }}
          >
            {/* Nav Items */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem"
            }}>
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
                    position: "relative"
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

            {/* User Menu */}
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 20px",
                  background: "linear-gradient(135deg, #FDD741, #C4A73B)",
                  border: "none",
                  borderRadius: "50px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: "0 8px 20px -6px rgba(253, 215, 65, 0.4)",
                  fontSize: "0.95rem",
                  fontWeight: "600",
                  color: "#111827"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 12px 25px -6px rgba(253, 215, 65, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 20px -6px rgba(253, 215, 65, 0.4)";
                }}
              >
                <User size={18} />
                <span>Halo, Sari</span>
                <ChevronRight 
                  size={16}
                  style={{
                    transform: isUserMenuOpen ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease"
                  }}
                />
              </button>

              {/* User Dropdown Menu */}
              {isUserMenuOpen && (
                <div style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  right: 0,
                  minWidth: "200px",
                  background: "#ffffff",
                  borderRadius: "16px",
                  boxShadow: "0 20px 40px -8px rgba(0, 0, 0, 0.15)",
                  border: "1px solid #f1f5f9",
                  padding: "8px",
                  animation: "slideDown 0.3s ease-out"
                }}>
                  <Link
                    href="/profile"
                    style={{
                      display: "block",
                      padding: "12px 16px",
                      borderRadius: "12px",
                      textDecoration: "none",
                      color: "#374151",
                      fontSize: "0.95rem",
                      fontWeight: "500",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#FEF2C0";
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
                      display: "block",
                      padding: "12px 16px",
                      borderRadius: "12px",
                      textDecoration: "none",
                      color: "#374151",
                      fontSize: "0.95rem",
                      fontWeight: "500",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#FEF2C0";
                      e.currentTarget.style.color = "#111827";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#374151";
                    }}
                  >
                    Pengaturan
                  </Link>
                  <div style={{
                    height: "1px",
                    background: "#f1f5f9",
                    margin: "8px 12px"
                  }} />
                  <button
                    style={{
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
                      textAlign: "left"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#FEF2F2";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    Keluar
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
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
              transition: "all 0.3s ease"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#FEF2C0";
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            className="mobile-menu"
            style={{
              display: "none",
              flexDirection: "column",
              padding: "20px 0",
              borderTop: "1px solid #f1f5f9",
              animation: "slideDown 0.3s ease-out"
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
                  borderBottom: "1px solid #f8fafc",
                  transition: "all 0.3s ease"
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
            
            {/* Mobile User Section */}
            <div style={{
              marginTop: "20px",
              padding: "20px",
              background: "#FEF2C0",
              borderRadius: "16px"
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "16px"
              }}>
                <div style={{
                  width: "40px",
                  height: "40px",
                  background: "linear-gradient(135deg, #FDD741, #C4A73B)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <User size={20} style={{ color: "#111827" }} />
                </div>
                <div>
                  <p style={{
                    fontSize: "1.125rem",
                    fontWeight: "700",
                    color: "#111827",
                    margin: 0
                  }}>
                    Halo, Sari
                  </p>
                  <p style={{
                    fontSize: "0.875rem",
                    color: "#64748b",
                    margin: 0
                  }}>
                    sari@example.com
                  </p>
                </div>
              </div>
              
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              }}>
                <Link
                  href="/profile"
                  style={{
                    padding: "12px 16px",
                    background: "#ffffff",
                    borderRadius: "12px",
                    textDecoration: "none",
                    color: "#374151",
                    fontSize: "0.95rem",
                    fontWeight: "500",
                    transition: "all 0.3s ease"
                  }}
                >
                  Profil Saya
                </Link>
                <Link
                  href="/settings"
                  style={{
                    padding: "12px 16px",
                    background: "#ffffff",
                    borderRadius: "12px",
                    textDecoration: "none",
                    color: "#374151",
                    fontSize: "0.95rem",
                    fontWeight: "500",
                    transition: "all 0.3s ease"
                  }}
                >
                  Pengaturan
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom Styles */}
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
      `}</style>
    </nav>
  );
};

export default LandingNavbar;