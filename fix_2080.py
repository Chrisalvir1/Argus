import re

with open("src/legacy/argus-panel.ts", "r") as f:
    content = f.read()

# ============================================================
# FIX 1: Fullscreen en móvil y tablet — clipping / recorte
# ============================================================
# Root cause: `position: fixed` en Shadow DOM no cubre toda la 
# pantalla en iOS. Solución: usar inset:0, 100dvh, safe-area-inset.
# Reemplazamos el bloque .ios-fullscreen base y el @media(max-width:899px)

old_fs_base = "  .ios-fullscreen { position: fixed !important; z-index: 999999 !important; display: flex !important; flex-direction: column !important; background: #000 !important; }\n  @media(min-width:900px) {\n    .ios-fullscreen { inset: 3% !important; width: 94vw !important; height: 94vh !important; max-width: 1500px !important; margin: auto !important; border-radius: 36px !important; border: 1px solid rgba(255,255,255,0.12) !important; box-shadow: 0 40px 100px rgba(0,0,0,0.8) !important; overflow: hidden !important; -webkit-mask-image: -webkit-radial-gradient(white, black) !important; }\n  }\n  @media(max-width:899px) {\n    .ios-fullscreen { inset: 0 !important; width: 100vw !important; height: 100vh !important; max-width: none !important; margin: 0 !important; border-radius: 0 !important; }\n  }"
new_fs_base = """  /* ── iOS/Android Fullscreen: cubre pantalla completa sin clipping ── */
  .ios-fullscreen {
    position: fixed !important;
    inset: 0 !important;
    left: 0 !important; right: 0 !important; top: 0 !important; bottom: 0 !important;
    width: 100vw !important; height: 100dvh !important;
    max-width: 100vw !important; max-height: 100dvh !important;
    min-height: 100dvh !important;
    margin: 0 !important; border-radius: 0 !important;
    z-index: 999999 !important;
    display: flex !important; flex-direction: column !important;
    background: #000 !important;
    overflow: hidden !important;
    box-sizing: border-box !important;
    /* Notch / home-indicator safe areas (iOS/Android) */
    padding-top: env(safe-area-inset-top, 0px) !important;
    padding-bottom: env(safe-area-inset-bottom, 0px) !important;
    padding-left: env(safe-area-inset-left, 0px) !important;
    padding-right: env(safe-area-inset-right, 0px) !important;
  }
  @media(min-width:900px) {
    .ios-fullscreen {
      inset: 3% !important;
      left: 3% !important; right: 3% !important; top: 3% !important; bottom: 3% !important;
      width: 94vw !important; height: 94vh !important;
      max-width: 1500px !important;
      margin: auto !important; border-radius: 36px !important;
      border: 1px solid rgba(255,255,255,0.12) !important;
      box-shadow: 0 40px 100px rgba(0,0,0,0.8) !important;
      overflow: hidden !important;
      -webkit-mask-image: -webkit-radial-gradient(white, black) !important;
      padding: 0 !important;
    }
  }"""
content = content.replace(old_fs_base, new_fs_base)

# Fix .ios-fullscreen height rule (separate from above block)
old_dvh = "  .ios-fullscreen{height:100dvh!important;min-height:100dvh!important}"
# Already covered by the new rule above; remove the duplicated/conflicting one
content = content.replace(old_dvh, "  /* dvh handled in base .ios-fullscreen rule */")

# Fix the security-console fullscreen on mobile — add -webkit-overflow-scrolling
old_sc_mobile = "@media(max-width:900px){.ios-fullscreen .entry-content.security-console{flex-wrap:wrap!important;padding:80px 20px 24px!important;gap:18px!important;align-content:flex-start!important;overflow-y:auto!important}"
new_sc_mobile = "@media(max-width:900px){.ios-fullscreen .entry-content.security-console{flex-wrap:wrap!important;padding:80px 20px 24px!important;gap:18px!important;align-content:flex-start!important;overflow-y:auto!important;-webkit-overflow-scrolling:touch!important}"
content = content.replace(old_sc_mobile, new_sc_mobile)

# Fix console HUD for fullscreen on tablet (560-900px portrait)
old_console_fs = "  .ios-fullscreen .entry-content.security-console{display:flex!important;flex-wrap:nowrap!important;justify-content:center!important;align-items:center!important;gap:32px!important;padding:50px 48px 36px!important;overflow:auto!important;height:100%!important;box-sizing:border-box!important}"
new_console_fs = "  .ios-fullscreen .entry-content.security-console{display:flex!important;flex-wrap:nowrap!important;justify-content:center!important;align-items:center!important;gap:32px!important;padding:50px 48px 36px!important;overflow:auto!important;height:100%!important;max-height:100vh!important;max-height:100dvh!important;box-sizing:border-box!important;-webkit-overflow-scrolling:touch!important}"
content = content.replace(old_console_fs, new_console_fs)

# ============================================================
# FIX 2: Animaciones de clima — mejorar visibilidad
# ============================================================
# Problem 1: CSS clouds (.wx-cloudfield) are blurry blobs that look bad 
#            when combined with the WebGL shader clouds
# Problem 2: The WebGL canvas initialization may fail on mobile because
#            clientWidth/Height is 0 when position:fixed hasn't laid out yet
# Problem 3: Cloud colors are too white/flat
# 
# Solutions:
# A) Make .wx-cloudfield render better (less blur, better shapes)
# B) Reduce webgl-active cloudfield opacity more aggressively 
# C) Add ResizeObserver-based canvas resize for proper mobile coverage
# D) Fix the canvas height 0 bug on iOS

# Improve the cloudfield CSS
old_cloudfield = "  .wx-cloudfield{position:absolute;inset:-15% -20%;background:radial-gradient(ellipse at 14% 31%,var(--cloud-color) 0 9%,transparent 22%),radial-gradient(ellipse at 43% 18%,var(--cloud-color) 0 12%,transparent 28%),radial-gradient(ellipse at 74% 35%,var(--cloud-color) 0 10%,transparent 24%),radial-gradient(ellipse at 92% 13%,var(--cloud-color) 0 12%,transparent 27%);filter:blur(8px);opacity:var(--cloud-opacity,.72);animation:wxCloudDrift 45s ease-in-out infinite alternate}"
new_cloudfield = "  .wx-cloudfield{position:absolute;inset:-15% -20%;background:radial-gradient(ellipse at 14% 28%,var(--cloud-color) 0 11%,transparent 26%),radial-gradient(ellipse at 43% 16%,var(--cloud-color) 0 14%,transparent 32%),radial-gradient(ellipse at 67% 32%,var(--cloud-color) 0 10%,transparent 24%),radial-gradient(ellipse at 88% 12%,var(--cloud-color) 0 13%,transparent 30%),radial-gradient(ellipse at 31% 45%,var(--cloud-color) 0 7%,transparent 20%),radial-gradient(ellipse at 76% 50%,var(--cloud-color) 0 8%,transparent 20%);filter:blur(18px);opacity:var(--cloud-opacity,.72);animation:wxCloudDrift 45s ease-in-out infinite alternate}"
content = content.replace(old_cloudfield, new_cloudfield)

# When WebGL is active, hide CSS clouds entirely (WebGL renders them)
old_webgl_cloud = "  .wx-atmosphere.webgl-active .wx-cloudfield{opacity:0.25!important;filter:blur(3px)!important}"
new_webgl_cloud = "  .wx-atmosphere.webgl-active .wx-cloudfield{opacity:0!important}"
content = content.replace(old_webgl_cloud, new_webgl_cloud)

# Fix WebGL canvas init: use ResizeObserver on mobile to ensure canvas fills
old_canvas_init = """    el.querySelectorAll('.wx-webgl').forEach(canvas => {
      if (canvas.clientWidth > 0) {
        this._initWeatherWebGL(canvas);
      } else {
        requestAnimationFrame(() => {
          if (canvas.clientWidth > 0) {
            this._initWeatherWebGL(canvas);
          } else {
            setTimeout(() => this._initWeatherWebGL(canvas), 150);
          }
        });
      }"""
new_canvas_init = """    el.querySelectorAll('.wx-webgl').forEach(canvas => {
      // Use ResizeObserver for reliable initialization on mobile/tablet
      if (canvas._argusRO) canvas._argusRO.disconnect();
      const initOnce = () => {
        if (canvas._argusWebglInit) return;
        if ((canvas.clientWidth > 0 || canvas.offsetWidth > 0) && canvas.isConnected) {
          canvas._argusWebglInit = true;
          this._initWeatherWebGL(canvas);
        }
      };
      if (typeof ResizeObserver !== 'undefined') {
        canvas._argusRO = new ResizeObserver(() => { initOnce(); canvas._argusRO?.disconnect(); });
        canvas._argusRO.observe(canvas.parentElement || canvas);
      }
      // Fallback chain
      if (canvas.clientWidth > 0) { initOnce(); }
      else {
        requestAnimationFrame(() => {
          if (canvas.clientWidth > 0) { initOnce(); }
          else { setTimeout(() => initOnce(), 200); }
        });
      }"""
content = content.replace(old_canvas_init, new_canvas_init)

with open("src/legacy/argus-panel.ts", "w") as f:
    f.write(content)
print("Fixes applied!")
