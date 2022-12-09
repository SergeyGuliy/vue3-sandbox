<script setup lang="ts">
import { routes } from "@/router";
import { ref } from "vue";

const routeNames = ref(routes.map(({ name }) => name))

</script>

<template>
  <header>
    <nav>
      <ul>
        <li v-for="(routerName) in routeNames" :key="routerName">
          <router-link :to="{ name: routerName }">{{ routerName }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<style>
@import "assets/app.css";
</style>
