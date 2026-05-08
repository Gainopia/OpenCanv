import { defineConfig } from 'vite'
import vue from '@vue/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/OpenCanv/',
  plugins: [vue()],
})
