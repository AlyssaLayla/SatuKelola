import React from "react";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  MessageCircle,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

// Enhanced Landing Footer Component
export const LandingFooter = () => {
  return (
    <footer style={{
      background: "linear-gradient(135deg, #151A27 0%, #20273A 100%)",
      color: "#ffffff",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Main Footer Content */}
      <div style={{
        maxWidth: "1280px",
        margin: "0 auto",
        paddingLeft: "24px",
        paddingRight: "24px",
        paddingTop: "80px",
        paddingBottom: "40px",
        position: "relative",
        zIndex: 2
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "60px",
          marginBottom: "60px"
        }}>
          {/* Company Info */}
          <div>
            {/* Logo */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "24px"
            }}>
              <div style={{
                width: "48px",
                height: "48px",
                background: "linear-gradient(135deg, #FDD741, #C4A73B)",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",