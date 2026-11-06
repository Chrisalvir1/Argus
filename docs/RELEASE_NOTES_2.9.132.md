# Argus 2.9.132

La compactación vertical estándar devolvía el widget arrastrado hacia arriba al soltarlo, incluso si se quería colocar abajo. El nuevo compactor conserva el widget movido en la posición elegida y reacomoda los demás alrededor, sin solapamientos.

Validación: prueba de regresión para arrastre descendente, contratos del layout y compilación Vite.
