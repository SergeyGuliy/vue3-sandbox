<template>
  <div>
    <h1 class="green">props</h1>

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
