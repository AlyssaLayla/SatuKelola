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

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = React.useState<User | undefined>(undefined);
  const [loadingContext, setLoadingContext] = React.useState(false);
  const [isClient, setIsClient] = React.useState(false);
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
      router.replace("/dashboard");
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
      setLoadingContext(true);

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
            router.replace("/dashboard");
          }
        } else {
          const protectedRoutes = ["/dashboard"];
          const isOnProtectedRoute = protectedRoutes.some((route) =>
            pathname.startsWith(route)
          );

          if (isOnProtectedRoute) {
            router.replace("/login");
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
          router.replace("/login");
        }
      } finally {
        setLoadingContext(false);
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

  if (!isClient) {
    return (
      <div
        className="min-h-screen-safe"
        style={{
          background:
            "linear-gradient(135deg, hsl(var(--background)), hsl(var(--muted)))",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
          <div style={{ position: "relative", marginBottom: "1.5rem" }}>
            <div
              className="animate-spin"
              style={{
                borderRadius: "50%",
                height: "4rem",
                width: "4rem",
                border: "4px solid hsl(var(--border))",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  borderRadius: "50%",
                  height: "4rem",
                  width: "4rem",
                  border: "4px solid transparent",
                  borderTopColor: "hsl(var(--primary))",
                  borderRightColor: "hsl(var(--secondary))",
                }}
              ></div>
            </div>
            <div
              className="animate-ping"
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                backgroundColor: "hsl(var(--primary) / 0.2)",
              }}
            ></div>
          </div>

          <div style={{ marginBottom: "1rem" }}>
            <h2
              className="text-gradient"
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
                marginBottom: "0.5rem",
              }}
            >
              SatuKelola
            </h2>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.25rem",
              }}
            >
              <span
                style={{
                  color: "hsl(var(--muted-foreground))",
                  fontWeight: "500",
                }}
              >
                Loading
              </span>
              <div style={{ display: "flex", gap: "0.25rem" }}>
                <div
                  className="animate-bounce"
                  style={{
                    width: "0.25rem",
                    height: "0.25rem",
                    backgroundColor: "hsl(var(--primary))",
                    borderRadius: "50%",
                  }}
                ></div>
                <div
                  className="animate-bounce"
                  style={{
                    width: "0.25rem",
                    height: "0.25rem",
                    backgroundColor: "hsl(var(--primary))",
                    borderRadius: "50%",
                    animationDelay: "100ms",
                  }}
                ></div>
                <div
                  className="animate-bounce"
                  style={{
                    width: "0.25rem",
                    height: "0.25rem",
                    backgroundColor: "hsl(var(--primary))",
                    borderRadius: "50%",
                    animationDelay: "200ms",
                  }}
                ></div>
              </div>
            </div>

            <p
              style={{
                fontSize: "0.875rem",
                color: "hsl(var(--muted-foreground))",
                maxWidth: "20rem",
                margin: "0.5rem auto 0",
              }}
            >
              Preparing your experience
            </p>
          </div>

          <div
            style={{
              marginTop: "2rem",
              width: "16rem",
              margin: "2rem auto 0",
            }}
          >
            <div
              style={{
                backgroundColor: "hsl(var(--muted))",
                borderRadius: "9999px",
                height: "0.25rem",
                overflow: "hidden",
              }}
            >
              <div
                className="animate-pulse"
                style={{
                  background:
                    "linear-gradient(to right, hsl(var(--primary)), hsl(var(--secondary)))",
                  height: "0.25rem",
                  borderRadius: "9999px",
                }}
              ></div>
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              opacity: 0.4,
            }}
          >
            <div
              className="animate-pulse"
              style={{
                width: "0.5rem",
                height: "0.5rem",
                backgroundColor: "hsl(var(--primary))",
                borderRadius: "50%",
              }}
            ></div>
            <div
              className="animate-pulse"
              style={{
                width: "0.5rem",
                height: "0.5rem",
                backgroundColor: "hsl(var(--secondary))",
                borderRadius: "50%",
                animationDelay: "300ms",
              }}
            ></div>
            <div
              className="animate-pulse"
              style={{
                width: "0.5rem",
                height: "0.5rem",
                backgroundColor: "hsl(var(--primary))",
                borderRadius: "50%",
                animationDelay: "600ms",
              }}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthProvider;
