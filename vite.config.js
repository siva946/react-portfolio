import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          bootstrap: ['bootstrap', 'react-bootstrap', 'react-bootstrap-icons'],
          three: ['three', 'vanta']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})
