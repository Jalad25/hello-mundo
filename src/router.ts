import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'splash', component: () => import('./views/SplashView.vue') },
  { path: '/me', name: 'home', component: () => import('./views/HomeView.vue') },
  { path: '/projects', name: 'projects', component: () => import('./views/ProjectsView.vue') },
  { path: '/contact', name: 'contact', component: () => import('./views/ContactView.vue') },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
