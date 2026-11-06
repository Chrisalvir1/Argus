# Argus 3.0.4

La edición de zonas muestra los sensores configurados en todos los modos de la alarma y los permite asignar directamente, sin un paso de importación. Al desmarcar sensores, mantiene búsqueda, foco y desplazamiento del editor. Incluye los ajustes de núcleo sin WebGL, HUD, nombres de modo y cristales en pantallas móviles.

Se incluye YAML opcional detallado en `examples/configuration.yaml`; la edición visual de voz sigue siendo la ruta recomendada. El ejemplo solo debe copiarse bajo `configuration.yaml` tras cambiar los IDs por entidades reales.

Validación local: build, TypeScript y pruebas frontend. Validación física pendiente para iPhone, tablet y Echo Show 5; TTS se verifica con los motores/reproductores reales del usuario.

Actualiza la integración existente y reinicia Home Assistant. No se requiere volver a emparejar accesorios. Para revertir, restaura la integración a v3.0.3 y la copia de seguridad si cambiaste opciones.
