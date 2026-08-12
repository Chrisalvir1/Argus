import sys
import re

with open("src/legacy/argus-panel.ts", "r") as f:
    content = f.read()

# 1. Add CSS
css_new = """
/* ─── tvOS Profile Selector ─── */
.argus-profile-overlay {
  position: fixed; inset: 0;
  background: rgba(0, 0, 0, 0.72);
  backdrop-filter: blur(28px) saturate(1.4);
  -webkit-backdrop-filter: blur(28px) saturate(1.4);
  display: flex; align-items: center; justify-content: center;
  z-index: 9999;
  animation: argus-overlay-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
}
@keyframes argus-overlay-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* Título arriba */
.argus-profile-header {
  text-align: center;
  margin-bottom: 36px;
  animation: argus-slide-down 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
}
@keyframes argus-slide-down {
  from { opacity: 0; transform: translateY(-20px); }
  to   { opacity: 1; transform: translateY(0); }
}
.argus-profile-header h2 {
  margin: 0; font-size: 1.6rem; font-weight: 800;
  color: #fff; letter-spacing: -0.02em;
}
.argus-profile-header p {
  margin: 6px 0 0; font-size: 0.85rem;
  color: rgba(255,255,255,0.55);
}

/* Grid de perfiles */
.argus-profile-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px 24px;
  max-width: 520px;
  width: 100%;
  animation: argus-grid-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
}
@keyframes argus-grid-in {
  from { opacity: 0; transform: scale(0.92) translateY(16px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}

/* Cada perfil */
.argus-profile-item {
  display: flex; flex-direction: column;
  align-items: center; gap: 10px;
  cursor: pointer;
  border-radius: 16px;
  padding: 14px 8px 10px;
  transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1),
              background 0.2s ease;
  -webkit-tap-highlight-color: transparent;
}
.argus-profile-item:hover {
  transform: scale(1.08);
  background: rgba(255,255,255,0.07);
}
.argus-profile-item:active {
  transform: scale(0.96);
}
.argus-profile-item:focus-visible {
  outline: 2px solid rgba(255,255,255,0.6);
  outline-offset: 4px;
}

/* Círculo avatar */
.argus-profile-circle {
  width: 76px; height: 76px;
  border-radius: 50%;
  object-fit: cover;
  border: 2.5px solid rgba(255,255,255,0.18);
  box-shadow: 0 4px 20px rgba(0,0,0,0.35);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.5rem; font-weight: 800;
  color: #fff; overflow: hidden; flex-shrink: 0;
  background: rgba(255,255,255,0.1);
  position: relative;
}
.argus-profile-item:hover .argus-profile-circle {
  border-color: rgba(255,255,255,0.55);
  box-shadow: 0 0 0 3px rgba(255,255,255,0.15), 0 6px 24px rgba(0,0,0,0.4);
}
.argus-profile-circle img {
  width: 100%; height: 100%; border-radius: 50%; object-fit: cover;
}
.argus-profile-circle .lock-badge {
  position: absolute; bottom: 0; right: 0;
  width: 22px; height: 22px; border-radius: 50%;
  background: rgba(0,0,0,0.7); display: flex;
  align-items: center; justify-content: center;
  font-size: 11px; border: 1.5px solid rgba(255,255,255,0.2);
}

/* Nombre y rol */
.argus-profile-label {
  text-align: center;
}
.argus-profile-label .p-name {
  font-size: 0.82rem; font-weight: 700;
  color: #fff; line-height: 1.2;
  max-width: 80px; overflow: hidden;
  text-overflow: ellipsis; white-space: nowrap;
}
.argus-profile-label .p-role {
  font-size: 0.68rem; font-weight: 500;
  color: rgba(255,255,255,0.5);
  margin-top: 2px;
  text-transform: uppercase; letter-spacing: 0.04em;
}

/* ─── Welcome Screen (Fase 2) ─── */
.argus-welcome-screen {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.82);
  backdrop-filter: blur(32px);
  -webkit-backdrop-filter: blur(32px);
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  z-index: 10000;
  pointer-events: none;
}
.argus-welcome-avatar {
  width: 110px; height: 110px;
  border-radius: 50%; overflow: hidden;
  border: 3px solid rgba(255,255,255,0.3);
  box-shadow: 0 8px 40px rgba(0,0,0,0.5);
  display: flex; align-items: center; justify-content: center;
  font-size: 2.8rem; font-weight: 800; color: #fff;
  background: rgba(255,255,255,0.12);
  will-change: transform, width, height, border-radius;
}
.argus-welcome-avatar img {
  width: 100%; height: 100%; object-fit: cover;
}
.argus-welcome-text {
  margin-top: 20px; text-align: center;
}
.argus-welcome-text .greeting {
  font-size: 1.0rem; color: rgba(255,255,255,0.6);
  font-weight: 500; letter-spacing: 0.02em;
  margin: 0;
}
.argus-welcome-text .wname {
  font-size: 2.0rem; font-weight: 900;
  color: #fff; letter-spacing: -0.03em;
  margin: 6px 0 0;
  line-height: 1;
}

/* PIN prompt dentro del selector tvOS */
.argus-pin-prompt {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.75);
  backdrop-filter: blur(28px);
  -webkit-backdrop-filter: blur(28px);
  display: flex; align-items: center; justify-content: center;
  z-index: 10001;
  animation: argus-overlay-in 0.25s ease both;
}
.argus-pin-card {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 20px; padding: 28px 24px;
  width: min(340px, 90vw);
  text-align: center; color: #fff;
}
.argus-pin-card h3 {
  margin: 0 0 4px; font-size: 1.1rem; font-weight: 800;
}
.argus-pin-card .pin-sub {
  font-size: 0.78rem; color: rgba(255,255,255,0.5); margin-bottom: 16px;
}
.argus-pin-input {
  width: 100%; box-sizing: border-box;
  text-align: center; font-size: 1.6rem;
  letter-spacing: 0.4em; padding: 12px;
  border-radius: 12px; border: 1px solid rgba(255,255,255,0.2);
  background: rgba(255,255,255,0.07); color: #fff;
  outline: none; margin-bottom: 14px;
}
.argus-numpad {
  display: grid; grid-template-columns: repeat(3,1fr); gap: 10px;
  margin-bottom: 12px;
}
.argus-numpad button {
  padding: 14px; font-size: 1.15rem; font-weight: 700;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.14);
  background: rgba(255,255,255,0.08); color: #fff;
  cursor: pointer;
  transition: background 0.15s, transform 0.1s;
}
.argus-numpad button:active { transform: scale(0.93); background: rgba(255,255,255,0.18); }
.argus-pin-actions {
  display: flex; gap: 10px; margin-top: 4px;
}
.argus-pin-actions button {
  flex: 1; padding: 12px; border-radius: 12px; font-size: 0.85rem;
  font-weight: 700; cursor: pointer;
  border: 1px solid rgba(255,255,255,0.15);
  background: rgba(255,255,255,0.07); color: #fff;
  transition: background 0.15s;
}
.argus-pin-actions button:hover { background: rgba(255,255,255,0.15); }

@keyframes argus-shake {
  0%, 100% { transform: translateX(0); }
  20%       { transform: translateX(-8px); }
  40%       { transform: translateX(8px); }
  60%       { transform: translateX(-5px); }
  80%       { transform: translateX(5px); }
}
@keyframes argus-overlay-out {
  from { opacity: 1; }
  to   { opacity: 0; }
}

.user-selector-grid {
"""
content = content.replace('.user-selector-grid {', css_new)

# 2. Replace _renderLoginScreen(bootstrap)
js_new = """
  async _renderLoginScreen(bootstrap) {
    const t = (k) => this._t(k);

    // ── Obtener perfiles ──────────────────────────────────────────
    let users = [];
    try {
      const resp = await this._send('argus/get_profiles', {});
      users = resp?.profiles ?? resp?.users ?? bootstrap?.users ?? [];
    } catch (_) {
      users = this._config?.profiles ?? bootstrap?.users ?? [];
    }
    if (!users.length) return;

    // ── Ocultar overlay original si venimos de bootstrap
    const bootOverlay = this.shadowRoot.getElementById('bootstrap-overlay');
    if (bootOverlay) {
        bootOverlay.style.display = 'none';
    }

    // ── Render Fase 1 (Selector grid tvOS) ────────────────────────
    const overlay = document.createElement('div');
    overlay.className = 'argus-profile-overlay';
    
    const headerHtml = `
      <div class="argus-profile-header">
        <h2>${this._escapeHtml(t('select_profile_title'))}</h2>
        <p>${this._escapeHtml(t('select_profile_subtitle'))}</p>
      </div>
    `;

    const usersHtml = users.map(u => {
      const isOwn = u.is_own_profile === true;
      const requiresPin = u.access_pin_configured === true;
      const roleLabel = u.role === 'admin' ? t('role_argus_admin') : t('role_argus_standard');
      
      const avatarContent = u.picture
        ? `<img src="${this._escapeHtml(u.picture)}" alt="" />`
        : this._escapeHtml(u.name.substring(0, 2).toUpperCase());

      const lockIcon = requiresPin ? `<div class="lock-badge">🔒</div>` : '';

      return `
        <div class="argus-profile-item" tabindex="0"
             data-user-id="${this._escapeHtml(u.id)}"
             data-is-own="${isOwn ? 'true' : 'false'}"
             data-requires-pin="${requiresPin ? 'true' : 'false'}">
          
          <div class="argus-profile-circle">
            ${avatarContent}
            ${lockIcon}
          </div>
          <div class="argus-profile-label">
            <div class="p-name">${this._escapeHtml(u.name)}</div>
            <div class="p-role">${this._escapeHtml(roleLabel)}</div>
          </div>
        </div>
      `;
    }).join('');

    const gridHtml = `
      <div class="argus-profile-grid">
        ${usersHtml}
      </div>
    `;

    // Botón Salir
    const actionsHtml = `
      <button id="argus-exit-ha" style="
        position: absolute; bottom: 40px;
        background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
        padding: 12px 24px; border-radius: 20px; color: #fff; cursor: pointer;
        font-size: 0.9rem; font-weight: 600; transition: background 0.2s;
      ">
        ← ${this._escapeHtml(t('exit_to_ha'))}
      </button>
    `;

    overlay.innerHTML = `
      <div style="display:flex; flex-direction:column; align-items:center;">
        ${headerHtml}
        ${gridHtml}
      </div>
      ${actionsHtml}
    `;
    this.shadowRoot.appendChild(overlay);

    // Salir
    overlay.querySelector('#argus-exit-ha').addEventListener('click', () => {
      window.location.assign('/');
    });

    // Eventos Click en Perfil
    const items = overlay.querySelectorAll('.argus-profile-item');
    items.forEach(item => {
      item.addEventListener('click', async () => {
        const userId = item.getAttribute('data-user-id');
        const isOwn = item.getAttribute('data-is-own') === 'true';
        const requiresPin = item.getAttribute('data-requires-pin') === 'true';
        const userObj = users.find(u => u.id === userId);

        if (isOwn) {
          if (requiresPin) {
            overlay.remove();
            this._showTvOSPinPrompt(userObj);
          } else {
            // Own sin PIN -> directo
            try {
              await this._send('argus/select_profile', { argus_user_id: userId });
              overlay.remove();
              await this._runProfileWelcomeAnimation(userObj);
              this._profileSelectedThisMount = true;
              this._load();
            } catch (err) {
              alert(err.message || 'Error seleccionando perfil');
            }
          }
        } else {
          // Otro perfil
          if (!requiresPin) {
            // Rechazo directo si no tiene PIN
            const el = item;
            el.style.animation = 'none';
            el.offsetHeight; // reflow
            el.style.animation = 'argus-shake 0.3s ease';
            return;
          }
          // Tiene PIN -> pedimos
          overlay.remove();
          this._showTvOSPinPrompt(userObj);
        }
      });
      // Soporte teclado (enter/espacio)
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') item.dispatchEvent(new Event('click'));
      });
    });
  }

  async _showTvOSPinPrompt(user) {
    const t = (k) => this._t(k);
    const overlay = document.createElement('div');
    overlay.className = 'argus-pin-prompt';
    overlay.innerHTML = `
      <div class="argus-pin-card">
        <h3>${this._escapeHtml(t('profile_needs_pin'))}</h3>
        <div class="pin-sub">Ingresa el PIN de ${this._escapeHtml(user.name)}</div>
        
        <input type="password" id="pin-input" class="argus-pin-input" readonly
               placeholder="••••" inputmode="numeric" />
               
        <div class="argus-numpad">
          ${[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => `<button data-digit="${n}">${n}</button>`).join('')}
          <button id="pin-cancel" style="font-size:0.8rem; background:rgba(255,59,48,0.15); color:#ff453a; border-color:rgba(255,59,48,0.2);">X</button>
          <button data-digit="0">0</button>
          <button id="pin-del" style="font-size:1.1rem; color:#ff9f0a;">⌫</button>
        </div>
        
        <div class="argus-pin-actions">
          <button id="pin-enter" style="background:rgba(52,199,89,0.25); border-color:rgba(52,199,89,0.4); color:#34c759;">
            Acceder
          </button>
        </div>
        <div id="pin-error" style="color:#ff453a; font-size:12px; margin-top:8px; min-height:16px;"></div>
      </div>
    `;
    this.shadowRoot.appendChild(overlay);

    const pinInput = overlay.querySelector('#pin-input');
    const pinError = overlay.querySelector('#pin-error');
    const pinCard = overlay.querySelector('.argus-pin-card');
    const numpad = overlay.querySelector('.argus-numpad');

    numpad.querySelectorAll('[data-digit]').forEach(btn => {
      const digit = btn.getAttribute('data-digit');
      btn.addEventListener('click', () => {
        if (pinInput.value.length < 8) pinInput.value += digit;
      });
    });

    numpad.querySelector('#pin-del').addEventListener('click', () => {
      pinInput.value = pinInput.value.slice(0, -1);
    });
    overlay.querySelector('#pin-enter').addEventListener('click', () => submitPin());

    overlay.querySelector('#pin-cancel').addEventListener('click', () => {
      overlay.remove();
      this._renderLoginScreen({users: this._config?.profiles || []});
    });

    const submitPin = async () => {
      if (!pinInput.value) return;
      try {
        await this._send('argus/verify_access_pin', {
          argus_user_id: user.id,
          pin: pinInput.value
        });
        overlay.remove();
        
        await this._runProfileWelcomeAnimation(user);
        this._profileSelectedThisMount = true;
        this._load();
      } catch (err) {
        pinError.textContent = err.message || t('invalid_pin_msg');
        pinCard.style.animation = 'none';
        pinCard.offsetHeight; // reflow
        pinCard.style.animation = 'argus-shake 0.3s ease';
        pinInput.value = '';
      }
    };

    pinInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') submitPin();
    });
  }

  async _runProfileWelcomeAnimation(user) {
    const overlay = document.createElement('div');
    overlay.className = 'argus-welcome-screen';

    const avatarHtml = user.picture
      ? `<img src="${this._escapeHtml(user.picture)}" alt="" />`
      : this._escapeHtml(user.name.substring(0, 2).toUpperCase());

    overlay.innerHTML = `
      <div class="argus-welcome-avatar" id="welcome-avatar-flying">
        ${avatarHtml}
      </div>
      <div class="argus-welcome-text" id="welcome-text-anim">
        <p class="greeting">${this._escapeHtml(this._t('welcome_profile') || 'Bienvenido')}</p>
        <h1 class="wname">${this._escapeHtml(user.name)}</h1>
      </div>
    `;
    this.shadowRoot.appendChild(overlay);

    // Pequeño zoom de entrada
    const avatar = overlay.querySelector('#welcome-avatar-flying');
    const textGroup = overlay.querySelector('#welcome-text-anim');
    avatar.style.transform = 'scale(0.8)';
    avatar.style.opacity = '0';
    textGroup.style.opacity = '0';
    textGroup.style.transform = 'translateY(15px)';

    await new Promise(r => requestAnimationFrame(r));
    
    avatar.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.4s ease';
    avatar.style.transform = 'scale(1)';
    avatar.style.opacity = '1';
    
    textGroup.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, opacity 0.5s ease 0.15s';
    textGroup.style.transform = 'translateY(0)';
    textGroup.style.opacity = '1';

    // Mantener la pantalla visible 1.5s
    await new Promise(r => setTimeout(r, 1500));

    // Desvanecer el texto
    textGroup.style.transition = 'opacity 0.3s ease';
    textGroup.style.opacity = '0';

    // Volar el avatar hacia arriba (simulando ir al TopBar)
    const rect = avatar.getBoundingClientRect();
    const destX = 30; // Posición apróx del badge de perfil en TopBar
    const destY = 20;

    const moveX = destX - rect.left - (rect.width/2) + 20;
    const moveY = destY - rect.top - (rect.height/2) + 20;

    avatar.style.transition = 'transform 0.5s cubic-bezier(0.5, 0, 0.2, 1), opacity 0.3s ease 0.2s';
    avatar.style.transform = `translate(${moveX}px, ${moveY}px) scale(0.3)`;
    overlay.style.transition = 'background 0.5s ease, backdrop-filter 0.5s ease';
    overlay.style.background = 'transparent';
    overlay.style.backdropFilter = 'blur(0px)';
    
    await new Promise(r => setTimeout(r, 500));
    overlay.remove();
  }
"""

content = re.sub(r'  _renderLoginScreen\(bootstrap\) \{.*?(?=\n  _initWidgetGrid\(\) \{)', js_new, content, flags=re.DOTALL)

with open("src/legacy/argus-panel.ts", "w") as f:
    f.write(content)
