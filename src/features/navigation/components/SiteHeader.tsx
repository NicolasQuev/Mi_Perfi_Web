"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { profile } from "@/content/profile";
import { uiCopy } from "@/content/ui-copy";
import { useTranslate } from "@/i18n/LanguageProvider";
import { ActionLink } from "@/shared/components/ActionButton";
import { mergeClassNames } from "@/shared/lib/class-names";
import { useActiveSection } from "../hooks/useActiveSection";
import { navigationSections } from "../navigationSections";
import { LanguageToggle } from "./LanguageToggle";
import { MobileNavigationPanel } from "./MobileNavigationPanel";
import { NavigationLinks } from "./NavigationLinks";

/** Stable reference so the scrollspy observer is not rebuilt on every render. */
const SECTION_IDS = navigationSections.map((section) => section.id);

const SCROLLED_THRESHOLD_PX = 24;

function buildInitials(fullName: string): string {
  return fullName
    .split(" ")
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join("");
}

export function SiteHeader() {
  const translate = useTranslate();
  const activeSectionId = useActiveSection(SECTION_IDS);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function syncScrollState() {
      setIsScrolled(window.scrollY > SCROLLED_THRESHOLD_PX);
    }

    syncScrollState();
    window.addEventListener("scroll", syncScrollState, { passive: true });

    return () => window.removeEventListener("scroll", syncScrollState);
  }, []);

  return (
    <header
      className={mergeClassNames(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
        isScrolled || isMenuOpen
          ? "border-b border-border-subtle bg-surface-base/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a
          href="#hero"
          className="group inline-flex items-center gap-2.5 font-mono text-sm font-semibold tracking-tight"
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-linear-to-br from-accent-violet to-accent-cyan text-surface-base transition group-hover:brightness-110">
            {buildInitials(profile.shortName)}
          </span>
          <span className="hidden whitespace-nowrap text-text-primary sm:inline">
            {profile.shortName}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <NavigationLinks orientation="horizontal" activeSectionId={activeSectionId} />
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />

          <ActionLink
            href={profile.resumeUrl}
            download
            variant="secondary"
            className="hidden whitespace-nowrap px-4 py-2 text-xs lg:inline-flex"
          >
            <Download className="size-4" aria-hidden />
            {translate(uiCopy.hero.resumeAction)}
          </ActionLink>

          <button
            type="button"
            onClick={() => setIsMenuOpen((wasOpen) => !wasOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={translate(
              isMenuOpen ? uiCopy.navigation.closeMenu : uiCopy.navigation.openMenu,
            )}
            className="grid size-9 place-items-center rounded-lg border border-border-subtle text-text-secondary transition hover:text-text-primary md:hidden"
          >
            {isMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      <MobileNavigationPanel
        isOpen={isMenuOpen}
        activeSectionId={activeSectionId}
        onClose={() => setIsMenuOpen(false)}
      />
    </header>
  );
}
