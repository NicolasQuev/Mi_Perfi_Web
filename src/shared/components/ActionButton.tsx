import { mergeClassNames } from "@/shared/lib/class-names";

export type ActionVariant = "primary" | "secondary" | "ghost";

const BASE_STYLES =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition duration-300 disabled:cursor-not-allowed disabled:opacity-60";

const VARIANT_STYLES: Record<ActionVariant, string> = {
  primary:
    "bg-linear-to-r from-accent-violet to-accent-cyan text-surface-base shadow-[0_8px_30px_-10px_var(--color-accent-violet)] hover:brightness-110 hover:shadow-[0_12px_40px_-8px_var(--color-accent-violet)]",
  secondary:
    "glass-panel text-text-primary hover:border-accent-violet/60 hover:text-white",
  ghost: "text-text-secondary hover:text-text-primary",
};

/** Shared so buttons and links stay visually identical. */
export function actionClassName(variant: ActionVariant, className?: string): string {
  return mergeClassNames(BASE_STYLES, VARIANT_STYLES[variant], className);
}

interface ActionButtonProps extends React.ComponentProps<"button"> {
  variant?: ActionVariant;
}

export function ActionButton({
  variant = "primary",
  className,
  ...buttonProps
}: ActionButtonProps) {
  return <button className={actionClassName(variant, className)} {...buttonProps} />;
}

interface ActionLinkProps extends React.ComponentProps<"a"> {
  variant?: ActionVariant;
}

export function ActionLink({ variant = "primary", className, ...linkProps }: ActionLinkProps) {
  return <a className={actionClassName(variant, className)} {...linkProps} />;
}
