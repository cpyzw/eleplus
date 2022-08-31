import path from 'path'
import { defineConfig } from 'vite'
import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import AutoImport from 'unplugin-auto-import/vite'
import WindiCSS from 'vite-plugin-windicss'
// https://vitejs.dev/config/
const plugins: (PluginOption | PluginOption[])[] = [
  vue(),
  Components({
    dirs: ['src/components'],
    extensions: ['vue'],
    dts: 'src/components.d.ts',
    resolvers: [IconsResolver({ componentPrefix: '' })],
  }),
  AutoImport({
    imports: ['vue', 'vue-router'],
    dts: 'src/auto-import.d.ts',
  }),
  Icons(),
  WindiCSS(),
]
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins,
})
