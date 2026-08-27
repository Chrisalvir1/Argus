# Argus Home Hub v2.2.93

## Mejoras principales
- **Reducción de idiomas e Internacionalización limpia:** Se eliminaron los idiomas portugués, ruso, francés, italiano y chino (simplificado y tradicional) de toda la interfaz del Argus Panel, Card y backend de Home Assistant.
- **Soporte robusto "Usar Idioma Home Assistant" (`auto`)**: Ahora el sistema de Auto-Detect se adapta de forma completamente universal basándose en el lenguaje propio del sistema (HA). En fechas, formatos e `Intl` usará dinámicamente el idioma de HA. En textos estáticos, cargará Español o Inglés (fallback universal).
- **Traducciones meteorológicas descontinuadas**: Se eliminó totalmente de Argus el soporte para clima/weather presentation, alineándose con las decisiones recientes de diseño en el dashboard.

## Cambios técnicos
- Poda masiva de traducciones antiguas eliminando código muerto (~72KB en Frontend, múltiples `.json` de backend removidos).
- Simplificado `_getCurrentLangCode()` y `_getLocale()` para mayor eficiencia y menor footprint de memoria.
