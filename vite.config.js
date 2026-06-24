import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: '/katrin-design/',
  plugins: [react(), svgr()],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
