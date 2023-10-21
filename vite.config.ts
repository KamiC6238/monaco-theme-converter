import basicSSL from '@vitejs/plugin-basic-ssl'

// eslint-disable-next-line import/order
import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  mode: 'production',
  plugins: [basicSSL()],
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
