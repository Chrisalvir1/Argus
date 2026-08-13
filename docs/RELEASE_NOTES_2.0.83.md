# Argus v2.0.83 — Patch Release

## Fixed

### Safari WebKit Blur Fix
- **Error del filtro borroso**: La pantalla de selección de perfiles en dispositivos Apple (iOS, iPadOS, macOS Safari) a veces dejaba un "fantasma borroso" sobre todo el dashboard después de iniciar sesión. Esto se debía a un bug del motor WebKit al intentar animar la eliminación de un `backdrop-filter`. Ahora la animación de salida utiliza la `opacity`, evitando por completo el error del navegador.
