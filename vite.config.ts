import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env.DRAGGABLE_DEBUG': 'false',
  },
  build: {
    target: 'esnext',
    lib: {
      entry: 'src/app/index.ts',
      formats: ['es'],
      fileName: () => 'argus-frontend.js',
    },
    outDir: 'custom_components/argus/www/react-dist',
    emptyOutDir: true,
    cssCodeSplit: false,
    rollupOptions: { output: { inlineDynamicImports: true } },
  },
});
