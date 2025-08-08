"use client";

import React from 'react';
import { BarChart3, FileText, Package, Settings, LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar: React.FC = () => {
  const pathname = usePathname();

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

  return (
    <div
      style={{
        width: '220px',
        height: '100vh',
        backgroundColor: 'white',
        borderRight: '1px solid #e5e7eb',
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        left: 0,
        top: 0,
        zIndex: 50
      }}
    >
      <div
        style={{
          padding: '24px 20px',
          borderBottom: '1px solid #e5e7eb'
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
      </div>

      <div
        style={{
          flex: 1,
          padding: '16px 0'
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
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>

      <div
        style={{
          padding: '16px 20px',
          borderTop: '1px solid #e5e7eb'
        }}
      >
        <button
          onClick={() => {
            console.log('Logout clicked');
          }}
          style={{
            width: '100%',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            backgroundColor: '#1f2937',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            transition: 'background-color 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#374151';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#1f2937';
          }}
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;