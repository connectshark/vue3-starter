const { createWebHistory, createRouter } = require("vue-router");

const history = createWebHistory()

const router = createRouter({
  history,
  routes: [
  {
    path: '/',
    component: () => import('../components/home.vue')
  },
  {
    path: '/ref',
    component: () => import('../components/ref.vue')
  }
  ]
})

export default router