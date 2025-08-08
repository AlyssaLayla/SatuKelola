import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import LandingNavbar from "@/components/navbar.component";
import AuthProvider from "@/contexts/auth.context";
import LoadingWrapper from "@/components/loading.component";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Satu Kelola",
  description: "Platform manajemen terpadu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <LoadingWrapper>
          <LandingNavbar />
          <AuthProvider>{children}</AuthProvider>
        </LoadingWrapper>
      </body>
    </html>
  );
}
