import { PHI, OMEGA_1, OMEGA_2 } from "./constants";
import { primeHarmonicSum } from "./prime-harmonic";
/** Ni1KQuation → identity value in [0, 1) */
export function ni1k(n) {
  // ‖φⁿ‖₁  = fractional part of φⁿ
  const phiPow = PHI ** n;
  const frac = phiPow - Math.floor(phiPow);
  const termS = OMEGA_1 * primeHarmonicSum(n);
  return (frac + termS + OMEGA_2) % 1;
}
