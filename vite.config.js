import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/space/',
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        destination: resolve(__dirname, 'destination.html'),
        crew: resolve(__dirname, 'crew.html'),
        technology: resolve(__dirname, 'technology.html'),
      },
    },
  },
})

