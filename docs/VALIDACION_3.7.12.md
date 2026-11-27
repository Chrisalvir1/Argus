# Validación de Argus 3.7.12

Base publicada: `v3.7.11`. [PR de mantenimiento](https://github.com/Chrisalvir1/Argus/pull/64) · [Respaldo del PR original](https://github.com/Chrisalvir1/Argus/tree/backup/pr64-before-repair-2026-11-27).

| Archivo o grupo | Resultado |
| --- | --- |
| `manifest.json`, `const.py`, `argus-bootstrap.js`, `package.json` | Alineados a 3.7.12. El workflow Release exige concordancia con el tag. |
| `.github/workflows`, `pnpm-lock.yaml`, `.gitignore` | pnpm con lockfile congelado, limpieza de archivos temporales y exclusiones para futuras incorporaciones. La comparación CI admite el lockfile npm de bases históricas. |
| `src/panel` | Traslado del panel y la tarjeta activos, con importaciones y pruebas actualizadas. |
| `vite.config.ts`, `src/app`, `src/panel/panel.css` | Control de presupuesto de arranque, CSS externo al JS, React diferido hasta el tablero autorizado y Three.js bajo demanda. |
| `src/features/history` | Exportadores de historial PDF, texto y JSON fuera de la transferencia inicial. |
| `argus_logo.png` y PNG de marca de la integración | Logo de pantalla optimizado. Las imágenes de marca conservan sus dimensiones. |
| `security.py`, `storage.py`, `__init__.py` | Guardado de intentos y bloqueos, espera exponencial y migración de PIN heredados antes de habilitar el panel. |
| `tests/test_pin_security_persistence.py` | Verifica el restablecimiento del bloqueo, aislamiento, aumento de la espera y conservación de credenciales heredadas. |

## Tamaño

El límite en Vite cuenta los imports estáticos de `argus-frontend.js`, el bootstrap y el script de marca, en bytes sin comprimir. La hoja CSS de Shadow DOM se sirve por separado. Tras la autorización, el tablero y React solicitan sus propios módulos. Lite y movimiento reducido conservan SVG/CSS y prescinden de Three.js.

| Medida | v3.7.11 | Candidato v3.7.12 |
| --- | ---: | ---: |
| Logo del panel | 1.164.512 B | 40.661 B |
| JavaScript inicial hasta el selector de perfiles | 1.969.685 B | 398.435 B |
| CSS del panel publicado como recurso independiente | Incluido en JS | 102.673 B |
| ZIP de instalación | 8.229.046 B | 2.804.658 B |

El ZIP se reduce aproximadamente un 66 %. En la tarjeta Lovelace con sesión, la carga del tablero comienza inmediatamente después de que Home Assistant devuelve la configuración de esa sesión.

## Pruebas

- 288 casos Python aprobados y 13 saltos preexistentes con el ejecutor aislado, 4 pruebas de Core con pytest y 79 pruebas Vitest.
- TypeScript sin emisión, pnpm build, HACS, Hassfest y Linux ARM64. [Checks del PR](https://github.com/Chrisalvir1/Argus/pull/64/checks)
- Chromium aislado comprobó el selector de perfiles, la carga posterior de React y la separación WebGL a 390 y 1.366 px. Home Assistant Core 2026.11.3 de laboratorio sirvió el frontend, procesó armado y desarmado y recuperó la sesión de Argus tras reconexión WebSocket. Raspberry Pi 5 y Companion App físicos quedan por verificar.

Las funciones nuevas del siguiente ciclo se revisan en el [PR v3.8.0](https://github.com/Chrisalvir1/Argus/pull/65).
