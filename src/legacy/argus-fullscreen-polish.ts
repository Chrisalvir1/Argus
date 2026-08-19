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
  ja:{on:'接続済み',off:'Argus 未接続 · HA オフライン'},
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
  background: radial-gradient(circle at 50% 45%, #182234 0%, #060a12 100%) !important;
  margin: 0 !important;
  padding: 24px !important;
  box-sizing: border-box !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  overflow: hidden !important;
  animation: argusFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
}
:host(.fullscreen-active) .wrap {
  width: 100% !important;
  height: 100% !important;
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
:host(.fullscreen-active) .hero,
:host(.fullscreen-active) .grid > .stack:not(:first-child),
:host(.fullscreen-active) .grid > .stack:first-child > section:not(:first-child),
:host(.fullscreen-active) .grid > .stack:first-child > section:first-child .panel-head,
:host(.fullscreen-active) .grid > .stack:first-child > section:first-child .personalize-section {
  display: none !important;
}
:host(.fullscreen-active) .grid,
:host(.fullscreen-active) .grid > .stack:first-child,
:host(.fullscreen-active) .grid > .stack:first-child > section:first-child,
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
  position: relative !important;
  inset: auto !important;
  width: min(100%, calc((100vh - 48px) * 16 / 9)) !important;
  aspect-ratio: 16 / 9 !important;
  max-width: 1540px !important;
  max-height: calc(100vh - 48px) !important;
  height: auto !important;
  margin: auto !important;
  border-radius: 36px !important;
  overflow: hidden !important;
  border: 1px solid rgba(255, 255, 255, 0.24) !important;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.65), 0 35px 90px rgba(0, 0, 0, 0.85), inset 0 1.5px 0 rgba(255, 255, 255, 0.35) !important;
  transform: translateZ(0) scale(1) !important;
  animation: argusScaleIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards !important;
  will-change: transform, opacity !important;
}
:host(.fullscreen-active) .entry.ios-fullscreen .entry-bg,
:host(.fullscreen-active) .entry.ios-fullscreen .entry-bg canvas,
:host(.fullscreen-active) .entry.ios-fullscreen .entry-content {
  border-radius: 36px !important;
  overflow: hidden !important;
}
.ios-fullscreen .entry-exit-fs {
  position: absolute !important;
  top: 18px !important;
  left: 20px !important;
  z-index: 120 !important;
  width: 42px !important;
  height: 42px !important;
  border-radius: 50% !important;
  background: rgba(0, 0, 0, 0.45) !important;
  backdrop-filter: blur(18px) saturate(160%) !important;
  -webkit-backdrop-filter: blur(18px) saturate(160%) !important;
  border: 1px solid rgba(255, 255, 255, 0.25) !important;
  color: #ffffff !important;
  font-size: 22px !important;
  font-weight: 700 !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  cursor: pointer !important;
  box-shadow: 0 6px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3) !important;
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background 0.2s ease !important;
}
.ios-fullscreen .entry-exit-fs:hover {
  transform: scale(1.08) !important;
  background: rgba(255, 255, 255, 0.15) !important;
}
.ios-fullscreen .entry-exit-fs:active {
  transform: scale(0.94) !important;
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
.console-hud {
  display: grid !important;
  grid-template-columns: minmax(0,1fr) auto minmax(0,1fr) !important;
  align-items: center !important;
  gap: 12px !important;
  padding: 0 !important;
  background: transparent !important;
  border: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
  overflow: visible !important;
}
.ios-fullscreen .console-hud {
  padding-left: 64px !important;
}
.console-hud-loc {
  justify-self: start !important;
  max-width: 100% !important;
  padding: 8px 14px !important;
  border-radius: 999px !important;
  background: linear-gradient(135deg, rgba(255,255,255,.18), rgba(255,255,255,.07)) !important;
  border: 1px solid rgba(255,255,255,.24) !important;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.28), 0 8px 22px rgba(0,0,0,.16) !important;
  backdrop-filter: blur(20px) saturate(145%) !important;
  -webkit-backdrop-filter: blur(20px) saturate(145%) !important;
}
.console-hud-right {
  justify-self: end !important;
  display: flex !important;
  align-items: center !important;
  justify-content: flex-end !important;
  gap: 7px !important;
  min-width: 0 !important;
  background: transparent !important;
  border: 0 !important;
  box-shadow: none !important;
}
.console-hud-time,.console-hud-temp,.console-hud-tpill {
  display: inline-flex !important;
  align-items: center !important;
  min-height: 30px !important;
  box-sizing: border-box !important;
  padding: 6px 10px !important;
  border-radius: 999px !important;
  background: linear-gradient(135deg,rgba(255,255,255,.18),rgba(255,255,255,.07)) !important;
  border: 1px solid rgba(255,255,255,.24) !important;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.28),0 8px 22px rgba(0,0,0,.14) !important;
  backdrop-filter: blur(20px) saturate(145%) !important;
  -webkit-backdrop-filter: blur(20px) saturate(145%) !important;
}
.console-hud-temps {
  display: flex !important;
  gap: 7px !important;
  flex-wrap: nowrap !important;
}
.argus-connection-pill {
  position: static !important;
  inset: auto !important;
  transform: none !important;
  grid-column: 2 !important;
  justify-self: center !important;
  z-index: 30 !important;
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 7px !important;
  min-height: 30px !important;
  box-sizing: border-box !important;
  padding: 6px 12px !important;
  border-radius: 999px !important;
  white-space: nowrap !important;
  font-size: 11px !important;
  font-weight: 800 !important;
  letter-spacing: .02em !important;
  backdrop-filter: blur(20px) saturate(150%) !important;
  -webkit-backdrop-filter: blur(20px) saturate(150%) !important;
  transition: color .25s ease,background .25s ease,border-color .25s ease,box-shadow .25s ease !important;
}
.argus-connection-pill[data-online="true"] {
  color: #7ff8bd !important;
  background: linear-gradient(135deg,rgba(36,188,129,.28),rgba(36,188,129,.10)) !important;
  border: 1px solid rgba(78,231,163,.48) !important;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.24),0 0 20px rgba(36,188,129,.20) !important;
}
.argus-connection-pill[data-online="false"] {
  color: #ffd09a !important;
  background: linear-gradient(135deg,rgba(255,145,43,.32),rgba(130,66,8,.18)) !important;
  border: 1px solid rgba(255,171,76,.62) !important;
  box-shadow: inset 0 1px 0 rgba(255,255,255,.22),0 0 22px rgba(255,132,28,.28) !important;
}
.argus-connection-dot {
  width: 7px !important;
  height: 7px !important;
  flex: 0 0 7px !important;
  border-radius: 50% !important;
  background: currentColor !important;
  box-shadow: 0 0 9px currentColor !important;
}
.ios-fullscreen .entry-content.security-console {
  display: grid !important;
  grid-template-columns: minmax(300px, 380px) minmax(260px, 1fr) minmax(280px, 380px) !important;
  grid-template-rows: auto minmax(0, 1fr) !important;
  grid-template-areas: 'hud hud hud' 'modes icon sensors' !important;
  gap: 22px 32px !important;
  padding: 48px 36px 32px !important;
  overflow: hidden !important;
  align-items: center !important;
  height: 100% !important;
  box-sizing: border-box !important;
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
  backdrop-filter: blur(24px) saturate(180%) !important;
  -webkit-backdrop-filter: blur(24px) saturate(180%) !important;
  color: #ffffff !important;
  cursor: pointer !important;
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease !important;
}
.liquid-btn:hover {
  transform: translateY(-2px) scale(1.02) !important;
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
  background: linear-gradient(135deg, rgba(85,223,145,0.32), rgba(36,188,129,0.16)) !important;
  border-color: rgba(117,244,176,0.7) !important;
  box-shadow: 0 0 24px rgba(85,223,145,0.4), inset 0 1px 0 rgba(255,255,255,0.3) !important;
}
.ios-fullscreen .entry-icon {
  grid-area: icon !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  min-width: 220px !important;
  overflow: visible !important;
}
.ios-fullscreen .entry-icon svg {
  width: clamp(240px, 28vw, 420px) !important;
  max-width: 420px !important;
  min-width: 220px !important;
  filter: drop-shadow(0 0 35px rgba(85, 223, 145, 0.45)) drop-shadow(0 0 80px rgba(85, 223, 145, 0.2)) !important;
  animation: float-icon 5s ease-in-out infinite !important;
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
  max-width: 380px !important;
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
  transform: translateZ(0) !important;
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
  from { opacity: 0; transform: scale(0.96) translateZ(0); }
  to { opacity: 1; transform: scale(1) translateZ(0); }
}

@media(max-width:900px){
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
  :host(.fullscreen-active) .entry.ios-fullscreen .entry-bg,
  :host(.fullscreen-active) .entry.ios-fullscreen .entry-bg canvas,
  :host(.fullscreen-active) .entry.ios-fullscreen .entry-content {
    border-radius: 0 !important;
  }
  .ios-fullscreen .entry-content.security-console {
    grid-template-columns: 1fr !important;
    grid-template-rows: auto auto auto auto !important;
    grid-template-areas: 'hud' 'icon' 'modes' 'sensors' !important;
    padding: 64px 18px 24px !important;
    overflow-y: auto !important;
    gap: 16px !important;
    align-content: start !important;
  }
  .ios-fullscreen .liquid-stack,
  .ios-fullscreen .console-sensors {
    max-width: 420px !important;
    margin: 0 auto !important;
  }
  .console-hud {
    grid-template-columns: minmax(0,1fr) auto !important;
    grid-template-areas: 'location connection' 'readings readings' !important;
  }
  .console-hud-loc { grid-area: location !important; }
  .argus-connection-pill { grid-area: connection !important; }
  .console-hud-right {
    grid-area: readings !important;
    justify-self: stretch !important;
    justify-content: flex-start !important;
    overflow-x: auto !important;
  }
  .ios-fullscreen .entry-icon {
    display: flex !important;
    min-height: 160px !important;
  }
  .ios-fullscreen .entry-icon svg {
    display: block !important;
    width: clamp(160px, 44vw, 280px) !important;
    max-width: 280px !important;
  }
  .console-sensors {
    width: 100% !important;
    max-width: 460px !important;
    max-height: 42vh !important;
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
