<template>
  <!-- Scale Labs signature chrome + notes toggle -->
  <div class="scale-chrome">
    <div class="scale-chrome__rule" />
    <div class="scale-chrome__mark">[ SCALE&nbsp;·&nbsp;LABS ]</div>

    <!-- Notes toggle button -->
    <button class="notes-btn" @click="showNotes = !showNotes" :aria-label="showNotes ? 'Hide notes' : 'Show notes'">
      {{ showNotes ? '[ HIDE NOTES ]' : '[ NOTES ]' }}
    </button>
  </div>

  <!-- Notes panel — rendered below the slide in the same viewport -->
  <Transition name="notes-slide">
    <div v-if="showNotes && currentNote" class="notes-panel">
      <div class="notes-panel__inner">{{ currentNote }}</div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useNav, useSlideContext } from '@slidev/client'

const showNotes = ref(false)
const { currentPage } = useNav()

// $slidev.slides is 1-indexed; notes come from the parsed markdown
const currentNote = computed(() => {
  try {
    const slides = window.__slidev_slides__ ?? []
    const slide = slides[currentPage.value - 1]
    return slide?.note?.trim() || ''
  } catch {
    return ''
  }
})
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

/* Notes button — bottom right, above the chrome rule */
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

/* Notes panel — appears below the slide */
.notes-panel {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #09090b;
  border-top: 2px solid #0015ff;
  z-index: 100;
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

/* Slide-up transition */
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
