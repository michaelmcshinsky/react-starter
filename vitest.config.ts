import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@features': resolve(__dirname, 'src/features'),
      '@shared': resolve(__dirname, 'src/shared'),
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    globals: true,
    css: false,
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/**/*.stories.{ts,tsx}', 'src/test/**'],
      thresholds: {
        // Measured baseline (vitest run --coverage): stmts 35%, branch 25%,
        // funcs 31.25%, lines 40%. Thresholds sit ~2-3 points below to
        // enforce no-regression rather than aspirational targets.
        statements: 33,
        branches: 22,
        functions: 28,
        lines: 37,
      },
    },
  },
});
