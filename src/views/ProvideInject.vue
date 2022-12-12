<template>
  <div>
    <pre>{{ theme }}</pre>

    <pre>user name: {{ user.name }}</pre>
    <pre>user age : {{ user.age }}</pre>

    <Inject />
  </div>
</template>

<script setup lang="ts">
import { computed, inject, provide, readonly, ref } from "vue";
import { globalTheme, loggedInUser } from "@/constants";

import Inject from "../components/t-inject.vue";

const theme = inject(globalTheme);

setTimeout(() => {
  // @ts-ignore
  theme.value = "WHITE";
}, 3000);

const user = ref({
  name: "",
  age: 0,
});

const isUserLoggedIn = computed(() => !!user?.value?.name);

function setUser(newUser: any) {
  user.value = newUser;
}

function logout() {
  user.value = {
    name: "",
    age: 0,
  };
}

provide(loggedInUser, {
  user: readonly(user),
  isUserLoggedIn,
  setUser,
  logout,
});
</script>

<style scoped></style>
