"use client";

import React from 'react';
import Sidebar from '@/components/sidebar.component';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1, marginLeft: '220px' }}>
        {children}
      </div>
    </div>
  );
}