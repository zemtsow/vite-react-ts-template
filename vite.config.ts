import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx']
  },
  define: {
    'process.env': {}
  },
  server: {
    port: 3000,
    open: true
  }
})
