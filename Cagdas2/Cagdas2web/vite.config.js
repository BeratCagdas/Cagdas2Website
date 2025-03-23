import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['jwt-decode'],
    esbuildOptions: {
      // Eğer bu hata devam ederse, esbuild'e yardımcı olabiliriz
      loader: {
        '.js': 'jsx',
      },
    },
  },
})
