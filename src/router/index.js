import { createRouter, createWebHistory } from 'vue-router'

const Router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'image',
      component: () => import('@/views/image.vue')
    },
    {
      path: '/button',
      name: 'button',
      component: () => import('@/views/button.vue')
    }
  ]
})

export default Router
