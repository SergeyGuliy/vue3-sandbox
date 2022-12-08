<script setup lang="ts">
import { inputComposable } from "@/components/global-components/_composable";

interface GInputProp {
  label?: string;
  placeholder?: string;
  type?: "text" | "password";
  modelValue: string;
}

const props = withDefaults(defineProps<GInputProp>(), {
  label: "",
  placeholder: "",
  type: "text",
});
const emits = defineEmits(["update:modelValue"]);

const { localValue } = inputComposable({ props, emits });
</script>

<template>
  <label>
    <div v-if="label">
      {{ label }}
    </div>
    <input :type="type" :placeholder="placeholder" v-model="localValue" />
  </label>
</template>

<style scoped></style>
