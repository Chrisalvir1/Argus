# TypeScript 7 migration metrics

- Baseline compiler: `Version 5.9.2`
- Baseline type-check: `1650 ms`
- Migrated compiler: `Version 7.0.2`
- TypeScript 7 type-check: `407 ms`
- Production bundle: `926927 bytes`

The comparison ran on the same GitHub Actions runner. The dashboard completed strict type checking, Vitest tests, the Vite production build, the Python React-layout contract, and the production dependency audit with TypeScript 7.0.2.

The measured type-check improved by approximately 75.3% (about 4.05 times faster). The production bundle size remained unchanged because TypeScript is a build-time compiler and is not shipped to Home Assistant clients.

These measurements describe this small Argus dashboard project and are not a universal TypeScript benchmark.
