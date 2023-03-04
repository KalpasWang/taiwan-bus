import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  base: './',
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: resolve(__dirname, 'index.html'),
  //       fallback: resolve(__dirname, '404.html')
  //     }
  //   }
  // },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false
      }
    }
  },
  test: {
    // globals: true,
    setupFiles: ['./tests/setup.js']
  }
})
