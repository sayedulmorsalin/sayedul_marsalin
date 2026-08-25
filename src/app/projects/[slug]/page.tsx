import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Github,
  Download,
  Sparkles,
  Layers,
  Cpu,
  CheckCircle2,
  Calendar,
  FolderOpen,
  ArrowRight,
  Send,
  MessageCircle,
  ChevronRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { projectsData, personalInfo } from "@/data/portfolioData";
import AutoScrollCarousel from "@/components/AutoScrollCarousel";
import SpotlightCard from "@/components/SpotlightCard";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.id === slug);

  if (!project) {
    return {
      title: "Project Not Found | Sayedul Marsalin",
      description: "The requested project case study could not be found.",
    };
  }

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://sayedulmarsalin.vercel.app";
  const canonicalUrl = `${siteUrl}/projects/${project.id}`;
  const metaTitle = `${project.title} — Flutter Mobile App Case Study | Sayedul Marsalin - Best App Developer in BD`;
  const metaDescription = `${project.subtitle || project.description} Engineered by Md. Sayedul Marsalin, top Flutter developer & mobile application specialist in Dhaka, Bangladesh.`;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [
      project.title,
      `${project.title} flutter app`,
      ...project.tags,
      "best app developer in bd",
      "flutter developer bangladesh",
      "top mobile app developer in bangladesh",
      "hire flutter developer bd",
      "mobile app case study",
      "android app developer dhaka",
      "cross platform app developer bd",
      "sayedul marsalin projects",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      type: "article",
      images: [
        {
          url: project.image || personalInfo.avatarUrl,
          width: 1200,
          height: 630,
          alt: `${project.title} Flutter App Showcase`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [project.image || personalInfo.avatarUrl],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const projectIndex = projectsData.findIndex((p) => p.id === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projectsData[projectIndex];
  const prevProject =
    projectIndex > 0 ? projectsData[projectIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject =
    projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : projectsData[0];

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://sayedulmarsalin.vercel.app";

  const getBadgeStyle = (type: string) => {
    switch (type) {
      case "purple":
        return "bg-brand-purple/20 border-brand-purple/40 text-brand-violet";
      case "cyan":
        return "bg-brand-cyan/20 border-brand-cyan/40 text-brand-cyan";
      case "amber":
        return "bg-brand-amber/20 border-brand-amber/40 text-brand-amber";
      default:
        return "bg-brand-purple/20 border-brand-purple/40 text-brand-violet";
    }
  };

  // Schema.org SoftwareApplication & Breadcrumbs
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    applicationCategory: "MobileApplication",
    operatingSystem: "Android, iOS, Web",
    url: `${siteUrl}/projects/${project.id}`,
    image: `${siteUrl}${project.image}`,
    author: {
      "@type": "Person",
      name: personalInfo.name,
      url: siteUrl,
      jobTitle: "Best App Developer in BD & Flutter Specialist",
    },
    keywords: project.tags.join(", "),
  };

  const breadcrumbSchema = {
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
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: `${siteUrl}/projects/${project.id}`,
      },
    ],
  };

  return (
    <div className="min-h-screen pb-24 pt-8 sm:pt-12 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Top Breadcrumb & Action Bar */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10"
        >
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <Link
              href="/"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <Link href="/projects" className="hover:text-white transition-colors">
              Projects
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-brand-violet font-semibold truncate max-w-[200px] sm:max-w-none">
              {project.title}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200 hover:bg-white/10 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-grad-primary text-xs font-semibold text-white shadow-[0_0_20px_rgba(124,58,237,0.4)] hover:opacity-95 hover:scale-105 transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Get App</span>
              </a>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${getBadgeStyle(
                project.badgeType
              )}`}
            >
              {project.badgeText}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
              {project.category.toUpperCase()}
            </span>
            {project.timeline && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
                <Calendar className="w-3 h-3 text-brand-cyan" />
                <span>{project.timeline}</span>
              </span>
            )}
          </div>

          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
            {project.subtitle || project.description}
          </p>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <div>
              <p className="text-[11px] font-mono uppercase text-slate-400">Role</p>
              <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                {project.role || "Lead Flutter Engineer"}
              </p>
            </div>
            <div>
              <p className="text-[11px] font-mono uppercase text-slate-400">Platform</p>
              <p className="text-xs sm:text-sm font-semibold text-brand-violet mt-0.5">
                Android, iOS &amp; Web
              </p>
            </div>
            <div>
              <p className="text-[11px] font-mono uppercase text-slate-400">State Management</p>
              <p className="text-xs sm:text-sm font-semibold text-brand-cyan mt-0.5">
                {project.tags.find((t) => t.includes("GetX") || t.includes("BLoC")) || "GetX / BLoC"}
              </p>
            </div>
            <div>
              <p className="text-[11px] font-mono uppercase text-slate-400">Database &amp; Cloud</p>
              <p className="text-xs sm:text-sm font-semibold text-brand-amber mt-0.5">
                {project.tags.find((t) => t.includes("Firebase") || t.includes("Hive")) || "Firebase Cloud"}
              </p>
            </div>
          </div>
        </header>

        {/* Interactive Screenshot Showcase Carousel */}
        <section className="mb-16">
          <div className="rounded-3xl overflow-hidden border border-white/15 bg-[#0a0a1a] shadow-2xl p-2 sm:p-4 relative">
            <div className="flex items-center justify-between px-3 py-2 mb-2 border-b border-white/10 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-medium text-slate-300">Live Device Viewport</span>
              </div>
              <span>Auto-Scrolling Live Gallery</span>
            </div>

            <AutoScrollCarousel
              images={project.screenshots || [project.image]}
              alt={`${project.title} live interface preview`}
              aspectRatioClass="h-80 sm:h-[480px] lg:h-[540px]"
              objectFitClass="object-contain"
            />
          </div>
        </section>

        {/* Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 text-center hover:border-brand-purple/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                    {metric.label}
                  </p>
                  <p className="font-display text-2xl sm:text-3xl font-bold bg-grad-primary bg-clip-text text-transparent mb-1">
                    {metric.value}
                  </p>
                  {metric.detail && (
                    <p className="text-[11px] text-slate-400">{metric.detail}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Narrative: The Challenge vs The Solution */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* The Challenge */}
          <SpotlightCard className="p-6 sm:p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono font-semibold mb-4">
              <Zap className="w-3.5 h-3.5" />
              <span>The Engineering Challenge</span>
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">
              Problem &amp; Constraints
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.challenge || project.description}
            </p>
          </SpotlightCard>

          {/* The Architectural Solution */}
          <SpotlightCard className="p-6 sm:p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>The Architectural Solution</span>
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3">
              Technical Implementation
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              {project.solution || project.overview || project.description}
            </p>
          </SpotlightCard>
        </section>

        {/* Engineering Highlights */}
        {project.keyHighlights && project.keyHighlights.length > 0 && (
          <section className="mb-16">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/15 border border-brand-purple/30 text-brand-violet text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Core Engineering Highlights</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Technical Highlights &amp; Innovations
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.keyHighlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-purple/40 transition-colors flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-xl bg-brand-purple/20 border border-brand-purple/30 flex items-center justify-center text-brand-violet flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-200 leading-relaxed font-medium">
                      {highlight}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Features Showcase */}
        {project.features && project.features.length > 0 && (
          <section className="mb-16">
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/15 border border-brand-cyan/30 text-brand-cyan text-xs font-bold uppercase tracking-wider mb-2">
                <Layers className="w-3.5 h-3.5" />
                <span>Feature Architecture</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Key Product Capabilities
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feature, i) => (
                <SpotlightCard key={i} className="p-6">
                  <h3 className="font-display text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </SpotlightCard>
              ))}
            </div>
          </section>
        )}

        {/* System Architecture Breakdown */}
        {project.architecture && (
          <section className="mb-16">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0b0b1e] border border-white/10 relative overflow-hidden">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-violet/20 border border-brand-violet/40 text-brand-violet text-xs font-mono font-semibold mb-4">
                <Cpu className="w-3.5 h-3.5" />
                <span>{project.architecture.pattern}</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-white mb-3">
                System Architecture &amp; Data Flow
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-3xl">
                {project.architecture.overview}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.architecture.layers.map((layer, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-white/5 border border-white/10"
                  >
                    <span className="text-[10px] font-mono text-brand-cyan font-bold uppercase block mb-1">
                      Layer {index + 1}
                    </span>
                    <h4 className="font-display text-sm font-bold text-white mb-1">
                      {layer.name}
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {layer.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Tech Stack Breakdown */}
        <section className="mb-16">
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/15 border border-brand-purple/30 text-brand-violet text-xs font-bold uppercase tracking-wider mb-2">
              <FolderOpen className="w-3.5 h-3.5" />
              <span>Technology Ecosystem</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Tech Stack &amp; Dependencies
            </h2>
          </div>

          {project.techStackDetailed && project.techStackDetailed.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.techStackDetailed.map((stackGroup, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/10"
                >
                  <h3 className="text-xs font-mono uppercase font-bold text-brand-cyan tracking-wider mb-3">
                    {stackGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {stackGroup.skills.map((skill, si) => (
                      <span
                        key={si}
                        className="px-2.5 py-1 rounded-lg bg-brand-purple/10 border border-brand-purple/20 text-xs font-mono text-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-xl bg-brand-purple/15 border border-brand-purple/30 text-xs font-mono text-brand-violet font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </section>

        {/* Next & Previous Project Navigation */}
        <section className="mb-16 pt-8 border-t border-white/10">
          <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
            Browse More Production Case Studies
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href={`/projects/${prevProject.id}`}
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-purple/50 group transition-all"
            >
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-1">
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                <span>Previous Project</span>
              </div>
              <h4 className="font-display text-base font-bold text-white group-hover:text-brand-violet transition-colors">
                {prevProject.title}
              </h4>
              <p className="text-xs text-slate-400 line-clamp-1 mt-1">
                {prevProject.badgeText} · {prevProject.category}
              </p>
            </Link>

            <Link
              href={`/projects/${nextProject.id}`}
              className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-cyan/50 group transition-all text-right sm:text-right"
            >
              <div className="flex items-center justify-end gap-2 text-xs text-slate-400 font-mono mb-1">
                <span>Next Project</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
              <h4 className="font-display text-base font-bold text-white group-hover:text-brand-cyan transition-colors">
                {nextProject.title}
              </h4>
              <p className="text-xs text-slate-400 line-clamp-1 mt-1">
                {nextProject.badgeText} · {nextProject.category}
              </p>
            </Link>
          </div>
        </section>

        {/* Hire / Conversion CTA Banner */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-brand-purple/25 via-[#0d0d26] to-brand-cyan/15 border border-brand-purple/40 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-purple/20 border border-brand-purple/40 text-brand-violet text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Available for Hire &amp; Consulting</span>
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white mb-4">
              Need a High-Performance Mobile App Built for Your Business?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              Let&apos;s build an exceptional Android, iOS, or Web application tailored to your goals.
              Recognized as one of the best app developers in Bangladesh, delivering clean code and 60 FPS performance.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${personalInfo.email}?subject=Mobile App Project Inquiry: ${project.title}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-grad-primary text-white font-semibold text-sm shadow-[0_0_30px_rgba(124,58,237,0.4)] hover:scale-105 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Start a Project</span>
              </a>
              <a
                href={`https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-sm hover:bg-white/20 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
