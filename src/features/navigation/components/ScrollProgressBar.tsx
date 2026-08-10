"use client";

import { motion, useScroll, useSpring } from "motion/react";

/** Thin gradient bar at the very top showing how far the page is scrolled. */
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-linear-to-r from-accent-violet via-accent-cyan to-accent-fuchsia"
    />
  );
}
