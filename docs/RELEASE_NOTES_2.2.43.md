# Release Notes - Argus v2.2.43

## Highlights
- **Centrado Absoluto sobre el Escudo y Soporte de Notch / Safe Area**:
  - La píldora de conexión (`● Conectado`) se sitúa exactamente sobre la línea central del escudo en la misma horizontal del HUD superior (`left: 50%; transform: translate(-50%, -50%)`).
  - Márgenes adaptativos para muescas (Notch de MacBook/iPad/tablets con orificio de cámara) con `max(20px, env(safe-area-inset-top, 20px))` para evitar cualquier obstrucción.
- **Botones de Historial de Actividad 100% Funcionales**:
  - Delegación de eventos global resiliente para `🔄 Actualizar`, `📄 Exportar Historial` y `🗑️ Limpiar historial`.
  - Respuestas inmediatas al clic independiente de las recargas del layout o montaje de React.
- **Exportación de Historial con Logo Original de Argus Home Hub**:
  - La plantilla de impresión y PDF incluye el logotipo oficial de Argus (`/api/argus_static/argus_logo.png`) y el encabezado `Argus Home Hub` con diseño corporativo de alta calidad.
