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

function installStyles(panel) {
  if (panel.shadowRoot?.getElementById('argus-runtime-visual-style')) return;
  const style = document.createElement('style');
  style.id = 'argus-runtime-visual-style';
  style.textContent = `
.entry-icon,.entry-icon>svg,.argus-old-shield,.argus-old-shield>svg{overflow:visible!important;clip-path:none!important;-webkit-clip-path:none!important}
.entry-icon{contain:layout!important}
#global-status .badge.disarmed,.hero-pill#hero-security-pill{color:#fff!important;background:rgba(18,82,54,.78)!important;border:1px solid rgba(125,255,185,.64)!important;text-shadow:0 1px 2px rgba(0,0,0,.72)!important;opacity:1!important}
@media(max-width:760px){
  .hero{display:flex!important;flex-direction:column!important;align-items:center!important;text-align:center!important;gap:16px!important;padding:20px 16px!important}
  .hero-left{width:100%!important;min-width:0!important;align-items:center!important}
  .hero-context{display:grid!important;grid-template-columns:minmax(0,1fr)!important;width:100%!important;margin:4px 0 0!important;justify-items:center!important;gap:10px!important}
  .hero-clock{width:100%!important;min-width:0!important;padding:0!important;border:0!important;justify-items:center!important;align-items:center!important}
  .hero-clock strong,.hero-clock span{width:auto!important;max-width:100%!important;text-align:center!important}
  .hero-pills{display:flex!important;width:100%!important;min-width:0!important;justify-content:center!important;align-items:center!important;gap:8px!important;flex-wrap:wrap!important}
  .hero-pill{max-width:100%!important;white-space:normal!important;text-align:center!important;justify-content:center!important;line-height:1.25!important}
  .dashboard-instances>.panel-head{flex-direction:column!important;align-items:stretch!important;gap:10px!important}
  #global-status,#global-status .badge{width:100%!important;box-sizing:border-box!important;justify-content:center!important;text-align:center!important;white-space:normal!important;line-height:1.3!important}
  .entry-content.security-console,.ios-fullscreen .entry-content.security-console{padding-left:10px!important;padding-right:10px!important}
  .console-hud{grid-template-columns:minmax(0,1fr)!important;grid-template-areas:'location' 'connection' 'readings'!important;justify-items:stretch!important}
  .console-hud-loc,.argus-connection-pill,.console-hud-right{width:100%!important;max-width:100%!important;box-sizing:border-box!important;justify-self:stretch!important;justify-content:center!important;text-align:center!important}
  .console-hud-right{display:flex!important;flex-wrap:wrap!important;overflow:visible!important}
  .security-console .liquid-stack{grid-template-columns:repeat(2,minmax(0,1fr))!important}
  .security-console .liquid-btn{min-width:0!important;white-space:normal!important;line-height:1.2!important}
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
