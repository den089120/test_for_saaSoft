<script setup lang="ts">

import InfoString from "@/components/vidgets/InfoString.vue";
import IconPlus from "@/components/icons/IconPlus.vue";
import HeaderForm from "@/components/vidgets/HeaderForm.vue";
import BodyForm from "@/components/vidgets/BodyForm.vue";
import {useUserStore} from "@/stores/userStore";

const userStore = useUserStore()

</script>


<template>
  <div class="container-fluid">
    <div class="row align-items-center m-3">
      <p class="col-2 h6 m-0 p-2">Учетные записи</p>
      <button @click="userStore.changeAddUser(true)" type="button" class="col-1 btn btn-light"><IconPlus/></button>
    </div>
    <InfoString></InfoString>
    <HeaderForm/>
    <BodyForm/>
  </div>

</template>

<style scoped>

</style>