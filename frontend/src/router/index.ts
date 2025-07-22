import TestView from '@/views/TestView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/test',
      name: 'home',
      component: TestView,
    },
  ],
})

export default router
