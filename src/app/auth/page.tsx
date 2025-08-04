"use client";

import { useState } from "react";
import Image from "next/image";
import LoginForm from "./_components/login.component";
import RegisterForm from "./_components/register.component";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTransition = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    // Tunggu sampai overlay menutup penuh baru ganti form (800ms)
    setTimeout(() => {
      setIsLogin(!isLogin);
      // Tunggu sebentar lagi baru buka overlay (400ms)
      setTimeout(() => {
        setIsTransitioning(false);
      }, 400);
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative overflow-hidden">
      {/* BLUE TRANSITION OVERLAY */}
      <div
        className={`absolute left-0 top-0 bottom-0 z-50 transition-all ease-in-out duration-700 w-full lg:w-1/2 ${
          isTransitioning
            ? "translate-y-0"
            : "translate-y-full"
        }`}
        style={{
          backgroundColor: "#20273A",
        }}
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center px-4 sm:px-8">
            <h2
              className={`text-xl sm:text-2xl lg:text-3xl font-bold transition-all duration-500 ${
                isTransitioning
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                color: "white",
                marginBottom: "16px",
              }}
            >
              Memulai pengalaman yang lebih baik...
            </h2>

            <p
              className={`text-sm sm:text-base lg:text-lg mt-4 transition-all duration-700 ${
                isTransitioning
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{
                color: "white",
              }}
            >
              SatuKelola - Kelola Semua Kebutuhan Anda
            </p>
          </div>
        </div>

        {/* Decorative Elements - Responsive positioning */}
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-4 sm:w-6 h-4 sm:h-6 bg-white rounded-full opacity-20 animate-bounce"></div>
        <div
          className="absolute bottom-16 sm:bottom-32 left-8 sm:left-16 w-6 sm:w-8 h-6 sm:h-8 bg-white rounded-full opacity-15 animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-5 sm:left-10 w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full opacity-30 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Left Side - Form */}
      <div
        className="flex-1 min-h-screen lg:min-h-auto flex items-center justify-center relative z-10 order-1 lg:order-none"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="w-full max-w-lg px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
          {/* Forms */}
          <div className="relative">
            <div
              className={`transition-all duration-500 ${
                isLogin
                  ? "opacity-100"
                  : "opacity-0 absolute inset-0 pointer-events-none"
              }`}
            >
              <LoginForm />
            </div>

            <div
              className={`transition-all duration-500 ${
                !isLogin
                  ? "opacity-100"
                  : "opacity-0 absolute inset-0 pointer-events-none"
              }`}
            >
              <RegisterForm />
            </div>
          </div>

          {/* Transition Button - Always at Bottom */}
          <div className="mt-6 sm:mt-8">
            <div
              style={{
                backgroundColor: "#20273A",
                color: "white",
                padding: "1rem 1.5rem",
                borderRadius: "25px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                textAlign: "center",
              }}
            >
              <p className="text-sm sm:text-base mb-2">
                {isLogin ? "Belum memiliki akun?" : "Sudah memiliki akun?"}
              </p>
              <button
                onClick={handleTransition}
                disabled={isTransitioning}
                className={`w-full transition-all duration-300 ${
                  isTransitioning
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:scale-105"
                }`}
                style={{
                  backgroundColor: "#FDD741",
                  color: "#000",
                  border: "none",
                  borderRadius: "15px",
                  padding: "0.5rem 1.5rem",
                  fontSize: "0.85rem",
                  fontWeight: "600",
                  cursor: isTransitioning ? "not-allowed" : "pointer",
                }}
              >
                {isLogin ? "Daftar di sini" : "Masuk di sini"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Logo dan Illustration */}
      <div
        className="flex-1 flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: "#FDD741" }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/20 to-yellow-500/20"></div>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
            }}
          ></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center space-y-12 px-8 h-full">
          {/* Shopping Illustration */}
          <div className="transform hover:scale-105 transition-all duration-500 hover:rotate-1">
            <div className="relative">
              <Image
                src="/img/logo-shopping.png"
                alt="Shopping Illustration"
                width={400}
                height={400}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="drop-shadow-2xl hover:drop-shadow-3xl transition-all duration-300"
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "400px",
                  minWidth: "300px",
                  objectFit: "contain",
                  borderRadius: "12px",
                }}
              />
              <div className="absolute -inset-4 bg-white/5 rounded-xl animate-pulse"></div>
            </div>
          </div>

          {/* Logo */}
          <div className="transform hover:scale-105 transition-all duration-300">
            <Image
              src="/img/logo-light.png"
              alt="Satu Kelola Logo"
              width={350}
              height={150}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              className="drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "350px",
                minWidth: "250px",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>

      {/* Decorative Elements - Responsive positioning */}
      <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full opacity-20 animate-bounce"></div>
      <div
        className="absolute bottom-16 sm:bottom-32 right-8 sm:right-16 w-4 sm:w-6 h-4 sm:h-6 bg-white rounded-full opacity-15 animate-bounce"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-5 sm:left-10 w-2 h-2 bg-white rounded-full opacity-25 animate-bounce"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute top-16 sm:top-32 right-16 sm:right-32 w-2 sm:w-3 h-2 sm:h-3 bg-white rounded-full opacity-30 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-10 sm:bottom-20 left-16 sm:left-32 w-3 sm:w-5 h-3 sm:h-5 bg-white rounded-full opacity-20 animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>
    </div>
  );
}