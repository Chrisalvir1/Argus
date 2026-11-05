import { expect, it } from 'vitest';
import type { ArgusPanelConstructor } from '../../core/panel';
import { applyStableInstancesRender } from './stable';

it('publishes zone-only contact snapshots in order, before React reads them', () => {
  const id = 'binary_sensor.virtual';
  const alarm = { state: 'disarmed' };
  const contact = { state: 'off' };
  const initial = { states: { [id]: contact, alarm } };
  class Panel extends EventTarget {
    _dashboard = { entries: [{ entity_id: 'alarm' }] };
    _ui = { zones: [{ entity_ids: [id] }] };
    _hass = initial;
    projection = 'arming';

    _reconcileOptimisticAlarmStates() {
      if (this.hass.states.alarm.state === 'armed_away') this.projection = '';
    }

    get hass() { return this._hass; }
    set hass(snapshot) { this._hass = snapshot; }
  }

  applyStableInstancesRender(Panel as unknown as ArgusPanelConstructor);
  const panel = new Panel();
  const observed: string[] = [];
  panel.addEventListener('argus-state-update', () => observed.push(panel.hass.states[id].state));

  panel.hass = { ...initial, states: { ...initial.states } };
  expect(observed).toEqual([]);
  for (const state of ['on', 'off', 'unavailable', 'off']) {
    panel.hass = { states: { [id]: { state }, alarm } };
  }
  expect(observed).toEqual(['on', 'off', 'unavailable', 'off']);

  let projectionAtRefresh: string | undefined;
  panel.addEventListener('argus-state-update', () => { projectionAtRefresh = panel.projection; });
  panel.hass = { states: { [id]: contact, alarm: { state: 'armed_away' } } };
  expect(projectionAtRefresh).toBe('');
});
