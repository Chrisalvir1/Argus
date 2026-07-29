# Argus Home Hub 1.6.0 — Seguridad y entrega reforzadas

Argus 1.6.0 refuerza credenciales, restauración, auditoría, medios, multi-instancia y el proceso de publicación.

## Seguridad

- PIN de 4 a 12 dígitos con rechazo de secuencias, repeticiones y códigos comunes.
- Hash `scrypt` con salt aleatorio y comparación constante.
- Bloqueo temporal después de intentos fallidos repetidos.
- Actualización de PIN asociada explícitamente a una instancia de Argus.
- Eliminado el restablecimiento remoto que omitía el PIN actual.
- Hashes de usuario y PIN de invitado redactados en respuestas del dashboard.
- Restauración de respaldos validada, saneada y escrita de manera atómica.
- El estado operativo local no puede sobrescribirse desde un respaldo portátil.

## Auditoría

- Los eventos incluyen severidad y metadatos estructurados.
- Borrar el historial deja un evento con actor, fecha y cantidad eliminada.
- El frontend ya no puede suplantar el nombre del actor del evento.

## Medios y rendimiento

- Nombres aleatorios para nuevos archivos subidos.
- Escritura atómica, límites de tamaño y limpieza de temporales.
- Errores internos registrados en Home Assistant sin exponer rutas al navegador.
- Caché activada para recursos versionados del frontend.

> Los archivos históricos ubicados en `/config/www/argus` siguen siendo recursos `/local`. No deben contener material sensible. La versión 1.6.0 reduce su descubrimiento mediante nombres aleatorios, pero no convierte `/local` en almacenamiento privado.

## Entrega

- El ZIP HACS se construye en la ruta correcta y se valida con `unzip -t`.
- El artefacto se construye también en pull requests, antes de crear el tag.
- Las notas de release se seleccionan por versión con fallback automático.
- Pruebas Python, JavaScript, HACS, Hassfest y construcción de artefacto forman la puerta de calidad.

## Actualización

1. Crea un respaldo de Home Assistant.
2. Actualiza Argus mediante HACS.
3. Reinicia Home Assistant.
4. Recarga el navegador sin caché.
5. Verifica armado, desarmado, SOS, PIN, usuarios, sirenas y restauración.
