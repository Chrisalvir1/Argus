# Argus 2.9.133

Corrección definitiva del snapback en el editor del tablero. La versión anterior pasaba un compactor personalizado a la API heredada de React Grid Layout, que no reconoce esa propiedad y seguía aplicando su compactación vertical incorporada. Ahora el arrastre conserva libremente la celda seleccionada y, al soltar, Argus compacta los demás widgets alrededor de esa posición.

Validación: regresión de arrastre descendente, contratos de layout y pruebas del frontend.
