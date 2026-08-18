// @ts-nocheck
/**
 * argus-v2046-active-visuals — v2.2.2 refactor
 * Uses ONLY class toggles. No inline styles. All visual work is done in CSS.
 */
const ACTIVE = { armed_home: /EN CASA|HOME|MAISON|EM CASA|IN CASA|在家|ДОМА|घर/i, armed_away: /AUSENTE|AWAY|ABSENT|FUORI|离家|ВНЕ ДОМА|दूर/i, armed_night: /NOCHE|NIGHT|NUIT|NOTTE|夜间|НОЧЬ|रात/i, armed_vacation: /VACACIONES|VACATION|VACANCES|VACANZA|FÉRIAS|度假|ОТПУСК|यात्रा/i };
function stateOf(panel, item) { const id = item?.entity_id || item?.alarm_entity_id; return String(item?.state || item?.alarm_state || item?.attributes?.state || panel._hass?.states?.[id]?.state || '').toLowerCase(); }

function paint(button, kind, active) {
  // Only class toggles — CSS handles all visual logic
  button.classList.toggle('active', active);
  button.classList.toggle('argus-action-active', active);
  button.dataset.argusAction = kind;
  // Remove any previously set inline styles from old patch versions
  button.style.removeProperty('background');
  button.style.removeProperty('background-image');
  button.style.removeProperty('border');
  button.style.removeProperty('box-shadow');
  button.style.removeProperty('backdrop-filter');
  button.style.removeProperty('-webkit-backdrop-filter');
}

function apply(panel) {
  if (!panel.shadowRoot) return;
  let style = panel.shadowRoot.getElementById('argus-v2046-active-visuals');
  if (!style) {
    style = document.createElement('style');
    style.id = 'argus-v2046-active-visuals';
    style.textContent = `
      .entry .liquid-stack .liquid-btn {
        border-radius: 13px !important;
        color: rgba(255,255,255,.92) !important;
        transition: background 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease, transform 0.18s ease !important;
      }
      /* inactive fallback — specific mode btns override this */
      .entry .liquid-stack .liquid-btn:not(.btn-home):not(.btn-away):not(.btn-night):not(.btn-vacation):not(.btn-disarm):not(.btn-sos):not(.argus-action-active) {
        background: rgba(255,255,255,.105) !important;
      }
      .entry.argus-arming .entry-icon > svg {
        transform-origin: center !important;
        animation: argusArmingShield 1.05s ease-in-out infinite !important;
        filter: drop-shadow(0 0 26px rgba(255,184,57,.95)) saturate(1.35) !important;
      }
      .argus-shield-status { display:block;margin:7px auto 0;padding:5px 10px;width:max-content;max-width:180px;border:1px solid rgba(255,184,57,.45);border-radius:999px;background:rgba(255,149,0,.13);color:#ffd27a;font-size:9px;font-weight:800;letter-spacing:.12em;text-align:center;animation:argusArmingLabel 1.05s ease-in-out infinite }
      @keyframes argusArmingShield { 0%,100%{opacity:.55;transform:scale(.94)} 50%{opacity:1;transform:scale(1.07)} }
      @keyframes argusArmingLabel { 0%,100%{opacity:.62} 50%{opacity:1} }
    `;
    panel.shadowRoot.appendChild(style);
  }

  [...(panel.shadowRoot.querySelectorAll('.entry') || [])].forEach((entry, index) => {
    const item = panel._dashboard?.entries?.[index] || {};
    const attrs = item.attributes || {};
    const state = stateOf(panel, item);
    const waiting = state === 'arming' || Boolean(attrs.arming_waiting_for_sensors) || Boolean((attrs.arming_blocking_sensors || []).length);
    entry.classList.toggle('argus-arming', waiting);
    const icon = entry.querySelector('.entry-icon');
    let label = entry.querySelector('.argus-shield-status');
    if (waiting && icon) {
      if (!label) { label = document.createElement('span'); label.className = 'argus-shield-status'; icon.insertAdjacentElement('afterend', label); }
      label.textContent = (attrs.arming_blocking_sensors || []).length ? 'ESPERANDO SENSORES' : 'ARMANDO…';
    } else label?.remove();

    const stack = entry.querySelector('.liquid-stack');
    if (!stack) return;
    [...stack.querySelectorAll('.liquid-btn, button')].forEach(btn => {
      const text = String(btn.textContent || '');
      if (/SOS|PÁNICO|PANIC|PANIQUE|PÂNICO|PANICO|紧急|ПАНИКА/i.test(text)) paint(btn, 'sos', Boolean(attrs.argus_panic_active));
      else if (/DESARMAR|DISARM|DESARMADO|DISARMED|DÉSARMÉ|DÉSARMER|СНЯТО|已撤防/i.test(text)) paint(btn, 'disarm', state==='disarmed');
      else {
        const match = Object.entries(ACTIVE).find(([, rx]) => rx.test(text));
        if (match) paint(btn, match[0], state === match[0]);
      }
    });
  });
}

export function applyV2046ActiveVisuals(C) {
  if (!C || C.__v2046ActiveVisuals) return;
  C.__v2046ActiveVisuals = true;
  const p = C.prototype, connected = p.connectedCallback, load = p._load, render = p._renderEntries;
  p.connectedCallback = function () { const r = connected?.call(this); apply(this); return r; };
  p._load = async function () { const r = await load?.call(this); apply(this); return r; };
  p._renderEntries = function () { const r = render?.call(this); apply(this); return r; };
}
