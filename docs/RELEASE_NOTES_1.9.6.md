# Argus v1.9.6 — Corrección del arranque del panel

Este parche corrige un error de JavaScript que detenía el panel durante la
inicialización después de actualizar a v1.9.5.

## Causa raíz

El frontend invocaba `_syncAccessSummary()` al aplicar las traducciones y al
renderizar usuarios, pero ese método no estaba implementado. La excepción
interrumpía el flujo antes de mostrar el onboarding, el selector de perfiles o
el dashboard.

## Correcciones

- Se implementa `_syncAccessSummary()` con soporte para el estado previo a la
  carga del dashboard.
- El resumen muestra de forma localizada el estado del PIN maestro y la
  cantidad de perfiles activos.
- Se añade una prueba de regresión que exige que el método exista y sea seguro
  durante el bootstrap.
- El Web Component y todos los imports reciben la versión v1.9.6 para evitar
  que Home Assistant o Safari reutilicen el JavaScript defectuoso de v1.9.5.
