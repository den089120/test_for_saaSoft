import { defineStore } from 'pinia'
// import { UserState } from "./typeStore"

export interface UserState {
  users: Array<User>;
  addUser: boolean;
}

interface User {
  id: string;
  MetkaArray?: Array<MetkaElement>;
  TypeString: string;
  Login: string;
  Password: string;
}

interface MetkaElement {
  text: string;
}


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
      addUser: false
    }
  },
  actions: {
    deleteUser (id: string): void {
      this.users = this.users.filter((el) => el.id !== id)
    },
    changeAddUser (value: boolean) {
      this.addUser = value
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
