import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // The dashboard is loaded directly by a browser, not by Node. Some CommonJS
  // dependencies retain process.env checks unless these values are replaced.
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env.DRAGGABLE_DEBUG': 'false',
  },
  build: {
    lib: {
      entry: 'src/features/dashboard/index.tsx',
      formats: ['es'],
      fileName: () => 'argus-dashboard-react.js',
    },
    outDir: 'custom_components/argus/www/react-dist',
    emptyOutDir: true,
    cssCodeSplit: false,
    rollupOptions: { output: { inlineDynamicImports: true } },
  },
});
