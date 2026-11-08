import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterEach, expect, it, vi } from 'vitest';
import { SecurityConsole } from './SecurityConsole';
import { SecurityContext } from './SecurityContext';
import legacySource from '../../../legacy/argus-panel.ts?raw';
import shieldSource from './SecurityShield.tsx?raw';

afterEach(() => vi.unstubAllGlobals());

function renderContext(admin: boolean, doorState = 'off', zonesEnabled = true, alarmState = 'armed_away', modeSensors = ['binary_sensor.door', 'binary_sensor.window'], windowState = 'off') {
  vi.stubGlobal('document', {});
  const alarm = 'alarm_control_panel.fixture';
  const door = 'binary_sensor.door';
  const window = 'binary_sensor.window';
  const panel = {
    classList: { contains: () => false },
    _dashboard: { entries: [{ entity_id: alarm, entry_id: 'fixture' }] },
    _ui: {
      zones_enabled: zonesEnabled,
      zones: [{ id: 'patio', area: 'Patio', entity_ids: [door, window] }],
      modes: { away: { sensors: modeSensors } },
    },
    _hass: { connected: true, states: {
      [alarm]: { state: alarmState, attributes: { cycle_bypassed_sensors: [window] } },
      [door]: { state: doorState, attributes: { friendly_name: 'Puerta', device_class: 'door', battery_level: 8 } },
      [window]: { state: windowState, attributes: { friendly_name: 'Ventana', device_class: 'window' } },
    } },
    _isAdmin: admin,
    _t: (key: string) => key === 'bypassed_sensor' ? 'OMITIDO' : key,
    _getSensorBattery: (_id: string, entity: { attributes?: { battery_level?: number } }) =>
      entity?.attributes?.battery_level ?? null,
  };
  return renderToStaticMarkup(<SecurityConsole panel={panel} isFullscreen={false}
    onToggleFullscreen={() => {}} onUnlockKiosk={() => {}} />);
}

it('shows low battery and confirmed partial protection without inventing a battery reading', () => {
  const html = renderContext(true);
  expect(html).toContain('Batería baja (8%)');
  expect(html).toContain('Protección parcial: 1 sensor(es) omitido(s) · Patio');
  expect(html).toContain('Ventana: OMITIDO');
  expect(html).not.toMatch(/Ventana: OMITIDO[^"]*Batería/);
  expect(html).toContain('Reincorporar al armado');
});

it('keeps partial protection visible but hides the administrative action for a standard profile', () => {
  const html = renderContext(false);
  expect(html).toContain('Ventana: OMITIDO');
  expect(html).not.toContain('Reincorporar al armado');
});

it('classifies a live open HA contact without an optional panel helper', () => {
  const html = renderContext(false, 'on');
  expect(html).toContain('Zonas que requieren atención: 1.');
  expect(html).toContain('<dt><button type="button" aria-label="Ver listas">Listas</button></dt><dd>0</dd>');
  expect(html).toContain('<dt><button type="button" aria-label="Ver pendientes">Pendientes</button></dt><dd>1</dd>');
});

it('shows that a recovered sensor remains omitted even for a standard profile', () => {
  const html = renderContext(false);
  expect(html).toContain('Sensor recuperado. Sigue omitido en este armado.');
  expect(html).toContain('Protección parcial');
});

// These active values were supported before sensor classification moved to the bridge.
it.each(['recording', 'active', 'abierto', 'activa', 'true', '1', 'tamper', 'vibration'])(
  'preserves contextual pending status for the active HA value %s', state => {
    const html = renderContext(false, state);
    expect(html).toContain('Zonas que requieren atención: 1.');
    expect(html).toContain('<dt><button type="button" aria-label="Ver listas">Listas</button></dt><dd>0</dd>');
    expect(html).toContain('<dt><button type="button" aria-label="Ver pendientes">Pendientes</button></dt><dd>1</dd>');
  },
);


it('uses one accessible contextual zone selector without the diagnostic disclosure', () => {
  const html = renderContext(true);
  expect(html).toContain('aria-label="Zona contextual"');
  expect(html).toContain('<option value="patio">Zona 1 · Patio');
  expect(html).not.toContain('Zona para diagnóstico');
  expect(html.indexOf('Zona contextual')).toBeLessThan(html.indexOf('console-sensors'));
});


it('keeps verification controls in a hidden panel-scoped section until opened', () => {
  const html = renderContext(true);
  const dialogStart = html.indexOf('<section hidden=');
  const dialogEnd = html.indexOf('</section>', dialogStart);
  expect(dialogStart).toBeGreaterThan(0);
  const dialog = html.slice(dialogStart, dialogEnd);
  expect(dialog).toContain('aria-label="Verificar zonas"');
  expect(dialog).toContain('Todas las zonas');
  expect(dialog).toContain('Estado actual');
  expect(dialog).toContain('Prueba física');
  expect(html).not.toContain('<dialog');
  expect(html.slice(0, dialogStart)).not.toContain('Zona contextual');
});


it('replaces contextual results and navigation while verification is open', () => {
  const html = renderToStaticMarkup(<SecurityContext title="Desarmado" focused
    selection={<div>Verificación activa</div>} navigation={<button>Anterior</button>}
    indicators={[{label: 'Zonas', value: 7}]} view="Patio"><div>Detalle anterior</div></SecurityContext>);
  expect(html).toContain('Verificación activa');
  expect(html).toContain('Desarmado');
  expect(html).not.toContain('Detalle anterior');
  expect(html).not.toContain('Anterior');
  expect(html).toContain('context-indicators');
  expect(html).toContain('context-view-body');
});

it('hides zone verification when zones are explicitly disabled', () => {
  const html = renderContext(true, 'off', false);
  expect(html).toMatch(/<button hidden=""[^>]*context-verify-entry/);
});

it('keeps zone verification available when zones are enabled', () => {
  const html = renderContext(true);
  expect(html).not.toMatch(/<button hidden=""[^>]*context-verify-entry/);
});


it('does not show unsolicited sensor rows while disarmed', () => {
  const html = renderContext(true, 'on', true, 'disarmed');
  expect(html).not.toContain('class="context-sensor-row"');
  expect(html).toContain('Verificar zonas');
  expect(html).toContain('aria-label="Zonas activas"');
});

it('keeps enabled zone counts global when a mode has no required sensors', () => {
  const html = renderContext(false, 'off', true, 'armed_away', []);
  expect(html).toContain('<dt><button type="button" aria-label="Ver zonas">Zonas</button></dt><dd>1</dd>');
  expect(html).toContain('<dt><button type="button" aria-label="Ver listas">Listas</button></dt><dd>1</dd>');
});

it('offers a persistent close control alongside the confirmed state', () => {
  const html = renderToStaticMarkup(<SecurityContext title="Armado · Noche" focused closeControl={<button>Cerrar detalle</button>}
    indicators={[{label:'Zonas',value:3}]} selection={<div>Mis sensores</div>} />);
  expect(html).toContain('Armado · Noche');
  expect(html.indexOf('Cerrar detalle')).toBeLessThan(html.indexOf('context-view-body'));
  expect(html).toContain('Mis sensores');
});


it('does not globally hide nested sections when entering fullscreen', () => {
  expect(legacySource).not.toMatch(/:host\(\.fullscreen-active\)\s+section:not\(#w-instances\)/);
});


it('keeps the connection warning when an open and an unavailable sensor share a zone', () => {
  const html = renderContext(false, 'on', true, 'armed_away', ['binary_sensor.door','binary_sensor.window'], 'unavailable');
  expect(html).toContain('<dt><button type="button" aria-label="Ver pendientes">Pendientes</button></dt><dd>1</dd>');
  expect(html).toContain('1 zona(s) sin verificar: revisa conexión o configuración.');
});


it('does not substitute the original core renderer based on screen orientation or touch height', () => {
  const selection = shieldSource.slice(shieldSource.indexOf('export function SecurityShield'));
  expect(selection).not.toMatch(/max-height|orientation|pointer:\s*coarse/);
  expect(selection).toContain("host.classList.contains('argus-perf-essential')");
  expect(selection).toContain('<SecurityEmblem3D');
});
