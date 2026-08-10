"use client";

import { useTranslate } from "@/i18n/LanguageProvider";
import type { LocalizedText } from "@/i18n/locale";
import { SpotlightCard } from "@/shared/components/SpotlightCard";

interface Principle {
  keyword: string;
  statement: LocalizedText;
}

/** The working principles rendered as a stylised source file. */
const PRINCIPLES: Principle[] = [
  {
    keyword: "readability",
    statement: { es: "El código claro gana al código ingenioso.", en: "Clear code beats clever code." },
  },
  {
    keyword: "simplicity",
    statement: { es: "La solución más simple suele ser la correcta.", en: "The simplest solution is usually the right one." },
  },
  {
    keyword: "consistency",
    statement: {
      es: "Todo el proyecto debe sentirse escrito por una sola persona.",
      en: "The whole project should feel written by one person.",
    },
  },
  {
    keyword: "ownership",
    statement: {
      es: "Dejar el código mejor de como lo encontré.",
      en: "Leave the code better than I found it.",
    },
  },
];

export function PrinciplesCard() {
  const translate = useTranslate();

  return (
    <SpotlightCard className="p-0">
      <div className="flex items-center gap-2 border-b border-border-subtle px-5 py-3">
        <span aria-hidden className="size-3 rounded-full bg-accent-fuchsia/70" />
        <span aria-hidden className="size-3 rounded-full bg-accent-violet/70" />
        <span aria-hidden className="size-3 rounded-full bg-accent-cyan/70" />
        <span className="ml-2 font-mono text-xs text-text-muted">principles.ts</span>
      </div>

      <ul className="space-y-4 p-5 font-mono text-sm leading-relaxed sm:p-6">
        {PRINCIPLES.map((principle, index) => (
          <li key={principle.keyword} className="flex gap-4">
            <span aria-hidden className="select-none text-text-muted">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>
              <span className="text-accent-violet">const</span>{" "}
              <span className="text-accent-cyan">{principle.keyword}</span>{" "}
              <span className="text-text-muted">=</span>{" "}
              <span className="text-text-secondary">
                &quot;{translate(principle.statement)}&quot;
              </span>
            </span>
          </li>
        ))}
      </ul>
    </SpotlightCard>
  );
}
