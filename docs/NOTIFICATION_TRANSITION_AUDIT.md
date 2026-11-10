# Avisos repetidos y recuperación: correcciones sobre Argus v3.7.6

Base f90775f. Trabajo local en `fix/notification-transitions`, sin publicación.

- Las órdenes de desarmado repetidas o concurrentes no vuelven a emitir efectos normales. La coacción conserva su aviso de seguridad.
- Cada transición invalida las salidas pendientes anteriores. Las tareas de armado/desarmado comprueban vigencia después de operaciones asíncronas; los envíos móviles pendientes comprueban vigencia antes de llamar al servicio.
- El TTS pendiente comprueba revisión, estado aplicable y antigüedad máxima de 30 segundos al obtener el altavoz. Se conserva la espera de reproducción para evitar cortar las frases. Esto no retira una notificación ya entregada ni garantiza interrumpir audio aceptado por un dispositivo externo.
- Los comandos MQTT retenidos no se ejecutan al reconectar. Los publicadores deben enviar órdenes nuevas sin retain.
- Recuperar presencia desde unknown/unavailable no equivale a llegar o salir; se cancelan armados pendientes asociados a la recuperación.
- El horario local sigue recuperando transiciones vencidas; un armado recuperado se identifica como tal. No se deshabilita la recuperación de seguridad.
- El nombre del perfil Argus y el contexto HA se capturan para evitar atribución a una llamada posterior. HomeKit se identifica por el evento oficial correlacionado; Apple Casa no proporciona necesariamente la persona. Un origen desconocido se declara desconocido, en lugar de atribuirlo a Argus. Un contexto padre sin usuario se describe como automatización HA sin inventar su nombre.

Verificación: 24 pruebas aisladas de comportamiento y transiciones; cuatro pruebas críticas con Home Assistant 2026.11.1; tres comprobaciones de importación/diagnóstico con ese Core. El test que exige exactamente Core 2026.11.0 se excluye deliberadamente del recorrido 2026.11.1. Python de la comprobación: 3.14.7. Compilación sintáctica y diff check. Sin acceso a la configuración, los logs ni los altavoces físicos del usuario; no se atribuye retrospectivamente un aviso específico de su captura a un origen no observado.
