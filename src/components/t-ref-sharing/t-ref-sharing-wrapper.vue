<template>
  <div>
    <h1 class="green">ref sharing</h1>

    <RefSharingInner fer="RefSharingInnerRef" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import RefSharingInner from "./t-ref-sharing-inner.vue";

const outerValue = ref("outer value");

const RefSharingInnerRef = ref("RefSharingInnerRef");

console.warn('RefSharingInnerRef.value');
console.log(RefSharingInnerRef.value);

defineExpose({
  outerValue,
});
</script>

<style scoped></style>
