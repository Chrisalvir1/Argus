# Argus 1.6.0 — registro de mejoras

## Seguridad

- Se formalizó una política de PIN de 4 a 12 dígitos.
- Se rechazan PIN comunes, secuenciales o compuestos por un único dígito.
- Los PIN siguen almacenándose con `scrypt`, salt aleatorio y comparación constante.
- Se añadió detección explícita de credenciales heredadas para facilitar su migración.
- Se documentó el modelo de seguridad y el proceso de reporte responsable.

## Estabilidad

- Se corrigió la limpieza del dispatcher del switch SOS cuando la entidad se elimina antes de completar su inicialización.
- Se agregó una lectura defensiva del estado de pánico para evitar errores durante arranque o descarga.
- Se eliminó el número de versión del nombre predeterminado de la entidad.
- Se unificó la versión del manifest y las constantes en `1.6.0`.

## Compatibilidad y entrega

- Home Assistant mínimo declarado: `2024.7.0`, coherente con `StaticPathConfig`.
- El manifest declara el tipo de integración y su logger.
- Nuevo flujo automático de release: valida, prueba, crea `argus.zip` y publica una release al empujar un tag `v*`.
- Se añadieron pruebas de comportamiento para hash, verificación, política y migración de PIN.

## Documentación y comunidad

- README reconstruido con instalación, seguridad, actualización, solución de problemas y desarrollo.
- Añadidos `SECURITY.md`, `CONTRIBUTING.md`, plantilla de PR y plantillas de incidencias.
- Corregido el enlace local roto de la API de extensiones.

## Próxima fase técnica

La siguiente iteración dividirá `argus-panel.js` y `alarm_control_panel.py` en módulos, añadirá pruebas con una instancia real de Home Assistant y migrará los archivos privados fuera de `/local`.
