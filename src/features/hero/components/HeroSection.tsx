"use client";

import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import { profile } from "@/content/profile";
import { uiCopy } from "@/content/ui-copy";
import { useTranslate } from "@/i18n/LanguageProvider";
import { ActionLink } from "@/shared/components/ActionButton";
import { RevealOnScroll } from "@/shared/components/RevealOnScroll";
import { CareerMetrics } from "./CareerMetrics";
import { RotatingRole } from "./RotatingRole";
import { SocialLinkBar } from "./SocialLinkBar";

export function HeroSection() {
  const translate = useTranslate();

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="mx-auto flex min-h-svh w-full max-w-6xl flex-col justify-center px-5 pb-20 pt-28 sm:px-8 sm:pt-32"
    >
      <RevealOnScroll className="max-w-3xl">
        <p className="inline-flex items-center gap-2 rounded-full border border-accent-violet/30 bg-accent-violet/10 px-4 py-1.5 text-xs font-medium text-accent-violet">
          <span aria-hidden className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent-cyan opacity-70" />
            <span className="relative inline-flex size-2 rounded-full bg-accent-cyan" />
          </span>
          {translate(profile.availability)}
        </p>

        <h1 id="hero-heading" className="mt-6">
          <span className="block font-mono text-sm uppercase tracking-[0.3em] text-text-muted">
            {translate(uiCopy.hero.greeting)}
          </span>
          <span className="mt-3 block text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
            <span className="gradient-text">{profile.fullName}</span>
          </span>
        </h1>

        <div className="mt-5">
          <RotatingRole />
        </div>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary text-pretty">
          {translate(profile.headline)}
        </p>

        <p className="mt-4 inline-flex items-center gap-2 text-sm text-text-muted">
          <MapPin className="size-4" aria-hidden />
          {translate(profile.location)}
        </p>
      </RevealOnScroll>

      <RevealOnScroll delayInSeconds={0.12} className="mt-10 flex flex-wrap items-center gap-3">
        <ActionLink href="#contact" variant="primary">
          <Sparkles className="size-4" aria-hidden />
          {translate(uiCopy.hero.primaryAction)}
        </ActionLink>

        <ActionLink href="#projects" variant="secondary">
          {translate(uiCopy.hero.secondaryAction)}
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
        </ActionLink>

        <ActionLink href={profile.resumeUrl} download variant="ghost">
          <Download className="size-4" aria-hidden />
          {translate(uiCopy.hero.resumeAction)}
        </ActionLink>
      </RevealOnScroll>

      <RevealOnScroll delayInSeconds={0.2} className="mt-10">
        <SocialLinkBar />
      </RevealOnScroll>

      <RevealOnScroll delayInSeconds={0.28} className="mt-14">
        <CareerMetrics />
      </RevealOnScroll>
    </section>
  );
}
