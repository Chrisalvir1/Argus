# Política de seguridad

Argus controla funciones de seguridad doméstica. Los reportes responsables tienen prioridad.

## Versiones con soporte

| Versión | Soporte |
|---|---|
| 1.6.x | Sí |
| 1.5.x | Solo correcciones críticas |
| Anteriores | No |

## Reportar una vulnerabilidad

No publiques detalles explotables en una incidencia pública. Envía el reporte a `chrisalvir01@gmail.com` con:

- versión de Argus y Home Assistant;
- impacto y pasos mínimos de reproducción;
- registros redactados;
- mitigación propuesta, si existe.

No incluyas PIN, tokens, direcciones privadas, imágenes del hogar ni respaldos completos.

## Modelo de seguridad

- La configuración administrativa requiere una sesión administradora de Home Assistant.
- Los PIN se almacenan mediante `scrypt` con salt aleatorio.
- Argus no sustituye un sistema de alarma certificado ni garantiza comunicación con servicios de emergencia.
- Los archivos servidos desde `/local` no son privados. No almacenes allí contenido sensible.
