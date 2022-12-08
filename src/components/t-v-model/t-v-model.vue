<template>
  <div>
    <input type="text" :value="localString" @input="onInput" />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const emits = defineEmits(["update:string"]);

let props = defineProps({
  string: {
    type: String,
    required: false,
    default: "",
  },
});

const localString = computed({
  get() {
    return props.string;
  },
  set(newVal) {
    emits("update:string", newVal);
  },
});

function onInput(e: any): void {
  localString.value = e?.target?.value;
}
</script>

<style scoped></style>
