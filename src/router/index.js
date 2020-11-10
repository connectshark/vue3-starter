const { createWebHistory, createRouter } = require("vue-router");

const history = createWebHistory()

const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: () => import('../views/home.vue')
    },
    {
      path: '/ref',
      component: () => import('../views/ref.vue')
    },
    {
      path: '/reactive',
      component: () => import('../views/reactive.vue')
    }
  ]
})

export default router