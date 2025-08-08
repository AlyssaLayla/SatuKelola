"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Download,
  CheckCircle,
  ExternalLink,
  Calendar,
  Star,
  Target,
  Lightbulb,
  Settings,
} from "lucide-react";

// Types
type MarketingRecommendation = {
  archetype: string;
  priorityPlatforms: string[];
  contentIdeas: string[];
  tools: { name: string; link: string; desc: string }[];
  actionPlan: { week: number; tasks: string[] }[];
  successStories: string[];
};

// Section Component
const Section = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <div style={{ marginBottom: "3rem" }}>
    <h2
      style={{
        fontSize: "1.5rem",
        fontWeight: "black",
        color: "#20273A", // secondary/300
        marginBottom: "1.5rem",
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
      }}
    >
      {icon}
      {title}
    </h2>
    <div style={{ paddingLeft: "0.5rem" }}>{children}</div>
  </div>
);

// Enhanced Platform Card Component with card-like styling
const PlatformCard = ({ name }: { name: string }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      padding: "1.5rem",
      backgroundColor: "#fff", // frame/100
      borderRadius: "0.75rem",
      border: "1px solid #D4D4D4", // frame/200
      transition: "all 0.3s ease",
      cursor: "pointer",
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = "#FEF2C0"; // primary/100
      e.currentTarget.style.borderColor = "#FDD741"; // primary/300
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = "#fff"; // frame/100
      e.currentTarget.style.borderColor = "#D4D4D4"; // frame/200
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)";
    }}
  >
    <div
      style={{
        width: "3rem",
        height: "3rem",
        backgroundColor: "#FDD741", // primary/300
        borderRadius: "0.5rem",
        marginRight: "0.75rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff",
        fontWeight: "bold",
      }}
    >
      {name.charAt(0)}
    </div>
    <span style={{ fontWeight: "500", color: "#20273A" }}>{name}</span>
  </div>
);

// Enhanced Tool Card Component with card-like styling
const ToolCard = ({
  tool,
}: {
  tool: { name: string; link: string; desc: string };
}) => (
  <a
    href={tool.link}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "block",
      border: "2px solid #FEE480", // primary/200
      borderRadius: "0.75rem",
      padding: "1.5rem",
      transition: "all 0.3s ease",
      textDecoration: "none",
      backgroundColor: "#fff", // frame/100
      boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = "#FDD741"; // primary/300
      e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.backgroundColor = "#FEF2C0"; // primary/100
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "#FEE480"; // primary/200
      e.currentTarget.style.boxShadow = "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)";
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.backgroundColor = "#fff"; // frame/100
    }}
  >
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
      <h3 style={{ fontWeight: "600", color: "#D3B336", margin: 0, fontSize: "1.125rem" }}>
        {tool.name}
      </h3>
      <ExternalLink size={18} style={{ color: "#90939D", flexShrink: 0 }} />
    </div>
    <p style={{ fontSize: "0.875rem", color: "#90939D", margin: 0, lineHeight: "1.5" }}>
      {tool.desc}
    </p>
  </a>
);

// Enhanced Week Plan Component with progress tracking
const WeekPlan = ({
  weekPlan,
}: {
  weekPlan: { week: number; tasks: string[] };
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
        borderLeft: "4px solid #FDD741", // primary/300
        paddingLeft: "1.5rem",
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
        paddingRight: "1.5rem",
        backgroundColor: "#FFFEFA", // primary/100
        borderRadius: "0.75rem",
        marginLeft: "0.5rem",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      }}
    >
      <div style={{ marginBottom: "1.5rem" }}>
        <h3 style={{ fontWeight: "700", fontSize: "1.25rem", color: "#20273A", marginBottom: "1rem" }}>
          Minggu {weekPlan.week}
        </h3>
        
        {/* Progress Section */}
        <div style={{ marginBottom: "1rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
            <span style={{ fontSize: "0.875rem", color: "#90939D" }}>
              Progress: {completedTasks}/{weekPlan.tasks.length}
            </span>
            <span style={{ fontSize: "0.875rem", color: "#D3B336", fontWeight: "600" }}>
              {Math.round(progressPercentage)}%
            </span>
          </div>
          
          {/* Custom Progress Bar */}
          <div style={{
            width: "100%",
            height: "8px",
            backgroundColor: "#FEE480", // primary/200
            borderRadius: "4px",
            overflow: "hidden"
          }}>
            <div style={{
              height: "100%",
              backgroundColor: "#FDD741", // primary/300
              width: `${progressPercentage}%`,
              transition: "width 0.3s ease",
              borderRadius: "4px"
            }} />
          </div>
        </div>
      </div>

      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
        {weekPlan.tasks.map((task, taskIndex) => (
          <li
            key={taskIndex}
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "1rem",
              cursor: "pointer",
              padding: "0.75rem",
              borderRadius: "0.5rem",
              transition: "all 0.3s ease",
              backgroundColor: "transparent"
            }}
            onClick={() => toggleTask(taskIndex)}
            onMouseEnter={(e) => {
              if (!checkedTasks[taskIndex]) {
                e.currentTarget.style.backgroundColor = "#FEE480"; // primary/200
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            {/* Custom Checkbox */}
            <div
              style={{
                width: "1.25rem",
                height: "1.25rem",
                border: "2px solid #FDD741", // primary/300
                borderRadius: "0.25rem",
                marginRight: "0.75rem",
                marginTop: "0.125rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: checkedTasks[taskIndex] ? "#FDD741" : "transparent", // primary/300
                transition: "all 0.3s ease",
                flexShrink: 0,
                cursor: "pointer"
              }}
            >
              {checkedTasks[taskIndex] && (
                <CheckCircle size={12} style={{ color: "#ffffff" }} />
              )}
            </div>
            <span
              style={{
                color: "#20273A", // secondary/300
                textDecoration: checkedTasks[taskIndex] ? "line-through" : "none",
                opacity: checkedTasks[taskIndex] ? 0.6 : 1,
                transition: "all 0.3s ease",
                fontSize: "1rem",
                lineHeight: "1.5",
              }}
            >
              {task}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Main Marketing Result Page Component
const MarketingResultPage = () => {
  const [quizData, setQuizData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Load quiz data from in-memory storage (localStorage not available in Claude artifacts)
  useEffect(() => {
    // Simulating loading without localStorage
    setTimeout(() => {
      setQuizData({ archetype: "Content Creator" });
      setLoading(false);
    }, 1000);
  }, []);

  // Dummy data hasil rekomendasi
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

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff", // frame/100
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              width: "3rem",
              height: "3rem",
              border: "3px solid #D4D4D4", // frame/200
              borderTop: "3px solid #D3B336", // primary/400
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              margin: "0 auto 1rem",
            }}
          ></div>
          <p style={{ color: "#90939D" }}>Memuat hasil quiz...</p>
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
    <div style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
      {/* Header */}
      <div
        style={{
          background: "#20273A", // secondary/300 - dark background
          color: "#fff", // white text
          padding: "3rem 1.5rem",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Back Button inside header */}
        <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem" }}>
          <button
            onClick={() => window.history.back()}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1.25rem",
              backgroundColor: "rgba(255, 255, 255, 0.1)", // semi-transparent white
              border: "1px solid rgba(255, 255, 255, 0.3)", // semi-transparent border
              borderRadius: "10px",
              color: "#fff", // white text
              cursor: "pointer",
              transition: "all 0.3s ease",
              backdropFilter: "blur(10px)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor =
                "rgba(255, 255, 255, 0.2)"; // lighter on hover
              e.currentTarget.style.borderColor = "#FDD741"; // primary/300 border on hover
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor =
                "rgba(255, 255, 255, 0.1)";
              e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <ArrowLeft size={16} />
            Kembali
          </button>
        </div>

        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "black",
            margin: 0,
            color: "#fff",
          }}
        >
          Rekomendasi Pemasaran
        </h1>

        <div 
          style={{
            display: 'inline-block',
            backgroundColor: '#FDD741', // primary/300
            color: '#20273A', // secondary/300
            padding: '0.75rem 2rem',
            borderRadius: '20px',
            fontWeight: '700',
            fontSize: '1rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            marginTop: '1.5rem',
          }}
        >
          Profil: {recommendation.archetype}
        </div>
      </div>

      {/* Content */}
      <div
        style={{ maxWidth: "56rem", margin: "0 auto", padding: "3rem 1.5rem" }}
      >
        {/* Platform Prioritas */}
        <Section
          icon={<Target size={24} style={{ color: "#D3B336" }} />}
          title="Platform Prioritas"
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            {recommendation.priorityPlatforms.map((platform, index) => (
              <PlatformCard key={index} name={platform} />
            ))}
          </div>
        </Section>

        {/* Ide Konten */}
        <Section
          icon={<Lightbulb size={24} style={{ color: "#D3B336" }} />}
          title="Ide Konten Spesifik"
        >
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {recommendation.contentIdeas.map((idea, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    width: "2rem",
                    height: "2rem",
                    borderRadius: "50%",
                    backgroundColor: "#FEF2C0", // primary/100
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "1rem",
                    marginTop: "0.125rem",
                    flexShrink: 0,
                    border: "2px solid #FDD741", // primary/300
                  }}
                >
                  <span
                    style={{
                      color: "#D3B336",
                      fontWeight: "bold",
                      fontSize: "0.875rem",
                    }}
                  >
                    {index + 1}
                  </span>
                </div>
                <p
                  style={{
                    color: "#20273A",
                    margin: 0,
                    lineHeight: "1.6",
                    fontSize: "1rem",
                  }}
                >
                  {idea}
                </p>
              </li>
            ))}
          </ul>
        </Section>

        {/* Tools */}
        <Section
          icon={<Settings size={24} style={{ color: "#D3B336" }} />}
          title="Tools Gratis Pendukung"
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {recommendation.tools.map((tool, index) => (
              <ToolCard key={index} tool={tool} />
            ))}
          </div>
        </Section>

        {/* Action Plan */}
        <Section
          icon={<Calendar size={24} style={{ color: "#D3B336" }} />}
          title="Rencana Aksi"
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            {recommendation.actionPlan.map((weekPlan, index) => (
              <WeekPlan key={index} weekPlan={weekPlan} />
            ))}
          </div>
        </Section>

        {/* Success Stories */}
        <Section
          icon={<Star size={24} style={{ color: "#D3B336" }} />}
          title="Kisah Sukses UMKM"
        >
          <div
            style={{
              backgroundColor: "#FFFEFA", // primary/100
              borderLeft: "4px solid #FDD741", // primary/300
              padding: "2rem",
              borderRadius: "0.75rem",
              boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
            }}
          >
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {recommendation.successStories.map((story, index) => (
                <li
                  key={index}
                  style={{ display: "flex", marginBottom: "1rem" }}
                >
                  <span
                    style={{
                      marginRight: "0.75rem",
                      color: "#D3B336",
                      fontWeight: "bold",
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
                  >
                    {story}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* CTA */}
        <div style={{ marginTop: "4rem", textAlign: "center" }}>
          <button
            style={{
              background: "#FDD741", // primary/300 to primary/400
              color: "#000", // frame/100
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
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#D3B336"; // primary/400 to primary/500
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow =
                "0 20px 25px -5px rgba(253, 215, 65, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#FDD741"; // primary/300 to primary/400
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 10px 15px -3px rgba(253, 215, 65, 0.4)";
            }}
          >
            <Download size={22} />
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

export default MarketingResultPage;