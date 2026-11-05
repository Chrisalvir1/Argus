# Auditoría de pantalla y rendimiento — 2026-10-14

Implementado en Argus 2.9.70.

## Resultado

- El núcleo sigue requestAnimationFrame sin un corte fijo de 16 ms. Su cadencia depende de la salida del navegador, no de los Hz nominales del hardware.
- Interpolaciones basadas en tiempo; verificadas a 30, 60, 100 y 120 cuadros/s y bajo cambios de cadencia.
- Medición por ventanas de dos segundos: cadencia del percentil 20, callbacks entregados/s, intervalo p95 y tiempo CPU de actualización + submission WebGL. No mide tiempo GPU ni certifica cuadros presentados físicamente.
- Bajo carga sostenida, reducir resolución con histéresis de ocho segundos; recuperar gradualmente. Sin cap de 60 FPS. Pausar fuera del viewport o con documento oculto. En movimiento reducido, dibujar solo ante eventos/cambios.
- Móviles básicos: hints de <=2 núcleos, <=2 GB o ahorro de datos arrancan a .65 de calidad, sin antialias ni transmisión adicional. Hints ausentes no clasifican al dispositivo como débil. Al bajar calidad se elimina blur de controles. Fallback SVG estático si WebGL falta o pierde contexto.
- Modal: contenido React memorizado, commits normales tras el montaje inicial, scroll interno ignorado, reposición coalescida por rAF, origen calculado sin incluir la escala animada, sin backdrop blur en la superficie móvil/escalada. Cierre termina invisible antes del último tamaño pequeño.
- Gama amplia: estilos P3/Rec.2020 condicionados a color-gamut y soporte sintáctico, fallback sRGB antes de esas reglas. Inicializar los estilos también cuando el custom element se conectó antes del bootstrap. Renderer Three en P3 si disponible; sRGB fallback. Esta ruta sigue siendo SDR, no activa salida HDR.
- Eliminar la promoción permanente a capas GPU de todos los botones y el flotado global del módulo premium.

## Verificación

TypeScript sin errores, build Vite correcto y 17 pruebas automatizadas pasan. Pruebas nuevas cubren respuesta independiente de FPS, refresco variable, carga/recuperación y hints de hardware básico.

En el navegador local: móvil 546×715 y escritorio 1280×850. Cadencia observada 60/s en normal y fullscreen; intervalos p95 aproximadamente 16.7–17.7 ms y tiempo CPU de render 0.26–0.54 ms, calidad 1. El navegador no ofreció 120 callbacks/s durante esta sesión: 120 FPS físicos y HDR activo quedan sin verificar. Diálogo móvil de 340 px dentro del viewport y desktop de 320 px; apertura/cierre comprobados, blur del menú desactivado. No se activó SOS ni se hizo ninguna llamada.

## ProMotion y límites

En un Mac compatible, usar ProMotion en Ajustes del Sistema > Pantallas. Safari puede limitar las actualizaciones de página por política/preferencias y energía. WebKit documentó la opción “Prefer Page Rendering Updates near 60fps”; el estado de WKWebView es independiente del de Safari. Argus sigue lo que el navegador entrega y no puede invocar CADisplayLink ni cambiar políticas del sistema. No garantizar 120 FPS ni ausencia de lag en todos los dispositivos.

Fuentes:
- https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame
- https://support.apple.com/en-gb/102297
- https://bugs.webkit.org/show_bug.cgi?id=290671
- https://bugs.webkit.org/show_bug.cgi?id=294338
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/dynamic-range
- https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawingBufferColorSpace
