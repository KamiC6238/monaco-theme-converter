import path from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts()],
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
    },
    rollupOptions: {
      external: ['monaco-editor'],
      output: [
        {
          dir: 'dist/esm',
          format: 'es',
          entryFileNames: 'index.js',
        },
        {
          dir: 'dist/cjs',
          format: 'cjs',
          entryFileNames: 'index.cjs',
        },
      ],
    },
  },
})
