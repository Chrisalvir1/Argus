# Release Notes - Argus v2.2.46

## Highlights
- **Eliminación del HUD Fantasma Duplicado en la Vista Web**:
  - Se eliminó el bloque HTML heredado `<div class="hud">` que flotaba de forma absoluta en la esquina superior derecha (`top: 20px; right: 24px`).
  - La píldora de ubicación `🏡 Hogar` se muestra únicamente en su posición designada a la izquierda del `.console-hud`, dejando `SISTEMA DESARMADO` limpio y sin elementos superpuestos en la esquina superior derecha.
- **Simetría y Claridad Visual en Web y Móvil**:
  - Encabezado de 3 elementos perfectamente balanceado: Izquierda = `🏡 Hogar`, Centro = `● Conectado` (directamente sobre el escudo), Derecha = `SISTEMA ESTADO`.
