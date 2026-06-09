---
theme: seriph
title: SWE-Bench Pro Max — Launch Strategy
info: |
  ## SWE-Bench Pro Max
  GTM launch-strategy deck · Scale AI · NeurIPS 2026
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
  <span class="scale-tag">NeurIPS 2026 · Sydney</span>
</div>

</div>

<!--
One-liner should be ~12 words capturing the core promise.
Draft: "The benchmark frontier labs can't train on — and can't ignore."

Context: This is a 7-slide GTM launch-strategy deck for SWE-Bench Pro Max,
a new harder AI coding benchmark. Target audience: ML/AI engineers at
Anthropic, DeepMind, OpenAI, Meta, Nvidia. Setting: Scale AI interview take-home.
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
Economic force. Frontier labs and cloud providers priced tokens at a loss
to win market share — masking the true cost of running capable models at scale.
As subsidies end, the question enterprises and researchers ask shifts from
"what can it do?" to "what can it do per dollar?"

Raw resolve rate no longer tells the full story. A model that scores 60% but
costs 10× more than a 55% model is a worse deal. SWE-Bench Pro Max's
cost-normalized dimension directly answers this economic shift.

Click to reveal: the cost-per-capability panel.
-->

---
transition: fade
---

<div class="force-stamp">02</div>
<div class="eyebrow">[ FORCE 02 · TECHNOLOGICAL ]</div>

# RL + Agent Harnesses Are the New Frontier

<div class="vis-stair">
  <div v-click="1" class="vis-stair__step">
    <div class="vis-stair__step-label">Base<br>Model</div>
    <div class="vis-stair__step-cap">Pre-2023</div>
  </div>
  <div v-click="2" class="vis-stair__step">
    <div class="vis-stair__step-label">Model<br>+ RL</div>
    <div class="vis-stair__step-cap">2023 – 2024</div>
  </div>
  <div v-click="3" class="vis-stair__step">
    <div class="vis-stair__step-label">Model + RL<br>+ Agents</div>
    <div class="vis-stair__step-cap">2025 → now</div>
  </div>
</div>
<div class="vis-stair__baseline" v-click="1"></div>

<!--
Technological force. RL fine-tuning and inference-time reasoning have become
the default approach for frontier coding models. Agent harnesses (tool use,
multi-step planning, multi-file editing) compound raw model capability further —
what looked hard last quarter is solved today.

The implication: a benchmark built for pre-agent models saturates fast.
SWE-Bench Pro is already showing this. Pro Max is designed to stay hard —
private repos that can't leak, new task types (not just bug-fixes), continuously
refreshed. The staircase keeps going; the benchmark needs to climb with it.

Click 1–3: each staircase step reveals in sequence.
-->

---
transition: fade
---

<div class="force-stamp">03</div>
<div class="eyebrow">[ FORCE 03 · SOCIAL ]</div>

# The Field Is Losing Trust in Benchmarks

<div class="vis-decay">
  <div class="vis-decay-word" :class="{ 'is-struck': $clicks >= 1 }">CONTAMINATION</div>
  <div class="vis-decay-word" :class="{ 'is-struck': $clicks >= 2 }">GAMING</div>
  <div class="vis-decay-word" :class="{ 'is-struck': $clicks >= 3 }">SATURATION</div>
</div>

<!--
Social force. The research community is deeply suspicious of headline benchmark scores:

- CONTAMINATION: Models trained on eval data report inflated scores. Was it solved, or memorized?
- GAMING: Optimize for the metric (Goodhart's Law) and the metric stops measuring capability.
- SATURATION: MMLU, HumanEval, even SWE-bench — top models hit 70–90%+ and the leaderboard
  becomes meaningless.

The demand signal is clear: the field wants evals that are genuinely hard to game,
independently audited, and reflect how real engineers work — not just "does it pass
a pre-written unit test?"

Practitioners want cost, code quality, and security assessed, not just pass/fail.

Click 1–3: each word gets crossed out as you name it, dramatizing the decay.
-->

---
transition: fade
---

<div class="eyebrow">[ THE BIG IDEA ]</div>

# SWE-Bench Pro Max

<div class="rule-accent mb-3"></div>

<p class="text-lg" style="color:var(--scale-muted); margin-bottom: 1.5rem; font-style: normal;">
  All-in-one benchmark for frontier model providers — unlike MMLU, it can't be trained on.
</p>

<div class="grid grid-cols-4 gap-3">
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
    <div class="diff-pill__label">Security</div>
  </div>
</div>

<!--
The big idea — a classic "For / Unlike" positioning statement, condensed:

FOR: ML and AI engineers dissatisfied with benchmark saturation and
data-contaminated evals that don't represent real-world software challenges.

IS: SWE-Bench Pro Max is the all-in-one benchmark for frontier model providers.

UNLIKE: Clean, optimal-environment benchmarks like MMLU, it ships 2× the
private repos of SWE-Bench Pro (via enterprise + early-stage company partners)
and evaluates models across four dimensions — not just pass/fail.

The four differentiators map to the three forces:
- 2× private repos → contamination-proof (social force)
- Cost metrics → economic force payoff
- Code quality + Security → human-centric SWE demand (social force)

Click 1–4: each dimension tile reveals in sequence.
-->

---
layout: two-cols
layoutClass: gap-8
transition: slide-left
---

<div class="eyebrow">[ THE LAUNCH ]</div>

# Launch Strategy

<div class="rule-accent mb-4"></div>

::left::

**Co-launch partners**

<div class="partner-timeline">
  <div class="partner-row">
    <div class="partner-row__dot"></div>
    <div class="partner-row__name">Artificial Analysis</div>
    <div class="partner-row__role">Cost · quality rigor</div>
  </div>
  <div class="partner-row">
    <div class="partner-row__dot"></div>
    <div class="partner-row__name">Arena AI</div>
    <div class="partner-row__role">Community trust · 5M MAU</div>
  </div>
</div>

<div class="mt-5">

**Earned media**

<div style="font-size:0.82rem; color:var(--scale-muted); margin-top:0.5rem;">
  <strong style="color:var(--scale-fg);">@swyx</strong> · <strong style="color:var(--scale-fg);">@nlw</strong> → organic researcher amplification
</div>

</div>

**The flywheel**

<div class="mt-2 flex gap-2 flex-wrap">
  <span class="swe-badge"><span class="swe-badge__label">SWE-Bench Pro Max</span><span class="swe-badge__value">Certified · Rank #1</span></span>
</div>

::right::

**Launch moment**

<div class="date-block date-block--primary mb-3">
  <div class="date-block__when">Primary · Dec 6–12, 2026</div>
  <div class="date-block__conf">NeurIPS</div>
  <div class="date-block__city">Sydney, Australia</div>
</div>

<div v-click class="date-block date-block--alt">
  <div class="date-block__when">Sooner alternative · Late June 2026</div>
  <div class="date-block__conf">AI Engineer World's Fair</div>
  <div class="date-block__city">San Francisco, CA</div>
</div>

<!--
Launch strategy. Two key points:

CO-LAUNCH PARTNERS (not just megaphones — each validates a different pillar):
- Artificial Analysis (artificialanalysis.ai): independent benchmarking "gold standard,"
  self-run evals with mystery-shopper rigor. Validates cost-normalized + rigor pillar.
  Trusted by every major lab.
- Arena AI (arena.ai): Berkeley-born (Chatbot Arena → LMArena → Arena, rebranded Jan 2026).
  Most-cited human-preference rankings. ~5M MAU, 60M+ conversations/month.
  $150M Series A at $1.7B valuation. Validates real-world + community-trust pillar.

EARNED MEDIA: @swyx (AI Engineer / Latent Space) + @nlw (Nathaniel Whittemore /
The AI Daily Brief). Their retweets drive ML researchers to organically engage, cite, share.

THE FLYWHEEL (badge): "SWE-Bench Pro Max Certified" embeddable seal that frontier labs
add to their model pages. Every winner becomes a distributor. Competitive pressure drives
the next lab to earn one. Self-propagating distribution engine.

LAUNCH TIMING:
- Primary: NeurIPS Dec 6–12, 2026 — Sydney, Australia (International Convention Centre).
  Largest ML gathering. Concentrates the exact target persona + press + announcements.
  Paper + live leaderboard drop, partners publish same-day.
- Sooner alt: AI Engineer World's Fair, SF, late June 2026. Core practitioner audience.
  Good option if an earlier splash is needed.

Click: reveals the sooner-alternative date block.
-->

---
layout: center
class: text-center
transition: fade
---

<div class="eyebrow">[ SUCCESS METRICS ]</div>

# Measuring the Launch

<div class="rule-accent mt-2 mb-6" style="margin-left:auto;margin-right:auto;"></div>

<div class="funnel">
  <div v-click="1" class="funnel-stage">
    <div class="funnel-stage__num">01</div>
    <div class="funnel-stage__icon">📣</div>
    <div class="funnel-stage__title">X Engagement</div>
    <div class="funnel-stage__what">@ScaleAI · @ArtificialAnlsis · @ArenaAI<br>@swyx · @nlw</div>
  </div>
  <div v-click="1" class="funnel-arrow">→</div>
  <div v-click="2" class="funnel-stage">
    <div class="funnel-stage__num">02</div>
    <div class="funnel-stage__icon">↗</div>
    <div class="funnel-stage__title">Page Traffic</div>
    <div class="funnel-stage__what">labs.scale.com<br>leaderboard visits</div>
  </div>
  <div v-click="2" class="funnel-arrow">→</div>
  <div v-click="3" class="funnel-stage">
    <div class="funnel-stage__num">03</div>
    <div class="funnel-stage__icon">⭐</div>
    <div class="funnel-stage__title">GitHub Stars</div>
    <div class="funnel-stage__what">benchmark repo<br>+ badge embeds</div>
  </div>
</div>

<!--
Success metrics — an awareness → interest → adoption funnel.

01 · X ENGAGEMENT (Awareness):
Combined posts across @ScaleAI, @ArtificialAnlsis, @ArenaAI + influencer posts by
@swyx and @nlw. Tracked: likes, views, reposts, retweets.

02 · PAGE TRAFFIC (Interest):
Visits + clicks to the SWE-Bench Pro Max leaderboard page on labs.scale.com.
Tracked: unique visitors, session depth, return visits.

03 · GITHUB STARS (Adoption):
Stars on the benchmark + harness repo, plus badge embeds on model pages as a proxy
for labs actively citing the work.
Tracked: stars, forks, badge embed count.

Badge embed count is the sleeper metric — it's a direct measure of labs putting
skin in the game and turning their own audience into Scale's distribution.

Targets set at launch kickoff. This three-stage funnel tells us whether the launch
converted the AI researcher community at each stage, not just whether we got impressions.

Click 1–3: funnel stages reveal left to right.
-->
