# Release Notes - Argus v2.2.39

## Highlights
- **Reporte y Exportación de Historial (PDF / Texto)**:
  - Se sustituyó el botón genérico JSON por una interfaz de exportación completa (`📄 Exportar`).
  - Selector de rango de fechas ("Desde Fecha" y "Hasta Fecha") para filtrar los eventos de auditoría.
  - Opción de **Imprimir / Guardar en PDF** con diseño profesional para auditoría, membrete oficial `Argus Home Hub - Historial`, fecha y hora de generación, datos del usuario y tabla estructurada.
  - Opción de **Descargar Reporte en Texto (.txt)** estructurado y legible.
  - Opción de descarga de datos forenses JSON.
- **Protección y Registro en Borrado de Historial**:
  - Si hay un PIN maestro configurado, la acción de borrar historial solicita obligatoriamente el PIN maestro para autorizar la operación.
  - Al vaciar el historial, se registra de inmediato en la línea de tiempo forense el evento indicando el nombre exacto del usuario que eliminó el registro.
  - Corrección del botón **Actualizar** en el historial para refrescar visualmente los eventos de inmediato.
- **Mejoras Visuales y Contraste**:
  - Corrección de color de texto a blanco puro (`#ffffff`) y estilo cristalino de alto contraste para el botón/indicador **"Sin PIN activo"**.
  - Corrección de color y contraste para los chips de **Dispositivos de Notificación** seleccionados, haciéndolos nítidos y legibles en cualquier tema.
- **Diseño Balanceado en Acciones SOS**:
  - Rediseño de la pestaña SOS en la configuración de modos para utilizar una cuadrícula de 4 tarjetas balanceadas (Línea de Emergencia, Dispositivos/Actuadores, Señales y Notificaciones), eliminando los espacios vacíos y unificando la estética visual.
