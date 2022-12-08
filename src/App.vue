<script setup lang="ts">
import TSlot from "./components/t-slot.vue";

import Props from "./components/t-props.vue";
import Hooks from "./components/t-hooks.vue";
import VModelWrapper from "./components/t-v-model/t-v-model-wrapper.vue";
import ComputedWrapper from "./components/t-computed/t-computed-wrapper.vue";
import Watch from "./components/t-watch/t-watch-wrapper.vue";
import RefHtml from "./components/t-ref-html.vue";
import RefSharingWrapper from "./components/t-ref-sharing/t-ref-sharing-wrapper.vue";
import { ref, watch } from "vue";

const form = ref({
  name: "",
  isMore18: false,
});

const mapOfComponents = [
  {
    title: "props",
    component: Props,
    currentTab: "Props",
    attrs: { propNumber: 1 },
  },
  {
    title: "hooks",
    component: Hooks,
    currentTab: "Hooks",
  },
  {
    title: "v-model",
    component: VModelWrapper,
    currentTab: "VModelWrapper",
  },
  {
    title: "computed",
    component: ComputedWrapper,
    currentTab: "ComputedWrapper",
    attrs: { propNumber: 5 },
  },
  {
    title: "watch",
    component: Watch,
    currentTab: "Watch",
  },
  {
    title: "ref html binding",
    component: RefHtml,
    currentTab: "RefHtml",
  },
  {
    title: "ref html sharing",
    component: RefSharingWrapper,
    currentTab: "RefSharingWrapper",
  },
];

const activeTab = ref("");

watch(
  () => activeTab.value,
  () => {
    console.clear();
  }
);
</script>

<template>
  <div class="wrapper">
    <pre>{{ form }}</pre>
    <GInput label="Name" placeholder="Enter your name" v-model="form.name" />
    <GRadio label="Is more 18&" v-model="form.isMore18" />

    <TSlot
      v-for="(
        { title, component, attrs, currentTab }, index
      ) in mapOfComponents"
      :key="index"
      :title="title"
      :currentTab="currentTab"
      v-model:activeTab="activeTab"
    >
      <component :is="component" v-bind="attrs" />
    </TSlot>
  </div>
</template>

<style>
@import "assets/app.css";
</style>
