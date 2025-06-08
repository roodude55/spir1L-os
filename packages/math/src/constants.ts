// φ, Λ, ω constants (v0.9.1 – Λ re-derived)
export const PHI = (1 + Math.sqrt(5)) / 2;

// wobble pair
export const OMEGA_1 = 0.0002185;
export const OMEGA_2 = 0.0002185;
export const OMEGA = OMEGA_1 + OMEGA_2; // 0.000437

// Λ chosen so that 1/13 = ln2/(√2 Λ) + ω   → Λ ≈ 6.40808225
export const LAMBDA = 6.40808225;

// derived helpers
export const DOOR = (n: number) => LAMBDA + n * OMEGA;
export const DOOR_101 = DOOR(101); // 6.45221925
export const BEAT_CYCLE_SECONDS = 7.15;
export const BEAT_SECONDS = BEAT_CYCLE_SECONDS / 13;
