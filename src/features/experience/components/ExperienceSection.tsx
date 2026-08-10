"use client";

import { profile } from "@/content/profile";
import { uiCopy } from "@/content/ui-copy";
import { useTranslate } from "@/i18n/LanguageProvider";
import { SectionShell } from "@/shared/components/SectionShell";
import { ExperienceTimelineItem } from "./ExperienceTimelineItem";

export function ExperienceSection() {
  const translate = useTranslate();

  return (
    <SectionShell
      id="experience"
      eyebrow={translate(uiCopy.experience.eyebrow)}
      title={translate(uiCopy.experience.title)}
    >
      <div className="relative">
        <span
          aria-hidden
          className="absolute left-4 top-2 h-[calc(100%-1rem)] w-px bg-linear-to-b from-accent-violet/60 via-border-strong to-transparent sm:left-5"
        />

        <ol className="space-y-8">
          {profile.experience.map((entry, index) => (
            <ExperienceTimelineItem
              key={entry.id}
              entry={entry}
              delayInSeconds={index * 0.1}
            />
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}
