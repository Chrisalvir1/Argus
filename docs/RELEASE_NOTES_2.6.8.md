# Argus Home Hub v2.6.8 — HA 2026.11 Compatibility & Node 26 LTS Modernization

**Release date:** November 5, 2026  
**Previous release:** [v2.5.7](https://github.com/Chrisalvir1/Argus/releases/tag/v2.5.7)

This release upgrades the runtime environment and all dependencies to align with Home Assistant 2026.11, modernizing the toolchain with Node.js 26 LTS and ensuring zero-vulnerability, high-performance operation.

## Fixes & Improvements

- **Home Assistant 2026.11 & Python 3.14 Baseline:** Migrated core runtime configuration to Python 3.14 (Python `>=3.14,<3.16`), fully complying with Home Assistant ADR-0020.
- **Node.js 26.13 LTS Build Environment:** Advanced the frontend toolchain and GitHub Actions CI pipelines to Node.js 26 LTS.
- **Modernized Dependencies:** Upgraded all frontend libraries:
  - `nanoid` to `6.0.2`
  - `react` and `react-dom` to `19.3.1`
  - `react-grid-layout` to `2.3.0`
  - `react-resizable` to `4.0.2`
  - `@vitejs/plugin-react` to `6.2.1`
  - `vite` to `8.3.6`
  - `vitest` to `5.1.0`
  - `typescript` verified on `7.0.2`
- **Production Frontend Bundle:** Recompiled and cache-busted `argus-frontend.js` for version `2.6.8`.
- **Zero Vulnerabilities:** Passed complete dependency security audit with 0 high- or critical-severity issues.

## Actualización

- **Compatibilidad con Home Assistant 2026.11 y Python 3.14:** Actualización del entorno base a Python 3.14 (`>=3.14,<3.16`) conforme a ADR-0020.
- **Pipeline de Node.js 26.13 LTS:** Actualización de los flujos de validación y compilación a Node 26 LTS.
- **Actualización de dependencias estables:** React 19.3.1, React-DOM 19.3.1, Vite 8.3.6, Vitest 5.1.0, nanoid 6.0.2 y react-grid-layout 2.3.0.
- **Empaquetado y Cache-Busting:** Generación del nuevo bundle compilado con `v=2.6.8`.

## Validation

The release workflow validates runtimes against Python 3.14 and 3.15, verifies JavaScript syntax, executes the full React Vitest suite, runs `compileall` and all 135 unit tests, builds the clean HACS archive, and audits dependencies.
