/** Show colour controls only for genuinely colour-capable Home Assistant lights. */
const COLOR_MODES = new Set(['hs', 'xy', 'rgb', 'rgbw', 'rgbww']);

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  }[char]));
}

export function isColorLight(panel, entityId) {
  const modes = panel._hass?.states?.[entityId]?.attributes?.supported_color_modes;
  return Array.isArray(modes) && modes.some(mode => COLOR_MODES.has(String(mode).toLowerCase()));
}

function rgbToHex(rgb) {
  const safe = Array.isArray(rgb) && rgb.length === 3 ? rgb : [255, 0, 0];
  return `#${safe.map(value => Math.max(0, Math.min(255, Number(value) || 0)).toString(16).padStart(2, '0')).join('')}`;
}

function renderCapabilityAwareSos(panel) {
  const container = panel.shadowRoot?.getElementById('sos-output-chips');
  if (!container) return;
  const outputs = Array.isArray(panel._panicOutputs) ? panel._panicOutputs : [];
  const settings = panel._panicOutputSettings || {};
  container.innerHTML = outputs.length ? outputs.map(entityId => {
    const state = panel._hass?.states?.[entityId];
    const name = state?.attributes?.friendly_name || entityId;
    const light = entityId.startsWith('light.');
    const colorCapable = light && isColorLight(panel, entityId);
    const setting = settings[entityId] || {};
    const flash = ['none', 'gentle', 'rapid'].includes(setting.flash_mode)
      ? setting.flash_mode : (setting.gentle_flash ? 'gentle' : 'none');
    return `<div class="sos-output-row">
      <span class="sensor-pill" title="${escapeHtml(name)}"><span>${escapeHtml(name)}</span></span>
      <button type="button" class="sos-remove-output" data-remove-sos-output="${escapeHtml(entityId)}" aria-label="Eliminar">✕</button>
      ${light ? `<details class="sos-output-settings">
        <summary>${colorCapable ? '🎨 Color y destello' : '✨ Destello'}</summary>
        <label ${colorCapable ? '' : 'hidden'}>Color
          <input type="color" data-sos-output-color="${escapeHtml(entityId)}" value="${rgbToHex(setting.rgb_color)}">
        </label>
        <label>Destello <select data-sos-output-flash="${escapeHtml(entityId)}">
          <option value="none" ${flash === 'none' ? 'selected' : ''}>Sin destello</option>
          <option value="gentle" ${flash === 'gentle' ? 'selected' : ''}>Suave</option>
          <option value="rapid" ${flash === 'rapid' ? 'selected' : ''}>Rápido</option>
        </select></label>
      </details>` : ''}
    </div>`;
  }).join('') : `<div class="mode-sensor-none">${escapeHtml(panel._t('sos_no_outputs'))}</div>`;

  container.querySelectorAll('[data-remove-sos-output]').forEach(button => {
    button.addEventListener('click', () => {
      panel._panicOutputs = outputs.filter(item => item !== button.dataset.removeSosOutput);
      delete panel._panicOutputSettings?.[button.dataset.removeSosOutput];
      renderCapabilityAwareSos(panel);
    });
  });
}

function gateModeColorControls(panel) {
  const root = panel.shadowRoot;
  if (!root) return;
  root.querySelectorAll('[data-light-siren-color]').forEach(input => {
    const entityId = input.dataset.lightSirenColor;
    if (isColorLight(panel, entityId)) return;
    const label = input.closest('label');
    if (label) label.hidden = true;
    const details = input.closest('.light-siren-settings');
    const summary = details?.querySelector('summary');
    if (summary) {
      const name = panel._hass?.states?.[entityId]?.attributes?.friendly_name || entityId;
      summary.textContent = `✨ ${name} — Destello`;
    }
  });
}

export function applyLightCapabilityFixes(ArgusPanel) {
  if (!ArgusPanel || ArgusPanel.__argusLightCapabilityFixes) return;
  ArgusPanel.__argusLightCapabilityFixes = true;
  const proto = ArgusPanel.prototype;

  const previousLoad = proto._load;
  proto._load = async function() {
    const result = await previousLoad.call(this);
    renderCapabilityAwareSos(this);
    gateModeColorControls(this);
    return result;
  };

  proto._renderSosOutputs = function() {
    renderCapabilityAwareSos(this);
  };

  const previousAcceptSelection = proto._acceptSelection;
  proto._acceptSelection = function() {
    const result = previousAcceptSelection.call(this);
    if (this._selectorTarget === 'panic') renderCapabilityAwareSos(this);
    return result;
  };

  const previousRenderModeView = proto._renderModeView;
  proto._renderModeView = function() {
    const result = previousRenderModeView.call(this);
    gateModeColorControls(this);
    return result;
  };
}
