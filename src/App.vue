<script setup lang="ts">
import VModelWrapper from "./components/t-v-model/t-v-model-wrapper.vue";
import ComputedWrapper from "./components/t-computed/t-computed-wrapper.vue";
import Props from "./components/t-props.vue";
import Watch from "./components/t-watch/t-watch-wrapper.vue";
</script>

<template>
  <div class="wrapper">
    <Props :propNumber="1" />
    <VModelWrapper />
    <ComputedWrapper :propNumber="5" />
    <Watch />
  </div>
</template>

<style>
@import "assets/app.css";
</style>
