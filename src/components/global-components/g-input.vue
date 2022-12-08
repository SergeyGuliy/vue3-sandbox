<template>
  <label>
    <div v-if="label">
      {{ label }}
    </div>
    <input :type="type" :placeholder="placeholder" v-model="localValue" />
  </label>
</template>
<script setup lang="ts">
import { inputComposable } from "@/components/global-components/_composable";

interface GInputProp {
  label?: string;
  placeholder?: string;
  type?: "text" | "password";
  value: string;
}

const props = withDefaults(defineProps<GInputProp>(), {
  label: "",
  placeholder: "",
  type: "text",
});
const emits = defineEmits(["update:value"]);

const { localValue } = inputComposable({ props, emits });
</script>

<style scoped></style>
