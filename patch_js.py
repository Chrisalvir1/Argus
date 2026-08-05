import re

with open("custom_components/argus/www/argus-panel.js", "r") as f:
    js = f.read()

# Replace 1: _load hydration
js = js.replace("""
    this._bootstrap = bootstrap;
    this._backgroundMode = bootstrap.background_mode || 'none';
    this._backgroundImages = bootstrap.background_images || [];
    this._updateCanvasBackground();
""", """
    this._bootstrap = bootstrap;
    
    const userTheme = bootstrap.user_theme || { background_mode: "default", background_file: "" };
    this._currentUserTheme = userTheme;
    
    if (userTheme.background_mode !== "default" && userTheme.background_file) {
      this._backgroundMode = userTheme.background_mode;
      this._panelBgFile = userTheme.background_file;
      this._backgroundImages = [userTheme.background_file];
    } else if (userTheme.background_mode !== "default" && userTheme.background_mode) {
      this._backgroundMode = userTheme.background_mode;
      this._panelBgFile = '';
      this._backgroundImages = [];
    } else {
      this._backgroundMode = bootstrap.background_mode || 'none';
      this._panelBgFile = '';
      this._backgroundImages = bootstrap.background_images || [];
    }
    
    this._updateCanvasBackground();
""")

# Replace 2: _persistPersonalization payload
js = js.replace("""
    payload.entry_id = this._dashboard?.entry_id || this._dashboard?.entries?.[0]?.entry_id;
    if (myProfile) {
      const users = JSON.parse(JSON.stringify(this._ui.users || []));
      const user = users.find(u => u.id === this._myUserId);
      user.background_mode = background_mode;
      user.background_images = this._backgroundImages || [];
      user.panel_bg_file = panel_bg_file;
      user.panel_bg_sound = panel_bg_sound;
      user.hub_bg_mode = hub_bg_mode;
      user.hub_bg_file = hub_bg_file;
      user.hub_bg_sound = hub_bg_sound;
      payload.users = users;
    }

    try {
      await this._send('argus/save_ui', payload);
      this._backgroundMode = background_mode;
""", """
    payload.entry_id = this._dashboard?.entry_id || this._dashboard?.entries?.[0]?.entry_id;

    // Inject Theme Object per prompt requirements
    let themeMode = "default";
    let themeFile = "";
    if (background_mode === "photo" && panel_bg_file) {
        themeMode = "photo";
        themeFile = panel_bg_file;
    } else if (background_mode === "weather") {
        themeMode = "weather";
    } else if (background_mode === "none") {
        themeMode = "none";
    }
    
    payload.theme = {
        background_mode: themeMode,
        background_file: themeFile,
    };

    if (myProfile) {
      const users = JSON.parse(JSON.stringify(this._ui.users || []));
      const user = users.find(u => u.id === this._myUserId);
      user.background_mode = background_mode;
      user.background_images = this._backgroundImages || [];
      user.panel_bg_file = panel_bg_file;
      user.panel_bg_sound = panel_bg_sound;
      user.hub_bg_mode = hub_bg_mode;
      user.hub_bg_file = hub_bg_file;
      user.hub_bg_sound = hub_bg_sound;
      // also save theme
      user.theme = payload.theme;
      payload.users = users;
    }

    try {
      await this._send('argus/save_ui', payload);
      this._currentUserTheme = payload.theme;
      this._backgroundMode = background_mode;
""")

# Replace 3: upload logic
old_upload = """
            // As static image — still upload the file
            const res = await this._uploadFile(file, help);
            if (res?.success) {
              this._panelBgFile = res.url;
              const inp = this.shadowRoot.getElementById('panel-bg-url-input');
              if (inp) inp.value = res.url;
              if (help) help.textContent = `Subido como imagen: ${file.name}`;
              this._loadUploadedFiles();
            } else {
              if (help) help.textContent = this._format('generic_error', { error: res?.error || this._t('upload_error') });
            }
          },
          async () => {
            // As animated video
            const res = await this._uploadFile(file, help);
            if (res?.success) {
              this._panelBgFile = res.url;
              const inp = this.shadowRoot.getElementById('panel-bg-url-input');
              if (inp) inp.value = res.url;
              if (help) help.textContent = `Subido como video: ${file.name}`;
              this._loadUploadedFiles();
            } else {
              if (help) help.textContent = this._format('generic_error', { error: res?.error || this._t('upload_error') });
            }
          }
        );
      } else {
        const res = await this._uploadFile(file, help);
        if (res?.success) {
          this._panelBgFile = res.url;
          const inp = this.shadowRoot.getElementById('panel-bg-url-input');
          if (inp) inp.value = res.url;
          if (help) help.textContent = `Subido: ${file.name}`;
"""

new_upload = """
            // As static image — still upload the file
            const res = await this._uploadFile(file, help);
            if (res?.success) {
              this._panelBgFile = res.url;
              this._backgroundImages = [res.url];
              this._currentUserTheme = { background_mode: "photo", background_file: res.url };
              const inp = this.shadowRoot.getElementById('panel-bg-url-input');
              if (inp) inp.value = res.url;
              if (help) help.textContent = `Subido como imagen: ${file.name}`;
              this._loadUploadedFiles();
              await this._persistPersonalization();
            } else {
              if (help) help.textContent = this._format('generic_error', { error: res?.error || this._t('upload_error') });
            }
          },
          async () => {
            // As animated video
            const res = await this._uploadFile(file, help);
            if (res?.success) {
              this._panelBgFile = res.url;
              this._backgroundImages = [res.url];
              this._currentUserTheme = { background_mode: "video", background_file: res.url };
              const inp = this.shadowRoot.getElementById('panel-bg-url-input');
              if (inp) inp.value = res.url;
              if (help) help.textContent = `Subido como video: ${file.name}`;
              this._loadUploadedFiles();
              await this._persistPersonalization();
            } else {
              if (help) help.textContent = this._format('generic_error', { error: res?.error || this._t('upload_error') });
            }
          }
        );
      } else {
        const res = await this._uploadFile(file, help);
        if (res?.success) {
          this._panelBgFile = res.url;
          this._backgroundImages = [res.url];
          this._currentUserTheme = { background_mode: "photo", background_file: res.url };
          const inp = this.shadowRoot.getElementById('panel-bg-url-input');
          if (inp) inp.value = res.url;
          if (help) help.textContent = `Subido: ${file.name}`;
          this._loadUploadedFiles();
          await this._persistPersonalization();
"""

js = js.replace(old_upload, new_upload)

with open("custom_components/argus/www/argus-panel.js", "w") as f:
    f.write(js)
