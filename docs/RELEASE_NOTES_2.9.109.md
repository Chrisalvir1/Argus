# Argus 2.9.109

- Corregir el registro automático de recursos Lovelace: ahora espera a que la colección persistida esté cargada antes de leerla.
- Actualizar la URL del bootstrap y del parche de marca a la versión vigente, y consolidar copias Argus duplicadas en un recurso por archivo.
- Al reiniciar Home Assistant, el panel y las tarjetas cargarán el bundle que coloca Voz de Argus (TTS) en su propio contenedor, independiente de Zonas asignadas y Armado.

Verificación: el runtime local estaba registrado con recursos 2.9.107 aunque el bundle 2.9.108 ya se servía. Se reinició Home Assistant tras actualizar el sincronizador y se comprobó el registro persistido y el bootstrap cargado.
