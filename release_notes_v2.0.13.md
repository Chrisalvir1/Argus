# Argus Home Hub v2.0.13 — Complete UI & Settings Audit

## 🚀 Mejoras y Correcciones Completas

- **Persistencia Robusta de Widgets:** El orden, tamaño (S/M/L/XL) y visibilidad de los widgets ahora persisten sin errores ni reseteos. Se eliminó la condición de carrera al editar el grid gracias a un guardado secuencial confiable con la versión `argus-widgets-v2`.
- **Formato de Hora Personalizable:** Añadido soporte real y persistente para seleccionar Automático, 12 horas (con AM/PM) o 24 horas. Los textos se adaptan perfectamente a los distintos idiomas.
- **Transparencia Liquid Glass Refinada:** Se mejoró sustancialmente la legibilidad reduciendo el exceso de "blur". Los fondos ahora son limpios con un look cristalino moderno.
- **Redondeo y Esquinas Uniformes:** La vista principal y móvil unificaron el radio de esquina (`~32px` escritorio, `~26px` móvil), aplicando el redondeo a imágenes de clima de fondo y custom backgrounds por igual sin bordes cuadrados expuestos.
- **Escudo Animado (Shield SVG):** Transición elegante de 520ms al cambiar estados. Se resolvió el cambio brusco; el escudo anterior desaparece suavemente mientras entra el nuevo con una combinación de escala y opacidad.
- **Salida Fullscreen Optimizada:** Ya no existe un doble renderizado, saltos o reconstrucción del DOM al salir de modo pantalla completa.
- **Alineación Simétrica:** Balance visual en 3 columnas estrictas, incluyendo la alineación perfecta del indicador superior "Conectado" sobre el escudo.
- **Diseño Móvil Mejorado:** Todo el flujo (HUD, Escudo, Modos y Sensores) es 100% navegable verticalmente sin truncamiento ni contenido fuera de pantalla.
