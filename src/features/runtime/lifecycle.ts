import type { ArgusPanelConstructor, ArgusPanelHost } from '../../core/panel';

const KEY = '__argusRuntimeLifecycleV2056';

type RuntimeLifecyclePanel = ArgusPanelHost & {
  _clockInterval?: ReturnType<typeof setInterval>;
  _argusClockTimer?: ReturnType<typeof setInterval>;
  _argusConnectivityTimer?: ReturnType<typeof setInterval>;
  connectedCallback?: () => unknown;
  disconnectedCallback?: () => unknown;
};

function clearTimer(panel: RuntimeLifecyclePanel, key: '_clockInterval' | '_argusClockTimer' | '_argusConnectivityTimer'): void {
  const timer = panel[key];
  if (timer !== undefined) clearInterval(timer);
  panel[key] = undefined;
}

/**
 * Own the final panel lifecycle after all legacy wrappers have been installed.
 *
 * The typed stable renderer is the only clock scheduler that should remain
 * active while the panel is connected. Older visual layers still install a
 * second clock timer; cancel it immediately and dispose every known timer when
 * Home Assistant removes the panel from the DOM.
 */
export function applyRuntimeLifecycle(C: ArgusPanelConstructor | undefined): void {
  if (!C || (C as any)[KEY]) return;
  (C as any)[KEY] = true;

  const proto = C.prototype as RuntimeLifecyclePanel;
  const connected = proto.connectedCallback;
  const disconnected = proto.disconnectedCallback;

  proto.connectedCallback = function (this: RuntimeLifecyclePanel): unknown {
    const result = connected?.call(this);
    clearTimer(this, '_argusClockTimer');
    return result;
  };

  proto.disconnectedCallback = function (this: RuntimeLifecyclePanel): unknown {
    clearTimer(this, '_clockInterval');
    clearTimer(this, '_argusClockTimer');
    clearTimer(this, '_argusConnectivityTimer');
    return disconnected?.call(this);
  };
}
