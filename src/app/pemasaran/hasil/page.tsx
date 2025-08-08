"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Download,
  Target,
  Lightbulb,
  Settings,
  Calendar,
  Star,
  ExternalLink,
  CheckCircle,
} from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs.component";

type MarketingRecommendation = {
  archetype: string;
  priorityPlatforms: string[];
  contentIdeas: string[];
  tools: { name: string; link: string; desc: string }[];
  actionPlan: { week: number; tasks: string[] }[];
  successStories: string[];
};

const SectionHeader: React.FC<{ icon: React.ReactNode; title: string }> = ({
  icon,
  title,
}) => (
  <div style={{ marginBottom: "2rem" }}>
    <h2
      style={{
        fontSize: "1.75rem",
        fontWeight: "600",
        color: "#111827",
        marginBottom: "1.5rem",
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        letterSpacing: "-0.02em",
      }}
      className="section-title"
    >
      {icon}
      {title}
    </h2>

    <style jsx>{`
      @media (max-width: 768px) {
        .section-title {
          font-size: 1.5rem !important;
          margin-bottom: 1rem !important;
          gap: 0.5rem !important;
        }
      }

      @media (max-width: 480px) {
        .section-title {
          font-size: 1.25rem !important;
        }
      }
    `}</style>
  </div>
);

const PlatformCard: React.FC<{ name: string }> = ({ name }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      padding: "1.5rem",
      backgroundColor: "#ffffff",
      borderRadius: "10px",
      border: "2px solid #FEE480",
      transition: "all 0.3s ease",
      cursor: "pointer",
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
    }}
    className="platform-card"
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = "#FFFFF0";
      e.currentTarget.style.borderColor = "#FDD741";
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow = "0 6px 5px -8px rgba(0, 0, 0, 0.15)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = "#ffffff";
      e.currentTarget.style.borderColor = "#FEE480";
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 1px 3px 0 rgba(0, 0, 0, 0.1)";
    }}
  >
    <div
      style={{
        width: "48px",
        height: "48px",
        backgroundColor: "#FDD741",
        borderRadius: "8px",
        marginRight: "0.75rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#111827",
        fontWeight: "600",
        fontSize: "1.25rem",
      }}
      className="platform-icon"
    >
      {name.charAt(0)}
    </div>
    <span
      style={{
        fontWeight: "500",
        color: "#111827",
        fontSize: "1rem",
      }}
      className="platform-name"
    >
      {name}
    </span>

    <style jsx>{`
      @media (max-width: 768px) {
        .platform-card {
          padding: 1rem !important;
        }

        .platform-icon {
          width: 40px !important;
          height: 40px !important;
          margin-right: 0.5rem !important;
          font-size: 1rem !important;
        }

        .platform-name {
          font-size: 0.9rem !important;
        }
      }

      @media (max-width: 480px) {
        .platform-card {
          padding: 0.75rem !important;
        }

        .platform-icon {
          width: 36px !important;
          height: 36px !important;
        }

        .platform-name {
          font-size: 0.85rem !important;
        }
      }
    `}</style>
  </div>
);

const ToolCard: React.FC<{
  tool: { name: string; link: string; desc: string };
}> = ({ tool }) => (
  <a
    href={tool.link}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "block",
      border: "2px solid #FEE480",
      borderRadius: "10px",
      padding: "1.5rem",
      transition: "all 0.3s ease",
      textDecoration: "none",
      backgroundColor: "#ffffff",
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
    }}
    className="tool-card"
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = "#FDD741";
      e.currentTarget.style.boxShadow = "0 6px 5px -8px rgba(0, 0, 0, 0.15)";
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.backgroundColor = "#FFFFF0";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "#FEE480";
      e.currentTarget.style.boxShadow = "0 1px 3px 0 rgba(0, 0, 0, 0.1)";
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.backgroundColor = "#ffffff";
    }}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: "1rem",
      }}
      className="tool-header"
    >
      <h3
        style={{
          fontWeight: "600",
          color: "#C4A73B",
          margin: 0,
          fontSize: "1.125rem",
        }}
        className="tool-name"
      >
        {tool.name}
      </h3>
      <ExternalLink size={18} style={{ color: "#64748b", flexShrink: 0 }} />
    </div>
    <p
      style={{
        fontSize: "0.875rem",
        color: "#64748b",
        margin: 0,
        lineHeight: "1.5",
      }}
      className="tool-description"
    >
      {tool.desc}
    </p>

    <style jsx>{`
      @media (max-width: 768px) {
        .tool-card {
          padding: 1rem !important;
        }

        .tool-name {
          font-size: 1rem !important;
        }

        .tool-description {
          font-size: 0.8rem !important;
        }
      }

      @media (max-width: 480px) {
        .tool-card {
          padding: 0.75rem !important;
        }

        .tool-header {
          margin-bottom: 0.75rem !important;
        }
      }
    `}</style>
  </a>
);

const WeekPlan: React.FC<{ weekPlan: { week: number; tasks: string[] } }> = ({
  weekPlan,
}) => {
  const [checkedTasks, setCheckedTasks] = useState<boolean[]>(
    new Array(weekPlan.tasks.length).fill(false)
  );

  const toggleTask = (taskIndex: number) => {
    const newCheckedTasks = [...checkedTasks];
    newCheckedTasks[taskIndex] = !newCheckedTasks[taskIndex];
    setCheckedTasks(newCheckedTasks);
  };

  const completedTasks = checkedTasks.filter(Boolean).length;
  const progressPercentage = (completedTasks / weekPlan.tasks.length) * 100;

  return (
    <div
      style={{
        borderLeft: "4px solid #FDD741",
        paddingLeft: "1.5rem",
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
        paddingRight: "1.5rem",
        backgroundColor: "#FFFFF0",
        borderRadius: "10px",
        marginLeft: "0.5rem",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
      }}
      className="week-plan"
    >
      <div style={{ marginBottom: "1.5rem" }}>
        <h3
          style={{
            fontWeight: "600",
            fontSize: "1.25rem",
            color: "#111827",
            marginBottom: "1rem",
          }}
          className="week-title"
        >
          Minggu {weekPlan.week}
        </h3>

        <div style={{ marginBottom: "1rem" }} className="progress-section">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.5rem",
            }}
            className="progress-info"
          >
            <span
              style={{
                fontSize: "0.875rem",
                color: "#64748b",
              }}
              className="progress-text"
            >
              Progress: {completedTasks}/{weekPlan.tasks.length}
            </span>
            <span
              style={{
                fontSize: "0.875rem",
                color: "#C4A73B",
                fontWeight: "600",
              }}
              className="progress-percentage"
            >
              {Math.round(progressPercentage)}%
            </span>
          </div>

          <div
            style={{
              width: "100%",
              height: "8px",
              backgroundColor: "#FEE480",
              borderRadius: "4px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                backgroundColor: "#FDD741",
                width: `${progressPercentage}%`,
                transition: "width 0.3s ease",
                borderRadius: "4px",
              }}
            />
          </div>
        </div>
      </div>

      <ul
        style={{ margin: 0, padding: 0, listStyle: "none" }}
        className="task-list"
      >
        {weekPlan.tasks.map((task, taskIndex) => (
          <li
            key={taskIndex}
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "1rem",
              cursor: "pointer",
              padding: "0.75rem",
              borderRadius: "8px",
              transition: "all 0.3s ease",
              backgroundColor: "transparent",
            }}
            className="task-item"
            onClick={() => toggleTask(taskIndex)}
            onMouseEnter={(e) => {
              if (!checkedTasks[taskIndex]) {
                e.currentTarget.style.backgroundColor = "#FEE480";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            <div
              style={{
                width: "1.25rem",
                height: "1.25rem",
                border: "2px solid #FDD741",
                borderRadius: "4px",
                marginRight: "0.75rem",
                marginTop: "0.125rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: checkedTasks[taskIndex]
                  ? "#FDD741"
                  : "transparent",
                transition: "all 0.3s ease",
                flexShrink: 0,
                cursor: "pointer",
              }}
              className="task-checkbox"
            >
              {checkedTasks[taskIndex] && (
                <CheckCircle size={12} style={{ color: "#ffffff" }} />
              )}
            </div>
            <span
              style={{
                color: "#111827",
                textDecoration: checkedTasks[taskIndex]
                  ? "line-through"
                  : "none",
                opacity: checkedTasks[taskIndex] ? 0.6 : 1,
                transition: "all 0.3s ease",
                fontSize: "1rem",
                lineHeight: "1.5",
              }}
              className="task-text"
            >
              {task}
            </span>
          </li>
        ))}
      </ul>

      <style jsx>{`
        @media (max-width: 768px) {
          .week-plan {
            padding: 1rem !important;
            margin-left: 0 !important;
          }

          .week-title {
            font-size: 1.125rem !important;
            margin-bottom: 0.75rem !important;
          }

          .progress-info {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.25rem !important;
          }

          .task-item {
            padding: 0.5rem !important;
          }

          .task-text {
            font-size: 0.9rem !important;
          }
        }

        @media (max-width: 480px) {
          .week-plan {
            padding: 0.75rem !important;
          }

          .progress-section {
            margin-bottom: 1rem !important;
          }

          .task-checkbox {
            width: 1rem !important;
            height: 1rem !important;
            margin-right: 0.5rem !important;
          }

          .task-text {
            font-size: 0.85rem !important;
          }
        }
      `}</style>
    </div>
  );
};

const ContentIdeasSection: React.FC<{ contentIdeas: string[] }> = ({
  contentIdeas,
}) => (
  <div style={{ marginBottom: "3rem" }}>
    <SectionHeader
      icon={<Lightbulb size={24} style={{ color: "#C4A73B" }} />}
      title="Ide Konten Spesifik"
    />
    <div style={{ paddingLeft: "0.5rem" }}>
      <ul
        style={{ margin: 0, padding: 0, listStyle: "none" }}
        className="content-ideas-list"
      >
        {contentIdeas.map((idea, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "1.5rem",
            }}
            className="content-idea-item"
          >
            <div
              style={{
                width: "2rem",
                height: "2rem",
                borderRadius: "50%",
                backgroundColor: "#FFFFF0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "1rem",
                marginTop: "0.125rem",
                flexShrink: 0,
                border: "2px solid #FDD741",
              }}
              className="idea-number"
            >
              <span
                style={{
                  color: "#C4A73B",
                  fontWeight: "600",
                  fontSize: "0.875rem",
                }}
              >
                {index + 1}
              </span>
            </div>
            <p
              style={{
                color: "#111827",
                margin: 0,
                lineHeight: "1.6",
                fontSize: "1rem",
              }}
              className="idea-text"
            >
              {idea}
            </p>
          </li>
        ))}
      </ul>
    </div>

    <style jsx>{`
      @media (max-width: 768px) {
        .content-idea-item {
          margin-bottom: 1rem !important;
        }

        .idea-number {
          width: 1.75rem !important;
          height: 1.75rem !important;
          margin-right: 0.75rem !important;
        }

        .idea-text {
          font-size: 0.9rem !important;
        }
      }

      @media (max-width: 480px) {
        .content-idea-item {
          margin-bottom: 0.75rem !important;
        }

        .idea-number {
          width: 1.5rem !important;
          height: 1.5rem !important;
          margin-right: 0.5rem !important;
        }

        .idea-text {
          font-size: 0.85rem !important;
        }
      }
    `}</style>
  </div>
);

const SuccessStoriesSection: React.FC<{ successStories: string[] }> = ({
  successStories,
}) => (
  <div style={{ marginBottom: "3rem" }}>
    <SectionHeader
      icon={<Star size={24} style={{ color: "#C4A73B" }} />}
      title="Kisah Sukses UMKM"
    />
    <div style={{ paddingLeft: "0.5rem" }}>
      <div
        style={{
          backgroundColor: "#FFFFF0  ",
          borderLeft: "4px solid #FDD741",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
        }}
        className="success-stories-container"
      >
        <ul
          style={{ margin: 0, padding: 0, listStyle: "none" }}
          className="success-stories-list"
        >
          {successStories.map((story, index) => (
            <li
              key={index}
              style={{ display: "flex", marginBottom: "1rem" }}
              className="success-story-item"
            >
              <span
                style={{
                  marginRight: "0.75rem",
                  color: "#C4A73B",
                  fontWeight: "600",
                  fontSize: "1.25rem",
                }}
              >
                •
              </span>
              <span
                style={{
                  color: "#7F6C21",
                  lineHeight: "1.6",
                  fontSize: "1rem",
                }}
                className="success-story-text"
              >
                {story}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <style jsx>{`
      @media (max-width: 768px) {
        .success-stories-container {
          padding: 1.5rem !important;
        }

        .success-story-text {
          font-size: 0.9rem !important;
        }

        .success-story-item {
          margin-bottom: 0.75rem !important;
        }
      }

      @media (max-width: 480px) {
        .success-stories-container {
          padding: 1rem !important;
        }

        .success-story-text {
          font-size: 0.85rem !important;
        }
      }
    `}</style>
  </div>
);

const MarketingResultPage = () => {
  const [quizData, setQuizData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setQuizData({ archetype: "Content Creator" });
      setLoading(false);
    }, 1000);
  }, []);

  const recommendation: MarketingRecommendation = {
    archetype: quizData?.archetype || "Content Creator",
    priorityPlatforms: ["TikTok", "Instagram Reels"],
    contentIdeas: [
      "Buat 3 video 'How to use' produk Anda dalam 1 minggu",
      "Lakukan live session Q&A setiap Jumat jam 4 sore",
      "Buat challenge dengan hashtag khusus brand Anda",
    ],
    tools: [
      {
        name: "CapCut",
        link: "https://www.capcut.com",
        desc: "Edit video mudah di HP",
      },
      {
        name: "Canva",
        link: "https://canva.com",
        desc: "Desain grafis instan",
      },
      {
        name: "InShot",
        link: "https://inshot.com",
        desc: "Tambahkan teks & musik ke video",
      },
    ],
    actionPlan: [
      {
        week: 1,
        tasks: [
          "Optimalkan bio TikTok & Instagram",
          "Buat 3 konten dasar produk",
          "Follow 10 akun kompetitor untuk riset",
        ],
      },
      {
        week: 2,
        tasks: [
          "Posting 1 reel/reels setiap hari",
          "Lakukan 1 live session",
          "Gunakan 5 hashtag relevan per postingan",
        ],
      },
      {
        week: 3,
        tasks: [
          "Kolaborasi dengan 1 micro-influencer",
          "Analisis insight mingguan",
          "Buat konten user-generated content",
        ],
      },
    ],
    successStories: [
      "UMKM Kue Basah: Meningkat 300% penjualan dengan challenge TikTok",
      "Brand Skincare Lokal: Dapat 10.000 followers dalam 2 bulan lewat Reels",
    ],
  };

  const breadcrumbItems = [
    {
      label: "Pemasaran",
      href: "/pemasaran",
    },
    {
      label: "Hasil",
      isActive: true,
    },
  ];

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "3rem",
              height: "3rem",
              border: "3px solid #e5e7eb",
              borderTop: "3px solid #FDD741",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              margin: "0 auto 1rem",
            }}
          ></div>
          <p style={{ color: "#64748b" }}>Memuat hasil quiz...</p>
        </div>
        <style jsx>{`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#ffffff" }}>
      <div
        style={{
          background: "#111827",
          color: "#ffffff",
          padding: "6rem 1.5rem",
          textAlign: "center",
          position: "relative",
        }}
        className="result-header"
      >
        <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem" }}>
          <Breadcrumbs items={breadcrumbItems} />
        </div>

        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            margin: 0,
            color: "#ffffff",
            letterSpacing: "-0.02em",
          }}
          className="result-title"
        >
          Rekomendasi Pemasaran
        </h1>

        <div
          style={{
            display: "inline-block",
            backgroundColor: "#FDD741",
            color: "#111827",
            padding: "0.75rem 2rem",
            borderRadius: "20px",
            fontWeight: "600",
            fontSize: "1rem",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            marginTop: "1.5rem",
          }}
          className="archetype-badge"
        >
          Profil: {recommendation.archetype}
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            .result-header {
              padding: 2rem 1rem !important;
            }

            .back-button {
              position: static !important;
              margin-bottom: 1rem !important;
              align-self: flex-start !important;
            }

            .result-title {
              font-size: 1.875rem !important;
              margin-bottom: 1rem !important;
            }

            .archetype-badge {
              padding: 0.5rem 1.5rem !important;
              font-size: 0.9rem !important;
              margin-top: 1rem !important;
            }
          }

          @media (max-width: 480px) {
            .result-header {
              padding: 1.5rem 0.75rem !important;
            }

            .result-title {
              font-size: 1.5rem !important;
            }

            .back-text {
              display: none !important;
            }

            .archetype-badge {
              padding: 0.5rem 1rem !important;
              font-size: 0.85rem !important;
            }
          }
        `}</style>
      </div>

      <div style={{ minHeight: "100vh" }}>
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            paddingLeft: "24px",
            paddingRight: "24px",
            paddingTop: "40px",
            paddingBottom: "100px",
          }}
          className="main-container"
        >
          <div style={{ marginBottom: "3rem" }}>
            <SectionHeader
              icon={<Target size={24} style={{ color: "#C4A73B" }} />}
              title="Platform Prioritas"
            />
            <div style={{ paddingLeft: "0.5rem" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "1.5rem",
                  marginBottom: "1.5rem",
                }}
                className="platforms-grid"
              >
                {recommendation.priorityPlatforms.map((platform, index) => (
                  <PlatformCard key={index} name={platform} />
                ))}
              </div>
            </div>
          </div>

          <ContentIdeasSection contentIdeas={recommendation.contentIdeas} />

          <div style={{ marginBottom: "3rem" }}>
            <SectionHeader
              icon={<Settings size={24} style={{ color: "#C4A73B" }} />}
              title="Tools Gratis Pendukung"
            />
            <div style={{ paddingLeft: "0.5rem" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: "1.5rem",
                }}
                className="tools-grid"
              >
                {recommendation.tools.map((tool, index) => (
                  <ToolCard key={index} tool={tool} />
                ))}
              </div>
            </div>
          </div>

          <div style={{ marginBottom: "3rem" }}>
            <SectionHeader
              icon={<Calendar size={24} style={{ color: "#C4A73B" }} />}
              title="Rencana Aksi"
            />
            <div style={{ paddingLeft: "0.5rem" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                }}
                className="action-plan-container"
              >
                {recommendation.actionPlan.map((weekPlan, index) => (
                  <WeekPlan key={index} weekPlan={weekPlan} />
                ))}
              </div>
            </div>
          </div>

          <SuccessStoriesSection
            successStories={recommendation.successStories}
          />

          <div style={{ marginTop: "4rem", textAlign: "center" }}>
            <button
              style={{
                background: "#FDD741",
                color: "#111827",
                padding: "1.25rem 2.5rem",
                borderRadius: "20px",
                fontWeight: "600",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                boxShadow: "0 10px 15px -3px rgba(253, 215, 65, 0.4)",
                fontSize: "1.125rem",
              }}
              className="save-button"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#C4A73B";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 25px -5px rgba(253, 215, 65, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#FDD741";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 10px 15px -3px rgba(253, 215, 65, 0.4)";
              }}
            >
              <Download size={22} />
              <span className="save-text">Simpan</span>
            </button>
          </div>
        </div>

        <style jsx>{`
          @media (max-width: 1200px) {
            .main-container {
              padding-left: 20px !important;
              padding-right: 20px !important;
              padding-top: 30px !important;
            }
          }

          @media (max-width: 768px) {
            .main-container {
              padding-left: 16px !important;
              padding-right: 16px !important;
              padding-top: 20px !important;
              padding-bottom: 60px !important;
            }

            .platforms-grid {
              grid-template-columns: repeat(
                auto-fit,
                minmax(180px, 1fr)
              ) !important;
              gap: 1rem !important;
            }

            .tools-grid {
              grid-template-columns: repeat(
                auto-fit,
                minmax(250px, 1fr)
              ) !important;
              gap: 1rem !important;
            }

            .action-plan-container {
              gap: 1.5rem !important;
            }

            .save-button {
              padding: 1rem 2rem !important;
              font-size: 1rem !important;
            }
          }

          @media (max-width: 480px) {
            .main-container {
              padding-left: 12px !important;
              padding-right: 12px !important;
              padding-top: 16px !important;
              padding-bottom: 40px !important;
            }

            .platforms-grid {
              grid-template-columns: 1fr !important;
              gap: 0.75rem !important;
            }

            .tools-grid {
              grid-template-columns: 1fr !important;
              gap: 0.75rem !important;
            }

            .action-plan-container {
              gap: 1rem !important;
            }

            .save-button {
              padding: 0.875rem 1.5rem !important;
              font-size: 0.9rem !important;
            }

            .save-text {
              display: none !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default MarketingResultPage;
