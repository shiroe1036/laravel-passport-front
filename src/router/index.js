import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/callback',
      name: 'OAuthCallbackHandler',
      component: () => import('../views/OAuthCallbackHandler.vue')
    }
  ]
})

export default router
