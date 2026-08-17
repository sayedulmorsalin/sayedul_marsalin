import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import InteractiveAppPreview from "@/components/InteractiveAppPreview";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SkillsSection />
      <InteractiveAppPreview />
      <ProjectsSection />
      <ExperienceTimeline />
      <ContactSection />
      <Footer />
    </main>
  );
}
