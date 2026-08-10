"use client";

import { useTypewriter } from "../hooks/useTypewriter";

interface TypewriterTextProps {
  phrases: string[];
}

export function TypewriterText({ phrases }: TypewriterTextProps) {
  return <span>{useTypewriter(phrases)}</span>;
}
