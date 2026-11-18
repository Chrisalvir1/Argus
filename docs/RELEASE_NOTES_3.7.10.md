# Argus Home Hub v3.7.10

- Actualiza Vite a 8.3.8 y el plugin React a 6.3.0, conservando TypeScript 7.0.2.
- Alinea compilación y CI con Node 26.13.1 LTS y Home Assistant 2026.11.2; actualiza uv y las acciones de GitHub.
- Regenera y verifica los lockfiles de dependencias.

## Verificación

79 pruebas frontend, 299 pruebas backend aisladas sin módulos fallidos y 4 pruebas Core con Home Assistant 2026.11.2. TypeScript y build correctos.

Las pruebas locales no sustituyen la validación de dispositivos físicos, audio/iCloud ni una instalación de producción.
