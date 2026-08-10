"use client";

import { Briefcase, MapPin } from "lucide-react";
import type { ExperienceEntry } from "@/content/types";
import { useTranslate } from "@/i18n/LanguageProvider";
import { RevealOnScroll } from "@/shared/components/RevealOnScroll";
import { TechBadge } from "@/shared/components/TechBadge";

interface ExperienceTimelineItemProps {
  entry: ExperienceEntry;
  delayInSeconds: number;
}

export function ExperienceTimelineItem({ entry, delayInSeconds }: ExperienceTimelineItemProps) {
  const translate = useTranslate();

  return (
    <li className="relative pl-10 sm:pl-14">
      <span
        aria-hidden
        className="absolute left-0 top-1 grid size-8 place-items-center rounded-full border border-accent-violet/40 bg-surface-base text-accent-violet sm:size-10"
      >
        <Briefcase className="size-4" />
      </span>

      <RevealOnScroll
        delayInSeconds={delayInSeconds}
        className="rounded-2xl glass-panel p-6 transition-colors duration-300 hover:border-border-strong"
      >
        <p className="font-mono text-xs uppercase tracking-widest text-accent-cyan">
          {translate(entry.period)}
        </p>

        <h3 className="mt-2 text-xl font-semibold text-text-primary">
          {translate(entry.role)}
        </h3>

        <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-text-secondary">
          <span className="font-medium text-text-primary">{entry.company}</span>
          <span className="inline-flex items-center gap-1.5 text-text-muted">
            <MapPin className="size-3.5" aria-hidden />
            {translate(entry.location)}
          </span>
        </p>

        <p className="mt-4 text-sm leading-relaxed text-text-secondary text-pretty">
          {translate(entry.summary)}
        </p>

        <ul className="mt-4 space-y-2">
          {entry.achievements.map((achievement) => (
            <li
              key={achievement.en}
              className="flex items-start gap-2.5 text-sm text-text-secondary"
            >
              <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent-violet" />
              {translate(achievement)}
            </li>
          ))}
        </ul>

        <ul className="mt-5 flex flex-wrap gap-2">
          {entry.technologies.map((technology) => (
            <li key={technology}>
              <TechBadge>{technology}</TechBadge>
            </li>
          ))}
        </ul>
      </RevealOnScroll>
    </li>
  );
}
