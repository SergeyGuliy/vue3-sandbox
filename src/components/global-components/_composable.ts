import { computed } from "vue";

interface inputComposable {
  props: { modelValue: any };
  emits: Function;
}

export function inputComposable({ props, emits }: inputComposable) {
  const localValue = computed({
    get() {
      return props.modelValue;
    },
    set(newVal) {
      emits("update:modelValue", newVal);
    },
  });
  return {
    localValue,
    emits,
  };
}
