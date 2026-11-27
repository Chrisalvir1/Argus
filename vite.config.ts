import { readFileSync } from 'node:fs';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

const INITIAL_JS_LIMIT = 400_000;

function frontendBudget(): Plugin {
  return {
    name: 'argus-initial-js-budget',
    apply: 'build',
    generateBundle(_options, bundle) {
      const pending = ['argus-frontend.js'];
      const visited = new Set<string>();
      const startupFiles = ['argus-bootstrap.js', 'argus-brand-patch.js'];
      let size = startupFiles.reduce(
        (bytes, name) => bytes + readFileSync(new URL(`./custom_components/argus/www/${name}`, import.meta.url)).length,
        0,
      );
      while (pending.length) {
        const filename = pending.pop()!;
        if (visited.has(filename)) continue;
        visited.add(filename);
        const chunk = bundle[filename];
        if (!chunk || chunk.type !== 'chunk') {
          this.error(`Missing initial JavaScript chunk: ${filename}`);
        }
        size += Buffer.byteLength(chunk.code);
        pending.push(...chunk.imports);
      }
      if (size >= INITIAL_JS_LIMIT) {
        this.error(`Initial JavaScript is ${size} bytes across ${visited.size} static chunks. Limit: < ${INITIAL_JS_LIMIT} bytes.`);
      }
      this.info(`Initial JavaScript: ${size} bytes across ${visited.size} static chunks plus the HA bootstrap and brand scripts, before compression.`);
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [react(), frontendBudget()],
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
    rolldownOptions: {
      output: {
        assetFileNames: '[name]-[hash][extname]',
        chunkFileNames: '[name]-[hash].js',
        minify: { compress: true, mangle: true, codegen: { removeWhitespace: true } },
        codeSplitting: { groups: [{ name: 'three', test: /[\/]node_modules[\/]three[\/]/ }] },
      },
    },
  },
});
