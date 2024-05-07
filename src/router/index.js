import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/MasterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/CategoryListingView/:id', // Corrected path definition
      name: 'CategoryListingView',
      component: () => import('../views/CategoryListingView.vue')
    },
     {
      path: '/listing/:id', // Corrected path definition
      name: 'listing',
      component: () => import('../views/pages/ListingView.vue')
    },
  ]
})

export default router
