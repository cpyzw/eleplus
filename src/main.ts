import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import router from "./router/index";
import pinia from "./store/index";

const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(ElementPlus, {
  locale: zhCn,
});
app.mount("#app");
