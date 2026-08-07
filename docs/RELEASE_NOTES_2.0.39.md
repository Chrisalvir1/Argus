# Argus Home Hub v2.0.39

## Aviso de cancelación manual
- Si se pulsa Off durante un armado en espera, Argus anuncia que el armado fue cancelado manualmente.
- Funciona tanto desde Apple Home/HomeKit como desde el panel de Argus, porque ambas rutas usan la misma solicitud de desarmado de Home Assistant.
- El mensaje de cancelación se puede editar en las opciones de la integración.
- Se emite el evento `argus_arming_wait_cancelled` para automatizaciones personalizadas.
