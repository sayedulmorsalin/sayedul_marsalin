import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import Navigation from "@/components/Navigation";
import { personalInfo, projectsData } from "@/data/portfolioData";

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

const siteUrl = "https://sayedulmarsalin.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personalInfo.name} | Senior Flutter Developer & Cross-Platform Engineer`,
    template: `%s | ${personalInfo.name}`,
  },
  description: `${personalInfo.name} - ${personalInfo.bio} Specialized in Flutter, Dart, Firebase, GetX, BLoC, and Play Store App Development.`,
  keywords: [
    "Md. Sayedul Marsalin",
    "Sayedul Morsalin",
    "Flutter Developer Bangladesh",
    "Flutter Developer Dhaka",
    "Dart Mobile App Developer",
    "Cross-Platform App Developer",
    "Firebase Mobile Apps",
    "GetX State Management",
    "BLoC Flutter Developer",
    "DADU E-commerce App",
    "Android App Developer Bangladesh",
    "iOS App Developer Bangladesh",
    "Freelance Flutter Engineer",
  ],
  authors: [{ name: personalInfo.name, url: siteUrl }],
  creator: personalInfo.name,
  publisher: personalInfo.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${personalInfo.name} | Flutter & Cross-Platform Developer`,
    description: personalInfo.bio,
    url: siteUrl,
    siteName: `${personalInfo.name} Portfolio`,
    images: [
      {
        url: personalInfo.avatarUrl,
        width: 800,
        height: 800,
        alt: `${personalInfo.name} - Flutter Developer Profile`,
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | Flutter Developer`,
    description: personalInfo.bio,
    creator: "@sayedulmorsalin",
    images: [personalInfo.avatarUrl],
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
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050510" },
    { media: "(prefers-color-scheme: light)", color: "#050510" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Rich Structured JSON-LD Data for Google SEO
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: personalInfo.name,
    jobTitle: personalInfo.role,
    description: personalInfo.bio,
    url: siteUrl,
    image: personalInfo.avatarUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "Bangladesh",
    },
    email: personalInfo.email,
    telephone: personalInfo.phone,
    sameAs: personalInfo.socials.map((s) => s.url),
    knowsAbout: [
      "Flutter",
      "Dart",
      "Firebase",
      "GetX",
      "BLoC",
      "Mobile Application Development",
      "iOS Development",
      "Android Development",
      "REST APIs",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: `${personalInfo.name} | Flutter Developer Portfolio`,
    publisher: {
      "@id": `${siteUrl}/#person`,
    },
    inLanguage: "en-US",
  };

  const projectsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projectsData.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: project.title,
        description: project.description,
        applicationCategory: "MobileApplication",
        operatingSystem: "Android, iOS, Web",
        url: project.liveUrl || project.githubUrl,
        author: {
          "@id": `${siteUrl}/#person`,
        },
      },
    })),
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
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

        {/* Navigation Sidebar / Bar */}
        <Navigation />

        {/* Main Content */}
        <div className="lg:pl-[76px] relative z-10">{children}</div>
      </body>
    </html>
  );
}
