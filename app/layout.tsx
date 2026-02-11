import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  description: "Professional software developer portfolio showcasing innovative web applications, technical expertise, and creative solutions. Explore projects, blog posts, and connect for collaboration opportunities.",
  keywords: [
    "portfolio",
    "software developer",
    "web developer",
    "full stack developer",
    "Shubham Jain",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "frontend developer",
    "backend developer",
    "tech professional"
  ],
  authors: [{ name: "Shubham Jain" }],
  creator: "Shubham Jain",
  publisher: "Shubham Jain",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Shubham Jain | Software Developer Portfolio",
    description: "Professional software developer portfolio showcasing innovative web applications, technical expertise, and creative solutions.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com",
    siteName: "Shubham Jain Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Shubham Jain Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Jain | Software Developer Portfolio",
    description: "Professional software developer portfolio showcasing innovative web applications and technical expertise.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shubham Jain",
    jobTitle: "Software Developer",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com",
    sameAs: [
      // Add your social media URLs here
      // "https://github.com/yourusername",
      // "https://linkedin.com/in/yourusername",
      // "https://twitter.com/yourusername",
    ],
    image: `${process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com"}/logo.png`,
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Structured Data for SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        
        {/* Google Analytics - Replace with your tracking ID */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
        
        {children}
      </body>
    </html>
  );
}
