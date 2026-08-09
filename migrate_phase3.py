import os
import re

def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w') as f:
        f.write(content.strip())

motion_ts = """
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
"""

stable_ts = """
import type { ArgusPanelConstructor, ArgusPanelHost } from '../../core/panel';

const KEY = '__argusStableRenderV2050';

type StablePanel = ArgusPanelHost & {
  [KEY]?: boolean;
  _getLocale?: () => string;
  _backgroundMode?: string;
  _panelBgFile?: string;
  _getWeatherEntity?: () => any;
  _getDisplayedTemperature?: () => string;
  _homeName?: string;
  _kioskLocked?: boolean;
  _kioskEntryId?: string;
  _requestKioskUnlock?: () => void;
  _sosEntryIdx?: number;
  _stopSOS?: (idx: number) => void;
  _toggleFullscreen?: (entry: Element | null) => void;
  _exitFullscreenView?: () => void;
  _handleAction?: (idx: string, action: string) => void;
  _clockInterval?: ReturnType<typeof setInterval>;
  _updateLiveClocks?: () => void;
  _startClock?: () => void;
  _instanceSignatures?: Map<number, string>;
  _renderEntries?: (force?: boolean) => any;
  _ui?: any;
  _fullscreenIdx?: number;
  _t?: (key: string) => string;
  _escapeHtml?: (str: string) => string;
  _temperatureSource?: string | null;
  _weatherSource?: string | null;
  _manualLang?: boolean;
  _refreshLocalizedUi?: () => void;
  _updateTheme?: () => void;
  _renderActivityLog?: () => void;
  connectedCallback?: () => void;
};

function updateClocks(panel: StablePanel) {
  const root = panel.shadowRoot;
  if (!root) return;
  const now = new Date();
  const timeStr = now.toLocaleTimeString(panel._getLocale?.() || undefined, { hour: '2-digit', minute: '2-digit' });
  const dateStr = now.toLocaleDateString(panel._getLocale?.() || undefined, { weekday: 'short', month: 'short', day: 'numeric' });
  const heroClock = root.getElementById('hero-clock-time');
  const heroDate = root.getElementById('hero-clock-date');
  if (heroClock && heroClock.textContent !== timeStr) heroClock.textContent = timeStr;
  if (heroDate && heroDate.textContent !== dateStr) heroDate.textContent = dateStr;
  root.querySelectorAll('.console-hud-time,.hud-data>span:first-child').forEach(n => {
    if (n && n.textContent !== timeStr) n.textContent = timeStr;
  });
}

function signature(panel: StablePanel, entry: any, state: string, attrs: any, sensorKey: string, panicActive: boolean, isFS: boolean): string {
  return [
    entry?.entity_id || '', entry?.entry_id || '', state || '',
    panicActive ? '1' : '0', isFS ? '1' : '0', sensorKey || '',
    attrs?.arming_waiting_for_sensors ? '1' : '0',
    JSON.stringify(attrs?.arming_blocking_sensors || []),
    JSON.stringify(attrs?.triggered_sensors || []),
    panel._backgroundMode || '', panel._panelBgFile || '',
    panel._getWeatherEntity?.()?.state || '',
    panel._hass?.states?.['sun.sun']?.state || '',
    panel._getDisplayedTemperature?.() || '',
    panel._homeName || '', panel._kioskLocked ? '1' : '0'
  ].join('|');
}

function installDelegation(panel: StablePanel, el: Element | null) {
  if (!el || (el as any)._argusDelegated) return;
  (el as any)._argusDelegated = true;
  el.addEventListener('click', (ev: Event) => {
    const t = ev.target as HTMLElement;
    const unlock = t.closest?.('button[data-action="unlock-kiosk"]');
    if (unlock) { panel._requestKioskUnlock?.(); return; }
    const sos = t.closest?.('button[data-action="sos"]') as HTMLElement | null;
    if (sos) { panel._sosEntryIdx = Number(sos.dataset.idx); panel.shadowRoot?.getElementById('sos-modal')?.classList.add('open'); return; }
    const stop = t.closest?.('button[data-action="stop-sos"]') as HTMLElement | null;
    if (stop) { panel._stopSOS?.(Number(stop.dataset.idx)); return; }
    const fs = t.closest?.('button[data-fullscreen]');
    if (fs) { panel._toggleFullscreen?.(fs.closest('.entry')); return; }
    const exit = t.closest?.('button[data-exit-fullscreen]');
    if (exit) { panel._exitFullscreenView?.(); return; }
    const action = t.closest?.('button[data-action]:not([data-action="sos"]):not([data-action="stop-sos"]):not([data-action="unlock-kiosk"])') as HTMLElement | null;
    if (action?.dataset?.idx != null && action?.dataset?.action) panel._handleAction?.(action.dataset.idx, action.dataset.action);
  });
}

export function applyStableInstancesRender(C: ArgusPanelConstructor | undefined): void {
  const proto = C?.prototype as StablePanel | undefined;
  if (!proto || proto[KEY]) return;
  proto[KEY] = true;
  
  const renderEntries = proto._renderEntries;
  const desc = Object.getOwnPropertyDescriptor(proto, 'hass') || Object.getOwnPropertyDescriptor(Object.getPrototypeOf(proto), 'hass');
  
  proto._updateLiveClocks = function (this: StablePanel) { updateClocks(this); };
  proto._startClock = function (this: StablePanel) {
    if (this._clockInterval) clearInterval(this._clockInterval);
    updateClocks(this);
    this._clockInterval = setInterval(() => { if (this._dashboard) updateClocks(this); }, 1000);
  };
  
  proto._renderEntries = function (this: StablePanel, force = false) {
    const root = this.shadowRoot;
    if (!root) return renderEntries?.call(this, force);
    const el = root.getElementById('entries');
    const entries = this._dashboard?.entries || [];
    this._instanceSignatures = this._instanceSignatures || new Map();
    
    if (!el || !entries.length) {
      const r = renderEntries?.call(this, force);
      installDelegation(this, root.getElementById('entries'));
      updateClocks(this);
      return r;
    }
    
    const arts = [...el.querySelectorAll('article.entry')] as HTMLElement[];
    let needFull = force || arts.length !== entries.length || !arts.every(a => a.querySelector('.entry-content'));
    
    if (!needFull) {
      let allSame = true;
      for (let idx = 0; idx < entries.length; idx++) {
        const e = entries[idx];
        const live = this._hass?.states?.[e.entity_id!];
        const state = live?.state || e.state || 'unavailable';
        const attrs = live?.attributes || {};
        const panicActive = Boolean(attrs.argus_panic_active);
        const isFS = this._fullscreenIdx === idx || (!!this._kioskLocked && (this._kioskEntryId === e.entry_id || entries.length === 1));
        
        const mKey = String(state).replace('armed_', '');
        let eCfg = (this._ui?.modes?.__by_entity__?.[e.entity_id!]?.[mKey]) || (this._ui?.modes?.[mKey]) || {};
        let sList: string[] = eCfg.sensors || [];
        if (state === 'disarmed' || !sList.length) {
          const modes = this._ui?.modes?.__by_entity__?.[e.entity_id!] || this._ui?.modes || {};
          const all = new Set<string>();
          ['away', 'home', 'night', 'vacation'].forEach(m => {
            (modes[m]?.sensors || []).forEach((s: string) => all.add(s));
          });
          sList = [...all];
        }
        
        const sByps: string[] = eCfg.bypassed_sensors || [];
        const active = sList.filter(s => !sByps.includes(s));
        const sensorKey = active.map(sid => {
          const st = this._hass?.states?.[sid];
          const bat = st?.attributes?.battery_level ?? st?.attributes?.battery_percentage ?? '';
          return `${sid}:${st?.state || ''}:${bat}`;
        }).join(',');
        
        const sig = signature(this, e, state, attrs, sensorKey, panicActive, isFS);
        if (this._instanceSignatures.get(idx) !== sig) { allSame = false; break; }
      }
      
      if (allSame) {
        const allStates = entries.map(e => this._hass?.states?.[e.entity_id!]?.state || 'unavailable');
        const isArmed = allStates.some(s => String(s).startsWith('armed') || s === 'triggered' || s === 'pending');
        const globalStatusEl = root.getElementById('global-status');
        if (globalStatusEl) {
          const t = (k: string) => this._t?.(k) || k;
          const html = `<span class="badge ${isArmed ? 'armed_away' : 'disarmed'}">${isArmed ? t('system_armed') : t('system_disarmed')}</span>`;
          if (globalStatusEl.innerHTML !== html) globalStatusEl.innerHTML = html;
        }
        
        const heroSecurity = root.getElementById('hero-security-pill');
        if (heroSecurity) {
          const t = (k: string) => this._t?.(k) || k;
          const label = isArmed ? t('system_armed') : t('system_disarmed');
          const html = `<i class="hero-live" style="background:${isArmed ? '#ffb54d' : '#55df91'};box-shadow:0 0 9px ${isArmed ? '#ffb54d' : '#55df91'}"></i>${this._escapeHtml?.(label) || label}`;
          if (heroSecurity.innerHTML !== html) heroSecurity.innerHTML = html;
        }
        updateClocks(this);
        installDelegation(this, el);
        return;
      }
    }
    
    const result = renderEntries?.call(this, force === true ? true : undefined);
    const after = [...el.querySelectorAll('article.entry')] as HTMLElement[];
    after.forEach((art, idx) => {
      const e = entries[idx];
      if (!e) return;
      const live = this._hass?.states?.[e.entity_id!];
      const state = live?.state || e.state || 'unavailable';
      const attrs = live?.attributes || {};
      const panicActive = Boolean(attrs.argus_panic_active);
      const isFS = this._fullscreenIdx === idx || (!!this._kioskLocked && (this._kioskEntryId === e.entry_id || entries.length === 1));
      
      const mKey = String(state).replace('armed_', '');
      let eCfg = (this._ui?.modes?.__by_entity__?.[e.entity_id!]?.[mKey]) || (this._ui?.modes?.[mKey]) || {};
      let sList: string[] = eCfg.sensors || [];
      if (state === 'disarmed' || !sList.length) {
        const modes = this._ui?.modes?.__by_entity__?.[e.entity_id!] || this._ui?.modes || {};
        const all = new Set<string>();
        ['away', 'home', 'night', 'vacation'].forEach(m => {
          (modes[m]?.sensors || []).forEach((s: string) => all.add(s));
        });
        sList = [...all];
      }
      
      const sByps: string[] = eCfg.bypassed_sensors || [];
      const active = sList.filter(s => !sByps.includes(s));
      const sensorKey = active.map(sid => {
        const st = this._hass?.states?.[sid];
        const bat = st?.attributes?.battery_level ?? st?.attributes?.battery_percentage ?? '';
        return `${sid}:${st?.state || ''}:${bat}`;
      }).join(',');
      
      const sig = signature(this, e, state, attrs, sensorKey, panicActive, isFS);
      this._instanceSignatures!.set(idx, sig);
      art.dataset.renderSig = sig;
    });
    
    installDelegation(this, el);
    updateClocks(this);
    return result;
  };
  
  const currentGet = desc?.get;
  const currentSet = desc?.set;
  if (currentSet) {
    Object.defineProperty(proto, 'hass', {
      configurable: true, enumerable: true,
      get: function (this: StablePanel) { return currentGet ? currentGet.call(this) : this._hass; },
      set: function (this: StablePanel, hass: any) {
        const oldHass = this._hass;
        if (oldHass && this._dashboard?.entries?.length) {
          const configured = new Set<string>();
          const collect = (v: any) => {
            if (!v || typeof v !== 'object') return;
            if (Array.isArray(v.sensors)) v.sensors.forEach((id: string) => configured.add(id));
            Object.values(v).forEach(c => { if (c && typeof c === 'object') collect(c); });
          };
          collect(this._ui?.modes);
          
          const languageChanged = oldHass.language !== hass.language;
          if (languageChanged && !this._manualLang) this._refreshLocalizedUi?.();
          
          const alarmChanged = this._dashboard.entries.some(e => e.entity_id && oldHass.states[e.entity_id]?.state !== hass.states[e.entity_id]?.state);
          const sensorChanged = [...configured].some(id => 
            oldHass.states[id]?.state !== hass.states[id]?.state ||
            oldHass.states[id]?.attributes?.battery_level !== hass.states[id]?.attributes?.battery_level ||
            oldHass.states[id]?.attributes?.battery_percentage !== hass.states[id]?.attributes?.battery_percentage
          );
          
          const tempEntity = this._temperatureSource === 'auto' ? null : this._temperatureSource;
          const tempChanged = tempEntity && oldHass.states[tempEntity]?.state !== hass.states[tempEntity]?.state;
          
          const weatherEnt = (this._weatherSource && this._weatherSource !== 'auto') ? this._weatherSource : Object.values(hass.states).find((s: any) => s.entity_id?.startsWith('weather.'))?.entity_id;
          const weatherChanged = weatherEnt && (
            oldHass.states[weatherEnt]?.state !== hass.states[weatherEnt]?.state ||
            oldHass.states[weatherEnt]?.attributes?.temperature !== hass.states[weatherEnt]?.attributes?.temperature
          );
          
          const relevant = alarmChanged || sensorChanged || tempChanged || weatherChanged || languageChanged;
          this._hass = hass;
          this._updateTheme?.();
          if (relevant) {
            this._renderEntries?.(languageChanged);
            this._renderActivityLog?.();
          } else {
            updateClocks(this);
          }
          return;
        }
        return currentSet.call(this, hass);
      }
    });
  }
  
  const connected = proto.connectedCallback;
  proto.connectedCallback = function (this: StablePanel) {
    const r = connected?.call(this);
    this._startClock?.();
    return r;
  };
}
"""

alarm_ts = """
import type { ArgusPanelConstructor, ArgusPanelHost } from '../../core/panel';

const STYLE_ID = 'argus-v2050-alarm-visuals';
const ACTIVE: Record<string, RegExp> = {
  armed_home: /EN CASA|HOME/i,
  armed_away: /AUSENTE|AWAY/i,
  armed_night: /NOCHE|NIGHT/i,
  armed_vacation: /VACACIONES|VACATION/i
};

type AlarmPanel = ArgusPanelHost & {
  __v2050AlarmVisuals?: boolean;
  _load?: (...args: any[]) => Promise<any>;
  _renderEntries?: (...args: any[]) => any;
  connectedCallback?: () => void;
};

function stateOf(panel: AlarmPanel, item: any): string {
  const id = item?.entity_id || item?.alarm_entity_id;
  return String(item?.state || item?.alarm_state || item?.attributes?.state || panel._hass?.states?.[id]?.state || '').toLowerCase();
}

function paint(button: HTMLElement, kind: string, active: boolean) {
  button.classList.toggle('argus-action-active', active);
  button.dataset.argusAction = kind;
  const color = kind === 'sos' ? 'linear-gradient(110deg,#ff453a,#ff2d55)' :
                kind === 'disarm' ? 'linear-gradient(110deg,#34c759,#16863a)' :
                'linear-gradient(110deg,rgba(67,180,255,.72),rgba(52,120,212,.68))';
  button.style.setProperty('background', active ? color : 'rgba(255,255,255,.105)', 'important');
  button.style.setProperty('background-image', active ? color : 'linear-gradient(135deg,rgba(255,255,255,.12),rgba(255,255,255,.055))', 'important');
  button.style.setProperty('border', active ? '1px solid rgba(255,255,255,.38)' : '1px solid rgba(255,255,255,.14)', 'important');
  button.style.setProperty('box-shadow', active ? '0 8px 24px rgba(0,0,0,.24)' : 'inset 0 1px 0 rgba(255,255,255,.08)', 'important');
}

function ensureStyles(panel: AlarmPanel) {
  const root = panel.shadowRoot;
  if (!root) return;
  let style = root.getElementById(STYLE_ID);
  if (!style) {
    style = document.createElement('style');
    style.id = STYLE_ID;
    root.appendChild(style);
  }
  style.textContent = `
.entry .liquid-stack .liquid-btn{border-radius:13px!important;color:rgba(255,255,255,.92)!important}
.argus-disarm-btn{grid-column:1/-1!important;width:100%!important;min-height:54px!important;background:linear-gradient(110deg,#34c759,#16863a)!important;border:1px solid rgba(134,239,172,.78)!important;color:#fff!important}
.entry.argus-arming .entry-icon>svg,.entry.argus-waiting .entry-icon>svg{transform-origin:center!important;animation:argusArmingShield 1.05s ease-in-out infinite!important;filter:drop-shadow(0 0 26px rgba(255,184,57,.95)) saturate(1.35)!important}
.argus-shield-status{display:block;margin:7px auto 0;padding:5px 10px;width:max-content;max-width:180px;border:1px solid rgba(255,184,57,.45);border-radius:999px;background:rgba(255,149,0,.13);color:#ffd27a;font-size:9px;font-weight:800;letter-spacing:.12em;text-align:center;animation:argusArmingLabel 1.05s ease-in-out infinite}
.entry .console-sensor.argus-blocking,.entry .console-sensor.argus-triggered-sensor{border-color:#ff8a1f!important;background:linear-gradient(135deg,rgba(249,115,22,.32),rgba(194,65,12,.18))!important;animation:argusTriggeredSensor .72s ease-in-out infinite!important}
@keyframes argusArmingShield{0%,100%{opacity:.55;transform:scale(.94)}50%{opacity:1;transform:scale(1.07)}}
@keyframes argusArmingLabel{0%,100%{opacity:.62}50%{opacity:1}}
@keyframes argusTriggeredSensor{0%,100%{opacity:.62}50%{opacity:1}}
`;
}

function apply(panel: AlarmPanel) {
  if (!panel.shadowRoot) return;
  ensureStyles(panel);
  const entries = panel.shadowRoot.querySelectorAll('.entry');
  Array.from(entries).forEach((entry, index) => {
    const item = panel._dashboard?.entries?.[index] || {};
    const attrs = item.attributes || panel._hass?.states?.[item.entity_id!]?.attributes || {};
    const state = stateOf(panel, item);
    const blocking: string[] = attrs.arming_blocking_sensors || [];
    const waiting = state === 'arming' || Boolean(attrs.arming_waiting_for_sensors) || Boolean(blocking.length);
    
    entry.classList.toggle('argus-arming', waiting);
    entry.classList.toggle('argus-waiting', waiting);
    
    const icon = entry.querySelector('.entry-icon');
    let label = entry.querySelector('.argus-shield-status');
    
    if (waiting && icon) {
      if (!label) {
        label = document.createElement('span');
        label.className = 'argus-shield-status';
        icon.insertAdjacentElement('afterend', label);
      }
      label.textContent = blocking.length ? `ESPERANDO ${blocking.length} SENSOR(ES)` : (state === 'arming' ? 'ARMANDO…' : 'ESPERANDO SENSORES');
    } else {
      label?.remove();
    }
    
    const stack = entry.querySelector('.liquid-stack');
    if (stack) {
      let btn = stack.querySelector('.argus-disarm-btn') as HTMLButtonElement | null;
      if (!btn) {
        btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'liquid-btn argus-disarm-btn';
        btn.innerHTML = '<span>⏻</span><b>DESARMAR / OFF</b>';
        btn.onclick = async () => {
          if (!item.entry_id) return;
          btn!.disabled = true;
          try {
            await panel._send?.('argus/perform_alarm_action', { entry_id: item.entry_id, action: 'disarm' });
            await panel._load?.();
          } finally {
            btn!.disabled = false;
          }
        };
        const sos = Array.from(stack.children).find(x => /SOS|PÁNICO|PANIC/i.test(x.textContent || ''));
        if (sos) stack.insertBefore(btn, sos);
        else stack.appendChild(btn);
      }
      
      Array.from(stack.querySelectorAll('.liquid-btn,button')).forEach(b => {
        const el = b as HTMLElement;
        const text = String(el.textContent || '');
        if (/SOS|PÁNICO|PANIC/i.test(text)) paint(el, 'sos', Boolean(attrs.argus_panic_active));
        else if (/DESARMAR|DISARM|OFF/i.test(text)) paint(el, 'disarm', state === 'disarmed');
        else {
          const match = Object.entries(ACTIVE).find(([, rx]) => rx.test(text));
          if (match) paint(el, match[0], state === match[0]);
        }
      });
    }
    
    const triggered = new Set((attrs.triggered_sensors || []).map(String));
    const names = new Set(blocking.map(id => String(panel._dashboard?.available_entities?.find((x: any) => x.entity_id === id)?.name || id).toLocaleLowerCase()));
    
    entry.querySelectorAll('.console-sensor').forEach(row => {
      const text = String(row.querySelector('.console-sensor-name')?.textContent || row.textContent || '').toLocaleLowerCase();
      const isBlock = Array.from(names).some(n => text.includes(n) || n.includes(text));
      const isTrig = Array.from(triggered).some(id => text.includes(String(id).toLocaleLowerCase()));
      row.classList.toggle('argus-blocking', isBlock);
      row.classList.toggle('argus-triggered-sensor', isTrig);
    });
  });
}

export function applyV2050AlarmVisuals(C: ArgusPanelConstructor | undefined): void {
  const p = C?.prototype as AlarmPanel | undefined;
  if (!p || p.__v2050AlarmVisuals) return;
  p.__v2050AlarmVisuals = true;
  
  const connected = p.connectedCallback;
  const load = p._load;
  const render = p._renderEntries;
  
  p.connectedCallback = function (this: AlarmPanel) {
    const r = connected?.call(this);
    apply(this);
    return r;
  };
  
  p._load = async function (this: AlarmPanel, ...a: any[]) {
    const r = await load?.apply(this, a);
    apply(this);
    return r;
  };
  
  p._renderEntries = function (this: AlarmPanel, ...a: any[]) {
    const r = render?.apply(this, a);
    apply(this);
    return r;
  };
}
"""

write_file('src/features/motion/index.ts', motion_ts)
write_file('src/features/render/stable.ts', stable_ts)
write_file('src/features/render/alarm.ts', alarm_ts)

with open('src/legacy/bridge.ts', 'r') as f:
    bridge = f.read()

bridge = bridge.replace("import{applyMotionSystem}from'../../custom_components/argus/www/argus-motion-system.js';\n", "")
bridge = bridge.replace("import{applyStableInstancesRender}from'../../custom_components/argus/www/argus-v2050-stable-render.js';\n", "")
bridge = bridge.replace("import{applyV2050AlarmVisuals}from'../../custom_components/argus/www/argus-v2050-alarm-visuals.js';\n", "")
bridge = bridge.replace("applyMotionSystem(C);", "")
bridge = bridge.replace("applyStableInstancesRender(C);", "")
bridge = bridge.replace("applyV2050AlarmVisuals(C);", "")

with open('src/legacy/bridge.ts', 'w') as f:
    f.write(bridge)

with open('src/app/index.ts', 'r') as f:
    index = f.read()

new_imports = """
import { applyMotionSystem } from '../features/motion';
import { applyStableInstancesRender } from '../features/render/stable';
import { applyV2050AlarmVisuals } from '../features/render/alarm';
"""

index = index.replace("import{applyPremiumExperience}from'../features/premium';", "import{applyPremiumExperience}from'../features/premium';" + new_imports)
index = index.replace("applyPremiumExperience(C);", "applyPremiumExperience(C);\n  applyMotionSystem(C);\n  applyStableInstancesRender(C);\n  applyV2050AlarmVisuals(C);")

with open('src/app/index.ts', 'w') as f:
    f.write(index)
