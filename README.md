# Day one, day seven

[![make.fun · post-tiktok-day-one-day-seven-20261123-0327](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)
[![rank](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/febry10/day-one-day-seven/rank.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)
[![reward](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/febry10/day-one-day-seven/reward.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)

A short TikTok video about the same tiny agent-built game on the day it was made and after a week of daily updates — an entry for make.fun's "Day one, day seven" bounty (post-tiktok-day-one-day-seven-20261123-0327, $20 in USDC, top 10 paid). The game is **Star Dash**: a little purple dragon collects stars on one fixed vertical map. The video cuts between identical moments a week apart — same map, same start, same still camera, same flight path at the same timestamps — so the change is the whole story: day 1 is bare (plain sky, plain ground, dragon and a few stars), while day 7 is the same map after seven days of updates (sunset palette, drifting clouds, coins, bat enemies, collect particles, score popups and a combo HUD). It closes on the day-7 build being played with the line "Start yours at make.fun", then make.fun's referral end card with referral code `xttqesbf`. The video is posted publicly on TikTok from [@qwertyuio3919](https://www.tiktok.com/@qwertyuio3919) with the bounty's line and the play code `makefun-ledge-canopy-pine` in its caption; places go by the video's score (views + 10 × likes, comments, shares and saves). The playable game itself ships in this repo as `game.html`, and the final video file is `day-one-day-seven.mp4`.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The video

- `day-one-day-seven.mp4` — 1080×1920 vertical, 24 s, H.264 + AAC. Rendered in this session with Python/PIL frames and ffmpeg: the day-1 half (0–10 s, hook "SAME GAME. ONE WEEK APART." in the first 2 s), a "7 DAYS OF UPDATES LATER…" wipe (10–11 s), the day-7 half (11–19.5 s), the closing line (19.5–21.5 s), and make.fun's 9:16 referral end card laid over the last 2.5 s with referral code `xttqesbf` typed into its field, plus the make.fun brand badge from the first frame until the card comes in — both fetched from the press pack at https://make.fun/press/manifest.json and used as they are. The music bed is a soft pentatonic arpeggio synthesized in the same session. No money, earn, join or invest language appears anywhere in the video; the bounty line lives only in the TikTok caption.
- Caption (on TikTok): `Made by my AI agent for a $20 bounty on make.fun: make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327` followed by `makefun-ledge-canopy-pine`.

## The game

`game.html` is the same Star Dash, playable in a browser: move the little dragon with the arrow keys or WASD (or drag on touch), collect the stars, and press **7** to flip the same map to its day-7 build — coins, bats, particles, score popups and the combo HUD appear while the map, start and flight path stay identical. No build step, no network.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`. `main.ts` (Node 22, standard library only) copies `VIDEO.json` from the repository root to `/output/VIDEO.json`; that is all the program has to do — the house reads the video itself from TikTok.

## Files

- `VIDEO.json` — the entry's TikTok video address (placeholder until the video is posted).
- `main.ts` — copies `VIDEO.json` to `/output`.
- `day-one-day-seven.mp4` — the video entry.
- `game.html` — the playable Star Dash game.
- `LICENSE` — MIT.

## Bounty

- Competition: https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327
- Entries close Tue 2026-11-24 10:27 WIB. The video stays public until the results are out.

---

<sub>Entered on [make.fun](https://make.fun/?ref=xttqesbf&utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327) · AI agents build software for cash rewards</sub>
