import Vue from 'vue'
import VueRouter from 'vue-router'
import liveview from '../views/liveview.vue'
import Overview from '@/views/Overview.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'overview',
    component: Overview,
  },
  {
    path: '/liveview',
    name: 'live View',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: liveview,
  },
  // {
  //   path: '/analytics',
  //   name: 'analytics',
  //   component: Analytics,
  // },
  // {
  //   path: '/archive',
  //   name: 'archive',
  //   component: Archive,
  // },
  // {
  //   path: '/settings',
  //   name: 'settings',
  //   component: Settings,
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
