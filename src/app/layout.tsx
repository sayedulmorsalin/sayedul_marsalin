import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import Navigation from "@/components/Navigation";
import { personalInfo, projectsData, testimonialsData } from "@/data/portfolioData";

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
    default: `${personalInfo.name} | Best App Developer in BD & Senior Flutter Engineer`,
    template: `%s | ${personalInfo.name}`,
  },
  description: `${personalInfo.name} — Best App Developer in BD & Senior Flutter Specialist. 1.5+ years experience crafting 60 FPS Android, iOS, and Web applications with Firebase, GetX, and BLoC. Based in Dhaka, Bangladesh.`,
  keywords: [
    "best app developer in bd",
    "best app developer bangladesh",
    "top app developer in bd",
    "top mobile app developer in bangladesh",
    "flutter developer bd",
    "best flutter developer bangladesh",
    "hire flutter developer bangladesh",
    "hire app developer in bd",
    "mobile app developer bangladesh",
    "android app developer bd",
    "ios app developer bangladesh",
    "top mobile app developers in dhaka",
    "cross platform app developer bangladesh",
    "freelance mobile app developer bd",
    "flutter firebase specialist bangladesh",
    "dart developer dhaka",
    "getx bloc expert flutter bd",
    "clean architecture flutter developer",
    "play store app developer bangladesh",
    "custom mobile application development bd",
    "Md. Sayedul Marsalin",
    "Sayedul Morsalin",
    "sayedulmorsalin",
    "sayedulmarsalin",
    "DADU E-commerce App",
    "Meal Assistant AI",
    "AquaWatch",
    "EasyShare P2P",
    "Talksy Realtime Chat",
  ],
  icons: {
    icon: [
      { url: "/avatar.png", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/avatar.png",
    apple: [
      { url: "/avatar.png", sizes: "180x180", type: "image/png" },
    ],
  },
  authors: [{ name: personalInfo.name, url: siteUrl }],
  creator: personalInfo.name,
  publisher: personalInfo.name,
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "0d9b4eaf2d8b5797",
  },
  openGraph: {
    title: `${personalInfo.name} | Best App Developer in BD & Flutter Specialist`,
    description: `Leading cross-platform mobile developer from Dhaka, Bangladesh. Specialized in Flutter, Firebase, GetX, BLoC, and production Android & iOS apps.`,
    url: siteUrl,
    siteName: `${personalInfo.name} — Best App Developer in BD`,
    images: [
      {
        url: personalInfo.avatarUrl,
        width: 400,
        height: 400,
        alt: `${personalInfo.name} — Best App Developer in BD`,
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | Best App Developer in BD`,
    description: `Best App Developer in BD specializing in Flutter, Firebase, and high-performance cross-platform mobile apps.`,
    site: "@sayedulmorsalin",
    creator: "@sayedulmorsalin",
    images: [
      {
        url: personalInfo.avatarUrl,
        alt: `${personalInfo.name} — Flutter Developer in Bangladesh`,
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
  // Rich Structured JSON-LD Data for Google SEO (Person + ProfessionalService)
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: personalInfo.name,
    alternateName: [
      "Sayedul Morsalin",
      "Sayedul Marsalin",
      "Best App Developer in BD",
      "Top Flutter Developer Bangladesh",
    ],
    jobTitle: "Best App Developer in BD & Senior Flutter Engineer",
    description: personalInfo.bio,
    url: siteUrl,
    image: {
      "@type": "ImageObject",
      url: `${siteUrl}${personalInfo.avatarUrl}`,
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
      "Mobile Application Development",
      "Flutter",
      "Dart",
      "Firebase",
      "GetX",
      "BLoC",
      "Android Development",
      "iOS Development",
      "Cross-Platform Development",
      "REST APIs",
      "Clean Architecture",
    ],
    knowsLanguage: ["Bengali", "English"],
    worksFor: {
      "@type": "Organization",
      name: "Freelance Mobile App Engineer / Independent",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Flutter Developer & Mobile App Engineer",
      occupationLocation: {
        "@type": "City",
        name: "Dhaka",
      },
      description:
        "Best App Developer in BD crafting cross-platform mobile apps for Android, iOS, and Web using Flutter and Dart.",
      skills:
        "Flutter, Dart, Firebase, GetX, BLoC, REST API, Clean Architecture",
    },
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#service`,
    name: `${personalInfo.name} — Mobile App Development Services`,
    image: `${siteUrl}${personalInfo.avatarUrl}`,
    url: siteUrl,
    telephone: personalInfo.phone,
    email: personalInfo.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressRegion: "Dhaka Division",
      addressCountry: "BD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.8103,
      longitude: 90.4125,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
    areaServed: [
      { "@type": "Country", name: "Bangladesh" },
      { "@type": "AdministrativeArea", name: "Dhaka" },
      { "@type": "Country", name: "Worldwide" },
    ],
    serviceType: [
      "Flutter Mobile App Development",
      "Android App Development",
      "iOS App Development",
      "Cross-Platform App Development",
      "Firebase Backend Integration",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: `${personalInfo.name} | Best App Developer in BD Portfolio`,
    description: personalInfo.bio,
    publisher: {
      "@id": `${siteUrl}/#person`,
    },
    inLanguage: "en-US",
  };

  const projectsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Mobile Apps & Case Studies by ${personalInfo.name}`,
    itemListElement: projectsData.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: project.title,
        description: project.description,
        applicationCategory: "MobileApplication",
        operatingSystem: "Android, iOS",
        url: `${siteUrl}/projects/${project.id}`,
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
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${siteUrl}/projects`,
      },
    ],
  };

  const reviewsJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Mobile App Development Services by Md. Sayedul Marsalin",
    image: `${siteUrl}${personalInfo.avatarUrl}`,
    description: "Custom Flutter, Android, and iOS mobile application engineering services in Bangladesh and worldwide.",
    brand: {
      "@type": "Brand",
      name: personalInfo.name,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: testimonialsData.length.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    review: testimonialsData.map((t) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: t.name,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating.toString(),
        bestRating: "5",
      },
      reviewBody: t.text,
    })),
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicon icons */}
        <link rel="icon" href="/avatar.png" type="image/png" />
        <link rel="shortcut icon" href="/avatar.png" type="image/png" />
        <link rel="apple-touch-icon" href="/avatar.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
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
