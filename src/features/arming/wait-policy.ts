type ModeConfig = Record<string, unknown>;
type SavePayload = { config?: ModeConfig; [key: string]: unknown };
type LegacyPanel = {
  shadowRoot?: ShadowRoot | null;
  _currentModeConfig?: () => ModeConfig;
  _mode?: string;
  _modeEntryId?: string;
  _dashboard?: { entries?: Array<{ entity_id?: string }> };
  _ui?: { modes?: Record<string, any> };
};
type LegacyConstructor = { prototype: any; __argusArmingWaitPolicy?: boolean };

const VALID = new Set(['allow', 'pending', 'block']);
const WAIT_KEYS = [
  'wait_for_sensors', 'waitForSensors', 'arming_wait', 'armingWait',
  'wait_arming', 'waitArming', 'pending_sensors', 'pendingSensors',
] as const;

export function resolveModePolicy(config: ModeConfig | null | undefined): 'allow' | 'pending' | 'block' {
  const safe = config || {};
  const explicit = safe.open_sensors_policy ?? safe.openSensorsPolicy;
  if (typeof explicit === 'string' && VALID.has(explicit)) return explicit as 'allow' | 'pending' | 'block';
  if (WAIT_KEYS.some(key => safe[key] === true)) return 'pending';
  if (safe.require_closed === true || safe.requireClosed === true) return 'pending';
  const sensors = Array.isArray(safe.sensors) ? safe.sensors.filter(Boolean) : [];
  return sensors.length ? 'pending' : 'allow';
}

export function canonicalizeModeConfig(
  config: ModeConfig | null | undefined,
  waitForSensors: boolean,
  requireClosed: boolean,
): ModeConfig {
  const next: ModeConfig = { ...(config || {}) };
  for (const key of WAIT_KEYS) delete next[key];
  delete next.openSensorsPolicy;
  if (waitForSensors) {
    next.open_sensors_policy = 'pending';
    next.require_closed = false;
  } else if (requireClosed) {
    next.open_sensors_policy = 'block';
    next.require_closed = true;
  } else {
    next.open_sensors_policy = 'allow';
    next.require_closed = false;
  }
  return next;
}

export function normalizeModeSavePayload(
  payload: SavePayload,
  waitForSensors: boolean,
  requireClosed: boolean,
): SavePayload {
  return {
    ...payload,
    config: canonicalizeModeConfig(payload.config, waitForSensors, requireClosed),
  };
}

function labelText(input: HTMLInputElement): string {
  return String(input.closest('label')?.textContent || input.parentElement?.textContent || '').toLocaleLowerCase();
}

function findWaitCheckbox(root: ShadowRoot): HTMLInputElement | null {
  const known = [
    'mode-wait-for-sensors', 'mode-wait-sensors', 'mode-arming-wait',
    'mode-pending-sensors', 'mode-open-sensors-pending',
  ];
  for (const id of known) {
    const input = root.getElementById(id);
    if (input instanceof HTMLInputElement) return input;
  }
  return Array.from(root.querySelectorAll<HTMLInputElement>('input[type="checkbox"]')).find(input => {
    if (input.id === 'mode-require-closed') return false;
    const text = labelText(input);
    return /(esper|wait|pending)/i.test(text) && /(sensor|arm)/i.test(text);
  }) || null;
}

function currentConfig(panel: LegacyPanel): ModeConfig {
  try { return panel._currentModeConfig?.() || {}; } catch { return {}; }
}

function ensureWaitControl(panel: LegacyPanel): void {
  const root = panel.shadowRoot;
  if (!root) return;
  let wait = findWaitCheckbox(root);
  const block = root.getElementById('mode-require-closed');
  const blockCheckbox = block instanceof HTMLInputElement ? block : null;
  if (!wait) {
    const wrapper = document.createElement('label');
    wrapper.className = 'argus-wait-policy-control';
    wrapper.style.cssText = 'display:flex;align-items:center;gap:10px;margin:10px 0;padding:10px 12px;border:1px solid rgba(255,255,255,.12);border-radius:12px;background:rgba(255,255,255,.055);font-size:11px;font-weight:750;';
    wrapper.innerHTML = '<input id="mode-wait-for-sensors" type="checkbox"><span>Esperar cierre de sensores antes de armar</span>';
    const anchor = blockCheckbox?.closest('label') || blockCheckbox?.parentElement || root.getElementById('mode-arming-time')?.parentElement || root.getElementById('mode-view');
    if (!anchor) return;
    anchor.insertAdjacentElement(blockCheckbox ? 'afterend' : 'beforebegin', wrapper);
    wait = wrapper.querySelector<HTMLInputElement>('#mode-wait-for-sensors');
  }
  if (!wait) return;
  const policy = resolveModePolicy(currentConfig(panel));
  wait.checked = policy === 'pending';
  if (wait.checked && blockCheckbox) blockCheckbox.checked = false;
  if (wait.dataset.argusPolicyBound === '1') return;
  wait.dataset.argusPolicyBound = '1';
  wait.addEventListener('change', () => {
    if (wait?.checked && blockCheckbox) blockCheckbox.checked = false;
  });
  if (blockCheckbox && blockCheckbox.dataset.argusPolicyBound !== '1') {
    blockCheckbox.dataset.argusPolicyBound = '1';
    blockCheckbox.addEventListener('change', () => {
      if (blockCheckbox.checked && wait) wait.checked = false;
    });
  }
}

function syncLocalMode(panel: LegacyPanel, config: ModeConfig): void {
  const entityId = panel._modeEntryId || panel._dashboard?.entries?.[0]?.entity_id || 'default';
  const mode = panel._mode;
  if (!mode || !panel._ui) return;
  panel._ui.modes ||= {};
  panel._ui.modes.__by_entity__ ||= {};
  panel._ui.modes.__by_entity__[entityId] ||= {};
  panel._ui.modes.__by_entity__[entityId][mode] = { ...config };
}

export function applyArmingWaitPolicy(C: LegacyConstructor | undefined): void {
  if (!C || C.__argusArmingWaitPolicy) return;
  C.__argusArmingWaitPolicy = true;
  const proto = C.prototype;
  const previousRender = proto._renderModeView;
  proto._renderModeView = function (...args: unknown[]) {
    const result = previousRender?.apply(this, args);
    ensureWaitControl(this);
    return result;
  };
  const previousSend = proto._send;
  proto._send = function (type: string, payload: SavePayload, ...args: unknown[]) {
    if (type === 'argus/save_mode_config') {
      const root: ShadowRoot | null | undefined = this.shadowRoot;
      const wait = root ? findWaitCheckbox(root) : null;
      const block = root?.getElementById('mode-require-closed');
      const waitSelected = wait ? wait.checked : resolveModePolicy(payload?.config) === 'pending';
      const blockSelected = !waitSelected && block instanceof HTMLInputElement && block.checked;
      payload = normalizeModeSavePayload(payload || {}, waitSelected, blockSelected);
      syncLocalMode(this, payload.config || {});
    }
    return previousSend.call(this, type, payload, ...args);
  };
}
