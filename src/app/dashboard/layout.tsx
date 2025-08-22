"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "./_components/sidebar.component";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {!isMobile && <Sidebar />}
      
      <div 
        style={{ 
          flex: 1, 
          marginLeft: isMobile ? "0" : "220px",
          width: isMobile ? "100%" : "auto"
        }}
      >
        {children}
      </div>
    </div>
  );
}