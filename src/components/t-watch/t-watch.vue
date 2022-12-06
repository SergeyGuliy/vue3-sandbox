<template>
  <div>
    <p>propNumber: {{ propNumber }}</p>
    <p>dataNumber: {{ dataNumber }}</p>
    <p>computedNumber: {{ computedNumber }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";

let prop = defineProps({
  propNumber: {
    type: Number,
    required: true,
  },
});

let dataNumber = ref(2);

let computedNumber = computed(() => dataNumber.value * 2);

watch(
  () => prop.propNumber,
  (v) => {
    console.log(`new 'propNumber' = ${v}`);
  }
);

watch(dataNumber, (v) => {
  console.log(`new 'dataNumber' = ${v}`);
});

watch(computedNumber, (v) => {
  console.log(`new 'computedNumber' = ${v}`);
});

setInterval(() => {
  dataNumber.value = dataNumber.value + 2;
}, 5000);
</script>

<style scoped></style>
