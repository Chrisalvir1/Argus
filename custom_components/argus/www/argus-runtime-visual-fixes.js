// Runtime presentation fixes for clock consistency, responsive usability and SVG glow bounds.
const CLOCK_INTERVAL_MS = 15000;

function formatDate(panel, date) {
  const locale = panel._getLocale?.() || undefined;
  const timeZone = panel._getTimeZone?.();
  const options = { weekday: 'short', month: 'short', day: 'numeric' };
  if (timeZone) options.timeZone = timeZone;
  try { return new Intl.DateTimeFormat(locale, options).format(date); }
  catch (_) { return date.toLocaleDateString(locale, options); }
}

function syncClocks(panel) {
  const now = new Date();
  const time = panel._formatTime?.(now) || now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const heroTime = panel.shadowRoot?.getElementById('hero-clock-time');
  const heroDate = panel.shadowRoot?.getElementById('hero-clock-date');
  if (heroTime) heroTime.textContent = time;
  if (heroDate) heroDate.textContent = formatDate(panel, now);
  panel.shadowRoot?.querySelectorAll('.console-hud-time').forEach(node => { node.textContent = time; });
}

function expandShieldFilters(panel) {
  panel.shadowRoot?.querySelectorAll('.entry-icon svg').forEach(svg => {
    svg.style.overflow = 'visible';
    svg.querySelectorAll('filter').forEach(filter => {
      filter.setAttribute('filterUnits', 'userSpaceOnUse');
      filter.setAttribute('x', '-80');
      filter.setAttribute('y', '-80');
      filter.setAttribute('width', '360');
      filter.setAttribute('height', '360');
      filter.setAttribute('color-interpolation-filters', 'sRGB');
    });
  });
}

function normalizeBackgroundControls(panel) {
  const root = panel.shadowRoot;
  if (!root) return;

  root.querySelectorAll('input[type="file"]').forEach(input => {
    input.setAttribute('accept', 'image/*,video/*,.gif');
    input.removeAttribute('capture');
  });

  root.querySelectorAll('button,ha-button,mwc-button').forEach(button => {
    const label = (button.textContent || button.getAttribute('aria-label') || '').toLowerCase();
    if (/predeterminado|default|argus/.test(label) && /fondo|background|argus/.test(label)) {
      button.dataset.argusDefaultBackground = 'true';
    }
  });
}

function trimActivityHistory(panel) {
  const root = panel.shadowRoot;
  if (!root) return;
  const candidates = root.querySelectorAll('#w-activity .entry,#w-activity .log-entry,#w-activity li,.activity-log .entry,.activity-log li');
  candidates.forEach((item, index) => {
    if (index > 39) item.classList.add('argus-mobile-history-overflow-item');
    else item.classList.remove('argus-mobile-history-overflow-item');
  });
}

function removeDuplicatedInstanceStatus(panel) {
  const root = panel.shadowRoot;
  if (!root) return;
  root.querySelectorAll('.dashboard-instances .entry button,.dashboard-instances .entry .badge,.dashboard-instances .entry .status,.dashboard-instances .entry h3,.dashboard-instances .entry h4').forEach(node => {
    const text = (node.textContent || '').trim().toLowerCase();
    if (/^(sistema\s+desarmado|system\s+disarmed|desarmado|disarmed)$/.test(text)) {
      node.classList.add('argus-instance-duplicate-status');
    }
  });
}

function installStyles(panel) {
  if (panel.shadowRoot?.getElementById('argus-runtime-visual-style')) return;
  const style = document.createElement('style');
  style.id = 'argus-runtime-visual-style';
  style.textContent = `
.entry-icon,.entry-icon>svg,.argus-old-shield,.argus-old-shield>svg{overflow:visible!important;clip-path:none!important;-webkit-clip-path:none!important}
.entry-icon{contain:layout!important}
#global-status .badge.disarmed,.hero-pill#hero-security-pill{color:#fff!important;background:rgba(18,82,54,.78)!important;border:1px solid rgba(125,255,185,.64)!important;text-shadow:0 1px 2px rgba(0,0,0,.72)!important;opacity:1!important}
.argus-instance-duplicate-status{display:none!important}
.pin-prompt,.pin-modal,.modal,.argus-bootstrap-card{color:#fff!important;text-shadow:0 1px 2px rgba(0,0,0,.55)!important}
.pin-prompt input,.pin-modal input,.argus-bootstrap-card input{color:#fff!important;background:rgba(8,16,31,.72)!important;border-color:rgba(255,255,255,.24)!important;-webkit-text-fill-color:#fff!important}
.pin-prompt label,.pin-modal label,.pin-prompt p,.pin-modal p,.argus-bootstrap-card label,.argus-bootstrap-card p{color:rgba(255,255,255,.88)!important}
#w-activity,.activity-log{max-height:min(58vh,520px)!important;overflow-y:auto!important;overscroll-behavior:contain!important;scrollbar-gutter:stable!important}
#w-activity .panel-body,.activity-log .panel-body{max-height:inherit!important;overflow-y:auto!important}
@media(max-width:760px){
  .hero{display:flex!important;flex-direction:column!important;align-items:center!important;text-align:center!important;gap:14px!important;padding:18px 14px!important}
  .hero-left{width:100%!important;min-width:0!important;align-items:center!important}
  .hero-context{display:grid!important;grid-template-columns:minmax(0,1fr)!important;width:100%!important;margin:4px 0 0!important;justify-items:center!important;align-items:center!important;gap:10px!important}
  .hero-clock{width:100%!important;min-width:0!important;padding:0!important;border:0!important;display:grid!important;grid-template-columns:1fr!important;justify-items:center!important;align-items:center!important;gap:3px!important;line-height:1.12!important}
  .hero-clock strong,.hero-clock span{width:auto!important;max-width:100%!important;text-align:center!important;margin:0!important;line-height:1.12!important}
  .hero-pills{display:grid!important;grid-template-columns:minmax(0,1fr)!important;width:100%!important;min-width:0!important;justify-items:center!important;align-items:center!important;gap:8px!important}
  .hero-pill{width:min(100%,360px)!important;max-width:100%!important;white-space:normal!important;text-align:center!important;justify-content:center!important;align-items:center!important;line-height:1.25!important;margin:0 auto!important}
  .dashboard-instances>.panel-head{flex-direction:column!important;align-items:stretch!important;gap:10px!important}
  #global-status,#global-status .badge{width:100%!important;box-sizing:border-box!important;justify-content:center!important;text-align:center!important;white-space:normal!important;line-height:1.3!important}
  .entry-content.security-console,.ios-fullscreen .entry-content.security-console{padding-left:10px!important;padding-right:10px!important}
  .console-hud{grid-template-columns:minmax(0,1fr)!important;grid-template-areas:'location' 'connection' 'readings'!important;justify-items:center!important;align-items:center!important;gap:8px!important;text-align:center!important}
  .console-hud-loc,.argus-connection-pill,.console-hud-right{width:100%!important;max-width:100%!important;box-sizing:border-box!important;justify-self:center!important;justify-content:center!important;text-align:center!important;margin:0!important}
  .console-hud-right{display:flex!important;flex-wrap:wrap!important;overflow:visible!important;gap:6px!important}
  .security-console .liquid-stack{grid-template-columns:repeat(2,minmax(0,1fr))!important;align-items:stretch!important}
  .security-console .liquid-btn{min-width:0!important;white-space:normal!important;line-height:1.2!important;min-height:46px!important}
  #w-activity,.activity-log{max-height:46vh!important;overflow-y:auto!important}
  .argus-mobile-history-overflow-item{display:list-item!important}
  #w-performance,.performance-card,.device-performance{display:grid!important;grid-template-columns:minmax(0,1fr)!important;justify-items:stretch!important;align-items:center!important;text-align:center!important;gap:10px!important}
  #w-performance *,.performance-card *,.device-performance *{max-width:100%!important;box-sizing:border-box!important}
  #w-access .panel-body,#w-settings .panel-body,.sos-actions,.panic-actions{overflow:visible!important;max-height:none!important}
  .sos-actions button,.panic-actions button,[data-action*="sos"],[data-action*="panic"]{min-height:48px!important;touch-action:manipulation!important}
  input[type="file"]{max-width:100%!important;width:100%!important;color:#fff!important}
}
@media(orientation:landscape) and (max-height:560px) and (max-width:950px){
  .hero{padding:14px!important;gap:10px!important}
  .hero-context{grid-template-columns:auto minmax(0,1fr)!important;align-items:center!important}
  .hero-clock{width:auto!important;justify-items:start!important}
  .hero-pills{justify-content:flex-start!important}
  .ios-fullscreen .console-hud{grid-template-columns:minmax(0,1fr) auto minmax(0,1fr)!important;grid-template-areas:'location connection readings'!important}
  .ios-fullscreen .console-hud-loc,.ios-fullscreen .argus-connection-pill,.ios-fullscreen .console-hud-right{width:auto!important}
}
`;
  panel.shadowRoot?.appendChild(style);
}

function refresh(panel) {
  installStyles(panel);
  syncClocks(panel);
  expandShieldFilters(panel);
  normalizeBackgroundControls(panel);
  trimActivityHistory(panel);
  removeDuplicatedInstanceStatus(panel);
}

export function applyRuntimeVisualFixes(ArgusPanel) {
  if (!ArgusPanel || ArgusPanel.__argusRuntimeVisualFixes) return;
  ArgusPanel.__argusRuntimeVisualFixes = true;
  const proto = ArgusPanel.prototype;
  const connected = proto.connectedCallback;
  const disconnected = proto.disconnectedCallback;
  const load = proto._load;
  const render = proto._renderEntries;
  const translations = proto._applyTranslations;

  proto.connectedCallback = function() {
    const result = connected?.call(this);
    clearInterval(this._argusClockTimer);
    this._argusClockTimer = setInterval(() => syncClocks(this), CLOCK_INTERVAL_MS);
    queueMicrotask(() => refresh(this));
    return result;
  };
  proto.disconnectedCallback = function() {
    clearInterval(this._argusClockTimer);
    this._argusClockTimer = null;
    return disconnected?.call(this);
  };
  proto._load = async function() {
    const result = await load?.call(this);
    refresh(this);
    return result;
  };
  proto._renderEntries = function() {
    const result = render?.call(this);
    refresh(this);
    return result;
  };
  proto._applyTranslations = function() {
    const result = translations?.call(this);
    syncClocks(this);
    return result;
  };
}
