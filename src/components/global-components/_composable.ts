import { computed } from "vue";

interface inputComposable {
  props: { value: any };
  emits: Function;
}

export function inputComposable({ props, emits }: inputComposable) {
  const localValue = computed({
    get() {
      return props.value;
    },
    set(newVal) {
      emits("update:value", newVal);
    },
  });
  return {
    localValue,
    emits,
  };
}
