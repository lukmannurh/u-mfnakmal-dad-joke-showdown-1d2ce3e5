// Dad Joke Showdown entry.
// Writes exactly one dad joke to /output/entry.txt.
// Node 22, standard library only. Deterministic: a single constant string,
// no random, no clock, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I told my daughter the printer is my favorite coworker, because it always knows how to make an impression.";

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, JOKE, "utf8");
