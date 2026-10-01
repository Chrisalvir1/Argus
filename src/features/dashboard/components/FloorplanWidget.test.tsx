import { describe, expect, it } from 'vitest';
import { markerCondition } from './FloorplanWidget';

describe('floorplan live marker conditions', () => {
  it('maps alarm binary sensors to active and safe states', () => {
    const entity = { entity_id: 'binary_sensor.door', domain: 'binary_sensor' };
    expect(markerCondition(entity, 'on')).toBe('active');
    expect(markerCondition(entity, 'off')).toBe('safe');
  });

  it('handles locks, covers, and missing states', () => {
    expect(markerCondition({ entity_id: 'lock.front', domain: 'lock' }, 'locked')).toBe('safe');
    expect(markerCondition({ entity_id: 'lock.front', domain: 'lock' }, 'unlocked')).toBe('active');
    expect(markerCondition({ entity_id: 'cover.garage', domain: 'cover' }, 'closed')).toBe('safe');
    expect(markerCondition({ entity_id: 'cover.garage', domain: 'cover' }, 'open')).toBe('active');
    expect(markerCondition({ entity_id: 'binary_sensor.door' }, 'unavailable')).toBe('unavailable');
  });
});
