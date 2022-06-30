import {
  createRouter,
  createWebHistory
} from 'vue-router'
import LayoutBase from '../layouts/layout-base.vue'
import LayoutPage from '../layouts/layout-page.vue'

import AuthPage from '../pages/auth-page.vue'
import RoomsPage from '../pages/rooms-page.vue'

import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  ROOMS_ROUTE
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
  },
  {
    path: '/',
    component: LayoutPage,
    children: [{
      path: ROOMS_ROUTE,
      component: RoomsPage
    }, ]
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router