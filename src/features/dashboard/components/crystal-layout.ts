import { BufferAttribute, BufferGeometry } from 'three';

/** Keep the approved 60° open crystal; close its angular span into a ring. */
export function crystalHalfSpan(count: number, closure: number): number {
  if (count < 1) return 0;
  const closed = Math.PI / count;
  const open = Math.min(Math.PI / 6, closed);
  return open + (closed - open) * Math.max(0, Math.min(1, closure));
}


/** A polar sweep keeps every triangle between adjacent angles as the arc grows.
 * Warping an ExtrudeGeometry triangulated for 60° cuts across the inner hole
 * when expanded to 120° or 360°; this topology never bridges that hole.
 */
export function createCrystalGeometry(count: number): BufferGeometry {
  const steps = Math.max(32, Math.ceil(192 / Math.max(1, count)));
  const inner = 1.03, outer = 1.58, bevel = .045, depth = .22;
  const profile = [
    [inner + bevel, depth], [outer - bevel, depth],
    [outer, depth - bevel], [outer, bevel],
    [outer - bevel, 0], [inner + bevel, 0],
    [inner, bevel], [inner, depth - bevel],
  ];
  const polar: number[] = [], indices: number[] = [];
  for (let step = 0; step <= steps; step++) {
    for (const [radius, z] of profile) polar.push(radius, step / steps * 2 - 1, z);
  }
  for (let step = 0; step < steps; step++) {
    for (let side = 0; side < profile.length; side++) {
      const a = step * 8 + side, b = step * 8 + (side + 1) % 8;
      indices.push(a, b, a + 8, b, b + 8, a + 8);
    }
  }
  // Convex bevelled cross-section caps, independent of the angular face grid.
  for (const step of [0, steps]) {
    const center = polar.length / 3;
    polar.push((inner + outer) / 2, step === 0 ? -1 : 1, depth / 2);
    for (let side = 0; side < 8; side++) {
      const a = step * 8 + side, b = step * 8 + (side + 1) % 8;
      indices.push(...(step === 0 ? [center, b, a] : [center, a, b]));
    }
  }
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new BufferAttribute(new Float32Array(polar.length), 3));
  geometry.setIndex(indices);
  geometry.userData.polar = Float32Array.from(polar);
  updateCrystalGeometry(geometry, crystalHalfSpan(count, 0));
  return geometry;
}

export function updateCrystalGeometry(geometry: BufferGeometry, halfSpan: number): void {
  const polar = geometry.userData.polar as Float32Array;
  const positions = geometry.getAttribute('position') as BufferAttribute;
  for (let vertex = 0; vertex < positions.count; vertex++) {
    const radius = polar[vertex * 3], angle = polar[vertex * 3 + 1] * halfSpan;
    positions.setXYZ(vertex, radius * Math.cos(angle), radius * Math.sin(angle), polar[vertex * 3 + 2]);
  }
  positions.needsUpdate = true;
  geometry.computeBoundingSphere();
}
