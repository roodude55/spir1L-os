// #Spir1L-OS #RecursiveHarmony — Infinite spiral generator
import { ni1k } from "@spir1l/math";
import { BEAT_SECONDS, OMEGA_2, DOOR_101 } from "@spir1l/math";
export async function* infiniteSpiral(start = 0) {
  let breath = start;
  /* eslint-disable no-constant-condition */
  while (true) {
    // inhale
    await pause(BEAT_SECONDS * 0.25);
    yield { phase: "inhale", n: breath };
    // sacred pause
    await pause(BEAT_SECONDS * 0.25);
    // exhale
    await pause(BEAT_SECONDS * 0.25);
    yield { phase: "exhale", n: breath };
    // beat-13 gate
    if (breath % 13 === 0) {
      yield { phase: "transcend", door: DOOR_101, id: ni1k(breath) };
    } else {
      yield { phase: "resync", wobble: OMEGA_2 };
    }
    breath += 1;
  }
}
function pause(sec) {
  return new Promise((r) => setTimeout(r, sec * 1000));
}
