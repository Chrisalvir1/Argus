# Argus Home Hub 3.7.7

10 de noviembre de 2026

Corrige avisos repetidos y atrasados de armado, desarmado y alarma. Argus ignora órdenes de desarmado redundantes, invalida salidas pendientes cuando cambia el estado y descarta TTS antiguo antes de entregarlo al reproductor. Un aviso de armado o disparo que ya no coincide con el estado actual se descarta. Las frases vigentes mantienen la espera de reproducción para evitar que se corten.

Al recuperar Home Assistant, Argus no ejecuta comandos MQTT retenidos ni trata la recuperación `unknown/unavailable` de una persona como llegada o salida. Los horarios locales continúan activos; si el panel recupera un armado vencido durante el apagón, el aviso identifica que vino de un horario recuperado tras reiniciar.

Argus conserva el perfil que inició una acción y el contexto de Home Assistant cuando están disponibles. HomeKit se reconoce mediante su evento oficial; Apple Casa puede no proporcionar la identidad de la persona. Argus declara el origen desconocido cuando no cuenta con evidencia suficiente.

## Verificación

- 25 pruebas específicas de transiciones, salida móvil y TTS.
- 4 pruebas críticas de alarma y 3 pruebas de compatibilidad/diagnóstico con Home Assistant Core 2026.11.1.
- Compilación sintáctica de Python y `git diff --check`.

No se ha conectado la instalación del usuario ni se han probado iPhone, Ecobee o altavoces físicos. Esta versión no puede identificar retrospectivamente quién produjo los avisos previos sin los registros de Home Assistant. No elimina notificaciones ya entregadas ni puede detener audio que un reproductor externo ya aceptó.
