<template>
  <div>
    <h1 class="green">watch</h1>

    <Watch :propNumber="propNumber" />
  </div>
</template>

<script setup lang="ts">
import Watch from "./t-watch.vue";
import { ref } from "vue";

const propNumber = ref(1);

setInterval(() => {
  propNumber.value = propNumber.value + 1;
}, 5000);
</script>

<style scoped></style>
