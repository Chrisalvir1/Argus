# Argus Home Hub 1.6.0 — Base reforzada

Esta versión refuerza la base de seguridad, estabilidad y mantenimiento de Argus.

## Destacados

- Política robusta para PIN y pruebas criptográficas de comportamiento.
- Corrección del ciclo de vida del switch SOS.
- Versionado coherente en toda la integración.
- Compatibilidad mínima de Home Assistant corregida a 2024.7.
- Pipeline automático para validar y construir el paquete HACS.
- README, guía de seguridad y flujo de contribución renovados.

## Actualización

1. Crea un respaldo de Home Assistant.
2. Actualiza Argus mediante HACS.
3. Reinicia Home Assistant.
4. Fuerza la recarga del navegador para renovar los recursos del panel.
5. Comprueba el armado, desarmado y SOS antes de depender del sistema.

## Nota de seguridad

Los medios guardados históricamente en `/config/www/argus` continúan expuestos mediante `/local`. Evita subir imágenes o vídeos sensibles hasta completar la migración al almacenamiento autenticado planificada para la siguiente versión.
