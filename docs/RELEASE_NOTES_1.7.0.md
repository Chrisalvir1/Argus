# Argus Home Hub 1.7.0 — Arquitectura modular

Argus 1.7 separa responsabilidades críticas y migra las cargas nuevas fuera de `/local`.

## Arquitectura

- Nuevo dominio backend `media.py` para almacenamiento, firmas, listado y entrega.
- Adaptador `media_websocket.py` para clientes heredados sin duplicar lógica de archivos.
- `panel.py` queda dedicado al registro del frontend.
- Bootstrap frontend reducido a composición de módulos.
- Clientes independientes para seguridad, auditoría y medios.

## Medios privados

- Las cargas nuevas se guardan en `/config/.storage/argus_media`.
- Los nombres se generan con UUID.
- Las URL incluyen una firma HMAC persistente y no aceptan alteraciones.
- El contenido no se publica mediante `/local`.
- Listar, cargar y borrar exige una sesión administradora.
- La entrega valida firma, extensión y confinamiento de ruta.
- Se añaden cabeceras `nosniff` y CSP.
- Los fondos históricos en `/local` no se eliminan automáticamente para evitar romper configuraciones existentes; al reemplazarlos se usa el almacenamiento nuevo.

## Frontend

- `security-client.js`: actualización segura del PIN.
- `audit-client.js`: registro con actor controlado por backend.
- `media-client.js`: listado y borrado autenticados.
- `argus-bootstrap.js`: composición explícita de módulos.

## Compatibilidad

- Los comandos WebSocket de medios antiguos se redirigen al nuevo almacenamiento.
- No se cambia la versión del ConfigFlow ni el formato del almacenamiento principal.
- La versión mínima continúa siendo Home Assistant 2024.7.
