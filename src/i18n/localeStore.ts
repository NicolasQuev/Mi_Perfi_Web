import { DEFAULT_LOCALE, isLocale, type Locale } from "./locale";

const STORAGE_KEY = "preferred-locale";

const listeners = new Set<() => void>();

/**
 * useSyncExternalStore requires a snapshot that stays referentially stable
 * between renders, so the resolved locale is cached after the first read.
 */
let cachedLocale: Locale | null = null;

function readStoredLocale(): Locale | null {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);

    return isLocale(stored) ? stored : null;
  } catch {
    // Storage can be unavailable (private mode, blocked cookies). Not fatal.
    return null;
  }
}

function detectPreferredLocale(): Locale {
  return window.navigator.language.startsWith("en") ? "en" : DEFAULT_LOCALE;
}

export function subscribeToLocale(listener: () => void): () => void {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

export function getLocaleSnapshot(): Locale {
  cachedLocale ??= readStoredLocale() ?? detectPreferredLocale();

  return cachedLocale;
}

/** The server has no browser preferences, so it always renders the default. */
export function getServerLocaleSnapshot(): Locale {
  return DEFAULT_LOCALE;
}

export function persistLocale(locale: Locale): void {
  cachedLocale = locale;

  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Preference simply will not survive a reload.
  }

  listeners.forEach((listener) => listener());
}
