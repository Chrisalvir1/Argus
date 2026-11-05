import { describe, expect, it } from 'vitest';
import { slideReachedEnd, slideTranslation } from './SlideAction';
import { MODE_PALETTE } from './mode-palette';

describe('Argus slide action geometry', () => {
  it('maps the pointer to a clamped thumb position accounting for the original grab point', () => {
    expect(slideTranslation(100, 20, 12, 4, 200)).toBe(64);
    expect(slideTranslation(-100, 20, 12, 4, 200)).toBe(0);
    expect(slideTranslation(500, 20, 12, 4, 200)).toBe(200);
  });

  it('commits only at the physical end, never from a partial release', () => {
    expect(slideReachedEnd(200, 200)).toBe(true);
    expect(slideReachedEnd(199.999, 200)).toBe(false);
    expect(slideReachedEnd(160, 200)).toBe(false);
  });
});

describe('Argus mode palette', () => {
  it('uses the same saturated green for the disarmed core and disarmed state accent', () => {
    expect(MODE_PALETTE.disarmed.css).toBe('#35e7a1');
    expect(MODE_PALETTE.disarmed.three).toBe(0x35e7a1);
  });

  it('uses the home mode orange consistently in CSS and Three.js', () => {
    expect(MODE_PALETTE.home.css).toBe('#ffad55');
    expect(MODE_PALETTE.home.three).toBe(0xffad55);
  });
});
