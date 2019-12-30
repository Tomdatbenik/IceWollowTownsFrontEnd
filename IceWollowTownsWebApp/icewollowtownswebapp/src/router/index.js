import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Settlement from '../views/Settlement.vue'
import Buildings from '../views/Buildings.vue'
import { authGuard } from "../auth/authGuard";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Settlement',
    component: Settlement,
    beforeEnter: authGuard
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    beforeEnter: authGuard
  },
  {
    path: '/buildings',
    name: 'buildings',
    component: Buildings,
    beforeEnter: authGuard
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    beforeEnter: authGuard
  },
  {
    path: '/merchantguild',
    name: 'merchantguild',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/MerchantGuild.vue'),
    beforeEnter: authGuard
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
