"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from "react";
import { nextLocale, type Locale, type LocalizedText } from "./locale";
import {
  getLocaleSnapshot,
  getServerLocaleSnapshot,
  persistLocale,
  subscribeToLocale,
} from "./localeStore";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  translate: (text: LocalizedText) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(
    subscribeToLocale,
    getLocaleSnapshot,
    getServerLocaleSnapshot,
  );

  // Keeps the document language in sync for screen readers and search engines.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const toggleLocale = useCallback(() => persistLocale(nextLocale(locale)), [locale]);
  const translate = useCallback((text: LocalizedText) => text[locale], [locale]);

  const value = useMemo<LanguageContextValue>(
    () => ({ locale, setLocale: persistLocale, toggleLocale, translate }),
    [locale, toggleLocale, translate],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside a LanguageProvider.");
  }

  return context;
}

/** Shortcut for components that only need to read translated strings. */
export function useTranslate(): (text: LocalizedText) => string {
  return useLanguage().translate;
}
