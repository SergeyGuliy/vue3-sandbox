<template>
  <main>
    <pre>{{ form }}</pre>
    <GInput label="Name" placeholder="Enter your name" v-model="form.name" />
    <GRadio label="Is more 18&" v-model="form.isMore18" />
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";

const form = ref({
  name: "",
  isMore18: false,
});
</script>
