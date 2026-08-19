// @ts-nocheck
const STATUS_TEXT={
  es:{on:'Conectado',off:'Argus desconectado · HA sin conexión'},
  en:{on:'Connected',off:'Argus disconnected · HA offline'},
  fr:{on:'Connecté',off:'Argus déconnecté · HA hors ligne'},
  pt:{on:'Conectado',off:'Argus desconectado · HA sem conexão'},
  it:{on:'Connesso',off:'Argus disconnesso · HA offline'},
  zh:{on:'已连接',off:'Argus 已断开 · HA 离线'},
  'zh-hant':{on:'已連線',off:'Argus 已中斷 · HA 離線'},
  ru:{on:'Подключено',off:'Argus отключён · HA не в сети'},
  hi:{on:'सक्रिय',off:'Argus डिस्कनेक्ट · HA ऑफ़लाइन'},
  ar:{on:'متصل',off:'Argus غير متصل · HA غير متصل'},
  ko:{on:'연결됨',off:'Argus 연결 끊김 · HA 오프라인'},
  uk:{on:'Підключено',off:'Argus відключено · HA офлайн'}
};
const languageFor=panel=>{const raw=String(panel._manualLang||panel._hass?.language||panel._hass?.locale?.language||'en').toLowerCase().split(/[-_]/)[0];return STATUS_TEXT[raw]||STATUS_TEXT.en};
function installStyles(panel){if(panel.shadowRoot?.getElementById('argus-fullscreen-polish-style'))return;const style=document.createElement('style');style.id='argus-fullscreen-polish-style';style.textContent=`
:host(.fullscreen-active) {
  position: fixed !important;
  inset: 0 !important;
  z-index: 99999999 !important;
  width: 100vw !important;
  height: 100vh !important;
  height: 100dvh !important;
  background: #02050a !important;
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  overflow: hidden !important;
  animation: argusFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
}

/* Completely isolate fullscreen: Hide all surrounding headers, toolbars, and widgets */
:host(.fullscreen-active) .hero,
:host(.fullscreen-active) .argus-dashboard,
:host(.fullscreen-active) .argus-dashboard__toolbar,
:host(.fullscreen-active) .argus-dashboard__feedback,
:host(.fullscreen-active) .argus-widget__edit-header,
:host(.fullscreen-active) .argus-widget:not(:has(.ios-fullscreen)),
:host(.fullscreen-active) .panel-head,
:host(.fullscreen-active) .dashboard-instances > .panel-head,
:host(.fullscreen-active) #h-instances,
:host(.fullscreen-active) .grid > .stack:not(:first-child),
:host(.fullscreen-active) .grid > .stack:first-child > section:not(:first-child),
:host(.fullscreen-active) .grid > .stack:first-child > section:first-child > .panel-head,
:host(.fullscreen-active) .personalize-section {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
  height: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
}

:host(.fullscreen-active) .wrap,
:host(.fullscreen-active) .grid,
:host(.fullscreen-active) .grid > .stack:first-child,
:host(.fullscreen-active) .grid > .stack:first-child > section:first-child,
:host(.fullscreen-active) #w-instances,
:host(.fullscreen-active) #entries {
  width: 100% !important;
  height: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
}

:host(.fullscreen-active) #entries > .entry:not(.ios-fullscreen) {
  display: none !important;
}

:host(.fullscreen-active) #entries > .entry.ios-fullscreen {
  position: fixed !important;
  inset: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  height: 100dvh !important;
  margin: 0 !important;
  padding: 0 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  background: radial-gradient(ellipse at 50% 50%, #162438 0%, #08101a 60%, #010408 100%) !important;
  border: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  z-index: 99999999 !important;
  overflow: hidden !important;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  animation: argusScaleIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
  will-change: transform, opacity !important;
}

/* ── Exit Fullscreen Button ──────────────────────────────────────────────── */
.ios-fullscreen .entry-exit-fs {
  position: absolute !important;
  top: max(16px, env(safe-area-inset-top, 16px)) !important;
  left: max(16px, env(safe-area-inset-left, 16px)) !important;
  z-index: 120 !important;
  width: 40px !important;
  height: 40px !important;
  border-radius: 50% !important;
  background: rgba(0, 0, 0, 0.55) !important;
  backdrop-filter: blur(20px) saturate(190%) !important;
  -webkit-backdrop-filter: blur(20px) saturate(190%) !important;
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
  color: #ffffff !important;
  font-size: 20px !important;
  font-weight: 700 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
  box-shadow: 0 8px 24px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.4) !important;
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background 0.2s ease !important;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}
.ios-fullscreen .entry-exit-fs:hover {
  transform: scale(1.08) translate3d(0,0,0) !important;
  background: rgba(255, 255, 255, 0.20) !important;
}
.ios-fullscreen .entry-exit-fs:active {
  transform: scale(0.92) translate3d(0,0,0) !important;
}
.entry:not(.ios-fullscreen) .entry-exit-fs {
  display: none !important;
}
.entry:not(.ios-fullscreen) .entry-fs {
  display: flex !important;
}
.ios-fullscreen .entry-fs {
  display: none !important;
}

/* ── HUD Header (Zero Overlap, Clean Symmetry) ─────────────────────────── */
.console-hud {
  position: relative !important;
  width: 100% !important;
  box-sizing: border-box !important;
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  padding: 0 !important;
  margin: 0 !important;
  background: transparent !important;
  border: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  overflow: visible !important;
  min-height: 38px !important;
}

.console-hud-loc {
  justify-self: flex-start !important;
  display: inline-flex !important;
  align-items: center !important;
  height: 36px !important;
  box-sizing: border-box !important;
  padding: 0 16px !important;
  margin-left: 50px !important;
  max-width: clamp(120px, 26vw, 240px) !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  border-radius: 999px !important;
  background: linear-gradient(135deg, rgba(255,255,255,0.20), rgba(255,255,255,0.06)) !important;
  border: 1px solid rgba(255,255,255,0.28) !important;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.38), 0 8px 24px rgba(0,0,0,0.35) !important;
  backdrop-filter: blur(20px) saturate(180%) !important;
  -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
  font-size: 11.5px !important;
  font-weight: 850 !important;
  letter-spacing: 0.04em !important;
  color: #ffffff !important;
  text-shadow: 0 1px 3px rgba(0,0,0,0.5) !important;
}

.console-hud-right {
  justify-self: flex-end !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: flex-end !important;
  gap: 8px !important;
  min-width: 0 !important;
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
  height: 36px !important;
}

.console-system-badge {
  display: inline-flex !important;
  align-items: center !important;
  height: 36px !important;
  box-sizing: border-box !important;
  padding: 0 16px !important;
  border-radius: 999px !important;
  font-size: 11px !important;
  font-weight: 900 !important;
  letter-spacing: 0.05em !important;
  text-transform: uppercase !important;
  white-space: nowrap !important;
  backdrop-filter: blur(20px) saturate(180%) !important;
  -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
}

.console-system-badge--disarmed {
  color: #00ff9d !important;
  color: color(display-p3 0 1 0.6) !important;
  background: linear-gradient(135deg, rgba(0,255,157,0.28), rgba(0,180,100,0.10)) !important;
  border: 1.5px solid rgba(0,255,157,0.60) !important;
  box-shadow: 0 0 28px rgba(0,255,157,0.38), inset 0 1px 0 rgba(255,255,255,0.45) !important;
  text-shadow: 0 0 10px rgba(0,255,157,0.7) !important;
}
.console-system-badge--armed_home,
.console-system-badge--armed_away,
.console-system-badge--armed_night,
.console-system-badge--armed_vacation,
.console-system-badge--pending {
  color: #ffb700 !important;
  color: color(display-p3 1 0.72 0.1) !important;
  background: linear-gradient(135deg, rgba(255,183,0,0.30), rgba(180,120,0,0.12)) !important;
  border: 1.5px solid rgba(255,183,0,0.65) !important;
  box-shadow: 0 0 28px rgba(255,183,0,0.38), inset 0 1px 0 rgba(255,255,255,0.45) !important;
  text-shadow: 0 0 10px rgba(255,183,0,0.7) !important;
}
.console-system-badge--triggered {
  color: #ff3344 !important;
  color: color(display-p3 1 0.2 0.25) !important;
  background: linear-gradient(135deg, rgba(255,51,68,0.38), rgba(180,20,30,0.15)) !important;
  border: 1.5px solid rgba(255,51,68,0.75) !important;
  box-shadow: 0 0 35px rgba(255,51,68,0.55), inset 0 1px 0 rgba(255,255,255,0.45) !important;
  text-shadow: 0 0 12px rgba(255,51,68,0.85) !important;
}

.argus-connection-pill {
  position: absolute !important;
  left: 50% !important;
  top: 50% !important;
  transform: translate(-50%, -50%) !important;
  z-index: 60 !important;
  margin: 0 !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 8px !important;
  height: 36px !important;
  box-sizing: border-box !important;
  padding: 0 16px !important;
  border-radius: 999px !important;
  white-space: nowrap !important;
  font-size: 11px !important;
  font-weight: 850 !important;
  letter-spacing: 0.04em !important;
  backdrop-filter: blur(20px) saturate(190%) !important;
  -webkit-backdrop-filter: blur(20px) saturate(190%) !important;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1) !important;
}
.argus-connection-pill[data-online="true"] {
  color: #00ff9d !important;
  color: color(display-p3 0 1 0.6) !important;
  background: linear-gradient(135deg, rgba(0,255,157,0.28), rgba(0,180,100,0.10)) !important;
  border: 1.5px solid rgba(0,255,157,0.60) !important;
  box-shadow: 0 0 28px rgba(0,255,157,0.38), inset 0 1px 0 rgba(255,255,255,0.45) !important;
  text-shadow: 0 0 10px rgba(0,255,157,0.7) !important;
}
.argus-connection-pill[data-online="false"] {
  color: #ff9d00 !important;
  color: color(display-p3 1 0.65 0) !important;
  background: linear-gradient(135deg, rgba(255,157,0,0.30), rgba(180,100,0,0.12)) !important;
  border: 1.5px solid rgba(255,157,0,0.65) !important;
  box-shadow: 0 0 28px rgba(255,157,0,0.38), inset 0 1px 0 rgba(255,255,255,0.4) !important;
  text-shadow: 0 0 10px rgba(255,157,0,0.7) !important;
}
.argus-connection-dot {
  width: 7px !important;
  height: 7px !important;
  flex: 0 0 7px !important;
  border-radius: 50% !important;
  background: currentColor !important;
  box-shadow: 0 0 10px currentColor, 0 0 20px currentColor !important;
}

/* ── Fullscreen Desktop & Tablet 16:9 ───────────────────────────────────── */
@media (min-width: 901px) {
  .ios-fullscreen .entry-content.security-console {
    width: min(96vw, calc((96vh - 32px) * 16 / 9)) !important;
    aspect-ratio: 16 / 9 !important;
    max-width: 1540px !important;
    max-height: calc(100vh - 48px) !important;
    height: auto !important;
    margin: auto !important;
    border-radius: 36px !important;
    border: 1px solid rgba(255, 255, 255, 0.28) !important;
    box-shadow: 0 0 80px rgba(0, 255, 157, 0.16), 0 35px 90px rgba(0, 0, 0, 0.9), inset 0 1.5px 0 rgba(255, 255, 255, 0.45) !important;
    background: radial-gradient(ellipse at 50% 45%, rgba(22, 36, 56, 0.85) 0%, rgba(8, 16, 26, 0.95) 60%, #010408 100%) !important;
    backdrop-filter: blur(28px) saturate(180%) !important;
    -webkit-backdrop-filter: blur(28px) saturate(180%) !important;
    display: grid !important;
    grid-template-columns: minmax(290px, 360px) minmax(240px, 1fr) minmax(280px, 360px) !important;
    grid-template-rows: auto minmax(0, 1fr) !important;
    grid-template-areas: 'hud hud hud' 'modes icon sensors' !important;
    gap: 20px 28px !important;
    padding: 44px 36px 30px !important;
    overflow: hidden !important;
    align-items: center !important;
    box-sizing: border-box !important;
  }
}

.ios-fullscreen .liquid-stack {
  grid-area: modes !important;
  width: 100% !important;
  max-width: none !important;
  display: grid !important;
  grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
  gap: 10px !important;
  align-self: center !important;
}
.liquid-btn {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  text-align: center !important;
  gap: 4px !important;
  padding: 10px 4px !important;
  min-height: 68px !important;
  border-radius: 16px !important;
  font-size: 11.5px !important;
  font-weight: 800 !important;
  line-height: 1.15 !important;
  white-space: normal !important;
  word-break: normal !important;
  overflow: visible !important;
  background: rgba(255, 255, 255, 0.08) !important;
  border: 1px solid rgba(255, 255, 255, 0.16) !important;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.22), 0 8px 22px rgba(0, 0, 0, 0.25) !important;
  backdrop-filter: blur(20px) saturate(180%) !important;
  -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
  color: #ffffff !important;
  cursor: pointer !important;
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease !important;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}
.liquid-btn:hover {
  transform: translateY(-2px) translate3d(0,0,0) scale(1.02) !important;
  background: rgba(255, 255, 255, 0.13) !important;
  border-color: rgba(255, 255, 255, 0.28) !important;
}
.liquid-btn span:first-child, .liquid-btn .mode-btn-icon {
  font-size: 22px !important;
  line-height: 1 !important;
  margin: 0 !important;
}
.liquid-btn span:last-child {
  font-size: 11.5px !important;
  font-weight: 800 !important;
  color: #ffffff !important;
  text-align: center !important;
  white-space: normal !important;
  text-overflow: clip !important;
  overflow: visible !important;
}
.liquid-btn.active {
  background: linear-gradient(135deg, rgba(0,255,157,0.32), rgba(0,180,100,0.16)) !important;
  border-color: rgba(0,255,157,0.7) !important;
  box-shadow: 0 0 28px rgba(0,255,157,0.45), inset 0 1px 0 rgba(255,255,255,0.4) !important;
}
.ios-fullscreen .entry-icon {
  grid-area: icon !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  min-width: 200px !important;
  overflow: visible !important;
}
.ios-fullscreen .entry-icon svg {
  width: clamp(220px, 28vw, 400px) !important;
  max-width: 400px !important;
  min-width: 200px !important;
  filter: drop-shadow(0 0 35px rgba(0, 255, 157, 0.55)) drop-shadow(0 0 80px rgba(0, 255, 157, 0.30)) !important;
  animation: float-icon 5s ease-in-out infinite !important;
  will-change: transform, filter !important;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}

.console-sensors {
  position: relative !important;
  isolation: isolate !important;
  display: grid !important;
  grid-auto-rows: minmax(46px,auto) !important;
  align-content: start !important;
  gap: 8px !important;
  padding: 4px 6px !important;
  max-height: min(64vh, 560px) !important;
  overflow-y: auto !important;
  overflow-x: hidden !important;
  overscroll-behavior: contain !important;
  scrollbar-gutter: stable !important;
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
  filter: none !important;
  transform: none !important;
  contain: layout paint !important;
}
.ios-fullscreen .console-sensors {
  grid-area: sensors !important;
  width: 100% !important;
  max-width: 360px !important;
  max-height: 52vh !important;
}
.console-sensors::before,.console-sensors::after {
  display: none !important;
  content: none !important;
}
.console-sensor {
  position: relative !important;
  z-index: 1 !important;
  min-width: 0 !important;
  margin: 0 !important;
  overflow: hidden !important;
  isolation: isolate !important;
  backdrop-filter: blur(16px) saturate(140%) !important;
  -webkit-backdrop-filter: blur(16px) saturate(140%) !important;
  background: rgba(0, 0, 0, 0.28) !important;
  border: 1px solid rgba(255, 255, 255, 0.12) !important;
  border-radius: 14px !important;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.20), 0 4px 14px rgba(0,0,0,0.2) !important;
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  padding: 8px 12px !important;
}
.console-sensor.open {
  box-shadow: inset 0 1px 0 rgba(255,255,255,.18), 0 0 18px rgba(255,102,92,.25) !important;
  border-color: rgba(255, 102, 92, 0.45) !important;
  background: rgba(255, 60, 60, 0.15) !important;
}
.console-sensors::-webkit-scrollbar { width: 6px; }
.console-sensors::-webkit-scrollbar-track { background: transparent; }
.console-sensors::-webkit-scrollbar-thumb { background: rgba(255,255,255,.25); border-radius: 999px; }

@keyframes argusFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes argusScaleIn {
  from { opacity: 0; transform: scale(0.96) translate3d(0, 0, 0); }
  to { opacity: 1; transform: scale(1) translate3d(0, 0, 0); }
}

/* ── Mobile iPhone & Android (Landscape and Portrait) ───────────────────── */
@media (max-width: 900px) {
  :host(.fullscreen-active) {
    padding: 0 !important;
  }
  :host(.fullscreen-active) #entries > .entry.ios-fullscreen {
    width: 100vw !important;
    height: 100vh !important;
    height: 100dvh !important;
    max-width: 100vw !important;
    max-height: 100vh !important;
    max-height: 100dvh !important;
    aspect-ratio: auto !important;
    border-radius: 0 !important;
    border: none !important;
    box-shadow: none !important;
  }
  .ios-fullscreen .entry-content.security-console {
    width: 100vw !important;
    height: 100vh !important;
    height: 100dvh !important;
    box-sizing: border-box !important;
    border-radius: 0 !important;
    border: none !important;
    box-shadow: none !important;
    background: transparent !important;
  }
}

/* Mobile Landscape (e.g. iPhone horizontal) */
@media (max-width: 900px) and (orientation: landscape) {
  .ios-fullscreen .entry-content.security-console {
    display: grid !important;
    grid-template-columns: minmax(200px, 260px) minmax(160px, 1fr) minmax(200px, 260px) !important;
    grid-template-rows: auto minmax(0, 1fr) !important;
    grid-template-areas: 'hud hud hud' 'modes icon sensors' !important;
    gap: 12px 18px !important;
    padding: max(14px, env(safe-area-inset-top, 14px)) max(18px, env(safe-area-inset-right, 18px)) max(12px, env(safe-area-inset-bottom, 12px)) max(18px, env(safe-area-inset-left, 18px)) !important;
    align-items: center !important;
    overflow: hidden !important;
  }
  .ios-fullscreen .console-hud {
    min-height: 32px !important;
  }
  .console-hud-loc {
    height: 30px !important;
    padding: 0 10px !important;
    font-size: 10px !important;
    max-width: 130px !important;
    margin-left: 42px !important;
  }
  .argus-connection-pill {
    height: 30px !important;
    padding: 0 10px !important;
    font-size: 10px !important;
  }
  .console-system-badge {
    height: 30px !important;
    padding: 0 10px !important;
    font-size: 9.5px !important;
  }
  .ios-fullscreen .liquid-btn {
    min-height: 52px !important;
    padding: 6px 2px !important;
    font-size: 10px !important;
    gap: 2px !important;
  }
  .ios-fullscreen .liquid-btn span:first-child, .ios-fullscreen .liquid-btn .mode-btn-icon {
    font-size: 18px !important;
  }
  .ios-fullscreen .entry-icon {
    min-width: 140px !important;
  }
  .ios-fullscreen .entry-icon svg {
    width: clamp(140px, 24vw, 240px) !important;
    max-width: 240px !important;
  }
  .ios-fullscreen .console-sensors {
    max-height: 60vh !important;
  }
  .ios-fullscreen .console-sensor {
    padding: 6px 8px !important;
    font-size: 11px !important;
  }
}

/* Mobile Portrait (e.g. iPhone vertical) */
@media (max-width: 900px) and (orientation: portrait) {
  .ios-fullscreen .entry-content.security-console {
    display: flex !important;
    flex-direction: column !important;
    padding: max(20px, env(safe-area-inset-top, 20px)) 16px max(20px, env(safe-area-inset-bottom, 20px)) !important;
    gap: 16px !important;
    overflow-y: auto !important;
    justify-content: flex-start !important;
  }
  .ios-fullscreen .console-hud {
    width: 100% !important;
    margin-bottom: 4px !important;
  }
  .console-hud-loc {
    margin-left: 44px !important;
    max-width: 130px !important;
    font-size: 10.5px !important;
  }
  .ios-fullscreen .entry-icon {
    width: 100% !important;
    min-height: 160px !important;
    max-height: 220px !important;
  }
  .ios-fullscreen .entry-icon svg {
    width: clamp(160px, 48vw, 220px) !important;
    max-width: 220px !important;
  }
  .ios-fullscreen .liquid-stack {
    width: 100% !important;
    max-width: 420px !important;
    margin: 0 auto !important;
  }
  .ios-fullscreen .console-sensors {
    width: 100% !important;
    max-width: 420px !important;
    margin: 0 auto !important;
    max-height: 38vh !important;
  }
}
`;panel.shadowRoot?.appendChild(style)}
function connectionPill(entry){let pill=entry.querySelector('.argus-connection-pill');if(pill)return pill;pill=[...entry.children].find(el=>el.tagName==='DIV'&&(el.getAttribute('style')||'').includes('left:50%')&&(el.getAttribute('style')||'').includes('top:12px'));if(!pill)return null;pill.className='argus-connection-pill';pill.removeAttribute('style');const hud=entry.querySelector('.console-hud'),right=hud?.querySelector('.console-hud-right');if(hud)hud.insertBefore(pill,right||null);return pill}
function isConnected(panel){const haReady=Boolean(panel._hass)&&panel._hass?.connection?.connected!==false;return navigator.onLine!==false&&haReady}
function refreshConnection(panel){const copy=languageFor(panel),online=isConnected(panel);panel.shadowRoot?.querySelectorAll('.entry').forEach(entry=>{const pill=connectionPill(entry);if(!pill)return;pill.dataset.online=String(online);pill.setAttribute('role','status');pill.setAttribute('aria-live','polite');pill.replaceChildren();const dot=document.createElement('i');dot.className='argus-connection-dot';const label=document.createElement('span');label.className='argus-connection-label';label.textContent=online?copy.on:copy.off;pill.append(dot,label)})}
function polish(panel){installStyles(panel);refreshConnection(panel)}
export function applyFullscreenPolish(ArgusPanel){if(!ArgusPanel||ArgusPanel.__fullscreenPolish)return;ArgusPanel.__fullscreenPolish=true;const proto=ArgusPanel.prototype,connected=proto.connectedCallback,disconnected=proto.disconnectedCallback,render=proto._renderEntries,hassDescriptor=Object.getOwnPropertyDescriptor(proto,'hass');
proto.connectedCallback=function(){const result=connected?.call(this);this._argusOnlineHandler=()=>refreshConnection(this);window.addEventListener('online',this._argusOnlineHandler);window.addEventListener('offline',this._argusOnlineHandler);clearInterval(this._argusConnectivityTimer);this._argusConnectivityTimer=setInterval(()=>refreshConnection(this),2500);queueMicrotask(()=>polish(this));return result};
proto.disconnectedCallback=function(){window.removeEventListener('online',this._argusOnlineHandler);window.removeEventListener('offline',this._argusOnlineHandler);clearInterval(this._argusConnectivityTimer);return disconnected?.call(this)};
proto._renderEntries=function(){const result=render?.call(this);polish(this);return result};
if(hassDescriptor?.set)Object.defineProperty(proto,'hass',{configurable:true,enumerable:hassDescriptor.enumerable,get:hassDescriptor.get,set(value){hassDescriptor.set.call(this,value);queueMicrotask(()=>refreshConnection(this))}});
}
