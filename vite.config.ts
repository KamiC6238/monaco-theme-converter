import path from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import libCss from 'vite-plugin-lib-css-injection'

export default defineConfig({
  plugins: [dts(), libCss()],
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
