"use client";

import { useMemo } from "react";
import { useReducedMotion } from "motion/react";
import { profile } from "@/content/profile";
import { useLanguage } from "@/i18n/LanguageProvider";
import { TypewriterText } from "./TypewriterText";

/** Cycles through the profile roles with a terminal-style typing effect. */
export function RotatingRole() {
  const { locale, translate } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  const roles = useMemo(() => profile.rotatingRoles.map((role) => translate(role)), [translate]);

  return (
    <p className="flex min-h-9 items-center gap-1 font-mono text-lg text-accent-cyan sm:text-2xl">
      <span aria-hidden className="text-text-muted">
        &gt;
      </span>

      {prefersReducedMotion ? (
        <span>{roles[0]}</span>
      ) : (
        <>
          {/* Remounting on locale change restarts the animation from scratch. */}
          <TypewriterText key={locale} phrases={roles} />
          <span aria-hidden className="inline-block w-2.5 bg-accent-cyan animate-caret-blink">
            &nbsp;
          </span>
        </>
      )}
    </p>
  );
}
