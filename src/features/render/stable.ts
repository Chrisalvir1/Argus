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
  _formatTime?: (date: Date) => string;
  _formatDateTime?: (date: Date) => string;
  connectedCallback?: () => void;
};

function updateClocks(panel: StablePanel) {
  const root = panel.shadowRoot;
  if (!root) return;
  const now = new Date();
  const timeStr = panel._formatTime ? panel._formatTime(now) : now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateStr = now.toLocaleDateString(panel._getLocale?.() || undefined, { weekday: 'short', month: 'short', day: 'numeric' });
  const heroClock = root.getElementById('hero-clock-time');
  const heroDate = root.getElementById('hero-clock-date');
  if (heroClock && heroClock.textContent !== timeStr) heroClock.textContent = timeStr;
  if (heroDate && heroDate.textContent !== dateStr) heroDate.textContent = dateStr;
  root.querySelectorAll('.console-hud-time,.hud-data>span:first-child').forEach((n: any) => {
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
    panel._homeName || '', panel._kioskLocked ? '1' : '0',
    String((panel as any)._getCurrentLangCode?.() || (panel as any)._manualLang || (panel as any)._ui?.language || (panel as any)._hass?.language || '')
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
        const e: any = entries[idx];
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
        const allStates = entries.map((e: any) => this._hass?.states?.[e.entity_id!]?.state || 'unavailable');
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
      const e: any = entries[idx];
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
          
          const languageChanged = (oldHass as any).language !== (hass as any).language;
          if (languageChanged && !this._manualLang) this._refreshLocalizedUi?.();
          
          const alarmChanged = this._dashboard.entries.some((e: any) => e.entity_id && oldHass.states[e.entity_id]?.state !== hass.states[e.entity_id]?.state);
          const sensorChanged = [...configured].some(id => 
            oldHass.states[id]?.state !== hass.states[id]?.state ||
            oldHass.states[id]?.attributes?.battery_level !== hass.states[id]?.attributes?.battery_level ||
            oldHass.states[id]?.attributes?.battery_percentage !== hass.states[id]?.attributes?.battery_percentage
          );
          
          const tempEntity = this._temperatureSource === 'auto' ? null : this._temperatureSource;
          const tempChanged = tempEntity && oldHass.states[tempEntity]?.state !== hass.states[tempEntity]?.state;
          
          const weatherEnt = (this._weatherSource && this._weatherSource !== 'auto') ? this._weatherSource : (Object.values(hass.states) as any[]).find((s: any) => (s as any).entity_id?.startsWith('weather.'))?.entity_id;
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