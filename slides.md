---
theme: seriph
title: SWE-Bench Pro Max — Launch Strategy
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

# SWE-Bench Pro Max

<div class="rule-accent mt-2 mb-4" style="margin-left:auto;margin-right:auto;"></div>

<div class="slide-fade-up-delay">

**[One-liner placeholder — TBD]**

<div class="pt-10 flex gap-3 justify-center">
  <span class="scale-tag"><b>Scale AI</b> · Research</span>
  <span class="scale-tag">AI Engineer World's Fair · San Francisco</span>
</div>

</div>

<!--
One-liner candidates:
- "The benchmark frontier labs can't train on — and can't ignore."
- "Built to outlast the models it evaluates."
- "The first benchmark that penalizes expensive answers."
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
Frontier labs and cloud providers priced tokens at a loss to win market share —
masking the true cost of running capable models at scale. As subsidies end, the
question shifts from "what can it do?" to "what can it do per dollar?"

Raw resolve rate no longer tells the full story. A model that scores 60% but
costs 10× more than a 55% model is a worse deal. SWE-Bench Pro Max's
cost-normalized dimension directly answers this economic shift.

Click: reveals the cost-per-capability panel.
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
      <div class="vis-decay-word" style="font-size:clamp(1.2rem,3vw,2rem);" :class="{ 'is-struck': $clicks >= 4 }">CONTAMINATION</div>
      <div class="vis-decay-word" style="font-size:clamp(1.2rem,3vw,2rem);" :class="{ 'is-struck': $clicks >= 5 }">GAMING</div>
      <div class="vis-decay-word" style="font-size:clamp(1.2rem,3vw,2rem);" :class="{ 'is-struck': $clicks >= 6 }">SATURATION</div>
    </div>
  </div>

</div>

<!--
TECHNOLOGICAL: RL fine-tuning + inference-time reasoning are now the default for frontier
coding models. Agent harnesses (tool use, multi-step planning, multi-file editing) compound
raw model capability further. A benchmark built for pre-agent models saturates fast.

SOCIAL: The research community is deeply suspicious of headline benchmark scores.
- CONTAMINATION: Models trained on eval data report inflated scores. Was it solved or memorized?
- GAMING: Optimize for the metric (Goodhart's Law) and it stops measuring capability.
- SATURATION: MMLU, HumanEval, even SWE-bench — top models hit 70–90%+ and the leaderboard
  becomes meaningless.

Together: capability is advancing faster than benchmark difficulty, while trust in evals is
simultaneously collapsing. The field needs a benchmark that keeps pace AND earns trust.

Clicks 1–3: staircase steps. Clicks 4–6: social decay words crossed out.
-->

---
transition: fade
---

<div class="eyebrow">[ THE BIG IDEA ]</div>

# SWE-Bench Pro Max

<div class="rule-accent mb-3"></div>

<p class="text-lg" style="color:var(--scale-muted); margin-bottom: 0.5rem;">
  All-in-one benchmark for frontier model providers — unlike MMLU, it can't be trained on.
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

<!--
FOR: ML and AI engineers dissatisfied with benchmark saturation and data-contaminated evals
that don't represent real-world software challenges.

IS: SWE-Bench Pro Max is the all-in-one benchmark for frontier model providers.

UNLIKE: MMLU and even SWE-bench Pro, it ships 2× the private repos (via enterprise +
early-stage company partners) and evaluates across five dimensions, not just pass/fail.

WHY SCALE: Scale has unique access to private enterprise codebases through its data business,
existing relationships with every major frontier lab, and owns the SWE-bench Pro lineage.
Scale is the only org positioned to make this benchmark both hard and trustworthy.

The five differentiators map to the three forces:
- 2× private repos → contamination-proof (social force)
- Cost metrics → economic force payoff
- Code quality + Security assessment → human-centric SWE demand
- Neutral agent harness → levels the playing field for RL + agent evaluation

Click 1–5: each dimension tile reveals in sequence.
-->

---
layout: two-cols
layoutClass: gap-8
transition: fade
---

<div class="eyebrow">[ THE PERSONA ]</div>

# Who We're Targeting — and Why

<div class="rule-accent mb-2"></div>
<div style="font-size:0.72rem; color:var(--scale-muted); margin-bottom:1rem;">
  <a href="https://www.linkedin.com/feed/update/urn:li:activity:7375198335449817088/" target="_blank">Bing Liu's SWE-bench Pro launch post</a> — majority of respondents held <strong style="color:var(--scale-fg);">AI Engineer</strong> or <strong style="color:var(--scale-fg);">ML Engineer</strong> titles.
</div>

::left::

<div class="force-card">
  <div class="force-card__label">Evals · Safety · Capabilities</div>
  <div class="force-card__heading">The Evals Researcher</div>
  <div style="font-size:0.75rem; color:#52525b; margin:0.4rem 0 0.6rem; line-height:1.45;">
    Anthropic · OpenAI · DeepMind · Meta
  </div>
  <div style="font-size:0.82rem; font-weight:700; color:var(--scale-fg); margin-bottom:0.5rem;">
    Needs a credible external score to publish without it looking self-serving.
  </div>
  <div style="font-size:0.75rem; color:#52525b; line-height:1.5;">
    Posts: capability results, methodology critiques, model-card numbers.<br>
    <span style="color:var(--scale-accent); font-family:'Geist Mono',monospace; font-size:0.68rem; text-transform:uppercase; letter-spacing:0.08em;">WHY THE WEDGE →</span> their score is what other labs respond to.
  </div>
</div>

::right::

<div v-click class="force-card">
  <div class="force-card__label">RL · Agent Scaffolding · Infra</div>
  <div class="force-card__heading">The ML Research Engineer</div>
  <div style="font-size:0.75rem; color:#52525b; margin:0.4rem 0 0.6rem; line-height:1.45;">
    Frontier labs + AI-native startups
  </div>
  <div style="font-size:0.82rem; font-weight:700; color:var(--scale-fg); margin-bottom:0.5rem;">
    Needs a benchmark hard enough to matter that measures what agents actually do.
  </div>
  <div style="font-size:0.75rem; color:#52525b; line-height:1.5;">
    Posts: architecture findings, capability jumps, comparative evals.<br>
    <span style="color:var(--scale-accent); font-family:'Geist Mono',monospace; font-size:0.68rem; text-transform:uppercase; letter-spacing:0.08em;">WHY THE WEDGE →</span> they decide which benchmarks get adopted internally.
  </div>
</div>

<!--
PRIMARY RESEARCH: Bing Liu's LinkedIn announcement of SWE-bench Pro
(https://www.linkedin.com/feed/update/urn:li:activity:7375198335449817088/)
showed the majority of respondents held "AI Engineer" or "ML Engineer" titles.
This validates the persona selection — not assumed, observed.

Two personas, both at frontier labs, both deeply skeptical of benchmarks:

EVALS RESEARCHER (Persona A):
Their job is to produce capability assessments their lab can stand behind. An external
benchmark gives them something to point to that doesn't look like self-grading. They are
the ones who write model cards, publish evals papers, and present at conferences. When
they publish a score on SWE-Bench Pro Max, every other lab feels competitive pressure to run
it too. They are the ignition point for organic adoption.

ML RESEARCH ENGINEER (Persona B):
They are building RL training pipelines and agent harnesses. They live the technological force
directly — their systems are what Pro Max is measuring. They have the most skin in the game
and the loudest voice in internal decisions about which evals to trust. When they post
"our agent scored X on Pro Max," that post carries technical credibility that marketing never can.

The two personas work together: Persona A legitimizes the benchmark academically, Persona B
spreads it through practitioner networks.

Click: reveals Persona B.
-->

---
transition: slide-left
---

<div class="eyebrow">[ THE LAUNCH ]</div>

# Launch Strategy

<div class="launch-strip mb-3">
  <div class="launch-strip__label">[ Internal Foundation ]</div>
  <div class="launch-strip__items">
    <span class="launch-strip__item">Scale Labs Researchers · technical + commercial positioning</span>
    <span class="launch-strip__sep">·</span>
    <span class="launch-strip__item">Comms · PR · TechCrunch · Hacker News</span>
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
      <span class="phase-col__sub">AI Engineer · SF · June 2026</span>
    </div>
    <ul class="phase-col__items">
      <li>Live leaderboard + paper drop</li>
      <li>Partners publish same-day</li>
      <li><a href="https://x.com/swyx" target="_blank" style="color:rgba(255,255,255,0.85)">@swyx</a> · <a href="https://x.com/nlw" target="_blank" style="color:rgba(255,255,255,0.85)">@nlw</a> · <a href="https://x.com/rasbt" target="_blank" style="color:rgba(255,255,255,0.85)">@rasbt</a> amplify</li>
      <li>Scale Labs blog + owned channels</li>
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
      <li>Commercial tier outreach via Sales</li>
    </ul>
  </div>
</div>

<div class="flex items-center gap-4">
  <span class="eyebrow" style="margin-bottom:0; font-size:0.62rem;">[ badge · marketing badge ]</span>
  <span class="swe-badge"><span class="swe-badge__label">SWE-Bench Pro Max</span><span class="swe-badge__value">Certified · Rank #1</span></span>
</div>

<!--
INTERNAL FOUNDATION:
- Scale Labs Researchers: own both technical validation AND commercial positioning.
- Comms/PR: TechCrunch (mainstream AI coverage) + Hacker News (organic if the work is strong
  — submit arXiv paper and GitHub repo directly).

PRE (T-4 weeks):
- CRITICAL: Frontier labs must run their models before the public drop — an empty leaderboard
  on day 1 kills momentum. Embargo + early access gives labs a stake in the launch succeeding.
- Release assets: arXiv paper, HuggingFace dataset, open-source GitHub harness. Without these
  the research community won't cite — it's a product announcement, not a research contribution.

LAUNCH (AI Engineer SF, late June 2026):
- Coordinated drop: paper + leaderboard + GitHub go live simultaneously.
- AA = cost/rigor credibility. Arena AI = real-world community trust, ~5M MAU.
- Influencers: @swyx (AI Engineer / Latent Space), @nlw (The AI Daily Brief),
  @rasbt (Sebastian Raschka, ML researcher/author).

POST:
- Monthly leaderboard refresh is the most important post-launch action. A benchmark that
  doesn't update gets gamed and ignored within 6 months.
- Badge embeds compound — every certified model is a new distributor.
- NeurIPS Sydney (Dec 6–12, 2026) as a follow-up moment to sustain the press cycle.

Click 1–3: each phase reveals in sequence.
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
      <li>If it can't go in a footnote, it won't get shared</li>
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
      <li>AA + Arena AI co-sign the results</li>
      <li>Changes the epistemics, not just the reach</li>
      <li>Independence IS the distribution mechanism</li>
    </ul>
  </div>
</div>

<!--
This slide answers the assignment question directly: "what needs to be true for AI researchers
to organically engage, repost, or cite Scale's work?"

1. CITABLE: Researchers don't repost marketing. They cite peer-reviewed or reproducibly
   verifiable work. The arXiv paper + open GitHub harness are prerequisites, not nice-to-haves.
   If a researcher can't drop it into a footnote or a model card, it doesn't travel.

2. HARD: The benchmark must be genuinely difficult. If top models hit 90%, it's already
   saturated and nobody cares. Scores in the 20–60% range signal that winning is meaningful —
   it becomes a status signal among labs. The embargo strategy (getting credible labs to run it
   before launch) is what ensures the leaderboard isn't empty and isn't dominated by nobody.

3. INDEPENDENT: A benchmark run and graded solely by Scale gets dismissed as self-serving
   by a skeptical research community. Artificial Analysis and Arena AI co-signing the results
   changes the epistemics entirely — it's no longer Scale claiming the benchmark is good,
   it's the field's two most-trusted independent evaluators saying so.

These three conditions are why the launch strategy is designed the way it is: the PRE phase
gets the leaderboard populated (hardness + credibility), the arXiv paper makes it citable,
and the partner co-launch provides independence.

SUCCESS METRICS (for reference — tracked post-launch):
- X engagement: combined posts @ScaleAI, @ArtificialAnlsis, @ArenaAI + @swyx, @nlw, @rasbt
  Tracked: likes, views, reposts, retweets
- Page traffic: visits + clicks to labs.scale.com leaderboard
  Tracked: unique visitors, session depth, return visits
- GitHub stars: benchmark + harness repo + badge embeds on model pages
  Tracked: stars, forks, badge embed count (sleeper metric — direct measure of lab buy-in)

Click 1–3: each condition panel reveals in sequence.
-->
