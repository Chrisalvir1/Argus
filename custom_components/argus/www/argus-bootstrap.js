import './argus-panel.js';

const ArgusPanel = customElements.get('argus-panel');
if (ArgusPanel && !ArgusPanel.prototype.__argusSecurityPatched) {
  const proto = ArgusPanel.prototype;
  proto.__argusSecurityPatched = true;

  proto._savePin = async function () {
    const status = this.shadowRoot?.getElementById('pin-status');
    const entry = this._dashboard?.entries?.[0];
    const current = this.shadowRoot?.getElementById('current-pin')?.value || '';
    const first = this.shadowRoot?.getElementById('new-pin-1')?.value || '';
    const second = this.shadowRoot?.getElementById('new-pin-2')?.value || '';
    if (!entry?.entry_id) {
      if (status) { status.textContent = 'No Argus config entry is available'; status.className = 'status err'; }
      return;
    }
    if (entry.pin_configured && !current) {
      if (status) { status.textContent = this._t('pin_incorrect'); status.className = 'status err'; }
      return;
    }
    if (first !== second) {
      if (status) { status.textContent = this._t('pin_mismatch'); status.className = 'status err'; }
      return;
    }
    if (first && !/^\d{4,12}$/.test(first)) {
      if (status) { status.textContent = 'PIN: 4–12 digits required'; status.className = 'status err'; }
      return;
    }
    try {
      await this._send('argus/update_master_pin', {
        entry_id: entry.entry_id,
        pin: first,
        current_pin: current,
      });
      entry.pin_configured = Boolean(first);
      if (status) {
        status.textContent = first ? this._t('pin_updated') : this._t('pin_deleted');
        status.className = 'status ok';
      }
      for (const id of ['current-pin', 'new-pin-1', 'new-pin-2']) {
        const input = this.shadowRoot?.getElementById(id);
        if (input) input.value = '';
      }
      this._syncAccessSummary?.();
      setTimeout(() => this._load?.(), 800);
    } catch (error) {
      if (status) { status.textContent = error?.message || String(error); status.className = 'status err'; }
    }
  };

  proto._handleForgotPin = function () {
    const status = this.shadowRoot?.getElementById('pin-status');
    const message = 'For security, reset the PIN from the Argus integration options or restore a trusted Home Assistant backup.';
    if (status) { status.textContent = message; status.className = 'status err'; }
    else window.alert(message);
  };

  proto._writeLog = function (action, detail) {
    this._send('argus/write_log', { action, detail }).catch(() => {});
    if (!this._ui) this._ui = {};
    if (!Array.isArray(this._ui.audit_log)) this._ui.audit_log = [];
    this._ui.audit_log.unshift({
      action,
      detail,
      user: this._hass?.user?.name || 'Home Assistant user',
      severity: 'info',
      metadata: {},
      ts: new Date().toISOString(),
    });
    this._ui.audit_log = this._ui.audit_log.slice(0, 50);
    this._renderActivityLog?.();
  };
}
