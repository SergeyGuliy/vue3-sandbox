<template>
  <div>
    <pre>value: {{ string }}</pre>
    <VModel v-model:string="string" />
  </div>
</template>

<script setup lang="ts">
import VModel from "./t-v-model.vue";
import { ref } from "vue";

const string = ref("qwerty");
</script>

<style scoped></style>
