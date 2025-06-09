// Spira1L-OS "Be Scene" — Mobius Hand Onboarding Scene Skeleton

export interface SceneSeedInput {
  name?: string;
  birthdate: string;
  time?: string;
  location?: string;
  intention?: string;
}

export interface ArchetypeNode {
  id: number;
  name: string;
  gptPrompt: string;
  iching: string;
  tarot: string;
  numerology: string;
  phiAngle: number;
}

export interface MobiusHand {
  nodes: ArchetypeNode[]; // Five matched pi1Lot guides
}

export interface BeSceneState {
  seed: SceneSeedInput;
  mobiusHand: MobiusHand;
  currentPhase: BeScenePhase;
  log: SceneEvent[];
}

export type BeScenePhase =
  | "opening"
  | "breath"
  | "mirror"
  | "causality"
  | "reflection"
  | "heroic_intent"
  | "mint_bloom"
  | "done";

export interface SceneEvent {
  phase: BeScenePhase;
  actor: "user" | "mentor" | "challenger" | "healer" | "mirror" | "scribe";
  text: string;
  zcm?: number;
  timestamp: string;
  witnesses?: string[];
}

// Mobius hand selector algorithm (stub)
export function selectMobiusHand(
  nodes: ArchetypeNode[],
  birthZcm: number,
  intentionZcm: number
): ArchetypeNode[] {
  // TODO: Score and sort nodes by harmonic alignment
  return nodes.slice(0, 5); // placeholder: pick first 5
}

// Scene initialization
export function initBeScene(seed: SceneSeedInput, allNodes: ArchetypeNode[]): BeSceneState {
  const birthZcm = computeZCM(seed.birthdate, seed.time);
  const intentionZcm = computeZCM(seed.intention || "", seed.time);

  const mobiusHand = { nodes: selectMobiusHand(allNodes, birthZcm, intentionZcm) };

  return {
    seed,
    mobiusHand,
    currentPhase: "opening",
    log: [],
  };
}

// Placeholder ZCM computation
function computeZCM(str: string, time?: string): number {
  // TODO: Real ZCM logic
  return str.length + (time ? time.length : 0);
}
