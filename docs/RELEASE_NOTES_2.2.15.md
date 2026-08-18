# Release Notes - Argus v2.2.15

## Highlights

1. **Unified Single "Guardar" Button in Más Ajustes / SOS:**
   - Removed the duplicate lower "Guardar" button in the SOS Actions block.
   - The top "Guardar" button next to "✏️ Editar Nombre" is the single source of truth for saving all personalizations and SOS configuration changes.

2. **Clean Modes Navigation with Jelly Bounce Modal:**
   - Removed the redundant "⚙️ Configurar" button in the Modes panel header.
   - Clicking any mode tab directly opens the dedicated configuration modal with the elastic jelly water-drop bounce animation.
   - In XS size, `#w-modes` stays ultra-compact as a clean mode bar without clipping tab icons or labels.

3. **Full XS Support in React Dashboard:**
   - Added the `XS` size button to the React Dashboard widget menu (`[XS] [S] [M] [L] [XL]`).
   - Sizing menu formatted into a 5-column grid layout for seamless widget scaling.

4. **Fixed SOS Modal Backdrop Styling:**
   - Fully restored styles for `.ios-confirm-backdrop` and `.ios-confirm-card` with liquid glass blur and default hidden state (`display: none`), preventing any unstyled modal text from appearing at the top of the viewport.
