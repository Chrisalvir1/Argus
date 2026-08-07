# Argus Home Hub v2.0.48

> Documento de release y traspaso técnico para personas u otras IA. Actualizado el 2026-08-07.

## Estado verificable actual

- **Versión publicada:** `v2.0.48`.
- **Commit inmutable del tag y del ZIP:** `643299e0f19e9a7054077a8b57b3580628595293`.
- **Release:** <https://github.com/Chrisalvir1/Argus/releases/tag/v2.0.48>.
- **ZIP instalable:** <https://github.com/Chrisalvir1/Argus/releases/download/v2.0.48/argus.zip>.
- **SHA-256 del ZIP:** `0188d070f4e1562b4ce49a1a04544f9b1ddd956b096b1e5f562298f622b34ae5`.
- **Rama de trabajo:** `fix/v2.0.47-stability-root-causes`.
- **PR:** [#38](https://github.com/Chrisalvir1/Argus/pull/38), mantenido como borrador.
- **Estado automático:** Python, pruebas de regresión, JavaScript, React, TypeScript 7, Vitest, Vite, ZIP, HACS y hassfest están en verde.
- **Estado físico:** la corrección HomeKit de `v2.0.48` todavía necesita validación real en Home Assistant y Apple Home.
- **Conclusión correcta:** implementación y CI completadas; funcionamiento físico **no debe declararse resuelto** hasta ejecutar la matriz de aceptación incluida al final.

## Contexto: por qué existe v2.0.48

La prueba física de `v2.0.47` invalidó su estrategia HomeKit. Cuando Argus esperaba sensores abiertos, `safety_runtime.py::reliable_arm()` publicaba el modo objetivo (`armed_home`, `armed_away` o `armed_night`) como si fuera el estado actual. Apple Home interpretaba que el sistema ya estaba armado, aunque Argus todavía tuviera una solicitud pendiente.

Consecuencias observadas en `v2.0.47`:

- Apple Home no mostraba una transición real **“Armando…”**.
- El modo solicitado podía verse como armado antes de cerrar los sensores.
- La interfaz no representaba fielmente la máquina de estados interna.

`v2.0.47` queda superada para esta prueba. No se debe reutilizar ni mover su tag.

## Contrato correcto de la máquina de estados

Mientras exista una solicitud de armado pendiente, ya sea durante el conteo o esperando sensores:

1. El estado público de Home Assistant debe ser `arming`.
2. `_arm_request` debe conservar la solicitud pendiente.
3. `_arming_target` y el atributo `arming_target` deben conservar el objetivo exacto:
   - `armed_home` para Casa;
   - `armed_away` para Ausente;
   - `armed_night` para Noche;
   - `armed_vacation` se representa en HomeKit como Ausente.
4. `arming_waiting_for_sensors` debe indicar si Argus espera cierres.
5. `arming_blocking_sensors` debe contener los sensores que aún bloquean el armado.
6. Abrir o cerrar sensores debe recalcular los bloqueadores, pero no puede producir `triggered` mientras `_arm_request` exista.
7. Solo `_async_complete_arming()` puede publicar el estado armado definitivo cuando todos los sensores estén cerrados y termine el conteo.
8. `Off` debe cancelar la solicitud y volver inmediatamente a `disarmed`.

No se debe reintroducir una asignación equivalente a `self._alarm_state = target` durante la espera.

## Adaptación HomeKit de v2.0.48

Home Assistant representa `arming` en HomeKit con:

- CurrentState desarmado (`HK_ALARM_DISARMED`);
- TargetState distinto del CurrentState, lo que permite que Apple Home muestre **“Armando…”**.

El mapeo genérico de Home Assistant usa Ausente como TargetState de `arming`. Argus necesita conservar Casa, Ausente o Noche, por lo que `custom_components/argus/homekit_runtime.py` aplica una corrección limitada a Argus:

- `armed_home` → `HK_ALARM_STAY_ARMED`;
- `armed_away` → `HK_ALARM_AWAY_ARMED`;
- `armed_night` → `HK_ALARM_NIGHT_ARMED`;
- `armed_vacation` → `HK_ALARM_AWAY_ARMED`.

Reglas del adaptador:

- `resolve_argus_arming_target()` resuelve únicamente objetivos válidos.
- El wrapper de `SecuritySystem.async_update_state` es idempotente.
- Siempre ejecuta primero el método original de HomeKit.
- Solo ajusta TargetState cuando el estado es `arming` y la entidad expone `argus_homekit_transition: true`.
- No modifica globalmente `HASS_TO_HOMEKIT_TARGET`.
- No altera otras alarmas ni otros accesorios HomeKit.
- Se instala inmediatamente si HomeKit ya está cargado o mediante el evento `component_loaded`.
- `manifest.json.after_dependencies` incluye `homekit` para garantizar el orden de carga.

## Archivos clave de la corrección

- `custom_components/argus/alarm_control_panel.py`
  - publica `AlarmControlPanelState.ARMING` durante la transición;
  - expone `argus_homekit_transition` y los atributos de progreso.
- `custom_components/argus/safety_runtime.py`
  - ya no publica el objetivo como estado actual durante la espera;
  - mantiene el bloqueo contra disparos prematuros.
- `custom_components/argus/homekit_runtime.py`
  - contiene el adaptador HomeKit limitado a Argus.
- `custom_components/argus/__init__.py`
  - instala el adaptador desde `async_setup()` y `async_setup_entry()`.
- `custom_components/argus/manifest.json`
  - declara `homekit` en `after_dependencies`.
- `tests/test_homekit_transition_runtime.py`
  - verifica resolución de objetivos, alcance limitado e idempotencia.
- `tests/test_v2047_stability_contract.py`
  - protege el contrato `arming` y evita la regresión de publicar `armed_*` prematuramente.

### Nota documental conocida

Puede existir una frase histórica en el docstring de `safety_runtime.py` que describa publicar el objetivo armado durante la transición. Esa frase no representa el comportamiento ejecutable de `v2.0.48`. Si se corrige después del tag, debe tratarse como documentación de la siguiente revisión; no se debe mover el tag publicado.

## Cambios de v2.0.47 que v2.0.48 conserva

### Voz y TTS

- Guardar opciones parciales no elimina TTS, reproductores ni mensajes ausentes del formulario.
- Configuración incompleta o errores TTS generan notificaciones persistentes visibles.
- Los eventos de espera, cancelación, disparo inicial y sensores adicionales continúan disponibles.

### Tablero React + Vite + TypeScript 7

- El único editor autoritativo es Vite + React + TypeScript 7.
- TypeScript 7 compila el editor React a JavaScript para ejecución en Home Assistant.
- La instancia visual activa —escudo, modos y sensores— continúa como Web Component JavaScript.
- El editor legacy `argus-v2040-dashboard-fixes.js` no debe volver a cargarse ni escribir layout.
- `dashboard.react_layout_v2` es la fuente autoritativa del layout.
- LocalStorage es únicamente caché de recuperación.
- Los cambios de dashboard se fusionan recursiva y atómicamente; no se debe reemplazar el objeto `dashboard` completo.

### CI/CD

- Python, JavaScript, TypeScript 7, Vitest, Vite y validación del ZIP son gates obligatorios.
- HACS y hassfest son gates obligatorios.
- `npm audit` es informativo y no bloquea releases.
- Los workflows temporales de alineación y publicación fueron eliminados después de usarse.

## Evidencia automática registrada

### Commit funcional publicado

- `643299e0f19e9a7054077a8b57b3580628595293` — `fix: declare HomeKit runtime dependency ordering`.
- [Run 31220901633](https://github.com/Chrisalvir1/Argus/actions/runs/31220901633): Python, React/TypeScript 7/Vite, ZIP, HACS y hassfest en `success`.

### Segunda pasada y publicación controlada

- [Run 31221028255](https://github.com/Chrisalvir1/Argus/actions/runs/31221028255): segunda pasada completa en verde.
- [Run 31221028341](https://github.com/Chrisalvir1/Argus/actions/runs/31221028341), job `93005433474`: publicación controlada en `success`.
- El workflow de publicación hizo checkout explícito del commit inmutable `643299e0...`, generó el ZIP, verificó HACS/hassfest, creó el tag y publicó los assets.

### Árbol limpio posterior

- `e86684151a2defcdfb2f5f05b841240a7ff46a99` eliminó el workflow temporal de publicación.
- [Run 31221177048](https://github.com/Chrisalvir1/Argus/actions/runs/31221177048): todos los gates obligatorios en verde.
- [Run 31221179939](https://github.com/Chrisalvir1/Argus/actions/runs/31221179939): segunda verificación del árbol limpio, todos los gates obligatorios en verde.
- La auditoría semanal aparece como `skipped` fuera de su horario; es intencional e informativa.

## Matriz física pendiente

Ejecutar después de instalar `v2.0.48` y reiniciar completamente Home Assistant.

### Casa, Ausente y Noche

Para cada modo:

1. Dejar al menos un sensor configurado abierto.
2. Solicitar el modo desde Apple Home.
3. Confirmar que Apple Home muestra **“Armando…”** y conserva el modo solicitado.
4. Confirmar en Home Assistant:
   - estado `arming`;
   - `arming_target` igual al modo solicitado;
   - `arming_waiting_for_sensors: true`;
   - `arming_blocking_sensors` con el sensor abierto;
   - `argus_homekit_transition: true`.
5. Abrir otro sensor y confirmar que:
   - no aparece `triggered`;
   - la lista de bloqueadores crece;
   - se identifica el sensor adicional.
6. Cerrar sensores uno por uno y confirmar que la lista disminuye.
7. Confirmar que solo al cerrar el último sensor y terminar el conteo cambia a `armed_home`, `armed_away` o `armed_night`.
8. Repetir y pulsar `Off` durante la espera: debe quedar `disarmed`, sin sirena y sin solicitud pendiente.
9. Repetir `Off` durante el conteo.

### Voz y disparo real

1. Armar completamente cada modo.
2. Abrir un sensor monitoreado.
3. Confirmar `triggered`, `triggered_sensors`, `triggered_sensor_names` y `triggered_sensor_count`.
4. Abrir otro sensor y confirmar el incremento y el evento adicional.
5. Verificar TTS; si está incompleto o falla, debe aparecer una notificación persistente, nunca silencio total.

### Tablero React

1. Editar posición, tamaño y visibilidad desde el editor React.
2. Recargar el navegador.
3. Cerrar y abrir el navegador.
4. Reiniciar Home Assistant.
5. Confirmar que `dashboard.react_layout_v2` conserva exactamente el layout.
6. Confirmar que el editor legacy no reaparece.

## Reglas para la siguiente persona o IA

1. No declarar el problema físicamente resuelto basándose solo en compilación o CI.
2. No mover ni recrear los tags `v2.0.47` o `v2.0.48`.
3. No fusionar el PR #38 hasta registrar la prueba física completa de `v2.0.48`.
4. Si la prueba física falla y requiere cambios de código, crear una versión nueva —por ejemplo `v2.0.49`— y no alterar el tag publicado.
5. Preservar `arming` como estado actual durante cualquier espera o conteo.
6. Preservar el adaptador HomeKit limitado por `argus_homekit_transition`; nunca cambiar el mapeo global de Home Assistant.
7. Preservar React/Vite/TypeScript 7 como único editor del tablero.
8. Separar siempre tres niveles de evidencia:
   - pruebas estáticas/locales;
   - GitHub Actions/CI;
   - prueba física en Home Assistant, Apple Home y TTS.
9. Al continuar, leer primero este archivo, `docs/VERIFICATION_PROTOCOL_2.0.47.md`, `custom_components/argus/homekit_runtime.py`, `custom_components/argus/alarm_control_panel.py` y `custom_components/argus/safety_runtime.py`.

## Estado de cierre

`v2.0.48` está publicada, sus artefactos son reproducibles y todas las verificaciones automáticas registradas están en verde. La única evidencia necesaria para cerrar y fusionar es la validación física descrita arriba.
