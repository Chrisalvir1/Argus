import type { ArgusPanelConstructor, ArgusPanelHost } from '../../core/panel';

const STYLE_ID = 'argus-v2050-alarm-visuals';
const ACTIVE: Record<string, RegExp> = {
  armed_home: /EN CASA|HOME|MAISON|EM CASA|CASA|在家|ДОМА/i,
  armed_away: /AUSENTE|AWAY|ABSENT|ASSENTE|外出|УШЁЛ/i,
  armed_night: /NOCHE|NIGHT|NUIT|NOITE|NOTTE|夜间|НОЧЬ/i,
  armed_vacation: /VACACIONES|VACATION|VACANCES|FÉRIAS|VACANZE|度假|ОТПУСК/i
};

type AlarmPanel = ArgusPanelHost & {
  __v2050AlarmVisuals?: boolean;
  _load?: (...args: any[]) => Promise<any>;
  _renderEntries?: (...args: any[]) => any;
  _t?: (key: string) => string;
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
    const item: any = panel._dashboard?.entries?.[index] || {};
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
      const waitCountTpl = panel._t?.('waiting_sensors_count') || 'ESPERANDO {count} SENSOR(ES)';
      const waitCountTxt = waitCountTpl.replace('{count}', String(blocking.length));
      label.textContent = blocking.length ? waitCountTxt : (state === 'arming' ? (panel._t?.('arming') || 'ARMANDO…') : (panel._t?.('waiting_sensors') || 'ESPERANDO SENSORES'));
    } else {
      label?.remove();
    }
    
    const stack = entry.querySelector('.liquid-stack');
    if (stack) {
      Array.from(stack.querySelectorAll('.liquid-btn,button')).forEach(b => {
        const el = b as HTMLElement;
        const text = String(el.textContent || '');
        if (/SOS|PÁNICO|PANIC|PANIQUE|PÂNICO|PANICO|紧急|ПАНИКА/i.test(text)) paint(el, 'sos', Boolean(attrs.argus_panic_active));
        else if (/DESARMAR|DISARM|DESARMADO|DISARMED|DÉSARMER|DÉSARMÉ|OFF|已撤防|СНЯТО/i.test(text)) paint(el, 'disarm', state === 'disarmed');
        else {
          const match = Object.entries(ACTIVE).find(([, rx]) => rx.test(text));
          if (match) paint(el, match[0], state === match[0]);
        }
      });
    }
    
    const triggered = new Set((attrs.triggered_sensors || []).map(String));
    const names = new Set(blocking.map(id => String((panel._dashboard as any)?.available_entities?.find((x: any) => x.entity_id === id)?.name || id).toLocaleLowerCase()));
    
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
  
  p._load = async function (this: AlarmPanel, ...args: any[]) {
    const r = await load?.apply(this, args);
    apply(this);
    return r;
  };
  
  p._renderEntries = function (this: AlarmPanel, ...args: any[]) {
    const r = render?.apply(this, args);
    apply(this);
    return r;
  };
}