import re

file_path = "src/legacy/argus-panel.ts"
with open(file_path, "r") as f:
    text = f.read()

# 1. Update .argus-profile-grid CSS
old_grid_css = r"""\.argus-profile-grid \{
  display: grid;
  grid-template-columns: repeat\(auto-fill, minmax\(100px, 1fr\)\);
  gap: 28px 24px;
  max-width: 520px;
  width: 100%;
  animation: argus-grid-in 0\.5s cubic-bezier\(0\.16, 1, 0\.3, 1\) 0\.15s both;
\}"""
new_grid_css = r""".argus-profile-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 28px 24px;
  max-width: 800px;
  width: 100%;
  animation: argus-grid-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
}"""
text = re.sub(old_grid_css, new_grid_css, text)

# 2. Update .argus-profile-grid media query
old_media_css = r"""@media \(max-width: 480px\) and \(orientation: portrait\) \{
  \.argus-profile-grid \{ 
    grid-template-columns: 1fr;
    padding: 16px;
  \}
  \.argus-profile-item \{ width: 100%; \}
\}"""
new_media_css = r"""@media (max-width: 480px) {
  .argus-profile-grid { 
    grid-template-columns: repeat(2, 1fr);
    padding: 16px;
  }
}
@media (max-width: 380px) and (orientation: portrait) {
  .argus-profile-grid { 
    grid-template-columns: 1fr;
    padding: 16px;
  }
  .argus-profile-item { width: 100%; }
}"""
text = re.sub(old_media_css, new_media_css, text)

# 3. Rewrite _runProfileWelcomeAnimation
new_anim_func = r"""  async _runProfileWelcomeAnimation(user) {
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

    await new Promise(r => setTimeout(r, 1500));
    await dashboardPromise;

    // Fade out
    overlay.style.opacity = '0';
    await new Promise(r => setTimeout(r, 500));
    overlay.remove();
    this.requestUpdate();
  }"""

# We replace from "async _runProfileWelcomeAnimation(user) {" up to "this.requestUpdate();\n  }"
# But we must be careful. Let's just use regex to replace the function body.
old_anim_regex = r"async _runProfileWelcomeAnimation\(user\) \{.*?(?=async _renderMain\(\))"
text = re.sub(old_anim_regex, new_anim_func + "\n\n  ", text, flags=re.DOTALL)

with open(file_path, "w") as f:
    f.write(text)

print("Fixed Animation")
