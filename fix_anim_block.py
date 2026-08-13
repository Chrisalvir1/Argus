file_path = "src/legacy/argus-panel.ts"
with open(file_path, "r") as f:
    text = f.read()

import re
old_anim_regex = re.compile(r"async _runProfileWelcomeAnimation\(user\)\s*\{.*?\}\s*async _renderMain", re.DOTALL)

new_anim = """async _runProfileWelcomeAnimation(user) {
    this._nukeAllLoginOverlays();

    const overlay = document.createElement('div');
    overlay.className = 'argus-welcome-screen active-anim';
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.background = 'rgba(0,0,0,0.88)';
    overlay.style.display = 'flex';
    overlay.style.flexDirection = 'column';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = '10000';
    overlay.style.pointerEvents = 'none';
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.5s ease';

    const avatarHtml = user.picture
      ? `<img src="${this._escapeHtml(user.picture)}" alt="" />`
      : this._escapeHtml(user.name.substring(0, 2).toUpperCase());

    overlay.innerHTML = `
      <div class="argus-welcome-avatar" style="transform: scale(1.2); transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);">
        ${avatarHtml}
      </div>
      <div class="argus-welcome-text" style="text-align: center;">
        <p class="greeting" style="font-size: 1.2rem; color: rgba(255,255,255,0.7); margin-bottom: 5px;">${this._escapeHtml(this._t('welcome_greeting') || 'Bienvenido,')}</p>
        <h1 class="wname" style="font-size: 2rem; color: #fff; margin: 0;">${this._escapeHtml(user.display_name || user.name)}</h1>
      </div>
    `;
    this.shadowRoot.appendChild(overlay);

    let dashboardPromise = Promise.resolve();
    if (!this._dashboardLoading) {
      this._dashboardLoading = true;
      dashboardPromise = this._load().catch(e => console.error("Load error:", e)).finally(() => { this._dashboardLoading = false; });
    }

    // Fade in
    await new Promise(r => requestAnimationFrame(r));
    overlay.style.opacity = '1';
    overlay.querySelector('.argus-welcome-avatar').style.transform = 'scale(1)';

    // Wait at least 1.5 seconds, even if dashboard loads instantly
    await Promise.all([
        dashboardPromise,
        new Promise(r => setTimeout(r, 1500))
    ]);

    // Fade out
    overlay.style.opacity = '0';
    await new Promise(r => setTimeout(r, 500));
    overlay.remove();
    this.requestUpdate();
  }

  async _renderMain"""

text = old_anim_regex.sub(new_anim, text)

with open(file_path, "w") as f:
    f.write(text)

