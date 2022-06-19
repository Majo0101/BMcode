import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import * as path from "path";

export default defineConfig({
  plugins: [
      vue(),
      vueI18n({
          runtimeOnly: false,
          include: path.resolve(__dirname, './path/to/src/locales/**')
      })],
  base: '',
})
