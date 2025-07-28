"use client";

import Link from "next/link";
import { useLogin } from "../_hooks/login.hook";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function LoginMain() {
  const {
    formData,
    error,
    isSubmitting,
    handleChange,
    handleSubmit,
    fillDummyCredentials,
  } = useLogin();

  return (
    <div className="min-h-screen flex relative overflow-hidden">
      {/* Left Side - Login Form */}
      <div className="flex-1 flex items-center justify-center bg-white px-8 relative z-10">
        <div className="w-full max-w-sm">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-2">Sign In</h1>
          </div>

          {/* Dummy Credentials Card */}
          <div
            className="card animate-slide-up mb-6 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            style={{
              backgroundColor: "#FAD56B",
              border: "1px solid hsl(var(--primary) / 0.2)",
            }}
          >
            <div className="flex items-center justify-between">
              <div>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "hsl(var(--primary))",
                    fontWeight: "500",
                    marginBottom: "0.25rem",
                  }}
                >
                  Dummy Credential
                </p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "hsl(var(--primary) / 0.8)",
                    lineHeight: "1.4",
                  }}
                >
                  Username: user
                  <br />
                  Password: pass
                </p>
              </div>
              <button
                type="button"
                onClick={fillDummyCredentials}
                className="btn btn-primary btn-sm hover:scale-105 active:scale-95 transition-transform duration-200"
              >
                Use Dummy
              </button>
            </div>
          </div>

          <div className="animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-8">
              {error && (
                <div
                  className="animate-shake rounded-lg"
                  style={{
                    backgroundColor: "hsl(var(--destructive) / 0.1)",
                    border: "1px solid hsl(var(--destructive) / 0.2)",
                    borderRadius: "0.375rem",
                    padding: "1rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start" }}>
                    <svg
                      style={{
                        height: "1.25rem",
                        width: "1.25rem",
                        color: "hsl(var(--destructive))",
                        marginRight: "0.75rem",
                        marginTop: "0.125rem",
                      }}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="animate-pulse"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "hsl(var(--destructive))",
                      }}
                    >
                      {error}
                    </p>
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className="py-4 text-lg"
                  placeholder="Nama Kamu"
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-3">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="py-4 text-lg"
                  placeholder="Password"
                  disabled={isSubmitting}
                />
              </div>

              {/* Remember Me Checkbox */}
              <div className="flex items-center justify-center">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-yellow-400 focus:ring-yellow-400 border-gray-300 rounded transition-colors hover:border-yellow-400"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-700 cursor-pointer hover:text-gray-900 transition-colors"
                  >
                    Ingat Saya
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] disabled:hover:scale-100 disabled:hover:shadow-none text-lg"
                style={{
                  opacity: isSubmitting ? 0.7 : 1,
                }}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        style={{ opacity: 0.25 }}
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        style={{ opacity: 0.75 }}
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Signing in...
                  </>
                ) : (
                  "Masuk"
                )}
              </button>
            </form>

            {/* Social Login Divider */}
            <div className="my-10">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-medium">
                    Lanjutkan Dengan
                  </span>
                </div>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="flex justify-center space-x-6">
              <button className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg active:scale-95 group">
                <svg
                  className="w-7 h-7 text-white group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <button className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg active:scale-95 group">
                <svg
                  className="w-7 h-7 text-white group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </button>
              <button className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg active:scale-95 group">
                <svg
                  className="w-7 h-7 text-white group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Illustration */}
      <div
        className="flex-1 flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: "#FDD741" }}
      >
        {/* Background Pattern - Fixed */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/20 to-yellow-500/20"></div>
          {/* Dot pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}
          ></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center space-y-16 px-8 h-full">
          {/* Laptop Illustration with enhanced animations - Made Larger */}
          <div className="transform hover:scale-105 transition-all duration-500 hover:rotate-1">
            <div className="relative">
              <Image
                src="/img/logo-shopping.png"
                alt="Shopping Illustration"
                width={600}
                height={600}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="drop-shadow-2xl hover:drop-shadow-3xl transition-all duration-300"
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "550px",
                  minWidth: "400px",
                  objectFit: "contain",
                  borderRadius: "12px",
                }}
              />
              {/* Floating animation overlay */}
              <div className="absolute -inset-4 bg-white/5 rounded-xl animate-pulse"></div>
            </div>
          </div>

          {/* Logo with enhanced styling - Made Larger */}
          <div className="transform hover:scale-105 transition-all duration-300">
            <Image
              src="/img/logo-light.png"
              alt="Satu Kelola Logo"
              width={500}
              height={200}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              className="drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
              style={{
                width: "100%",
                height: "auto",
                maxWidth: "450px",
                minWidth: "300px",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>

      {/* Enhanced Decorative Elements */}
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