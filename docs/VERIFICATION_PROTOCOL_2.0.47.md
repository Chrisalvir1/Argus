# Protocolo de verificación — Argus 2.0.47

## Principio

Un cambio se considera **verificado** solo si existe evidencia reproducible. Se registran estado inicial, acción, estado final, atributos/eventos y resultado. “Compila” no equivale a “funciona”.

## Matriz mínima de aceptación

### HomeKit

Para Casa, Ausente y Noche:

1. Dejar al menos un sensor del modo abierto.
2. Solicitar el modo desde Apple Home.
3. Confirmar que Apple Home mantiene el modo solicitado.
4. Confirmar en Home Assistant que `arming_target` coincide con el modo solicitado.
5. Confirmar que `arming_waiting_for_sensors` es verdadero y que `arming_blocking_sensors` contiene el sensor.
6. Abrir otro sensor: la alarma no debe entrar en `triggered`; la lista debe crecer.
7. Cerrar sensores uno por uno: la lista y la cantidad deben disminuir.
8. Repetir y pulsar Off: debe quedar `disarmed`, sin sirena y sin solicitud pendiente.

### Disparo y voz

1. Armar completamente cada modo.
2. Abrir un sensor monitoreado.
3. Confirmar `triggered`, `triggered_sensors`, `triggered_sensor_names` y `triggered_sensor_count`.
4. Abrir otro sensor y confirmar incremento y evento adicional.
5. Verificar TTS. Si está incompleto o falla, debe existir notificación persistente; nunca silencio total.

### Tablero React

1. Confirmar que aparece “Editar tablero” del bundle React.
2. Cambiar posición, tamaño y visibilidad.
3. Recargar la página, cerrar/abrir navegador y reiniciar Home Assistant.
4. Confirmar igualdad de `dashboard.react_layout_v2` antes y después.
5. Confirmar que el bootstrap no carga `argus-v2040-dashboard-fixes.js`.
6. Confirmar scroll en Modos y Control de acceso.

### CI y artefacto

- `python -m compileall -q custom_components/argus tests`
- `python -m unittest discover -s tests -v`
- `node --check` para todos los JS de `www/`
- `npx tsc --noEmit`
- `npm test`
- `npm run build`
- ZIP válido, sin `__pycache__`/`.pyc`, con bundle React y versión correcta.

## Doble verificación

- **Pasada A:** rama del PR y artefacto generado por CI.
- **Pasada B:** instalación limpia del artefacto, repetición completa de HomeKit, voz y persistencia del tablero.

La etiqueta `v2.0.47` solo se crea después de ambas pasadas.
