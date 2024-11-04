import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist' // or 'docs' if you're deploying on GitHub Pages directly
  }
});
