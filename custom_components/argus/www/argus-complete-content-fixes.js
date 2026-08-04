// Root-cause recovery for compact widgets.
// Widget size controls geometry only; it must never discard history or automation rows.
function renderCompleteContent(panel, widgetId, renderer, args) {
  const widget = panel.shadowRoot?.getElementById(widgetId);
  const size = widget?.getAttribute('data-size');
  if (size !== 'S') return renderer?.apply(panel, args);

  // Existing core renderers use data-size=S as a destructive one-row data limit.
  // Temporarily expose the full-data render path, then restore the saved geometry
  // synchronously before the browser can paint.
  widget.setAttribute('data-size', 'M');
  try {
    return renderer?.apply(panel, args);
  } finally {
    widget.setAttribute('data-size', size);
  }
}

export function applyCompleteContentFixes(ArgusPanel) {
  if (!ArgusPanel || ArgusPanel.__argusCompleteContentFixes) return;
  ArgusPanel.__argusCompleteContentFixes = true;

  const proto = ArgusPanel.prototype;
  const renderActivityLog = proto._renderActivityLog;
  const renderAutomations = proto._renderAutomations;

  proto._renderActivityLog = function(...args) {
    return renderCompleteContent(this, 'w-activity', renderActivityLog, args);
  };

  proto._renderAutomations = function(...args) {
    return renderCompleteContent(this, 'w-automations', renderAutomations, args);
  };
}
