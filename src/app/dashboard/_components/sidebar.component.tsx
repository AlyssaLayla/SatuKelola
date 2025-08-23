"use client";

import React, { useState, useEffect } from 'react';
import { BarChart3, FileText, Package, Settings, LogOut, X, Menu } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const menuItems = [
    {
      id: 'ringkasan',
      label: 'Ringkasan',
      icon: BarChart3,
      href: '/dashboard'
    },
    {
      id: 'riwayat-transaksi',
      label: 'Riwayat Transaksi',
      icon: FileText,
      href: '/dashboard/riwayat-transaksi'
    },
    {
      id: 'stok-inventori',
      label: 'Stok dan Inventori',
      icon: Package,
      href: '/dashboard/stok-inventori'
    },
  ];

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen, isMobile]);

  return (
    <>
      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          style={{
            position: 'fixed',
            top: '1rem',
            left: '1rem',
            zIndex: 1001,
            width: '48px',
            height: '48px',
            background: '#ffffff',
            border: '1px solid #e5e7eb',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#f9fafb';
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#ffffff';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
          }}
        >
          <Menu size={24} color="#374151" />
        </button>
      )}

      {/* Overlay for mobile */}
      {isMobile && isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 998,
            opacity: isMobileMenuOpen ? 1 : 0,
            visibility: isMobileMenuOpen ? 'visible' : 'hidden',
            transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
          }}
        />
      )}

      {/* Sidebar */}
      <div
        style={{
          width: '220px',
          height: '100vh',
          backgroundColor: 'white',
          borderRight: '1px solid #e5e7eb',
          display: 'flex',
          flexDirection: 'column',
          position: 'fixed',
          left: isMobile ? (isMobileMenuOpen ? '0' : '-100%') : '0',
          top: 0,
          zIndex: 999,
          transition: 'left 0.3s ease-in-out',
          boxShadow: isMobile ? '2px 0 10px rgba(0, 0, 0, 0.1)' : 'none',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '24px 20px',
            borderBottom: '1px solid #e5e7eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Link
            href="/dashboard"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none'
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#fbbf24',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                fontWeight: 'bold',
                color: 'white'
              }}
            >
              SK
            </div>
            <span
              style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#111827'
              }}
            >
              Satu.Kelola
            </span>
          </Link>

          {/* Close button for mobile */}
          {isMobile && (
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                width: '32px',
                height: '32px',
                background: 'transparent',
                border: 'none',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f3f4f6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <X size={20} color="#6b7280" />
            </button>
          )}
        </div>

        {/* Menu Items */}
        <div
          style={{
            flex: 1,
            padding: '16px 0',
            overflowY: 'auto',
          }}
        >
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.id}
                href={item.href}
                style={{
                  width: '100%',
                  padding: '12px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  backgroundColor: isActive ? '#fef3c7' : 'transparent',
                  color: isActive ? '#92400e' : '#6b7280',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: isActive ? '500' : '400',
                  transition: 'all 0.2s ease',
                  borderRight: isActive ? '3px solid #fbbf24' : '3px solid transparent'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = '#f9fafb';
                    e.currentTarget.style.color = '#111827';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#6b7280';
                  }
                }}
              >
                <Icon size={18} />
                <span
                  style={{
                    fontSize: "14px",
                    margin: "0",
                    fontWeight: isActive ? '500' : '400',
                  }}
                >{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Footer */}
        <div
          style={{
            padding: '16px 20px',
            borderTop: '1px solid #e5e7eb'
          }}
        >
          {/* Footer content can be added here */}
        </div>
      </div>

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        /* Desktop and Large Tablet (1024px and above) */
        @media (min-width: 1025px) {
          .sidebar {
            width: 240px !important;
          }
        }

        /* Medium Tablet (769px to 1024px) */
        @media (max-width: 1024px) and (min-width: 769px) {
          .sidebar {
            width: 200px !important;
          }
          
          .logo-text {
            font-size: 16px !important;
          }
          
          .menu-item {
            padding: 10px 16px !important;
          }
          
          .menu-label {
            font-size: 13px !important;
          }
        }

        /* Mobile and Small Tablet (768px and below) */
        @media (max-width: 768px) {
          .sidebar {
            width: 280px !important;
            left: -100% !important;
            z-index: 999 !important;
            box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1) !important;
          }
          
          .sidebar.open {
            left: 0 !important;
          }
          
          .mobile-menu-button {
            display: flex !important;
          }
          
          .sidebar-overlay {
            display: block !important;
          }
          
          .header-content {
            justify-content: space-between !important;
          }
          
          .close-button {
            display: flex !important;
          }
        }

        /* Small Mobile (480px and below) */
        @media (max-width: 480px) {
          .sidebar {
            width: 100vw !important;
          }
          
          .mobile-menu-button {
            top: 0.75rem !important;
            left: 0.75rem !important;
            width: 44px !important;
            height: 44px !important;
          }
          
          .header-padding {
            padding: 20px 16px !important;
          }
          
          .logo-icon {
            width: 28px !important;
            height: 28px !important;
            font-size: 14px !important;
          }
          
          .logo-text {
            font-size: 16px !important;
          }
          
          .menu-item {
            padding: 14px 16px !important;
          }
          
          .menu-icon {
            width: 20px !important;
            height: 20px !important;
          }
          
          .menu-label {
            font-size: 15px !important;
          }
          
          .footer-padding {
            padding: 12px 16px !important;
          }
        }

        /* Extra Small Mobile (360px and below) */
        @media (max-width: 360px) {
          .mobile-menu-button {
            top: 0.5rem !important;
            left: 0.5rem !important;
            width: 40px !important;
            height: 40px !important;
          }
          
          .header-padding {
            padding: 16px 12px !important;
          }
          
          .logo-icon {
            width: 24px !important;
            height: 24px !important;
            font-size: 12px !important;
          }
          
          .logo-text {
            font-size: 14px !important;
          }
          
          .menu-item {
            padding: 12px 12px !important;
          }
          
          .menu-icon {
            width: 18px !important;
            height: 18px !important;
          }
          
          .menu-label {
            font-size: 14px !important;
          }
          
          .close-button {
            width: 28px !important;
            height: 28px !important;
          }
        }

        /* Landscape Mobile */
        @media (max-height: 500px) and (orientation: landscape) {
          .header-padding {
            padding: 16px 20px !important;
          }
          
          .menu-item {
            padding: 8px 20px !important;
          }
          
          .footer-padding {
            padding: 12px 20px !important;
          }
        }

        /* iPad specific */
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: portrait) {
          .sidebar {
            width: 220px !important;
            left: -220px !important;
          }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .mobile-menu-button {
            width: 52px !important;
            height: 52px !important;
          }
          
          .menu-item {
            padding: 16px 20px !important;
          }
          
          .close-button {
            width: 36px !important;
            height: 36px !important;
          }
        }

        /* High DPI displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .mobile-menu-button {
            border-width: 0.5px !important;
          }
          
          .logo-text, .menu-label {
            font-weight: 500 !important;
          }
        }

        /* Focus styles for accessibility */
        .mobile-menu-button:focus,
        .close-button:focus,
        .menu-item:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }

        /* Reduced motion accessibility */
        @media (prefers-reduced-motion: reduce) {
          .sidebar,
          .sidebar-overlay,
          .mobile-menu-button,
          .close-button,
          .menu-item {
            transition: none !important;
          }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
          .mobile-menu-button {
            background: #1f2937 !important;
            border-color: #374151 !important;
          }
          
          .sidebar {
            background: #1f2937 !important;
            border-color: #374151 !important;
          }
          
          .logo-text,
          .menu-label {
            color: #f3f4f6 !important;
          }
          
          .menu-item:hover {
            background-color: #374151 !important;
          }
          
          .sidebar-overlay {
            background-color: rgba(0, 0, 0, 0.8) !important;
          }
        }
      `}</style>
    </>
  );
};

export default Sidebar;