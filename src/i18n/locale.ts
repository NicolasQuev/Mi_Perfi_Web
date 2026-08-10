export const SUPPORTED_LOCALES = ["es", "en"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "es";

/**
 * Every user-facing string in the project is stored in both languages so the
 * translations never drift apart from the data they describe.
 */
export type LocalizedText = Record<Locale, string>;

export function isLocale(value: unknown): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

export function nextLocale(current: Locale): Locale {
  return current === "es" ? "en" : "es";
}
