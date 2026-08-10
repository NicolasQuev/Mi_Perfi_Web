"use client";

import { Check, ExternalLink, MoveUpRight } from "lucide-react";
import type { Project } from "@/content/types";
import { uiCopy } from "@/content/ui-copy";
import { useTranslate } from "@/i18n/LanguageProvider";
import { SocialIcon } from "@/shared/components/SocialIcon";
import { SpotlightCard } from "@/shared/components/SpotlightCard";
import { TechBadge } from "@/shared/components/TechBadge";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const translate = useTranslate();

  return (
    <SpotlightCard className="flex h-full flex-col p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-text-primary">{project.name}</h3>
          <p className="mt-1 text-sm text-accent-cyan">{translate(project.tagline)}</p>
        </div>
        <span className="shrink-0 font-mono text-xs text-text-muted">{project.year}</span>
      </div>

      {project.isFeatured ? (
        <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-accent-fuchsia/40 bg-accent-fuchsia/10 px-3 py-1 text-xs font-medium text-accent-fuchsia">
          <MoveUpRight className="size-3" aria-hidden />
          {translate(uiCopy.projects.featuredBadge)}
        </span>
      ) : null}

      <p className="mt-4 text-sm leading-relaxed text-text-secondary text-pretty">
        {translate(project.description)}
      </p>

      <ul className="mt-5 space-y-2">
        {project.outcomes.map((outcome) => (
          <li key={outcome.en} className="flex items-start gap-2.5 text-sm text-text-secondary">
            <Check className="mt-0.5 size-4 shrink-0 text-accent-violet" aria-hidden />
            {translate(outcome)}
          </li>
        ))}
      </ul>

      <ul className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <li key={technology}>
            <TechBadge>{technology}</TechBadge>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-4 pt-6">
        {project.repositoryUrl ? (
          <a
            href={project.repositoryUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition hover:text-accent-cyan"
          >
            <SocialIcon platform="github" className="size-4" />
            {translate(uiCopy.projects.viewCode)}
          </a>
        ) : null}

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition hover:text-accent-cyan"
          >
            <ExternalLink className="size-4" aria-hidden />
            {translate(uiCopy.projects.viewLive)}
          </a>
        ) : null}
      </div>
    </SpotlightCard>
  );
}
