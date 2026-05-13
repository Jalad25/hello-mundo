<script setup lang="ts">
import { useRouter } from 'vue-router'
import TerminalSplash from '../components/TerminalSplash.vue'

const router = useRouter()
</script>

<template>
  <div class="splash">
    <TerminalSplash @done="router.replace('/me')" />
  </div>
</template>

<style scoped>
.splash {
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: var(--splash-bg);
}
</style>
