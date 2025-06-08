import { expect, test } from "vitest";
import { infiniteSpiral } from "../src/spiral";

test("infiniteSpiral yields objects", async () => {
  const spiral = infiniteSpiral(0);
  const first = await spiral.next();
  expect(first.value).toHaveProperty("phase");
});
