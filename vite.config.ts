// eslint-disable-next-line import/order
import basicSSL from '@vitejs/plugin-basic-ssl'
import https from 'node:https'
import path from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  mode: 'production',
  plugins: [basicSSL()],
  server: {
    proxy: {
      '/resources': {
        target: 'https://danzzzz.netlify.app/',
        agent: new https.Agent(),
      },
    },
  },
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
