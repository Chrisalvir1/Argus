import type { ArgusPanelConstructor, ArgusPanelHost } from '../../core/panel';

const STYLE_ID = 'argus-motion-system-v2049';
const STATE_KEY = '__argusMotionV2049';
const INTERACTIVE_SELECTOR = '.user-card,.liquid-btn,.mode-btn,.lang-pill,.entry-fs,.fs-btn,.file-card-btn,.pick-row,.widget-size-btn,.widget-toggle-btn,.argus-disarm-btn,[data-login-digit],#btn-submit-login-pin,#btn-cancel-login,#btn-complete-setup,#btn-claim-admin';
const CSS = `
:host{--argus-motion-fast:120ms;--argus-motion-ease:cubic-bezier(.22,.8,.25,1)}
#widget-grid,.dashboard-instances,#widget-grid>.dashboard-instances,#widget-grid>.dashboard-instances>.entry{animation:none!important;transition:none!important;opacity:1!important;transform:none!important;visibility:visible!important}
#widget-grid.argus-motion-dashboard-enter,.dashboard-instances.argus-motion-dashboard-enter,.argus-motion-dashboard-prep{animation:none!important;transition:none!important;opacity:1!important;transform:none!important}
.dashboard-instances>.entry{will-change:auto!important}
.user-card.is-entering{pointer-events:none;box-shadow:0 0 0 1px rgba(120,190,255,.45),0 10px 24px rgba(0,60,140,.18)}
.argus-motion-press{transform:scale(.982)!important;transition:transform var(--argus-motion-fast) var(--argus-motion-ease)!important}
:host(.argus-perf-essential) .argus-motion-press{transition:none!important;transform:none!important}
@media(prefers-reduced-motion:reduce){.argus-motion-press{transition:none!important;transform:none!important}}
`;

type MotionState = {
  panel: ArgusPanelHost;
  active: boolean;
  observer: MutationObserver | null;
  observerFrame: number;
  rafs: Set<number>;
  timers: Set<number>;
  cleanups: Set<() => void>;
  pressed: Set<Element>;
  profileControl: Element | null;
  api: any;
};

type MotionPanel = ArgusPanelHost & {
  __argusMotionSystemV2049?: boolean;
  _argusPerfProfile?: string;
  [STATE_KEY]?: MotionState;
  _load?: (...args: any[]) => Promise<any>;
  connectedCallback?: () => void;
  disconnectedCallback?: () => void;
};

function motionLevel(panel: MotionPanel): string {
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return 'essential';
  const value = String(panel._argusPerfProfile || panel.dataset?.argusPerf || '').toLowerCase();
  if (value === 'essential' || panel.classList.contains('argus-perf-essential')) return 'essential';
  return value === 'light' ? 'light' : 'full';
}

function getState(panel: MotionPanel): MotionState {
  if (panel[STATE_KEY]) return panel[STATE_KEY]!;
  const state: MotionState = {
    panel, active: false, observer: null, observerFrame: 0,
    rafs: new Set(), timers: new Set(), cleanups: new Set(),
    pressed: new Set(), profileControl: null, api: null
  };
  Object.defineProperty(panel, STATE_KEY, { value: state, writable: true, configurable: true });
  return state;
}

function frame(state: MotionState, callback: () => void): number {
  const id = requestAnimationFrame(() => {
    state.rafs.delete(id);
    if (state.active) callback();
  });
  state.rafs.add(id);
  return id;
}

function listen(state: MotionState, target: EventTarget, type: string, callback: EventListener, options?: boolean | AddEventListenerOptions) {
  target.addEventListener(type, callback, options);
  state.cleanups.add(() => target.removeEventListener(type, callback, options));
}

function installStyles(panel: MotionPanel) {
  const root = panel.shadowRoot;
  if (!root) return;
  let style = root.getElementById(STYLE_ID);
  if (!style) {
    style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = CSS;
    root.appendChild(style);
  } else if (style.textContent !== CSS) {
    style.textContent = CSS;
  }
}

function clearProfileState(state: MotionState) {
  state.profileControl?.classList.remove('is-entering');
  state.profileControl = null;
  state.panel.shadowRoot?.getElementById('bootstrap-overlay')?.removeAttribute('aria-busy');
}

function markProfileLoading(state: MotionState, control: Element | null) {
  clearProfileState(state);
  state.profileControl = control;
  control?.classList.add('is-entering');
  state.panel.shadowRoot?.getElementById('bootstrap-overlay')?.setAttribute('aria-busy', 'true');
}

function installObserver(state: MotionState) {
  if (state.observer || !state.panel.shadowRoot) return;
  state.observer = new MutationObserver(mutations => {
    if (!mutations.some(mutation => [...mutation.addedNodes].some(node => node instanceof Element && node.id !== STYLE_ID))) return;
    if (state.observerFrame) return;
    state.observerFrame = frame(state, () => {
      state.observerFrame = 0;
      installStyles(state.panel);
    });
  });
  state.observer.observe(state.panel.shadowRoot, { childList: true, subtree: true, attributes: false });
}

function installInteractions(state: MotionState) {
  const root = state.panel.shadowRoot;
  if (!root) return;
  const release = (element: Element | null | undefined) => {
    if (!element) return;
    element.classList.remove('argus-motion-press');
    state.pressed.delete(element);
  };
  listen(state, root, 'pointerdown', (event: Event) => {
    if (motionLevel(state.panel) === 'essential') return;
    const target = event.target as Element;
    const control = target?.closest?.(INTERACTIVE_SELECTOR) as HTMLButtonElement | null;
    if (!control || control.disabled) return;
    control.classList.add('argus-motion-press');
    state.pressed.add(control);
  }, true);
  ['pointerup', 'pointercancel', 'pointerleave'].forEach(type => listen(state, root, type, (event: Event) => {
    const target = event.target as Element;
    release(target?.closest?.(INTERACTIVE_SELECTOR));
  }, true));
  listen(state, root, 'click', (event: Event) => {
    const target = event.target as HTMLElement;
    const card = target?.closest?.('.user-card') as HTMLElement | null;
    if (card && card.dataset.isOwn === 'true' && card.dataset.pinRequired !== 'true') markProfileLoading(state, card);
    if (target?.closest?.('#btn-submit-login-pin,#btn-complete-setup,#btn-claim-admin')) markProfileLoading(state, target.closest('button'));
    if (target?.closest?.('#btn-cancel-login')) clearProfileState(state);
  }, true);
}

function install(state: MotionState) {
  if (state.active || !state.panel.shadowRoot) return;
  state.active = true;
  installStyles(state.panel);
  installInteractions(state);
  installObserver(state);
  state.api = Object.freeze({ animateView: () => {}, stagger: () => {}, transitionBackground: () => () => {}, animateDashboard: () => {} });
}

function cleanup(state: MotionState) {
  state.active = false;
  state.observer?.disconnect();
  state.observer = null;
  if (state.observerFrame) cancelAnimationFrame(state.observerFrame);
  state.observerFrame = 0;
  state.rafs.forEach(cancelAnimationFrame);
  state.rafs.clear();
  state.timers.forEach(clearTimeout);
  state.timers.clear();
  state.cleanups.forEach(remove => remove());
  state.cleanups.clear();
  state.pressed.forEach(element => element.classList.remove('argus-motion-press'));
  state.pressed.clear();
  clearProfileState(state);
}

export function applyMotionSystem(C: ArgusPanelConstructor | undefined): void {
  const proto = C?.prototype as MotionPanel | undefined;
  if (!proto || proto.__argusMotionSystemV2049) return;
  proto.__argusMotionSystemV2049 = true;
  const connected = proto.connectedCallback;
  const disconnected = proto.disconnectedCallback;
  const load = proto._load;
  
  proto.connectedCallback = function (this: MotionPanel) {
    const result = connected?.call(this);
    const state = getState(this);
    if (this.shadowRoot) install(state);
    else queueMicrotask(() => install(state));
    return result;
  };
  
  proto.disconnectedCallback = function (this: MotionPanel) {
    const state = this[STATE_KEY];
    if (state) cleanup(state);
    return disconnected?.call(this);
  };
  
  proto._load = async function (this: MotionPanel, ...args: any[]) {
    const state = getState(this);
    try {
      const result = await load?.apply(this, args);
      if (!state.active && this.isConnected) install(state);
      installStyles(this);
      clearProfileState(state);
      return result;
    } catch (error) {
      clearProfileState(state);
      throw error;
    }
  };
}