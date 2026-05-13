<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { House, Code2, Mail, Menu } from '@lucide/vue'

const links = [
  { to: '/me', label: 'Me', icon: House },
  { to: '/projects', label: 'Projects', icon: Code2 },
  { to: '/contact', label: 'Contact', icon: Mail },
]

const open = ref(false)
const route = useRoute()

watch(() => route.fullPath, () => {
  open.value = false
})
</script>

<template>
  <button
    class="hamburger"
    :class="{ 'hamburger--hidden': open }"
    :aria-expanded="open"
    aria-controls="sidenav"
    aria-label="Toggle navigation"
    @click="open = !open"
  >
    <Menu :size="22" :stroke-width="2" />
  </button>

  <div
    v-if="open"
    class="scrim"
    @click="open = false"></div>

  <aside id="sidenav" class="nav" :class="{ 'nav--open': open }">
    <RouterLink to="/me" class="logo-slot" aria-label="Home">
      <img src="/assets/logo.png" alt="" />
    </RouterLink>

    <ul>
      <li v-for="link in links" :key="link.to">
        <RouterLink :to="link.to" class="link" active-class="link--active">
          <span class="icon">
            <component :is="link.icon" :size="22" :stroke-width="2" />
          </span>
          <span class="pill">{{ link.label }}</span>
        </RouterLink>
      </li>
    </ul>
  </aside>
</template>

<style scoped>
.nav {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 160px;
  padding: 24px 18px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  z-index: 20;
}

.logo-slot {
  display: block;
  width: 72px;
  height: 72px;
  border-radius: 12px;
  overflow: hidden;
}

.logo-slot img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

ul {
  list-style: none;
  padding: 0;
  margin: 8px 0 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: #333;
}

.icon {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1a1a1a;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  flex: 0 0 auto;
  transition: transform 0.15s ease, background 0.15s ease;
}

.link--active .icon {
  background: var(--accent-warm);
}

.link:hover .icon,
.link:focus-visible .icon {
  transform: scale(1.05);
}

.pill {
  background: #fff;
  color: #222;
  border-radius: 999px;
  padding: 4px 14px;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  opacity: 0;
  transform: translateX(-6px);
  transition: opacity 0.15s ease, transform 0.15s ease;
  pointer-events: none;
  white-space: nowrap;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
}

.link:hover .pill,
.link:focus-visible .pill,
.link--active .pill {
  opacity: 1;
  transform: translateX(0);
}


.hamburger {
  display: none;
  position: absolute;
  top: 14px;
  left: 14px;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.4);
  color: #eee;
  cursor: pointer;
  z-index: 30;
  align-items: center;
  justify-content: center;
}

.scrim {
  display: none;
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 15;
}

@media (max-width: 768px) {
  .hamburger { display: flex; }
  .hamburger--hidden { display: none; }
  .scrim { display: block; }

  .nav {
    transform: translateX(-100%);
    transition: transform 0.25s ease-out;
    background: var(--chrome-top);
    width: 200px;
  }

  .nav--open {
    transform: translateX(0);
  }

  .pill {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
