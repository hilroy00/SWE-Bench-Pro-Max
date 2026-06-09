<template>
  <div class="scale-chrome">
    <div class="scale-chrome__rule" />
    <div class="scale-chrome__mark">[ SCALE&nbsp;·&nbsp;LABS ]</div>
    <button class="notes-btn" @click="showNotes = !showNotes">
      {{ showNotes ? 'Hide Speaker Notes' : 'Speaker Notes' }}
    </button>
  </div>

  <Transition name="notes-slide">
    <div v-if="showNotes" class="notes-panel">
      <div class="notes-panel__inner">{{ note }}</div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useNav } from '@slidev/client'

const showNotes = ref(false)
const { currentSlideNo } = useNav()

const NOTES = {
  1: `This deck presents a GTM launch strategy for SWE-Bench Pro Max — Scale AI Labs' next-generation coding agent benchmark. It goes beyond pass/fail, measuring cost, code quality, security, and agent performance on private repos that can't be trained on. The launch targets frontier AI labs at AI Engineer World's Fair in San Francisco.`,

  2: `We're targeting two specific personas based on real engagement data from the SWE-bench Pro launch (n=312 LinkedIn interactions). AI Engineers and ML Engineers (15%) are the practitioners who build agent systems — they decide internally which benchmarks matter. ML Research Scientists (10%) publish papers and model cards — their citations turn a benchmark into an industry standard. Together they create a flywheel: engineers drive adoption, scientists drive credibility.`,

  3: `The first market force: the era of cheap tokens is ending. AI companies priced inference below cost to win market share — that's changing. As costs normalize, enterprises and researchers need to know which model delivers the most capability per dollar. A benchmark that only measures resolve rate can't answer that. SWE-Bench Pro Max adds cost metrics to fill this gap.`,

  4: `Two forces are converging. Technologically, RL training and agent scaffolding keep compounding model capability — benchmarks designed for last year's models saturate fast. Socially, the research community has lost trust in benchmarks: models get trained on eval data, scores get gamed, and once top models hit 90%+, the leaderboard stops being useful. SWE-Bench Pro Max is designed to stay hard and trustworthy.`,

  5: `SWE-Bench Pro Max directly answers all three forces. It uses private repos from real enterprise codebases — models can't be trained on the data. It evaluates five dimensions: private repo performance, cost efficiency, code quality, security, and neutral agent harness performance. Scale is uniquely positioned to build this because of its existing enterprise codebase relationships, frontier-lab connections, and ownership of the SWE-bench Pro lineage.`,

  6: `The launch starts with internal alignment — Scale Labs researchers own both technical and commercial messaging, and Comms/PR targets TechCrunch, Hacker News, The Rundown AI, and AI News. Four weeks out, frontier labs get early access under embargo so the leaderboard isn't empty on day one. Launch day at AI Engineer SF: paper, leaderboard, and GitHub go live simultaneously, with Artificial Analysis and Arena AI publishing coverage the same day. A featured panel of early testers adds practitioner credibility. Post-launch, monthly leaderboard refreshes keep it relevant, and the certified badge turns every winning lab into a distribution channel.`,

  7: `Three conditions must be true for researchers to organically share and cite this work. First, it must be citable — that means a published arXiv paper and an open, reproducible harness. Second, winning must mean something — scores in the 20–60% range signal genuine difficulty, making a high rank a real status symbol. Third, Scale can't be the only validator — Artificial Analysis and Arena AI co-signing the results means the field's two most trusted independent evaluators are backing it, not just the company that built it.`,
}

const note = computed(() => NOTES[currentSlideNo.value] ?? 'No notes for this slide.')
</script>

<style scoped>
.scale-chrome {
  position: absolute;
  inset: auto 0 0 0;
  pointer-events: none;
  z-index: 10;
}
.scale-chrome__rule {
  height: 2px;
  width: 100%;
  background: linear-gradient(
    90deg,
    #0015ff 0%,
    #3d36fd 35%,
    rgba(196, 189, 242, 0) 100%
  );
  opacity: 0.9;
}
.scale-chrome__mark {
  position: absolute;
  left: 1.4rem;
  bottom: 0.7rem;
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 0.62rem;
  letter-spacing: 0.16em;
  color: #71717a;
  opacity: 0.8;
}
.notes-btn {
  position: absolute;
  right: 1.4rem;
  bottom: 0.55rem;
  pointer-events: all;
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 0.6rem;
  letter-spacing: 0.14em;
  color: #71717a;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  transition: color 0.15s ease;
}
.notes-btn:hover { color: #0015ff; }

.notes-panel {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #09090b;
  border-top: 2px solid #0015ff;
  z-index: 200;
  max-height: 35vh;
  overflow-y: auto;
  pointer-events: all;
}
.notes-panel__inner {
  padding: 1rem 1.5rem;
  font-family: 'Geist Mono', ui-monospace, monospace;
  font-size: 0.72rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.82);
  white-space: pre-wrap;
  max-width: 80ch;
}

.notes-slide-enter-active,
.notes-slide-leave-active {
  transition: transform 0.2s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.2s ease;
}
.notes-slide-enter-from,
.notes-slide-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
