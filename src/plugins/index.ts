import type { App } from "vue";

import { installGlobalComponents } from "@/plugins/modules/global-components";
import { installRouter } from "@/plugins/modules/router";
import { installGlobalStyles } from "@/plugins/modules/global-styles";
import { installPinia } from "@/plugins/modules/pinia";
import { installDirectives } from "@/plugins/modules/directives";
import { installCustomPlugin } from "@/plugins/modules/customPlugin";
import { installGlobalProvide } from "@/plugins/modules/global-provide";

export function installPlugins(app: App<Element>): void {
  installCustomPlugin(app);
  installGlobalComponents(app);
  installRouter(app);
  installPinia(app);
  installDirectives(app);
  installGlobalProvide(app);
  installGlobalStyles();
}
