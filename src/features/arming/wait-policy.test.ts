import { describe, expect, it } from 'vitest';
import { canonicalizeModeConfig, normalizeModeSavePayload, resolveModePolicy } from './wait-policy';

describe('arming wait policy contract', () => {
  it('migrates modes with sensors but no explicit policy to pending', () => {
    expect(resolveModePolicy({ sensors: ['binary_sensor.front_door'], require_closed: false })).toBe('pending');
  });

  it('preserves every explicit policy', () => {
    expect(resolveModePolicy({ sensors: ['binary_sensor.door'], open_sensors_policy: 'allow' })).toBe('allow');
    expect(resolveModePolicy({ open_sensors_policy: 'pending' })).toBe('pending');
    expect(resolveModePolicy({ open_sensors_policy: 'block' })).toBe('block');
  });

  it('canonicalizes the real websocket save payload as pending', () => {
    const payload = normalizeModeSavePayload(
      { entity_id: 'alarm_control_panel.argus', mode: 'away', config: { sensors: ['binary_sensor.door'], require_closed: false } },
      true,
      false,
    );
    expect(payload.config).toMatchObject({
      sensors: ['binary_sensor.door'],
      open_sensors_policy: 'pending',
      require_closed: false,
    });
  });

  it('keeps strict block and explicit allow distinct', () => {
    expect(canonicalizeModeConfig({ sensors: ['binary_sensor.door'] }, false, true)).toMatchObject({ open_sensors_policy: 'block', require_closed: true });
    expect(canonicalizeModeConfig({ sensors: ['binary_sensor.door'] }, false, false)).toMatchObject({ open_sensors_policy: 'allow', require_closed: false });
  });
});
