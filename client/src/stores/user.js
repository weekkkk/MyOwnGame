import {
  defineStore
} from 'pinia'
import {
  ref
} from 'vue'

export const useUserStore = defineStore('counter', () => {
  const isAuth = ref(false)
  const setIsAuth = (bool) => {
    isAuth.value = bool
  }

  const user = ref()
  const setUser = (user) => {
    user.value = user
  }

  return {
    isAuth,
    setIsAuth,
    user,
    setUser
  }
})