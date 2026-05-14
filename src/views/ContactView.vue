<script setup lang="ts">
import { Mail } from '@lucide/vue'
import GitHubIcon from '../components/GitHubIcon.vue'
import ObsidianIcon from '../components/ObsidianIcon.vue'
import SideNav from '../components/SideNav.vue'
import AppWindow from '../components/AppWindow.vue'
</script>

<template>
  <div class="page">
    <div class="stage">
      <AppWindow title="~/contact">
        <SideNav />
        <main class="content">
          <div class="content-inner content-inner--split">
            <img src="/assets/dimetodo.webp" alt="" class="side-image" />

            <section class="bubble">
              <h1>¡Dime todo!</h1>
              <p class="lead">Got something to share? I'd love to hear it.</p>

              <ul class="channels list-reset">
                <li>
                  <a href="mailto:jalad@ncc-1701.enterprises" class="channel">
                    <Mail :size="18" :stroke-width="2" />
                    <span>jalad@ncc-1701.enterprises</span>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Jalad25" target="_blank" rel="noopener noreferrer" class="channel">
                    <GitHubIcon :height="18" />
                    <span>github.com/Jalad25</span>
                  </a>
                </li>
                <li>
                  <a href="https://community.obsidian.md/users/jalad" target="_blank" rel="noopener noreferrer" class="channel">
                    <ObsidianIcon :height="18" />
                    <span>community.obsidian.md/users/jalad</span>
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </main>
      </AppWindow>
    </div>
  </div>
</template>

<style scoped>
.content {
  font-family: var(--font-mono);
  color: var(--text);
}

.side-image {
  width: 100%;
  max-width: 320px;
  height: auto;
  border-radius: 8px;
  display: block;
  justify-self: center;
  box-shadow: var(--shadow-card);
}

.bubble {
  position: relative;
  background: var(--terminal-bg);
  border: 1px solid var(--chrome-border);
  border-radius: 14px;
  padding: 22px 24px;
  box-shadow: var(--shadow-card);
}

/* tail pointing left toward the image (desktop only) */
.bubble::before,
.bubble::after {
  content: '';
  position: absolute;
  top: 36px;
  width: 0;
  height: 0;
  border-style: solid;
}

.bubble::before {
  left: -14px;
  border-width: 8px 14px 8px 0;
  border-color: transparent var(--chrome-border) transparent transparent;
}

.bubble::after {
  left: -12px;
  border-width: 7px 13px 7px 0;
  border-color: transparent var(--terminal-bg) transparent transparent;
}

h1 {
  color: var(--accent);
  margin: 0 0 6px;
  font-size: 26px;
  font-weight: 600;
}

.lead {
  margin: 0 0 18px;
  color: var(--text-muted);
  font-size: 14px;
}

.channels {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.channel {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 8px;
  text-decoration: none;
  color: var(--text);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid transparent;
  transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
  font-size: 14px;
}

.channel:hover {
  background: var(--surface-hover);
  border-color: var(--accent);
  color: var(--accent);
}

/* On stacked layouts (image above bubble), point the tail up instead of left */
@media (max-width: 900px) {
  .bubble::before {
    top: -14px;
    left: 36px;
    border-width: 0 8px 14px 8px;
    border-color: transparent transparent var(--chrome-border) transparent;
  }
  .bubble::after {
    top: -12px;
    left: 38px;
    border-width: 0 7px 13px 7px;
    border-color: transparent transparent var(--terminal-bg) transparent;
  }
}
</style>
