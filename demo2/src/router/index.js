import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/content/Home.vue'
import Personal from '../components/content/Personal'
import Users from '../components/content/Users'

Vue.use(Router)

const routes = [{
  path: '',
  redirect: '/home'
}, {
  path: '/home',
  component: Home
}, {
  path: '/personal',
  component: Personal
}, {
  path: '/users',
  component: Users
}]

const router = new Router({
  routes,
  mode: 'history'
})

export default router