"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.infiniteSpiral = infiniteSpiral;
// #Spira1-OS #RecursiveHarmony — Infinite spiral generator
const math_1 = require("@spira1/math");
const math_2 = require("@spira1/math");
async function* infiniteSpiral(start = 0) {
  let breath = start;
  /* eslint-disable no-constant-condition */
  while (true) {
    // inhale
    await pause(math_2.BEAT_SECONDS * 0.25);
    yield { phase: "inhale", n: breath };
    // sacred pause
    await pause(math_2.BEAT_SECONDS * 0.25);
    // exhale
    await pause(math_2.BEAT_SECONDS * 0.25);
    yield { phase: "exhale", n: breath };
    // beat-13 gate
    if (breath % 13 === 0) {
      yield {
        phase: "transcend",
        door: math_2.DOOR_101,
        id: (0, math_1.ni1k)(breath),
      };
    } else {
      yield { phase: "resync", wobble: math_2.OMEGA_2 };
    }
    breath += 1;
  }
}
function pause(sec) {
  return new Promise((r) => setTimeout(r, sec * 1000));
}
