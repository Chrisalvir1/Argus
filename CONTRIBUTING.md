# Contribuir a Argus

## Preparación

1. Crea una rama desde `main`.
2. Mantén cada cambio enfocado y usa Conventional Commits.
3. No incluyas credenciales, respaldos de Home Assistant ni datos privados.

## Validación local

```bash
python -m compileall -q custom_components/argus
python -m unittest discover -s tests -v
node --check custom_components/argus/www/argus-card.js
node --check custom_components/argus/www/argus-panel.js
```

## Pull requests

Describe el problema, la solución, el riesgo, las pruebas realizadas y el plan de reversión. Para cambios visuales, adjunta capturas antes/después. Para seguridad, evita publicar un exploit funcional.

## Estilo

- Python moderno, async y APIs públicas de Home Assistant.
- JavaScript sin dependencias remotas en tiempo de ejecución.
- Textos traducibles: no agregues cadenas visibles directamente al backend o frontend.
- Conserva compatibilidad con la versión mínima indicada en `hacs.json`.
