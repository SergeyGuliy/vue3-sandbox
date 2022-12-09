<template>
  <AsyncComponentSuccess />
  <AsyncComponentError />
  <AsyncComponentImport />
</template>

<script setup lang="ts">
// @ts-nocheck
import { defineAsyncComponent } from "vue";
import { h } from "vue";

const AsyncComponentSuccess = defineAsyncComponent({
  // the loader function
  loader: () =>
    new Promise((res) => {
      setTimeout(() => {
        res(h("div", ["async component LOADED"]));
      }, 2500);
    }),

  // A component to use while the async component is loading
  loadingComponent: h("div", ["async component LOADING"]),
  // Delay before showing the loading component. Default: 200ms.
  delay: 0,

  // A component to use if the load fails
  errorComponent: h("div", ["async component TIMEOUT ERROR"]),
  // The error component will be displayed if a timeout is
  // provided and exceeded. Default: Infinity.
  timeout: 3000,
});

const AsyncComponentError = defineAsyncComponent({
  // the loader function
  loader: () =>
    new Promise((res) => {
      setTimeout(() => {
        return res(h("div", ["async component LOADED"]));
      }, 99999);
    }),

  // A component to use while the async component is loading
  loadingComponent: h("div", ["async component LOADING"]),
  // Delay before showing the loading component. Default: 200ms.
  delay: 0,

  // A component to use if the load fails
  errorComponent: h("div", ["async component TIMEOUT ERROR"]),
  // The error component will be displayed if a timeout is
  // provided and exceeded. Default: Infinity.
  timeout: 3000,
});

const AsyncComponentImport = defineAsyncComponent({
  // the loader function
  loader: () =>
    new Promise((res) => {
      setTimeout(() => {
        return res(import("./t-async-component.vue"));
      }, 2000);
    }),

  // A component to use while the async component is loading
  loadingComponent: h("div", ["async component LOADING"]),
  // Delay before showing the loading component. Default: 200ms.
  delay: 0,

  // A component to use if the load fails
  errorComponent: h("div", ["async component TIMEOUT ERROR"]),
  // The error component will be displayed if a timeout is
  // provided and exceeded. Default: Infinity.
  timeout: 3000,
});
</script>

<style scoped></style>
