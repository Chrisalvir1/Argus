# Argus 2.9.129

Voz de Argus ahora reúne los reproductores activos con las entidades `media_player` habilitadas que Home Assistant mantiene en su registro. Los reproductores registrados pero temporalmente sin estado también aparecen, y el editor permite actualizar la lista desde Home Assistant.

La selección continúa limitada a cinco destinos simultáneos. Las selecciones ya guardadas se conservan si una entidad queda fuera de línea o deja de aparecer momentáneamente. Google Cast, Alexa Media, AirPlay y JACK se pueden seleccionar cuando la integración correspondiente los expone en Home Assistant como una entidad `media_player`.

Validación: pruebas unitarias de combinación del registro y estados, contratos de WebSocket/editor y compilación del frontend.
