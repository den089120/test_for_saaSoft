import { defineStore } from 'pinia'
import {UserState} from "@/stores/typeStore";


export const useUserStore = defineStore( {
  id: 'UserStore',
  state: (): UserState => {
    return {
      users: [
        {
          id: '1',
          MetkaArray: [
            {text: 'XXXX'}
          ],
          TypeString: 'локальная',
          Login: 'ae@mail.ru',
          Password: '22222'
        },
      ],
    }
  },
  actions: {
    deleteUser (id: string): void {
      this.users = this.users.filter((el) => el.id !== id)
    }
  },
})

// export const useUserStore = defineStore('userStore', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }
//
//   return { count, doubleCount, increment }
// })
