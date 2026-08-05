# Argus Home Hub v2.0.34

Versión correctiva de distribución y caché para Home Assistant y HACS.

## Correcciones principales
- La versión publicada vuelve a proceder directamente de la rama `main`.
- El `manifest.json`, las constantes Python, la tarjeta, el bootstrap y los contratos de prueba se sincronizan en `2.0.34`.
- El componente web usa un identificador propio de la versión para impedir que Home Assistant o el navegador reutilicen la definición antigua `v2018`.
- HACS recibe un `argus.zip` verificado, sin `__pycache__` ni archivos `.pyc`, acompañado de su SHA-256.
- La validación permanente incluye Python, JavaScript, React, TypeScript, Vitest, Vite, HACS y hassfest.
- Se eliminan del repositorio los artefactos Python compilados que habían contaminado el historial de la rama de desarrollo.

## Actualización
1. Actualiza Argus desde HACS.
2. Reinicia Home Assistant.
3. Realiza una recarga completa del navegador sin caché.

Si HACS conserva información anterior, abre HACS, actualiza la información del repositorio y vuelve a buscar actualizaciones.
