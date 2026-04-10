import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Deploy the `dist` folder to your add-on domain docroot (e.g. public_html/apmeconf.com).
// Keep `base` as `/` when that folder is the site root for https://apmeconf.com/
export default defineConfig({
  plugins: [react()],
  base: '/',
})
