# Pantalla nocturna de Argus

La opción «Modo nocturno» en la cabecera permite activar la visualización nocturna de pantalla completa. Se configura por usuario, panel y navegador; comienza desactivada.

- Selecciona un sensor de iluminación de Home Assistant que reporte lux, o usa un horario local si no hay sensor.
- El umbral de salida es 1,5 veces el umbral de entrada para evitar cambios constantes cerca del límite. Un sensor de lux desconocido/no disponible mantiene la visualización normal.
- Configura un sensor de presencia opcional. Presencia, una alarma disparada o pánico mantienen los colores normales.
- Después del tiempo sin interacción, la visualización se atenúa y se vuelve roja. El primer toque o tecla recupera los colores y no ejecuta un comando.
- Alto contraste impide la atenuación para priorizar legibilidad.

## Dispositivos y brillo

La visualización usa funciones web y puede utilizarse en navegadores de iOS/iPadOS/Android y en clientes Fully Kiosk/Free Kiosk que carguen Argus. No contiene una API nativa específica de esas aplicaciones.

Para controlar el brillo físico, selecciona exclusivamente una entidad `number` de Home Assistant que represente el brillo de ESTA pantalla. Al entrar se solicita el 20% del rango declarado. Al salir se restaura el valor anterior si la lectura no indica un ajuste externo. Si el cliente/integración no expone esa entidad, Argus solo atenúa la interfaz. No se envían comandos para apagar la pantalla.

Argus intenta pedir Screen Wake Lock al activar el modo en pantalla completa o interactuar con la pantalla. El navegador, sistema, ahorro de energía y políticas de la aplicación pueden rechazarlo o revocarlo. En un cliente kiosk también deben configurarse sus opciones nativas de pantalla encendida.

Validación local: Chromium con estados HA simulados. No se validó hardware real ni Safari; soporte de brillo físico y Wake Lock depende del despliegue.
