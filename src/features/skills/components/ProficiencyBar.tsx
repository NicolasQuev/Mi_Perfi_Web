"use client";

import { motion, useReducedMotion } from "motion/react";

interface ProficiencyBarProps {
  label: string;
  proficiency: number;
  delayInSeconds: number;
}

export function ProficiencyBar({ label, proficiency, delayInSeconds }: ProficiencyBarProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <li>
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <span className="text-sm font-medium text-text-primary">{label}</span>
        <span className="font-mono text-xs text-text-muted">{proficiency}%</span>
      </div>

      <div
        role="meter"
        aria-label={label}
        aria-valuenow={proficiency}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-1.5 w-full overflow-hidden rounded-full bg-surface-overlay"
      >
        <motion.div
          className="h-full rounded-full bg-linear-to-r from-accent-violet to-accent-cyan"
          initial={prefersReducedMotion ? false : { width: 0 }}
          whileInView={{ width: `${proficiency}%` }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: delayInSeconds, ease: [0.22, 1, 0.36, 1] }}
          style={prefersReducedMotion ? { width: `${proficiency}%` } : undefined}
        />
      </div>
    </li>
  );
}
