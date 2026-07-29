# Arquitectura de Argus 1.7

## Principios

1. **Home Assistant es la frontera de autorización.** Las operaciones administrativas requieren usuario administrador.
2. **Las credenciales nunca regresan al frontend.** El navegador recibe estados booleanos, no hashes.
3. **El estado operativo no forma parte de respaldos portátiles.** Reinicios y restauraciones no deben reactivar estados transitorios.
4. **Los medios son privados por defecto.** Nuevas cargas viven bajo `.storage`, con URL firmada.
5. **Una responsabilidad por módulo.** Registro, seguridad, auditoría y medios se extienden sin modificar el panel monolítico.

## Backend

| Módulo | Responsabilidad |
|---|---|
| `__init__.py` | Ciclo de vida y composición |
| `panel.py` | Registro del panel y recursos estáticos |
| `media.py` | Almacenamiento privado, firmas y vistas HTTP |
| `media_websocket.py` | Compatibilidad de clientes WebSocket anteriores |
| `security.py` | Política, hash, verificación y rate limiting |
| `storage.py` | Configuración, runtime y auditoría atómicos |
| `websocket_api.py` | Contrato administrativo del panel |
| `alarm_control_panel.py` | Máquina de estados y servicios de alarma |

## Frontend

`argus-bootstrap.js` carga el elemento histórico y aplica clientes pequeños:

- `security-client.js`
- `audit-client.js`
- `media-client.js`

Esto permite seguir separando vistas sin una reescritura riesgosa de 380 KB en una sola entrega.

## Medios firmados

1. Una persona administradora sube mediante `/api/argus/upload`.
2. El servidor valida extensión y tamaño.
3. El contenido se escribe atómicamente en `.storage/argus_media`.
4. La respuesta contiene una URL con firma HMAC.
5. La vista de contenido verifica firma, ruta y extensión antes de servir.
6. Listar y eliminar requieren autenticación administradora.

Las URL firmadas son secretos de acceso. No deben publicarse fuera del hogar.
