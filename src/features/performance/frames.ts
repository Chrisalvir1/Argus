/** Preserve the same response duration at 30, 60, 100 or 120 browser frames/s. */
export function timeBlend(at60Hz: number, elapsedMs: number): number {
  return 1 - Math.pow(1 - at60Hz, Math.max(0, Math.min(100, elapsedMs)) / (1000 / 60));
}

export type FrameSnapshot = { cadenceHz: number; deliveredFps: number; p95Ms: number; renderMs: number; quality: number };

export function deviceQualityLimit(hints: { cores?: number; memoryGB?: number; saveData?: boolean }): number {
  if (hints.saveData || (hints.cores !== undefined && hints.cores <= 2) || (hints.memoryGB !== undefined && hints.memoryGB <= 2)) return .65;
  return 1;
}

/** Observe delivered callbacks, not the physical panel's advertised refresh rate.
 * Resolution changes have hysteresis so variable refresh/ProMotion cannot cause
 * rapid oscillation. No timers or frame-rate cap are imposed on the browser.
 */
export class AdaptiveFrames {
  quality: number;
  constructor(private readonly maximum = 1) { this.quality = maximum; }
  private intervals: number[] = [];
  private costs: number[] = [];
  private previous = 0;
  private since = 0;
  private unhealthy = 0;
  private healthy = 0;
  private changedAt = -Infinity;

  reset(): void { this.intervals = []; this.costs = []; this.previous = 0; this.since = 0; this.unhealthy = 0; this.healthy = 0; }

  sample(now: number, renderMs: number): FrameSnapshot | null {
    if (this.previous) this.intervals.push(now - this.previous);
    this.previous = now;
    this.costs.push(renderMs);
    if (!this.since) this.since = now;
    if (now - this.since < 2000 || this.intervals.length < 20) return null;
    const sorted = this.intervals.slice().sort((a, b) => a - b);
    const cadence = sorted[Math.floor(sorted.length * .2)];
    const p95 = sorted[Math.floor(sorted.length * .95)];
    const average = this.intervals.reduce((sum, value) => sum + value, 0) / this.intervals.length;
    const cost = this.costs.reduce((sum, value) => sum + value, 0) / this.costs.length;
    const overloaded = p95 > cadence * 1.65 || cost > cadence * .65;
    this.unhealthy = overloaded ? this.unhealthy + 1 : 0;
    this.healthy = !overloaded && cost < cadence * .35 ? this.healthy + 1 : 0;
    if (now - this.changedAt >= 8000) {
      if (this.unhealthy >= 2 && this.quality > .5) {
        this.quality = Math.max(.5, Math.round((this.quality - .15) * 100) / 100);
        this.changedAt = now; this.unhealthy = 0; this.healthy = 0;
      } else if (this.healthy >= 4 && this.quality < this.maximum) {
        this.quality = Math.min(this.maximum, Math.round((this.quality + .1) * 100) / 100);
        this.changedAt = now; this.healthy = 0;
      }
    }
    this.intervals = []; this.costs = []; this.since = now;
    return { cadenceHz: Math.round(1000 / cadence), deliveredFps: Math.round(1000 / average), p95Ms: +p95.toFixed(2), renderMs: +cost.toFixed(2), quality: this.quality };
  }
}
