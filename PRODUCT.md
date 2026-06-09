# Product

## Register

brand

## Users

ML and AI engineers, research scientists at frontier labs: Anthropic, Google DeepMind, OpenAI,
Meta, Nvidia. They are deeply skeptical of marketing, allergic to hype, and immediately pattern-match
on "AI-generated slop." They read arXiv papers, cite benchmark numbers, and notice when something
looks like a template. The deck is reviewed in a Scale AI interview context — the audience for the
artifact is a Scale hiring team evaluating GTM strategy thinking.

## Product Purpose

A 7-slide GTM launch-strategy deck for SWE-Bench Pro Max, a new harder benchmark for frontier
AI coding models. The deck argues for a specific launch strategy (co-launch with Artificial Analysis
+ Arena AI at NeurIPS 2026, Sydney) using a three-forces frame (economic/technological/social),
presents the product positioning, and closes on success metrics. It is a Scale AI interview take-home:
the design quality directly signals the candidate's craft and attention to detail.

## Brand Personality

Sharp. Technical. Authoritative.

Physical-object reference: a well-typeset research instrument manual from the 1990s — dense
information, confident structure, zero decoration for decoration's sake. The kind of document that
assumes the reader is intelligent and wastes none of their time.

## Anti-references

- **Generic SaaS deck**: no gradient backgrounds, hero-metric templates, identical card grids,
  Beamer/Google Slides corporate blandness
- **Academic conference poster**: not dense LaTeX text-dump energy; should feel designed
- **AI-slop aesthetic**: no cream/sand neutrals, tracked eyebrows on every section (the `.eyebrow`
  class on every slide is a known risk — see Design Principles), numbered 01/02/03 scaffolding as
  decoration, gradient text

## Design Principles

1. **Spare nothing, waste nothing.** Every visual element must justify its presence. A divider that
   doesn't improve reading order should be removed. An eyebrow label that doesn't add information
   beyond the heading should be cut.
2. **Assume intelligence.** The audience can read. Don't scaffold the obvious. Dense, precise content
   over padded, repeated structure.
3. **Distinctiveness over safety.** The Scale Labs palette (white, zinc, electric blue `#0015FF`) is
   the anchor, but each slide should have a visual reason to exist — not be another iteration of the
   same card-grid template.
4. **Technical confidence signals credibility.** The deck is arguing for a benchmark. Its design
   should feel like it was made by someone who has strong opinions and acts on them — not someone
   who reached for the nearest template.
5. **Identity-preservation over reflex-rejection.** Inter is on the impeccable reflex-reject font
   list, but it is Scale AI's own Aeonik fallback — it was chosen to match the brand, not by reflex.
   Geist Mono is a deliberate technical voice, not a costume. Both stay; neither came from the
   training-data default.

## Accessibility & Inclusion

WCAG AA minimum. White (`#ffffff`) background with near-black (`#09090b`) text comfortably exceeds
4.5:1. Electric blue (`#0015FF`) on white is 5.9:1 — passes for large text; avoid as body text.
Muted zinc (`#71717a`) on white is ~4.6:1 — borderline; do not use for body-weight text, only
for metadata/captions. Standard slide dimensions (1280×720 / 16:9); no reduced-motion animations
currently present.
