// MobiusFinger: keep the detailed version
export interface MobiusFinger {
  name: string;                  // Mentor, Trickster, Healer, Challenger, Scribe
  archetype: string;             // e.g. "43" (iChing), "Fool" (Tarot), "7" (numerology)
  gptPrompt: string;             // System prompt for this AI
  intro: string;                 // First-person intro
  phiNode: number;               // [0–87] index on the phi wheel
}

// Add UserOnboardingProfile (if not already present)
export interface UserOnboardingProfile {
  id: string;
  name?: string;
  birthdate: string;             // YYYY-MM-DD
  time?: string;                 // HH:MM
  fingerprint: [string, string, string, number]; // [iChing, Tarot, Numerology, phi]
  mobiusHand: MobiusFinger[];
  mintedMoments: {
    event: string;
    zcm: number;
    witnesses: string[];
    timestamp: string;
  }[];
}

// Add other useful onboarding types from new drafts
export type MobiusFingerName = "Mentor" | "Trickster" | "Challenger" | "Healer" | "Scribe";

export interface MobiusPrompt {
  name: MobiusFingerName;
  archetype: string;
  gptPrompt: string;
  intro: string;
  phiNode: number;
}

export interface OnboardingStep {
  id: string;
  type: "narrative" | "ai_intro" | "action" | "reflection" | "milestone";
  prompt: string;
  role?: MobiusFingerName;
}
