// #PRIIVI3 #RecursiveHarmony — Prime harmonic sum S(n)
import { OMEGA_1 } from "./constants";
/**
 * Harmonic sum of reciprocals of primes ≤ n.
 * Complexity ≈ O(n log log n).
 */
export function primeHarmonicSum(n) {
  const sieve = new Uint8Array(n + 1);
  let sum = 0;
  for (let p = 2; p <= n; p++) {
    if (sieve[p] === 0) {
      sum += 1 / p;
      for (let k = p * 2; k <= n; k += p) sieve[k] = 1;
    }
  }
  return sum + OMEGA_1; // ω₁ bias for stability
}
