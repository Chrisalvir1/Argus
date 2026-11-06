# Argus 2.9.120

La inspección de estilos computados en Safari mostró que el panel interno de Historial aún aplicaba `backdrop-filter: blur(28px) saturate(1.5)`, pese a los resets CSS anteriores. En vertical, el panel nativo ahora neutraliza en línea su fondo, borde, sombra, desenfoque, filtro y transición; al cambiar a horizontal/escritorio se restaura su estilo normal. La tarjeta React conserva el color Liquid Glass exterior. El layout y las preferencias guardadas no se tocan.
