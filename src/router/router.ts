import type { RouteRecordRaw } from 'vue-router'
const defaultRoutes: Array<RouteRecordRaw> = [
  { path: '/login', component: () => import('@/view/login/index.vue') },
]
export default defaultRoutes
