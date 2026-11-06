# Validación local v3.0.0 — 2026-11-06

- Backend: 266 pruebas ejecutadas mediante scripts/test_backend.py, 13 omisiones heredadas, ningún módulo fallido. Cada módulo se aísla en un proceso para impedir contaminación de mocks globales de Home Assistant.
- Home Assistant Core 2026.11.0 instalado en el entorno de prueba: 4 pruebas de importación y contratos aprobadas en proceso limpio.
- Frontend: 88 pruebas aprobadas; TypeScript sin errores; build aprobado tras npm ci.
- npm audit: ninguna vulnerabilidad detectada.
- Archivo argus.zip reconstruido, integridad ZIP y presencia del frontend comprobadas. Suma SHA256 disponible.
- Migración: conservación de campos antiguos TTS, zonas desactivadas, modos heredados y etiquetas de área comprobadas por pruebas aisladas.

Pendiente antes de publicación: revisión final de CI y artefactos, comprobación completa de actualización en laboratorio, cierre de integración Git y publicación. Estas pruebas no acreditan dispositivos físicos ni todas las automatizaciones de terceros.
