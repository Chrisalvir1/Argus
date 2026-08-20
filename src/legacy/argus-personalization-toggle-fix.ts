// @ts-nocheck
/** Keep advanced personalization closed by default with one authoritative toggle. */
function installPersonalizationToggle(panel) {
  const root = panel.shadowRoot;
  const currentHeader = root?.getElementById('lbl-aesthetic-custom');
  const workspace = root?.getElementById('personalize-workspace');
  if (!root || !currentHeader || !workspace) return;
  if (currentHeader.dataset.argusPersonalizationToggle === '1') return;

  // The core currently binds this header twice. Replace only the clickable
  // header so the stale listeners are discarded without touching form data.
  const header = currentHeader.cloneNode(true);
  currentHeader.replaceWith(header);
  header.dataset.argusPersonalizationToggle = '1';
  header.setAttribute('role', 'button');
  header.setAttribute('tabindex', '0');

  const editButton = root.getElementById('btn-edit-home-name-standalone');
  const saveButton = root.getElementById('btn-save-personalization-standalone');

  const updateChevronText = open => {
    const chevron = header.querySelector('#personalize-chevron');
    if (chevron) {
      chevron.style.transform = 'none';
      const openTxt = panel._t?.('hide') || 'Ocultar';
      const closeTxt = panel._t?.('expand') || 'Desplegar';
      chevron.textContent = open ? `▲ ${openTxt}` : `▼ ${closeTxt}`;
    }
  };

  const setOpen = open => {
    workspace.hidden = !open;
    workspace.classList.toggle('collapsed', !open);
    header.setAttribute('aria-expanded', String(open));
    updateChevronText(open);
    if (editButton) editButton.hidden = !open;
    if (saveButton) saveButton.hidden = !open;
  };

  // Always start closed after opening/reloading Argus.
  setOpen(false);

  const toggle = () => setOpen(header.getAttribute('aria-expanded') !== 'true');
  header.addEventListener('click', toggle);
  header.addEventListener('keydown', event => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    toggle();
  });
}

export function applyPersonalizationToggleFix(ArgusPanel) {
  if (!ArgusPanel || ArgusPanel.__argusPersonalizationToggleFix) return;
  ArgusPanel.__argusPersonalizationToggleFix = true;
  const proto = ArgusPanel.prototype;

  const connected = proto.connectedCallback;
  proto.connectedCallback = function() {
    const result = connected?.call(this);
    queueMicrotask(() => installPersonalizationToggle(this));
    return result;
  };

  const load = proto._load;
  proto._load = async function() {
    const result = await load?.call(this);
    installPersonalizationToggle(this);
    return result;
  };

  const refresh = proto._refreshLocalizedUi;
  proto._refreshLocalizedUi = function() {
    const result = refresh?.call(this);
    const root = this.shadowRoot;
    const header = root?.getElementById('lbl-aesthetic-custom');
    if (header) {
      const open = header.getAttribute('aria-expanded') === 'true';
      const chevron = header.querySelector('#personalize-chevron');
      if (chevron) {
        const openTxt = this._t?.('hide') || 'Ocultar';
        const closeTxt = this._t?.('expand') || 'Desplegar';
        chevron.textContent = open ? `▲ ${openTxt}` : `▼ ${closeTxt}`;
      }
    }
    return result;
  };
}
