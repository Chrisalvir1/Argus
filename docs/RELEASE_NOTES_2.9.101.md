# Argus 2.9.101

- El editor ya no muestra S/M/L/XL ni flechas para mover tarjetas. Se arrastran desde su encabezado; los bordes derecho e inferior ajustan cada eje y una esquina inferior derecha amplia ajusta ambos.
- El tablero usa pasos espaciales pequeños y conserva la proporción del diseño guardado al migrar a `react_layout_v5`.
- Se evita renderizar todo React en cada movimiento; el layout se guarda automáticamente al terminar cada gesto. La edición se inicia manteniendo presionada una tarjeta con mouse o tacto y termina al tocar fuera de la cuadrícula o pulsar Escape; se eliminan los botones «Editar tablero» y «Listo».
- Se conserva la corrección de repintados duplicados del Historial en vista móvil. El núcleo aprobado no se modifica.

Validación: TypeScript sin errores, 52/52 pruebas Vitest y 8 pruebas de contrato Python aprobadas (una prueba legacy omitida).
