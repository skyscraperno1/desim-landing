import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.d    ev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    port: 8080
  },
  base: "/desim-landing/",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
