# Argus 3.0: zonas y pantalla vertical

Correcciones en `codex/audit-v3-zones-portrait`:

- El editor detecta sensores anteriores tanto en modos globales como por entidad.
- Al editar una zona se pueden importar los sensores del modo seleccionado a un borrador. No se guarda automáticamente; se conservan condiciones y retardos mediante el conversor existente. Los sensores asignados a otras zonas se excluyen de la importación.
- Los sensores anteriores sin zona siguen visibles en el resumen del modo. Su protección no desaparece al habilitar zonas.
- La cabecera y el núcleo usan filas independientes en pantalla completa vertical. La verificación de zonas abre una capa desplazable.
- Sin zonas activas no se ofrece verificar zonas. Con zonas, el núcleo permite seleccionar una; en espera de armado no se vuelca la lista completa hasta seleccionar una zona.
- El acceso a verificación se destaca en naranja cuando hay zonas pendientes.
- Escudo de cristal se retira del selector. Las preferencias antiguas se normalizan a Núcleo.
- El editor de voz se abre desplegado y consulta la entrada de la alarma seleccionada.

El backend existente conserva las omisiones por ciclo y exige un sensor disponible y en reposo para reincorporarlo. Estos cambios no modifican las decisiones de armado.

Pendiente: validación visual física en Safari/iPhone (incluido alto contraste, espera de armado y teclado), prueba de batería agotada/repuesta, publicación y reproducción TTS real. La causa de una notificación TTS concreta requiere su error de Home Assistant; una reproducción exitosa no prueba que todas las solicitudes hayan sido exitosas.

Limitación de migración: cada zona comparte condiciones entre sus modos. Si un mismo sensor tenía condiciones diferentes por modo, revisar antes de guardar; la importación utiliza el modo seleccionado. No se debe agrupar automáticamente sin esa revisión.
