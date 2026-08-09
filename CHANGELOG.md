# Changelog

Todos los cambios relevantes de Argus se documentan aquí. El historial anterior continúa disponible en Git.

## [2.0.50] - 2026-08-09

### Fixed
- **Armado atascado en espera de sensores (Aqara/HomeKit):** unificada la detección de sensores abiertos entre el armado y el watchdog. Al cerrar todos los bloqueadores, Argus completa el armado en lugar de quedarse en `arming`.
- **Force-complete:** si rearmas el mismo modo mientras esperas y los sensores ya están cerrados, Argus completa el armado en lugar de cancelar a `disarmed`.
- **HomeKit/UI:** la lista de sensores bloqueantes se actualiza en cada recheck para no mantener "Arming" fantasma.
- **Layouts:** acceso/usuarios con scroll táctil real; Respaldo y Restauración centrados y en rejilla; Apoya a Argus centrado y alineado.
- **Capa visual única de alarma** (`argus-v2050-alarm-visuals`) para estados arming/waiting y botones activos sin pelear con overlays anteriores.
- **Cache-bust 2.0.50** en bootstrap y contratos de versión.

### Added
- `is_sensor_active` / `open_blocking_sensors` canónicos en `sensor_state_runtime.py` (binary_sensor, lock, cover y estados Aqara-friendly).
- Módulos frontend `argus-v2050-alarm-visuals.js` y `argus-v2050-widget-layouts.js`.
- Tests de regresión `tests/test_v2050_arming_complete.py`.

## [2.0.49] - 2026-08-08

### Added
- Sistema modular de movimiento para selector de perfiles, PIN, dashboard, vistas, widgets, tarjetas y sensores.
- Entrada escalonada limitada para contenido nuevo renderizado dinámicamente.
- Capa ligera de transición para cambios de fondo sin aplicar filtros al canvas WebGL ni al video.
- API encapsulada por instancia para animar vistas, dashboard, contenido escalonado y cambios de fondo.

### Fixed
- Eliminado el fotograma vacío entre la selección del perfil y la carga del dashboard.
- El selector permanece visible mientras el dashboard se prepara y se oculta al finalizar la transición, con timeout de recuperación.
- Bloqueadas las selecciones duplicadas durante la validación visual de perfil o PIN sin alterar la lógica de seguridad.
- Transiciones de PIN, bienvenida, modos, historial, usuarios, selectores y widgets suavizadas sin clonar ni reemplazar nodos.

### Accessibility
- Compatibilidad con `prefers-reduced-motion`.
- El perfil Esencial elimina animaciones decorativas y conserva transiciones funcionales inmediatas.
- El feedback táctil no interfiere con click, teclado, focus ni controles de seguridad.

### Performance
- Observer limitado exclusivamente al Shadow DOM de cada panel y configurado solo para nodos añadidos.
- Mutaciones agrupadas mediante `requestAnimationFrame`, sin observar clases, estilos ni toda la página de Home Assistant.
- Perfil Ligero limita el stagger y omite la transición de fondos.
- Limpieza de observers, timers, RAF y listeners al desconectar el panel.

---

Consulta `docs/RELEASE_NOTES_*.md` y el historial Git para versiones anteriores.
