# Argus Home Hub v2.0.47

## Corrección de estabilidad basada en causa raíz

Esta versión sustituye los parches declarativos de las releases anteriores por contratos verificables sobre la máquina de estados, la voz, el almacenamiento del tablero y CI/CD.

### HomeKit y espera de armado

- HomeKit conserva el modo exacto solicitado (Casa, Ausente o Noche) durante el conteo y mientras espera sensores.
- Argus publica el modo objetivo únicamente para mantener sincronizada la interfaz de HomeKit; mientras exista una solicitud pendiente, los cambios de sensores no pueden disparar prematuramente la alarma.
- `Off` cancela cualquier solicitud pendiente antes de validar PIN y emite el evento/anuncio de cancelación.
- Abrir o cerrar sensores durante la espera recalcula la lista de bloqueadores y mantiene disponibles `arming_target`, `arming_blocking_sensors` y los binary sensors de progreso.

### Avisos de voz

- Guardar las opciones de Argus ya no elimina TTS, reproductores ni mensajes que el formulario no haya enviado.
- Si la voz está habilitada pero falta TTS o reproductores, Argus crea una notificación persistente visible.
- Un error al ejecutar TTS crea una notificación por reproductor y conserva el detalle técnico en el registro.
- Los eventos de espera, cancelación, disparo inicial y sensores adicionales siguen disponibles aunque la reproducción TTS falle.

### Tablero React + Vite + TypeScript 7

- El editor React es el único editor de posiciones, tamaños y visibilidad.
- Se retiró del bootstrap el editor legacy v2.0.40, que escribía `widget_layout` y competía con `react_layout_v2`.
- Sus estilos de scroll para Modos y Control de acceso se conservan en un módulo sin almacenamiento ni edición.
- Home Assistant es la fuente autoritativa; LocalStorage queda únicamente como caché de recuperación.
- Los parches de dashboard se fusionan recursiva y atómicamente para preservar claves existentes y futuras.

### CI/CD

- `npm audit` deja de bloquear releases y pasa a una auditoría semanal informativa.
- El build de Vite ya no exige que el bundle sea byte-idéntico al archivo previamente generado; el artefacto contiene el bundle recién compilado.
- Validación y release ejecutan Python, JavaScript, TypeScript 7, Vitest, Vite y validación del ZIP.
- Se añade concurrencia para cancelar validaciones obsoletas y se eliminan logs generados del control de versiones.

## Evidencia requerida antes de publicar

1. Todos los checks de GitHub Actions en verde.
2. Prueba en Home Assistant de Casa, Ausente y Noche con un sensor abierto y otro cerrado.
3. Cancelación desde Apple Home durante espera y durante conteo.
4. Apertura/cierre de varios sensores con evento y voz o notificación de error visible.
5. Editar el tablero React, recargar, reiniciar Home Assistant y confirmar el mismo layout.
6. Instalar el ZIP generado y repetir los puntos 2–5.

Nada se considera resuelto solo porque compile; la release se publica únicamente después de estas evidencias.
