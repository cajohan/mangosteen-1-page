import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/mangosteen-1-page/dist/', //build path github
  plugins: [
    vue(),
    vueJsx({
      transformOn: true,
      mergeProps: true
    })
  ]
})
