export function applySecurityClient(ArgusPanel) {
  const proto = ArgusPanel?.prototype;
  if (!proto || proto.__argusSecurityClient) return;
  proto.__argusSecurityClient = true;

  proto._savePin = async function () {
    const status = this.shadowRoot?.getElementById('pin-status');
    const entry = this._dashboard?.entries?.[0];
    const current = this.shadowRoot?.getElementById('current-pin')?.value || '';
    const first = this.shadowRoot?.getElementById('new-pin-1')?.value || '';
    const second = this.shadowRoot?.getElementById('new-pin-2')?.value || '';
    const fail = (message) => {
      if (status) { status.textContent = message; status.className = 'status err'; }
    };
    if (!entry?.entry_id) return fail('No Argus config entry is available');
    if (entry.pin_configured && !current) return fail(this._t('pin_incorrect'));
    if (first !== second) return fail(this._t('pin_mismatch'));
    if (first && !/^\d{4,12}$/.test(first)) return fail('PIN: 4–12 digits required');
    try {
      await this._send('argus/update_master_pin', {
        entry_id: entry.entry_id, pin: first, current_pin: current,
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
      fail(error?.message || String(error));
    }
  };

  proto._handleForgotPin = function () {
    const message = 'Reset the PIN from Argus integration options or restore a trusted Home Assistant backup.';
    const status = this.shadowRoot?.getElementById('pin-status');
    if (status) { status.textContent = message; status.className = 'status err'; }
    else window.alert(message);
  };
}
