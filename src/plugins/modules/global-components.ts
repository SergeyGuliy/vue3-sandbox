import type { App } from "vue";

import GInput from "../../components/global-components/g-input.vue";
import GRadio from "../../components/global-components/g-radio.vue";

const componentsToInstall = Object.entries({
  GInput,
  GRadio,
});

export function installGlobalComponents(app: App<Element>): void {
  componentsToInstall.forEach(([componentName, componentObject]) => {
    app.component(componentName, componentObject);
  });
}
