const { createWebHistory, createRouter } = require("vue-router")

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
    },
    {
      path: '/loader',
      component: () => import('../views/urlLoader.vue')
    },
    {
      path: '/teleport',
      component: () => import('../views/teleport.vue')
    },
    {
      path: '/suspense',
      component: () => import('../views/suspense.vue')
    }
  ]
})

export default router