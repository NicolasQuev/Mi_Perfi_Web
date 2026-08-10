"use client";

import { motion, useReducedMotion } from "motion/react";

const ENTRY_OFFSET_PX = 28;
const VIEWPORT_MARGIN = "-80px";

interface RevealOnScrollProps {
  children: React.ReactNode;
  /** Stagger helper: delays the animation to build a cascade inside a list. */
  delayInSeconds?: number;
  className?: string;
}

/**
 * Fades content in the first time it enters the viewport.
 * Collapses to a plain wrapper when the user prefers reduced motion.
 */
export function RevealOnScroll({
  children,
  delayInSeconds = 0,
  className,
}: RevealOnScrollProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      data-reveal
      className={className}
      initial={{ opacity: 0, y: ENTRY_OFFSET_PX }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: VIEWPORT_MARGIN }}
      transition={{ duration: 0.55, delay: delayInSeconds, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
