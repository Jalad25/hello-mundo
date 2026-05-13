<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <div class="window">
    <div class="titlebar">
      <span class="title">{{ title }}</span>
      <div class="controls" aria-hidden="true">
        <button class="btn btn--min" tabindex="-1" type="button">
          <svg viewBox="0 0 10 10" width="10" height="10"><line x1="1" y1="8" x2="9" y2="8" stroke="currentColor" stroke-width="1.2" /></svg>
        </button>
        <button class="btn btn--max" tabindex="-1" type="button">
          <svg viewBox="0 0 10 10" width="10" height="10"><rect x="1.5" y="1.5" width="7" height="7" fill="none" stroke="currentColor" stroke-width="1.2" /></svg>
        </button>
        <button class="btn btn--close" tabindex="-1" type="button">
          <svg viewBox="0 0 10 10" width="10" height="10"><line x1="2" y1="2" x2="8" y2="8" stroke="currentColor" stroke-width="1.2" /><line x1="8" y1="2" x2="2" y2="8" stroke="currentColor" stroke-width="1.2" /></svg>
        </button>
      </div>
    </div>
    <div class="body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.window {
  width: min(1200px, 96vw);
  height: min(820px, 92dvh);
  background: var(--window-bg);
  border: 1px solid var(--chrome-border);
  border-radius: 6px;
  box-shadow: var(--shadow-window);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.titlebar {
  flex: 0 0 auto;
}

.body {
  flex: 1 1 auto;
  position: relative;
  overflow: auto;
  background: var(--window-bg);
}

@media (max-width: 768px) {
  .window {
    width: 100vw;
    height: 100dvh;
    border-radius: 0;
    border: 0;
  }
}
</style>
