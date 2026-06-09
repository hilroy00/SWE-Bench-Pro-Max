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

# SWE-Bench Pro <span class="max-gradient">Max</span>

<div class="rule-accent mt-2 mb-4" style="margin-left:auto;margin-right:auto;"></div>

<div class="slide-fade-up-delay">

**The Definitive Coding Agent Benchmark**

<div class="pt-10 flex gap-3 justify-center">
  <span class="scale-tag"><b>Scale AI Labs</b></span>
</div>

</div>

<!--
SWE-Bench Pro Max is a new, harder benchmark for frontier AI coding agents.
It adds 2× more private repos, cost metrics, code quality, security assessment,
and a neutral agent harness — five dimensions instead of just pass/fail.
Launching at AI Engineer World's Fair, San Francisco, with Scale AI Labs.
-->

---
transition: fade
---

<div class="eyebrow">[ THE PERSONA ]</div>

# Who We're Targeting

<div class="rule-accent mb-5"></div>

<div class="persona-stats">
  <div>
    <div class="persona-stat__pct persona-stat__pct--a">15%</div>
    <div class="persona-stat__role">AI Engineer · ML Engineer</div>
    <div class="persona-stat__why">→ decides which benchmarks get adopted</div>
  </div>
  <div v-click>
    <div class="persona-stat__pct persona-stat__pct--b">10%</div>
    <div class="persona-stat__role">ML Research Scientist</div>
    <div class="persona-stat__why">→ cites and gives benchmarks legitimacy</div>
  </div>
</div>

<div class="waffle">
  <div v-for="i in 15" :key="'a'+i" class="waffle-dot waffle-dot--a"></div>
  <div v-for="i in 10" :key="'b'+i" class="waffle-dot waffle-dot--b"></div>
  <div v-for="i in 75" :key="'c'+i" class="waffle-dot"></div>
</div>

<div style="font-size:0.65rem; color:var(--scale-muted); text-align:left;">
  <a href="https://www.linkedin.com/feed/update/urn:li:activity:7375198335449817088/" target="_blank">Bing Liu · LinkedIn SWE-bench Pro launch post</a> · n=312 interactions
</div>

<!--
We know who engages with SWE-bench benchmarks because Bing Liu's LinkedIn post
announcing SWE-bench Pro got 312 interactions. 15% were AI Engineers or ML Engineers
— the practitioners who build RL pipelines and agent scaffolding. 10% were ML Research
Scientists — the academics who write papers and model cards. Together they are the wedge:
engineers decide which evals to trust internally; researchers decide what gets cited externally.
The blue squares are engineers, the indigo squares are researchers. The rest are everyone else.
Click to reveal the ML Research Scientist stat.
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
      <div v-click="4" class="vis-decay-word" style="font-size:clamp(1.2rem,3vw,2rem);" :class="{ 'is-struck': $clicks >= 5 }">CONTAMINATION</div>
      <div v-click="5" class="vis-decay-word" style="font-size:clamp(1.2rem,3vw,2rem);" :class="{ 'is-struck': $clicks >= 6 }">GAMING</div>
      <div v-click="6" class="vis-decay-word" style="font-size:clamp(1.2rem,3vw,2rem);" :class="{ 'is-struck': $clicks >= 7 }">SATURATION</div>
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

# SWE-Bench Pro <span class="max-gradient">Max</span>

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
transition: slide-left
---

<div class="eyebrow">[ THE LAUNCH ]</div>

# Launch Strategy

<div class="launch-strip mb-3">
  <div class="launch-strip__label">[ Internal Foundation ]</div>
  <div class="launch-strip__items">
    <span class="launch-strip__item">Scale Labs Researchers: technical + commercial positioning</span>
    <span class="launch-strip__sep">·</span>
    <span class="launch-strip__item">Comms + PR: TechCrunch · Hacker News · <a href="https://www.therundown.ai/" target="_blank" style="color:var(--scale-accent);">The Rundown AI</a> · <a href="https://www.artificialintelligence-news.com/" target="_blank" style="color:var(--scale-accent);">AI News</a></span>
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
  <span class="eyebrow" style="margin-bottom:0; font-size:0.62rem;">[ embeddable marketing badge ]</span>
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
