import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { afterEach, expect, it, vi } from 'vitest';
import { SecurityConsole } from './SecurityConsole';
import { SecurityContext } from './SecurityContext';

afterEach(() => vi.unstubAllGlobals());

function renderContext(admin: boolean, doorState = 'off') {
  vi.stubGlobal('document', {});
  const alarm = 'alarm_control_panel.fixture';
  const door = 'binary_sensor.door';
  const window = 'binary_sensor.window';
  const panel = {
    classList: { contains: () => false },
    _dashboard: { entries: [{ entity_id: alarm, entry_id: 'fixture' }] },
    _ui: {
      zones: [{ id: 'patio', area: 'Patio', entity_ids: [door, window] }],
      modes: { away: { sensors: [door, window] } },
    },
    _hass: { connected: true, states: {
      [alarm]: { state: 'armed_away', attributes: { cycle_bypassed_sensors: [window] } },
      [door]: { state: doorState, attributes: { friendly_name: 'Puerta', device_class: 'door', battery_level: 8 } },
      [window]: { state: 'off', attributes: { friendly_name: 'Ventana', device_class: 'window' } },
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
  expect(html).toContain('<dt>Listas</dt><dd>0</dd>');
  expect(html).toContain('<dt>Pendientes</dt><dd>1</dd>');
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
    expect(html).toContain('<dt>Listas</dt><dd>0</dd>');
    expect(html).toContain('<dt>Pendientes</dt><dd>1</dd>');
  },
);


it('uses one accessible contextual zone selector without the diagnostic disclosure', () => {
  const html = renderContext(true);
  expect(html).toContain('aria-label="Zona contextual"');
  expect(html).toContain('aria-pressed="false">Zona 1 · Patio');
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
  expect(dialog).toContain('Diagnóstico automático');
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
  expect(html).not.toContain('context-indicators');
});
