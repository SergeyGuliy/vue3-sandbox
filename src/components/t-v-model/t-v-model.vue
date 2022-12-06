<template>
  <div>
    <input
      type="text"
      :value="localString"
      @input="(e) => (localString = e.target.value)"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const emit = defineEmits(["update:string"]);

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
    emit("update:string", newVal);
  },
});
</script>

<style scoped></style>
