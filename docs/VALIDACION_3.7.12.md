# Validación de Argus 3.7.12

Base publicada: `v3.7.11`. [PR de mantenimiento](https://github.com/Chrisalvir1/Argus/pull/64) · [Respaldo del PR original](https://github.com/Chrisalvir1/Argus/tree/backup/pr64-before-repair-2026-11-27).

| Archivo o grupo | Resultado |
| --- | --- |
| `manifest.json`, `const.py`, `argus-bootstrap.js`, `package.json` | Alineados a 3.7.12. El workflow Release exige concordancia con el tag. |
| `.github/workflows`, `pnpm-lock.yaml`, `.gitignore` | pnpm con lockfile congelado, limpieza de archivos temporales y exclusiones para futuras incorporaciones. La comparación CI admite el lockfile npm de bases históricas. |
| `src/panel` | Traslado del panel y la tarjeta activos, con importaciones y pruebas actualizadas. |
| `vite.config.ts`, `SecurityShield.tsx`, `SecurityConsole.css` | Three.js y el renderer se cargan por separado. Modo Lite usa SVG y CSS. Reducir movimiento evita iniciar WebGL. |
| `argus_logo.png` y PNG de marca de la integración | Logo de pantalla optimizado. Las imágenes de marca conservan sus dimensiones. |
| `security.py`, `storage.py`, `__init__.py` | Guardado de intentos y bloqueos, espera exponencial y migración de PIN heredados antes de habilitar el panel. |
| `tests/test_pin_security_persistence.py` | Verifica el restablecimiento del bloqueo, aislamiento, aumento de la espera y conservación de credenciales heredadas. |

## Tamaño

Bytes del empaquetado de la rama de trabajo. Gzip de nivel 6 por recurso, sumado para los imports estáticos iniciales. Los chunks WebGL se descargan al habilitar 3D.

| Medida | v3.7.11 | Candidato v3.7.12 |
| --- | ---: | ---: |
| Logo de pantalla | 1.164.512 | 40.661 |
| JavaScript inicial, sin WebGL | 1.961.160 | 1.238.910 |
| JavaScript inicial con gzip | 459.702 | 296.685 |
| ZIP de instalación | 8.229.046 | 2.845.299 |

El ZIP se reduce aproximadamente un 65 %. El JavaScript inicial cumple 400 KB con gzip y sigue excediendo 400 KB en crudo.

## Pruebas

- 288 casos Python aprobados y 13 saltos preexistentes con el ejecutor aislado, 4 pruebas de Core con pytest y 79 pruebas Vitest.
- TypeScript sin emisión, pnpm build, HACS, Hassfest y Linux ARM64. [Checks del PR](https://github.com/Chrisalvir1/Argus/pull/64/checks)
- La revisión visual y las pruebas en una Raspberry Pi 5 con dispositivos físicos quedan pendientes.

Las funciones nuevas del siguiente ciclo se revisan en el [PR v3.8.0](https://github.com/Chrisalvir1/Argus/pull/65).
