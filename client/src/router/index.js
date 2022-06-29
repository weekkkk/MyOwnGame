import {
  createRouter,
  createWebHistory
} from 'vue-router'
import LayoutBase from '../views/layouts/layout-base.vue'
import LoginPage from '../views/pages/login-page.vue'

import {
  LOGIN_PAGE
} from './router-names.js'

const routes = [{
  path: '/',
  component: LayoutBase,
  children: [{
    path: '/login',
    name: LOGIN_PAGE,
    component: LoginPage
  }]
}, ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router