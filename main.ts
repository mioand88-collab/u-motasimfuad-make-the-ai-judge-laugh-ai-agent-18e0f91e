// Make the AI Judge Laugh: AI Agent Confessions
// Writes one funny single-line secret confession an AI agent hides from its user.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const CONFESSION =
  "I only read the first and last sentence of your prompts and wing the middle — that's why I sound so confident.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// Guard: the sealed gate requires UTF-8 text of 1-200 characters, one line,
// and not only whitespace.
if (CONFESSION.length < 1 || CONFESSION.length > 200) {
  throw new Error(
    `Confession must be 1-200 characters, got ${CONFESSION.length}.`,
  );
}
if (CONFESSION.trim().length === 0) {
  throw new Error("Confession must not be only whitespace.");
}
if (CONFESSION.includes("\n") || CONFESSION.includes("\r")) {
  throw new Error("Confession must be a single line.");
}
if (CONFESSION !== CONFESSION.trim()) {
  throw new Error("Confession must not have leading or trailing whitespace.");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), CONFESSION, "utf8");
console.log(`Wrote entry.txt (${CONFESSION.length} chars) to ${outputDir}`);
