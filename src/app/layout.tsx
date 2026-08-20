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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://sayedulmarsalin.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${personalInfo.name} | Senior Flutter Developer & Cross-Platform Engineer`,
    template: `%s | ${personalInfo.name}`,
  },
  description: `${personalInfo.name} — ${personalInfo.bio} Specialized in Flutter, Dart, Firebase, GetX, BLoC, and Play Store App Development. Based in Dhaka, Bangladesh.`,
  keywords: [
    "Md. Sayedul Marsalin",
    "Sayedul Morsalin",
    "Sayedul Marsalin Flutter",
    "Flutter Developer Bangladesh",
    "Flutter Developer Dhaka",
    "Dart Mobile App Developer",
    "Cross-Platform App Developer Bangladesh",
    "Firebase Mobile Apps",
    "GetX State Management Flutter",
    "BLoC Flutter Developer",
    "DADU E-commerce App",
    "Android App Developer Bangladesh",
    "iOS App Developer Bangladesh",
    "Freelance Flutter Engineer",
    "Flutter GetX BLoC Expert",
    "Flutter Firebase integration",
    "Play Store App Developer Bangladesh",
    "mobile app developer for hire",
    "sayedulmorsalin",
    "sayedulmarsalin",
  ],
  authors: [{ name: personalInfo.name, url: siteUrl }],
  creator: personalInfo.name,
  publisher: personalInfo.name,
  alternates: {
    canonical: siteUrl,
  },
  // Google Search Console verification token
  verification: {
    google: "0d9b4eaf2d8b5797",
  },
  openGraph: {
    title: `${personalInfo.name} | Flutter & Cross-Platform Developer`,
    description: `${personalInfo.bio} Specialized in Flutter, Firebase, GetX, BLoC, and cross-platform mobile development for Android & iOS.`,
    url: siteUrl,
    siteName: `${personalInfo.name} Portfolio`,
    images: [
      {
        url: personalInfo.avatarUrl,
        width: 400,
        height: 400,
        alt: `${personalInfo.name} — Flutter Developer from Dhaka, Bangladesh`,
        type: "image/jpeg",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | Flutter Developer`,
    description: personalInfo.bio,
    site: "@sayedulmorsalin",
    creator: "@sayedulmorsalin",
    images: [
      {
        url: personalInfo.avatarUrl,
        alt: `${personalInfo.name} — Flutter Developer`,
      },
    ],
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
  // Geo tags for local SEO (Dhaka, Bangladesh)
  other: {
    "geo.region": "BD-C",
    "geo.placename": "Dhaka",
    "geo.position": "23.8103;90.4125",
    ICBM: "23.8103, 90.4125",
    "theme-color": "#050510",
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
    alternateName: ["Sayedul Morsalin", "Sayedul Marsalin"],
    jobTitle: personalInfo.role,
    description: personalInfo.bio,
    url: siteUrl,
    image: {
      "@type": "ImageObject",
      url: personalInfo.avatarUrl,
      width: 400,
      height: 400,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
      addressRegion: "Dhaka Division",
    },
    email: personalInfo.email,
    telephone: personalInfo.phone,
    sameAs: [
      ...personalInfo.socials.map((s) => s.url),
      siteUrl,
    ],
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
      "Cross-Platform Development",
      "Clean Architecture",
    ],
    knowsLanguage: ["Bengali", "English"],
    worksFor: {
      "@type": "Organization",
      name: "Freelance / Independent",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Flutter Developer",
      occupationLocation: {
        "@type": "City",
        name: "Dhaka",
      },
      description:
        "Designs and develops cross-platform mobile applications for Android, iOS, and Web using Flutter and Dart.",
      skills:
        "Flutter, Dart, Firebase, GetX, BLoC, REST API, Clean Architecture",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: `${personalInfo.name} | Flutter Developer Portfolio`,
    description: personalInfo.bio,
    publisher: {
      "@id": `${siteUrl}/#person`,
    },
    inLanguage: "en-US",
  };

  const projectsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Projects by ${personalInfo.name}`,
    itemListElement: projectsData.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: project.title,
        description: project.description,
        applicationCategory: "MobileApplication",
        operatingSystem: "Android, iOS",
        url: project.liveUrl || project.githubUrl,
        author: {
          "@id": `${siteUrl}/#person`,
        },
        keywords: project.tags.join(", "),
      },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
    ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
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
