"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { profile } from "@/content/profile";
import { uiCopy } from "@/content/ui-copy";
import { useTranslate } from "@/i18n/LanguageProvider";
import { SectionShell } from "@/shared/components/SectionShell";
import { mergeClassNames } from "@/shared/lib/class-names";
import {
  ALL_TECHNOLOGIES_FILTER,
  collectTechnologies,
  filterByTechnology,
} from "../projectFilters";
import { ProjectCard } from "./ProjectCard";

const TECHNOLOGY_FILTERS = collectTechnologies(profile.projects);

export function ProjectsSection() {
  const translate = useTranslate();
  const [activeTechnology, setActiveTechnology] = useState<string>(ALL_TECHNOLOGIES_FILTER);

  const visibleProjects = useMemo(
    () => filterByTechnology(profile.projects, activeTechnology),
    [activeTechnology],
  );

  const filters = [ALL_TECHNOLOGIES_FILTER, ...TECHNOLOGY_FILTERS];

  return (
    <SectionShell
      id="projects"
      eyebrow={translate(uiCopy.projects.eyebrow)}
      title={translate(uiCopy.projects.title)}
      description={translate(uiCopy.projects.description)}
    >
      <div className="flex flex-wrap gap-2">
        {filters.map((technology) => {
          const isActive = technology === activeTechnology;
          const label =
            technology === ALL_TECHNOLOGIES_FILTER
              ? translate(uiCopy.projects.allFilter)
              : technology;

          return (
            <button
              key={technology}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveTechnology(technology)}
              className={mergeClassNames(
                "rounded-full border px-3.5 py-1.5 font-mono text-xs transition duration-200",
                isActive
                  ? "border-accent-cyan/60 bg-accent-cyan/12 text-accent-cyan"
                  : "border-border-subtle text-text-secondary hover:border-border-strong hover:text-text-primary",
              )}
            >
              {label}
            </button>
          );
        })}
      </div>

      {visibleProjects.length === 0 ? (
        <p className="mt-10 text-sm text-text-muted">{translate(uiCopy.projects.emptyState)}</p>
      ) : (
        <motion.ul layout className="mt-10 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project) => (
              <motion.li
                key={project.id}
                data-reveal
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <ProjectCard project={project} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      )}
    </SectionShell>
  );
}
