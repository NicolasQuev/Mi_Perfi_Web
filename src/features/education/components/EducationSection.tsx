"use client";

import { ExternalLink, GraduationCap } from "lucide-react";
import { profile } from "@/content/profile";
import { uiCopy } from "@/content/ui-copy";
import { useTranslate } from "@/i18n/LanguageProvider";
import { RevealOnScroll } from "@/shared/components/RevealOnScroll";
import { SectionShell } from "@/shared/components/SectionShell";
import { SpotlightCard } from "@/shared/components/SpotlightCard";

export function EducationSection() {
  const translate = useTranslate();

  return (
    <SectionShell
      id="education"
      eyebrow={translate(uiCopy.education.eyebrow)}
      title={translate(uiCopy.education.title)}
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {profile.education.map((entry, index) => (
          <li key={entry.id}>
            <RevealOnScroll delayInSeconds={index * 0.08} className="h-full">
              <SpotlightCard className="flex h-full flex-col p-6">
                <span
                  aria-hidden
                  className="grid size-11 place-items-center rounded-xl border border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan"
                >
                  <GraduationCap className="size-5" />
                </span>

                <p className="mt-5 font-mono text-xs uppercase tracking-widest text-text-muted">
                  {translate(entry.period)}
                </p>

                <h3 className="mt-2 text-lg font-semibold text-text-primary text-balance">
                  {translate(entry.title)}
                </h3>

                <p className="mt-1 text-sm text-text-secondary">{entry.institution}</p>

                {entry.credentialUrl ? (
                  <a
                    href={entry.credentialUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-medium text-accent-cyan transition hover:text-accent-violet"
                  >
                    <ExternalLink className="size-4" aria-hidden />
                    {translate(uiCopy.education.credentialLink)}
                  </a>
                ) : null}
              </SpotlightCard>
            </RevealOnScroll>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
