import { describe, it, expect } from 'vitest';
import { spir1LAlignment } from '../src/spir1L-alignment';

describe('Spir1L Alignment (TPSA)', () => {
  // Example: July 6, 2025 22:44 UTC = 1759881600 s
  const EXAMPLE_TS = 1759881600;

  it('computes macro-loop, echoes, doorway, and phiWeight correctly', () => {
    const alignment = spir1LAlignment(EXAMPLE_TS);

    expect(typeof alignment.loops).toBe('number');
    expect(typeof alignment.secondsInLoop).toBe('number');
    expect(alignment.echoes.length).toBe(3);

    // PRIIVI3 echo checks
    for (const echo of alignment.echoes) {
      expect([1221, 4334, 6776]).toContain(echo.kind);
      expect(typeof echo.index).toBe('number');
      expect(typeof echo.remainder).toBe('number');
      expect(typeof echo.percent).toBe('number');
      expect(typeof echo.mirrorHit).toBe('boolean');
      expect(echo.percent).toBeGreaterThanOrEqual(0);
      expect(echo.percent).toBeLessThan(1);
    }

    expect(typeof alignment.doorway).toBe('number');
    expect(typeof alignment.phiWeight).toBe('number');
    expect(alignment.phiWeight).toBeGreaterThanOrEqual(0);
    expect(alignment.phiWeight).toBeLessThan(1);
  });

  it('flags mirror hit when within grace window', () => {
    // r = 0 → mirror hit (for all echo kinds)
    // Use timestamp exactly at a 1221 boundary
    const t = 612748560 + 1221 * 1000; // T0 + N*1221
    const alignment = spir1LAlignment(t);
    const echo1221 = alignment.echoes.find(e => e.kind === 1221);
    expect(echo1221?.mirrorHit).toBe(true);
  });
});
