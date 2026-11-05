import { describe, expect, it, vi } from 'vitest';
import { ActionRegistry } from './action-registry';
import { EntityRegistry } from './entity-registry';
import { AutomationEngine } from './automation-engine';

const permissions = new Set(['control_devices', 'read_entities', 'manage_automations'] as const);

describe('Argus engine', () => {
  it('indexes entities and emits only real state changes', () => {
    const registry = new EntityRegistry();
    const changes = vi.fn();
    registry.subscribe(changes);
    const entity = { entity_id: 'lock.front_door' as const, state: 'locked', attributes: { friendly_name: 'Front door' } };
    registry.replace({ [entity.entity_id]: entity });
    registry.upsert(entity);
    registry.upsert({ ...entity, state: 'unlocked' });
    expect(registry.get('lock.front_door')?.domain).toBe('lock');
    expect(changes).toHaveBeenCalledTimes(2);
  });

  it('enforces permissions and audits action execution', async () => {
    const actions = new ActionRegistry();
    actions.register({ id: 'test.action', label: 'Test', permission: 'control_devices', execute: async () => 'ok' });
    const audit = vi.fn();
    await expect(actions.execute('test.action', {}, { hass: {} as any, permissions, audit })).resolves.toBe('ok');
    await expect(actions.execute('test.action', {}, { hass: {} as any, permissions: new Set(), audit })).rejects.toThrow('Permission denied');
    expect(audit).toHaveBeenCalledWith(expect.objectContaining({ type: 'action_succeeded' }));
  });

  it('runs an enabled automation on a matching state event', async () => {
    const actions = new ActionRegistry();
    const run = vi.fn(async () => undefined);
    actions.register({ id: 'test.action', label: 'Test', permission: 'control_devices', execute: run });
    const engine = new AutomationEngine(actions);
    engine.set([{ version: 1, id: 'a', name: 'A', enabled: true, trigger: { type: 'state_changed', entityId: 'binary_sensor.motion', to: 'on' }, actions: [{ actionId: 'test.action' }] }]);
    let callback: ((event: unknown) => void) | undefined;
    const hass = { states: {}, subscribeEvents: (cb: (event: unknown) => void) => { callback = cb; return () => { callback = undefined; }; } } as any;
    engine.attach(hass, 'user', permissions);
    callback?.({ event: { event_type: 'state_changed', data: { entity_id: 'binary_sensor.motion', new_state: { state: 'on' } } } });
    await new Promise(resolve => setTimeout(resolve, 0));
    expect(run).toHaveBeenCalledTimes(1);
  });
});
