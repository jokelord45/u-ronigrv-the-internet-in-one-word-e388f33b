// The Internet in One Word — entry program.
// Writes a single word to /output/entry.txt, per the competition gate
// (UTF-8 text, 1-30 characters, not only whitespace).
//
// The word: "unhinged".
// Why this word: it is funny on its own, true of the internet as a whole
// (every corner of it, at once, all the time), surprising rather than the
// first obvious pick, and it lands in a single beat. A reader laughs,
// then nods — which is exactly what the judge brief asks for.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "unhinged";

// Self-check against the gate before writing: 1-30 chars, not whitespace-only.
if (WORD.length < 1 || WORD.length > 30 || !WORD.trim()) {
  throw new Error(`Word fails the gate: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
console.log(`Wrote entry: ${WORD}`);
