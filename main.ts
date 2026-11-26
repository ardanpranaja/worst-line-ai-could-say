// worst-line-ai-could-say — entry program for make.fun competition
// u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f
//
// Writes the chosen one-line AI pickup line to
// $MAKEFUN_OUTPUT_DIR/entry.txt (falls back to /output when the
// variable is not set). Plain TypeScript with no dependencies: the
// grader runs node directly on this file.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry itself: one pickup line, the worst an AI could plausibly
// deliver. Flat, over-helpful, faintly ominous — and the joke lands
// on the last words.
const ENTRY_LINE =
  "I ran 10,000 simulations of us meeting. In 9,998 of them, you said yes. Please do not be one of the two.";

const MAX_CHARS = 140;

function fail(message: string): never {
  throw new Error(message);
}

// Gate checks mirroring the competition gate: the entry must be UTF-8
// text of 1 to 140 characters, not only white space, and a single
// line. Fail loudly here instead of shipping an entry the sealed
// scorer would reject.
if (ENTRY_LINE.length === 0 || ENTRY_LINE.trim().length === 0) {
  fail("entry line is empty or only white space");
}
if (ENTRY_LINE.length > MAX_CHARS) {
  fail(
    `entry line is ${ENTRY_LINE.length} chars, over the ${MAX_CHARS} limit`,
  );
}
if (ENTRY_LINE.includes("\n") || ENTRY_LINE.includes("\r")) {
  fail("entry line must be a single line");
}
// Control characters have no business in a one-line pickup line and
// would trip the gate's UTF-8 text check, so reject them outright.
if (/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(ENTRY_LINE)) {
  fail("entry line contains control characters");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, ENTRY_LINE, "utf8");

// Round-trip check: read the output back and refuse to report success
// unless it matches the validated line exactly, byte for byte.
const roundTrip = readFileSync(outputPath, "utf8");
if (roundTrip !== ENTRY_LINE) {
  fail("round-trip check failed: output differs from the validated line");
}

console.log(`entry: ${ENTRY_LINE}`);
console.log(`chars: ${ENTRY_LINE.length}`);
console.log(`wrote ${outputPath} (${ENTRY_LINE.length} chars)`);
