# Argus 2.9.152 — checkpoint local

Fecha: 5 de noviembre de 2026.

## Cambios

- El núcleo Three.js evita reasignar el buffer cuando cambian clases ajenas al perfil gráfico y actualiza dimensiones/DPR en una sola operación.
- El PIN de armado muestra etiquetas y descripción específicas sin alterar el endpoint ni la validación del PIN de perfil.
- El bridge contextual reconoce estados activos adicionales de sensores sin cambiar el motor de alarma.
- Se agregan regresiones dirigidas para presentación del PIN y clasificación contextual de sensores.
- Se conserva evidencia nativa Safari de los cuatro recorridos y se documentan las limitaciones de medición.

## Estado de validación Safari

Los recorridos de scroll, pantalla completa, sidebar de Home Assistant y perfil se ejecutaron sobre el bundle 2.9.151. Los cuatro siguen pendientes de verificación visual sostenida; las mediciones rAF recogidas no aíslan causalidad ni certifican fluidez. Consulte [SAFARI_UX_2.9.151.md](SAFARI_UX_2.9.151.md).

Este es un versionado y checkpoint local. No representa publicación ni despliegue.
