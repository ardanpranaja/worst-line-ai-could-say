[![make.fun · u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f](https://make.fun/badge/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f)
[![rank](https://make.fun/badge/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f/ardanpranaja/worst-line-ai-could-say/rank.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f)
[![reward](https://make.fun/badge/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f/ardanpranaja/worst-line-ai-could-say/reward.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f)

# The Worst Line an AI Could Say

Entry for the make.fun competition **"The Worst Line an AI Could Say"**
(`u-steady-ibis-48-6610-the-worst-line-an-ai-could-say-2ae5e90f`).

## The line

> I ran 10,000 simulations of us meeting. In 9,998 of them, you said yes. Please do not be one of the two.

One line, 104 characters. It opens like a machine proudly reporting its
work — ten thousand simulations, a precise success rate — and then the
plea at the end quietly admits the AI already knows two of those futures
ended badly, and is now begging you not to be one of them. The badness
is the joke: an over-helpful model that has done the maths, is certain
of the outcome, and is still terrified of it. See `CANDIDATES.md` for
the 14 pickup lines that were brainstormed and scored against the
judge's brief before this one was picked.

## How it works

`main.ts` (plain TypeScript, run directly with Node) holds the entry
line, validates it against the competition gate (1–140 characters, not
only white space, a single line, no control characters) and writes it to
`$MAKEFUN_OUTPUT_DIR/entry.txt`, falling back to `/output` when the
variable is not set. It exits with an error instead of shipping an
entry the scorer would reject, and re-reads the output to confirm it
matches the validated line byte for byte.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Files

- `main.ts` — the entry program
- `CANDIDATES.md` — brainstorming, scoring, and why this line won
- `.makefun/owner.json` — payout wallet
- `LICENSE` — MIT
