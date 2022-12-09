<template>
  <main>
    <TSlot
      v-for="(
        { title, component, attrs, currentTab }, index
      ) in mapOfComponents"
      :key="index"
      :title="title"
      :currentTab="currentTab"
      :activeTab="activeTab"
      @update:activeTab="updateActiveTab"
    >
      <component :is="component" v-bind="attrs" />
    </TSlot>
  </main>
</template>

<script setup lang="ts">
import TSlot from "@/components/t-slot.vue";

import Props from "@/components/t-props.vue";
import Hooks from "@/components/t-hooks.vue";
import VModelWrapper from "@/components/t-v-model/t-v-model-wrapper.vue";
import ComputedWrapper from "@/components/t-computed/t-computed-wrapper.vue";
import Watch from "@/components/t-watch/t-watch-wrapper.vue";
import RefHtml from "@/components/t-ref-html.vue";
import RefSharingWrapper from "@/components/t-ref-sharing/t-ref-sharing-wrapper.vue";
import AsyncComponent from "@/components/t-async-component/t-async-component-wrapper.vue";
import { ref } from "vue";

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
  {
    title: "async component",
    component: AsyncComponent,
    currentTab: "AsyncComponent",
  },
];

const activeTab = ref("");

function updateActiveTab(newActiveTab: string): void {
  console.clear();
  setTimeout(() => {
    activeTab.value = newActiveTab;
  }, 100);
}
</script>
