import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // Estrategia de actualización automática (lo mejor para portafolios)
      registerType: 'autoUpdate',
      
      // Archivos estáticos que queremos en caché sí o sí
      includeAssets: ['favicon.png', 'robots.txt', 'images/*.png', 'images/*.webp'],
      
      manifest: {
        name: 'Timmy A. Ocanto Jordan | Frontend Specialist',
        short_name: 'TOJ Portfolio',
        description: 'Frontend Specialist & Creative Technologist crafting immersive digital experiences.',
        theme_color: '#000000', // Tu fondo negro
        background_color: '#000000',
        display: 'standalone', // Esto hace que parezca una app nativa (sin barra de navegador)
        orientation: 'portrait',
        
        // Configuración de iconos (asumiendo que tienes un favicon o logo base)
        icons: [
          {
            src: '/images/favicon.png', // Ajusta si tu icono tiene otro nombre
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/images/favicon.png', // Usamos el mismo para el ejemplo, idealmente sería uno de 512x512
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      
      // Configuración de Workbox (el motor del Service Worker)
      workbox: {
        // Hacemos caché de imágenes, JS, CSS y HTML
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp}'],
        // Aumentamos límite de tamaño para caché (por si alguna librería es grande)
        maximumFileSizeToCacheInBytes: 5000000, 
      }
    })
  ],
  build: {
    chunkSizeWarningLimit: 1000, 
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-framer': ['framer-motion'],
          'vendor-utils': ['lucide-react'],
        },
      },
    },
  },
});