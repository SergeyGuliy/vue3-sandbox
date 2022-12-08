<template>
  <label>
    <div v-if="label">
      {{ label }}
    </div>
    <input type="checkbox" v-model="localValue" />
  </label>
</template>

<script setup lang="ts">
import { inputComposable } from "@/components/global-components/_composable";

interface GInputProp {
  label?: string;
  modelValue: boolean;
}

const props = withDefaults(defineProps<GInputProp>(), {
  label: "",
});
const emits = defineEmits(["update:modelValue"]);

const { localValue } = inputComposable({ props, emits });
</script>

<style scoped></style>
