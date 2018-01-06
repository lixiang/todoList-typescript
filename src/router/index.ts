import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'
import Home from '../view/home.vue'

Vue.use(Router)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
]

export default new Router({
  routes
})
