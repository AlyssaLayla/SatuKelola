"use client";

import { useLogin } from "../_hooks/login.hook";
import { Input } from "@/components/ui/input";

export default function LoginForm() {
  const {
    formData,
    error,
    isSubmitting,
    handleChange,
    handleSubmit,
    fillDummyCredentials,
  } = useLogin();

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          backgroundColor: "#fff",
          border: "1px solid #e5e5e5",
          borderRadius: "8px",
          padding: "0.5rem 0.75rem",
          marginBottom: "1rem",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "0.8rem",
                color: "#666",
                marginBottom: "0.25rem",
              }}
            >
              Demo Account
            </div>
            <div
              style={{ fontSize: "0.75rem", color: "#888", lineHeight: "1.3" }}
            >
              user / pass
            </div>
          </div>
          <button
            type="button"
            onClick={fillDummyCredentials}
            style={{
              backgroundColor: "#FDD741",
              color: "#000",
              border: "none",
              borderRadius: "6px",
              padding: "0.4rem 0.8rem",
              fontSize: "0.75rem",
              fontWeight: "500",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor = "#FCC02F";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor = "#FDD741";
            }}
          >
            Use
          </button>
        </div>
      </div>

      <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            color: "#000",
            marginBottom: "1rem",
          }}
        >
          Sign In
        </h1>
      </div>

      <div className="animate-scale-in">
        <form onSubmit={handleSubmit} style={{ marginBottom: "1.5rem" }}>
          {error && (
            <div
              className="animate-shake rounded-lg"
              style={{
                backgroundColor: "hsl(var(--destructive) / 0.1)",
                border: "1px solid hsl(var(--destructive) / 0.2)",
                borderRadius: "0.375rem",
                padding: "0.75rem",
                marginBottom: "1rem",
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

          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="username"
              style={{
                display: "block",
                fontSize: "1rem",
                fontWeight: "500",
                color: "#666",
                marginBottom: "0.5rem",
              }}
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
              style={{
                width: "100%",
                height: "2.5rem",
                padding: "0 1rem",
                fontSize: "1rem",
                border: "2px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#fff",
                outline: "none",
              }}
              placeholder="Nama Kamu"
              disabled={isSubmitting}
            />
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="password"
              style={{
                display: "block",
                fontSize: "1rem",
                fontWeight: "500",
                color: "#666",
                marginBottom: "0.5rem",
              }}
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
              style={{
                width: "100%",
                height: "2.5rem",
                padding: "0 1rem",
                fontSize: "1rem",
                border: "2px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#fff",
                outline: "none",
              }}
              placeholder="Password"
              disabled={isSubmitting}
            />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1.5rem",
            }}
          >
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              style={{
                width: "1.25rem",
                height: "1.25rem",
                marginRight: "0.75rem",
                accentColor: "#FDD741",
              }}
            />
            <label
              htmlFor="remember-me"
              style={{ fontSize: "1rem", color: "#666", cursor: "pointer" }}
            >
              Ingat Saya
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              width: "100%",
              height: "3rem",
              backgroundColor: "#FDD741",
              color: "#000",
              fontSize: "1.1rem",
              fontWeight: "600",
              border: "none",
              borderRadius: "25px",
              cursor: "pointer",
              transition: "all 0.3s",
              opacity: isSubmitting ? 0.7 : 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onMouseEnter={(e) => {
              if (!isSubmitting) {
                (e.target as HTMLButtonElement).style.backgroundColor =
                  "#FCC02F";
              }
            }}
            onMouseLeave={(e) => {
              if (!isSubmitting) {
                (e.target as HTMLButtonElement).style.backgroundColor =
                  "#FDD741";
              }
            }}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin"
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    marginRight: "0.75rem",
                  }}
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

        <div
          style={{
            margin: "1.5rem 0",
            position: "relative",
            textAlign: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "0",
              right: "0",
              height: "1px",
              backgroundColor: "#ddd",
              transform: "translateY(-50%)",
            }}
          ></div>
          <span
            style={{
              backgroundColor: "#ffffff",
              padding: "0 1rem",
              color: "#666",
              fontSize: "1rem",
              position: "relative",
              zIndex: "1",
            }}
          >
            Lanjutkan Dengan
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginBottom: "1rem",
          }}
        >
          <button
            style={{
              width: "3rem",
              height: "3rem",
              backgroundColor: "#FDD741",
              border: "none",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          >
            <svg
              style={{ width: "1.5rem", height: "1.5rem", color: "white" }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>
          <button
            style={{
              width: "3rem",
              height: "3rem",
              backgroundColor: "#FDD741",
              border: "none",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          >
            <svg
              style={{ width: "1.5rem", height: "1.5rem", color: "white" }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
          </button>
          <button
            style={{
              width: "3rem",
              height: "3rem",
              backgroundColor: "#FDD741",
              border: "none",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s",
            }}
          >
            <svg
              style={{ width: "1.5rem", height: "1.5rem", color: "white" }}
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
