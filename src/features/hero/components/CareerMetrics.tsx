"use client";

import { profile } from "@/content/profile";
import { useTranslate } from "@/i18n/LanguageProvider";

export function CareerMetrics() {
  const translate = useTranslate();

  return (
    <dl className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {profile.metrics.map((metric) => (
        <div
          key={metric.value + metric.label.en}
          className="rounded-2xl glass-panel px-4 py-4 transition-colors hover:border-accent-violet/40"
        >
          <dt className="sr-only">{translate(metric.label)}</dt>
          <dd>
            <span className="block text-2xl font-semibold gradient-text sm:text-3xl">
              {metric.value}
            </span>
            <span className="mt-1 block text-xs text-text-secondary sm:text-sm">
              {translate(metric.label)}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
