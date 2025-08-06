'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft, Download, CheckCircle, ExternalLink, Calendar, Star, Target, Lightbulb, Settings, Home } from 'lucide-react';

// Types
type MarketingRecommendation = {
  archetype: string;
  priorityPlatforms: string[];
  contentIdeas: string[];
  tools: { name: string; link: string; desc: string; }[];
  actionPlan: { week: number; tasks: string[]; }[];
  successStories: string[];
};

// Section Component
const Section = ({ 
  icon, 
  title, 
  children 
}: { 
  icon: React.ReactNode;
  title: string; 
  children: React.ReactNode;
}) => (
  <div style={{ marginBottom: '3rem' }}>
    <h2 
      style={{
        fontSize: '1.5rem',
        fontWeight: 'black',
        color: '#111827',
        marginBottom: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem'
      }}
    >
      {icon}
      {title}
    </h2>
    <div style={{ paddingLeft: '0.5rem' }}>
      {children}
    </div>
  </div>
);

// Platform Card Component
const PlatformCard = ({ name }: { name: string }) => (
  <div 
    style={{
      display: 'flex',
      alignItems: 'center',
      padding: '1rem',
      backgroundColor: '#f9fafb',
      borderRadius: '0.75rem',
      border: '1px solid #e5e7eb',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = '#f3f4f6';
      e.currentTarget.style.borderColor = '#fbbf24';
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = '#f9fafb';
      e.currentTarget.style.borderColor = '#e5e7eb';
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }}
  >
    <div 
      style={{
        width: '3rem',
        height: '3rem',
        backgroundColor: '#fbbf24',
        borderRadius: '0.5rem',
        marginRight: '0.75rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        fontWeight: 'bold'
      }}
    >
      {name.charAt(0)}
    </div>
    <span style={{ fontWeight: '500', color: '#374151' }}>{name}</span>
  </div>
);

// Tool Card Component
const ToolCard = ({ tool }: { tool: { name: string; link: string; desc: string; } }) => (
  <a
    href={tool.link}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'block',
      border: '2px solid #fde68a',
      borderRadius: '1rem',
      padding: '1.5rem',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = '#fbbf24';
      e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.backgroundColor = '#fffbeb';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = '#fde68a';
      e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.backgroundColor = '#ffffff';
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
      <h3 style={{ fontWeight: 'bold', color: '#f59e0b', margin: 0, fontSize: '1.125rem' }}>
        {tool.name}
      </h3>
      <ExternalLink size={18} style={{ color: '#9ca3af', flexShrink: 0 }} />
    </div>
    <p style={{ fontSize: '0.9375rem', color: '#6b7280', margin: 0, lineHeight: '1.5' }}>
      {tool.desc}
    </p>
  </a>
);

// Week Plan Component
const WeekPlan = ({ weekPlan }: { weekPlan: { week: number; tasks: string[]; } }) => {
  const [checkedTasks, setCheckedTasks] = useState<boolean[]>(new Array(weekPlan.tasks.length).fill(false));

  const toggleTask = (taskIndex: number) => {
    const newCheckedTasks = [...checkedTasks];
    newCheckedTasks[taskIndex] = !newCheckedTasks[taskIndex];
    setCheckedTasks(newCheckedTasks);
  };

  return (
    <div 
      style={{
        borderLeft: '4px solid #fbbf24',
        paddingLeft: '1.5rem',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        backgroundColor: '#fffbeb',
        borderRadius: '0 0.75rem 0.75rem 0',
        marginLeft: '0.5rem'
      }}
    >
      <h3 style={{ fontWeight: 'black', fontSize: '1.25rem', color: '#111827', marginBottom: '1rem' }}>
        Minggu {weekPlan.week}
      </h3>
      <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
        {weekPlan.tasks.map((task, taskIndex) => (
          <li 
            key={taskIndex} 
            style={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              marginBottom: '1rem',
              cursor: 'pointer',
              padding: '0.5rem',
              borderRadius: '0.5rem',
              transition: 'all 0.3s ease'
            }}
            onClick={() => toggleTask(taskIndex)}
            onMouseEnter={(e) => {
              if (!checkedTasks[taskIndex]) {
                e.currentTarget.style.backgroundColor = '#fef3c7';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <div
              style={{
                width: '1.5rem',
                height: '1.5rem',
                border: '2px solid #fbbf24',
                borderRadius: '0.375rem',
                marginRight: '0.75rem',
                marginTop: '0.125rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: checkedTasks[taskIndex] ? '#fbbf24' : 'transparent',
                transition: 'all 0.3s ease',
                flexShrink: 0
              }}
            >
              {checkedTasks[taskIndex] && (
                <CheckCircle size={14} style={{ color: '#ffffff' }} />
              )}
            </div>
            <span 
              style={{ 
                color: '#374151',
                textDecoration: checkedTasks[taskIndex] ? 'line-through' : 'none',
                opacity: checkedTasks[taskIndex] ? 0.6 : 1,
                transition: 'all 0.3s ease',
                fontSize: '1rem',
                lineHeight: '1.5'
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

  // Load quiz data from localStorage
  useEffect(() => {
    try {
      const storedData = localStorage.getItem('quizResult');
      if (storedData) {
        setQuizData(JSON.parse(storedData));
      }
    } catch (error) {
      console.error('Error loading quiz data:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Dummy data hasil rekomendasi
  const recommendation: MarketingRecommendation = {
    archetype: quizData?.archetype || "Content Creator",
    priorityPlatforms: ["TikTok", "Instagram Reels"],
    contentIdeas: [
      "Buat 3 video 'How to use' produk Anda dalam 1 minggu",
      "Lakukan live session Q&A setiap Jumat jam 4 sore",
      "Buat challenge dengan hashtag khusus brand Anda"
    ],
    tools: [
      { name: "CapCut", link: "https://www.capcut.com", desc: "Edit video mudah di HP" },
      { name: "Canva", link: "https://canva.com", desc: "Desain grafis instan" },
      { name: "InShot", link: "https://inshot.com", desc: "Tambahkan teks & musik ke video" }
    ],
    actionPlan: [
      {
        week: 1,
        tasks: [
          "Optimalkan bio TikTok & Instagram",
          "Buat 3 konten dasar produk",
          "Follow 10 akun kompetitor untuk riset"
        ]
      },
      {
        week: 2,
        tasks: [
          "Posting 1 reel/reels setiap hari",
          "Lakukan 1 live session",
          "Gunakan 5 hashtag relevan per postingan"
        ]
      },
      {
        week: 3,
        tasks: [
          "Kolaborasi dengan 1 micro-influencer",
          "Analisis insight mingguan",
          "Buat konten user-generated content"
        ]
      }
    ],
    successStories: [
      "UMKM Kue Basah: Meningkat 300% penjualan dengan challenge TikTok",
      "Brand Skincare Lokal: Dapat 10.000 followers dalam 2 bulan lewat Reels"
    ]
  };

  if (loading) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#f9fafb'
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            width: '3rem', 
            height: '3rem', 
            border: '3px solid #e5e7eb', 
            borderTop: '3px solid #7c3aed',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 1rem'
          }}></div>
          <p style={{ color: '#6b7280' }}>Memuat hasil quiz...</p>
        </div>
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Navigation */}
      <nav style={{ 
        backgroundColor: '#ffffff', 
        padding: '1rem 0',
        borderBottom: '1px solid #e5e7eb',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button
            onClick={() => window.history.back()}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              backgroundColor: 'transparent',
              border: '1px solid #e5e7eb',
              borderRadius: '0.5rem',
              color: '#374151',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f3f4f6';
              e.currentTarget.style.borderColor = '#d1d5db';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = '#e5e7eb';
            }}
          >
            <ArrowLeft size={16} />
            Kembali
          </button>

          <button
            onClick={() => window.location.href = '/'}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              backgroundColor: 'transparent',
              border: '1px solid #e5e7eb',
              borderRadius: '0.5rem',
              color: '#374151',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f3f4f6';
              e.currentTarget.style.borderColor = '#d1d5db';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.borderColor = '#e5e7eb';
            }}
          >
            <Home size={16} />
            Home
          </button>
        </div>
      </nav>

      {/* Header */}
      <div 
        style={{
          background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
          color: '#111827',
          padding: '3rem 1.5rem',
          textAlign: 'center'
        }}
      >
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'black', marginBottom: '1rem', margin: 0 }}>
          Rekomendasi Pemasaran Anda
        </h1>
        
        <div 
          style={{
            display: 'inline-block',
            backgroundColor: '#ffffff',
            color: '#111827',
            padding: '0.75rem 2rem',
            borderRadius: '9999px',
            fontWeight: '700',
            fontSize: '1rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}
        >
          Profil: {recommendation.archetype}
        </div>

        <p style={{ marginTop: '1.5rem', opacity: 0.8, lineHeight: '1.6', margin: '1.5rem auto 0', maxWidth: '42rem', fontSize: '1.125rem' }}>
          Berdasarkan jawaban Anda, kami telah menyusun strategi khusus untuk meningkatkan penjualan di platform digital
        </p>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '3rem 1.5rem' }}>
        {/* Platform Prioritas */}
        <Section 
          icon={<Target size={24} style={{ color: '#f59e0b' }} />}
          title="Platform Prioritas"
        >
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              marginBottom: '1.5rem'
            }}
          >
            {recommendation.priorityPlatforms.map((platform, index) => (
              <PlatformCard key={index} name={platform} />
            ))}
          </div>
          <p style={{ color: '#6b7280', fontSize: '1rem', margin: 0, lineHeight: '1.6' }}>
            Fokus pada 1-2 platform ini terlebih dahulu untuk hasil maksimal
          </p>
        </Section>

        {/* Ide Konten */}
        <Section 
          icon={<Lightbulb size={24} style={{ color: '#f59e0b' }} />}
          title="Ide Konten Spesifik"
        >
          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
            {recommendation.contentIdeas.map((idea, index) => (
              <li key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div 
                  style={{
                    width: '2rem',
                    height: '2rem',
                    borderRadius: '50%',
                    backgroundColor: '#fef3c7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    marginTop: '0.125rem',
                    flexShrink: 0,
                    border: '2px solid #fbbf24'
                  }}
                >
                  <span style={{ color: '#f59e0b', fontWeight: 'bold', fontSize: '0.875rem' }}>
                    {index + 1}
                  </span>
                </div>
                <p style={{ color: '#374151', margin: 0, lineHeight: '1.6', fontSize: '1rem' }}>{idea}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* Tools */}
        <Section 
          icon={<Settings size={24} style={{ color: '#f59e0b' }} />}
          title="Tools Gratis Pendukung"
        >
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}
          >
            {recommendation.tools.map((tool, index) => (
              <ToolCard key={index} tool={tool} />
            ))}
          </div>
        </Section>

        {/* Action Plan */}
        <Section 
          icon={<Calendar size={24} style={{ color: '#f59e0b' }} />}
          title="Rencana Aksi 30 Hari"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {recommendation.actionPlan.map((weekPlan, index) => (
              <WeekPlan key={index} weekPlan={weekPlan} />
            ))}
          </div>
        </Section>

        {/* Success Stories */}
        <Section 
          icon={<Star size={24} style={{ color: '#f59e0b' }} />}
          title="Kisah Sukses UMKM"
        >
          <div 
            style={{
              backgroundColor: '#fffbeb',
              borderLeft: '4px solid #fbbf24',
              padding: '2rem',
              borderRadius: '0.75rem',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
            }}
          >
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {recommendation.successStories.map((story, index) => (
                <li key={index} style={{ display: 'flex', marginBottom: '1rem' }}>
                  <span style={{ marginRight: '0.75rem', color: '#f59e0b', fontWeight: 'bold', fontSize: '1.25rem' }}>•</span>
                  <span style={{ color: '#92400e', lineHeight: '1.6', fontSize: '1rem' }}>{story}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* CTA */}
        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
          <button 
            style={{
              background: 'linear-gradient(to right, #fbbf24, #f59e0b)',
              color: '#111827',
              padding: '1.25rem 2.5rem',
              borderRadius: '9999px',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              boxShadow: '0 10px 15px -3px rgba(251, 191, 36, 0.4)',
              fontSize: '1.125rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(to right, #f59e0b, #d97706)';
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(251, 191, 36, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(to right, #fbbf24, #f59e0b)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(251, 191, 36, 0.4)';
            }}
          >
            <Download size={22} />
            Simpan sebagai PDF
          </button>
          <p style={{ marginTop: '1.5rem', color: '#6b7280', fontSize: '1rem', margin: '1.5rem 0 0 0', lineHeight: '1.6' }}>
            Mulai implementasi hari ini dan pantau perkembangannya di dashboard SatuKelola
          </p>
        </div>
      </div>
    </div>
  );
};

export default MarketingResultPage;