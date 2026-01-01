import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Aumentamos el límite de aviso a 1000kb para que no moleste por cosas pequeñas
    chunkSizeWarningLimit: 1000, 
    rollupOptions: {
      output: {
        manualChunks: {
          // Separamos las librerías grandes en sus propios archivos
          'vendor-react': ['react', 'react-dom'],
          'vendor-framer': ['framer-motion'],
          'vendor-utils': ['lucide-react'],
          // Si usas tsparticles, descomenta la siguiente línea:
          // 'vendor-particles': ['tsparticles-engine', 'react-tsparticles'], 
        },
      },
    },
  },
});