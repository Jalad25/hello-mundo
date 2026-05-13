<script setup lang="ts">
import SideNav from '../components/SideNav.vue'
import AppWindow from '../components/AppWindow.vue'
</script>

<template>
  <div class="page">
    <div class="stage">
      <AppWindow title="~/me">
        <SideNav />
        <main class="content">
          <div class="content-inner content-inner--split">
            <div class="image-slot">
              <img src="/assets/portrait.png" alt="" />
            </div>
            <section class="copy">
              <h1>Hello, Mundo!</h1>
              <p>
                Welcome to my catch all site! It doesn't really have a
                purpose, but it exists! Please feel free to browse the random
                information I decide to post.
              </p>
              <p>
                But who am I you ask? Well if the domain didn't give it away,
                I'm Jalad! I've been programming professionally for close to 10 years!
                Feel free to email me if you have any questions or wanna give
                me some chisme.
              </p>
            </section>
          </div>
        </main>
      </AppWindow>
    </div>
  </div>
</template>

<style scoped>
.image-slot {
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  justify-self: center;
  border: 4px solid var(--accent);
  box-shadow: var(--shadow-card);
  overflow: hidden;
}

.image-slot img {
  position: relative;
  top: 60px;
  width: 100%;
  height: auto;
}

.copy {
  font-family: var(--font-mono);
  color: var(--text);
  font-size: 15px;
  line-height: 1.7;
  padding-top: 8px;
}

h1 {
  color: var(--accent);
  font-size: 32px;
  margin: 0 0 24px;
  font-weight: 600;
}

p {
  margin: 0 0 18px;
}

@media (max-width: 900px) {
  .copy {
    text-align: left;
  }
}
</style>
