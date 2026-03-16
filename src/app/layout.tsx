import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Your Name – Academic Homepage",
  description: "Minimal, data-driven academic homepage.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white font-sans text-foreground antialiased">
        <div className="min-h-screen">
          <main className="mx-auto max-w-7xl px-4 py-10 lg:px-6 lg:py-16">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
