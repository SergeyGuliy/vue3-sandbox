import type { App } from "vue";
import { computed, ref } from "vue";

import { globalTheme } from "@/constants";

enum themes {
  DARK = "DARK",
  WHITE = "WHITE",
  CUSTOM = "CUSTOM",
}

interface computedTheme {
  value: themes;
}

const theme: computedTheme = ref(themes.DARK);

const computedTheme: computedTheme = computed({
  get() {
    return theme.value;
  },
  set(newTheme: themes) {
    theme.value = newTheme;
  },
});

export function installGlobalProvide(app: App<Element>): void {
  app.provide("message", "hello!");
  app.provide(globalTheme, computedTheme);
}
