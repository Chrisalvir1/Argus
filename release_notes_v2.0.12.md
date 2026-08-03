# Argus v2.0.12 — UI Fullscreen & Grid Polish

## 🚀 Mejoras Visuales y Correcciones

- **Fullscreen Shield:** El escudo central (shield) ha sido ampliado y ahora es responsive en dispositivos de escritorio y móviles, sin tapar otros controles.
- **Artefactos Visuales:** Se eliminaron las sombras cortadas detrás de la lista de sensores usando técnicas de `contain` sin acumulaciones problemáticas de blur.
- **HUD Liquid Glass:** La barra gris continua en la cabecera ha desaparecido en favor de elementos independientes con bordes "Liquid Glass" (hogar/clima, reloj, lecturas adicionales).
- **Indicador de Conexión Reactivo:** El estado de la conexión ahora está exactamente centrado sobre el escudo. Además, es reactivo: al perder la conexión de Home Assistant, cambia a un indicador naranja ("Argus desconectado · HA sin conexión") en tiempo real sin tener que recargar la página.
- **Sensores Adaptables:** La lista de sensores ahora soporta un número elevado de entidades generando scroll vertical seguro, sin solapamientos, garantizando espacio vertical estable.
- **Grid estilo iOS:** Mejoras en la cuadrícula de widgets; soporta flujo denso con tamaños S, M, L y XL, colocando correctamente cuatro widgets "S" en una sola fila.
- **Pruebas de Regresión Automáticas:** Pruebas añadidas para asegurar el mantenimiento del Grid y Fullscreen UI en el futuro.
