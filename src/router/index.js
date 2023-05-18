import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('@/views/ContactsView.vue')
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: () => import('@/views/CatalogView.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('@/views/ProductView.vue')
    },
    {
      path: '/feedback/:id',
      name: 'feedback',
      component: () => import('@/views/FeedbackView.vue')
    },
    {
      path: '/reviews/:id',
      name: 'reviews',
      component: () => import('@/views/ReviewsView.vue')
    },
    {
      path: '/rules',
      name: 'rules',
      component: () => import('@/views/RulesView.vue')
    }
  ]
})

export default router
