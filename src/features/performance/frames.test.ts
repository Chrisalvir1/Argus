import { expect, it } from 'vitest';
import { AdaptiveFrames, deviceQualityLimit, timeBlend } from './frames';

it('has equal settling after one second at 30, 60, 100 and 120 frames/s', () => {
  const remaining = [30, 60, 100, 120].map(hz => {
    let value = 0;
    for (let i = 0; i < hz; i++) value += (1 - value) * timeBlend(.1, 1000 / hz);
    return value;
  });
  remaining.forEach(value => expect(value).toBeCloseTo(remaining[0], 10));
});

it('follows changing browser cadence without imposing 60 FPS or degrading stable low refresh', () => {
  const frames = new AdaptiveFrames();
  let now = 1;
  for (const hz of [120, 100, 60, 30, 120]) {
    let snapshot;
    for (let i = 0; i < hz * 10; i++) { now += 1000 / hz; snapshot = frames.sample(now, 1) || snapshot; }
    expect(snapshot?.cadenceHz).toBe(hz);
    expect(frames.quality).toBe(1);
  }
});

it('reduces resolution under sustained load and restores it after recovery', () => {
  const frames = new AdaptiveFrames();
  let now = 1;
  for (let i = 0; i < 120 * 6; i++) { now += 1000 / 120; frames.sample(now, 7); }
  expect(frames.quality).toBeLessThan(1);
  const low = frames.quality;
  for (let i = 0; i < 120 * 30; i++) { now += 1000 / 120; frames.sample(now, 1); }
  expect(frames.quality).toBeGreaterThan(low);
});

it('starts conservatively on basic hardware without treating missing hints as weak hardware', () => {
  expect(deviceQualityLimit({})).toBe(1);
  expect(deviceQualityLimit({ cores: 2 })).toBe(.65);
  expect(deviceQualityLimit({ memoryGB: 2, cores: 8 })).toBe(.65);
  expect(deviceQualityLimit({ saveData: true })).toBe(.65);
  const frames = new AdaptiveFrames(.65);
  for (let i = 1; i <= 3600; i++) frames.sample(i * 1000 / 60, 1);
  expect(frames.quality).toBe(.65);
});
