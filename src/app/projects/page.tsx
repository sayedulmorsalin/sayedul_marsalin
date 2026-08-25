import type { Metadata } from "next";
import ProjectsCatalogClient from "@/components/ProjectsCatalogClient";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://sayedulmarsalin.vercel.app";

export const metadata: Metadata = {
  title: "Mobile Apps & Project Portfolio | Sayedul Marsalin - Best App Developer in BD",
  description:
    "Explore production Flutter mobile applications, cross-platform Android & iOS apps, real-time admin panels, and case studies developed by Md. Sayedul Marsalin, top mobile app developer in Dhaka, Bangladesh.",
  keywords: [
    "best app developer in bd",
    "flutter developer bangladesh portfolio",
    "mobile app developer dhaka",
    "top app developer in bd",
    "flutter projects case studies",
    "android app developer bangladesh",
    "ios app developer bangladesh",
    "play store published flutter apps",
    "freelance flutter engineer bd",
    "sayedul marsalin projects",
  ],
  alternates: {
    canonical: `${siteUrl}/projects`,
  },
  openGraph: {
    title: "Mobile Apps & Engineering Portfolio | Sayedul Marsalin",
    description:
      "Explore production Flutter apps, case studies, and cross-platform projects by Md. Sayedul Marsalin.",
    url: `${siteUrl}/projects`,
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-12 pb-24">
      <ProjectsCatalogClient />
    </main>
  );
}
