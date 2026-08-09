import { afterEach, describe, expect, it, vi } from 'vitest';

import { applyRuntimeLifecycle } from './lifecycle';

afterEach(() => {
  vi.clearAllTimers();
  vi.useRealTimers();
});

describe('runtime lifecycle', () => {
  it('keeps one connected clock and disposes every timer on disconnect', () => {
    vi.useFakeTimers();
    const originalConnected = vi.fn(function (this: any) {
      this._clockInterval = setInterval(() => undefined, 1000);
      this._argusClockTimer = setInterval(() => undefined, 15000);
      this._argusConnectivityTimer = setInterval(() => undefined, 2500);
      return 'connected';
    });
    const originalDisconnected = vi.fn(() => 'disconnected');

    class FakePanel {}
    Object.assign(FakePanel.prototype, {
      connectedCallback: originalConnected,
      disconnectedCallback: originalDisconnected,
    });

    applyRuntimeLifecycle(FakePanel as any);
    const panel = new (FakePanel as any)();

    expect(panel.connectedCallback()).toBe('connected');
    expect(originalConnected).toHaveBeenCalledOnce();
    expect(panel._argusClockTimer).toBeUndefined();
    expect(vi.getTimerCount()).toBe(2);

    expect(panel.disconnectedCallback()).toBe('disconnected');
    expect(originalDisconnected).toHaveBeenCalledOnce();
    expect(panel._clockInterval).toBeUndefined();
    expect(panel._argusConnectivityTimer).toBeUndefined();
    expect(vi.getTimerCount()).toBe(0);
  });

  it('is idempotent', () => {
    class FakePanel {}
    const originalConnected = vi.fn();
    Object.assign(FakePanel.prototype, { connectedCallback: originalConnected });

    applyRuntimeLifecycle(FakePanel as any);
    const firstWrapper = (FakePanel.prototype as any).connectedCallback;
    applyRuntimeLifecycle(FakePanel as any);

    expect((FakePanel.prototype as any).connectedCallback).toBe(firstWrapper);
  });
});
