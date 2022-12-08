<template>
  <div>
    <h1 class="green" @click="clickOnTab">{{ title }}</h1>

    <template v-if="isCurrentTabActive">
      <KeepAlive v-if="keepAlive">
        <slot />
      </KeepAlive>

      <slot v-else />
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const emits = defineEmits(["update:activeTab"]);

const props = withDefaults(
  defineProps<{
    title: string;
    currentTab: string;
    activeTab: string;
    keepAlive?: boolean;
  }>(),
  {
    title: "",
    keepAlive: false,
  }
);

const isCurrentTabActive = computed(() => props.currentTab === props.activeTab);

function clickOnTab() {
  console.warn(isCurrentTabActive.value);
  console.log("currentTab = " + props.currentTab);
  console.log("activeTab = " + props.activeTab);
  const keyToOpen = isCurrentTabActive.value ? "" : props.currentTab;

  emits("update:activeTab", keyToOpen);
}
</script>

<style scoped></style>
