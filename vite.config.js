import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/video-caption-app/', 
  build: {
    outDir: 'dist', // Vite's default output directory
  },
  
})
