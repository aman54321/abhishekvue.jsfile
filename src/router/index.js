import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import SignUp from '../views/SignUp.vue'
import SignIn from '../views/SignIn.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/activity',
    name: 'activity',
    component: () => import(/* webpackChunkName: "about" */ '../views/ActivityLevel.vue')
  },
  {
    path: '/bmi',
    name: 'bmi',
    component: () => import(/* webpackChunkName: "about" */ '../views/BmiVue.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewProfile')
  },
  {
    path: '/showtable',
    name: 'showtable',
    component: () => import(/* webpackChunkName: "about" */ '../views/ShowTable')
  },
  {
    path: '/signup',
    name:'signup',
    component: SignUp,
  },
  {
    path: '/login',
    name:'login',
    component: SignIn,
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
