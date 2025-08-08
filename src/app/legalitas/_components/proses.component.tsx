import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  FileText,
  Check,
  X,
  Building2,
  ScrollText,
  FileCheck,
  Store,
  FlaskConical,
  Scale,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

interface OSSProcess {
  id: string;
  title: string;
  description: string;
  illustration: React.ComponentType<{
    size?: number;
    style?: React.CSSProperties;
  }>;
  requirements: string[];
  estimatedTime: string;
  difficulty: "easy" | "medium" | "hard";
  category: string;
  color: string;
}

export const ProcessCardSection = () => {
  const [activeProcess, setActiveProcess] = useState<string | null>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  const processes: OSSProcess[] = [
    {
      id: "nib",
      title: "NIB (Nomor Induk Berusaha)",
      description: "Dapatkan identitas resmi untuk usaha Anda",
      illustration: Building2,
      requirements: [
        "KTP Elektronik yang masih berlaku",
        "NPWP Pribadi",
        "Email aktif untuk notifikasi",
        "Nomor HP yang dapat dihubungi",
      ],
      estimatedTime: "1-3 hari kerja",
      difficulty: "easy",
      category: "Wajib",
      color: "#FDD741",
    },
    {
      id: "siup",
      title: "SIUP (Surat Izin Usaha Perdagangan)",
      description: "Izin resmi untuk menjalankan kegiatan perdagangan",
      illustration: ScrollText,
      requirements: [
        "NIB yang sudah terbit",
        "Akta pendirian perusahaan (jika PT/CV)",
        "Surat keterangan domisili usaha",
        "Pas foto direktur 4x6 (2 lembar)",
      ],
      estimatedTime: "3-7 hari kerja",
      difficulty: "medium",
      category: "Perdagangan",
      color: "#D3B336",
    },
    {
      id: "tdp",
      title: "TDP (Tanda Daftar Perusahaan)",
      description: "Pendaftaran resmi perusahaan di daftar negara",
      illustration: FileCheck,
      requirements: [
        "NIB yang telah diterbitkan",
        "SIUP (jika diperlukan)",
        "Surat pernyataan tidak bangkrut",
        "Laporan kegiatan penanaman modal",
      ],
      estimatedTime: "2-5 hari kerja",
      difficulty: "medium",
      category: "Administrasi",
      color: "#7F6C21",
    },
    {
      id: "iumk",
      title: "IUMK (Izin Usaha Mikro Kecil)",
      description: "Izin khusus untuk usaha mikro dan kecil",
      illustration: Store,
      requirements: [
        "KTP yang masih berlaku",
        "Surat keterangan domisili",
        "Pas foto terbaru 3x4",
        "Surat pernyataan tidak memiliki SIUP",
      ],
      estimatedTime: "1-2 hari kerja",
      difficulty: "easy",
      category: "UMKM",
      color: "#20273A",
    },
    {
      id: "bpom",
      title: "Izin BPOM",
      description: "Izin untuk produk makanan, minuman, dan kosmetik",
      illustration: FlaskConical,
      requirements: [
        "NIB dan SIUP",
        "Sertifikat halal (jika diperlukan)",
        "Hasil uji laboratorium produk",
        "Dokumen formulasi produk",
        "Sertifikat GMP/HACCP",
      ],
      estimatedTime: "14-30 hari kerja",
      difficulty: "hard",
      category: "Khusus",
      color: "#151A27",
    },
    {
      id: "hki",
      title: "HKI (Hak Kekayaan Intelektual)",
      description: "Perlindungan merek, paten, dan hak cipta",
      illustration: Scale,
      requirements: [
        "Logo/desain merek yang akan didaftarkan",
        "Surat kuasa (jika menggunakan konsultan)",
        "KTP dan NPWP",
        "Bukti pembayaran biaya pendaftaran",
        "Formulir permohonan yang lengkap",
      ],
      estimatedTime: "6-18 bulan",
      difficulty: "hard",
      category: "Perlindungan",
      color: "#10141D",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards(processes.map((_, index) => index));
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "#4CAF50";
      case "medium":
        return "#FFC107";
      case "hard":
        return "#D32F2F";
      default:
        return "#90939D";
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "Mudah";
      case "medium":
        return "Sedang";
      case "hard":
        return "Sulit";
      default:
        return "Unknown";
    }
  };

  return (
    <section
      style={{
        paddingTop: "100px",
        paddingBottom: "100px",
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
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <h2
            style={{
              fontSize: "2.75rem",
              fontWeight: "700",
              color: "#20273A",
              marginBottom: "20px",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
            }}
          >
            Jenis Legalitas yang Tersedia
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#90939D",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.7",
              fontWeight: "400",
            }}
          >
            Pilih jenis legalitas yang sesuai dengan kebutuhan bisnis Anda
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
            gap: "32px",
            padding: "0 20px",
          }}
        >
          {processes.map((process, index) => {
            const isVisible = visibleCards.includes(index);
            const isActive = activeProcess === process.id;

            return (
              <div
                key={process.id}
                className={`process-card transform transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{
                  background: "#ffffff",
                  borderRadius: "32px",
                  padding: "2.5rem",
                  boxShadow: isActive
                    ? "0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                    : "0 4px 15px -3px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)",
                  border: isActive
                    ? `3px solid ${process.color}`
                    : "1px solid #f1f5f9",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  animationDelay: `${index * 0.1}s`,
                  transitionDelay: `${index * 0.1}s`,
                }}
                onClick={() =>
                  setActiveProcess(
                    activeProcess === process.id ? null : process.id
                  )
                }
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.transform =
                      "translateY(-8px) scale(1.02)";
                    e.currentTarget.style.boxShadow =
                      "0 10px 30px -5px rgba(0, 0, 0, 0.12), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 15px -3px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)";
                  }
                }}
              >
                <div
                  style={{
                    marginBottom: isActive ? "1.5rem" : "2rem",
                    transition: "margin-bottom 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <span
                      style={{
                        background: `linear-gradient(135deg, ${process.color}, ${process.color}dd)`,
                        color:
                          process.color === "#FDD741" ||
                          process.color === "#FEE480"
                            ? "#111827"
                            : "#ffffff",
                        padding: "0.5rem 1rem",
                        borderRadius: "20px",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                      }}
                    >
                      {process.category}
                    </span>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <div
                        style={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          backgroundColor: getDifficultyColor(
                            process.difficulty
                          ),
                        }}
                      />
                      <span
                        style={{
                          fontSize: "0.875rem",
                          color: getDifficultyColor(process.difficulty),
                          fontWeight: "600",
                        }}
                      >
                        {getDifficultyLabel(process.difficulty)}
                      </span>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.5rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "24px",
                        background: `linear-gradient(135deg, ${process.color}, ${process.color}dd)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        boxShadow: "0 4px 15px -4px rgba(0, 0, 0, 0.15)",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      <process.illustration
                        size={36}
                        style={{
                          color:
                            process.color === "#FDD741" ||
                            process.color === "#FEE480"
                              ? "#111827"
                              : "#ffffff",
                          filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                        }}
                      />
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: "600",
                          color: isActive ? process.color : "#111827",
                          marginBottom: "0.75rem",
                          lineHeight: "1.3",
                          letterSpacing: "-0.01em",
                          transition: "color 0.3s ease",
                        }}
                      >
                        {process.title}
                      </h3>

                      <p
                        style={{
                          fontSize: "18px",
                          color: "#64748b",
                          lineHeight: "1.6",
                          fontWeight: "400",
                          margin: 0,
                        }}
                      >
                        {process.description}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      background: isActive
                        ? `${process.color}15`
                        : "rgba(248, 250, 252, 1)",
                      borderRadius: "16px",
                      padding: "1rem 1.5rem",
                      border: isActive
                        ? `1px solid ${process.color}30`
                        : "1px solid #e2e8f0",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: isActive ? process.color : "#64748b",
                        margin: 0,
                        fontWeight: "400",
                        textAlign: "center",
                      }}
                    >
                      Estimasi waktu <br /> {process.estimatedTime}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "1rem 0",
                    marginBottom: isActive ? "1rem" : "0",
                    transition: "margin-bottom 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: isActive ? process.color : "#e2e8f0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      boxShadow: isActive
                        ? "0 2px 8px -2px rgba(0, 0, 0, 0.1)"
                        : "none",
                    }}
                  >
                    <ChevronDown
                      size={20}
                      style={{
                        color: isActive
                          ? process.color === "#FDD741" ||
                            process.color === "#FEE480"
                            ? "#111827"
                            : "#ffffff"
                          : "#64748b",
                        transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "all 0.3s ease",
                      }}
                    />
                  </div>
                </div>

                <div
                  style={{
                    maxHeight: isActive ? "1000px" : "0",
                    overflow: "hidden",
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    opacity: isActive ? 1 : 0,
                  }}
                >
                  <div
                    style={{
                      background: `${process.color}10`,
                      borderRadius: "24px",
                      padding: isActive ? "2rem" : "0 2rem",
                      border: `1px solid ${process.color}20`,
                      transition: "padding 0.3s ease",
                    }}
                  >
                    <h4
                      style={{
                        fontSize: "1.125rem",
                        fontWeight: "600",
                        color: "#111827",
                        marginBottom: "1.5rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                      }}
                    >
                      <FileText size={20} style={{ color: process.color }} />
                      Persyaratan yang Dibutuhkan:
                    </h4>

                    <ul
                      style={{
                        margin: "0 0 2rem 0",
                        padding: 0,
                        listStyle: "none",
                      }}
                    >
                      {process.requirements.map((req, reqIndex) => (
                        <li
                          key={reqIndex}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.75rem",
                            marginBottom: "1rem",
                            fontSize: "0.95rem",
                            color: "#374151",
                            lineHeight: "1.6",
                            opacity: isActive ? 1 : 0,
                            transform: isActive
                              ? "translateY(0)"
                              : "translateY(10px)",
                            transition: `all 0.3s ease ${reqIndex * 0.05}s`,
                          }}
                        >
                          <div
                            style={{
                              width: "20px",
                              height: "20px",
                              borderRadius: "50%",
                              background: process.color,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                              marginTop: "2px",
                            }}
                          >
                            <Check
                              size={12}
                              style={{
                                color:
                                  process.color === "#FDD741" ||
                                  process.color === "#FEE480"
                                    ? "#111827"
                                    : "#ffffff",
                              }}
                            />
                          </div>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  style={{
                    position: "absolute",
                    top: "-20px",
                    right: "-20px",
                    width: "100px",
                    height: "100px",
                    background: `linear-gradient(135deg, ${process.color}20, ${process.color}10)`,
                    borderRadius: "50%",
                    transition: "all 0.3s ease",
                    opacity: isActive ? 0.4 : 0.1,
                    transform: isActive ? "scale(1.2)" : "scale(1)",
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

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

        .scrolling-container:hover {
          animation-play-state: paused;
        }

        .process-card:hover .scrolling-container {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .process-card {
            min-width: 320px !important;
          }
        }

        @media (max-width: 480px) {
          .process-card {
            min-width: 280px !important;
          }
        }
      `}</style>
    </section>
  );
};
