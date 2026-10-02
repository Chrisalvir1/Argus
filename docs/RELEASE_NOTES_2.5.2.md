# Argus Home Hub v2.5.2 — Corrective & Visual Polish Release

**Release date:** October 1, 2026  
**Previous release:** [v2.5.1](https://github.com/Chrisalvir1/Argus/releases/tag/v2.5.1)

This release polishes the security console layout, refines sensor delay visualization with Liquid Glass 3D icons, upgrades the PDF activity report header with the official high-resolution logo, and ensures accurate sensor availability synchronization across views.

## Fixes & Improvements

- **Sensor Chip Proportions & Layout:** Eliminated excess whitespace on wide screens and fullscreen mode by bounding the container width, reducing pill height, and right-aligning the sensor status, delay, and battery indicators for optimal balance.
- **Liquid Glass Clock Icon:** Added custom 3D Liquid Glass SVG clock icons for sensor delays (cyan instant `0s` and amber custom seconds) across both the security console chips and mode configuration views.
- **High-Resolution PDF Logo & Layout:** Upgraded PDF activity export with the official high-definition 1024x1024 Argus artwork rendered at 384x384 ultra-sharp resolution. Relocated the logo to the left side of the header followed by the report title, home name, date range, and generation timestamp.
- **Sensor Availability Synchronization:** Fixed a display discrepancy where unavailable or offline sensors previously rendered as "Cerrado" in the modes view; both the security console and modes views now consistently display "No disponible" with grey indicator styling.
- **Apple macOS Bootloader Splash Screen:** Replaced the legacy shield loading icon with the official Argus logo and an authentic Apple macOS boot progress bar on cold boot and page refresh.
- **Instant & Snappy Profile Entry:** Accelerated profile selection transition by 4x (~550ms instead of 2.4s), adding immediate tactile touch response and a snappy fluid glide into Argus.
- **Robust Entity Lookup:** Added resilient case-insensitive and normalized entity resolution for configured partition sensors in Home Assistant.

## Actualización

Actualización correctiva y de refinamiento visual para Argus:

- **Entrada y selección de perfil ultrarrápida:** Se aceleró la transición de selección de perfil más de 4x (~550ms en lugar de 2.4s), con respuesta táctil inmediata y un vuelo fluido directo a la barra superior sin esperas innecesarias para entrar a Argus al instante.
- **Pantalla de inicio estilo Apple macOS:** Se reemplazó el escudo de carga por el logotipo oficial de Argus y una barra de progreso suave idéntica a la de inicio de macOS al encender o refrescar la página.
- **Diseño compacto y balanceado de sensores:** Se eliminó el espacio vacío innecesario a la derecha de los sensores en pantalla completa, organizando el nombre a la izquierda y el estado/batería/retardo a la derecha con un ancho acotado y elegante.
- **Reloj Liquid Glass 3D:** Distintivos de retardo instantáneo (0s) y personalizado con icono SVG de reloj Liquid Glass de alta definición en la consola principal y en la configuración de modos.
- **Logo oficial en alta resolución en PDF:** Se integró el logotipo oficial en alta definición (1024x1024) renderizado a 384x384 nítido, ubicado a la izquierda del encabezado seguido de la información del reporte.
- **Sincronización de sensores no disponibles:** Se corrigió la discrepancia donde sensores fuera de línea o no disponibles mostraban falsamente "CERRADO" en la sección de modos; ahora reflejan correctamente "No disponible".
- **Búsqueda robusta de entidades:** Resolución normalizada y tolerante a mayúsculas/minúsculas para sensores en Home Assistant.

## Validation

The release workflow runs the Python regression suite, frontend tests and build, HACS validation, hassfest, and dependency security audit.
