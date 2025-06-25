import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daily Trial Weekly Coding",
  description: "Master coding skills through structured weekly challenges",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="container max-w-4xl mx-auto px-4 py-8">
            <Header />

            <main>{children}</main>

            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
