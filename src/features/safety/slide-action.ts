// @ts-nocheck
/**
 * Argus Slide-to-Action — v2.2.1
 * iOS-style liquid glass slide-to-disarm and slide-to-SOS controls.
 * Child-lock protection: prevents accidental arming/SOS presses.
 * If a master PIN is configured, slide-to-disarm shows a code prompt before firing.
 */

const STYLE_ID = 'argus-slide-action-styles';

const SLIDE_I18N = {
  es: { slide_disarm: 'Desliza para desarmar', slide_sos: 'Desliza para 🆘 SOS', enter_pin: 'Ingresa el PIN', wrong_pin: 'PIN incorrecto', cancel: 'Cancelar', confirm: 'Confirmar' },
  en: { slide_disarm: 'Slide to disarm', slide_sos: 'Slide for 🆘 SOS', enter_pin: 'Enter PIN', wrong_pin: 'Wrong PIN', cancel: 'Cancel', confirm: 'Confirm' },
  fr: { slide_disarm: 'Glisser pour désarmer', slide_sos: 'Glisser pour 🆘 SOS', enter_pin: 'Entrer le PIN', wrong_pin: 'PIN incorrect', cancel: 'Annuler', confirm: 'Confirmer' },
  pt: { slide_disarm: 'Deslize para desarmar', slide_sos: 'Deslize para 🆘 SOS', enter_pin: 'Inserir PIN', wrong_pin: 'PIN errado', cancel: 'Cancelar', confirm: 'Confirmar' },
  it: { slide_disarm: 'Scorri per disarmare', slide_sos: 'Scorri per 🆘 SOS', enter_pin: 'Inserisci PIN', wrong_pin: 'PIN errato', cancel: 'Annulla', confirm: 'Conferma' },
  zh: { slide_disarm: '滑动撤防', slide_sos: '滑动触发 🆘 SOS', enter_pin: '请输入 PIN', wrong_pin: 'PIN 错误', cancel: '取消', confirm: '确认' },
  'zh-Hant': { slide_disarm: '滑動撤防', slide_sos: '滑動觸發 🆘 SOS', enter_pin: '請輸入 PIN', wrong_pin: 'PIN 錯誤', cancel: '取消', confirm: '確認' },
  ru: { slide_disarm: 'Сдвиньте для снятия', slide_sos: 'Сдвиньте для 🆘 SOS', enter_pin: 'Введите PIN', wrong_pin: 'Неверный PIN', cancel: 'Отмена', confirm: 'Подтвердить' },
  hi: { slide_disarm: 'निरस्त करने के लिए स्लाइड करें', slide_sos: '🆘 SOS के लिए स्लाइड करें', enter_pin: 'PIN दर्ज करें', wrong_pin: 'गलत PIN', cancel: 'रद्द करें', confirm: 'पुष्टि करें' },
  ar: { slide_disarm: 'اسحب لنزع التسليح', slide_sos: 'اسحب لـ 🆘 نداء استغاثة', enter_pin: 'أدخل الرمز', wrong_pin: 'رمز خاطئ', cancel: 'إلغاء', confirm: 'تأكيد' },
  ko: { slide_disarm: '밀어서 해제', slide_sos: '밀어서 🆘 SOS', enter_pin: 'PIN 입력', wrong_pin: '잘못된 PIN', cancel: '취소', confirm: '확인' },
  ja: { slide_disarm: 'スライドして解除', slide_sos: '🆘 SOSのためにスライド', enter_pin: 'PINを入力', wrong_pin: '間違ったPIN', cancel: 'キャンセル', confirm: '確認' },
  uk: { slide_disarm: 'Посуньте для зняття охорони', slide_sos: 'Посуньте для 🆘 SOS', enter_pin: 'Введіть PIN', wrong_pin: 'Неправильний PIN', cancel: 'Скасувати', confirm: 'Підтвердити' },
};

function slideI18n(panel, key) {
  const lang = panel._lang || 'es';
  const dict = SLIDE_I18N[lang] || SLIDE_I18N.es;
  return dict[key] || SLIDE_I18N.es[key] || key;
}

function injectSlideStyles(panel) {
  const root = panel.shadowRoot;
  if (!root || root.getElementById(STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = `
    /* ── Slide-to-Action track ─────────────────────────────────────── */
    .argus-slide-track {
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
      height: 62px;
      border-radius: 31px;
      overflow: hidden;
      cursor: pointer;
      user-select: none;
      touch-action: pan-x;
      -webkit-user-select: none;
      box-sizing: border-box;
      transition: box-shadow 0.22s ease;
      grid-column: 1 / -1;
    }
    .argus-slide-track--disarm {
      background: linear-gradient(135deg, rgba(16,185,129,0.14) 0%, rgba(5,150,105,0.06) 100%);
      border: 1px solid rgba(167,243,208,0.35);
      box-shadow: 0 8px 24px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.22);
    }
    .argus-slide-track--sos {
      background: linear-gradient(135deg, rgba(239,68,68,0.20) 0%, rgba(185,28,28,0.06) 100%);
      border: 1px solid rgba(252,165,165,0.30);
      box-shadow: 0 8px 24px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.22);
    }
    /* glass layer beneath the text */
    .argus-slide-track::before {
      content: '';
      position: absolute;
      inset: 0;
      backdrop-filter: blur(24px) saturate(160%);
      -webkit-backdrop-filter: blur(24px) saturate(160%);
      border-radius: inherit;
      pointer-events: none;
    }
    /* fill that follows the thumb */
    .argus-slide-fill {
      position: absolute;
      left: 0; top: 0; bottom: 0;
      border-radius: inherit;
      pointer-events: none;
      transition: width 0.05s linear;
      will-change: width;
    }
    .argus-slide-track--disarm .argus-slide-fill {
      background: linear-gradient(90deg, rgba(16,185,129,0.28), rgba(5,150,105,0.10));
    }
    .argus-slide-track--sos .argus-slide-fill {
      background: linear-gradient(90deg, rgba(239,68,68,0.34), rgba(185,28,28,0.10));
    }
    /* the draggable thumb */
    .argus-slide-thumb {
      position: absolute;
      left: 5px;
      top: 5px;
      width: 52px;
      height: 52px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      cursor: grab;
      z-index: 3;
      will-change: transform;
      transition: box-shadow 0.15s ease;
      touch-action: none;
    }
    .argus-slide-track--disarm .argus-slide-thumb {
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
      box-shadow: 0 6px 22px rgba(16,185,129,0.55), inset 0 1px 0 rgba(255,255,255,0.45);
      border: 1px solid rgba(167,243,208,0.6);
    }
    .argus-slide-track--sos .argus-slide-thumb {
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
      box-shadow: 0 6px 22px rgba(239,68,68,0.55), inset 0 1px 0 rgba(255,255,255,0.40);
      border: 1px solid rgba(252,165,165,0.6);
    }
    .argus-slide-track--sos.sos-active .argus-slide-thumb {
      animation: sosThumbPulse 0.8s infinite ease-in-out;
    }
    @keyframes sosThumbPulse {
      0%, 100% {
        box-shadow: 0 0 32px rgba(239,68,68,0.9), inset 0 1px 0 rgba(255,255,255,0.5);
        transform: translateX(var(--argus-thumb-x, 0px)) scale(1.05);
      }
      50% {
        box-shadow: 0 0 12px rgba(239,68,68,0.3), inset 0 1px 0 rgba(255,255,255,0.2);
        transform: translateX(var(--argus-thumb-x, 0px)) scale(0.96);
      }
    }
    /* label text */
    .argus-slide-label {
      position: absolute;
      left: 68px;
      right: 16px;
      text-align: center;
      font-size: 13.5px;
      font-weight: 700;
      letter-spacing: 0.4px;
      pointer-events: none;
      z-index: 2;
      transition: opacity 0.15s ease;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .argus-slide-track--disarm .argus-slide-label { color: rgba(167,243,208,0.85); }
    .argus-slide-track--sos .argus-slide-label { color: rgba(252,165,165,0.85); }
    /* bounce snap animation */
    .argus-slide-thumb--snap {
      transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
    }
    /* PIN modal */
    .argus-slide-pin-modal {
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background: rgba(10,14,22,0.97);
      backdrop-filter: blur(28px) saturate(160%);
      -webkit-backdrop-filter: blur(28px) saturate(160%);
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      z-index: 10;
      border: 1px solid rgba(167,243,208,0.25);
    }
    .argus-slide-pin-modal.open { display: flex; }
    .argus-slide-pin-modal input {
      width: 130px;
      padding: 9px 14px;
      border-radius: 12px;
      border: 1px solid rgba(255,255,255,0.2);
      background: rgba(255,255,255,0.06);
      color: #ffffff;
      font-size: 18px;
      font-weight: 700;
      text-align: center;
      letter-spacing: 6px;
      outline: none;
    }
    .argus-slide-pin-modal input.shake {
      animation: pinShake 0.4s cubic-bezier(0.36,0.07,0.19,0.97) both;
      border-color: rgba(239,68,68,0.7) !important;
    }
    @keyframes pinShake {
      10%,90%{transform:translateX(-2px)}
      20%,80%{transform:translateX(4px)}
      30%,50%,70%{transform:translateX(-4px)}
      40%,60%{transform:translateX(4px)}
    }
    .argus-slide-pin-modal .pin-actions {
      display: flex;
      gap: 8px;
    }
    .argus-slide-pin-modal button {
      padding: 7px 16px;
      border-radius: 10px;
      font-size: 12px;
      font-weight: 700;
      cursor: pointer;
      border: 1px solid rgba(255,255,255,0.14);
      color: #fff;
    }
    .argus-slide-pin-modal .pin-confirm {
      background: linear-gradient(135deg, #10b981, #059669);
      border-color: rgba(167,243,208,0.5);
    }
    .argus-slide-pin-modal .pin-cancel {
      background: rgba(255,255,255,0.07);
    }
    .argus-slide-pin-modal .pin-error {
      font-size: 11px;
      color: #fca5a5;
      min-height: 16px;
    }
    /* hide the slider track by default - only show on touch */
    .argus-slide-wrapper {
      width: 100%;
      grid-column: 1 / -1;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.35s cubic-bezier(0.34,1.56,0.64,1), opacity 0.25s ease;
      opacity: 0;
    }
    .argus-slide-wrapper.visible {
      max-height: 80px;
      opacity: 1;
    }
    /* The original disarm/sos button triggers visibility of the slider */
    .btn-disarm-trigger, .btn-sos-trigger {
      transition: all 0.22s ease;
    }
    .btn-disarm-trigger:focus, .btn-disarm-trigger:active,
    .btn-sos-trigger:focus, .btn-sos-trigger:active {
      outline: none;
    }
  `;
  root.appendChild(style);
}

function buildSlideTrack(kind, labelText) {
  const wrapper = document.createElement('div');
  wrapper.className = `argus-slide-wrapper argus-slide-wrapper--${kind}`;

  const track = document.createElement('div');
  track.className = `argus-slide-track argus-slide-track--${kind}`;
  track.setAttribute('role', 'slider');
  track.setAttribute('aria-label', labelText);
  track.setAttribute('aria-valuemin', '0');
  track.setAttribute('aria-valuemax', '100');
  track.setAttribute('aria-valuenow', '0');

  const fill = document.createElement('div');
  fill.className = 'argus-slide-fill';

  const thumb = document.createElement('div');
  thumb.className = 'argus-slide-thumb';
  thumb.innerHTML = kind === 'disarm' ? '🔓' : '🚨';

  const label = document.createElement('span');
  label.className = 'argus-slide-label';
  label.textContent = labelText;

  const pinModal = document.createElement('div');
  pinModal.className = 'argus-slide-pin-modal';
  pinModal.innerHTML = `
    <input type="password" inputmode="numeric" maxlength="8" autocomplete="off" placeholder="••••" />
    <div class="pin-error"></div>
    <div class="pin-actions">
      <button class="pin-cancel" type="button">${kind === 'disarm' ? '✕' : '✕'}</button>
      <button class="pin-confirm" type="button">✓</button>
    </div>
  `;

  track.appendChild(fill);
  track.appendChild(thumb);
  track.appendChild(label);
  track.appendChild(pinModal);
  wrapper.appendChild(track);
  return { wrapper, track, fill, thumb, label, pinModal };
}

function attachSlideInteraction(panel, kind, track, fill, thumb, label, pinModal, onComplete) {
  const TRACK_H = 62;
  const THUMB_SIZE = 52;
  const THUMB_PAD = 5;
  let dragging = false;
  let startX = 0;
  let curX = 0;
  let maxX = 0;

  function getTrackWidth() {
    return track.getBoundingClientRect().width;
  }

  function setThumbPos(x) {
    const clamped = Math.max(0, Math.min(x, maxX));
    thumb.style.transform = `translateX(${clamped}px)`;
    thumb.style.setProperty('--argus-thumb-x', `${clamped}px`);
    fill.style.width = `${clamped + THUMB_SIZE + THUMB_PAD}px`;
    const pct = Math.round((clamped / maxX) * 100);
    track.setAttribute('aria-valuenow', String(pct));
    label.style.opacity = String(Math.max(0, 1 - (clamped / maxX) * 2));
    return clamped;
  }

  function snapBack() {
    thumb.classList.add('argus-slide-thumb--snap');
    setThumbPos(0);
    setTimeout(() => thumb.classList.remove('argus-slide-thumb--snap'), 500);
    label.style.opacity = '1';
    fill.style.width = '0';
  }

  function onStart(clientX) {
    if (pinModal.classList.contains('open')) return;
    dragging = true;
    startX = clientX - (curX || 0);
    maxX = getTrackWidth() - THUMB_SIZE - THUMB_PAD * 2;
    thumb.style.cursor = 'grabbing';
    track.style.boxShadow = kind === 'disarm'
      ? '0 14px 36px rgba(16,185,129,0.35), inset 0 1px 0 rgba(255,255,255,0.22)'
      : '0 14px 36px rgba(239,68,68,0.35), inset 0 1px 0 rgba(255,255,255,0.22)';
  }

  function onMove(clientX) {
    if (!dragging) return;
    curX = setThumbPos(clientX - startX);
  }

  function onEnd() {
    if (!dragging) return;
    dragging = false;
    thumb.style.cursor = 'grab';
    track.style.boxShadow = '';
    if (curX >= maxX * 0.82) {
      // Completed!
      if (kind === 'disarm' && panel._pinRequired()) {
        pinModal.classList.add('open');
        pinModal.querySelector('input').focus();
        snapBack(); // reset thumb position while PIN modal shows
      } else {
        onComplete();
        snapBack();
      }
    } else {
      snapBack();
    }
    curX = 0;
  }

  // Mouse
  thumb.addEventListener('mousedown', e => { e.preventDefault(); onStart(e.clientX); });
  document.addEventListener('mousemove', e => { if (dragging) { e.preventDefault(); onMove(e.clientX); } });
  document.addEventListener('mouseup', () => { if (dragging) onEnd(); });

  // Touch
  thumb.addEventListener('touchstart', e => { e.preventDefault(); onStart(e.touches[0].clientX); }, { passive: false });
  document.addEventListener('touchmove', e => { if (dragging) { e.preventDefault(); onMove(e.touches[0].clientX); } }, { passive: false });
  document.addEventListener('touchend', () => { if (dragging) onEnd(); });

  // PIN modal logic
  if (kind === 'disarm') {
    const input = pinModal.querySelector('input');
    const errorDiv = pinModal.querySelector('.pin-error');
    const confirmBtn = pinModal.querySelector('.pin-confirm');
    const cancelBtn = pinModal.querySelector('.pin-cancel');

    function attemptPin() {
      const code = input.value;
      if (panel._checkPin && panel._checkPin(code)) {
        pinModal.classList.remove('open');
        input.value = '';
        errorDiv.textContent = '';
        onComplete();
      } else {
        input.classList.add('shake');
        errorDiv.textContent = slideI18n(panel, 'wrong_pin');
        setTimeout(() => { input.classList.remove('shake'); errorDiv.textContent = ''; }, 800);
        input.value = '';
      }
    }

    confirmBtn.addEventListener('click', attemptPin);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') attemptPin(); });
    cancelBtn.addEventListener('click', () => {
      pinModal.classList.remove('open');
      input.value = '';
      errorDiv.textContent = '';
    });
  }
}

function pinRequired(panel) {
  // Check if the entry has a PIN configured
  return Boolean(panel._entries?.[0]?.pin_configured || panel._dashboard?.entries?.[0]?.pin_configured);
}

function checkPin(panel, code) {
  // Delegate to the panel's existing PIN check if available
  if (typeof panel._verifyPin === 'function') return panel._verifyPin(code);
  if (typeof panel._checkMasterPin === 'function') return panel._checkMasterPin(code);
  // Fallback: try to call disarm with pin (it will reject if wrong), but for security we return false
  return false;
}

function updateSliders(panel, entry) {
  const root = panel.shadowRoot;
  if (!root) return;

  const disarmWrapper = entry.querySelector('.argus-slide-wrapper--disarm');
  const sosWrapper = entry.querySelector('.argus-slide-wrapper--sos');
  const disarmTrigger = entry.querySelector('.btn-disarm-trigger');
  const sosTrigger = entry.querySelector('.btn-sos-trigger');
  const sosTrack = entry.querySelector('.argus-slide-track--sos');

  const entityId = entry.dataset.entityId;
  const state = String(panel._hass?.states?.[entityId]?.state || 'disarmed');
  const panicActive = Boolean(panel._hass?.states?.[entityId]?.attributes?.argus_panic_active);

  // Show/hide disarm slider only when armed
  if (disarmTrigger) {
    disarmTrigger.addEventListener('click', () => {
      if (disarmWrapper && state !== 'disarmed') {
        disarmWrapper.classList.toggle('visible');
        sosTrigger && sosTrigger !== document.activeElement && sosWrapper?.classList.remove('visible');
      }
    });
  }

  // Show/hide SOS slider on touch of SOS trigger button
  if (sosTrigger) {
    sosTrigger.addEventListener('click', () => {
      if (sosWrapper) {
        sosWrapper.classList.toggle('visible');
        disarmWrapper?.classList.remove('visible');
      }
    });
  }

  // Update SOS pulsing based on panicActive
  if (sosTrack) {
    sosTrack.classList.toggle('sos-active', panicActive);
  }
}

function mountSliders(panel, entry) {
  const stack = entry.querySelector('.liquid-stack');
  if (!stack || stack.dataset.slidersInstalled) return;
  stack.dataset.slidersInstalled = '1';

  const entityId = entry.dataset.entityId;
  const state = String(panel._hass?.states?.[entityId]?.state || 'disarmed');
  const panicActive = Boolean(panel._hass?.states?.[entityId]?.attributes?.argus_panic_active);

  // Build disarm slider
  const { wrapper: dWrapper, track: dTrack, fill: dFill, thumb: dThumb, label: dLabel, pinModal: dPin } =
    buildSlideTrack('disarm', slideI18n(panel, 'slide_disarm'));
  attachSlideInteraction(
    panel, 'disarm', dTrack, dFill, dThumb, dLabel, dPin,
    () => {
      // Trigger the existing disarm flow
      const disarmBtn = stack.querySelector('.btn-disarm, [data-action="disarm"]');
      if (disarmBtn) {
        panel._handleLiquidButtonClick?.({ target: disarmBtn, currentTarget: disarmBtn, preventDefault: () => {} });
      } else if (typeof panel._runWithPin === 'function') {
        panel._runWithPin(async () => {
          const eid = entityId || panel._dashboard?.entries?.[0]?.entity_id;
          await panel._send('argus/set_mode', { mode: 'disarmed', entity_id: eid });
        });
      }
      dWrapper.classList.remove('visible');
    }
  );

  // Build SOS slider
  const { wrapper: sWrapper, track: sTrack, fill: sFill, thumb: sThumb, label: sLabel, pinModal: sPin } =
    buildSlideTrack('sos', slideI18n(panel, 'slide_sos'));
  if (panicActive) sTrack.classList.add('sos-active');

  attachSlideInteraction(
    panel, 'sos', sTrack, sFill, sThumb, sLabel, sPin,
    () => {
      // Toggle SOS
      const panicNow = Boolean(panel._hass?.states?.[entityId]?.attributes?.argus_panic_active);
      const sosBtn = stack.querySelector('.btn-sos, [data-action="sos"], [data-action="stop-sos"]');
      if (sosBtn) {
        panel._handleLiquidButtonClick?.({ target: sosBtn, currentTarget: sosBtn, preventDefault: () => {} });
      } else if (typeof panel._send === 'function') {
        const eid = entityId || panel._dashboard?.entries?.[0]?.entity_id;
        panel._send('argus/sos', { entity_id: eid, active: !panicNow });
      }
      sWrapper.classList.remove('visible');
    }
  );

  // Update SOS label when panic is active (stop SOS)
  if (panicActive) {
    sLabel.textContent = panel._t?.('sos_stop') || 'Detener SOS';
    sThumb.innerHTML = '🛑';
  }

  // Add PIN check helpers
  panel._pinRequired = () => pinRequired(panel);
  panel._checkPin = (code) => checkPin(panel, code);

  // Update PIN label text on the confirm button
  const pinLabelKeyMap = { disarm: 'slide_disarm', sos: 'slide_sos' };
  [dPin, sPin].forEach((modal, i) => {
    const cancelBtn = modal.querySelector('.pin-cancel');
    const confirmBtn = modal.querySelector('.pin-confirm');
    if (cancelBtn) cancelBtn.title = slideI18n(panel, 'cancel');
    if (confirmBtn) confirmBtn.title = slideI18n(panel, 'confirm');
  });

  // Add the wrappers to the liquid-stack AFTER the disarm/sos buttons
  stack.appendChild(dWrapper);
  stack.appendChild(sWrapper);

  // Wire trigger buttons
  const disarmBtn = stack.querySelector('.btn-disarm-trigger, .btn-disarm');
  const sosBtn = stack.querySelector('.btn-sos-trigger, .btn-sos');

  if (disarmBtn) {
    // Override click to show/hide slider instead of direct action (if armed)
    disarmBtn.addEventListener('click', (e) => {
      const curState = String(panel._hass?.states?.[entityId]?.state || 'disarmed');
      if (curState !== 'disarmed') {
        e.preventDefault();
        e.stopImmediatePropagation();
        dWrapper.classList.toggle('visible');
        sWrapper.classList.remove('visible');
      }
      // if already disarmed, the class 'active' will be showing — no need for slider
    }, true); // capture phase so we intercept before the panel's handler
  }

  if (sosBtn) {
    sosBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopImmediatePropagation();
      sWrapper.classList.toggle('visible');
      dWrapper.classList.remove('visible');
    }, true);
  }

  // Close sliders if clicking outside
  document.addEventListener('click', (e) => {
    if (!entry.contains(e.target)) {
      dWrapper.classList.remove('visible');
      sWrapper.classList.remove('visible');
    }
  });
}

export function applySlideToAction(ArgusPanel) {
  if (!ArgusPanel || ArgusPanel.__argusSlideToAction) return;
  ArgusPanel.__argusSlideToAction = true;
  const proto = ArgusPanel.prototype;

  // Inject styles after render
  const prevRenderEntries = proto._renderEntries;
  proto._renderEntries = function (...args) {
    const result = prevRenderEntries?.call(this, ...args);
    injectSlideStyles(this);
    requestAnimationFrame(() => {
      const root = this.shadowRoot;
      if (!root) return;
      root.querySelectorAll('.entry[data-entity-id], .entry[data-idx]').forEach(entry => {
        // Try to get entity ID from the entry
        if (!entry.dataset.entityId) {
          const idx = Number(entry.dataset.idx || 0);
          const eid = this._dashboard?.entries?.[idx]?.entity_id;
          if (eid) entry.dataset.entityId = eid;
        }
        mountSliders(this, entry);
      });
    });
    return result;
  };

  // Re-localize sliders on language change
  const prevSetLanguage = proto._setLanguage || proto._applyLanguage;
  if (prevSetLanguage) {
    proto._setLanguage = function (...args) {
      const result = prevSetLanguage.call(this, ...args);
      const root = this.shadowRoot;
      if (root) {
        root.querySelectorAll('.argus-slide-track--disarm .argus-slide-label').forEach(el => {
          el.textContent = slideI18n(this, 'slide_disarm');
        });
        root.querySelectorAll('.argus-slide-track--sos .argus-slide-label').forEach(el => {
          const panicActive = Boolean(this._hass?.states?.[this._dashboard?.entries?.[0]?.entity_id]?.attributes?.argus_panic_active);
          el.textContent = panicActive ? (this._t?.('sos_stop') || 'Detener SOS') : slideI18n(this, 'slide_sos');
        });
      }
      return result;
    };
  }
}
