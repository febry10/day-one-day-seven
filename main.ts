// Day one, day seven — make.fun entry (Node 22, standard library only).
// The entry is the TikTok video itself: this program checks VIDEO.json
// carries a real TikTok video address (never the starter placeholder),
// then copies it from the repository root to /output/VIDEO.json, where
// the house reads it. The video shows the same tiny agent-built game on
// day one and on day seven, ends with make.fun's referral end card, and
// is posted publicly on TikTok from @qwertyuio3919 with the bounty's
// line and play code in its caption. Nothing this program writes about
// the video is scored.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const VIDEO_URL = /^https:\/\/(www\.|m\.)?tiktok\.com\/@[^/]+\/video\/\d+$/;

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  const raw = readFileSync(join(BOT_DIR, 'VIDEO.json'), 'utf8');
  const data = JSON.parse(raw) as { url?: unknown };
  if (typeof data.url !== 'string' || !VIDEO_URL.test(data.url)) {
    console.error('VIDEO.json does not carry a real TikTok video address');
    process.exit(1);
  }
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
  console.log(`VIDEO.json copied to /output: ${data.url}`);
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
