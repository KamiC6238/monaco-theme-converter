import commonjs from '@rollup/plugin-commonjs'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [commonjs()],
  optimizeDeps: {
    exclude: ['tiny-monaco']
  }
})