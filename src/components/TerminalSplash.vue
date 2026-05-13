<script setup lang="ts">
import { onMounted } from 'vue'
import { useTypewriter } from '../composables/useTypewriter'

const emit = defineEmits<{ done: [] }>()

const prompt = 'guest@ncc-1701.enterprises:~$'
const command = './HelloMundo'

const { output, done, start } = useTypewriter({
  text: command,
  typeSpeed: 90,
  startDelay: 500,
  onDone: () => {
    setTimeout(() => emit('done'), 800)
  },
})

onMounted(start)
</script>

<template>
  <div class="terminal" role="img" aria-label="Terminal splash">
    <div class="titlebar">
      <span class="title">guest@ncc-1701.enterprises - bash</span>
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
      <span class="prompt">{{ prompt }}</span>
      <span class="cmd">{{ output }}</span>
      <span class="cursor" :class="{ 'cursor--blink': done }" />
    </div>
  </div>
</template>

<style scoped>
.terminal {
  width: min(640px, 96vw);
  background: var(--terminal-bg);
  color: var(--text);
  font-family: var(--font-mono);
  border: 1px solid var(--chrome-border);
  border-radius: 6px;
  box-shadow: var(--shadow-window);
  overflow: hidden;
}

.body {
  padding: 18px 16px 26px;
  background: var(--terminal-bg);
  font-size: clamp(14px, 2.4vw, 16px);
  line-height: 1.6;
  white-space: pre-wrap;
  word-break: break-word;
}

.prompt {
  color: var(--accent);
  margin-right: 8px;
}

.cmd {
  color: var(--text);
}

@media (max-width: 480px) {
  .prompt {
    display: block;
    margin-right: 0;
  }
}

.cursor {
  display: inline-block;
  width: 0.55em;
  height: 1.1em;
  vertical-align: -0.2em;
  margin-left: 2px;
  background: var(--text);
}

.cursor--blink {
  animation: blink 1s steps(2, start) infinite;
}

@keyframes blink {
  to { visibility: hidden; }
}

@media (max-width: 480px) {
  .title { display: none; }
}
</style>
