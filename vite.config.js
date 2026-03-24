import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    // Inline assets smaller than 4kb as base64
    assetsInlineLimit: 4096,
    // CSS code splitting
    cssCodeSplit: true,
    // Minify CSS
    cssMinify: true,
    // Manual chunk splitting for vendor libs
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-router-dom') || id.includes('node_modules/@remix-run') || id.includes('node_modules/react-router')) {
            return 'vendor-router'
          }
          if (id.includes('node_modules/react-dom')) {
            return 'vendor-react-dom'
          }
          if (id.includes('node_modules/react')) {
            return 'vendor-react'
          }
        },
      },
    },
    // Target modern browsers for smaller output
    target: 'es2020',
  },
})
