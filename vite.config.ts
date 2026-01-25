import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    // Generate sourcemaps for debugging
    sourcemap: true,
    // Chunk size warning limit
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        // Code splitting configuration
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
  },
  // Handle client-side routing in dev
  server: {
    port: 5173,
    strictPort: false,
  },
  // Handle client-side routing in preview
  preview: {
    port: 4173,
  },
})
