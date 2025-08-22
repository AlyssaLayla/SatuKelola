import React, { useState, useEffect } from "react";
import {
  Check,
  ChevronRight,
  Globe,
  BookOpen,
  Store,
  Target,
  FileText,
  User,
  Paperclip,
  Send,
  BarChart3,
  Trophy,
} from "lucide-react";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  detail: string;
  color: string;
}

interface StepCardProps {
  step: Step;
  isCompleted: boolean;
  onToggleComplete: () => void;
  side: "left" | "right";
  isMobile: boolean;
}

export const StepGuideSection = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  const steps: Step[] = [
    {
      id: 1,
      title: "Masuk ke oss.go.id",
      description: "Buka website resmi OSS di browser Anda",
      icon: Globe,
      detail: "Pastikan koneksi internet stabil untuk proses yang lancar",
      color: "#7F6C21",
    },
    {
      id: 2,
      title: "Klik 'Panduan OSS' pada landing page",
      description: "Temukan menu panduan di halaman utama",
      icon: BookOpen,
      detail: "Menu panduan biasanya terletak di bagian atas halaman",
      color: "#D3B336",
    },
    {
      id: 3,
      title: "Pilih kategori Usaha Mikro dan Kecil (UMK)",
      description: "Tentukan kategori usaha yang sesuai",
      icon: Store,
      detail:
        "UMK cocok untuk bisnis dengan omzet di bawah 2.5 miliar per tahun",
      color: "#20273A",
    },
    {
      id: 4,
      title: "Pilih subkategori sesuai bisnis Anda",
      description: "Sesuaikan dengan bidang usaha spesifik",
      icon: Target,
      detail: "Pilihan yang tepat akan memudahkan proses selanjutnya",
      color: "#FDD741",
    },
    {
      id: 5,
      title: "Ikuti langkah pendaftaran",
      description: "Mulai proses registrasi akun OSS",
      icon: FileText,
      detail: "Siapkan email aktif untuk verifikasi akun",
      color: "#B91C1C",
    },
    {
      id: 6,
      title: "Isi data usaha & pemilik",
      description: "Lengkapi informasi bisnis dan personal",
      icon: User,
      detail: "Pastikan data yang diisi sesuai dengan dokumen resmi",
      color: "#151A27",
    },
    {
      id: 7,
      title: "Unggah dokumen yang sesuai",
      description: "Upload file persyaratan yang diperlukan",
      icon: Paperclip,
      detail: "Format file yang diterima: PDF, JPG, PNG (maksimal 2MB)",
      color: "#16A34A",
    },
    {
      id: 8,
      title: "Klik submit",
      description: "Kirim aplikasi untuk diproses",
      icon: Send,
      detail: "Periksa kembali semua data sebelum submit",
      color: "#EA580C",
    },
    {
      id: 9,
      title: "Cek dashboard untuk melihat update status",
      description: "Pantau progress aplikasi Anda",
      icon: BarChart3,
      detail: "Notifikasi akan dikirim melalui email dan SMS",
      color: "#90939D",
    },
    {
      id: 10,
      title: "Dokumen Legal Anda sudah siap!",
      description: "Download dan simpan sertifikat legalitas",
      icon: Trophy,
      detail: "Backup dokumen di beberapa tempat untuk keamanan",
      color: "#059669",
    },
  ];

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    const timer = setTimeout(() => {
      setVisibleSteps(steps.map((_, index) => index));
    }, 300);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
      clearTimeout(timer);
    };
  }, []);

  const toggleStepComplete = (stepId: number) => {
    setCompletedSteps((prev) =>
      prev.includes(stepId)
        ? prev.filter((id) => id !== stepId)
        : [...prev, stepId]
    );
  };

  return (
    <section
      style={{
        paddingTop: "5rem",
        paddingBottom: "5rem",
      }}
      className="step-guide-section"
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
        className="step-guide-container"
      >
        <div style={{ textAlign: "center", marginBottom: "4rem" }} className="step-guide-header">
          <h2
            style={{
              fontSize: "2.75rem",
              fontWeight: "700",
              color: "#20273A",
              marginBottom: "1rem",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
            }}
            className="step-guide-title"
          >
            Langkah-Langkah Mengurus Legalitas
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
            className="step-guide-description"
          >
            Ikuti panduan step-by-step berikut untuk mengurus legalitas usaha
            secara mandiri di website OSS
          </p>
        </div>

        <div
          style={{ 
            position: "relative", 
            maxWidth: isMobile ? "100%" : "1000px", 
            margin: "0 auto" 
          }}
          className="step-guide-timeline"
        >
          {!isMobile && (
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "40px",
                bottom: "40px",
                width: "4px",
                background:
                  "linear-gradient(to bottom, #D4D4D4, #AAAAAA, #D4D4D4)",
                borderRadius: "2px",
                transform: "translateX(-50%)",
                zIndex: 1,
              }}
              className="timeline-line"
            />
          )}

          <div style={{ position: "relative", zIndex: 2 }}>
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const isVisible = visibleSteps.includes(index);
              const isCompleted = completedSteps.includes(step.id);

              if (isMobile) {
                // Mobile layout - single column
                return (
                  <div
                    key={step.id}
                    className={`step-item transform transition-all duration-700 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-12 opacity-0"
                    }`}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1rem",
                      marginBottom: index === steps.length - 1 ? "0" : "2rem",
                      animationDelay: `${index * 0.1}s`,
                      transitionDelay: `${index * 0.1}s`,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        minWidth: "60px",
                      }}
                    >
                      <div
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          background: isCompleted
                            ? "linear-gradient(135deg, #16A34A, #15803D)"
                            : `linear-gradient(135deg, ${step.color}, ${step.color}dd)`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          position: "relative",
                          zIndex: 3,
                          boxShadow: "0 6px 20px -6px rgba(0, 0, 0, 0.2)",
                          border: "3px solid #ffffff",
                          cursor: "pointer",
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                        onClick={() => toggleStepComplete(step.id)}
                        onTouchStart={(e) => {
                          e.currentTarget.style.transform = "scale(1.1)";
                        }}
                        onTouchEnd={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                        }}
                      >
                        {isCompleted ? (
                          <Check size={24} style={{ color: "#ffffff" }} />
                        ) : (
                          <step.icon
                            size={24}
                            style={{
                              color: "#ffffff",
                              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                            }}
                          />
                        )}

                        <div
                          style={{
                            position: "absolute",
                            top: "-6px",
                            right: "-6px",
                            width: "24px",
                            height: "24px",
                            borderRadius: "50%",
                            backgroundColor: "#ffffff",
                            border: `2px solid ${step.color}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.75rem",
                            fontWeight: "800",
                            color: step.color,
                            boxShadow: "0 2px 8px -2px rgba(0, 0, 0, 0.15)",
                          }}
                        >
                          {step.id}
                        </div>
                      </div>
                      
                      {index !== steps.length - 1 && (
                        <div
                          style={{
                            width: "2px",
                            height: "2rem",
                            background: "#e2e8f0",
                            marginTop: "0.5rem",
                          }}
                        />
                      )}
                    </div>

                    <div style={{ flex: 1 }}>
                      <StepCard
                        step={step}
                        isCompleted={isCompleted}
                        onToggleComplete={() => toggleStepComplete(step.id)}
                        side="left"
                        isMobile={true}
                      />
                    </div>
                  </div>
                );
              }

              // Desktop layout - two columns with zigzag
              return (
                <div
                  key={step.id}
                  className={`step-item transform transition-all duration-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 80px 2fr",
                    alignItems: "center",
                    gap: "0px",
                    marginBottom: index === steps.length - 1 ? "0" : "5rem",
                    animationDelay: `${index * 0.1}s`,
                    transitionDelay: `${index * 0.1}s`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: isEven ? "flex-end" : "flex-start",
                      paddingRight: isEven ? "30px" : "0",
                      paddingLeft: !isEven ? "30px" : "0",
                    }}
                  >
                    {isEven && (
                      <div style={{ position: "relative" }}>
                        <StepCard
                          step={step}
                          isCompleted={isCompleted}
                          onToggleComplete={() => toggleStepComplete(step.id)}
                          side="left"
                          isMobile={false}
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "50%",
                            right: "-25px",
                            transform: "translateY(-50%)",
                            width: "50px",
                            height: "50px",
                            background: "#ffffff",
                            borderRadius: "50%",
                            border: `3px solid ${step.color}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 4px 12px -4px rgba(0, 0, 0, 0.15)",
                            zIndex: 4,
                          }}
                        >
                          <ChevronRight
                            size={20}
                            style={{
                              color: step.color,
                              fontWeight: "bold",
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        background: isCompleted
                          ? "linear-gradient(135deg, #16A34A, #15803D)"
                          : `linear-gradient(135deg, ${step.color}, ${step.color}dd)`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        zIndex: 3,
                        boxShadow: "0 6px 20px -6px rgba(0, 0, 0, 0.2)",
                        border: "4px solid #ffffff",
                        cursor: "pointer",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        transform: isCompleted ? "scale(1.1)" : "scale(1)",
                      }}
                      onClick={() => toggleStepComplete(step.id)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.15)";
                        e.currentTarget.style.boxShadow =
                          "0 8px 25px -8px rgba(0, 0, 0, 0.25)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = isCompleted
                          ? "scale(1.1)"
                          : "scale(1)";
                        e.currentTarget.style.boxShadow =
                          "0 6px 20px -6px rgba(0, 0, 0, 0.2)";
                      }}
                    >
                      {isCompleted ? (
                        <Check size={32} style={{ color: "#ffffff" }} />
                      ) : (
                        <step.icon
                          size={32}
                          style={{
                            color: "#ffffff",
                            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
                          }}
                        />
                      )}

                      <div
                        style={{
                          position: "absolute",
                          top: "-8px",
                          right: "-8px",
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          backgroundColor: "#ffffff",
                          border: `3px solid ${step.color}`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "0.875rem",
                          fontWeight: "800",
                          color: step.color,
                          boxShadow: "0 2px 8px -2px rgba(0, 0, 0, 0.15)",
                        }}
                      >
                        {step.id}
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: !isEven ? "flex-start" : "flex-end",
                      paddingLeft: !isEven ? "30px" : "0",
                      paddingRight: isEven ? "30px" : "0",
                    }}
                  >
                    {!isEven && (
                      <div style={{ position: "relative" }}>
                        <StepCard
                          step={step}
                          isCompleted={isCompleted}
                          onToggleComplete={() => toggleStepComplete(step.id)}
                          side="right"
                          isMobile={false}
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "-25px",
                            transform: "translateY(-50%)",
                            width: "50px",
                            height: "50px",
                            background: "#ffffff",
                            borderRadius: "50%",
                            border: `3px solid ${step.color}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: "0 4px 12px -4px rgba(0, 0, 0, 0.15)",
                            zIndex: 4,
                          }}
                        >
                          <ChevronRight
                            size={20}
                            style={{
                              color: step.color,
                              transform: "rotate(180deg)",
                              fontWeight: "bold",
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Desktop Large (1200px+) */
        @media (min-width: 1200px) {
          .step-guide-title {
            font-size: 3rem !important;
          }
        }

        /* Desktop Medium (992px - 1199px) */
        @media (max-width: 1199px) {
          .step-guide-container {
            max-width: 1000px !important;
          }
        }

        /* Tablet Landscape (768px - 991px) */
        @media (max-width: 991px) {
          .step-guide-section {
            padding: 4rem 0 !important;
          }
          
          .step-guide-container {
            padding: 0 1.25rem !important;
          }
          
          .step-guide-header {
            margin-bottom: 3rem !important;
          }
          
          .step-guide-title {
            font-size: 2.25rem !important;
          }
          
          .step-guide-description {
            font-size: 1.125rem !important;
          }
          
          .step-guide-timeline {
            max-width: 100% !important;
          }

        }

        /* Tablet Portrait and Mobile (768px and below) */
        @media (max-width: 768px) {
          .step-guide-section {
            padding: 3rem 0 !important;
          }
          
          .step-guide-container {
            padding: 0 1rem !important;
          }
          
          .step-guide-title {
            font-size: 2rem !important;
            margin-bottom: 0.75rem !important;
          }
          
          .step-guide-description {
            font-size: 1rem !important;
          }
          
          .timeline-line {
            display: none !important;
          }
          
          .step-item {
            display: flex !important;
            grid-template-columns: none !important;
            align-items: flex-start !important;
            gap: 1rem !important;
            margin-bottom: 1.5rem !important;
          }
        }

        /* Mobile Large (481px - 575px) */
        @media (max-width: 575px) {
          .step-guide-section {
            padding: 2.5rem 0 !important;
          }
          
          .step-guide-container {
            padding: 0 0.75rem !important;
          }
          
          .step-guide-header {
            margin-bottom: 2rem !important;
          }
          
          .step-guide-title {
            font-size: 1.75rem !important;
          }
          
          .step-guide-description {
            font-size: 0.95rem !important;
          }
          
          .step-item {
            gap: 0.75rem !important;
            margin-bottom: 1.25rem !important;
          }
        }

        /* Mobile Small (320px - 480px) */
        @media (max-width: 480px) {
          .step-guide-section {
            padding: 2rem 0 !important;
          }
          
          .step-guide-container {
            padding: 0 0.5rem !important;
          }
          
          .step-guide-title {
            font-size: 1.5rem !important;
            line-height: 1.2 !important;
          }
          
          .step-guide-description {
            font-size: 0.875rem !important;
          }
          
          .step-item {
            gap: 0.5rem !important;
            margin-bottom: 1rem !important;
          }
        }

        /* Extra Small Mobile (320px and below) */
        @media (max-width: 320px) {
          .step-guide-title {
            font-size: 1.375rem !important;
          }
          
          .step-guide-description {
            font-size: 0.8rem !important;
          }
        }

        /* Landscape orientation for mobile */
        @media (max-height: 500px) and (orientation: landscape) {
          .step-guide-section {
            padding: 2rem 0 !important;
          }
          
          .step-guide-header {
            margin-bottom: 2rem !important;
          }
          
          .step-item {
            margin-bottom: 1rem !important;
          }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .step-item > div:first-child > div:first-child {
            min-width: 70px !important;
          }
          
          .step-item > div:first-child > div:first-child > div:first-child {
            width: 70px !important;
            height: 70px !important;
          }
        }

        /* Focus states for accessibility */
        .step-item button:focus,
        .step-item div[onClick]:focus {
          outline: 2px solid #3b82f6 !important;
          outline-offset: 2px !important;
        }

        /* High contrast mode */
        @media (prefers-contrast: high) {
          .timeline-line {
            background: linear-gradient(to bottom, #000000, #666666, #000000) !important;
          }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .step-item,
          .step-item > div,
          .step-item button {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
};

const StepCard: React.FC<StepCardProps> = ({
  step,
  isCompleted,
  onToggleComplete,
  side,
  isMobile,
}) => {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: isMobile ? "16px" : "20px",
        padding: isMobile ? "1rem" : "1.5rem",
        boxShadow: isCompleted
          ? "0 8px 25px -8px rgba(22, 163, 74, 0.15)"
          : "0 8px 25px -8px rgba(0, 0, 0, 0.08)",
        border: isCompleted ? "3px solid #16A34A" : "1px solid #D4D4D4",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
        maxWidth: isMobile ? "none" : "400px",
      }}
      className="step-card"
      onClick={onToggleComplete}
      onMouseEnter={!isMobile ? (e) => {
        e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
        e.currentTarget.style.boxShadow = isCompleted
          ? "0 12px 35px -8px rgba(22, 163, 74, 0.2)"
          : "0 12px 35px -8px rgba(0, 0, 0, 0.12)";
      } : undefined}
      onMouseLeave={!isMobile ? (e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = isCompleted
          ? "0 8px 25px -8px rgba(22, 163, 74, 0.15)"
          : "0 8px 25px -8px rgba(0, 0, 0, 0.08)";
      } : undefined}
      onTouchStart={isMobile ? (e) => {
        e.currentTarget.style.transform = "scale(0.98)";
      } : undefined}
      onTouchEnd={isMobile ? (e) => {
        e.currentTarget.style.transform = "scale(1)";
      } : undefined}
    >
      {isCompleted && (
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            background:
              "linear-gradient(135deg, rgba(22, 163, 74, 0.05), rgba(21, 128, 61, 0.05))",
            pointerEvents: "none",
          }}
        />
      )}

      <div style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: isMobile ? "1rem" : "1.5rem",
            marginBottom: isMobile ? "1rem" : "1.5rem",
          }}
        >
          <div
            style={{
              width: isMobile ? "50px" : "60px",
              height: isMobile ? "50px" : "60px",
              borderRadius: isMobile ? "16px" : "20px",
              background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              boxShadow: "0 4px 15px -4px rgba(0, 0, 0, 0.12)",
            }}
          >
            <step.icon
              size={isMobile ? 20 : 28}
              style={{
                color: "#ffffff",
                filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
              }}
            />
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <h3
              style={{
                fontSize: isMobile ? "1.125rem" : "1.5rem",
                fontWeight: "600",
                color: isCompleted ? "#16A34A" : "#20273A",
                marginBottom: "0.75rem",
                lineHeight: "1.3",
                letterSpacing: "-0.01em",
                textDecoration: isCompleted ? "line-through" : "none",
                transition: "all 0.3s ease",
              }}
            >
              {step.title}
            </h3>

            <p
              style={{
                fontSize: isMobile ? "0.875rem" : "1rem",
                color: isCompleted ? "#90939D" : "#90939D",
                marginBottom: "1rem",
                lineHeight: "1.6",
                fontWeight: "400",
              }}
            >
              {step.description}
            </p>

            <div
              style={{
                background: isCompleted
                  ? "rgba(22, 163, 74, 0.1)"
                  : `${step.color}15`,
                borderRadius: isMobile ? "12px" : "16px",
                padding: isMobile ? "0.75rem 1rem" : "1rem 1.5rem",
                border: isCompleted
                  ? "1px solid rgba(22, 163, 74, 0.2)"
                  : `1px solid ${step.color}30`,
              }}
            >
              <p
                style={{
                  fontSize: isMobile ? "0.8rem" : "0.95rem",
                  color: isCompleted ? "#15803D" : step.color,
                  margin: 0,
                  fontWeight: "500",
                  lineHeight: "1.5",
                }}
              >
                💡 {step.detail}
              </p>
            </div>
          </div>

          <div
            style={{
              width: isMobile ? "20px" : "24px",
              height: isMobile ? "20px" : "24px",
              borderRadius: "50%",
              background: isCompleted ? "#16A34A" : "#D4D4D4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
              flexShrink: 0,
            }}
          >
            {isCompleted && (
              <Check size={isMobile ? 12 : 16} style={{ color: "#ffffff" }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};