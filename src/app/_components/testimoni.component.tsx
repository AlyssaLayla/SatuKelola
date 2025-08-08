"use client";

import React, { useState, useEffect } from "react";
import { Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Expanded testimonials array with more dummy data
  const topRowTestimonials = [
    {
      id: 1,
      quote: "Bikin Pengelolaan Bisnis Jadi Jauh Lebih Efisien!",
      content:
        "Sebagai pelaku UMKM yang sudah lama berjalan, platform ini membantu banget untuk menata ulang keuangan dan strategi marketing bisnis saya.",
      author: "Dinda, 35 Tahun",
      business: "Owner Kedai Kopi Saya",
      avatar: "/avatar.png",
    },
    {
      id: 2,
      quote: "Manajemen Keuangan Jadi Lebih Terstruktur!",
      content:
        "Fitur pencatatan dan laporan keuangan sangat membantu saya dalam mengontrol cash flow dan profit bisnis warung makan.",
      author: "Budi Santoso, 42 Tahun",
      business: "Pemilik Warung Makan Bahari",
      avatar: "/avatar.png",
    },
    {
      id: 3,
      quote: "Legalitas Usaha Yang Dulu Ribet Jadi Simple!",
      content:
        "Proses pengurusan izin usaha dan dokumen legal yang biasanya berbelit-belit, sekarang jadi mudah dan cepat.",
      author: "Siti Nurhaliza, 29 Tahun",
      business: "Pengusaha Fashion Hijab Modern",
      avatar: "/avatar.png",
    },
    {
      id: 4,
      quote: "Komunitas UMKM Yang Saling Support!",
      content:
        "Networking dengan sesama pengusaha jadi lebih mudah, bisa sharing pengalaman dan saling membantu.",
      author: "Ahmad Fauzi, 38 Tahun",
      business: "Pemilik Toko Online Elektronik",
      avatar: "/avatar.png",
    },
    {
      id: 5,
      quote: "Strategi Marketing Yang Bener-Bener Work!",
      content:
        "Tips dan konsultasi pemasaran yang diberikan sangat aplikatif dan terbukti meningkatkan penjualan.",
      author: "Maya Indira, 31 Tahun",
      business: "Pengusaha Kuliner Tradisional",
      avatar: "/avatar.png",
    },
    {
      id: 6,
      quote: "Dari Usaha Kecil Sampai Berkembang Pesat!",
      content:
        "SatuKelola mendampingi perjalanan bisnis saya dari awal sampai sekarang bisa punya cabang di 3 kota.",
      author: "Doni Pratama, 45 Tahun",
      business: "Owner Bengkel Motor Chain",
      avatar: "/avatar.png",
    },
  ];

  const bottomRowTestimonials = [
    {
      id: 7,
      quote: "ROI Bisnis Meningkat Drastis Berkat Platform Ini!",
      content:
        "Setelah menerapkan strategi yang dipelajari di SatuKelola, profit margin bisnis kosmetik saya naik 40%.",
      author: "Lisa Permata, 27 Tahun",
      business: "Founder Brand Kosmetik Lokal",
      avatar: "/avatar.png",
    },
    {
      id: 8,
      quote: "Networking Yang Membuka Peluang Baru!",
      content:
        "Dari komunitas ini saya dapat banyak klien baru dan partnership yang menguntungkan untuk bisnis percetakan.",
      author: "Reza Mahendra, 36 Tahun",
      business: "Direktur Percetakan Digital",
      avatar: "/avatar.png",
    },
    {
      id: 9,
      quote: "Manajemen Inventory Jadi Lebih Terkontrol!",
      content:
        "Fitur tracking stok dan automated reorder membantu saya menghindari overstock dan stockout.",
      author: "Dewi Kartika, 33 Tahun",
      business: "Owner Minimarket Modern",
      avatar: "/avatar.png",
    },
    {
      id: 10,
      quote: "Fresh Graduate Yang Siap Jadi Entrepreneur!",
      content:
        "Bimbingan step by step dari SatuKelola membuat saya percaya diri memulai bisnis sendiri setelah lulus.",
      author: "Eko Prasetyo, 23 Tahun",
      business: "Fresh Graduate & Young Entrepreneur",
      avatar: "/avatar.png",
    },
    {
      id: 11,
      quote: "Customer Service Yang Always Ready to Help!",
      content:
        "Tim support sangat responsif dan selalu memberikan solusi yang tepat untuk setiap kendala bisnis.",
      author: "Fitri Rahayu, 30 Tahun",
      business: "Pengusaha Handicraft Export",
      avatar: "/avatar.png",
    },
    {
      id: 12,
      quote: "Bisnis Café Yang Makin Profitable!",
      content:
        "Dengan menerapkan sistem yang dipelajari di sini, café saya jadi lebih efficient dan profitable.",
      author: "Hendra Wijaya, 34 Tahun",
      business: "Owner Hendra Coffee & Eatery",
      avatar: "/avatar.png",
    },
  ];

  // Intersection Observer for section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector(".testimonials-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const TestimonialCard = ({
    testimonial,
    index,
  }: {
    testimonial: any;
    index: number;
  }) => (
    <div
      style={{
        minWidth: "400px",
        width: "400px",
        background: "rgba(255, 255, 255, 0.98)",
        backdropFilter: "blur(20px)",
        borderRadius: "24px",
        border: "1px solid rgba(255, 255, 255, 0.4)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
        padding: "2.5rem",
        marginRight: "1.5rem",
        position: "relative",
        overflow: "hidden",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`,
      }}
    >
      {/* Quote Text */}
      <div style={{ marginBottom: "2rem" }}>
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: "700",
            color: "#111827",
            lineHeight: "1.4",
            marginBottom: "1rem",
            letterSpacing: "-0.01em",
          }}
        >
          "{testimonial.quote}"
        </h3>

        <p
          style={{
            fontSize: "1rem",
            color: "#64748b",
            lineHeight: "1.6",
            fontWeight: "400",
          }}
        >
          {testimonial.content ||
            "Sebagai pelaku UMKM yang sudah lama berjalan, platform ini membantu banget untuk menata ulang keuangan dan strategi marketing bisnis saya."}
        </p>
      </div>

      {/* Author Info */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {/* Avatar Placeholder */}
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            flexShrink: 0,
          }}
        >
          <img
            src={testimonial.avatar}
            alt={testimonial.author}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <div>
          <h4
            style={{
              fontSize: "1.125rem",
              fontWeight: "600",
              color: "#111827",
              marginBottom: "0.25rem",
              lineHeight: "1.3",
            }}
          >
            {testimonial.author}
          </h4>
          <p
            style={{
              fontSize: "0.9rem",
              color: "#64748b",
              fontWeight: "500",
              margin: 0,
              lineHeight: "1.3",
            }}
          >
            {testimonial.business}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section
      className="testimonials-section"
      style={{
        paddingTop: "80px",
        paddingBottom: "80px",
        background: "linear-gradient(135deg, #FDD741 0%, #FEE480 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          paddingLeft: "24px",
          paddingRight: "24px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "4rem",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          <p
            style={{
              fontSize: "1.125rem",
              color: "#111827",
              marginBottom: "0.5rem",
              fontWeight: "500",
            }}
          >
            Apa Kata Mereka?
          </p>
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "900",
              color: "#111827",
              marginBottom: "0",
              lineHeight: "1.1",
              letterSpacing: "-0.03em",
            }}
          >
            <span style={{ color: "#111827" }}>TESTIMONI DARI</span>{" "}
            <span style={{ color: "#20273A" }}>PELANGGAN</span>
          </h2>
        </div>

        {/* Testimonials Rows */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            overflow: "hidden",
          }}
        >
          {/* Top Row - Moving Left to Right */}
          <div
            className="testimonials-row-top"
            style={{
              display: "flex",
              animation: "scrollLeftToRight 60s linear infinite", // KECEPATAN: 60s = lebih lambat, 30s = lebih cepat
              width: "fit-content",
            }}
          >
            {/* Duplicate for seamless loop */}
            {[...topRowTestimonials, ...topRowTestimonials].map(
              (testimonial, index) => (
                <TestimonialCard
                  key={`top-${testimonial.id}-${index}`}
                  testimonial={testimonial}
                  index={index}
                />
              )
            )}
          </div>

          {/* Bottom Row - Moving Right to Left */}
          <div
            className="testimonials-row-bottom"
            style={{
              display: "flex",
              animation: "scrollRightToLeft 70s linear infinite", // KECEPATAN: 70s = lebih lambat, 35s = lebih cepat
              width: "fit-content",
            }}
          >
            {/* Duplicate for seamless loop */}
            {[...bottomRowTestimonials, ...bottomRowTestimonials].map(
              (testimonial, index) => (
                <TestimonialCard
                  key={`bottom-${testimonial.id}-${index}`}
                  testimonial={testimonial}
                  index={index}
                />
              )
            )}
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-15%",
            left: "-10%",
            width: "30rem",
            height: "30rem",
            background:
              "radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-20%",
            right: "-15%",
            width: "35rem",
            height: "35rem",
            background:
              "radial-gradient(circle, rgba(17, 24, 39, 0.08) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes scrollLeftToRight {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRightToLeft {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .testimonials-row-top:hover,
        .testimonials-row-bottom:hover {
          animation-play-state: paused;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .testimonials-section h2 {
            font-size: 2.2rem !important;
          }

          .testimonials-section div[style*='minWidth: "400px"'] {
            min-width: 320px !important;
            width: 320px !important;
            padding: 2rem !important;
          }

          .testimonials-section div[style*='marginRight: "1.5rem"'] {
            margin-right: 1rem !important;
          }

          @keyframes scrollLeftToRight {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes scrollRightToLeft {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0%);
            }
          }
        }

        @media (max-width: 640px) {
          .testimonials-section h2 {
            font-size: 2rem !important;
          }

          .testimonials-section div[style*='minWidth: "400px"'] {
            min-width: 300px !important;
            width: 300px !important;
            padding: 1.8rem !important;
          }

          .testimonials-section div[style*='gap: "2rem"'] {
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
