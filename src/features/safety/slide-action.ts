// @ts-nocheck
/**
 * Argus Slide-to-Action — v2.2.93
 * iOS "slide to power off" style — Español / English / HA auto-detect.
 */

const STYLE_ID = 'argus-slide-action-styles';

const SLIDE_I18N = {
  es: {
    slide_disarm: 'Desliza para desarmar',
    slide_sos: 'Desliza para activar SOS',
    slide_sos_stop: 'Desliza para detener SOS',
    tap_disarm: 'Desarmar',
    tap_sos: 'Activar SOS',
    tap_sos_stop: 'Detener SOS',
    enter_pin: 'Ingresa el PIN maestro',
    wrong_pin: 'PIN incorrecto',
    cancel: 'Cancelar'
  },
  en: {
    slide_disarm: 'Slide to disarm',
    slide_sos: 'Slide to trigger SOS',
    slide_sos_stop: 'Slide to stop SOS',
    tap_disarm: 'Disarm',
    tap_sos: 'Trigger SOS',
    tap_sos_stop: 'Stop SOS',
    enter_pin: 'Enter master PIN',
    wrong_pin: 'Wrong PIN',
    cancel: 'Cancel'
  },
};

function isTouchMode(panel) {
  if (typeof panel?._getProfileGesture === 'function') {
    return panel._getProfileGesture() === 'touch';
  }
  if (panel?.getAttribute?.('argus-gesture') === 'touch') return true;
  try {
    const profId = panel?._currentProfile?.id || 'default';
    const stored = localStorage.getItem(`argus_gesture_${profId}`);
    if (stored === 'touch') return true;
    if (stored === 'slide') return false;
    const global = localStorage.getItem('argus_gesture_global');
    if (global === 'touch') return true;
  } catch (_) {}
  return false;
}

function getActiveLang(panel) {
  if (typeof panel._getCurrentLangCode === 'function') {
    return panel._getCurrentLangCode();
  }
  let raw = panel._manualLang || panel._lang;
  if (!raw) {
    try { raw = localStorage.getItem('argus_lang'); } catch(_) {}
  }
  if (!raw || raw === 'auto') {
    raw = panel._ui?.manual_lang || panel._ui?.language || panel._hass?.language || 'en';
  }
  raw = String(raw || 'en').trim();
  if (SLIDE_I18N[raw]) return raw;
  const short = raw.split(/[-_]/)[0].toLowerCase();
  if (SLIDE_I18N[short]) return short;
  // Spanish variants → es; everything else → en
  return short.startsWith('es') ? 'es' : 'en';
}

function t(panel, key) {
  const lang = getActiveLang(panel);
  if (panel._t) {
    const val = panel._t(key);
    if (val && val !== key) return val;
  }
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

/* The pill track — 3D Liquid Glass */
.argus-sta-track {
  position: relative;
  width: 100%;
  height: 64px;
  border-radius: 999px;
  overflow: hidden;
  user-select: none;
  -webkit-user-select: none;
  cursor: pointer;
  box-sizing: border-box;
  backdrop-filter: blur(32px) saturate(190%) brightness(1.08);
  -webkit-backdrop-filter: blur(32px) saturate(190%) brightness(1.08);
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.03) 100%);
  border: 1px solid rgba(255, 255, 255, 0.25);
  box-shadow: inset 0 1.5px 0 rgba(255, 255, 255, 0.35), inset 0 2px 8px rgba(0, 0, 0, 0.35), 0 8px 24px rgba(0, 0, 0, 0.35);
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;
  transform: translate3d(0,0,0);
  touch-action: none;
  overscroll-behavior: contain;
}
.argus-sta-track--disarm {
  border-color: rgba(52, 211, 153, 0.55);
  box-shadow: inset 0 1.5px 0 rgba(255, 255, 255, 0.4), 0 0 20px rgba(16, 185, 129, 0.2), 0 8px 24px rgba(0,0,0,0.35);
}
.argus-sta-track--sos {
  border-color: rgba(248, 113, 113, 0.55);
  box-shadow: inset 0 1.5px 0 rgba(255, 255, 255, 0.4), 0 0 20px rgba(239, 68, 68, 0.2), 0 8px 24px rgba(0,0,0,0.35);
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
  background: linear-gradient(90deg, rgba(16,185,129,0.35), rgba(5,150,105,0.12));
}
.argus-sta-track--sos .argus-sta-fill {
  background: linear-gradient(90deg, rgba(239,68,68,0.38), rgba(185,28,28,0.12));
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
  backdrop-filter: blur(20px) saturate(190%);
  -webkit-backdrop-filter: blur(20px) saturate(190%);
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease;
}
.argus-sta-thumb:active { cursor: grabbing; }

/* While dragging, the thumb must follow the pointer on the current frame.
   The spring transition is reserved for the release/snap-back animation. */
.argus-sta-track.is-dragging .argus-sta-thumb {
  transition: none !important;
  cursor: grabbing;
}
.argus-sta-track.is-dragging .argus-sta-fill {
  transition: none !important;
}

.argus-sta-track--disarm .argus-sta-thumb {
  background: radial-gradient(circle at 35% 35%, rgba(52, 211, 153, 0.35), rgba(10, 24, 20, 0.95));
  border: 1.5px solid rgba(52, 211, 153, 0.85);
  box-shadow:
    inset 0 1.5px 0 rgba(255, 255, 255, 0.65),
    0 8px 24px rgba(0, 0, 0, 0.5),
    0 0 20px rgba(16, 185, 129, 0.45);
  color: #ffffff;
}
.argus-sta-track--sos .argus-sta-thumb {
  background: radial-gradient(circle at 35% 35%, rgba(248, 113, 113, 0.35), rgba(28, 12, 16, 0.95));
  border: 1.5px solid rgba(248, 113, 113, 0.85);
  box-shadow:
    inset 0 1.5px 0 rgba(255, 255, 255, 0.65),
    0 8px 24px rgba(0, 0, 0, 0.5),
    0 0 20px rgba(239, 68, 68, 0.45);
  color: #ffffff;
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

/* Text label — centered, crisp solid white */
.argus-sta-label {
  position: absolute;
  left: 68px;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.5px;
  pointer-events: none;
  z-index: 2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #ffffff !important;
  text-shadow: 0 1px 3px rgba(0,0,0,0.7);
  transition: opacity 0.12s ease;
}
.argus-sta-track--disarm .argus-sta-label { color: #ffffff !important; }
.argus-sta-track--sos .argus-sta-label    { color: #ffffff !important; }

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

/* ── Accessible Button Mode (Touch) ─────────────────────────────── */
.argus-sta-wrap.sta-mode-touch {
  margin-top: 4px;
}
.argus-sta-wrap.sta-mode-touch .argus-sta-thumb,
.argus-sta-wrap.sta-mode-touch .argus-sta-fill {
  display: none !important;
}
.argus-sta-wrap.sta-mode-touch .argus-sta-track {
  height: 56px !important;
  min-height: 56px !important;
  border-radius: 999px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
  padding: 0 16px !important;
  text-align: center !important;
  transform: none !important;
  box-sizing: border-box !important;
  outline: none !important;
  transition: transform 0.15s ease, filter 0.15s ease, box-shadow 0.15s ease !important;
}
.argus-sta-wrap.sta-mode-touch .argus-sta-track:active {
  transform: scale(0.97) !important;
}
.argus-sta-wrap.sta-mode-touch .argus-sta-track:focus-visible {
  outline: 3px solid #ffffff !important;
  outline-offset: 2px !important;
}
.argus-sta-wrap.sta-mode-touch .argus-sta-label {
  position: static !important;
  left: auto !important;
  right: auto !important;
  top: auto !important;
  transform: none !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 10px !important;
  width: 100% !important;
  font-size: 15px !important;
  font-weight: 800 !important;
  letter-spacing: 0.04em !important;
  text-transform: uppercase !important;
  color: #ffffff !important;
  pointer-events: none !important;
  opacity: 1 !important;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.7) !important;
}

/* Red SOS Normal Touch Button */
.argus-sta-wrap--sos.sta-mode-touch .argus-sta-track {
  background: linear-gradient(135deg, rgba(255,255,255,.14), rgba(255,255,255,.035)), #171d23 !important;
  border: 1.5px solid var(--sta-border,rgba(255,255,255,.35)) !important;
  box-shadow: 0 4px 18px rgba(220, 38, 38, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.4) !important;
}
.argus-sta-wrap--sos.sta-mode-touch .argus-sta-track:hover {
  filter: brightness(1.1) !important;
  box-shadow: 0 6px 24px rgba(220, 38, 38, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.5) !important;
}

/* Red SOS Button Active / Triggered: Letters blink noticeably at medium speed */
.argus-sta-wrap--sos.sta-mode-touch.sos-active .argus-sta-track {
  background: linear-gradient(135deg, #b91c1c 0%, #7f1d1d 100%) !important;
  border-color: #fca5a5 !important;
  box-shadow: 0 0 28px rgba(239, 68, 68, 0.85), inset 0 0 14px rgba(255, 255, 255, 0.35) !important;
}
.argus-sta-wrap--sos.sta-mode-touch.sos-active .argus-sta-label,
.argus-sta-wrap--sos.sta-mode-touch.sos-active .argus-sta-label span,
.argus-sta-wrap--sos.sta-mode-touch.sos-active .sta-sos-text {
  animation: sosLettersBlink 0.75s ease-in-out infinite !important;
}

@keyframes sosLettersBlink {
  0%, 100% {
    opacity: 1;
    text-shadow: 0 0 14px rgba(255, 255, 255, 1), 0 0 28px rgba(255, 255, 255, 0.9);
  }
  50% {
    opacity: 0.65;
    text-shadow: none;
  }
}

/* Green Disarm Normal Touch Button (Only appears when armed via .sta-armed) */
.argus-sta-wrap--disarm.sta-mode-touch .argus-sta-track {
  background: linear-gradient(135deg, rgba(255,255,255,.14), rgba(255,255,255,.035)), #171d23 !important;
  border: 1.5px solid var(--sta-border,rgba(255,255,255,.35)) !important;
  box-shadow: 0 4px 18px rgba(16, 185, 129, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.4) !important;
}
.argus-sta-wrap--disarm.sta-mode-touch .argus-sta-track:hover {
  filter: brightness(1.1) !important;
  box-shadow: 0 6px 24px rgba(16, 185, 129, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.5) !important;
}
.argus-sta-wrap.sta-mode-touch .argus-sta-pin {
  border-radius: 999px !important;
}
`;
  root.appendChild(s);
}


/** Installs the shared slider skin; React owns all slider markup and pointer state. */
export function installSlideActionStyles(panel) {
  injectStyles(panel);
}

export { isTouchMode as isSlideTouchMode };
