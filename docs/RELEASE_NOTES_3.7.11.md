# Argus v3.7.11 · Modernización de dependencias

Notas de la próxima publicación, documentadas en el [PR #63](https://github.com/Chrisalvir1/Argus/pull/63). Etiqueta de versión prevista: `v3.7.11`. [Etiqueta técnica publicada](https://github.com/Chrisalvir1/Argus/tree/deps/argus-2026-11-26).

## Qué mejora

- La compilación del frontend pasa de 0,41 a 0,36 s en Linux x86-64 y de 0,42 a 0,37 s en Linux ARM64. El pico de memoria de compilación baja un 21 % y un 26 %, respectivamente. El bundle pesa 1.805 bytes menos. [Mediciones de CI](https://github.com/Chrisalvir1/Argus/actions/runs/45936103999)
- El binding WASI simplifica su árbol y elimina las versiones preliminares de EMNAPI. npm y pnpm verifican sus lockfiles con comprobación estricta de dependencias pares.
- pnpm 12.24.0 incluye una corrección de seguridad en la lectura de archivos de paquetes. [Notas oficiales de pnpm](https://github.com/pnpm/pnpm/releases/tag/v12.24.0)
- CI valida Home Assistant Core 2026.11.3 y comprueba los bindings nativos en Linux ARM64.

## Versiones del candidato

| Componente | Versión | Función en Argus |
| --- | --- | --- |
| Vite | 8.4.0 | Genera el frontend incluido con la integración |
| Vitest, @vitest/mocker y @vitest/spy | 5.1.2 | Alinean el ejecutor y sus paquetes de pruebas |
| Rolldown y sus 16 bindings | 1.3.4 | Compilan en las plataformas compatibles y simplifican WASI |
| PostCSS | 8.5.33 | Procesa los estilos del frontend |
| @types/react | 19.3.3 | Comprueba los tipos de los componentes React |
| source-map-js | 1.2.4 | Genera y lee mapas de código fuente |
| @oxc-project/types | 0.160.0 | Tipos que usa Rolldown |
| @jridgewell/resolve-uri y @types/estree | 3.1.3 y 1.0.11 | Dependencias de resolución y tipos del lockfile npm |
| magic-string | 1.4.5 | Transformación de código en el lockfile pnpm |
| napi-windows-process-start-time | 0.1.0 | Dependencia opcional de Vite para Windows |
| pnpm | 12.24.0 | Instalación reproducible del lockfile pnpm |
| uv | 0.13.10 | Resuelve e instala las dependencias de CI de Core |
| Home Assistant Core | 2026.11.3 | Valida los contratos de integración y diagnósticos |
| HACS Action | `1ebf01c408f29afcb6406bd431bc98fd8cbb15aa` | Valida la integración para HACS |
| Hassfest | `9e9565e68f5a70d874202871f4c4064d23814235` | Comprueba el manifiesto y los metadatos de integración |

Entorno validado con Node.js 26.13.1 LTS, Python 3.14.10, TypeScript 7.0.2 y ES2025 en TypeScript. Node.js se usa para desarrollo y compilación.

## Verificación

GitHub Actions completó 12 jobs para el candidato técnico. Se aprobaron 286 pruebas de Python, 4 de Core y 79 de Vitest. HACS y Hassfest aprobaron la validación, y el workflow Release generó un artefacto de prueba. La publicación queda pendiente de la validación en una Raspberry Pi 5 física y de la revisión visual en Home Assistant. [Checks del PR](https://github.com/Chrisalvir1/Argus/pull/63/checks)
