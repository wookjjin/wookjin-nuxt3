import { acceptHMRUpdate, defineStore } from 'pinia'

interface IUser {
  userId: '',
  userName: '',
}

export const useUserStore = defineStore('user', () => {
  const user = ref<IUser | undefined>()

  const setUser = (newUser: IUser) => {
    user.value = newUser
  }
  return { user, setUser }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
