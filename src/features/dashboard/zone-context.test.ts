import { describe, expect, it } from 'vitest';
import { sensorAvailability, zoneReadiness, type ContextEntity } from './zone-context';

describe('zone context', () => {
  const active = (entity: ContextEntity) => entity.state === 'on';
  const zones = [['door'], ['motion'], [], ['missing']];
  const states: Record<string, ContextEntity> = {
    door: { state: 'on', attributes: { device_class: 'door' } },
    motion: { state: 'off', attributes: { device_class: 'motion' } },
  };
  const read = (id: string) => states[id];

  it('counts groups and keeps missing data separate from confirmed activity', () => {
    expect(zones.map(ids => zoneReadiness(ids, read, active))).toEqual(['pending', 'ready', 'unknown', 'unknown']);
  });

  it('excludes sensors outside the mode and trusts confirmed blockers during waiting', () => {
    const required = new Set(['motion']);
    expect(zoneReadiness(['door', 'motion'], read, active, required)).toBe('ready');
    expect(zoneReadiness(['door'], read, active, required)).toBe('notApplicable');
    expect(zoneReadiness(['motion'], read, active, required, new Set(['motion']))).toBe('pending');
    expect(zoneReadiness(['motion'], () => undefined, active, required)).toBe('unknown');
  });

  it('distinguishes disconnection and unknown state from an active contact', () => {
    expect(sensorAvailability({ state: 'on', attributes: { online: false } })).toBe('offline');
    expect(sensorAvailability({ state: 'unknown' })).toBe('unknown');
    expect(zoneReadiness(['door'], () => ({ state: 'unavailable' }), active)).toBe('unknown');
    expect(zoneReadiness(['door'], () => ({ state: 'off' }), active)).toBe('ready');
  });
});

it('keeps a configured timestamp visible but never uses it as proof of readiness', () => {
  const timestamp = { state: '2026-11-05T11:01:13+00:00', attributes: { device_class: 'timestamp' } };
  const read = () => timestamp;
  expect(sensorAvailability(timestamp)).toBe('available');
  expect(zoneReadiness(['sun'], read, () => false)).toBe('unknown');
  expect(zoneReadiness(['sun'], read, () => false, new Set(['sun']), new Set(['sun']))).toBe('pending');
});


it('does not count an informational value as a closed contact merely because it is not active', () => {
  expect(zoneReadiness(['temperature'], () => ({state:'22.4'}), () => false)).toBe('unknown');
  expect(zoneReadiness(['lock'], () => ({state:'jammed'}), () => false)).toBe('unknown');
  expect(zoneReadiness(['lock'], () => ({state:'locked'}), () => false)).toBe('ready');
});
