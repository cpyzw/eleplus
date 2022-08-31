import type { RouteRecordRaw } from 'vue-router'
const defaultRoutes: Array<RouteRecordRaw> = [
  { path: '/', component: () => import('@/view/HelloWorld.vue') },
]
export default defaultRoutes
