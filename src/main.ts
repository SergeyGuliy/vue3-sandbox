import { createApp } from "vue";

import App from "./App.vue";
const app = createApp(App);

import { installPlugins } from "@/plugins";
installPlugins(app);

app.mixin({});

app.mount("#app");
