<template>
  <div>
    <p>propNumber: {{ propNumber }}</p>
    <p>dataNumber: {{ dataNumber }}</p>
    <p>computedNumber: {{ computedNumber }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, watchEffect } from "vue";

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
    console.log(`watch 'propNumber' = ${v}`);
  }
);

watch(dataNumber, (v) => {
  console.log(`watch 'dataNumber' = ${v}`);
});

watch(computedNumber, (v) => {
  console.log(`watch 'computedNumber' = ${v}`);
});

watchEffect(() => {
  console.warn(`watchEffect 'propNumber' = ${prop.propNumber}`);
  console.warn(`watchEffect 'dataNumber' = ${dataNumber.value}`);
  console.warn(`watchEffect 'computedNumber' = ${computedNumber.value}`);
});

setInterval(() => {
  dataNumber.value = dataNumber.value + 2;
}, 5000);
</script>

<style scoped></style>
