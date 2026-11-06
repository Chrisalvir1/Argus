# Argus 3.0.3

Corrige la visualización de zonas desactivadas y el error TTS `Can't find variable: yaml`. El historial ahora fuerza fondo y texto legibles en alto contraste. En móvil vertical, el núcleo gana espacio cuando el panel está despejado y reduce tamaño cuando se abre contexto o hay armado pendiente. Los textos clave crecen para pantallas de pared.

El fallback SVG gira su anillo exterior con CSS cuando WebGL falla o el modo de rendimiento esencial está activo, si el sistema no solicita movimiento reducido. Con zonas etiquetadas el núcleo permanece fijo para conservar la posición legible de sus nombres.

Validación: compilación frontend. Pruebas físicas pendientes en iPhone y Echo Show 5, incluidas legibilidad a distancia y giro con Lineage OS/Free Kiosk. No se valida aquí la reproducción física TTS.

La actualización conserva la configuración de la integración. No requiere reemparejar accesorios. Reinicia Home Assistant después de actualizar. Para volver atrás, reinstala la versión previa y restaura la copia de seguridad si cambiaste configuración.
