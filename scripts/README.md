# Argus Developer & Maintenance Scripts

Este directorio contiene herramientas de inspección mantenidas para desarrolladores de Argus.

## Herramientas

### `scripts/check_syntax.py`

Valida mediante `ast.parse` la sintaxis de todos los archivos Python en `custom_components/argus/`.

## Publicación segura

La publicación oficial se realiza exclusivamente mediante:

1. `.github/workflows/validate.yml` para la matriz previa a la fusión.
2. `.github/workflows/release.yml` para construir y publicar un tag ya validado.

No se deben mantener scripts que hagan `git add .`, push directo a `main`, creen tags antes de validar o reescriban versiones mediante reemplazos globales.

## Exclusión de release

Ningún archivo de este directorio forma parte de la distribución `custom_components/argus` que instala HACS.
