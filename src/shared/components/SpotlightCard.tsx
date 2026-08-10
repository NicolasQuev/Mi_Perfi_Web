"use client";

import { useRef, useState, type CSSProperties } from "react";
import { mergeClassNames } from "@/shared/lib/class-names";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

interface PointerPosition {
  x: number;
  y: number;
}

const HIDDEN_SPOTLIGHT_OPACITY = 0;
const VISIBLE_SPOTLIGHT_OPACITY = 1;

/**
 * Glass card with a soft light that follows the pointer.
 * The glow is purely decorative, so it is skipped on touch devices where
 * there is no hover state to track.
 */
export function SpotlightCard({ children, className }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [pointer, setPointer] = useState<PointerPosition>({ x: 0, y: 0 });
  const [isPointerInside, setIsPointerInside] = useState(false);

  function trackPointer(event: React.PointerEvent<HTMLDivElement>) {
    const bounds = cardRef.current?.getBoundingClientRect();

    if (!bounds) {
      return;
    }

    setPointer({ x: event.clientX - bounds.left, y: event.clientY - bounds.top });
  }

  const spotlightStyle = {
    "--spotlight-x": `${pointer.x}px`,
    "--spotlight-y": `${pointer.y}px`,
    opacity: isPointerInside ? VISIBLE_SPOTLIGHT_OPACITY : HIDDEN_SPOTLIGHT_OPACITY,
  } as CSSProperties;

  return (
    <div
      ref={cardRef}
      onPointerMove={trackPointer}
      onPointerEnter={() => setIsPointerInside(true)}
      onPointerLeave={() => setIsPointerInside(false)}
      className={mergeClassNames(
        "group relative isolate overflow-hidden rounded-2xl glass-panel transition-colors duration-300 hover:border-border-strong",
        className,
      )}
    >
      <div
        aria-hidden
        style={spotlightStyle}
        className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-300"
      >
        <div className="absolute inset-0 bg-[radial-gradient(220px_circle_at_var(--spotlight-x)_var(--spotlight-y),color-mix(in_oklab,var(--color-accent-violet)_22%,transparent),transparent_70%)]" />
      </div>
      {children}
    </div>
  );
}
