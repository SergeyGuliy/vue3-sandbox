<template>
  <div class="composition" ref="composition">
    <button
      class="composition__button composition__disable"
      @click="unMountEventListener"
    >
      disable
    </button>
    <div class="composition__inner">
      <pre>Move mouse inside</pre>
      <pre>x = {{ x }}</pre>
      <pre>x = {{ y }}</pre>
    </div>
    <button
      class="composition__button composition__enable"
      @click="mountEventListener"
    >
      enable
    </button>
  </div>
</template>

<script setup lang="ts">
import { useMouse } from "@/composition/useMouse";

const { x, y, mountEventListener, unMountEventListener } =
  useMouse(".composition");
</script>

<style scoped>
.composition {
  background-color: lightblue;

  width: 500px;
  height: 200px;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid red;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
}
.composition__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.composition__button {
  margin: 0 10px;
  height: 30px;
  width: 100px;
  outline: none;
  border: none;
  cursor: pointer;
}

pre {
  color: black;
}

.composition__disable {
  background-color: red;
}
.composition__enable {
  background-color: green;
}
</style>
