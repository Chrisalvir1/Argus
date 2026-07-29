export function applyAuditClient(ArgusPanel) {
  const proto = ArgusPanel?.prototype;
  if (!proto || proto.__argusAuditClient) return;
  proto.__argusAuditClient = true;

  proto._writeLog = function (action, detail) {
    this._send('argus/write_log', { action, detail }).catch(() => {});
    if (!this._ui) this._ui = {};
    if (!Array.isArray(this._ui.audit_log)) this._ui.audit_log = [];
    const newEvent = {
      action,
      detail,
      user: this._hass?.user?.name || 'Home Assistant user',
      severity: 'info',
      metadata: {},
      ts: new Date().toISOString(),
    };
    this._ui.audit_log.unshift(newEvent);
    this._ui.audit_log = this._ui.audit_log.slice(0, 50);
    if (Array.isArray(this._forensicTimeline)) {
      this._forensicTimeline.unshift(newEvent);
      this._forensicTimeline = this._forensicTimeline.slice(0, 200);
    }
    this._renderActivityLog?.();
  };
}
