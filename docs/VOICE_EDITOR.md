# Personalizar la voz sin plantillas

En Modos / SOS → Voz de Argus → Mensajes generales de voz:

1. Abre el aviso que quieras cambiar. Su título indica cuándo se reproduce.
2. Desmarca «Usar mensaje predeterminado» y escribe una frase normal.
3. Activa «Añadir información de sensores a mi frase».
4. Elige todas las zonas del modo o marca las zonas que te interesan.
5. Marca qué información se debe anunciar: abiertos/activos ahora, cerrados/inactivos ahora, sin conexión, batería baja o sensores que acaban de abrirse/cerrarse en ese evento.
6. Guarda la voz. Seleccionar filtros no modifica el armado, las sirenas ni las reglas de alarma.

Los filtros se combinan: cada sensor que cumpla uno o varios se cuenta una sola vez. Las cantidades de zonas se calculan por sus identificadores, aunque se repita un número de zona. Se usan los estados que Home Assistant tiene al preparar el mensaje; no se hace una consulta física directa al sensor. Los estados desconocidos o sin conexión nunca se convierten en cerrados.

Por ejemplo, con «Atención, revisa lo siguiente», tres zonas seleccionadas y filtros abierto/sin conexión, Argus añade solo los sensores de esas zonas y del modo correspondiente que cumplan esas condiciones. Los sensores cerrados quedan fuera. En un aviso de cierre, «se acaba de cerrar» se limita a los cambios recibidos en ese evento; «cerrados ahora» describe el estado actual. Estos filtros no crean avisos nuevos ni vigilancia adicional de batería: añaden información cuando se produce el evento indicado por el título.

Si no hay zonas activas y está seleccionado «Todas», se utilizan los sensores del modo, sin inventar un conteo de zonas. La batería se anuncia cuando Home Assistant expone battery_level/battery o battery_low en los atributos del sensor. No se adivinan porcentajes ni asociaciones con otras entidades de batería.

Sin estados seleccionados no se añade una lista de sensores. En los avisos personalizados, Argus añade el modo del evento cuando corresponde y la causa confirmada de una alarma. El desarmado añade el modo anterior y el autor/origen conocido. Sin coincidencias, se indica que no hay sensores que coincidan con los filtros de ese aviso; esto no significa que todo el hogar esté seguro.

Las configuraciones anteriores conservan su comportamiento hasta que se editan. Los textos con variables antiguas se mantienen para compatibilidad; al adoptar el editor sencillo deben sustituirse por una frase normal. Las reglas nuevas se guardan por aviso en voice_message_rules y solo pueden modificarlas administradores autorizados de Argus. Volver a «Usar mensaje predeterminado» retira la regla de ese aviso al guardar.

Validación local: 11 pruebas nuevas de filtros/runtime y validación; 12 regresiones del runtime de voz; 3 pruebas de migración; 3 pruebas de desarmado; 69 pruebas frontend, TypeScript y build. La validación física de TTS y la revisión visual del editor en HA siguen pendientes. Sin publicación.


## Identidad y origen de desarmado

El perfil solo se atribuye cuando el comando Argus autenticado y la entidad coinciden con el contexto de la llamada. El registro temporal se elimina al finalizar el servicio. Para HomeKit se correlaciona el evento homekit_state_change de HA con ese mismo contexto y entidad; el registro caduca a los30segundos. HomeKit no entrega en este evento el nombre del miembro de Apple Casa: el aviso dice origen HomeKit y persona no identificada. Una cuenta externa de HA se presenta como cuenta de HA, sin asumir que identifica a una persona. Un origen desconocido se mantiene desconocido. El aviso solo se emite después de confirmar el desarmado, nunca si fue rechazado.

Validación adicional local: 8 pruebas de identidad/desarmado, 3 de adaptador HomeKit/contexto, 11 de filtros/runtime y 12 de regresión de voz. La atribución real de HomeKit y la reproducción física requieren prueba en la instancia del usuario.

## Separación de avisos y AirPlay — v3.7.3

La aceptación de tts.speak no confirma que el audio haya terminado. La cola mantiene el bloqueo por reproductor durante una separación conservadora calculada según el mensaje; si detecta contenido nuevo y duración/posición de reproducción, amplía esa espera. La música que ya sonaba no aporta la duración del aviso. La espera tiene límite y no acredita entrega física. Los reproductores continúan recibiendo el aviso en paralelo.

El timeout de síntesis/entrega al servicio pasa de15 a60segundos. Incluso si una llamada falla o agota el timeout, se respeta separación para evitar pisar una entrega parcial; la cancelación del trabajo permite liberar recursos. Este ajuste puede retrasar el aviso siguiente cuando el reproductor no proporciona buena información de reproducción.

Pruebas con reloj virtual: dos avisos consecutivos no se envían juntos tras la aceptación del servicio; duración nueva amplía el intervalo; música previa no introduce una espera falsa; posición inválida no prolonga la espera indefinidamente. La reproducción física en AirPlay y otros altavoces continúa pendiente. Corrección incluida en v3.7.3.
