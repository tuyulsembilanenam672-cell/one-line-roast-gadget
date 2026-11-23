// One-Line Roast: The Gadget You Use Every Day
// Entry program: writes one original roast line to /output/entry.txt.
// Gate (RULES.txt): UTF-8 text, 1-200 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CODE_POINTS = 200;

const LINE =
  "My smart speaker answers questions nobody asked, then says \"sorry, I didn't catch that\" to the one thing I actually said.";

function codePointCount(text: string): number {
  return [...text].length;
}

function validate(line: string): void {
  const points = codePointCount(line);
  if (points < 1 || points > MAX_CODE_POINTS) {
    throw new Error(`Line must be 1-${MAX_CODE_POINTS} code points, got ${points}`);
  }
  if (line.trim().length === 0) {
    throw new Error("Line must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("Line must be a single line");
  }
}

function main(): void {
  validate(LINE);
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, LINE, "utf8");
  console.log(`Wrote ${codePointCount(LINE)} code points to ${OUTPUT_PATH}`);
}

main();
