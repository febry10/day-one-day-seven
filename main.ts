// Day one, day seven — make.fun entry (Node 22, standard library only).
// The entry is the TikTok video itself: this program only copies VIDEO.json
// from the repository root to /output/VIDEO.json, where the house reads it.
// The video shows the same tiny agent-built game on day one and on day
// seven, ends with make.fun's referral end card, and is posted publicly on
// TikTok from @qwertyuio3919 with the bounty's line and play code in its
// caption. Nothing this program writes about the video is scored.
//
// VIDEO.json still holds the placeholder address until the video is posted;
// replace it with the video's full TikTok address before submitting.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
