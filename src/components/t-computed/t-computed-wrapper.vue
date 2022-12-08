<template>
  <div>
    <p>propNumber: {{ propNumber }}</p>
    <p>computedProps: {{ computedProps }}</p>

    <p>data: {{ data }}</p>
    <p>computedData: {{ computedData }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

let props = defineProps({
  propNumber: {
    type: Number,
    required: true,
  },
});
const data = ref(10);

const computedProps = computed(() => multiplyByTwo(props.propNumber));
const computedData = computed(() => multiplyByTwo(data.value));

function multiplyByTwo(val: number): number {
  return val * 2;
}
</script>

<style scoped></style>
