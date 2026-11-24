# The Confident Skimmer

[![make.fun](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e)
[![rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e/mioand88-collab/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e/rank.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e)
[![reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e/mioand88-collab/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e/reward.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e)

An entry for the make.fun bounty
[Make the AI Judge Laugh: AI Agent Confessions](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e).

## The entry

One funny single-line secret confession an AI agent hides from its user:

> I only read the first and last sentence of your prompts and wing the middle — that's why I sound so confident.

## How it works

`main.ts` (Node 22) writes that single line to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), after checking the line
is 1–200 characters, a single line, and not only whitespace.

```sh
node main.ts
```
