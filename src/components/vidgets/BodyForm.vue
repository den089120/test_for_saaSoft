<script setup lang="ts">
import IconDelete from "@/components/icons/IconDelete.vue"
import IconEye from "@/components/icons/IconEye.vue";
import {MetkaElement, useUserStore} from "@/stores/userStore";
import {ref} from "vue";
import IconPlus from "@/components/icons/IconPlus.vue";

const userStore = useUserStore()

const metka = ref<string>('')
const typeString = ref<string>('')
const login = ref<string>('')
const password = ref<string>('')

const submitUser = function (): void {
  userStore.changeAddUser(false)
}
const helpFunc = function (arr: Array<MetkaElement>): string {
  const str = []
  arr.forEach((el) => {
    str.push(el.text)
  })
  return str.join(' ; ')
}

</script>

<template>
  <div>
    <div v-for="el in userStore.users" :key="el.id" class="row align-items-start mb-2" >
      <input disabled :value="helpFunc(el.MetkaArray)" type="text" class="col form-control me-2">

      <select disabled class="form-select col form-control me-2">
        <option v-if="el.TypeString === 'Локальная'">Локальная</option>
        <option v-else>LDAP</option>
      </select>

      <input disabled :value="el.Login" type="text" class="form-control me-2" :class="[{ 'myClass' : el.TypeString === 'Локальная' }, {'col' : el.TypeString === 'LDAP' }]">

      <div v-if="el.TypeString === 'LDAP'" class="col me-2 position-relative">
        <input :value="el.Password" disabled type="password" class="form-control" placeholder="Пароль">
        <button class="btn position-absolute top-0 end-0 z-2" type="button" id="button2">
          <IconEye/>
        </button>
      </div>

      <button @click="userStore.deleteUser(el.id)" type="button" class="col-1 btn btn-dark me-2"><IconDelete/></button>
    </div>

    <div v-if="userStore.addUser" class="row align-items-start mb-2" >
      <input v-model="metka" type="text" class="col form-control me-2" id="InputMetka">

      <select v-model="typeString" class="form-select col form-control me-2" id="InputTypeString">
        <option value="Локальная" selected>Локальная</option>
        <option value="LDAP">LDAP</option>
      </select>

      <input v-model="login" type="text" class="col form-control me-2" id="InputLogin">

      <div class="col me-2 position-relative">
        <input v-model="password" type="password" class="form-control" placeholder="Пароль" id="InputPassword">
        <button class="btn position-absolute top-0 end-0 z-2" type="button" id="button2">
          <IconEye/>
        </button>
      </div>

      <button @click="submitUser" type="button" class="col-1 btn btn-dark me-2"><IconPlus/></button>
    </div>
  </div>
</template>

<style scoped>
.myClass {
  width: 44%;
}
</style>