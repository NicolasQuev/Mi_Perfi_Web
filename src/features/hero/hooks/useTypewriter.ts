"use client";

import { useEffect, useState } from "react";

const TYPING_SPEED_MS = 70;
const DELETING_SPEED_MS = 32;
const PAUSE_AFTER_PHRASE_MS = 1700;

interface TypingState {
  phraseIndex: number;
  visibleCharacters: number;
  isDeleting: boolean;
}

const INITIAL_STATE: TypingState = { phraseIndex: 0, visibleCharacters: 0, isDeleting: false };

function phraseAt(phrases: string[], index: number): string {
  return phrases[index] ?? "";
}

function hasFinishedTyping(state: TypingState, phrases: string[]): boolean {
  return !state.isDeleting && state.visibleCharacters === phraseAt(phrases, state.phraseIndex).length;
}

/** Pure transition: returns the state that follows the current one. */
function advance(state: TypingState, phrases: string[]): TypingState {
  if (state.isDeleting) {
    if (state.visibleCharacters === 0) {
      return {
        phraseIndex: (state.phraseIndex + 1) % phrases.length,
        visibleCharacters: 0,
        isDeleting: false,
      };
    }

    return { ...state, visibleCharacters: state.visibleCharacters - 1 };
  }

  if (hasFinishedTyping(state, phrases)) {
    return { ...state, isDeleting: true };
  }

  return { ...state, visibleCharacters: state.visibleCharacters + 1 };
}

function delayBeforeNextStep(state: TypingState, phrases: string[]): number {
  if (hasFinishedTyping(state, phrases)) {
    return PAUSE_AFTER_PHRASE_MS;
  }

  return state.isDeleting ? DELETING_SPEED_MS : TYPING_SPEED_MS;
}

/**
 * Types each phrase character by character, pauses, deletes it and moves on to
 * the next one. Every transition happens inside the timer callback, so the
 * effect only schedules work instead of triggering cascading renders.
 *
 * The hook keeps no memory of previous phrase lists: remount the component
 * (e.g. with a `key`) to restart the animation with a different set.
 */
export function useTypewriter(phrases: string[]): string {
  const [state, setState] = useState<TypingState>(INITIAL_STATE);

  useEffect(() => {
    if (phrases.length === 0) {
      return;
    }

    const timer = setTimeout(
      () => setState((current) => advance(current, phrases)),
      delayBeforeNextStep(state, phrases),
    );

    return () => clearTimeout(timer);
  }, [phrases, state]);

  return phraseAt(phrases, state.phraseIndex).slice(0, state.visibleCharacters);
}
