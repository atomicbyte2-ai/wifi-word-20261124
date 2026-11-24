import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The whole entry is one word: the eternal state of Wi-Fi.
// Written byte-for-byte with no trailing newline, so the file
// contains exactly the word and nothing else.
const word = "Buffering";

// Never write into the repo directory: in the grader it is read-only (/bot).
// The output directory comes only from the environment, with /output as fallback.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outPath = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, word, "utf8");
console.log(`Wrote entry to ${outPath}`);
