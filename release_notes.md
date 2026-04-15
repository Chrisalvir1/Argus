## Argus v0.9.10 — Interfaz Premium y Logs Inteligentes

### 🔥 Lo nuevo en esta versión

- **Interfaz Glassmorphism Premium:** Rediseño total del panel con efectos de desenfoque, bordes refinados y tipografía "Outfit" para una experiencia de usuario de lujo.
- **HUD con Ubicación Detallada:** El encabezado ahora muestra tu ubicación exacta (Cantón, Provincia, País) y sincroniza en tiempo real el reloj y la temperatura local.
- **Sección "Mi Casa" Independiente:** Acceso directo y simplificado para personalizar el nombre de tu hogar y el fondo del panel.
- **Historial de Actividad Inteligente:** Se implementó un sistema de deduplicación que prioriza los nombres de usuario sobre los logs genéricos de "Argus". 
- **Logs de Disparo Enriquecidos:** Cuando la alarma se dispara, el historial ahora registra el nombre amigable del sensor y el modo en que se encontraba la alarma.
- **Smart Píldoras para Sensores:** Rediseño de la lista de sensores en MODOS usando un grid moderno de píldoras digitales con estados visuales claros.

### 📋 Nota de Instalación
Como siempre, asegúrate de recargar el frontend de Home Assistant (F5) para ver los cambios estéticos reflejados.

---

### Versión 0.9.10 — by Antigravity AI

---

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
