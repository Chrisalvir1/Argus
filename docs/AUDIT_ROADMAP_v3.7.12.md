# Auditoría, Mejoras y Roadmap de Argus (v3.7.11 -> v3.7.12 / v3.8.0)

Fecha: 2026-11-27
Repositorio: `Chrisalvir1/Argus`

---

## 1. Errores críticos y mejoras prioritarias

### 1.1 Desincronización de versionado
- **Problema:** `custom_components/argus/manifest.json` y `package.json` permanecen en `3.7.10` mientras el release publicado es `v3.7.11`.
- **Solución:** Sincronizar ambos archivos a la versión del release y automatizar el bump de versión dentro del workflow de GitHub Actions antes de crear el tag y publicar el artefacto.

### 1.2 Peso del bundle frontend y rendimiento GPU (Three.js)
- **Problema:** `custom_components/argus/www/react-dist/argus-frontend.js` pesa `1.96 MB` en un único chunk monolítico porque `three` (`^0.187.0`) se carga en el bundle inicial.
- **Solución:**
  - Configurar `build.rollupOptions.output.manualChunks` en `vite.config.ts` para separar `three` y librerías pesadas.
  - Cargar shaders y canvas WebGL de forma diferida con `React.lazy` y `Suspense`.
  - Respetar `prefers-reduced-motion` y añadir un modo **Lite (CSS-only)** para tablets de pared, móviles y Raspberry Pi.

### 1.3 Empaquetado HACS e higiene del repositorio
- **Problema:** `argus.zip` pesa `8.23 MB` (incluyendo `argus_logo.png` de `1.16 MB`) y está commiteado en la raíz de `main` junto a archivos temporales (`output*.log`, `patch*.py`, `fix_*.py`, `scratch/`, `src/legacy/`, `src/.DS_Store`, `test_shader.html`) y doble lockfile (`package-lock.json` y `pnpm-lock.yaml`).
- **Solución:**
  - Comprimir `argus_logo.png` (<50 KB en PNG optimizado o WebP/SVG).
  - Eliminar `argus.zip`, logs, scripts temporales, `scratch/`, `src/legacy/` y `.DS_Store` de `main`.
  - Conservar únicamente `pnpm-lock.yaml` y actualizar `.gitignore`.

### 1.4 Endurecimiento de seguridad (`security.py` y `auth.py`)
- **Problema:** `PinAttemptLimiter` guarda los bloqueos únicamente en memoria RAM (un reinicio de Home Assistant borra el bloqueo) y `verify_pin` todavía permite comparación de PIN en texto plano heredado.
- **Solución:**
  - Persistir el estado de intentos fallidos y bloqueos en `storage.py` con backoff exponencial.
  - Migrar automáticamente cualquier PIN en texto plano a `scrypt` al iniciar la integración y retirar el fallback en texto plano.

---

## 2. Nuevas capacidades de seguridad y automatización (v3.8.0)

1. **Grupos de sensores `n-of-m` (`sensor_state_runtime.py`):** exigir el disparo de `N` sensores dentro de una ventana configurable (p. ej. 120–300 s) antes de activar la alarma, reduciendo falsas alarmas por mascotas o corrientes de aire.
2. **Acciones push interactivas:** soportar eventos accionables nativos de Home Assistant Companion (`ARGUS_DISARM`, `ARGUS_FORCE_ARM`, `ARGUS_RETRY_ARM`) directamente desde notificaciones móviles.
3. **Códigos de armado forzado (`override code`):** añadir una bandera por usuario en `auth.py` y `storage.py` que permita armar inmediatamente haciendo bypass temporal de sensores abiertos y registrándolos en `bypassed_sensors`.
4. **Resiliencia tras reinicio de HA:** evaluar transiciones `unknown -> open` al restaurar el estado armado tras un reinicio de Home Assistant (salvo sensores marcados como "permitir abiertos inicialmente").
5. **Control MQTT bidireccional opcional:** exponer tópicos configurables de estado y comando para integrar teclados físicos Zigbee/MQTT o paneles secundarios.

---

## 3. Plan de acción inmediato

1. **Fase 1 — Limpieza y release `v3.7.12`:** limpiar archivos temporales de `main`, sincronizar `manifest.json` y `package.json`, comprimir `argus_logo.png` y verificar el tamaño de `argus.zip`.
2. **Fase 2 — Optimización frontend:** aplicar code-splitting en Vite, carga diferida de Three.js y modo Lite/CSS-only con soporte para `prefers-reduced-motion`.
3. **Fase 3 — Seguridad persistente:** persistir `PinAttemptLimiter` en `storage.py`, añadir backoff exponencial y eliminar el soporte de texto plano heredado tras migración automática.
4. **Fase 4 — Evolución funcional (`v3.8.0`):** implementar grupos de sensores `n-of-m`, notificaciones push accionables, códigos `override`, resiliencia `unknown -> open` y soporte MQTT opcional.
