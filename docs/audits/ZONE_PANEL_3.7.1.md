# Auditoría contextual de zonas tras 3.7.1

Hallazgos confirmados en código:
- La consulta global de diagnóstico devolvía sensores de modos sin filtrar por asignación a zonas.
- La corrección de pantalla baja colocaba el área de grid en console-sensors, hijo del contexto, en lugar del contexto completo.
- Cerrar verificación dejaba seleccionada una zona, produciendo una vista diferente a la inicial.
- Contadores de zonas sin acción; selección del cristal abría un selector en vez de sus resultados.
- El fallback SVG dependía de animateTransform y usaba un único color para todas las zonas.

Correcciones locales:
- Filtrar diagnóstico y lista contextual por sensores asignados a zonas; mostrar zona, estado/conexión y batería proporcionada por HA.
- Contadores operables con filtros listas/pendientes; cristal abre diagnóstico y cerrar regresa al estado general.
- Detalle acotado con desplazamiento interno y posicionamiento dentro de la consola activa.
- Giro SVG mediante requestAnimationFrame con limpieza al desmontar, pausa con página oculta y respeto a movimiento reducido. Selección de SVG en pantallas táctiles de hasta600px de alto.
- Arcos SVG coloreados individualmente según estado recibido; desconocidos/no disponibles se muestran con atención roja.

Verificación: TypeScript, suite frontend y build. Las comprobaciones automatizadas no acreditan la visualización física ni el giro en el navegador del Echo Show. No se modifica backend de armado ni persistencia.

Revisión adicional: retiradas las uniones restantes con sensores de modos en estado desarmado/diagnóstico, entrada Verificar con alcance limpio y diagnóstico directo, títulos de filtros explícitos y nombres de zona con número/área. Medición portrait acotada aunque el contenedor esté desplazado. TypeScript, 69 pruebas frontend y compilación pasan. El usuario solicita mantener todos los cambios locales, sin commit, push ni tag.
