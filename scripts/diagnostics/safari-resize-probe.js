// Run in Safari Web Inspector on the local Argus instance at 127.0.0.1:8123.
// No security commands; restores the temporary inline width and disconnects.
(async () => {
  if (location.origin !== 'http://127.0.0.1:8123') throw new Error('Open local Argus at http://127.0.0.1:8123 first');
  const find = root => {
    for (const element of root.querySelectorAll('*')) {
      if (element.localName === 'argus-panel-v2018') return element;
      if (element.shadowRoot) {
        const panel = find(element.shadowRoot);
        if (panel) return panel;
      }
    }
  };
  const panel = find(document);
  const surface = panel?.shadowRoot.querySelector('.entry');
  const canvas = panel?.shadowRoot.querySelector('canvas.console-emblem-canvas');
  if (!surface || !canvas) throw new Error('Open a lab profile first');
  const oldStyle = surface.style.cssText;
  let writes = 0;
  const observer = new MutationObserver(records => { writes += records.length; });
  const widths = [];
  observer.observe(canvas, { attributes: true, attributeFilter: ['width', 'height'] });
  try {
    for (let index = 0; index < 6; index++) {
      surface.style.setProperty('width', index % 2 ? '100%' : '92%', 'important');
      await new Promise(resolve => setTimeout(resolve, 250));
      widths.push(surface.getBoundingClientRect().width);
    }
  } finally {
    surface.style.cssText = oldStyle;
    await new Promise(resolve => setTimeout(resolve, 250));
    observer.disconnect();
  }
  const result = {
    widths, bufferWrites: writes,
    sameCanvas: canvas === panel.shadowRoot.querySelector('canvas.console-emblem-canvas'),
    canvases: panel.shadowRoot.querySelectorAll('canvas.console-emblem-canvas').length,
  };
  console.log('ARGUS_UX_SURFACE_RESIZE', JSON.stringify(result));
  if (!result.sameCanvas || result.canvases !== 1) throw new Error('Canvas lifecycle regression');
})();
