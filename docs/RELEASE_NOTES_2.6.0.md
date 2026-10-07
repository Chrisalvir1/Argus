# Argus Home Hub v2.6.0 — Consola Liquid Glass y pantalla nocturna

## Mejoras

- Reorganización de cabecera, controles, escudo y sensores con distribución adaptable a móvil, tablet y pantalla completa.
- Material de cristal sutil, tipografía de sistema, selección de modos accesible y transición breve del escudo al cambiar estado.
- Iconos animados según dominio y device_class de Home Assistant: puerta, cerrojo, garaje, ventana y movimiento/presencia. No se deducen del nombre. Sensores no disponibles muestran un aviso.
- Batería baja en porcentaje, filas de sensores de ancho uniforme y menos efectos continuos.
- Pantalla nocturna roja opcional: lux o horario, presencia, recuperación por interacción, exclusión durante alarmas y alto contraste.
- Brillo físico opcional mediante entidad number de HA y solicitud web de Wake Lock. Compatible con clientes web que carguen Argus; el control físico depende de las entidades y capacidades del dispositivo.
- Respeto de movimiento reducido y alto contraste; limpieza del modo nocturno al desconectar el panel.

## Alcance

No cambia Python, Node ni dependencias. La configuración nocturna se guarda por usuario, panel y navegador y comienza desactivada. La validación visual previa utilizó Chromium con HA simulado; Safari, hardware de brillo y clientes kiosk requieren comprobación en la instalación real.
