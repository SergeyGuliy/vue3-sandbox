<template>
  <button v-if="isUserLoggedIn" @click="logout">logout</button>
  <button v-else @click="login">login</button>
</template>

<script setup lang="ts">
// @ts-nocheck

import { inject } from "vue";
import { loggedInUser } from "@/constants";

const { setUser, isUserLoggedIn, logout } = inject(loggedInUser);

function login() {
  setUser({
    name: "Serhii",
    age: 18,
  });
}
</script>

<style scoped></style>
