import { uiCopy } from "@/content/ui-copy";
import { AboutSection } from "@/features/about/components/AboutSection";
import { ContactSection } from "@/features/contact/components/ContactSection";
import { EducationSection } from "@/features/education/components/EducationSection";
import { ExperienceSection } from "@/features/experience/components/ExperienceSection";
import { SiteFooter } from "@/features/footer/components/SiteFooter";
import { HeroSection } from "@/features/hero/components/HeroSection";
import { ScrollProgressBar } from "@/features/navigation/components/ScrollProgressBar";
import { SiteHeader } from "@/features/navigation/components/SiteHeader";
import { ProjectsSection } from "@/features/projects/components/ProjectsSection";
import { SkillsSection } from "@/features/skills/components/SkillsSection";
import { DEFAULT_LOCALE } from "@/i18n/locale";

/** Composition root of the landing page: every section owns its own feature. */
export default function HomePage() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent-violet focus:px-4 focus:py-2 focus:text-sm focus:text-surface-base"
      >
        {uiCopy.navigation.skipToContent[DEFAULT_LOCALE]}
      </a>

      <ScrollProgressBar />
      <SiteHeader />

      <main id="main-content" className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </>
  );
}
