# Auditoría de núcleo y distribución posterior a 3.0.4

Alcance: diff local sobre cb8ab22, reglas fullscreen, escala WebGL/SVG, cabecera y contenido contextual. Revisión estática; sin Safari/iPhone real ni medición de scroll. No se publica una versión en esta auditoría.

## Hallazgos confirmados

1. Alta — Cascada CSS contradictoria. ConsoleBalance.css contiene reglas de .console-emblem-viewport con `.entry.entry.ios-fullscreen .security-console.security-console` y límites de 220/230/360/440px. El override portrait posterior omite `.security-console.security-console` y tiene menor especificidad aunque incluya !important. Por tanto, `width:100%` no garantiza ocupar el espacio reservado; la escala puede seguir calculándose desde un viewport pequeño.
2. Alta — Adaptación incompleta al contenido. SecurityConsole.tsx calcula data-context-expanded únicamente con isWaiting, verificationOpen y selectedZone. No mide la altura real del contexto ni detecta todas las listas, alertas o errores que pueden crecer. No se garantiza ausencia de scroll.
3. Media — Cabecera con límite físico. Tres columnas max-content dejan el ancho restante al hogar. Si estado y salida más separaciones exceden el ancho, la fila desborda; en hogares largos se trunca texto por las reglas existentes. Hace falta validar los textos largos, traducciones y zoom en anchos pequeños antes de prometer nombre íntegro.
4. Media — Calidad WebGL adaptativa. El renderer mantiene un presupuesto de 4/8 millones de píxeles y un DPR máximo de 2. Ampliar la geometría redibuja la escena, pero no elimina los límites de calidad. No es correcto garantizar calidad idéntica en todo dispositivo. SVG es vectorial, pero no ofrece el mismo volumen/reflejos.
5. Media — Orientación inferida desde el panel. La nueva escala portrait usa width < height del surface, no la orientación del viewport. Un panel horizontal que crece por contenido puede cumplir esa condición y recibir el aumento previsto solo para móvil vertical.
6. Media — Etiquetas SVG pequeñas. El fallback usa fontSize=5 dentro de viewBox 160 y abrevia áreas a diez caracteres. Agrandar el conjunto ayuda, pero no garantiza leer nombres completos. Las etiquetas giran con el rotor; mantener legibilidad requiere validación visual.

## Estado de cambios pendientes

La ampliación de geometría no cambia por sí sola los tamaños CSS de controles. Los ajustes de cabecera y fondo se mantienen locales. No hay cambios backend de armado, identificadores o emparejamientos en este diff.

Las 69 pruebas frontend, TypeScript y build pasaron antes de esta auditoría. No se repiten por añadir únicamente este informe. Esas comprobaciones no demuestran distribución visual, calidad de imagen ni ausencia de scroll.

## Cierre necesario

Consolidar reglas portrait en un único bloque de especificidad coherente; basar orientación en viewport; medir espacio disponible de HUD/controles/contexto sin reducirlos; limitar el diámetro a ese espacio; verificar fallback SVG y WebGL en vertical/horizontal, con textos largos, espera, zonas y movimiento reducido. Comprobar en iPhone/Echo Show antes de declarar el problema resuelto.

## Correcciones locales tras la auditoría

- Se mide el tamaño real de HUD, modos y contexto mediante ResizeObserver para calcular el espacio del emblema, con límites de viewport visual. Se cancelan observadores, listeners y RAF al desmontar.
- El bloque final portrait usa la especificidad completa de las reglas fullscreen y dimensiones CSS medidas, evitando que el límite antiguo del viewport sea el determinante.
- La escala 3D usa orientación real mediante matchMedia. El aspecto y los tamaños de controles conservan sus reglas; el emblema absorbe el espacio disponible.
- En anchos <=420px, hogar y conexión se distribuyen en dos filas, permitiendo envolver nombres largos sin superposición. En pantallas mayores las píldoras conservan ancho ajustado al contenido.
- Las etiquetas SVG aumentan de tamaño y añaden nombre completo en title y aria-label, más selección mediante click/teclado para acceder al contexto de la zona.
- Se mantienen los límites de DPR/píxeles por rendimiento. Esto se documenta como límite de calidad, no como garantía universal de nitidez idéntica.

Verificación: TypeScript, 69 pruebas frontend y build correctos. Pendientes mediciones y prueba visual en Safari iPhone, horizontal/vertical, teclado, nombres largos y Echo Show. Si los controles superan por sí solos el espacio disponible, se conserva un núcleo pequeño y se permite scroll en lugar de ocultar acciones.

## Preparación de v3.0.5 — 2026-11-06

Los cambios descritos se empaquetan en v3.0.5. Se sincronizaron package/lock, manifest, const, cache bust, README, changelog, lista y notas de release. Se recompiló el bundle. TypeScript, 69 pruebas frontend, build y validación de JSON/diff pasan. La auditoría visual en dispositivos sigue pendiente: las pruebas automatizadas no simulan la distribución exacta de Safari iOS ni Fire OS/Echo Show.
