<script setup lang="ts">
import type { Component } from 'vue'
import { Download } from '@lucide/vue'
import GitHubIcon from '../components/GitHubIcon.vue'
import ObsidianIcon from '../components/ObsidianIcon.vue'
import SideNav from '../components/SideNav.vue'
import AppWindow from '../components/AppWindow.vue'

interface ProjectLink {
  label: string
  url: string
  icon: Component
  iconProps?: Record<string, unknown>
  hideLabel?: boolean
}

interface Project {
  name: string
  description: string
  languages: string[]
  tags: string[]
  banner?: string
  links: ProjectLink[]
  obsidianId?: string
}

const projects: Project[] = [
  {
    name: 'Obsidian Plugin - Vertical Timeline List',
    description:
      'Utilizes task lists to create a timeline... or something like a timeline.',
    languages: ['TypeScript', 'CSS', 'JavaScript'],
    tags: ['Obsidian', 'Plugin', 'Tasks'],
    banner: 'https://raw.githubusercontent.com/Jalad25/vertical-timeline-list/refs/heads/master/assets/PluginBanner.png',
    links: [
      { label: 'GitHub', url: 'https://github.com/Jalad25/vertical-timeline-list', icon: GitHubIcon, iconProps: { variant: 'lockup' }, hideLabel: true },
      { label: 'Obsidian', url: 'https://community.obsidian.md/plugins/vertical-timeline-list', icon: ObsidianIcon, iconProps: { variant: 'lockup' }, hideLabel: true },
    ],
    obsidianId: 'vertical-timeline-list',
  },
  {
    name: 'Obsidian Plugin - Contact Note',
    description: 'Turn frontmatter in notes designated as contacts into visual contact cards. Browse them with a built-in searchable, filterable view or surface them through an Bases view that adds sorting, grouping, and extensive filtering and searching.',
    languages: ['TypeScript', 'CSS', 'JavaScript'],
    tags: ['Obsidian', 'Plugin', 'Bases'],
    banner: 'https://raw.githubusercontent.com/Jalad25/contact-note/refs/heads/master/assets/PluginBanner.png',
    links: [
      { label: 'GitHub', url: 'https://github.com/Jalad25/contact-note', icon: GitHubIcon, iconProps: { variant: 'lockup' }, hideLabel: true },
      { label: 'Obsidian', url: 'https://community.obsidian.md/plugins/contact-note', icon: ObsidianIcon, iconProps: { variant: 'lockup' }, hideLabel: true },
    ],
    obsidianId: 'contact-note',
  },
]

const languageColors: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Vue: '#41b883',
  Rust: '#dea584',
  Python: '#3572A5',
  Go: '#00ADD8',
}

const colorFor = (lang: string) => languageColors[lang] ?? '#888'
</script>

<template>
  <div class="page">
    <div class="stage">
      <AppWindow title="~/projects">
        <SideNav />
        <main class="content">
          <div class="content-inner">
            <h1>Projects</h1>
            <p class="subtitle">A few things I've built.</p>

            <ul class="grid list-reset">
              <li v-for="project in projects" :key="project.name" class="card">
                <div class="banner">
                  <img v-if="project.banner" :src="project.banner" alt="" />
                </div>
                <header class="card-head">
                  <h2>{{ project.name }}</h2>
                </header>

                <p class="card-desc">{{ project.description }}</p>

                <div class="card-meta">
                  <ul class="langs list-reset">
                    <li v-for="lang in project.languages" :key="lang" class="lang">
                      <span
                        class="lang-dot"
                        :style="{ background: colorFor(lang) }"
                      />
                      {{ lang }}
                    </li>
                  </ul>
                  <ul class="tags list-reset">
                    <li v-for="tag in project.tags" :key="tag">{{ tag }}</li>
                  </ul>
                </div>

                <footer class="card-foot">
                  <a
                    v-for="link in project.links"
                    :key="link.label"
                    :href="link.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="link-btn"
                    :aria-label="link.hideLabel ? link.label : undefined"
                  >
                    <component :is="link.icon" :height="16" v-bind="link.iconProps" />
                    <span v-if="!link.hideLabel">{{ link.label }}</span>
                  </a>
                  <a
                    v-if="project.obsidianId"
                    :href="`obsidian://show-plugin?id=${project.obsidianId}`"
                    class="link-btn"
                  >
                    <Download :size="16" :stroke-width="2" />
                    <span>Add to Obsidian</span>
                  </a>
                </footer>
              </li>
            </ul>
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

h1 {
  color: var(--accent);
  margin: 0 0 4px;
}

.subtitle {
  color: var(--text-muted);
  margin: 0 0 24px;
  font-size: 14px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}

.card {
  background: rgba(0, 0, 0, 0.18);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: border-color 0.15s ease, transform 0.15s ease;
}

.banner {
  aspect-ratio: 16 / 9;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.04), rgba(0, 0, 0, 0.2)),
    var(--chrome-top);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  overflow: hidden;
}

.banner img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.card:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}

.card > :not(.banner) {
  padding-left: 18px;
  padding-right: 18px;
}

.card-head {
  padding-top: 16px;
}

.card-head h2 {
  font-size: 16px;
  margin: 0;
  color: var(--accent);
  font-weight: 600;
  word-break: break-word;
}

.card-desc {
  margin: 6px 0;
  font-size: 13.5px;
  line-height: 1.55;
  color: var(--text);
  flex-grow: 1;
}

.card-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 4px;
  font-size: 12px;
  color: var(--text-muted);
}

.card-foot {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-top: 14px;
  padding-bottom: 16px;
}

.link-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 6px;
  background: var(--surface-hover);
  border: 1px solid transparent;
  color: var(--text);
  text-decoration: none;
  font-size: 13px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
}

.link-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.langs {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.lang {
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.lang-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tags li {
  background: var(--surface-hover);
  border-radius: 999px;
  padding: 2px 10px;
  font-size: 11px;
  color: var(--text);
}
</style>
