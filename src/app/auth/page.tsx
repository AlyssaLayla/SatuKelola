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

    setTimeout(() => {
      setIsLogin(!isLogin);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
    }, 600);
  };

  return (
    <div className="min-h-screen flex relative overflow-hidden">
      {/* BLUE TRANSITION OVERLAY */}
      <div
        className={`absolute left-0 top-0 bottom-0 z-50 transition-all ease-in-out ${
          isTransitioning
            ? isLogin
              ? "translate-y-0"
              : "translate-y-0"
            : isLogin
            ? "translate-y-full"
            : "-translate-y-full"
        }`}
        style={{
          width: "50%",
          backgroundColor: "#20273A",
        }}
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center px-8">
            <h2
              className={`text-3xl font-bold transition-all duration-500 ${
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
              className={`text-lg mt-4 transition-all duration-700 ${
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

        {/* Decorative Elements*/}
        <div className="absolute top-20 left-20 w-6 h-6 bg-white rounded-full opacity-20 animate-bounce"></div>
        <div
          className="absolute bottom-32 left-16 w-8 h-8 bg-white rounded-full opacity-15 animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-10 w-4 h-4 bg-white rounded-full opacity-30 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Left Side - Form */}
      <div
        className="flex-1 flex items-center justify-center relative z-10"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div className="w-full max-w-lg px-8">
          {/* Transition Button - REGISTER */}
          {!isLogin && (
            <div className="mb-6">
              <div
                style={{
                  backgroundColor: "#20273A",
                  color: "white",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "25px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                  textAlign: "center",
                  marginBottom: "1.75rem",
                }}
              >
                <p style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
                  Sudah memiliki akun?
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
                    fontSize: "0.9rem",
                    fontWeight: "600",
                    cursor: isTransitioning ? "not-allowed" : "pointer",
                  }}
                >
                  Masuk di sini
                </button>
              </div>
            </div>
          )}

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

          {/* Transition Button - LOGIN */}
          {isLogin && (
            <div className="mt-8">
              <div
                style={{
                  backgroundColor: "#20273A",
                  color: "white",
                  padding: "1rem 2rem",
                  borderRadius: "25px",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                  textAlign: "center",
                }}
              >
                <p style={{ fontSize: "1rem", marginBottom: "0.5rem" }}>
                  Belum memiliki akun?
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
                    fontSize: "0.9rem",
                    fontWeight: "600",
                    cursor: isTransitioning ? "not-allowed" : "pointer",
                  }}
                >
                  Daftar di sini
                </button>
              </div>
            </div>
          )}
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

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-white rounded-full opacity-20 animate-bounce"></div>
      <div
        className="absolute bottom-32 right-16 w-6 h-6 bg-white rounded-full opacity-15 animate-bounce"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-10 w-2 h-2 bg-white rounded-full opacity-25 animate-bounce"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute top-32 right-32 w-3 h-3 bg-white rounded-full opacity-30 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-20 left-32 w-5 h-5 bg-white rounded-full opacity-20 animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>
    </div>
  );
}
