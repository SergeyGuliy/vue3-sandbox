<template>
  <div>
    <p>{{ propNumber }}</p>
    <p>{{ props.propNumber }}</p>
  </div>
</template>

<script setup lang="ts">
let props = defineProps({
  propNumber: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped></style>
