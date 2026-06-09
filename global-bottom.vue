<template>
  <!-- Scale Labs signature chrome + notes toggle -->
  <div class="scale-chrome">
    <div class="scale-chrome__rule" />
    <div class="scale-chrome__mark">[ SCALE&nbsp;·&nbsp;LABS ]</div>
    <button class="notes-btn" @click="showNotes = !showNotes">
      {{ showNotes ? '[ HIDE NOTES ]' : '[ NOTES ]' }}
    </button>
  </div>

  <Transition name="notes-slide">
    <div v-if="showNotes" class="notes-panel">
      <div class="notes-panel__inner">
        {{ slideNote || 'No notes for this slide.' }}
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useNav } from '@slidev/client'

const showNotes = ref(false)
const { currentPage, currentSlide } = useNav()

const slideNote = computed(() => currentSlide.value?.note?.trim() ?? '')
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
