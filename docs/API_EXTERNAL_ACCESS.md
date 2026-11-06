# API existente y acceso desde otro sistema

Argus ya expone comandos reales mediante el WebSocket de Home Assistant:
`ws://127.0.0.1:8123/api/websocket` en el laboratorio, o `wss://<HA>/api/websocket`
si la instalación utiliza TLS. El panel visual sigue estando en `/argus`.

Una aplicación externa debe completar la autenticación de HA con un token de su
usuario autorizado. Después utiliza el mismo flujo de perfiles de Argus:
`argus/login_bootstrap`, `argus/select_profile` y, cuando corresponda, el PIN.
La identidad de HA y los permisos/sesión de Argus se comprueban en el servidor.
No se ha creado un token nuevo ni un endpoint público sin autenticación.

Comandos revisados en el código local:

| Comando | Uso |
| --- | --- |
| `argus/dashboard` | Estado, instancias y configuración serializada con campos sensibles redactados; exige view_status. |
| `argus/get_zones` / `argus/save_zones` | Configuración de zonas; administrar requiere permiso de administrador. |
| `argus/get_voice_config` / `argus/save_voice_config` | Configuración general de TTS; acceso administrativo. |
| `argus/perform_alarm_action` | Armado, desarmado, SOS y detener SOS, con sus permisos y PIN correspondientes. |
| `argus/save_ui` | Ajustes admitidos por su esquema, para administradores. |
| `argus/subscribe_walk_test` | Sesiones de verificación autorizadas. |

Ejemplo de consulta después de autenticar HA y seleccionar un perfil autorizado:

```json
{"id": 10, "type": "argus/dashboard", "entry_id": "<instancia>"}
```

El estado en vivo también puede observarse mediante los eventos de HA de las
entidades. La página gráfica necesita sesión de HA y las comprobaciones de Argus;
el API no convierte automáticamente esa página en un iframe público.

Para ofrecer una API externa estable como producto falta acordar su alcance,
versionar el contrato, documentar los esquemas de cada comando y realizar una
prueba con el cliente externo concreto y una cuenta de permisos limitados.
Una fachada REST sería una ampliación opcional; no es necesaria para un cliente
WebSocket. No se afirma haber probado un sistema externo en esta tarea.
