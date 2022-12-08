<script setup lang="ts">
import VModelWrapper from "./components/t-v-model/t-v-model-wrapper.vue";
import ComputedWrapper from "./components/t-computed/t-computed-wrapper.vue";
import Props from "./components/t-props.vue";
import Watch from "./components/t-watch/t-watch-wrapper.vue";
import { ref } from "vue";

const form = ref({
  name: "",
  isMore18: false,
});
</script>

<template>
  <div class="wrapper">
    <pre>{{ form }}</pre>
    <GInput
      label="Name"
      placeholder="Enter your name"
      v-model:value="form.name"
    />
    <GRadio label="Is more 18&" v-model:value="form.isMore18" />
    <Props :propNumber="1" />
    <VModelWrapper />
    <ComputedWrapper :propNumber="5" />
    <Watch />
  </div>
</template>

<style>
@import "assets/app.css";
</style>
