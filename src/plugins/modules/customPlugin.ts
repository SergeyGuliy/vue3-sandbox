import type { App } from "vue";

const customPlugin = {
  install(app: App<Element>, options: any) {
    console.log(app);
    console.log(options);

    // app.mixin();
    // app.component();
    // app.directive();
    // app.filter();
    // app.provide();
  },
};

export function installCustomPlugin(app: App<Element>): void {
  app.use(customPlugin, {});
}
