import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import Navigation from "@/components/Navigation";
import { personalInfo } from "@/data/portfolioData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${personalInfo.name} | ${personalInfo.role} Portfolio`,
  description: personalInfo.bio,
  keywords: [
    "Flutter Developer",
    "Md. Sayedul Marsalin",
    "Sayedul Morsalin",
    "Dart Developer",
    "Firebase",
    "Mobile Application Developer",
    "Cross-Platform App Developer",
    "Dhaka Bangladesh Developer",
    "GetX",
    "BLoC",
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    title: `${personalInfo.name} | ${personalInfo.role}`,
    description: personalInfo.bio,
    url: "https://sayedulmarsalin.com",
    siteName: `${personalInfo.name} Portfolio`,
    images: [
      {
        url: personalInfo.avatarUrl,
        width: 400,
        height: 400,
        alt: personalInfo.name,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | ${personalInfo.role}`,
    description: personalInfo.bio,
    images: [personalInfo.avatarUrl],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050510",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    jobTitle: personalInfo.role,
    url: "https://github.com/sayedulmorsalin",
    image: personalInfo.avatarUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "Bangladesh",
    },
    sameAs: personalInfo.socials.map((s) => s.url),
    knowsAbout: personalInfo.tags,
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans bg-[#050510] text-[#f0f4ff] antialiased selection:bg-brand-purple/40 selection:text-white min-h-screen relative`}
      >
        {/* Background Canvas Particles */}
        <BackgroundCanvas />

        {/* Ambient Glowing Orbs */}
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        {/* Navigation */}
        <Navigation />

        {/* Main Content */}
        <div className="lg:pl-[76px] relative z-10">{children}</div>
      </body>
    </html>
  );
}
