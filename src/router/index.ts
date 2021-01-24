import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vue-project',
    name: 'VueProject',
    component: () => import(/* webpackChunkName: "vue-project" */ '../views/VueProject.vue')
  },
  {
    path: '/react-project',
    name: 'ReactProject',
    component: () => import(/* webpackChunkName: "react-project" */ '../views/ReactProject.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
