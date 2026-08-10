"use client";

import { ArrowUp } from "lucide-react";
import { profile } from "@/content/profile";
import { uiCopy } from "@/content/ui-copy";
import { useTranslate } from "@/i18n/LanguageProvider";
import { SocialIcon } from "@/shared/components/SocialIcon";

const BUILT_WITH = ["Next.js", "React", "TypeScript", "Tailwind CSS"];

export function SiteFooter() {
  const translate = useTranslate();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-sm text-text-secondary">
            © {currentYear} {profile.fullName}. {translate(uiCopy.footer.rights)}
          </p>
          <p className="font-mono text-xs text-text-muted">
            {translate(uiCopy.footer.builtWith)} {BUILT_WITH.join(" · ")}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <ul className="flex items-center gap-2">
            {profile.socialLinks.map((link) => (
              <li key={link.platform}>
                <a
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : undefined}
                  rel={link.url.startsWith("http") ? "noreferrer noopener" : undefined}
                  aria-label={link.label}
                  className="grid size-9 place-items-center rounded-lg border border-border-subtle text-text-secondary transition hover:border-accent-violet/60 hover:text-accent-cyan"
                >
                  <SocialIcon platform={link.platform} className="size-4" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#hero"
            aria-label={translate(uiCopy.footer.backToTop)}
            className="grid size-9 place-items-center rounded-lg border border-border-subtle text-text-secondary transition hover:border-accent-cyan/60 hover:text-accent-cyan"
          >
            <ArrowUp className="size-4" aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
