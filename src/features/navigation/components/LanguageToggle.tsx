"use client";

import { Languages } from "lucide-react";
import { uiCopy } from "@/content/ui-copy";
import { useLanguage } from "@/i18n/LanguageProvider";
import { nextLocale } from "@/i18n/locale";

export function LanguageToggle() {
  const { locale, toggleLocale, translate } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={translate(uiCopy.navigation.switchLanguage)}
      className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface-overlay/60 px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-text-secondary transition hover:border-accent-cyan/60 hover:text-text-primary"
    >
      <Languages className="size-3.5" aria-hidden />
      <span className="text-accent-cyan">{locale}</span>
      <span aria-hidden className="text-text-muted">
        /
      </span>
      <span aria-hidden>{nextLocale(locale)}</span>
    </button>
  );
}
