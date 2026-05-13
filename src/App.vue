<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const transitionName = ref('')

router.beforeEach((to, from) => {
  // Fade only when the splash route is involved on either side.
  // Navigation between /me, /projects, /contact is instant.
  transitionName.value =
    to.name === 'splash' || from.name === 'splash' ? 'page' : ''
})
</script>

<template>
  <RouterView v-slot="{ Component, route }">
    <Transition :name="transitionName" mode="out-in">
      <component :is="Component" :key="route.path" />
    </Transition>
  </RouterView>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.6s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
