<script setup lang="ts">
import IconDelete from "@/components/icons/IconDelete.vue"
import IconEye from "@/components/icons/IconEye.vue";
import {useUserStore} from "@/stores/userStore";
import {ref} from "vue";

const userStore = useUserStore()

const metka = ref<string>('')
const typeString = ref<string>('')
const login = ref<string>('')
const password = ref<string>('')
</script>

<template>
  <div>
    <div v-for="el in userStore.users" class="row align-items-start" >
      <input v-model="metka" type="text" class="col form-control me-2" id="InputMetka">

      <select v-model="typeString" class="form-select col form-control me-2" id="InputTypeString">
        <option value="Локальная" selected>Локальная</option>
        <option value="LDAP">LDAP</option>
      </select>

      <input v-model="login" type="text" class="col form-control me-2" id="InputLogin">

      <div class="col me-2 position-relative">
        <input v-model="password" type="password" class="form-control" placeholder="Пароль" id="InputPassword">
        <button class="btn position-absolute top-0 end-0 z-2" type="button" id="button2" @click="userStore.deleteUser('1')">
          <IconEye/>
        </button>
      </div>

      <button type="button" class="col-1 btn btn-dark me-2"><IconDelete/></button>
    </div>
  </div>
</template>

<style scoped>

</style>