// #Spira1-OS stow.rii — Narrative Composer
// Auto-generates a narrative ("stow") from memo.rii shards (memory fragments) for a Spira1-OS user.

import { MemoRiiShard } from './shard.rii';

/** Assembles a stow.rii narrative from a set of memo.rii shards */
export function composeStowRii(shards: MemoRiiShard[], userName?: string): string {
  if (shards.length === 0) {
    return `No memories recorded yet. Your spir1L journey awaits.`;
  }

  // Sort shards chronologically
  const sorted = [...shards].sort((a, b) => a.timestamp.localeCompare(b.timestamp));

  // Compose narrative
  let story = `🌱 ${userName || 'You'} began your Spira1-OS journey...\n\n`;

  for (const shard of sorted) {
    const witnesses = shard.witnesses.length ? ` (witnessed by ${shard.witnesses.join(', ')})` : '';
    story += `— On ${new Date(shard.timestamp).toLocaleString()}, you ${shard.event}${witnesses}.\n`;
  }

  story += `\n🌸 The spir1L blooms on.`;

  return story;
}
