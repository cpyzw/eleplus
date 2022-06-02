import type { RouteRecordRaw } from "vue-router";
import HelloWorld from "../view/HelloWorld.vue";
const defaultRoutes: Array<RouteRecordRaw> = [
  { path: "/", component: HelloWorld },
];
export default defaultRoutes;
