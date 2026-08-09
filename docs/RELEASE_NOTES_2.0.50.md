# Argus 2.0.50

## Prioridad
Desbloqueo del modo **espera de armado de sensores** (policy `pending` / require closed wait) que dejaba Argus y HomeKit en `arming` aunque todos los sensores Aqara ya estuvieran cerrados, sin poder forzar el armado.

## Backend
- Detección única de sensor abierto/activo compartida por armado y watchdog.
- Completa el armado cuando la lista de bloqueadores queda vacía y el delay ya venció (o es 0).
- Re-armar el mismo modo con sensores cerrados hace **force-complete** (no desarma y se queda colgado).
- Logs de bloqueadores residuales y estados reales para diagnóstico Aqara/hub.

## Frontend
- Layouts precisos: `#w-access` scroll usuarios, `#w-backup` centrado 3 columnas, `#w-github` centrado.
- Capa visual única de alarma para arming/waiting.
- Bootstrap cache-bust `?v=2.0.50` + stable render de instancias.

## Versión
- `manifest.json` / `const.py` / card / contratos de test → **2.0.50**
- Tag/release: **v2.0.50**

## Prueba física recomendada
1. Modo con espera de sensores abiertos.
2. Dejar 1+ Aqara abiertos → Argus/HomeKit en Arming y conteo.
3. Cerrar todos → debe armar solo (no quedarse esperando).
4. Si se queda, re-tocar el mismo modo → force-complete.
5. Armado + abrir sensor → debe disparar.
6. Instancias activas sin párkinson; widgets backup/apoya/access alineados.
