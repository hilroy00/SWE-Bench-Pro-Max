---
theme: seriph
title: SWE-Bench Pro Max - Launch Strategy
info: |
  ## SWE-Bench Pro Max
  GTM launch-strategy deck · Scale AI · AI Engineer World's Fair 2026
class: text-center
transition: slide-left
routerMode: history
mdc: true
fonts:
  sans: Inter
  serif: Inter
  mono: 'Geist Mono'
  weights: '300,400,500,600,700,800'
---

<div class="eyebrow slide-fade-up">[ LAUNCH STRATEGY ]</div>

# SWE-Bench Pro <span class="max-gradient">Max</span>

<div class="rule-accent mt-2 mb-4" style="margin-left:auto;margin-right:auto;"></div>

<div class="slide-fade-up-delay">

**The Definitive Coding Agent Benchmark**

<div class="pt-10 flex gap-3 justify-center">
  <span class="scale-tag"><b>Scale Labs</b></span>
</div>

</div>

<!--
SWE-Bench Pro Max is Scale AI Labs' next-generation coding agent benchmark.
It goes beyond pass/fail - measuring cost, code quality, security, and agent performance across private repos that can't be trained on.
We're launching at AI Engineer World's Fair in San Francisco.
-->

---
transition: fade
---

<div class="eyebrow">[ THE PERSONA ]</div>

# Who We're Targeting

<div class="rule-accent mb-4"></div>

<div class="persona-grid-2col">
  <div class="persona-card persona-card--a">
    <div class="persona-card__role">AI Engineer · ML Engineer</div>
    <div class="persona-card__divider"></div>
    <div class="persona-card__why">Decides which benchmarks get adopted internally</div>
    <ul class="persona-card__facts">
      <li>Builds RL pipelines + agent harnesses</li>
      <li>Posts capability jumps + comparative evals</li>
      <li>Their score creates lab-wide pressure to compete</li>
    </ul>
  </div>
  <div v-click class="persona-card persona-card--b">
    <div class="persona-card__role">ML Research Scientist</div>
    <div class="persona-card__divider"></div>
    <div class="persona-card__why">Cites benchmarks - gives them academic legitimacy</div>
    <ul class="persona-card__facts">
      <li>Publishes papers + model cards at frontier labs</li>
      <li>Posts methodology critiques + capability results</li>
      <li>Their citation is what other researchers follow</li>
    </ul>
  </div>
</div>

<div style="font-size:0.62rem; color:var(--scale-muted); margin-top:0.8rem;">
  <a href="https://www.linkedin.com/feed/update/urn:li:activity:7375198335449817088/" target="_blank">Bing Liu · LinkedIn</a> · n=312 · <span style="color:var(--scale-accent); font-family:'Geist Mono',monospace;">15% AI/ML Engineers</span> · <span style="color:var(--scale-accent-2); font-family:'Geist Mono',monospace;">10% ML Research Scientists</span>
</div>

<!--
Data from Bing Liu's LinkedIn post announcing SWE-bench Pro - 312 interactions, 15% were AI/ML Engineers, 10% were ML Research Scientists.

AI Engineers and ML Engineers are the practitioners. They build the agent systems being evaluated. When they post a score, everyone at their lab feels pressure to compete.

ML Research Scientists write the papers and model cards. When they cite a benchmark, it becomes a standard - not just a number on a leaderboard.

These two groups are the wedge: engineers drive internal adoption, scientists drive external credibility.
-->

---
transition: fade
---

<div class="force-stamp">01</div>
<div class="eyebrow">[ FORCE 01 · ECONOMIC ]</div>

# The Token-Subsidization Era Is Over

<div class="vis-split">
  <div class="vis-split__panel vis-split__panel--before">
    <div class="vis-split__label">2020 – 2025</div>
    <div class="vis-split__value">$0</div>
    <div class="vis-split__sub">Loss-leader pricing</div>
  </div>
  <div class="vis-split__divider">→</div>
  <div v-click class="vis-split__panel vis-split__panel--after">
    <div class="vis-split__label">Now</div>
    <div class="vis-split__value">$/cap</div>
    <div class="vis-split__sub">Cost-per-capability decides</div>
  </div>
</div>

<!--
For years, AI companies priced tokens below cost to win market share. That era is ending.

Now enterprises and researchers ask a harder question: which model delivers the most capability per dollar?

A benchmark that only measures resolve rate is no longer enough. SWE-Bench Pro Max adds cost metrics so you can compare models on what actually matters to buyers.
-->

---
transition: fade
---

<div class="eyebrow">[ FORCE 02+03 · TECHNOLOGICAL + SOCIAL ]</div>

# Two Forces, One Opening

<div class="grid grid-cols-2 gap-5 mt-4">

  <div>
    <div class="eyebrow" style="font-size:0.6rem; margin-bottom:0.8rem;">[ TECHNOLOGICAL ]</div>
    <div class="vis-stair" style="height:10rem;">
      <div v-click="1" class="vis-stair__step">
        <div class="vis-stair__step-label">Base<br>Model</div>
        <div class="vis-stair__step-cap">Pre-2023</div>
      </div>
      <div v-click="2" class="vis-stair__step">
        <div class="vis-stair__step-label">Model<br>+ RL</div>
        <div class="vis-stair__step-cap">2023–24</div>
      </div>
      <div v-click="3" class="vis-stair__step">
        <div class="vis-stair__step-label">+ Agents</div>
        <div class="vis-stair__step-cap">Now</div>
      </div>
    </div>
    <div class="vis-stair__baseline" v-click="1"></div>
  </div>

  <div>
    <div class="eyebrow" style="font-size:0.6rem; margin-bottom:0.8rem;">[ SOCIAL ]</div>
    <div class="vis-decay" style="gap:0.4rem;">
      <div v-click="4" class="vis-decay-word" style="font-size:clamp(1.2rem,3vw,2rem);" :class="{ 'is-struck': $clicks >= 5 }">CONTAMINATION</div>
      <div v-click="5" class="vis-decay-word" style="font-size:clamp(1.2rem,3vw,2rem);" :class="{ 'is-struck': $clicks >= 6 }">GAMING</div>
      <div v-click="6" class="vis-decay-word" style="font-size:clamp(1.2rem,3vw,2rem);" :class="{ 'is-struck': $clicks >= 7 }">SATURATION</div>
    </div>
  </div>

</div>

<!--
Two forces are colliding at the same time.

Technologically: RL training and agent scaffolding keep compounding model capability. A benchmark designed for last year's models is already too easy.

Socially: the research community has lost trust in benchmarks. Models get trained on eval data (contamination), optimized to game the metric, and scores hit 90%+ and stop being useful (saturation).

The field needs a benchmark that's hard enough to stay relevant and trustworthy enough to be cited. That's the opening SWE-Bench Pro Max fills.
-->

---
transition: fade
---

<div class="eyebrow">[ THE BIG IDEA ]</div>

# SWE-Bench Pro <span class="max-gradient">Max</span>

<div class="rule-accent mb-3"></div>

<p class="text-lg" style="color:var(--scale-muted); margin-bottom: 0.5rem;">
  All-in-one benchmark for frontier model providers - SWE-Bench Pro is already at 80% with Claude Fable 5. It's time for harder.
</p>
<p style="font-size:0.75rem; color:var(--scale-muted); margin-bottom:1.5rem;">
  Built on Scale's access to private enterprise codebases, frontier-lab relationships, and the SWE-bench Pro lineage.
</p>

<div class="grid grid-cols-5 gap-3">
  <div v-click="1" class="diff-pill--lg">
    <span class="diff-pill__icon">2×</span>
    <div class="diff-pill__label">Private Repos</div>
  </div>
  <div v-click="2" class="diff-pill--lg">
    <span class="diff-pill__icon">$</span>
    <div class="diff-pill__label">Cost Metrics</div>
  </div>
  <div v-click="3" class="diff-pill--lg">
    <span class="diff-pill__icon">✓</span>
    <div class="diff-pill__label">Code Quality</div>
  </div>
  <div v-click="4" class="diff-pill--lg">
    <span class="diff-pill__icon">⚑</span>
    <div class="diff-pill__label">Security Assessment</div>
  </div>
  <div v-click="5" class="diff-pill--lg">
    <span class="diff-pill__icon">⬡</span>
    <div class="diff-pill__label">Neutral Agent Harness</div>
  </div>
</div>

<p v-click="6" style="font-size:0.78rem; color:var(--scale-muted); margin-top:1rem; font-family:'Geist Mono',monospace; letter-spacing:0.04em;">"The human stays" test</p>

<!--
SWE-Bench Pro Max is the answer to the three forces just described.

SWE-Bench Pro is already at 80% with Claude Fable 5. Unlike SWE-bench Pro, Pro Max uses private repos from real enterprise and startup codebases - so models can't be trained on the eval data.

It measures five things instead of one: private repo performance, cost efficiency, code quality, security, and agent harness performance on a neutral scaffold.

Scale is uniquely positioned to build this - we have the private codebase relationships, the frontier-lab connections, and the SWE-bench Pro lineage already.
-->

---
transition: slide-left
---

<div class="eyebrow">[ THE LAUNCH ]</div>

# Launch Strategy

<div class="launch-strip mb-3">
  <div class="launch-strip__label">[ Internal Foundation ]</div>
  <div class="launch-strip__items" style="flex-direction:column; gap:0.3rem; align-items:flex-start;">
    <span class="launch-strip__item">1. Scale Labs Researchers: technical + commercial positioning</span>
    <span class="launch-strip__item">2. Comms + PR: TechCrunch · Hacker News · <a href="https://www.therundown.ai/" target="_blank" style="color:var(--scale-accent);">The Rundown AI</a> · <a href="https://www.artificialintelligence-news.com/" target="_blank" style="color:var(--scale-accent);">AI News</a></span>
  </div>
</div>

<div class="phase-grid mb-3">
  <div v-click="1" class="phase-col">
    <div class="phase-col__header">
      <span class="phase-col__num">PRE</span>
      <span class="phase-col__sub">T−4 weeks</span>
    </div>
    <ul class="phase-col__items">
      <li>Embargo + early access for frontier labs</li>
      <li>Partner sync: Artificial Analysis · Arena AI</li>
      <li>arXiv · HuggingFace · GitHub harness prep</li>
      <li>Speaking slot confirmed at AI Engineer SF</li>
    </ul>
  </div>
  <div v-click="2" class="phase-col phase-col--primary">
    <div class="phase-col__header">
      <span class="phase-col__num">LAUNCH</span>
      <span class="phase-col__sub">AI Engineer SF · June · ICML Seoul · July 2026</span>
    </div>
    <ul class="phase-col__items">
      <li>Live leaderboard + paper drop at AI Engineer SF</li>
      <li>ICML 2026 · Seoul · Jul 6–11 (follow-up presentation)</li>
      <li>Featured talk: panel of AI/ML engineers who were early benchmark testers</li>
      <li>Partners publish same-day</li>
      <li><a href="https://x.com/swyx" target="_blank" style="color:rgba(255,255,255,0.85)">@swyx</a> · <a href="https://x.com/nlw" target="_blank" style="color:rgba(255,255,255,0.85)">@nlw</a> · <a href="https://x.com/rasbt" target="_blank" style="color:rgba(255,255,255,0.85)">@rasbt</a> amplify</li>
      <li>Scale Labs blog · live agent demo streamed on YouTube + X</li>
    </ul>
  </div>
  <div v-click="3" class="phase-col">
    <div class="phase-col__header">
      <span class="phase-col__num">POST</span>
      <span class="phase-col__sub">monthly cadence</span>
    </div>
    <ul class="phase-col__items">
      <li>Monthly leaderboard refresh</li>
      <li>Badge embeds compound distribution</li>
      <li>NeurIPS Sydney follow-up (Dec 2026)</li>
      <li>Sales + targeted email outreach to researchers post-paper read</li>
    </ul>
  </div>
</div>

<div v-click="4" class="flex items-center gap-4">
  <span class="eyebrow" style="margin-bottom:0; font-size:0.62rem;">[ embeddable marketing badge ]</span>
  <span class="swe-badge"><span class="swe-badge__label">SWE-Bench Pro Max</span><span class="swe-badge__value">Certified · Rank #1</span></span>
</div>

<!--
Start with internal alignment: Scale Labs researchers own both the technical credibility and the commercial messaging. Comms and PR targets TechCrunch for mainstream coverage and Hacker News for the organic research community.

Pre-launch (4 weeks out): give frontier labs early access under embargo so the leaderboard isn't empty on day one. Publish the arXiv paper, HuggingFace dataset, and open-source harness - without these, researchers won't cite it.

Launch day at AI Engineer SF: the leaderboard, paper, and GitHub go live simultaneously. Artificial Analysis and Arena AI publish their coverage the same day. The featured panel of early testers gives the launch credibility from real practitioners.

Post-launch: refresh the leaderboard monthly. Every lab that earns a certified badge embeds it on their model page - turning winners into a distribution channel. NeurIPS in December is the follow-up moment.
-->

---
layout: center
class: text-center
transition: fade
---

<div class="eyebrow">[ WHAT EARNED LOOKS LIKE ]</div>

# What Must Be True

<div class="rule-accent mt-2 mb-6" style="margin-left:auto;margin-right:auto;"></div>

<div class="phase-grid">
  <div v-click="1" class="phase-col">
    <div class="phase-col__header">
      <span class="phase-col__num">Citable</span>
      <span class="phase-col__sub">reproducibility first</span>
    </div>
    <ul class="phase-col__items" style="text-align:left;">
      <li>arXiv paper + open harness</li>
      <li>Transparent methodology</li>
    </ul>
  </div>
  <div v-click="2" class="phase-col phase-col--primary">
    <div class="phase-col__header">
      <span class="phase-col__num">Hard</span>
      <span class="phase-col__sub">winning means something</span>
    </div>
    <ul class="phase-col__items" style="text-align:left;">
      <li>Top scores 20–60%, not 90%+</li>
      <li>Credible labs on day-1 leaderboard</li>
      <li>A top score is a real flex, not a formality</li>
    </ul>
  </div>
  <div v-click="3" class="phase-col">
    <div class="phase-col__header">
      <span class="phase-col__num">Independent</span>
      <span class="phase-col__sub">Scale alone isn't enough</span>
    </div>
    <ul class="phase-col__items" style="text-align:left;">
      <li><a href="https://artificialanalysis.ai" target="_blank">Artificial Analysis</a> + <a href="https://arena.ai" target="_blank">Arena AI</a> co-sign</li>
      <li>Independence is the distribution mechanism</li>
    </ul>
  </div>
</div>

<!--
Three things must be true for AI researchers to organically share and cite this work.

First, it has to be citable. Researchers don't share marketing - they share work they can put in a footnote. That means a published paper and an open, reproducible harness.

Second, winning has to mean something. If top models score 90%, nobody cares. Scores in the 20–60% range signal that this is genuinely hard, and a high rank becomes a real status signal among frontier labs.

Third, Scale can't be the only one saying it's good. Artificial Analysis and Arena AI co-signing the results means the benchmark is validated by the two most trusted independent evaluators in the field - not just by the company that built it.

Post-launch we measure success through X engagement (Scale, partners, and influencers), benchmark page traffic on labs.scale.com, and GitHub stars plus badge embeds on model pages.
-->
