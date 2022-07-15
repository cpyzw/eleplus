/// <reference types="vite/client" />

declare module "*.vue" {
  // Vue 3
  import type { defineComponent } from "vue";
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}
