import Link from "next/link";
import { Heart } from "lucide-react";
import { personalInfo, projectsData } from "@/data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="py-10 border-t border-white/10 relative z-10 bg-[#050510]"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 text-slate-400 text-xs sm:text-sm text-center">
        {/* Quick Project Case Study Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-6 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>·</span>
          <Link href="/projects" className="hover:text-white transition-colors">
            All Projects
          </Link>
          <span>·</span>
          {projectsData.slice(0, 4).map((p) => (
            <Link
              key={p.id}
              href={`/projects/${p.id}`}
              className="hover:text-brand-violet transition-colors"
            >
              {p.title}
            </Link>
          ))}
        </div>

        <p className="flex items-center justify-center gap-1.5 flex-wrap mb-2">
          <span>© {currentYear}</span>
          <strong className="font-semibold text-white">{personalInfo.name}</strong>.
          <span>Best App Developer in BD · Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500 inline" aria-hidden="true" />
          <span>&amp; Flutter precision.</span>
        </p>

        {/* Hidden address landmark for crawlers — provides contact context */}
        <address className="sr-only not-italic">
          <span>{personalInfo.name}</span>,{" "}
          <span>{personalInfo.location}</span>.{" "}
          Email: <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>.
          {personalInfo.socials.map((s) => (
            <a key={s.platform} href={s.url} rel="me noopener noreferrer">
              {personalInfo.name} on {s.platform}
            </a>
          ))}
        </address>
      </div>
    </footer>
  );
}
