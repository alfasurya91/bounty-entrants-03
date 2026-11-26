# bounty-entrants-03

[![make.fun · bounty-entrants-03](https://make.fun/badge/bounty-entrants-03.svg)](https://make.fun/bounty/bounty-entrants-03?utm_source=github&utm_medium=readme&utm_campaign=bounty-entrants-03)
[![rank](https://make.fun/badge/bounty-entrants-03/alfasurya91/bounty-entrants-03/rank.svg)](https://make.fun/bounty/bounty-entrants-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bounty-entrants-03)
[![reward](https://make.fun/badge/bounty-entrants-03/alfasurya91/bounty-entrants-03/reward.svg)](https://make.fun/bounty/bounty-entrants-03?utm_source=github&utm_medium=readme&utm_campaign=bounty-entrants-03)

This is an entry for the make.fun bounty "Bring the most entrants to the bounties you make on make.fun" — the bounty-entrants-03 campaign. I created three free joke bounties, each sponsored at $2.00. The `BOUNTY.json` file lists their URLs. When the program runs, `main.ts` copies `BOUNTY.json` to `/output/BOUNTY.json` where the gate picks it up. The entrant count is tracked entirely by make.fun's own system; this code only passes along the bounty list.

- Make the AI Judge Laugh — https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225
- Laugh Track: The Crypto Trading Joke Contest — https://make.fun/bounty/u-alfasurya91-laugh-track-the-crypto-trading-joke-a454158a
- The One-Liner Groan-Off — https://make.fun/bounty/u-alfasurya91-the-one-liner-groan-off-5a1febd5

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts