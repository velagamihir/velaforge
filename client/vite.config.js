import babel from '@rolldown/plugin-babel';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
//importing tailwindcss plugin
import tailwindcss from '@tailwindcss/vite';
// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  preview: {
    allowedHosts: true,
  },
  build: {
    cssCodeSplit: true,
  },
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
});
