<template>
  <div>
    <h1 class="green">v-model</h1>

    <pre>value: {{ string }}</pre>
    <VModel v-model:string="string" />
  </div>
</template>

<script setup lang="ts">
import VModel from "./t-v-model.vue";
import type { interfaceRefString } from "../../../ts/interfaces/ref";
import { ref } from "vue";

const string: interfaceRefString = ref("qwerty");
</script>

<style scoped></style>
