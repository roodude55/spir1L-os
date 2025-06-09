import { expect, test } from "vitest";
import { spir1LAlignment } from '../src/spir1L-alignment';
import { LAMBDA, OMEGA, DOOR_101 } from "../src/constants";

test("1/13 identity", () => {
  const lhs = 1 / 13;
  const rhs = Math.log(2) / (Math.SQRT2 * LAMBDA) + OMEGA;
  expect(Math.abs(lhs - rhs)).toBeLessThan(2e-4);
});

test("doorway monotonic", () => {
  expect(DOOR_101).toBeGreaterThan(LAMBDA);
});
