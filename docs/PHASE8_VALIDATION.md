# Fase 8 — validación local 2.9.150

Chrome y Home Assistant aislado en loopback confirmaron deslizamiento SOS completo, rechazo de gestos parciales y verticales, confirmación por toque con foco en Cancelar, cancelación sin envío y una única activación tras confirmar. Un marcador simulado consumió una única acción tel voluntaria. La cancelación no invocó el marcador.

El backend real de laboratorio confirmó independencia de SOS en En Casa, Ausente y Noche, y conservación de la intrusión al detener SOS. Salidas físicas ausentes.

PIN contextual y modal comprobados en Chrome mediante el teclado existente. Foco inicial, Escape y retorno al control de origen en escritorio y tamaños compactos. El escenario de callbacks controlados complementa las pruebas backend del PIN.

Correcciones de esta ronda: foco inicial y retorno en la confirmación contextual de llamada, Escape y semántica de grupo. La confirmación general respeta movimiento reducido.

Safari nativo fue inspeccionado mediante accesibilidad. El usuario cambió la pestaña activa a la instancia operativa durante la navegación. No se ejecutaron acciones de prueba en esa instancia. Tab, Opción+Tab, Escape y retorno del PIN en Safari quedan pendientes.

Verificaciones finales: TypeScript y build, 17 pruebas frontend dirigidas y cuatro backend críticas aprobadas. No equivalen a una ejecución de todas las suites. Las verificaciones táctiles y de lector de pantalla físicos quedan pendientes.

## Árbol funcional pendiente de consolidación

El checkpoint e1ac497 registra metadatos. Los siguientes cambios funcionales y bundles permanecen en el árbol de trabajo, junto con cambios de fases anteriores. No se realizó otro commit parcial.

```text
 M .python-version
 M custom_components/argus/__init__.py
 M custom_components/argus/alarm_control_panel.py
 M custom_components/argus/arming_state_machine.py
 M custom_components/argus/arming_transition_runtime.py
 M custom_components/argus/arming_voice.py
 M custom_components/argus/config_flow.py
 M custom_components/argus/const.py
 M custom_components/argus/core/panic.py
 M custom_components/argus/core/walk_test.py
 M custom_components/argus/dashboard_merge.py
 M custom_components/argus/i18n.py
 M custom_components/argus/output_profiles.py
 M custom_components/argus/panel.py
 M custom_components/argus/sensor_state_runtime.py
 M custom_components/argus/storage.py
 M custom_components/argus/switch.py
 M custom_components/argus/translations/en.json
 M custom_components/argus/translations/es.json
 M custom_components/argus/trigger_voice.py
 M custom_components/argus/websocket_api.py
 M custom_components/argus/www/react-dist/argus-frontend.js
 M package-lock.json
 M package.json
 M pyproject.toml
 M src/app/index.ts
 M src/core/home-assistant.ts
 M src/core/websocket.ts
 M src/features/dashboard/ArgusDashboard.tsx
 M src/features/dashboard/components/ConsoleBalance.css
 M src/features/dashboard/components/ConsoleGlass.css
 M src/features/dashboard/components/SecurityConsole.css
 M src/features/dashboard/components/SecurityConsole.tsx
 M src/features/dashboard/components/SecurityConsoleRoot.tsx
 M src/features/dashboard/components/SecurityEmblem3D.tsx
 M src/features/dashboard/components/SecurityShield.tsx
 M src/features/dashboard/components/index.ts
 M src/features/dashboard/index.tsx
 M src/features/dashboard/layout.test.ts
 M src/features/dashboard/layout.ts
 M src/features/dashboard/style.css
 M src/features/dashboard/types.ts
 M src/features/premium/index.ts
 M src/features/render/stable.ts
 M src/features/safety/slide-action.ts
 D src/features/widgets/layouts.ts
 D src/features/widgets/responsive.ts
 M src/legacy/argus-card.ts
 M src/legacy/argus-panel.ts
 D src/legacy/argus-v2040-dashboard-fixes.ts
 D src/legacy/bridge.ts
 M src/legacy/modules.d.ts
 M tests/test_arming_transition_runtime.py
 M tests/test_immediate_arming_voice.py
 M tests/test_react_dashboard_layout_contract.py
 M tests/test_v190_functional.py
 M tests/test_v2039_tts_contract.py
 M tests/test_v2044_trigger_voice_contract.py
 M tests/test_v2044_trigger_voice_runtime.py
 M tests/test_v2047_stability_contract.py
 M tests/test_v2049_sensor_state_runtime.py
 M tests/test_v2050_arming_complete.py
 M tests/test_v2056_arming_runtime.py
 M tests/test_v2082_version_contracts.py
 M tests/test_v210_runtime_contract.py
 M tests/test_v2422_audit_regressions.py
?? custom_components/argus/mode_policy.py
?? custom_components/argus/voice_settings.py
?? custom_components/argus/zones.py
?? src/engine/
?? src/features/dashboard/argus-panel-bridge.ts
?? src/features/dashboard/components/ContextSensorChecks.tsx
?? src/features/dashboard/components/SecurityConsole.context.test.tsx
?? src/features/dashboard/components/SecurityContext.tsx
?? src/features/dashboard/components/SecurityNotice.css
?? src/features/dashboard/components/SecurityNotifications.tsx
?? src/features/dashboard/components/SlideAction.test.ts
?? src/features/dashboard/components/SlideAction.tsx
?? src/features/dashboard/components/SystemStatus.tsx
?? src/features/dashboard/components/crystal-layout.test.ts
?? src/features/dashboard/components/crystal-layout.ts
?? src/features/dashboard/components/mode-palette.ts
?? src/features/dashboard/react-panel-host.tsx
?? src/features/dashboard/zone-context.test.ts
?? src/features/dashboard/zone-context.ts
?? src/features/performance/
?? src/features/profile/
?? src/features/render/stable.test.ts
?? src/legacy/disarm.test.ts
?? tests/test_critical_alarm_runtime.py
?? tests/test_dashboard_merge.py
?? tests/test_mode_change_policy.py
?? tests/test_mode_draft_guard_contract.py
?? tests/test_panel_resource_sync_contract.py
?? tests/test_sos_mode_configuration_contract.py
?? tests/test_supported_languages_contract.py
?? tests/test_tts_simple_configuration_contract.py
?? tests/test_v2113_pin_activity_contract.py
?? tests/test_voice_settings_migration.py
?? tests/test_walk_test_observation.py
?? tests/test_zones.py
?? tests/test_zones_configuration.py
```
