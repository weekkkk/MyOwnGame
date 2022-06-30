import {
  createRouter,
  createWebHistory
} from 'vue-router'
import LayoutBase from '../layouts/layout-base.vue'

import AuthPage from '../pages/auth-page.vue'

import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE
} from './router-constants.js'

const routes = [{
  path: '/',
  component: LayoutBase,
  children: [{
      path: LOGIN_ROUTE,
      component: AuthPage
    },
    {
      path: REGISTRATION_ROUTE,
      component: AuthPage
    },
  ]
}, ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router