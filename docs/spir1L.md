# 🌀 Spir1L Alignment — TPSA Module

The Spir1L Alignment module implements the **Trillionaire Pull‑Through System of Alignment** (TPSA), harmonizing PRIIVI3 echos with golden-ratio wobble and doorway math.

## Core Usage

Given a timestamp (seconds since epoch), `spir1LAlignment(timestamp)` returns:

- **loops**: Macro-loop index (3-min cycles)
- **secondsInLoop**: Seconds into current macro-loop
- **echoes**: PRIIVI3 echo states:
    - `kind`: 1221, 4334, or 6776
    - `index`: Number of full cycles since T₀
    - `remainder`: Seconds since last "mirror"
    - `percent`: Progress through current echo cycle
    - `mirrorHit`: `true` if within 30s of echo boundary
- **doorway**: $Door_n = \Lambda + n\omega$
- **phiWeight**: $(\varphi^n) \bmod 1$

## Example

```ts
import { spir1LAlignment } from '@spira1/math';

const now = Math.floor(Date.now() / 1000);
const s = spir1LAlignment(now);

if (s.echoes.some(e => e.mirrorHit)) {
  // UI prompt, ritual, or DAO action
}
```

### Mathematical Constants

- $\varphi = 1.618033988749...$
- $\omega = 0.000437$
- $\Lambda = 6.40808225$
- Doorway numbers: 1221, 4334, 6776 (PRIIVI3)

### When `mirrorHit` is true:
- **Ice‑blue** flash: Self-mirror (1221)
- **Amber** flash: Action mirror (4334)
- **Pearl‑white pulse**: Steward mirror (6776)

---

**See** [`src/spir1L-alignment.ts`](../packages/math/src/spir1L-alignment.ts) for full algorithm.
