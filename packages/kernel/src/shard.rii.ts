// #Spir1L-OS Memo.rii Shard Module
// Handles creation and storage of memo.rii shards (memory fragments) for the user's journey.
// Each shard is a minimal witnessed event, ready to be composed into stow.rii narratives.

export interface MemoRiiShard {
  id: string;
  userId: string;
  timestamp: string;
  event: string;
  zcm: number;            // Zero-configuration moment (trust metric, 0.0–1.0)
  witnesses: string[];    // Mobius Hand AI guides who witnessed this event
  data?: Record<string, unknown>; // Optional extra context (drawing, emotion, etc.)
}

/** Create a new memo.rii shard for an event */
export function createMemoRiiShard(
  userId: string,
  event: string,
  zcm: number,
  witnesses: string[],
  data?: Record<string, unknown>
): MemoRiiShard {
  return {
    id: `${userId}_${event}_${Date.now()}`,
    userId,
    timestamp: new Date().toISOString(),
    event,
    zcm,
    witnesses,
    data,
  };
}
