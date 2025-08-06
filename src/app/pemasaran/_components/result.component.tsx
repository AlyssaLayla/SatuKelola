'use client';
import React, { useState } from 'react';
import { X, Download, CheckCircle, ExternalLink, Calendar, Star, Target, Lightbulb, Settings } from 'lucide-react';

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
  <div style={{ marginBottom: '2.5rem' }}>
    <h2 
      style={{
        fontSize: '1.25rem',
        fontWeight: 'bold',
        color: '#111827',
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}
    >
      {icon}
      {title}
    </h2>
    <div style={{ paddingLeft: '0.25rem' }}>
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
      border: '1px solid #e5e7eb',
      borderRadius: '0.75rem',
      padding: '1.25rem',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      backgroundColor: '#ffffff'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = '#fbbf24';
      e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
      e.currentTarget.style.transform = 'translateY(-2px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = '#e5e7eb';
      e.currentTarget.style.boxShadow = 'none';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
      <h3 style={{ fontWeight: 'bold', color: '#7c3aed', margin: 0 }}>
        {tool.name}
      </h3>
      <ExternalLink size={16} style={{ color: '#9ca3af', flexShrink: 0 }} />
    </div>
    <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0, lineHeight: '1.4' }}>
      {tool.desc}
    </p>
  </a>
);

// Week Plan Component
const WeekPlan = ({ weekPlan, index }: { weekPlan: { week: number; tasks: string[]; }; index: number }) => {
  const [checkedTasks, setCheckedTasks] = useState<boolean[]>(new Array(weekPlan.tasks.length).fill(false));

  const toggleTask = (taskIndex: number) => {
    const newCheckedTasks = [...checkedTasks];
    newCheckedTasks[taskIndex] = !newCheckedTasks[taskIndex];
    setCheckedTasks(newCheckedTasks);
  };

  return (
    <div 
      style={{
        borderLeft: '4px solid #7c3aed',
        paddingLeft: '1rem',
        paddingTop: '0.25rem',
        paddingBottom: '0.25rem'
      }}
    >
      <h3 style={{ fontWeight: 'bold', fontSize: '1.125rem', color: '#111827', marginBottom: '0.75rem' }}>
        Minggu {weekPlan.week}
      </h3>
      <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
        {weekPlan.tasks.map((task, taskIndex) => (
          <li 
            key={taskIndex} 
            style={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              marginBottom: '0.75rem',
              cursor: 'pointer'
            }}
            onClick={() => toggleTask(taskIndex)}
          >
            <div
              style={{
                width: '1.25rem',
                height: '1.25rem',
                border: '2px solid #7c3aed',
                borderRadius: '0.25rem',
                marginRight: '0.75rem',
                marginTop: '0.125rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: checkedTasks[taskIndex] ? '#7c3aed' : 'transparent',
                transition: 'all 0.3s ease',
                flexShrink: 0
              }}
            >
              {checkedTasks[taskIndex] && (
                <CheckCircle size={12} style={{ color: '#ffffff' }} />
              )}
            </div>
            <span 
              style={{ 
                color: '#374151',
                textDecoration: checkedTasks[taskIndex] ? 'line-through' : 'none',
                opacity: checkedTasks[taskIndex] ? 0.6 : 1,
                transition: 'all 0.3s ease'
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

// Main Marketing Result Component
const MarketingResult = ({ onClose }: { onClose: () => void }) => {
  // Dummy data hasil rekomendasi
  const recommendation: MarketingRecommendation = {
    archetype: "Content Creator",
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

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        zIndex: 50,
        backdropFilter: 'blur(4px)'
      }}
    >
      <div 
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '1.5rem',
          maxWidth: '56rem',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          position: 'relative'
        }}
      >
        {/* Header */}
        <div 
          style={{
            background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
            color: '#ffffff',
            padding: '2rem',
            borderRadius: '1.5rem 1.5rem 0 0',
            textAlign: 'center',
            position: 'relative'
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              borderRadius: '50%',
              width: '2.5rem',
              height: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <X size={20} />
          </button>

          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', margin: 0 }}>
            Rekomendasi Pemasaran Anda
          </h1>
          
          <div 
            style={{
              display: 'inline-block',
              backgroundColor: '#fbbf24',
              color: '#111827',
              padding: '0.5rem 1.5rem',
              borderRadius: '9999px',
              fontWeight: '600',
              fontSize: '0.875rem'
            }}
          >
            Profil: {recommendation.archetype}
          </div>

          <p style={{ marginTop: '1.5rem', opacity: 0.9, lineHeight: '1.6', margin: '1.5rem 0 0 0' }}>
            Berdasarkan jawaban Anda, kami telah menyusun strategi khusus untuk meningkatkan penjualan di platform digital
          </p>
        </div>

        {/* Content */}
        <div style={{ padding: '2rem' }}>
          {/* Platform Prioritas */}
          <Section 
            icon={<Target size={20} style={{ color: '#7c3aed' }} />}
            title="Platform Prioritas"
          >
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                marginBottom: '1rem'
              }}
            >
              {recommendation.priorityPlatforms.map((platform, index) => (
                <PlatformCard key={index} name={platform} />
              ))}
            </div>
            <p style={{ color: '#6b7280', fontSize: '0.875rem', margin: 0 }}>
              Fokus pada 1-2 platform ini terlebih dahulu untuk hasil maksimal
            </p>
          </Section>

          {/* Ide Konten */}
          <Section 
            icon={<Lightbulb size={20} style={{ color: '#7c3aed' }} />}
            title="Ide Konten Spesifik"
          >
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {recommendation.contentIdeas.map((idea, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div 
                    style={{
                      width: '1.5rem',
                      height: '1.5rem',
                      borderRadius: '50%',
                      backgroundColor: '#dcfce7',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '0.75rem',
                      marginTop: '0.125rem',
                      flexShrink: 0
                    }}
                  >
                    <span style={{ color: '#16a34a', fontWeight: 'bold', fontSize: '0.75rem' }}>
                      {index + 1}
                    </span>
                  </div>
                  <p style={{ color: '#374151', margin: 0, lineHeight: '1.5' }}>{idea}</p>
                </li>
              ))}
            </ul>
          </Section>

          {/* Tools */}
          <Section 
            icon={<Settings size={20} style={{ color: '#7c3aed' }} />}
            title="Tools Gratis Pendukung"
          >
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1rem'
              }}
            >
              {recommendation.tools.map((tool, index) => (
                <ToolCard key={index} tool={tool} />
              ))}
            </div>
          </Section>

          {/* Action Plan */}
          <Section 
            icon={<Calendar size={20} style={{ color: '#7c3aed' }} />}
            title="Rencana Aksi 30 Hari"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {recommendation.actionPlan.map((weekPlan, index) => (
                <WeekPlan key={index} weekPlan={weekPlan} index={index} />
              ))}
            </div>
          </Section>

          {/* Success Stories */}
          <Section 
            icon={<Star size={20} style={{ color: '#7c3aed' }} />}
            title="Kisah Sukses UMKM"
          >
            <div 
              style={{
                backgroundColor: '#fffbeb',
                borderLeft: '4px solid #fbbf24',
                padding: '1.5rem',
                borderRadius: '0.5rem'
              }}
            >
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {recommendation.successStories.map((story, index) => (
                  <li key={index} style={{ display: 'flex', marginBottom: '0.75rem' }}>
                    <span style={{ marginRight: '0.5rem', color: '#f59e0b', fontWeight: 'bold' }}>•</span>
                    <span style={{ color: '#92400e', lineHeight: '1.5' }}>{story}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Section>

          {/* CTA */}
          <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
            <button 
              style={{
                background: 'linear-gradient(to right, #7c3aed, #3b82f6)',
                color: '#ffffff',
                padding: '1rem 2rem',
                borderRadius: '0.75rem',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #6d28d9, #2563eb)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(to right, #7c3aed, #3b82f6)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              }}
            >
              <Download size={20} />
              Simpan sebagai PDF
            </button>
            <p style={{ marginTop: '1rem', color: '#6b7280', fontSize: '0.875rem', margin: '1rem 0 0 0' }}>
              Mulai implementasi hari ini dan pantau perkembangannya di dashboard SatuKelola
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingResult;