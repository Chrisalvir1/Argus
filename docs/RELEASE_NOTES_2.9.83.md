# Argus 2.9.83

## Zonas y sensores

El panel Modos reemplaza la lista antigua de sensores de intrusión y su lista de omisiones con un editor de hasta diez zonas. Cada zona tiene número consecutivo libre, nombre, área, sensores asignados, modos habilitados y condición/retardo por sensor. Una entidad solo puede pertenecer a una zona. Los cambios se guardan en una instancia y proyectan las asignaciones a su configuración de modos.

Los sensores de configuraciones anteriores siguen funcionando mientras no se asignen a una zona. Al agregar un sensor antiguo, Argus conserva su retardo de entrada configurado en ese modo. La condición y el retardo guardados en una zona se comparten entre los modos que esa zona tenga habilitados. Los retardos antiguos por modo diferentes deben revisarse manualmente después de migrar: el modelo de zona tiene un único retardo por sensor.

El modo de armado en espera hasta cerrar sensores reemplaza la elección entre bloquear o esperar. Las áreas son nombres editables y reutilizables sugeridos por las zonas existentes; Home Assistant mantiene el área física independiente.

## Avisos de voz

La configuración de TTS ahora está disponible desde Modos para elegir motor, reproductores, mensajes y activación. Los valores definidos en YAML aparecen como administrados y no se pueden sobrescribir desde la interfaz. Los cambios de interfaz se guardan en el almacenamiento de Argus por instancia.

## Validación

Las pruebas de esta versión no activan sensores físicos, sirenas ni SOS. La respuesta real de un motor TTS depende de sus entidades y reproductores configurados en Home Assistant. Tras instalar el paquete, Home Assistant debe cargar la versión nueva para registrar los comandos WebSocket y el código del panel.
