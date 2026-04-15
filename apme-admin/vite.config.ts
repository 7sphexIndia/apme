import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Separate admin SPA base path: /administrator/
export default defineConfig({
  plugins: [react()],
  base: '/administrator/',
  server: {
    proxy: {
      '/apme-api': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apme-api/, ''),
      },
    },
  },
  preview: {
    proxy: {
      '/apme-api': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apme-api/, ''),
      },
    },
  },
})
