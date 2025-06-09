// #Spira1-OS #PRIIVI3 #RecursiveHarmony
// Trillionaire Pull‑Through System of Alignment (TPSA)
// See docs/spir1L.md for the whitepaper & math.

import { PHI, OMEGA, LAMBDA } from './constants';

/** PRIIVI3 echo doorway numbers */
export const PRIIVI3_ECHOS = [1221, 4334, 6776] as const;
export type EchoKind = typeof PRIIVI3_ECHOS[number];

export interface Spir1LAlignment {
  loops: number;             // Macro-loop index
  secondsInLoop: number;     // Seconds into current loop
  echoes: {
    kind: EchoKind;
    index: number;           // n_i
    remainder: number;       // r_i
    percent: number;         // % through this cycle [0,1)
    mirrorHit: boolean;      // < 30s from echo
  }[];
  doorway: number;           // Door_n = LAMBDA + n*OMEGA
  phiWeight: number;         // w = (PHI^n) % 1
}

/** T₀: 09 May 1989 17:16 UTC in epoch seconds */
const T0_EPOCH = 612748560;
/** Macro-loop length (L) in seconds */
const LOOP_SECONDS = 180;
/** How close for "mirror hit" (in seconds) */
const MIRROR_GRACE = 30;

export function spir1LAlignment(timestamp: number): Spir1LAlignment {
  // Accepts timestamp in *seconds* (not ms).
  const dt = timestamp - T0_EPOCH;
  const loops = Math.floor(dt / LOOP_SECONDS);
  const secondsInLoop = dt % LOOP_SECONDS;

  const echoes = PRIIVI3_ECHOS.map(kind => {
    const index = Math.floor(dt / kind);
    const remainder = dt % kind;
    const percent = remainder / kind;
    // Allow mirror hit both near 0 and near wraparound
    const mirrorHit = remainder < MIRROR_GRACE || remainder > kind - MIRROR_GRACE;
    return { kind, index, remainder, percent, mirrorHit };
  });

  const doorway = LAMBDA + loops * OMEGA;
  const phiWeight = (PHI ** loops) % 1;

  return { loops, secondsInLoop, echoes, doorway, phiWeight };
}
