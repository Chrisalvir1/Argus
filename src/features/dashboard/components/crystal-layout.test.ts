import { describe, expect, it } from 'vitest';
import { crystalHalfSpan, createCrystalGeometry, updateCrystalGeometry } from './crystal-layout';
describe('approved round crystal layout', () => {
  it('keeps the same open crystal shape with three or six zones', () => {
    expect(crystalHalfSpan(3, 0)).toBe(crystalHalfSpan(6, 0));
  });
  it.each([1, 3, 6, 10])('closes %i crystals into a complete circle without gaps', count => {
    const coverage = crystalHalfSpan(count, 1) * 2 * count;
    expect(coverage).toBeGreaterThanOrEqual(2 * Math.PI);
    if (count === 1) expect(coverage).toBeCloseTo(2 * Math.PI);
  });
  it('expands the angular coverage continuously without changing the circular radii', () => {
    const open = crystalHalfSpan(3, 0), closed = crystalHalfSpan(3, 1);
    expect(crystalHalfSpan(3, .5)).toBeCloseTo((open + closed) / 2);
    for (const radius of [1.03, 1.58]) {
      const angle = crystalHalfSpan(3, .5);
      expect(Math.hypot(radius * Math.cos(angle), radius * Math.sin(angle))).toBeCloseTo(radius);
    }
  });
  it('does not create a segment when there are no zones', () => {
    expect(crystalHalfSpan(0, 1)).toBe(0);
  });
  it.each([1, 3, 6, 10])('keeps %i crystals circular throughout closure without triangles crossing the lens opening', count => {
    const geometry = createCrystalGeometry(count);
    const positions = geometry.getAttribute('position');
    const indices = geometry.getIndex()!;
    for (const closure of [0, .25, .5, .75, 1]) {
      updateCrystalGeometry(geometry, crystalHalfSpan(count, closure));
      for (let i = 0; i < indices.count; i += 3) {
        let x = 0, y = 0;
        for (let j = 0; j < 3; j++) {
          const vertex = indices.getX(i + j);
          x += positions.getX(vertex) / 3;
          y += positions.getY(vertex) / 3;
        }
        // Allow only the subpixel chord error of adjacent circular samples.
        expect(Math.hypot(x, y)).toBeGreaterThan(1.029);
        expect(Math.hypot(x, y)).toBeLessThanOrEqual(1.581);
      }
    }
    geometry.dispose();
  });
});
