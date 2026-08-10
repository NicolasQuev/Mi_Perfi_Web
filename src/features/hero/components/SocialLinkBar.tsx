"use client";

import { profile } from "@/content/profile";
import { SocialIcon } from "@/shared/components/SocialIcon";

export function SocialLinkBar() {
  return (
    <ul className="flex items-center gap-3">
      {profile.socialLinks.map((link) => (
        <li key={link.platform}>
          <a
            href={link.url}
            target={link.url.startsWith("http") ? "_blank" : undefined}
            rel={link.url.startsWith("http") ? "noreferrer noopener" : undefined}
            aria-label={link.label}
            title={link.label}
            className="grid size-11 place-items-center rounded-xl glass-panel text-text-secondary transition duration-300 hover:-translate-y-0.5 hover:border-accent-violet/60 hover:text-accent-cyan"
          >
            <SocialIcon platform={link.platform} className="size-4.5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
