import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'lucide-react', 
        '@babel/generator', 
        '@babel/template',
        '@babel/traverse',
        'prop-types'
      ],
    },
  },
})
