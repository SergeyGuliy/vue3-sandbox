<template>
  <div>
    <h1 class="green">watch</h1>
  </div>
</template>

<script setup lang="ts">
import { watch } from "vue";

let props = defineProps({
  propNumber: {
    type: Number,
    required: true,
  },
});

watch(
  () => props.propNumber,
  (v) => {
    console.log(`new 'propNumber' = ${v}`);
  }
);
</script>

<style scoped></style>
