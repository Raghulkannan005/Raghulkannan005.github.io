import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    port: 5173,
    host: '0.0.0.0', // Bind to all interfaces
    open: true, // Don't auto-open browser
    hmr: true, // Enable hot module replacement
    watch: {
      usePolling: true // Better network watching
    }
  },
  base: './',
});
