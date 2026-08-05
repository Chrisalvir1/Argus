# Argus Home Hub v2.0.33

Nueva arquitectura para el acomodo editable del dashboard de Argus.

## Layout editable tipo iOS
- Modo explícito **Editar tablero / Listo**.
- Movimiento únicamente desde el handle del widget.
- Resize desde la esquina inferior derecha con ajuste final S, M, L o XL.
- Placeholder visible, animaciones suaves y soporte para movimiento reducido.
- Sin compactación automática, superposición ni empuje agresivo entre widgets.
- Las colisiones restauran la última posición válida.

## Responsive y persistencia
- Layouts independientes para escritorio, tablet y móvil mediante `lg`, `md`, `sm`, `xs` y `xxs`.
- Persistencia versionada por usuario y dashboard.
- Ocultar, restaurar y restablecer widgets sin borrar configuración funcional.
- Los controles críticos de alarma quedan protegidos durante la edición.

## React y TypeScript 7
- Integración del layout con React 18, Vite y React Grid Layout.
- Migración del compilador a TypeScript 7.0.2.
- En la medición de CI, el type-check pasó de 1650 ms a 407 ms, aproximadamente 4.05 veces más rápido.
- El bundle de producción permanece en 926927 bytes porque TypeScript no se incluye en el cliente.

## Validación
- TypeScript estricto, Vitest y Vite build aprobados.
- Contrato Python del adaptador React aprobado.
- Pruebas de regresión, HACS y hassfest aprobados.
- El paquete `argus.zip` se genera directamente desde el tag `v2.0.33`.

> Después de actualizar, reinicia Home Assistant y realiza una recarga completa del navegador sin caché.
