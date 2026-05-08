import { defineConfig } from 'vite'
import vue from '@vue/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/OpenCanv/', // تأكدي من إضافة هذا السطر بدقة
  plugins: [vue()],
  // ... قد تكون هناك إعدادات أخرى بالأسفل، اتركيها كما هي
})

