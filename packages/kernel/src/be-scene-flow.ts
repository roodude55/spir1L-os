// Spira1L-OS Mobius Hand Onboarding — Guided Flow Script

import { BeSceneState, BeScenePhase, SceneEvent } from './be-scene-skeleton';
import beScenePrompts from './be-scene-prompts.json';

export const beScenePhases: BeScenePhase[] = [
  "opening",
  "breath",
  "mirror",
  "causality",
  "reflection",
  "heroic_intent",
  "mint_bloom",
  "done"
];

export function nextBeScenePhase(current: BeScenePhase): BeScenePhase {
  const idx = beScenePhases.indexOf(current);
  return beScenePhases[Math.min(idx + 1, beScenePhases.length - 1)];
}

// Sample guided event generator
export function generateSceneEvent(
  state: BeSceneState,
  phase: BeScenePhase,
  actor: SceneEvent["actor"],
  text: string,
  witnesses?: string[]
): SceneEvent {
  return {
    phase,
    actor,
    text,
    timestamp: new Date().toISOString(),
    witnesses,
  };
}

// Example: Advance phase and log event
export function advanceBeScene(state: BeSceneState, eventText: string, actor: SceneEvent["actor"]) {
  const nextPhase = nextBeScenePhase(state.currentPhase);
  const event = generateSceneEvent(state, nextPhase, actor, eventText, [actor]);
  return {
    ...state,
    currentPhase: nextPhase,
    log: [...state.log, event],
  };
}
