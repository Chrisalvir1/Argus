## Argus v0.7.0 — Animaciones SVG + Mejoras de Interfaz

### 🔥 Lo nuevo en esta versión

- **Animaciones SVG Dinámicas:** Se agregaron 5 animaciones personalizadas y fluidas que cambian según el estado de la alarma (En Casa, Ausente, Noche, Vacaciones y Desarmado) directamente en el panel de Argus Home Hub.
- **Diseño Premium:** Se eliminó la visualización de los IDs de entidad (`alarm_control_panel.argus_alarm`) debajo de las instancias para limpiar la interfaz.
- **Correcciones Críticas:** Se arregló el bug en la lógica de "Bloquear armado si hay sensores abiertos" que impedía que funcionara correctamente en versiones recientes.
- **Optimización de Caché:** Se incrementó la versión interna del frontend (`v=0.7.0`) para asegurar que el navegador cargue las nuevas animaciones de inmediato sin necesidad de borrar caché manualmente.

### 📋 Nota para HACS
Si HACS no detecta la actualización automáticamente, ve a **HACS > Argus > Tres puntos > Update Information** y luego selecciona **Redownload** eligiendo la versión **v0.7.0**.

---

### Versión 0.7.0 — by Antigravity AI
