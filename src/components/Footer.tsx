import { Heart } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className="py-8 border-t border-white/10 relative z-10 bg-[#050510]"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 text-slate-400 text-xs sm:text-sm text-center">
        <p className="flex items-center justify-center gap-1.5 flex-wrap">
          <span>© {currentYear}</span>
          <strong className="font-semibold text-white">{personalInfo.name}</strong>.
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500 inline" aria-hidden="true" />
          <span>&amp; Flutter passion.</span>
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
