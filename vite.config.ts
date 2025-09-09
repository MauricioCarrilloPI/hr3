// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3030, // Asegúrate de que coincida con tu puerto
    proxy: {
      '/api': {
        target: 'https://api-auth-hr3.vercel.app', // Tu API base
        changeOrigin: true, // Cambia el header 'Origin' para evitar detección
        secure: true, // Para HTTPS
        rewrite: (path) => path.replace(/^\/api/, '/api'), // Opcional: ajusta si necesitas reescribir paths
      },
    },
  },
});