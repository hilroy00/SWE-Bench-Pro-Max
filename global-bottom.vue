<template>
  <!-- Scale Labs signature chrome, rendered on every slide -->
  <div class="scale-chrome">
    <div class="scale-chrome__rule" />
    <div class="scale-chrome__mark">[ SCALE&nbsp;·&nbsp;LABS ]</div>
  </div>
</template>

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
</style>
