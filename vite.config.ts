// import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { vitepressDemo } from 'vite-plugin-vitepress-demo'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vitepressDemo({
      // 检测根目录下的所有的 demos 下的所有的 vue 文件
      // 深层嵌套的是不需要处理的
      glob: ['**/demos/*.vue'],
    }),
  ],
})
