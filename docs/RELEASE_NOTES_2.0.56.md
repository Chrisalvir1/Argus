# Argus Home Hub 2.0.56

## Armado en espera restaurado de extremo a extremo

- Persiste `open_sensors_policy: pending` desde el formulario real y su transporte WebSocket, incluso con configuraciones heredadas.
- Mantiene Argus y HomeKit en `ARMING` mientras existan sensores bloqueantes.
- Muestra inmediatamente el estado visual/SVG de espera y la lista vigente de sensores.
- Anuncia por TTS los sensores abiertos al iniciar.
- Anuncia cada sensor que se cierra y todos los que todavía faltan, incluso cuando queda solo uno.
- Al cerrar el último sensor anuncia la finalización y completa inmediatamente el modo solicitado.
- Conserva el disparo posterior al abrir un sensor monitoreado ya armado.

## Estabilidad y mantenimiento

- Cancela temporizadores del panel al desconectarlo y neutraliza el reloj visual heredado duplicado.
- Elimina workflows de publicación de una sola vez, scripts de parche obsoletos, publicación directa a `main` y checksums rastreados.
- Retira una tarjeta TypeScript heredada que no se compilaba ni se distribuía.
- Añade pruebas ejecutables para política frontend/backend, cierre parcial/final, TTS, ciclo de vida y limpieza del repositorio.

## Validación automatizada exigida

La publicación exige Python 3.14, Node 24, TypeScript 7.0.2, Vitest, Vite, HACS, hassfest, ZIP íntegro y SHA-256.

## Límite de certeza

La matriz automatizada valida código, contratos y artefacto. La confirmación final con sensores Aqara, HomeKit y reproductores TTS físicos debe realizarse después de instalar v2.0.56 y reiniciar Home Assistant.
