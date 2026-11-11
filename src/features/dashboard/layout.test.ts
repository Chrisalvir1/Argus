import { describe, expect, it } from 'vitest';
import { COLS, GRID_ROW_HEIGHT, defaultLayouts, hasCollision, hasLayoutCollisions, mergeLayouts, migrateToV3, migrateToV5, placeWidget, replaceBreakpointLayout, widgetSizeOptions } from './layout';
import type { Layout } from './types';

describe('Argus layout', () => {
  it('usa una cuadrícula densa para ajustar libremente ancho y alto', () => {
    expect(COLS).toEqual({ lg: 96, md: 80, sm: 64, xs: 40, xxs: 32 });
    expect(GRID_ROW_HEIGHT).toBe(10);
  });
  it('fusiona layouts incompletos', () => expect(mergeLayouts({ lg: [{ i: 'activity-history', x: 2, y: 2, w: 3, h: 4 } as Layout] }).lg?.length).toBe(defaultLayouts.lg?.length));
  it('bloquea colisión', () => expect(hasCollision([{ i: 'a', x: 0, y: 0, w: 3, h: 3 } as Layout], { i: 'b', x: 2, y: 1, w: 3, h: 3 } as Layout)).toBe(true));
  it('devuelve los vecinos a sus posiciones al pasar de largo o volver al origen', () => {
    const layout: Layout[] = [
      { i: 'dragged', x: 0, y: 0, w: 4, h: 3 },
      { i: 'neighbor', x: 4, y: 0, w: 4, h: 3 },
      { i: 'untouched', x: 4, y: 7, w: 4, h: 3 },
    ];
    const [dragged, neighbor, untouched] = layout;
    const over = placeWidget(layout, { ...dragged, x: 4 }, 8);
    expect(over[1]).toMatchObject({ x: 0, y: 0 });
    expect(over[2]).toBe(untouched);
    expect(placeWidget(layout, { ...dragged, y: 4 }, 8)[1]).toBe(neighbor);
    expect(placeWidget(layout, dragged, 8)).toBe(layout);
    expect(hasLayoutCollisions({ lg: over })).toBe(false);
  });
  it('reordena una columna entre el origen y el destino, incluso con diferentes alturas', () => {
    const layout: Layout[] = [
      { i: 'dragged', x: 0, y: 0, w: 40, h: 3 },
      { i: 'one', x: 0, y: 3, w: 40, h: 5 },
      { i: 'two', x: 0, y: 8, w: 40, h: 4 },
      { i: 'untouched', x: 0, y: 12, w: 40, h: 3 },
    ];
    const over = placeWidget(layout, { ...layout[0], y: 9 }, 40);
    expect(over.map(item => item.y)).toEqual([9, 0, 5, 12]);
    expect(over[3]).toBe(layout[3]);
    expect(hasLayoutCollisions({ xs: over })).toBe(false);
    expect(placeWidget(layout, layout[0], 40)).toBe(layout);
    const equal = [layout[0], { ...layout[1], h: 3 }];
    expect(placeWidget(equal, { ...equal[0], y: 3 }, 40).map(item => item.y)).toEqual([3, 0]);
  });
  it('al crecer mueve solo la cadena de colisiones y al volver al tamaño inicial la restaura', () => {
    const layout: Layout[] = [
      { i: 'resized', x: 0, y: 0, w: 4, h: 4, minH: 3 },
      { i: 'neighbor', x: 0, y: 4, w: 4, h: 3 },
      { i: 'next', x: 0, y: 7, w: 4, h: 4 },
      { i: 'other-column', x: 4, y: 0, w: 4, h: 10 },
    ];
    const expanded = placeWidget(layout, { ...layout[0], h: 6 }, 8, true);
    expect(expanded.map(item => item.y)).toEqual([0, 6, 9, 0]);
    expect(expanded[3]).toBe(layout[3]);
    expect(hasLayoutCollisions({ lg: expanded })).toBe(false);
    expect(placeWidget(layout, layout[0], 8, true)).toBe(layout);
    expect(placeWidget(layout, { ...layout[0], h: 1 }, 8, true)[0].h).toBe(3);
  });
  it('limita los tamaños del menú a los límites de cada widget', () => {
    const item = mergeLayouts(null).xs!.find(value => value.i === 'alarm-configuration')!;
    const options = widgetSizeOptions(item, 'xs');
    expect(options.map(value => value.size)).toEqual(['compact', 'medium', 'large']);
    expect(options.every(value => value.w === 40 && value.h >= item.minH!)).toBe(true);
  });
  it('corrige layouts v5 guardados con widgets superpuestos sin cambiar columnas', () => {
    const saved = structuredClone(defaultLayouts);
    saved.lg = saved.lg!.map(item => item.i === 'access-control'
      ? { ...item, x: 34, y: 45, w: 40, h: 36 }
      : item.i === 'alarm-configuration'
        ? { ...item, x: 28, y: 0, w: 68, h: 57 }
        : item);
    expect(hasLayoutCollisions(saved)).toBe(true);
    const repaired = mergeLayouts(saved);
    expect(hasLayoutCollisions(repaired)).toBe(false);
    expect(repaired.lg?.find(item => item.i === 'alarm-configuration')?.x).toBe(28);
    expect(repaired.lg?.find(item => item.i === 'access-control')?.x).toBe(34);
    expect(repaired.lg?.find(item => item.i === 'access-control')?.y).toBeGreaterThanOrEqual(57);
  });
  it('guarda la disposición móvil sin modificar web o tableta', () => {
    const before = structuredClone(defaultLayouts);
    const movedMobile = before.xs!.map(item => item.i === 'activity-history' ? { ...item, x: 8, y: 9 } : item);
    const next = replaceBreakpointLayout(before, 'xs', movedMobile);
    expect(next.xs?.find(item => item.i === 'activity-history')).toMatchObject({ x: 8, y: 9 });
    expect(next.lg).toEqual(before.lg);
    expect(next.md).toEqual(before.md);
  });
  it('migra a v3 con tres breakpoints y sin colisiones', () => {
    const migrated = migrateToV3({ layouts: { lg: [
      { i: 'a', x: 0, y: 0, w: 8, h: 3 },
      { i: 'b', x: 0, y: 0, w: 8, h: 3 },
    ] } });
    expect(migrated.layoutVersion).toBe(3);
    expect(Object.keys(migrated.layouts)).toEqual(['desktop', 'tablet', 'mobile']);
    expect(hasCollision(migrated.layouts.desktop.slice(0, 1), migrated.layouts.desktop[1])).toBe(false);
    expect(migrated.layouts.mobile.every(item => item.w <= 2)).toBe(true);
  });

  it('migra un diseño anterior conservando su proporción y preferencias', () => {
    const old = { lg: [{ i: 'activity-history', x: 0, y: 3, w: 6, h: 8 }] } as import('./types').Layouts;
    const migrated = migrateToV5({ layoutVersion: 4, layouts: old, visibility: { automations: false } });
    expect(migrated.layoutVersion).toBe(5);
    expect(migrated.layouts.lg?.find(item => item.i === 'activity-history')).toMatchObject({ x: 0, y: 14, w: 48, h: 36 });
    expect(migrated.layouts.sm?.find(item => item.i === 'activity-history')).toMatchObject({ y: 0, h: 36 });
    expect(migrated.visibility.automations).toBe(false);
    expect(migrateToV5(migrated).layouts.lg?.find(item => item.i === 'activity-history')).toMatchObject({ y: 14, h: 36 });
  });
});
it('recovers malformed storage without NaN coordinates or duplicate widget IDs', () => {
  const saved = {xs: [null, {i: 'bad', x: NaN, y: 0, w: 1, h: 2},
    {i: 'custom', x: 12, y: -1, w: 12, h: -4},
    {i: 'custom', x: 12, y: -1, w: 12, h: -4}]} as unknown as import('./types').Layouts;
  const values = mergeLayouts(saved).xs!;
  expect(values.filter(x => x.i === 'custom')).toHaveLength(1);
  expect(values.find(x => x.i === 'custom')).toMatchObject({x: 12, y: 36, w: 12, h: 2, maxW: 40});
  expect(values.every(x => [x.x, x.y, x.w, x.h].every(Number.isFinite))).toBe(true);
});
