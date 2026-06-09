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

<div class="eyebrow">[ LAUNCH STRATEGY ]</div>

# SWE-Bench Pro Max

<div class="rule-accent mt-2 mb-4" style="margin-left:auto;margin-right:auto;"></div>

**[One-liner placeholder — TBD]**

<div class="pt-10 flex gap-3 justify-center">
  <span class="scale-tag"><b>Scale AI</b> · Research</span>
  <span class="scale-tag">NeurIPS 2026 · Sydney</span>
</div>

<!--
Cover slide. One-liner should be ~12 words capturing the core promise:
contamination-proof, cost-aware, all-in-one. Example draft:
"The benchmark frontier labs can't train on — and can't ignore."
-->

---

<div class="eyebrow">[ FORCE 01 · ECONOMIC ]</div>

# The Token-Subsidization Era Is Over

<div class="rule-accent mb-6"></div>

<div class="grid grid-cols-2 gap-6 mt-2">
  <div class="force-card">
    <div class="force-card__label">What happened</div>
    <div class="force-card__heading">Inference was sold below cost</div>
    <div class="force-card__body">
      Frontier labs and cloud providers priced tokens at a loss to win market share,
      masking the true cost of running capable models at scale.
    </div>
  </div>
  <div class="force-card">
    <div class="force-card__label">What's changing</div>
    <div class="force-card__heading">Cost-per-capability now decides</div>
    <div class="force-card__body">
      As subsidies end, enterprises and researchers ask a harder question:
      <strong>which model delivers the most capability per dollar?</strong>
      Raw resolve rate no longer tells the story.
    </div>
    <div class="force-card__payoff">→ sets up: cost-normalized benchmarking</div>
  </div>
</div>

<!--
Economic force. Key talking point: the "free tokens" era funded adoption metrics,
not real capability metrics. When cost enters the equation, benchmarks that ignore
$/token are no longer fit for purpose. SWE-Bench Pro Max's cost dimension directly
answers this shift.
-->

---

<div class="eyebrow">[ FORCE 02 · TECHNOLOGICAL ]</div>

# RL + Agent Harnesses Are the New Frontier

<div class="rule-accent mb-6"></div>

<div class="grid grid-cols-2 gap-6 mt-2">
  <div class="force-card">
    <div class="force-card__label">The paradigm shift</div>
    <div class="force-card__heading">Reinforcement learning is now standard</div>
    <div class="force-card__body">
      RL fine-tuning and inference-time reasoning have become the default training
      and deployment approach for frontier coding models. The capability curve is steep.
    </div>
  </div>
  <div class="force-card">
    <div class="force-card__label">The compounding effect</div>
    <div class="force-card__heading">Agent harnesses keep raising the ceiling</div>
    <div class="force-card__body">
      Scaffolding (tool use, multi-step planning, multi-file editing) compounds
      raw model capability — what looked hard last quarter is solved today.
      <strong>Simple bug-fix benchmarks saturate fast.</strong>
    </div>
    <div class="force-card__payoff">→ sets up: agentic, long-horizon, multi-language tasks</div>
  </div>
</div>

<!--
Technological force. The key insight: RL + agent harnesses mean capability is
compounding faster than static benchmark difficulty. A benchmark built for
pre-agent models (even SWE-Bench Pro) goes stale. Pro Max is designed to stay
hard — private repos that can't leak, new task types, continuously refreshed.
-->

---

<div class="eyebrow">[ FORCE 03 · SOCIAL ]</div>

# The Field Is Losing Trust in Benchmarks

<div class="rule-accent mb-6"></div>

<div class="grid grid-cols-2 gap-6 mt-2">
  <div class="force-card">
    <div class="force-card__label">The credibility problem</div>
    <div class="force-card__heading">Skepticism is at an all-time high</div>
    <div class="force-card__body">
      Contamination, Goodhart's Law, and rapid saturation have made the research
      community deeply suspicious of headline benchmark scores.
      <strong>If a model trained on the eval set, did it really "solve" it?</strong>
    </div>
  </div>
  <div class="force-card">
    <div class="force-card__label">The human-centric push</div>
    <div class="force-card__heading">Real SWE ≠ automated test-pass</div>
    <div class="force-card__body">
      Practitioners want evals that reflect how engineers actually work:
      code quality, security, collaboration with imperfect specs,
      not just "does it pass the pre-written test?"
    </div>
    <div class="force-card__payoff">→ sets up: contamination-proof · code quality · security · independent verification</div>
  </div>
</div>

<!--
Social force. Goodhart's Law: when a measure becomes a target, it ceases to be
a good measure. The community has lived through MMLU saturation, HumanEval gaming,
and now SWE-bench contamination fears. The demand signal is for an eval that is
genuinely hard to game and independently audited.
-->

---

<div class="eyebrow">[ THE BIG IDEA ]</div>

# SWE-Bench Pro Max

<div class="rule-accent mb-5"></div>

<div class="pos-block mb-6">
  <em>For</em> ML and AI engineers dissatisfied with benchmark saturation and data-contaminated evals
  that don't represent real-world software challenges,<br><br>
  <strong>SWE-Bench Pro Max</strong> is <strong>the all-in-one benchmark for frontier model providers.</strong><br><br>
  <em>Unlike</em> clean, optimal-environment benchmarks like <strong>MMLU</strong>, it ships
  <strong>2× the private repos</strong> of SWE-Bench Pro (in collaboration with enterprise and
  early-stage companies) and evaluates models across four dimensions — not just pass/fail.
</div>

<div class="grid grid-cols-4 gap-3">
  <div class="diff-pill">
    <span class="diff-pill__icon">2×</span>
    <div class="diff-pill__label">Private Repos</div>
  </div>
  <div class="diff-pill">
    <span class="diff-pill__icon">$</span>
    <div class="diff-pill__label">Cost Metrics</div>
  </div>
  <div class="diff-pill">
    <span class="diff-pill__icon">✓</span>
    <div class="diff-pill__label">Code Quality</div>
  </div>
  <div class="diff-pill">
    <span class="diff-pill__icon">⚑</span>
    <div class="diff-pill__label">Security</div>
  </div>
</div>

<!--
The big idea slide. The For/Unlike frame is a classic positioning statement.
Key contrast: MMLU is the canonical "clean, optimal, gamed" benchmark everyone
recognizes. The four differentiators map directly back to the three forces:
cost (economic), private repos + breadth (technological), code quality +
security + independence (social). Each pillar answers a force.
-->

---
layout: two-cols
layoutClass: gap-8
---

<div class="eyebrow">[ THE LAUNCH ]</div>

# Launch Strategy

<div class="rule-accent mb-4"></div>

::left::

**Co-launch partners**

<div class="force-card mb-3">
  <div class="force-card__label">Artificial Analysis · artificialanalysis.ai</div>
  <div class="force-card__body">
    Independent benchmarking gold standard — trusted by every major lab. Runs its own evals
    ("mystery-shopper" rigor). SWE-Bench Pro Max featured inside their analysis
    and leaderboard. <em>Validates the cost-normalized + rigor pillar.</em>
  </div>
</div>
<div class="force-card mb-4">
  <div class="force-card__label">Arena AI · arena.ai</div>
  <div class="force-card__body">
    Most-cited human-preference leaderboard · ~5M MAU · $1.7B valuation.
    SWE-Bench Pro Max featured inside their model rankings.
    <em>Validates the real-world + community-trust pillar.</em>
  </div>
</div>

**Earned media**

<div class="force-card__body text-sm">
  Influencer buy-in for organic amplification:<br>
  <strong>@swyx</strong> (AI Engineer / Latent Space) ·
  <strong>@nlw</strong> (The AI Daily Brief)
  → likes, views, reposts drive researchers to engage, cite, and share Scale's work.
</div>

::right::

**Launch moment**

<div class="force-card mb-3">
  <div class="force-card__label">Primary · Dec 6–12, 2026</div>
  <div class="force-card__heading">NeurIPS · Sydney, Australia</div>
  <div class="force-card__body">
    Paper + live leaderboard drop. Partners publish same-day. Largest ML gathering —
    concentrates the exact target persona.
  </div>
</div>
<div class="force-card mb-5">
  <div class="force-card__label">Sooner alternative · Late June 2026</div>
  <div class="force-card__heading">AI Engineer World's Fair · San Francisco</div>
  <div class="force-card__body">
    If an earlier splash is needed, AI Engineer SF draws the core practitioner audience.
  </div>
</div>

**The distribution flywheel**

<div class="mt-2 mb-1 text-sm" style="color:var(--scale-muted)">Every winner embeds this:</div>
<div class="flex gap-3 flex-wrap">
  <span class="swe-badge"><span class="swe-badge__label">SWE-Bench Pro Max</span><span class="swe-badge__value">Certified · Rank #1</span></span>
  <span class="swe-badge"><span class="swe-badge__label">SWE-Bench Pro Max</span><span class="swe-badge__value">Certified · Rank #3</span></span>
</div>
<div class="mt-2 text-sm" style="color:var(--scale-muted)">
  Frontier labs embed this seal on their model page → every winner becomes a distributor
  → competitive pressure drives the next lab to earn one.
</div>

<!--
Launch slide. Two co-launch partners are not just megaphones — each independently
validates a different pillar. Artificial Analysis = cost/rigor credibility with
devs and researchers. Arena AI = real-world community trust at scale.
Badge = the self-propagating flywheel. Each certified model becomes an ad.
NeurIPS Sydney is confirmed as Dec 6–12, 2026 (International Convention Centre).
-->

---
layout: center
class: text-center
---

<div class="eyebrow">[ SUCCESS METRICS ]</div>

# Measuring the Launch

<div class="rule-accent mt-2 mb-8" style="margin-left:auto;margin-right:auto;"></div>

<div class="grid grid-cols-3 gap-5 text-left">
  <div class="metric-card">
    <div class="metric-card__num">01</div>
    <div class="metric-card__title">X Engagement · Awareness</div>
    <div class="metric-card__body">
      Combined posts across <strong>@ScaleAI</strong>, <strong>@ArtificialAnlsis</strong>,
      <strong>@ArenaAI</strong> + influencer posts by <strong>@swyx</strong> and
      <strong>@nlw</strong>.<br><br>
      Tracked: <em>likes · views · reposts · retweets</em>
    </div>
  </div>
  <div class="metric-card">
    <div class="metric-card__num">02</div>
    <div class="metric-card__title">Benchmark Page Traffic · Interest</div>
    <div class="metric-card__body">
      Visits + clicks to the SWE-Bench Pro Max leaderboard page on
      <strong>labs.scale.com</strong>.<br><br>
      Tracked: <em>unique visitors · session depth · return visits</em>
    </div>
  </div>
  <div class="metric-card">
    <div class="metric-card__num">03</div>
    <div class="metric-card__title">GitHub Stars · Adoption</div>
    <div class="metric-card__body">
      Stars on the benchmark + harness repo, plus badge embeds on model pages
      as a proxy for labs actively citing the work.<br><br>
      Tracked: <em>stars · forks · badge embed count</em>
    </div>
  </div>
</div>

<div class="mt-8 text-sm" style="color:var(--scale-muted)">
  Awareness → Interest → Adoption · Target benchmarks set at launch kickoff
</div>

<!--
Success metrics slide. The three metrics form a funnel: X engagement (awareness),
page traffic (interest/consideration), GitHub stars + badge embeds (adoption/advocacy).
This lets us track whether the launch converted the AI researcher community at each
stage, not just whether we got impressions. Badge embed count is the sleeper metric —
it's a direct measure of labs putting skin in the game.
-->
