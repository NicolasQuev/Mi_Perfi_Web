import { mergeClassNames } from "@/shared/lib/class-names";
import { RevealOnScroll } from "./RevealOnScroll";

interface SectionShellProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Shared layout for every content section: consistent spacing, anchor id,
 * and a heading block with the same rhythm across the page.
 */
export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionShellProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={mergeClassNames(
        "mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28",
        className,
      )}
    >
      <RevealOnScroll className="mb-12 max-w-2xl sm:mb-16">
        <p className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.28em] text-accent-cyan">
          <span aria-hidden className="h-px w-8 bg-accent-cyan/60" />
          {eyebrow}
        </p>
        <h2
          id={headingId}
          className="text-3xl font-semibold tracking-tight text-text-primary text-balance sm:text-4xl md:text-5xl"
        >
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-base leading-relaxed text-text-secondary text-pretty">
            {description}
          </p>
        ) : null}
      </RevealOnScroll>

      {children}
    </section>
  );
}
