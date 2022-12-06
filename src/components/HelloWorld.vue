<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";

let props = defineProps({
  msg: {
    type: Number,
    required: true,
  },
});

const comp = computed((): number => props.msg * 2);

const localMsg = ref(props.msg * 3);
watch(
  () => props.msg,
  (v) => {
    localMsg.value = v * 3;
  }
);

onMounted(() => {
  console.log("onMounted");
});
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h1 class="green">{{ comp }}</h1>
    <h1 class="green">{{ localMsg }}</h1>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
