# Argus Developer & Maintenance Scripts

Este directorio contiene las herramientas de automatización, publicación e inspección para los desarrolladores de Argus.

## Herramientas

### `scripts/publish.py`
Script para validar el versionado, compilar archivos Python, ejecutar la suite de pruebas unitarias y verificar el estado del repositorio antes de publicar una versión.

### `scripts/check_syntax.py`
Script rápido para validar la sintaxis de todos los archivos Python en `custom_components/argus/` mediante `ast.parse`.

## Exclusión de Release
Ningún archivo en este directorio forma parte de la distribución del paquete `custom_components/argus` para Home Assistant ni se incluye en la descarga de HACS.
