// Visual containment and editor-stability fixes for the v2.0.13 panel.
// This module only adjusts presentation and keeps the active-instance card
// outside the configurable widget lifecycle.

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
.panel,
.dashboard-instances,
.entry{
  border-radius:var(--argus-container-radius)!important;
  background-clip:padding-box!important;
  overflow:hidden!important;
  clip-path:inset(0 round var(--argus-container-radius));
  -webkit-mask-image:-webkit-radial-gradient(white,black);
}
.panel::before,
.panel::after,
.dashboard-instances::before,
.dashboard-instances::after,
.entry::before,
.entry::after,
.panel>.panel-bg,
.dashboard-instances>.panel-bg{
  border-radius:inherit!important;
}
.panel h2,
.dashboard-instances h2,
.panel-title,
.section-title,
.mode-section-title,
.widget-title,
.settings-section-title,
.access-section-title{
  color:var(--argus-title-color)!important;
  -webkit-text-fill-color:var(--argus-title-color)!important;
  text-shadow:var(--argus-title-shadow)!important;
  opacity:1!important;
}
.grid.editing>.dashboard-instances,
#widget-grid.editing>.dashboard-instances,
.grid.editing .dashboard-instances,
#widget-grid.editing .dashboard-instances{
  display:block!important;
  visibility:visible!important;
  opacity:1!important;
  grid-column:1 / -1!important;
  transform:none!important;
  filter:none!important;
  pointer-events:auto!important;
  position:relative!important;
  z-index:4!important;
}
.grid.editing .dashboard-instances .panel-edit-overlay,
#widget-grid.editing .dashboard-instances .panel-edit-overlay,
.dashboard-instances>.panel-edit-overlay{
  display:none!important;
}
.grid.editing>.dashboard-instances.widget-hidden-preview,
#widget-grid.editing>.dashboard-instances.widget-hidden-preview{
  opacity:1!important;
}
@media (prefers-color-scheme:light){
  :host{
    --argus-title-color:var(--primary-text-color,#172033);
    --argus-title-shadow:0 1px 1px rgba(255,255,255,.55);
  }
}
@media (max-width:520px){
  :host{--argus-container-radius:24px}
}
`;
  panel.shadowRoot.appendChild(style);
}

function preserveActiveInstances(panel) {
  const root = panel.shadowRoot;
  const instances = root?.querySelector('.dashboard-instances');
  if (!instances) return;

  instances.draggable = false;
  instances.removeAttribute('hidden');
  instances.classList.remove('widget-hidden-preview', 'dragging');
  instances.querySelector(':scope > .panel-edit-overlay')?.remove();

  if (panel._widgetEditing) {
    instances.style.setProperty('display', 'block', 'important');
    instances.style.setProperty('visibility', 'visible', 'important');
    instances.style.setProperty('opacity', '1', 'important');
  } else {
    instances.style.removeProperty('display');
    instances.style.removeProperty('visibility');
    instances.style.removeProperty('opacity');
  }
}

export function applyVisualContainerFixes(ArgusPanel) {
  if (!ArgusPanel || ArgusPanel.__argusVisualContainerFixes) return;
  ArgusPanel.__argusVisualContainerFixes = true;

  const proto = ArgusPanel.prototype;
  const connected = proto.connectedCallback;
  const renderEntries = proto._renderEntries;
  const initWidgetGrid = proto._initWidgetGrid;
  const renderWidgetLayout = proto._renderWidgetLayout;
  const toggleWidgetEditing = proto._toggleWidgetEditing;

  proto.connectedCallback = function() {
    installStyles(this);
    const result = connected?.call(this);
    requestAnimationFrame(() => preserveActiveInstances(this));
    return result;
  };

  proto._renderEntries = function() {
    const result = renderEntries?.call(this);
    installStyles(this);
    preserveActiveInstances(this);
    return result;
  };

  proto._initWidgetGrid = function() {
    const result = initWidgetGrid?.call(this);
    preserveActiveInstances(this);
    return result;
  };

  proto._renderWidgetLayout = function() {
    const result = renderWidgetLayout?.call(this);
    preserveActiveInstances(this);
    return result;
  };

  proto._toggleWidgetEditing = function() {
    const result = toggleWidgetEditing?.call(this);
    preserveActiveInstances(this);
    return result;
  };
}
