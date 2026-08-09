// @ts-nocheck
// Stable visual containment and responsive fullscreen fixes.
// Widget restoration runs once after dashboard loading; render cycles never
// reorder or reinitialize the grid.

function installStyles(panel) {
  if (panel.shadowRoot?.getElementById('argus-visual-container-fixes')) return;
  const style = document.createElement('style');
  style.id = 'argus-visual-container-fixes';
  style.textContent = `
:host{
  --argus-container-radius:28px;
  --argus-title-color:var(--primary-text-color,rgba(255,255,255,.96));
  --argus-title-shadow:0 1px 2px rgba(0,0,0,.22);
}
.panel,.dashboard-instances,.entry{
  border-radius:var(--argus-container-radius)!important;
  background-clip:padding-box!important;
}
.dashboard-instances{
  display:block!important;
  visibility:visible!important;
  opacity:1!important;
  grid-column:1/-1!important;
  min-height:clamp(138px,16vw,210px)!important;
  position:relative!important;
  z-index:2!important;
}
.dashboard-instances::before,.dashboard-instances::after,
.entry::before,.entry::after,.panel>.panel-bg,.dashboard-instances>.panel-bg{
  border-radius:inherit!important;
}
.grid.editing .dashboard-instances .panel-edit-overlay,
#widget-grid.editing .dashboard-instances .panel-edit-overlay,
.dashboard-instances>.panel-edit-overlay{display:none!important}
.panel h2,.dashboard-instances h2,.panel-title,.section-title,
.mode-section-title,.widget-title,.settings-section-title,.access-section-title{
  color:var(--argus-title-color)!important;
  -webkit-text-fill-color:var(--argus-title-color)!important;
  text-shadow:var(--argus-title-shadow)!important;
  opacity:1!important;
}
#widget-grid>.panel:not(.dashboard-instances){
  overflow:auto!important;
  overscroll-behavior:contain!important;
  scrollbar-gutter:stable!important;
}
#widget-grid>.panel:not(.dashboard-instances)::-webkit-scrollbar{width:6px;height:6px}
#widget-grid>.panel:not(.dashboard-instances)::-webkit-scrollbar-thumb{background:rgba(255,255,255,.24);border-radius:999px}
.entry-icon{background:none!important;background-image:none!important;box-shadow:none!important}
.entry-icon::before,.entry-icon::after{content:none!important;display:none!important;background:none!important;box-shadow:none!important}
.entry-icon>svg,.argus-old-shield,.argus-old-shield>svg{background:none!important;background-image:none!important;box-shadow:none!important}
.entry-icon>svg{filter:drop-shadow(0 0 18px rgba(94,255,167,.25))!important}
@media (orientation:landscape) and (max-height:820px){
  .ios-fullscreen .entry-content.security-console{
    display:grid!important;box-sizing:border-box!important;width:100vw!important;
    height:100dvh!important;min-height:0!important;max-height:100dvh!important;
    grid-template-columns:minmax(160px,28vw) minmax(130px,1fr) minmax(210px,34vw)!important;
    grid-template-rows:auto minmax(0,1fr)!important;
    grid-template-areas:'hud hud hud' 'modes icon sensors'!important;
    align-items:stretch!important;align-content:stretch!important;gap:10px 14px!important;
    padding:58px 14px 12px!important;overflow:hidden!important;
  }
  .ios-fullscreen .console-hud{grid-area:hud!important;min-width:0!important}
  .ios-fullscreen .liquid-stack{
    grid-area:modes!important;align-self:stretch!important;width:100%!important;
    min-width:0!important;min-height:0!important;max-height:none!important;margin:0!important;
    overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;
  }
  .ios-fullscreen .entry-icon{
    grid-area:icon!important;align-self:center!important;justify-self:center!important;
    display:flex!important;width:100%!important;min-width:0!important;min-height:0!important;
    max-width:none!important;max-height:calc(100dvh - 128px)!important;overflow:visible!important;
  }
  .ios-fullscreen .entry-icon>svg{
    display:block!important;width:clamp(130px,22vw,220px)!important;min-width:0!important;
    max-width:220px!important;max-height:calc(100dvh - 140px)!important;margin:auto!important;
  }
  .ios-fullscreen .console-sensors{
    grid-area:sensors!important;align-self:stretch!important;width:100%!important;
    min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;
    margin:0!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain!important;
  }
}
@media (orientation:landscape) and (max-height:560px){
  .ios-fullscreen .entry-content.security-console{
    grid-template-columns:minmax(150px,27vw) minmax(120px,1fr) minmax(200px,35vw)!important;
    gap:8px 10px!important;padding:52px 10px 8px!important;
  }
  .ios-fullscreen .console-hud-loc,.ios-fullscreen .console-hud-time,
  .ios-fullscreen .console-hud-temp,.ios-fullscreen .console-hud-tpill,
  .ios-fullscreen .argus-connection-pill{min-height:26px!important;padding:4px 8px!important;font-size:9px!important}
  .ios-fullscreen .entry-icon>svg{width:clamp(120px,20vw,190px)!important;max-height:calc(100dvh - 124px)!important}
}
@media (prefers-color-scheme:light){
  :host{--argus-title-color:var(--primary-text-color,#172033);--argus-title-shadow:0 1px 1px rgba(255,255,255,.55)}
}
@media (max-width:520px) and (orientation:portrait){:host{--argus-container-radius:24px}}
`;
  panel.shadowRoot.appendChild(style);
}

function keepActiveInstancesVisible(panel) {
  const instances = panel.shadowRoot?.querySelector('.dashboard-instances');
  if (!instances) return;
  instances.draggable = false;
  instances.removeAttribute('hidden');
  instances.classList.remove('widget-hidden-preview', 'dragging');
  instances.querySelector(':scope > .panel-edit-overlay')?.remove();
  instances.style.setProperty('display', 'block', 'important');
  instances.style.setProperty('visibility', 'visible', 'important');
  instances.style.setProperty('opacity', '1', 'important');
}

function restoreWidgetLayoutOnce(panel) {
  const grid = panel.shadowRoot?.getElementById('widget-grid');
  if (!grid || panel._argusWidgetLayoutRestored) return;
  panel._argusWidgetLayoutRestored = true;
  if (!panel._widgetConfigLoaded) panel._initWidgetGrid?.();
  else panel._renderWidgetLayout?.();
  keepActiveInstancesVisible(panel);
}

export function applyVisualContainerFixes(ArgusPanel) {
  if (!ArgusPanel || ArgusPanel.__argusVisualContainerFixes) return;
  ArgusPanel.__argusVisualContainerFixes = true;

  const proto = ArgusPanel.prototype;
  const connected = proto.connectedCallback;
  const load = proto._load;
  const renderEntries = proto._renderEntries;
  const toggleWidgetEditing = proto._toggleWidgetEditing;

  proto.connectedCallback = function() {
    installStyles(this);
    return connected?.call(this);
  };

  proto._load = async function() {
    this._argusWidgetLayoutRestored = false;
    const result = await load?.call(this);
    restoreWidgetLayoutOnce(this);
    keepActiveInstancesVisible(this);
    return result;
  };

  proto._renderEntries = function() {
    const result = renderEntries?.call(this);
    installStyles(this);
    keepActiveInstancesVisible(this);
    return result;
  };

  proto._toggleWidgetEditing = function() {
    const result = toggleWidgetEditing?.call(this);
    keepActiveInstancesVisible(this);
    return result;
  };
}
