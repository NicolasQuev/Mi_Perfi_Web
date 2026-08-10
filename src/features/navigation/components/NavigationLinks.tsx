"use client";

import { motion } from "motion/react";
import { navigationSections } from "../navigationSections";
import { useTranslate } from "@/i18n/LanguageProvider";
import { mergeClassNames } from "@/shared/lib/class-names";

export type NavigationOrientation = "horizontal" | "vertical";

const LIST_STYLES: Record<NavigationOrientation, string> = {
  horizontal: "flex items-center gap-1",
  vertical: "flex flex-col gap-1",
};

const LINK_STYLES: Record<NavigationOrientation, string> = {
  horizontal: "px-4 py-2 text-sm",
  vertical: "px-4 py-3 text-base",
};

interface NavigationLinksProps {
  orientation: NavigationOrientation;
  activeSectionId: string | null;
  onNavigate?: () => void;
}

export function NavigationLinks({
  orientation,
  activeSectionId,
  onNavigate,
}: NavigationLinksProps) {
  const translate = useTranslate();

  return (
    <ul className={LIST_STYLES[orientation]}>
      {navigationSections.map((section) => {
        const isActive = section.id === activeSectionId;

        return (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={onNavigate}
              aria-current={isActive ? "true" : undefined}
              className={mergeClassNames(
                "relative block whitespace-nowrap rounded-full font-medium transition-colors duration-200",
                LINK_STYLES[orientation],
                isActive ? "text-text-primary" : "text-text-secondary hover:text-text-primary",
              )}
            >
              {isActive ? (
                <motion.span
                  layoutId={`navigation-highlight-${orientation}`}
                  aria-hidden
                  className="absolute inset-0 -z-10 rounded-full border border-accent-violet/40 bg-accent-violet/10"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              ) : null}
              {translate(section.label)}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
