import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


  // Replace <repository-name> with your GitHub repo name


export default defineConfig({
  base: '/', //while uploading to git replace '/' with '/Raghulkannan005.github.io/'
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // No manualChunks for now
      },
    },
  },
  server: {
    port: 5173,
    host: '0.0.0.0',
    open: true,
    hmr: true,
    watch: {
      usePolling: true,
    },
  },
  define: {
    'process.env': process.env
  }
});
