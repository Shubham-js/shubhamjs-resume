import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shubham Jain | Software Developer Portfolio",
  description: "Software Developer Portfolio - Showcasing my projects, experience, and skills",
  keywords: ["portfolio", "software developer", "web developer", "full stack developer", "Shubham Jain"],
  authors: [{ name: "Shubham Jain" }],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Shubham Jain | Software Developer Portfolio",
    description: "Software Developer Portfolio - Showcasing my projects, experience, and skills",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
