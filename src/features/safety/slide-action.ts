// @ts-nocheck
/**
 * Argus Slide-to-Action — v2.2.7
 * iOS "slide to power off" style — exact visual match.
 * - Large circular glass thumb on the LEFT, drags RIGHT to complete
 * - Very dark glass pill track
 * - Text centered with gradient mask that fades where thumb passes
 * - Spring bounce-back animation when gesture incomplete
 * - SOS slider always visible; Disarm slider only when system is armed
 * - PIN prompt for disarm when PIN is configured
 */

const STYLE_ID = 'argus-slide-action-styles';

const SLIDE_I18N = {
  es: { slide_disarm: 'Desliza para desarmar', slide_sos: 'Desliza para activar SOS', slide_sos_stop: 'Desliza para detener SOS', enter_pin: 'Ingresa el PIN maestro', wrong_pin: 'PIN incorrecto', cancel: 'Cancelar' },
  en: { slide_disarm: 'Slide to disarm', slide_sos: 'Slide to trigger SOS', slide_sos_stop: 'Slide to stop SOS', enter_pin: 'Enter master PIN', wrong_pin: 'Wrong PIN', cancel: 'Cancel' },
  fr: { slide_disarm: 'Glisser pour désarmer', slide_sos: 'Glisser pour déclencher SOS', slide_sos_stop: 'Glisser pour arrêter SOS', enter_pin: 'Saisir PIN maître', wrong_pin: 'PIN incorrect', cancel: 'Annuler' },
  pt: { slide_disarm: 'Deslize para desarmar', slide_sos: 'Deslize para acionar SOS', slide_sos_stop: 'Deslize para parar SOS', enter_pin: 'Inserir PIN mestre', wrong_pin: 'PIN errado', cancel: 'Cancelar' },
  it: { slide_disarm: 'Scorri per disarmare', slide_sos: 'Scorri per attivare SOS', slide_sos_stop: 'Scorri per fermare SOS', enter_pin: 'Inserisci PIN master', wrong_pin: 'PIN errato', cancel: 'Annulla' },
  zh: { slide_disarm: '滑动撤防', slide_sos: '滑动触发 SOS', slide_sos_stop: '滑动停止 SOS', enter_pin: '请输入主 PIN 码', wrong_pin: 'PIN 错误', cancel: '取消' },
  'zh-Hant': { slide_disarm: '滑動撤防', slide_sos: '滑動觸發 SOS', slide_sos_stop: '滑動停止 SOS', enter_pin: '請輸入主 PIN 碼', wrong_pin: 'PIN 錯誤', cancel: '取消' },
  ru: { slide_disarm: 'Сдвиньте для снятия охраны', slide_sos: 'Сдвиньте для SOS', slide_sos_stop: 'Сдвиньте для остановки SOS', enter_pin: 'Введите мастер-PIN', wrong_pin: 'Неверный PIN', cancel: 'Отмена' },
  hi: { slide_disarm: 'निरस्त करने के लिए स्लाइड करें', slide_sos: 'SOS के लिए स्लाइड करें', slide_sos_stop: 'SOS रोकने के लिए स्लाइड करें', enter_pin: 'मास्टर PIN दर्ज करें', wrong_pin: 'गलत PIN', cancel: 'रद्द करें' },
  ar: { slide_disarm: 'اسحب لنزع التسليح', slide_sos: 'اسحب لتشغيل نداء الاستغاثة', slide_sos_stop: 'اسحب لإيقاف SOS', enter_pin: 'أدخل الرمز الرئيسي', wrong_pin: 'رمز خاطئ', cancel: 'إلغاء' },
  ko: { slide_disarm: '밀어서 해제', slide_sos: '밀어서 SOS 활성화', slide_sos_stop: '밀어서 SOS 중지', enter_pin: '마스터 PIN 입력', wrong_pin: '잘못된 PIN', cancel: '취소' },
  ja: { slide_disarm: 'スライドして解除', slide_sos: 'スライドしてSOS', slide_sos_stop: 'スライドしてSOS停止', enter_pin: 'マスターPINを入力', wrong_pin: 'PINが違います', cancel: 'キャンセル' },
  uk: { slide_disarm: 'Посуньте для зняття охорони', slide_sos: 'Посуньте для SOS', slide_sos_stop: 'Посуньте щоб зупинити SOS', enter_pin: 'Введіть майстер-PIN', wrong_pin: 'Неправильний PIN', cancel: 'Скасувати' },
};

function t(panel, key) {
  const lang = (panel._lang || panel._manualLang || panel._hass?.language || 'es').toLowerCase().split(/[-_]/)[0];
  return (SLIDE_I18N[lang] || SLIDE_I18N.es)[key] || SLIDE_I18N.es[key] || key;
}

// SVG icons for the thumb
const ICON_DISARM = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>`;
const ICON_SOS    = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`;
const ICON_SOS_STOP = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>`;

function injectStyles(panel) {
  const root = panel.shadowRoot;
  if (!root || root.getElementById(STYLE_ID)) return;
  const s = document.createElement('style');
  s.id = STYLE_ID;
  s.textContent = `
/* ── Slide-to-action base ─────────────────────────────────────────── */
.argus-sta-wrap {
  width: 100%;
  grid-column: 1 / -1;
  position: relative;
}

/* Disarm wrapper: hidden by default, shown only when armed */
.argus-sta-wrap--disarm {
  display: none;
}
.argus-sta-wrap--disarm.sta-armed {
  display: block;
}

/* The pill track — dark Liquid Glass */
.argus-sta-track {
  position: relative;
  width: 100%;
  height: 64px;
  border-radius: 32px;
  overflow: hidden;
  user-select: none;
  -webkit-user-select: none;
  cursor: pointer;
  box-sizing: border-box;
  backdrop-filter: blur(32px) saturate(180%) brightness(0.7);
  -webkit-backdrop-filter: blur(32px) saturate(180%) brightness(0.7);
}
.argus-sta-track--disarm {
  background: linear-gradient(135deg, rgba(10,18,30,0.92) 0%, rgba(6,12,22,0.96) 100%);
  border: 1px solid rgba(16,185,129,0.28);
  box-shadow: 0 4px 24px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.07);
}
.argus-sta-track--sos {
  background: linear-gradient(135deg, rgba(10,18,30,0.92) 0%, rgba(6,12,22,0.96) 100%);
  border: 1px solid rgba(239,68,68,0.28);
  box-shadow: 0 4px 24px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.07);
}

/* Fill bar that follows the thumb */
.argus-sta-fill {
  position: absolute;
  left: 0; top: 0; bottom: 0;
  border-radius: inherit;
  pointer-events: none;
  will-change: width;
  transition: width 0.04s linear;
}
.argus-sta-track--disarm .argus-sta-fill {
  background: linear-gradient(90deg, rgba(16,185,129,0.22), rgba(5,150,105,0.06));
}
.argus-sta-track--sos .argus-sta-fill {
  background: linear-gradient(90deg, rgba(239,68,68,0.25), rgba(185,28,28,0.06));
}

/* The large circular thumb (left side) */
.argus-sta-thumb {
  position: absolute;
  left: 4px;
  top: 4px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: grab;
  z-index: 4;
  will-change: transform;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
}
.argus-sta-thumb:active { cursor: grabbing; }

.argus-sta-track--disarm .argus-sta-thumb {
  background: radial-gradient(circle at 35% 35%, rgba(20,220,140,0.18), rgba(8,10,18,0.96));
  border: 1.5px solid rgba(16,185,129,0.55);
  box-shadow:
    0 0 0 1px rgba(255,255,255,0.06) inset,
    0 6px 24px rgba(0,0,0,0.55),
    0 0 18px rgba(16,185,129,0.30);
  color: rgba(167,243,208,0.95);
}
.argus-sta-track--sos .argus-sta-thumb {
  background: radial-gradient(circle at 35% 35%, rgba(220,30,30,0.18), rgba(8,10,18,0.96));
  border: 1.5px solid rgba(239,68,68,0.55);
  box-shadow:
    0 0 0 1px rgba(255,255,255,0.06) inset,
    0 6px 24px rgba(0,0,0,0.55),
    0 0 18px rgba(239,68,68,0.30);
  color: rgba(252,165,165,0.95);
}
.argus-sta-track--sos.sos-pulsing .argus-sta-thumb {
  animation: staThumbPulse 0.8s infinite ease-in-out;
}
@keyframes staThumbPulse {
  0%, 100% {
    box-shadow: 0 0 0 1px rgba(255,255,255,.06) inset, 0 6px 24px rgba(0,0,0,.5), 0 0 32px rgba(239,68,68,0.90);
    border-color: rgba(239,68,68,0.90);
  }
  50% {
    box-shadow: 0 0 0 1px rgba(255,255,255,.06) inset, 0 6px 24px rgba(0,0,0,.5), 0 0 8px rgba(239,68,68,0.25);
    border-color: rgba(239,68,68,0.30);
  }
}

/* The specular highlight ring on thumb */
.argus-sta-thumb::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 25%, rgba(255,255,255,0.18) 0%, transparent 60%);
  pointer-events: none;
}

/* Text label — centered, masked by the thumb */
.argus-sta-label {
  position: absolute;
  left: 68px;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.3px;
  pointer-events: none;
  z-index: 2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: clip;
  /* gradient mask: brighter center, fading at edges */
  -webkit-mask-image: linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.6) 12%, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0.9) 75%, rgba(0,0,0,0.6) 88%, transparent 100%);
  mask-image: linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.6) 12%, rgba(0,0,0,0.9) 25%, rgba(0,0,0,0.9) 75%, rgba(0,0,0,0.6) 88%, transparent 100%);
  transition: opacity 0.12s ease;
}
.argus-sta-track--disarm .argus-sta-label { color: rgba(167,243,208,0.65); }
.argus-sta-track--sos .argus-sta-label    { color: rgba(252,165,165,0.65); }

/* Spring snap-back animation */
.argus-sta-thumb--snap {
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
}

/* PIN modal overlay */
.argus-sta-pin {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 9px;
  z-index: 10;
  backdrop-filter: blur(28px) saturate(160%);
  -webkit-backdrop-filter: blur(28px) saturate(160%);
  background: rgba(8,12,22,0.95);
}
.argus-sta-pin.open { display: flex; }
.argus-sta-pin input {
  width: 120px;
  padding: 8px 12px;
  border-radius: 10px;
  border: 1px solid rgba(16,185,129,0.3);
  background: rgba(255,255,255,0.05);
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 8px;
  outline: none;
}
.argus-sta-pin input.pin-shake {
  animation: pinShake 0.38s ease both;
  border-color: rgba(239,68,68,0.6) !important;
}
@keyframes pinShake {
  10%,90%{transform:translateX(-2px)}
  20%,80%{transform:translateX(4px)}
  30%,50%,70%{transform:translateX(-4px)}
  40%,60%{transform:translateX(4px)}
}
.argus-sta-pin .pin-row { display:flex; gap:8px; }
.argus-sta-pin button {
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid rgba(255,255,255,0.14);
  color: #fff;
  background: rgba(255,255,255,0.08);
}
.argus-sta-pin .pin-ok {
  background: linear-gradient(135deg, #10b981, #059669);
  border-color: rgba(167,243,208,0.4);
}
.argus-sta-pin .pin-err {
  font-size: 10px;
  color: #fca5a5;
  min-height: 14px;
}
`;
  root.appendChild(s);
}

function buildTrack(kind, labelText, icon) {
  const wrap = document.createElement('div');
  wrap.className = `argus-sta-wrap argus-sta-wrap--${kind}`;

  const track = document.createElement('div');
  track.className = `argus-sta-track argus-sta-track--${kind}`;

  const fill = document.createElement('div');
  fill.className = 'argus-sta-fill';

  const thumb = document.createElement('div');
  thumb.className = 'argus-sta-thumb';
  thumb.innerHTML = icon;

  const label = document.createElement('span');
  label.className = 'argus-sta-label';
  label.textContent = labelText;

  const pin = document.createElement('div');
  pin.className = 'argus-sta-pin';
  pin.innerHTML = `
    <input type="password" inputmode="numeric" maxlength="8" autocomplete="off" placeholder="••••"/>
    <div class="pin-err"></div>
    <div class="pin-row">
      <button class="pin-cancel" type="button">✕</button>
      <button class="pin-ok" type="button">✓</button>
    </div>`;

  track.append(fill, thumb, label, pin);
  wrap.appendChild(track);
  return { wrap, track, fill, thumb, label, pin };
}

function attachDrag(panel, kind, track, fill, thumb, label, pin, onDone) {
  const PAD = 4;
  let dragging = false, startX = 0, curX = 0, maxX = 0;

  function getMax() { return track.getBoundingClientRect().width - 56 - PAD * 2; }

  function moveTo(x) {
    maxX = getMax();
    const c = Math.max(0, Math.min(x, maxX));
    thumb.style.transform = `translateX(${c}px)`;
    fill.style.width = `${c + 60}px`;
    // Fade the label away as thumb covers it
    const progress = c / maxX;
    label.style.opacity = String(Math.max(0, 1 - progress * 1.8));
    return c;
  }

  function snapBack() {
    thumb.classList.add('argus-sta-thumb--snap');
    moveTo(0);
    label.style.opacity = '1';
    setTimeout(() => thumb.classList.remove('argus-sta-thumb--snap'), 520);
  }

  function start(clientX) {
    if (pin.classList.contains('open')) return;
    dragging = true;
    maxX = getMax();
    startX = clientX - curX;
    thumb.style.cursor = 'grabbing';
  }

  function move(clientX) {
    if (!dragging) return;
    curX = moveTo(clientX - startX);
  }

  function end() {
    if (!dragging) return;
    dragging = false;
    thumb.style.cursor = 'grab';
    if (curX >= maxX * 0.80) {
      if (kind === 'disarm' && pinRequired(panel)) {
        openPin();
        snapBack();
      } else {
        onDone();
        snapBack();
      }
    } else {
      snapBack();
    }
    curX = 0;
  }

  thumb.addEventListener('mousedown', e => { e.preventDefault(); start(e.clientX); });
  window.addEventListener('mousemove', e => { if (dragging) move(e.clientX); });
  window.addEventListener('mouseup', () => { if (dragging) end(); });
  thumb.addEventListener('touchstart', e => { e.preventDefault(); start(e.touches[0].clientX); }, { passive: false });
  window.addEventListener('touchmove', e => { if (dragging) { e.preventDefault(); move(e.touches[0].clientX); } }, { passive: false });
  window.addEventListener('touchend', () => { if (dragging) end(); });

  // PIN logic
  function openPin() { pin.classList.add('open'); pin.querySelector('input').focus(); }

  const input = pin.querySelector('input');
  const errDiv = pin.querySelector('.pin-err');

  function tryPin() {
    const code = input.value;
    if (doCheckPin(panel, code)) {
      pin.classList.remove('open');
      input.value = ''; errDiv.textContent = '';
      onDone(code);
    } else {
      input.classList.add('pin-shake');
      errDiv.textContent = t(panel, 'wrong_pin');
      setTimeout(() => { input.classList.remove('pin-shake'); errDiv.textContent = ''; input.value = ''; }, 700);
    }
  }

  pin.querySelector('.pin-ok').addEventListener('click', tryPin);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') tryPin(); });
  pin.querySelector('.pin-cancel').addEventListener('click', () => {
    pin.classList.remove('open');
    input.value = ''; errDiv.textContent = '';
  });
}

function pinRequired(panel) {
  return Boolean(
    panel._entries?.[0]?.pin_configured ||
    panel._dashboard?.entries?.[0]?.pin_configured ||
    panel._ui?.master_pin_configured ||
    panel._pinConfigured
  );
}

function doCheckPin(panel, code) {
  if (typeof panel._verifyPin === 'function') return panel._verifyPin(code);
  if (typeof panel._checkMasterPin === 'function') return panel._checkMasterPin(code);
  return false;
}

function mountOnEntry(panel, entry, idx) {
  if (entry.querySelector('.argus-sta-wrap')) return;
  entry.dataset.staInstalled = '1';

  const entityId = entry.dataset.entityId
    || panel._dashboard?.entries?.[idx]?.entity_id
    || '';

  function getState() {
    return String(panel._hass?.states?.[entityId]?.state || 'disarmed').toLowerCase();
  }
  function getPanic() {
    return Boolean(panel._hass?.states?.[entityId]?.attributes?.argus_panic_active);
  }

  // ── DISARM SLIDER ──────────────────────────────────────────────────
  const { wrap: dWrap, track: dTrack, fill: dFill, thumb: dThumb, label: dLabel, pin: dPin } =
    buildTrack('disarm', t(panel, 'slide_disarm'), ICON_DISARM);

  attachDrag(panel, 'disarm', dTrack, dFill, dThumb, dLabel, dPin, (pin) => {
    const realEntryId = panel._dashboard?.entries?.[idx]?.entry_id || '';
    if (typeof panel._send === 'function') {
      panel._send('argus/perform_alarm_action', { action: 'disarm', entry_id: realEntryId, ...(pin ? { code: pin } : {}) }).catch(() => {});
    }
  });

  // ── SOS SLIDER ─────────────────────────────────────────────────────
  const { wrap: sWrap, track: sTrack, fill: sFill, thumb: sThumb, label: sLabel, pin: sPin } =
    buildTrack('sos', t(panel, 'slide_sos'), ICON_SOS);

  attachDrag(panel, 'sos', sTrack, sFill, sThumb, sLabel, sPin, () => {
    const realEntryId = panel._dashboard?.entries?.[idx]?.entry_id || '';
    if (typeof panel._send === 'function') {
      panel._send('argus/perform_alarm_action', { action: 'sos', entry_id: realEntryId }).catch(() => {});
    }
  });

  // Find the liquid-stack and inject sliders at the bottom
  const stack = entry.querySelector('.liquid-stack');
  if (!stack) return;

  // Remove the old plain disarm + sos buttons and replace with sliders
  const oldDisarm = stack.querySelector('.btn-disarm');
  const oldSos = stack.querySelector('.btn-sos');

  // Insert sliders where old buttons were
  if (oldDisarm) {
    oldDisarm.parentNode.insertBefore(dWrap, oldDisarm.nextSibling);
    // Hide the old button completely — slider is the new disarm UI
    oldDisarm.style.display = 'none';
  } else {
    stack.appendChild(dWrap);
  }
  if (oldSos) {
    oldSos.parentNode.insertBefore(sWrap, oldSos.nextSibling);
    // Hide the old SOS button — slider replaces it
    oldSos.style.display = 'none';
  } else {
    stack.appendChild(sWrap);
  }

  // Update slider state reactively
  function refresh() {
    const state = getState();
    const panic = getPanic();
    const isArmed = state !== 'disarmed' && state !== 'unavailable';

    // Disarm slider: only show when armed
    dWrap.classList.toggle('sta-armed', isArmed);

    // SOS: update pulsing thumb and label
    sTrack.classList.toggle('sos-pulsing', panic);
    sLabel.textContent = panic ? t(panel, 'slide_sos_stop') : t(panel, 'slide_sos');
    sThumb.innerHTML = panic ? ICON_SOS_STOP : ICON_SOS;
  }

  refresh();

  // Store refresh fn so hass updates can trigger it
  entry._staRefresh = refresh;
}

function applyToAllEntries(panel) {
  injectStyles(panel);
  const root = panel.shadowRoot;
  if (!root) return;
  root.querySelectorAll('.entry').forEach((entry, idx) => {
    if (!entry.dataset.entityId) {
      const eid = panel._dashboard?.entries?.[idx]?.entity_id;
      if (eid) entry.dataset.entityId = eid;
    }
    mountOnEntry(panel, entry, idx);
    // Refresh state if already installed
    entry._staRefresh?.();
  });
}

export function applySlideToAction(ArgusPanel) {
  if (!ArgusPanel || ArgusPanel.__argusSlideToAction) return;
  ArgusPanel.__argusSlideToAction = true;
  const proto = ArgusPanel.prototype;

  // After entries render
  const prevRender = proto._renderEntries;
  proto._renderEntries = function (...a) {
    const r = prevRender?.call(this, ...a);
    requestAnimationFrame(() => {
      applyToAllEntries(this);
      setTimeout(() => applyToAllEntries(this), 100); // Fail-safe for delayed renders
    });
    return r;
  };

  // After hass update — refresh SOS pulse state and armed/disarmed visibility
  const prevHass = Object.getOwnPropertyDescriptor(proto, '_hass')?.set || proto.set_hass;
  if (prevHass) {
    const prevSet = proto.set_hass;
    proto.set_hass = function (hass) {
      prevSet?.call(this, hass);
      this.shadowRoot?.querySelectorAll('.entry').forEach(entry => entry._staRefresh?.());
    };
  }
}
