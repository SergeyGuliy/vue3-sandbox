import type { App } from "vue";

import { router } from "../..//router";

export function installRouter(app: App<Element>): void {
  app.use(router);
}
