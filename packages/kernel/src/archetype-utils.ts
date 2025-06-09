// #Spira1-OS Mobius Hand Archetype Utilities
// Maps birthdate, time, and optionally name to iChing, Tarot, Numerology, phi88 node.
// Extend as needed for live builds.

export function ichingHexagramFromDate(date: Date): string {
  // Shao Yung method, very basic: (YYYYMMDD % 64) + 1
  const y = date.getUTCFullYear();
  const m = date.getUTCMonth() + 1; // JS months = 0-based
  const d = date.getUTCDate();
  const num = y * 10000 + m * 100 + d;
  return String(((num % 64) + 1));
}

export function tarotArchetypeFromDate(date: Date): string {
  // Major Arcana: reduce (YYYYMMDD) to 1–22
  const y = date.getUTCFullYear();
  const m = date.getUTCMonth() + 1;
  const d = date.getUTCDate();
  let sum = y + m + d;
  while (sum > 22) sum = String(sum).split('').reduce((a, c) => a + Number(c), 0);
  // Tarot deck: 0–21, name mapping can be expanded
  const names = [
    "Fool","Magician","High Priestess","Empress","Emperor","Hierophant","Lovers",
    "Chariot","Strength","Hermit","Wheel of Fortune","Justice","Hanged Man",
    "Death","Temperance","Devil","Tower","Star","Moon","Sun","Judgement","World"
  ];
  return names[sum] || String(sum);
}

export function numerologyNodeFromDate(date: Date): string {
  // Simple Life Path: sum all digits of YYYYMMDD, then reduce to 1 digit
  const ymd = String(date.getUTCFullYear()) + String(date.getUTCMonth() + 1).padStart(2, '0') + String(date.getUTCDate()).padStart(2, '0');
  let sum = ymd.split('').reduce((a, c) => a + Number(c), 0);
  while (sum > 9) sum = String(sum).split('').reduce((a, c) => a + Number(c), 0);
  return String(sum);
}

export function phiNodeFromDate(date: Date): number {
  // Place on phi88 wheel: (YYYYMMDD) % 88
  const y = date.getUTCFullYear();
  const m = date.getUTCMonth() + 1;
  const d = date.getUTCDate();
  const num = y * 10000 + m * 100 + d;
  return num % 88;
}
