import react from '@vitejs/plugin-react';
import { defineConfig as defineVitestConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineVitestConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // Define o ambiente de teste
  },
});
