<template>
  <label for="">
    <div v-if="label">
      {{ label }}
    </div>
    <input :type="type" />
  </label>
</template>
<script setup lang="ts">
import { supportedTypes } from "@/components/global-components/_constants";

const props = defineProps({
  type: {
    type: String,
    default: "text",
    validator: (v: string): boolean => {
      return supportedTypes.includes(v);
    },
  },
  label: {
    type: String,
    default: "",
  },
});
</script>

<style scoped></style>
