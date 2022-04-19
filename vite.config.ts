import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const dist = path.join(__dirname, '..', 'docs', path.basename(__dirname))

// https://vitejs.dev/config/
export default defineConfig({
  base: '/hello-vite-vue/',
  plugins: [vue()],
  build: {
    outDir: './doc'
  }
})
