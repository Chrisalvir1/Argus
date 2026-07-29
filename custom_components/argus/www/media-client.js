function authHeaders(panel) {
  const token = panel?._hass?.auth?.accessToken;
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export function applyMediaClient(ArgusPanel) {
  const proto = ArgusPanel?.prototype;
  if (!proto || proto.__argusMediaClient) return;
  proto.__argusMediaClient = true;

  proto._loadUploadedFiles = async function () {
    try {
      const response = await fetch('/api/argus/media', {
        headers: authHeaders(this),
        credentials: 'same-origin',
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const payload = await response.json();
      this._uploadedFiles = Array.isArray(payload?.files) ? payload.files : [];
      this._renderUploadedFiles?.();
    } catch (error) {
      console.error('Private Argus media listing failed', error);
      this._uploadedFiles = [];
      this._renderUploadedFiles?.();
    }
  };

  proto._deleteUploadedFile = async function (filename) {
    try {
      const response = await fetch(`/api/argus/media/${encodeURIComponent(filename)}`, {
        method: 'DELETE',
        headers: authHeaders(this),
        credentials: 'same-origin',
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      this._uploadedFiles = (this._uploadedFiles || []).filter(file => file.name !== filename);
      for (const [inputId, property] of [
        ['panel-bg-url-input', '_panelBgFile'],
        ['hub-bg-url-input', '_hubBgFile'],
      ]) {
        const input = this.shadowRoot?.getElementById(inputId);
        if (input?.value?.includes(`/${filename}?`)) {
          input.value = '';
          this[property] = '';
        }
      }
      this._renderUploadedFiles?.();
    } catch (error) {
      console.error('Private Argus media deletion failed', error);
      window.alert(this._format?.('delete_file_error', { error: error.message }) || error.message);
    }
  };
}
