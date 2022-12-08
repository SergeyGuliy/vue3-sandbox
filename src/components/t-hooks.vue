<template>
  <div>
    <p>hooks</p>
  </div>
</template>

<script setup lang="ts">
import {
  onMounted,
  onBeforeMount,
  onActivated,
  onDeactivated,
  onRenderTracked,
  onRenderTriggered,
  onServerPrefetch,
  onUpdated,
  onBeforeUpdate,
} from "vue";

onBeforeMount(() => {
  console.log(`onBeforeMount`);
});
onMounted(() => {
  console.log(`onMounted`);
});

onBeforeUpdate(() => {
  console.log(`onBeforeUpdate`);
});
onUpdated(() => {
  console.log(`onUpdated`);
});

onRenderTracked(() => {
  console.log(`onRenderTracked`);
});
onRenderTriggered(() => {
  console.log(`onRenderTriggered`);
});
onServerPrefetch(() => {
  console.log(`onServerPrefetch`);
});
onServerPrefetch(() => {
  console.log(`onServerPrefetch`);
});

onActivated(() => {
  console.log(`onActivated`);
});
onDeactivated(() => {
  console.log(`onDeactivated`);
});

onMounted(() => {
  console.log(`onBeforeUnmount`);
});
</script>

<style scoped></style>
