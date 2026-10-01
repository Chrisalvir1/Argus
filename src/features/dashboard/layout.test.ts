import { describe, expect, it } from 'vitest';
import { clampSizeForBreakpoint, defaultLayouts, getClosestWidgetSize, hasCollision, mergeLayouts, snapLayoutItemToSize } from './layout';
import type { Layout } from './types';

describe('Argus layout', () => {
  it('elige tamaño cercano', () => expect(getClosestWidgetSize(6, 7, 12)).toBe('XL'));
  it('limita columnas', () => expect(clampSizeForBreakpoint('XL', 2)).toEqual({ w: 2, h: 8 }));
  it('ajusta resize', () => expect(snapLayoutItemToSize({ i: 'x', x: 0, y: 0, w: 5, h: 4 } as Layout, 12).w).toBe(6));
  it('fusiona layouts incompletos', () => expect(mergeLayouts({ lg: [{ i: 'activity-history', x: 2, y: 2, w: 3, h: 4 } as Layout] }).lg?.length).toBe(defaultLayouts.lg?.length));
  it('bloquea colisión', () => expect(hasCollision([{ i: 'a', x: 0, y: 0, w: 3, h: 3 } as Layout], { i: 'b', x: 2, y: 1, w: 3, h: 3 } as Layout)).toBe(true));
});
it('recovers malformed storage without NaN coordinates or duplicate widget IDs', () => {
  const saved = {xs: [null, {i: 'bad', x: NaN, y: 0, w: 1, h: 2},
    {i: 'custom', x: 12, y: -1, w: 12, h: -4},
    {i: 'custom', x: 12, y: -1, w: 12, h: -4}]} as unknown as import('./types').Layouts;
  const values = mergeLayouts(saved).xs!;
  expect(values.filter(x => x.i === 'custom')).toHaveLength(1);
  expect(values.find(x => x.i === 'custom')).toMatchObject({x: 0, y: 0, w: 2, h: 1, maxW: 2});
  expect(values.every(x => [x.x, x.y, x.w, x.h].every(Number.isFinite))).toBe(true);
});
