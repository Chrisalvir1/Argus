// @ts-nocheck
/**
 * Argus More-Info Dialog Hook — v2.2.3
 * Automatically overrides Home Assistant's default more-info dialog for Argus entities.
 *
 * When the user taps on "Argus Alarm Card" in "Favoritos", "Resúmenes", or any standard HA dashboard:
 * - Intercepts the more-info dialog for alarm_control_panel.argus*
 * - Renders the real Argus active instance security console (Liquid Glass, Slide to Disarm, Slide to SOS, Sensors)
 * - Beautiful Liquid Glass styling for the dialog container
 */

const HOOK_ID = 'argus-more-info-hook-installed';
const STYLE_ID = 'argus-more-info-dialog-styles';

function isArgusEntity(entityId, hass) {
  if (!entityId || !entityId.startsWith('alarm_control_panel.')) return false;
  if (entityId.includes('argus')) return true;
  const stateObj = hass?.states?.[entityId];
  if (stateObj?.attributes?.argus_version || stateObj?.attributes?.argus_entry_id) return true;
  return false;
}

function injectDialogStyles(doc) {
  if (doc.getElementById(STYLE_ID)) return;
  const s = doc.createElement('style');
  s.id = STYLE_ID;
  s.textContent = `
    ha-more-info-dialog:has(.argus-more-info-active) ha-dialog,
    ha-more-info-dialog:has(.argus-more-info-active) .mdc-dialog__surface {
      --ha-dialog-border-radius: 28px !important;
      --mdc-shape-medium: 28px !important;
      background: rgba(7, 17, 31, 0.94) !important;
      backdrop-filter: blur(32px) saturate(170%) !important;
      -webkit-backdrop-filter: blur(32px) saturate(170%) !important;
      border: 1px solid rgba(255, 255, 255, 0.16) !important;
      box-shadow: 0 24px 64px rgba(0, 0, 0, 0.65) !important;
      max-width: 640px !important;
      width: min(92vw, 620px) !important;
    }
    .argus-more-info-container {
      width: 100%;
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      overflow: hidden;
      border-radius: 24px;
    }
    .argus-more-info-container argus-panel-v2018 {
      display: block;
      width: 100%;
    }
  `;
  (doc.head || doc).appendChild(s);
}

function handleDialog(dialog, hass) {
  if (!dialog) return;
  const entityId = dialog._entityId || dialog.entityId || dialog.params?.entityId;
  if (!isArgusEntity(entityId, hass)) return;

  const shadow = dialog.shadowRoot;
  if (!shadow) return;

  // Find the more-info content container
  const contentEl = shadow.querySelector('more-info-content')
    || shadow.querySelector('more-info-alarm_control_panel')
    || shadow.querySelector('.content')
    || shadow.querySelector('ha-dialog');

  if (!contentEl) return;

  dialog.classList.add('argus-more-info-active');

  // Check if our panel is already mounted in this dialog
  let container = shadow.querySelector('.argus-more-info-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'argus-more-info-container';

    const panelTag = customElements.get('argus-panel-v2018') ? 'argus-panel-v2018' : null;
    if (panelTag) {
      const panel = document.createElement('argus-panel-v2018');
      panel.setConfig({
        entity: entityId,
        compact: true,
      });
      panel.hass = hass;
      container.appendChild(panel);
    }

    // Hide default HA alarm controls
    const defaultControls = shadow.querySelector('more-info-alarm_control_panel')
      || shadow.querySelector('more-info-content');
    if (defaultControls && defaultControls !== container) {
      defaultControls.style.display = 'none';
      defaultControls.parentNode?.insertBefore(container, defaultControls);
    } else {
      contentEl.appendChild(container);
    }
  } else {
    // Update existing panel
    const panel = container.querySelector('argus-panel-v2018');
    if (panel) {
      panel.hass = hass;
    }
  }
}

export function applyMoreInfoHook(ArgusPanel) {
  if (window[HOOK_ID]) return;
  window[HOOK_ID] = true;

  injectDialogStyles(document);

  // Listen for the hass-more-info event on window/document
  const onMoreInfo = (e) => {
    const entityId = e.detail?.entityId;
    if (!entityId) return;

    // Small delay to let HA create/open the dialog in DOM
    requestAnimationFrame(() => {
      const ha = document.querySelector('home-assistant');
      const dialog = ha?.shadowRoot?.querySelector('ha-more-info-dialog')
        || document.querySelector('ha-more-info-dialog');
      if (dialog) {
        handleDialog(dialog, ha?.hass);
      }
    });
  };

  window.addEventListener('hass-more-info', onMoreInfo, { passive: true });
  document.addEventListener('hass-more-info', onMoreInfo, { passive: true });

  // Also observe DOM additions for ha-more-info-dialog
  const observer = new MutationObserver(() => {
    const ha = document.querySelector('home-assistant');
    const dialog = ha?.shadowRoot?.querySelector('ha-more-info-dialog')
      || document.querySelector('ha-more-info-dialog');
    if (dialog) {
      handleDialog(dialog, ha?.hass);
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}
