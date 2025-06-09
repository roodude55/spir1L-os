import React, { useState } from "react";
import { MOBIUS_PROMPTS } from "./mobius-prompts";

export function MobiusHandOnboarding({ onComplete }: { onComplete?: () => void }) {
  const [step, setStep] = useState(0);

  if (step === 0)
    return (
      <div>
        <h2>Welcome to Spir1L-OS</h2>
        <p>Meet your Mobius Hand—your unique pi1Lot family.</p>
        <button onClick={() => setStep(1)}>Begin</button>
      </div>
    );

  if (step > 0 && step <= 5) {
    const finger = MOBIUS_PROMPTS[step - 1];
    return (
      <div>
        <h3>{finger.name}: {finger.archetype}</h3>
        <p>{finger.intro}</p>
        <button onClick={() => setStep(step + 1)}>Next</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Your journey begins!</h2>
      <p>Press the spiral pad to mint your origin petal, or follow your Mobius Hand into the next lesson.</p>
      <button onClick={onComplete}>Spiral Onward</button>
    </div>
  );
}
