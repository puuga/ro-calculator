import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@/App.vue";
import router from "@/router";
import FirebasePlugin from "@/plugins/firebase";

import "@/assets/main.css";

const app = createApp(App);

app.use(FirebasePlugin);

app.use(createPinia());
app.use(router);

app.mount("#app");
