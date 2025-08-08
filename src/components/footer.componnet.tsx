import React from "react";
import { Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";

// Enhanced Footer Component matching the design
export const LandingFooter = () => {
  return (
    <footer
      style={{
        background: "#20273A",
        color: "#ffffff",
        position: "relative",
      }}
    >
      {/* Main Footer Content */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        {/* Footer Layout */}
        <div
          className="footer-content"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          {/* Left Section - Logo and Copyright */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            {/* Logo */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <img
                src="/logo-yellow.png"
                alt="SatuKelola Logo"
                style={{
                  height: "44px",
                  width: "auto",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Copyright */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.75rem",
                  color: "#A0AEC0"
                }}
              >
                ©
              </div>
              <p
                style={{
                  color: "#A0AEC0",
                  fontSize: "0.875rem",
                  margin: 0,
                  opacity: 0.9,
                }}
              >
                Copyright By PT Satu Kelola. All Rights Reserved.
              </p>
            </div>
          </div>

          {/* Right Section - Social Media Icons */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
            }}
          >
            {[
              {
                icon: Facebook,
                href: "https://facebook.com",
                name: "Facebook",
              },
              {
                icon: Instagram,
                href: "https://instagram.com",
                name: "Instagram",
              },
              { 
                icon: Twitter, 
                href: "https://twitter.com", 
                name: "Twitter" 
              },
              { 
                icon: MessageCircle, 
                href: "https://wa.me", 
                name: "LINE" 
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${social.name}`}
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "rgba(255, 255, 255, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.15)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                }}
              >
                <social.icon
                  size={20}
                  style={{ 
                    color: "#ffffff", 
                    opacity: 0.9 
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Mobile Responsive */
        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column !important;
            text-align: center !important;
            gap: 24px !important;
            align-items: center !important;
          }

          div[style*="flexDirection: column"] {
            align-items: center !important;
            text-align: center !important;
          }

          span[style*="fontSize: 1.75rem"] {
            font-size: 1.5rem !important;
          }
        }

        @media (max-width: 480px) {
          div[style*="paddingLeft: 24px"] {
            padding-left: 16px !important;
            padding-right: 16px !important;
            padding-top: 32px !important;
            padding-bottom: 32px !important;
          }

          div[style*="gap: 16px"] {
            gap: 12px !important;
          }

          div[style*="width: 44px; height: 44px"] {
            width: 40px !important;
            height: 40px !important;
          }

          span[style*="fontSize: 1.75rem"] {
            font-size: 1.25rem !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default LandingFooter;