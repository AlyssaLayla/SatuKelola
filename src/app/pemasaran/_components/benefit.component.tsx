"use client";
import React, { useState, useEffect } from "react";

const BenefitsSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  const benefits = [
    {
      id: 1,
      title: "Hemat Waktu",
      description: "Gak perlu bingung lagi harus mulai darimana!",
      image: "pemasaran-card1.png",
      delay: "0s",
    },
    {
      id: 2,
      title: "Maksimalkan Potensi",
      description: "Bantu kamu tampil standout di platform yang paling cocok",
      image: "pemasaran-card2.png",
      delay: "0.2s",
    },
    {
      id: 3,
      title: "Tepat Sasaran",
      description: "Rekomendasi sesuai gaya dan kekuatan kamu",
      image: "pemasaran-card3.png",
      delay: "0.4s",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleCards([0, 1, 2]);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      style={{
        paddingTop: "80px",
        paddingBottom: "80px",
        backgroundColor: "#f9fafb",
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
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              fontWeight: "900",
              color: "#000",
              marginBottom: "16px",
              lineHeight: "1.1",
            }}
          >
            Apa Yang Kamu Dapatkan?
          </h2>
        </div>

        {/* Benefits Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
            margin: "0 auto",
          }}
        >
          {benefits.map((benefit, index) => (
              <div
                key={benefit.id}
                className={`benefit-card group cursor-pointer transform transition-all duration-700 ${
                  visibleCards.includes(index) 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-12 opacity-0'
                }`}
                style={{
                  animationDelay: benefit.delay,
                  transitionDelay: benefit.delay
                }}
              >
                <div style={{
                  background: 'linear-gradient(135deg, #fde047, #facc15, #eab308)',
                  borderRadius: '24px',
                  padding: '32px',
                  height: '100%',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                  transition: 'all 0.5s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }} className="hover:shadow-2xl hover:-translate-y-3 hover:scale-105">
                  {/* Image Container */}
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
                    <div style={{ position: 'relative' }}>
                      <img
                        src={benefit.image}
                        alt={benefit.title}
                        style={{
                          width: '128px',
                          height: '128px',
                          objectFit: 'contain',
                          filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1))',
                          transition: 'transform 0.5s ease'
                        }}
                        className="group-hover:scale-110 group-hover:rotate-3"
                      />
                      
                      {/* Floating animation for image */}
                      <div 
                        style={{
                          position: 'absolute',
                          inset: '0',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          animation: `float-${benefit.id} 4s ease-in-out infinite`
                        }}
                      ></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ textAlign: 'center' }}>
                    <h3 style={{
                      fontSize: '1.75rem',
                      fontWeight: '700',
                      color: '#000',
                      marginBottom: '16px',
                      lineHeight: '1.2',
                      transition: 'color 0.3s ease'
                    }} className="group-hover:text-gray-800">
                      {benefit.title}
                    </h3>
                    <p style={{
                      color: '#374151',
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      padding: '0 8px',
                      transition: 'color 0.3s ease'
                    }} className="group-hover:text-gray-600">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Decorative elements */}
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    width: '12px',
                    height: '12px',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    borderRadius: '50%',
                    transition: 'opacity 0.3s ease'
                  }} className="group-hover:opacity-60"></div>
                  <div style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '16px',
                    width: '8px',
                    height: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    transition: 'opacity 0.3s ease'
                  }} className="group-hover:opacity-50"></div>
                </div>
              </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float-1 {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.1;
          }
          25% { 
            transform: translateY(-4px) rotate(1deg); 
            opacity: 0.15;
          }
          50% { 
            transform: translateY(-8px) rotate(2deg); 
            opacity: 0.2;
          }
          75% { 
            transform: translateY(-4px) rotate(1deg); 
            opacity: 0.15;
          }
        }
        
        @keyframes float-2 {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.1;
          }
          25% { 
            transform: translateY(-5px) rotate(-1deg); 
            opacity: 0.15;
          }
          50% { 
            transform: translateY(-10px) rotate(-2deg); 
            opacity: 0.2;
          }
          75% { 
            transform: translateY(-5px) rotate(-1deg); 
            opacity: 0.15;
          }
        }
        
        @keyframes float-3 {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.1;
          }
          25% { 
            transform: translateY(-3px) rotate(0.5deg); 
            opacity: 0.15;
          }
          50% { 
            transform: translateY(-6px) rotate(1deg); 
            opacity: 0.2;
          }
          75% { 
            transform: translateY(-3px) rotate(0.5deg); 
            opacity: 0.15;
          }
        }

        .benefit-card {
          perspective: 1000px;
        }

        .benefit-card:hover {
          transform-style: preserve-3d;
        }

        .benefit-card:nth-child(1):hover {
          transform: translateY(-12px) rotateY(-5deg) rotateX(5deg);
        }

        .benefit-card:nth-child(2):hover {
          transform: translateY(-12px) rotateY(0deg) rotateX(3deg);
        }

        .benefit-card:nth-child(3):hover {
          transform: translateY(-12px) rotateY(5deg) rotateX(5deg);
        }

        @media (max-width: 1024px) {
          .benefit-card:nth-child(1):hover,
          .benefit-card:nth-child(2):hover,
          .benefit-card:nth-child(3):hover {
            transform: translateY(-8px) scale(1.02);
          }
        }
      `}</style>
    </section>
  );
};

export default BenefitsSection;
