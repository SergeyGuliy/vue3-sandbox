<template>
  <div></div>
</template>

<script setup lang="ts">
import { getCurrentInstance, ref } from "vue";

const instance: any = getCurrentInstance();
console.warn("parent");
console.log(instance.parent);
console.warn("root");
console.log(instance.root);

const innerValue = ref("inner value");

defineExpose({
  innerValue,
});
</script>

<style scoped></style>
