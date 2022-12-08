import type { App } from "vue";

import { installGlobalComponents } from "@/plugins/modules/global-components";
import { installRouter } from "@/plugins/modules/router";
import { installGlobalStyles } from "@/plugins/modules/global-styles";
import { installPinia } from "@/plugins/modules/pinia";

export function installPlugins(app: App<Element>): void {
  installGlobalComponents(app);
  installRouter(app);
  installPinia(app);
  installGlobalStyles();
}
