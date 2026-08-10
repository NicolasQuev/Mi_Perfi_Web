"use client";

import { MapPin } from "lucide-react";
import { profile } from "@/content/profile";
import { uiCopy } from "@/content/ui-copy";
import { useTranslate } from "@/i18n/LanguageProvider";
import { RevealOnScroll } from "@/shared/components/RevealOnScroll";
import { SectionShell } from "@/shared/components/SectionShell";
import { SocialIcon } from "@/shared/components/SocialIcon";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  const translate = useTranslate();

  return (
    <SectionShell
      id="contact"
      eyebrow={translate(uiCopy.contact.eyebrow)}
      title={translate(uiCopy.contact.title)}
      description={translate(uiCopy.contact.description)}
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
        <RevealOnScroll className="space-y-8">
          <p className="text-base leading-relaxed text-text-secondary text-pretty">
            {translate(profile.summary)}
          </p>

          <p className="inline-flex items-center gap-2 text-sm text-text-muted">
            <MapPin className="size-4" aria-hidden />
            {translate(profile.location)}
          </p>

          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.28em] text-text-muted">
              {translate(uiCopy.contact.directContact)}
            </p>

            <ul className="space-y-3">
              {profile.socialLinks.map((link) => (
                <li key={link.platform}>
                  <a
                    href={link.url}
                    target={link.url.startsWith("http") ? "_blank" : undefined}
                    rel={link.url.startsWith("http") ? "noreferrer noopener" : undefined}
                    className="group inline-flex items-center gap-3 text-sm text-text-secondary transition hover:text-text-primary"
                  >
                    <span className="grid size-10 place-items-center rounded-xl glass-panel text-text-secondary transition group-hover:border-accent-violet/60 group-hover:text-accent-cyan">
                      <SocialIcon platform={link.platform} className="size-4" />
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delayInSeconds={0.12}>
          <div className="rounded-2xl glass-panel p-6 sm:p-8">
            <ContactForm />
          </div>
        </RevealOnScroll>
      </div>
    </SectionShell>
  );
}
