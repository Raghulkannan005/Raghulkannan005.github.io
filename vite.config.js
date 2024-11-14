import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  resolve: {
    extensions: ['.js', '.jsx'] // Add this line
  },
  server: {
    // Add proper MIME type handling
    headers: {
      'Content-Type': 'text/javascript'
    }
  }
});