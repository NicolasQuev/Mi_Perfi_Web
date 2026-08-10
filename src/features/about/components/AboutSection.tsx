"use client";

import { profile } from "@/content/profile";
import { uiCopy } from "@/content/ui-copy";
import { useTranslate } from "@/i18n/LanguageProvider";
import { RevealOnScroll } from "@/shared/components/RevealOnScroll";
import { SectionShell } from "@/shared/components/SectionShell";
import { PrinciplesCard } from "./PrinciplesCard";

export function AboutSection() {
  const translate = useTranslate();

  return (
    <SectionShell
      id="about"
      eyebrow={translate(uiCopy.about.eyebrow)}
      title={translate(uiCopy.about.title)}
    >
      <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-start lg:gap-14">
        <div className="space-y-5">
          {profile.aboutParagraphs.map((paragraph, index) => (
            <RevealOnScroll key={paragraph.en} delayInSeconds={index * 0.08}>
              <p className="text-base leading-relaxed text-text-secondary text-pretty sm:text-lg">
                {translate(paragraph)}
              </p>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delayInSeconds={0.16}>
          <PrinciplesCard />
        </RevealOnScroll>
      </div>
    </SectionShell>
  );
}
