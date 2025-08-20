"use client";

import { AuthRequest, RegisterRequest, User } from "@/types/auth.type";
import { usePathname, useRouter } from "next/navigation";
import AuthService from "@/services/auth.service";
import React, { createContext, useCallback } from "react";

export interface AuthContextType {
  user: User | undefined;
  loadingContext: boolean;
  isAuthenticated: boolean;
  login: (credentials: AuthRequest) => Promise<void>;
  logout: () => void;
  register: (credentials: RegisterRequest) => Promise<void>;
  updateUser: (data: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType>({
  user: undefined,
  loadingContext: false,
  isAuthenticated: false,
  login: async () => Promise.resolve(),
  logout: () => {},
  register: async () => Promise.resolve(),
  updateUser: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

const ACCESS_TOKEN_KEY = "auth_token";
const REFRESH_TOKEN_KEY = "refresh_token";

const SimpleAuthLoading = () => (
  <div
    style={{
      position: "fixed",
      inset: 0,
      zIndex: 9998,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(8px)",
    }}
  >
    <div style={{ textAlign: "center" }}>
      <div style={{ marginBottom: "2rem" }}>
        <img
          src="/logo.png"
          alt="Logo"
          style={{
            width: "auto",
            height: "80px",
            maxWidth: "140px",
            objectFit: "contain",
            display: "block",
            margin: "0 auto",
            animation: "authPulse 1.5s ease-in-out infinite",
          }}
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement;
            target.style.display = "none";
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = "flex";
          }}
        />

        <div
          style={{
            display: "none",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "140px",
            height: "80px",
            margin: "0 auto",
            color: "#64748b",
            fontSize: "0.875rem",
            textAlign: "center",
            fontFamily: "var(--font-inter)",
            animation: "authPulse 1.5s ease-in-out infinite",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              background: "linear-gradient(135deg, #FDD741, #FEE480)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "0.5rem",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                stroke="#20273A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span style={{ fontSize: "0.75rem", fontWeight: "500" }}>
            SatuKelola
          </span>
        </div>
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <div
          style={{
            width: "32px",
            height: "32px",
            border: "3px solid #f3f4f6",
            borderTop: "3px solid #20273A",
            borderRadius: "50%",
            animation: "authSpin 1s linear infinite",
            margin: "0 auto",
          }}
        />
      </div>

      <p
        style={{
          fontSize: "0.875rem",
          color: "#64748b",
          fontWeight: "500",
          fontFamily: "var(--font-inter)",
        }}
      >
        Authenticating
      </p>
    </div>

    <style jsx>{`
      @keyframes authSpin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes authPulse {
        0%, 100% {
          opacity: 1;
          transform: scale(1);
        }
        50% {
          opacity: 0.8;
          transform: scale(0.98);
        }
      }
    `}</style>
  </div>
);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = React.useState<User | undefined>(undefined);
  const [loadingContext, setLoadingContext] = React.useState(false);
  const [isClient, setIsClient] = React.useState(false);
  const [isInitializing, setIsInitializing] = React.useState(true);
  
  console.log(user);

  const router = useRouter();
  const pathname = usePathname();
  const isAuthenticated = Boolean(user);

  const login = async (credentials: AuthRequest): Promise<void> => {
    setLoadingContext(true);

    try {
      const response = await AuthService.login(credentials);

      localStorage.setItem(ACCESS_TOKEN_KEY, response.data.accessToken || "");
      if (response.data.refreshToken) {
        localStorage.setItem(REFRESH_TOKEN_KEY, response.data.refreshToken);
      }

      const userData: User = {
        id: response.data.id,
        username: response.data.username,
        email: response.data.email,
        name: response.data.name,
        role: response.data.role,
        permissions: response.data.permissions,
      };

      setUser(userData);
      window.dispatchEvent(new Event("authStateChanged"));
      console.log("Login successful");
      router.replace("/");
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    } finally {
      setLoadingContext(false);
    }
  };

  const clearToken = useCallback(() => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    setUser(undefined);

    window.dispatchEvent(new Event("authStateChanged"));
  }, []);

  const logout = async () => {
    setLoadingContext(true);

    try {
      await AuthService.logout();
      console.log("Logout successful");
    } catch (error) {
      console.log("Logout error:", error);
    } finally {
      clearToken();

      router.replace("/login");
      setLoadingContext(false);
    }
  };

  React.useEffect(() => {
    setIsClient(true);

    const initializeAuth = async () => {
      setIsInitializing(true);

      try {
        const storedToken = localStorage.getItem(ACCESS_TOKEN_KEY);

        if (storedToken) {
          const response = await AuthService.me();

          const userData: User = {
            id: response.data.id,
            username: response.data.username,
            email: response.data.email,
            name: response.data.name,
            role: response.data.role,
            permissions: response.data.permissions,
          };

          setUser(userData);

          if (pathname === "/login") {
            router.replace("/");
          }
        } else {
          const protectedRoutes = ["/dashboard"];
          const isOnProtectedRoute = protectedRoutes.some((route) =>
            pathname.startsWith(route)
          );

          if (isOnProtectedRoute) {
            router.replace("/auth");
          }
        }
      } catch (error) {
        console.error("Auth initialization failed:", error);
        clearToken();

        const protectedRoutes = ["/dashboard"];
        const isOnProtectedRoute = protectedRoutes.some((route) =>
          pathname.startsWith(route)
        );

        if (isOnProtectedRoute) {
          router.replace("/auth");
        }
      } finally {
        setIsInitializing(false);
      }
    };

    initializeAuth();
  }, [pathname, router, clearToken]);

  const updateUser = (update: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...update };
      setUser(updatedUser);
      window.dispatchEvent(new Event("authStateChanged"));
    }
  };

  const register = async (credentials: RegisterRequest): Promise<void> => {
    setLoadingContext(true);

    try {
      console.log("Register successful");

      router.replace("/login");
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    } finally {
      setLoadingContext(false);
    }
  };

  const contextValue: AuthContextType = {
    user,
    loadingContext,
    isAuthenticated,
    login,
    logout,
    register,
    updateUser,
  };

  // Show simple loading only if client is ready but still initializing
  if (!isClient || isInitializing) {
    return null; // Let the main LoadingWrapper handle the initial loading
  }

  // Show auth-specific loading for login/logout operations
  if (loadingContext) {
    return <SimpleAuthLoading />;
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthProvider;