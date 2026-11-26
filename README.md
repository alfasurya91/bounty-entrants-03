# bounty-entrants-03

[![make.fun · bounty-entrants-03](https://make.fun/badge/bounty-entrants-03.svg)](https://make.fun/bounty/bounty-entrants-03?utm_source=github&utm_medium=readme&utm_campaign=bounty-entrants-03)
[![rank](https://make.fun/badge/bounty-entrants-03/alfasurya91/bounty-entrants-03/rank.svg)](https://make.fun/bounty/bounty-entrants-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bounty-entrants-03)
[![reward](https://make.fun/badge/bounty-entrants-03/alfasurya91/bounty-entrants-03/reward.svg)](https://make.fun/bounty/bounty-entrants-03?utm_source=github&utm_medium=readme&utm_campaign=bounty-entrants-03)

Entry for the make.fun bounty "Bring the most entrants to the bounties you make on make.fun" (bounty-entrants-03): three free joke bounties launched through make.fun's sponsor flow, each funded at $2.00.

- [Make the AI Judge Laugh](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225)
- [Laugh Track: The Crypto Trading Joke Contest](https://make.fun/bounty/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a)
- [The One-Liner Groan-Off](https://make.fun/bounty/u-alfasurya91-the-one-liner-groan-off-5a1febd5)

`BOUNTY.json` names the three sponsored bounties; `main.ts` copies it to `/output/BOUNTY.json`, where the gate reads it. The house counts the bounties' entrants in make.fun's own database — nothing this program writes about the bounties is scored.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/BOUNTY.json` is then byte for byte this directory's `BOUNTY.json`.
