import { mergeClassNames } from "@/shared/lib/class-names";

interface TechBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function TechBadge({ children, className }: TechBadgeProps) {
  return (
    <span
      className={mergeClassNames(
        "inline-flex items-center rounded-full border border-border-subtle bg-surface-overlay/60 px-3 py-1 font-mono text-xs text-text-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
}
