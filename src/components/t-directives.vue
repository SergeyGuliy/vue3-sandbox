<template>
  <div>
    <p v-new-html="number"></p>
    <p v-hover="number"></p>
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck

import { ref } from "vue";

const vNewHtml = {
  // called before bound element's attributes
  // or event listeners are applied
  created(el, binding, vnode, prevVnode) {
    console.log(vnode);
    console.warn("created");
  },

  // called right before the element is inserted into the DOM.
  beforeMount(el, binding, vnode, prevVnode) {
    console.warn("beforeMount");
  },

  // called when the bound element's parent component
  // and all its children are mounted.

  mounted: (el, binding, vnode, prevVnode) => {
    console.warn("mounted");
    el.innerHTML = binding.value;
  },

  // called before the parent component is updated
  beforeUpdate(el, binding, vnode, prevVnode) {
    console.warn("beforeUpdate");
    // el.innerHTML = binding.value;
  },

  // called after the parent component and
  // all of its children have updated
  updated(el, binding, vnode, prevVnode) {
    console.warn("updated");
    el.innerHTML = binding.value;
  },

  // called before the parent component is unmounted
  beforeUnmount(el, binding, vnode, prevVnode) {
    console.warn("beforeUnmount");
  },

  // called when the parent component is unmounted
  unmounted(el, binding, vnode, prevVnode) {
    console.warn("unmounted");
  },
};

const number = ref(0);

setInterval(() => {
  number.value = number.value + 1;
}, 3000);
</script>

<style scoped></style>
