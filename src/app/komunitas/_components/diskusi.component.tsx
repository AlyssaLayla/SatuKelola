"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  ThumbsUp,
  Eye,
  MessageCircle,
  Filter,
  Calendar,
  User,
  TrendingUp,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

interface Category {
  id: string;
  name: string;
  color: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  count: number;
}

interface Discussion {
  id: string;
  title: string;
  content: string;
  author: string;
  avatar: string;
  category: string;
  publishedAt: string;
  likes: number;
  views: number;
  comments: number;
  isPopular?: boolean;
}

export const CommunityDiscussionSection = () => {
  const [activeFilter, setActiveFilter] = useState("Recently active");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const categories: Category[] = [
    {
      id: "manajemen-bisnis",
      name: "Manajemen Bisnis",
      color: "#FDD741",
      icon: TrendingUp,
      count: 25,
    },
    {
      id: "keuangan-umkm",
      name: "Keuangan UMKM",
      color: "#FDD741",
      icon: TrendingUp,
      count: 18,
    },
    {
      id: "strategi-pemasaran",
      name: "Strategi Pemasaran",
      color: "#FDD741",
      icon: TrendingUp,
      count: 32,
    },
  ];

  const discussions: Discussion[] = [
    {
      id: "1",
      title: "Cara viralkan produk UMKM di TikTok dengan modal Rp 100 ribu",
      content:
        "Saya berhasil jual 500 pcs keripik singkong dalam 3 hari hanya dari 1 video TikTok! Rahasianya: gunakan audio trending, buka 'live' jam 8 malam, dan pakai strategi giveaway sederhana...",
      author: "Budi Martono",
      avatar: "/api/placeholder/40/40",
      category: "Strategi Pemasaran",
      publishedAt: "2024-08-07",
      likes: 13,
      views: 342,
      comments: 12,
      isPopular: true,
    },
    {
      id: "2",
      title:
        "Selamatkan usaha dari kebangkrutan: tips atur cash flow di masa sulit",
      content:
        "Bulan lalu saya hampir gulung tikar karena utang menumpuk. Berbagi pengalaman: cara negosiasi dengan supplier, restrukturisasi utang, dan trik jual stok lama tanpa rugi...",
      author: "Anonim",
      avatar: "/api/placeholder/40/40",
      category: "Krisis & Solusi",
      publishedAt: "2024-08-06",
      likes: 13,
      views: 342,
      comments: 12,
    },
    {
      id: "3",
      title: "Mitra produksi found! Pengalaman kolab dengan pengrajin Bali",
      content:
        "Dari cari mitra di forum ini sampai ekspor pertama ke Jepang: bagaimana membangun trust, bagi hasil adil, dan handle custom order lintas provinsi...",
      author: "Siti Rahayu",
      avatar: "/api/placeholder/40/40",
      category: "Jaringan Kolaborasi",
      publishedAt: "2024-08-05",
      likes: 13,
      views: 342,
      comments: 12,
    },
    {
      id: "4",
      title: "Stok kedaluwarsa turun 80% dengan sistem FIFO ala warung",
      content:
        "Tak perlu aplikasi mahal! Cukup pakai kode warna stiker dan penataan rak sederhana. Simak foto-foto implementasi di usaha kue saya...",
      author: "Fauzi Ahmad",
      avatar: "/api/placeholder/40/40",
      category: "Manajemen Stok",
      publishedAt: "2024-08-04",
      likes: 13,
      views: 342,
      comments: 12,
    },
  ];

  const filterOptions = [
    "Recently active",
    "Most popular",
    "Most viewed",
    "Most liked",
  ];
  const totalPages = 78;

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards(discussions.map((_, index) => index));
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <section
      style={{
        paddingTop: "100px",
        paddingBottom: "100px",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        <div style={{ marginBottom: "80px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {categories.map((category, index) => {
              const isSelected = selectedCategories.includes(category.id);
              const isVisible = visibleCards.includes(index);

              return (
                <div
                  key={category.id}
                  className={`category-card transform transition-all duration-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                  style={{
                    background: "#ffffff",
                    borderRadius: "24px",
                    padding: "2rem",
                    boxShadow: isSelected
                      ? `0 25px 50px -12px ${category.color}40`
                      : "0 8px 25px -8px rgba(0, 0, 0, 0.1)",
                    border: isSelected
                      ? `3px solid ${category.color}`
                      : "1px solid #f1f5f9",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                    animationDelay: `${index * 0.1}s`,
                    transitionDelay: `${index * 0.1}s`,
                  }}
                  onClick={() => toggleCategory(category.id)}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.transform =
                        "translateY(-4px) scale(1.02)";
                      e.currentTarget.style.boxShadow =
                        "0 12px 30px -8px rgba(0, 0, 0, 0.15)";
                      e.currentTarget.style.borderColor = "#FEE480";
                      e.currentTarget.style.background = `#FEE48005`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.transform =
                        "translateY(0) scale(1)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 25px -8px rgba(0, 0, 0, 0.1)";
                      e.currentTarget.style.borderColor = "#f1f5f9";
                      e.currentTarget.style.background = "#ffffff";
                    }
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "16px",
                          background: `linear-gradient(135deg, ${category.color}, ${category.color}dd)`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <category.icon
                          size={24}
                          style={{
                            color:
                              category.color === "#FDD741" ||
                              category.color === "#FEE480"
                                ? "#111827"
                                : "#ffffff",
                          }}
                        />
                      </div>

                      <div>
                        <h3
                          style={{
                            fontSize: "1.125rem",
                            fontWeight: "700",
                            color: isSelected ? "#D3B336" : "#111827",
                            marginBottom: "0.25rem",
                            transition: "color 0.3s ease",
                          }}
                        >
                          {category.name}
                        </h3>
                        <p
                          style={{
                            fontSize: "0.875rem",
                            color: "#64748b",
                            margin: 0,
                          }}
                        >
                          {category.count} diskusi
                        </p>
                      </div>
                    </div>

                    <ChevronRight
                      size={20}
                      style={{
                        color: isSelected ? category.color : "#90939D",
                        transition: "color 0.3s ease",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      top: "-10px",
                      right: "-10px",
                      width: "60px",
                      height: "60px",
                      background: `linear-gradient(135deg, ${category.color}20, ${category.color}10)`,
                      borderRadius: "50%",
                      transition: "opacity 0.3s ease",
                      opacity: isSelected ? 0.3 : 0.1,
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            background: "#ffffff",
            borderRadius: "32px",
            padding: "3rem",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)",
            border: "1px solid #f1f5f9",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "2rem",
              paddingBottom: "2rem",
              borderBottom: "1px solid #f1f5f9",
            }}
          >
            <h2
              style={{
                fontSize: "1.75rem",
                fontWeight: "600",
                color: "#111827",
                margin: 0,
                letterSpacing: "-0.02em",
              }}
            >
              100 Topics
            </h2>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Filter size={20} style={{ color: "#64748b" }} />
              <select
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
                style={{
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  padding: "0.75rem 1rem",
                  fontSize: "0.95rem",
                  color: "#374151",
                  fontWeight: "400",
                  cursor: "pointer",
                  outline: "none",
                }}
              >
                {filterOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ marginBottom: "3rem" }}>
            {discussions.map((discussion, index) => {
              const isVisible = visibleCards.includes(index);

              return (
                <div
                  key={discussion.id}
                  className={`discussion-card transform transition-all duration-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                  style={{
                    background: "#ffffff",
                    borderRadius: "24px",
                    padding: "2rem",
                    marginBottom:
                      index === discussions.length - 1 ? "0" : "1.5rem",
                    border: "1px solid #f1f5f9",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    cursor: "pointer",
                    animationDelay: `${index * 0.1}s`,
                    transitionDelay: `${index * 0.1}s`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 30px -8px rgba(0, 0, 0, 0.1)";
                    e.currentTarget.style.borderColor = "#FDD741";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "#f1f5f9";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "1.5rem",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #FDD741, #C4A73B)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        boxShadow: "0 8px 20px -6px rgba(253, 215, 65, 0.4)",
                      }}
                    >
                      <User size={24} style={{ color: "#111827" }} />
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          marginBottom: "1rem",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.95rem",
                            fontWeight: "600",
                            color: "#111827",
                          }}
                        >
                          {discussion.author}
                        </span>
                        <span
                          style={{
                            fontSize: "0.875rem",
                            color: "#64748b",
                          }}
                        >
                          •
                        </span>
                        <span
                          style={{
                            fontSize: "0.875rem",
                            color: "#64748b",
                          }}
                        >
                          Published in
                        </span>
                        <span
                          style={{
                            fontSize: "0.875rem",
                            fontWeight: "600",
                            color: "#C4A73B",
                          }}
                        >
                          {discussion.category}
                        </span>
                      </div>

                      <h3
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: "700",
                          color: "#111827",
                          marginBottom: "1rem",
                          lineHeight: "1.4",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {discussion.title}
                      </h3>

                      <p
                        style={{
                          fontSize: "0.95rem",
                          color: "#64748b",
                          lineHeight: "1.6",
                          marginBottom: "1.5rem",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {discussion.content}
                      </p>

                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "2rem",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                          }}
                        >
                          <ThumbsUp size={16} style={{ color: "#64748b" }} />
                          <span
                            style={{
                              fontSize: "0.875rem",
                              color: "#64748b",
                              fontWeight: "500",
                            }}
                          >
                            {discussion.likes}
                          </span>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                          }}
                        >
                          <Eye size={16} style={{ color: "#64748b" }} />
                          <span
                            style={{
                              fontSize: "0.875rem",
                              color: "#64748b",
                              fontWeight: "500",
                            }}
                          >
                            {discussion.views}
                          </span>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                          }}
                        >
                          <MessageCircle
                            size={16}
                            style={{ color: "#64748b" }}
                          />
                          <span
                            style={{
                              fontSize: "0.875rem",
                              color: "#64748b",
                              fontWeight: "500",
                            }}
                          >
                            {discussion.comments}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
              paddingTop: "2rem",
              borderTop: "1px solid #f1f5f9",
            }}
          >
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                background: currentPage === 1 ? "#f8fafc" : "#20273A",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: currentPage === 1 ? "not-allowed" : "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (currentPage !== 1) {
                  e.currentTarget.style.background = "#151A27";
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== 1) {
                  e.currentTarget.style.background = "#20273A";
                }
              }}
            >
              <ArrowLeft
                size={18}
                style={{
                  color: currentPage === 1 ? "#90939D" : "#ffffff",
                }}
              />
            </button>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              {[1, 2, 3, 4].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "12px",
                    background:
                      page === currentPage ? "#20273A" : "transparent",
                    border: "none",
                    color: page === currentPage ? "#ffffff" : "#64748b",
                    fontSize: "0.95rem",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (page !== currentPage) {
                      e.currentTarget.style.background = "#f8fafc";
                      e.currentTarget.style.color = "#111827";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (page !== currentPage) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#64748b";
                    }
                  }}
                >
                  {page}
                </button>
              ))}

              <span
                style={{
                  color: "#64748b",
                  fontSize: "0.95rem",
                  margin: "0 0.5rem",
                }}
              >
                ...
              </span>

              <button
                onClick={() => setCurrentPage(78)}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  background: currentPage === 78 ? "#20273A" : "transparent",
                  border: "none",
                  color: currentPage === 78 ? "#ffffff" : "#64748b",
                  fontSize: "0.95rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  if (currentPage !== 78) {
                    e.currentTarget.style.background = "#f8fafc";
                    e.currentTarget.style.color = "#111827";
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPage !== 78) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#64748b";
                  }
                }}
              >
                78
              </button>
            </div>

            <button
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                background: currentPage === totalPages ? "#f8fafc" : "#20273A",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: currentPage === totalPages ? "not-allowed" : "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (currentPage !== totalPages) {
                  e.currentTarget.style.background = "#151A27";
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== totalPages) {
                  e.currentTarget.style.background = "#20273A";
                }
              }}
            >
              <ArrowRight
                size={18}
                style={{
                  color: currentPage === totalPages ? "#90939D" : "#ffffff",
                }}
              />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .category-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .discussion-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @media (max-width: 1024px) {
          .category-card {
            min-width: 280px !important;
          }
        }

        @media (max-width: 768px) {
          .category-card {
            min-width: 100% !important;
          }

          .discussion-card {
            padding: 1.5rem !important;
          }
        }

        @media (max-width: 480px) {
          .discussion-card {
            padding: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default CommunityDiscussionSection;
