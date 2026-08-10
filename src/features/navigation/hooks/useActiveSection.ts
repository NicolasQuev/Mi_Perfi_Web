"use client";

import { useEffect, useState } from "react";

/** Highlights a section once it reaches the upper third of the viewport. */
const OBSERVER_ROOT_MARGIN = "-45% 0px -50% 0px";

export function useActiveSection(sectionIds: string[]): string | null {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry) {
          setActiveSectionId(visibleEntry.target.id);
        }
      },
      { rootMargin: OBSERVER_ROOT_MARGIN },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSectionId;
}
