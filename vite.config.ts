import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  mode: 'production',
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '/src',
      },
    ],
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/main.ts'),
      formats: ['cjs', 'es'],
    },
  },
})
