# Argus Home Hub v3.0.0

## Novedades

- Dashboard contextual con zonas, disponibilidad, batería y estados confirmados por Home Assistant.
- Zonas opcionales: las instalaciones heredadas conservan sus sensores por modo sin tener que activar zonas.
- Núcleo Three.js original, renderizado adaptativo y distribución responsive.
- Armado en espera, omisión temporal y reincorporación manual autorizada.
- Diagnóstico de sensores y sesiones de prueba guiadas y libres.
- Configuración general de voz en Modos / SOS, con importación de ajustes heredados.
- Gestión de perfiles, PIN, accesibilidad, alto contraste y configuración de salidas compatibles.
- SOS independiente de la alarma de intrusión; detener SOS requiere PIN cuando esté configurado.

## Actualización desde v2.6.8

Consulte [la guía de migración](MIGRATION_3.0.0.md). Haga un respaldo completo de Home Assistant antes de actualizar. No elimine la integración ni sus entidades. La actualización conserva identificadores y configuración existente; las funciones nuevas se configuran voluntariamente.

## Compatibilidad

Objetivo de integración: Home Assistant Core 2026.11.0. El paquete incluye el frontend compilado; Node.js solo se necesita para desarrollar.

## Validación

El informe de preparación y sus pendientes se mantiene en RELEASE_VALIDATION_3.0.0.md. Esta nota no acredita pruebas físicas de dispositivos, llamadas, sirenas ni rendimiento GPU.
