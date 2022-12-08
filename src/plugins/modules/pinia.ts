import { createPinia } from "pinia";
import type { App } from "vue";

const pinia = createPinia();

export function installPinia(app: App<Element>): void {
  app.use(pinia);
}
