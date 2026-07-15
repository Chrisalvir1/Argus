## Argus v1.4.1 — Correcciones finales de idioma en la interfaz

### 🔥 Lo nuevo en esta versión

- **Traducción Completa de Textos Dinámicos:** Se corrigieron textos dinámicos fijos (como la confirmación de guardado, error de PIN no coincidente y notificaciones del sistema de armado/desarmado) para que se muestren en el idioma seleccionado por el usuario en lugar de permanecer en español.
- **Sincronización en 7 Idiomas:** Interfaz completamente localizada en español, inglés, francés, portugués, italiano, chino y ruso.

---

### Versión 1.4.1 — by Antigravity AI

---

## Argus v1.4.0 — Localización Completa, Temporizadores Reales y MQTT Reactivo

### 🔥 Lo nuevo en esta versión

- **Internacionalización Completa (i18n):** Sincronización de los 7 idiomas admitidos en toda la interfaz de Argus, incluyendo el panel, modos de seguridad, SOS, historial de actividad, configuraciones, mensajes y modales.
- **Opción "Usar idioma de Home Assistant":** Sigue dinámicamente el idioma configurado en tu servidor de Home Assistant.
- **Formateo de Fechas/Horas Localizadas:** Formateo nativo y automático de las marcas de tiempo según el locale del idioma seleccionado.
- **Modos y Temporizadores Reales:** Los retardos de armado (`arming`) ahora ocurren en tiempo real y cambian correctamente el estado del panel. Cancelación del retardo al desarmar.
- **Retardo de entrada configurable por Sensores:** Permite designar qué sensores activan el delay de entrada por modo, disparando la alarma de forma instantánea ante cualquier otro sensor.
- **MQTT Integrado e Inmediato:** Suscripción al topic `argus/alarm/set` para recibir comandos JSON o texto plano, y publicación del estado actual inmediatamente con persistencia en `argus/alarm/state` en cada transición.
- **Logs Claros de Broker no Disponible:** En caso de que la integración MQTT no esté configurada o no haya broker activo, se registra un error amigable en el log de Home Assistant sin romper la inicialización de Argus.

---

### Versión 1.4.0 — by Antigravity AI

---

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
