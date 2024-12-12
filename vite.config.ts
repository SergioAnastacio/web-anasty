import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/web-anasty/', // Reemplaza <REPO_NAME> con el nombre de tu repositorio
  plugins: [vue()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  }
})