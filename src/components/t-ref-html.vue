<template>
  <div>
    <h1 class="green">ref html</h1>

    <input type="text" ref="input1" />
    <br />
    <input type="password" ref="input2" />

    <ul>
      <li v-for="item in list" ref="itemRefs" :key="item">
        {{ item }}
      </li>
    </ul>

    <GInput ref="GInput" :modelValue="'value'" @vue:mounted="mountedGInput" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const input1 = ref("input1");
const input2 = ref("input2");
const itemRefs = ref("itemRefs");

const list = ref([1, 2, 3, 4, 5]);

onMounted(() => {
  console.log(input1.value);
  console.log(input2.value);
  console.log(itemRefs.value);
});

function mountedGInput() {
  const GInputRef = ref("GInput");
  console.log(GInputRef);
}
</script>

<style scoped></style>
