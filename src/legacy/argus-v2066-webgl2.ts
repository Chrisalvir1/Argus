// @ts-nocheck
import { LitElement, html, css } from 'https://unpkg.com/lit@3.0.0/index.js?module';

// ==========================================
// 1. SHADERS WEBGL2
// ==========================================

const vsSource = `#version 300 es
void main() {
    float x = -1.0 + float((gl_VertexID & 1) << 2);
    float y = -1.0 + float((gl_VertexID & 2) << 1);
    gl_Position = vec4(x, y, 0.0, 1.0);
}`;

const fsSource = `#version 300 es
precision highp float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec3 u_sunPosition;
uniform vec3 u_moonPosition;
uniform float u_moonPhase;
uniform vec4 u_weather;       // x: Nubes, y: Lluvia, z: Nieve, w: Relámpagos
uniform vec2 u_cloudOffset;   // Offset acumulado del viento (calculado en JS)
uniform vec2 u_parallax;      // Offset de paralaje (mouse/giroscopio)

out vec4 FragColor;

float hash(float n) { return fract(sin(n) * 43758.5453123); }
float hash(vec2 p)  { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

float noise(vec3 x) {
    vec3 p = floor(x);
    vec3 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
    float n = p.x + p.y * 57.0 + 113.0 * p.z;
    return mix(
        mix(mix(hash(n+0.0), hash(n+1.0), f.x), mix(hash(n+57.0), hash(n+58.0), f.x), f.y),
        mix(mix(hash(n+113.0), hash(n+114.0), f.x), mix(hash(n+170.0), hash(n+171.0), f.x), f.y), f.z);
}

float fbm(vec3 p) {
    float f = 0.0, w = 0.5;
    for (int i = 0; i < 4; i++) { f += w * noise(p); p *= 2.02; w *= 0.5; }
    return f;
}

vec3 ACESFilm(vec3 x) {
    float a=2.51, b=0.03, c=2.43, d=0.59, e=0.14;
    return clamp((x*(a*x+b))/(x*(c*x+d)+e), 0.0, 1.0);
}

void main() {
    // Coordenadas corregidas con aspecto + paralaje
    vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y;
    uv += u_parallax * 0.03;
    
    // --- NUEVO: CAPA DE REFRACCIÓN (Gotas en el cristal) ---
    vec2 dropDistortion = vec2(0.0);
    float dropSpecular = 0.0;
    
    if (u_weather.y > 0.0) { 
        vec2 dropUV = uv * vec2(12.0, 6.0);
        dropUV.y += u_time * 0.4;
        dropUV.x += u_cloudOffset.x * 2.0; 
        
        vec2 grid = fract(dropUV) - 0.5;
        vec2 id = floor(dropUV);
        
        float rnd = hash(id * 123.45);
        vec2 dropPos = grid - vec2(rnd * 0.4 - 0.2, fract(rnd * 34.5) * 0.4 - 0.2);
        
        float d = length(dropPos);
        float dropShape = smoothstep(0.35, 0.05, d);
        
        dropDistortion = dropPos * dropShape * u_weather.y * 0.5; 
        dropSpecular = smoothstep(0.1, 0.2, d) * dropShape * u_weather.y * 0.8;
    }
    
    // Vista afectada por la distorsión
    vec3 viewDir = normalize(vec3(uv + dropDistortion, -1.0));

    vec3 sunDir  = normalize(u_sunPosition);
    vec3 moonDir = normalize(u_moonPosition);

    // --- DISPERSIÓN ATMOSFÉRICA (Rayleigh) ---
    float cosThetaSun = dot(viewDir, sunDir);
    float height      = max(0.0, viewDir.y);
    float opticalDepth = exp(-height / 0.1) * 8e3;
    vec3 rayleighCoeff = vec3(5.5e-6, 13.0e-6, 22.4e-6);
    vec3 skyBase = 22.0 * (1.0 + cosThetaSun * cosThetaSun) * rayleighCoeff * opticalDepth;
    skyBase = mix(skyBase, vec3(0.3, 0.35, 0.4) * 2.0, u_weather.x * 0.8);

    // --- CIELO NOCTURNO (estrellas + luna) — sin branch, usando step() ---
    float nightFactor = step(sunDir.y, 0.1);

    float starNoise = hash(floor(uv * 200.0));
    float starGlow  = smoothstep(0.98, 1.0, starNoise)
                    * (0.5 + 0.5 * sin(u_time * 2.0 + starNoise * 10.0))
                    * smoothstep(0.1, -0.1, sunDir.y);
    vec3 nightSky = vec3(starGlow) * nightFactor;

    float distMoon  = distance(viewDir, moonDir);
    float moonBody  = (1.0 - smoothstep(0.04, 0.045, distMoon)) * nightFactor;
    vec3  shadowOff = normalize(vec3(u_moonPhase - 0.5, 0.0, -1.0));
    float moonShadow = smoothstep(0.03, 0.05, distance(viewDir, moonDir + shadowOff * 0.02));
    nightSky += vec3(1.5, 1.5, 1.8) * moonBody * moonShadow;

    // --- SOL ---
    float sunGlow  = smoothstep(0.998, 1.0, cosThetaSun);
    vec3  sunColor = vec3(25.0, 20.0, 15.0) * sunGlow;

    vec3 skyColor = skyBase + sunColor + nightSky;

    // --- NUBES FBM con offset de viento ---
    vec3 cloudPos    = viewDir * 3.0 + vec3(u_time * 0.02 + u_cloudOffset.x, u_time * 0.01, u_cloudOffset.y);
    float cloudDensity = smoothstep(0.3, 0.8, fbm(cloudPos) * u_weather.x);

    vec3 lightDir    = sunDir.y > -0.1 ? sunDir : moonDir;
    float cloudShadow = fbm(cloudPos + lightDir * 0.1);
    vec3 cloudColor  = mix(vec3(0.2, 0.25, 0.3), vec3(1.2, 1.1, 1.0),
                           smoothstep(0.2, 0.8, cloudDensity - cloudShadow));

    // --- RELÁMPAGOS (sin branch GPU) ---
    float flashTiming   = fract(sin(u_time * 10.0) * 43758.5);
    float lightningFlash = smoothstep(0.95, 1.0, flashTiming) * u_weather.w * 50.0;
    cloudColor += vec3(0.8, 0.9, 1.0) * lightningFlash;

    vec3 hdrColor = mix(skyColor, cloudColor, cloudDensity);

    // --- LLUVIA (rayas verticales) ---
    vec2 rainUV = uv * vec2(10.0, 2.0) + vec2(0.0, u_time * 3.0);
    float rain  = smoothstep(0.9, 1.0, hash(rainUV)) * u_weather.y;

    // --- NIEVE (copos FBM lentos) ---
    vec2 snowUV = uv * 5.0 + vec2(sin(u_time * 0.5), u_time * 0.5);
    float snow  = smoothstep(0.8, 1.0, fbm(vec3(snowUV, u_time))) * u_weather.z;

    hdrColor += vec3(0.5, 0.6, 0.7) * rain;
    hdrColor += vec3(1.5) * snow;
    
    // --- ESPECULAR DE LAS GOTAS ---
    hdrColor += vec3(1.0, 1.1, 1.2) * dropSpecular;

    // --- HDR TONE MAPPING + GAMMA ---
    vec3 ldrColor = ACESFilm(hdrColor);
    ldrColor = pow(ldrColor, vec3(1.0 / 2.2));
    FragColor = vec4(ldrColor, 1.0);
}`;

// ==========================================
// 2. COMPONENTE LIT
// ==========================================

class ArgusWeatherPanel extends LitElement {

  static properties = { hass: { attribute: false }, _config: { attribute: false } };

  static styles = css`
    :host { display: block; width: 100%; height: 100%; min-height: 300px; border-radius: 24px; overflow: hidden; background: #000; position: absolute; inset: 0; }
    canvas { width: 100%; height: 100%; display: block; }
  `;

  constructor() {
    super();
    this.gl = null;
    this.program = null;
    this.uniforms = {};
    this.startTime = performance.now();
    this._animationFrame = null;
    this._resizeObserver = null;
    this._lastTime = null;
    this._cloudOffset = { x: 0, y: 0 };
    this._lastMouseTime = 0;
    this.target  = { sunY: 0.5, nubes: 0, lluvia: 0, nieve: 0, relampagos: 0, moonPhase: 1.0, wind: { x: 0, y: 0 }, parallax: { x: 0, y: 0 } };
    this.current = { sunY: 0.5, nubes: 0, lluvia: 0, nieve: 0, relampagos: 0, moonPhase: 1.0, parallax: { x: 0, y: 0 } };
  }

  setConfig(config) { this._config = config; }

  render() { return html`<canvas id="weatherCanvas"></canvas>`; }

  firstUpdated() {
    const canvas = this.shadowRoot.getElementById('weatherCanvas');

    // ResizeObserver — sin reflow en cada frame
    this._resizeObserver = new ResizeObserver(entries => {
      for (const e of entries) {
        canvas.width  = Math.floor(e.contentRect.width  * 0.5);
        canvas.height = Math.floor(e.contentRect.height * 0.5);
        if (this.gl) this.gl.viewport(0, 0, canvas.width, canvas.height);
      }
    });
    this._resizeObserver.observe(canvas);

    // Eventos de paralaje
    this.addEventListener('mousemove', this._onMouseMove.bind(this));
    window.addEventListener('deviceorientation', this._onGyro.bind(this));

    this._initWebGL(canvas);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._animationFrame) cancelAnimationFrame(this._animationFrame);
    this._resizeObserver?.disconnect();
    this.removeEventListener('mousemove', this._onMouseMove);
    window.removeEventListener('deviceorientation', this._onGyro);
    // Limpiar contexto WebGL
    if (this.gl && this.program) this.gl.deleteProgram(this.program);
  }

  updated(changedProperties) {
    if (changedProperties.has('hass') && this.gl) this._updateTargets();
  }

  // Solo escribe this.target.* — nunca toca WebGL
  _updateTargets() {
    if (!this.hass) return;

    const sun = this.hass.states['sun.sun'];
    if (sun) {
      this.target.sunY = (sun.attributes.elevation ?? 0) / 90.0;
      this.target.wind = {
        x: (sun.attributes.wind_speed ?? 0) * 0.001,
        y: 0
      };
    }

    const wxId = this._config?.weather_entity || 'weather.home';
    const wx   = this.hass.states[wxId];
    if (wx) {
      const s = wx.state;
      this.target.nubes      = ['cloudy','rainy','pouring','snowy','lightning','lightning-rainy','partlycloudy'].includes(s) ? (s === 'partlycloudy' ? 0.5 : 1.0) : 0.0;
      this.target.lluvia     = s === 'pouring' ? 1.0 : (s === 'rainy' || s === 'lightning-rainy') ? 0.6 : 0.0;
      this.target.nieve      = s === 'snowy' ? 1.0 : 0.0;
      this.target.relampagos = (s === 'lightning' || s === 'lightning-rainy') ? 1.0 : 0.0;
    }

    const moon = this.hass.states['sensor.moon_phase'];
    if (moon) {
      const v = parseFloat(moon.state) || 100;
      this.target.moonPhase = v > 1.0 ? v / 100.0 : v;
    }
  }

  _onMouseMove(e) {
    const now = Date.now();
    if (now - this._lastMouseTime < 16) return;
    this._lastMouseTime = now;
    const rect = this.getBoundingClientRect();
    this.target.parallax.x =  (e.clientX - rect.left) / rect.width  * 2.0 - 1.0;
    this.target.parallax.y = -((e.clientY - rect.top)  / rect.height * 2.0 - 1.0);
  }

  _onGyro(e) {
    this.target.parallax.x = (e.gamma ?? 0) / 45.0;
    this.target.parallax.y = (e.beta  ?? 0) / 90.0;
  }

  // Lerp exponencial (damp) — se desacelera naturalmente como iOS
  _damp(curr, tgt, lambda, dt) { return tgt + (curr - tgt) * Math.exp(-lambda * dt); }

  _initWebGL(canvas) {
    const gl = canvas.getContext('webgl2', { antialias: false });
    if (!gl) { console.error('[Argus] WebGL2 no soportado'); return; }

    gl.getExtension('EXT_color_buffer_float');
    try { gl.drawingBufferColorSpace = 'display-p3'; gl.unpackColorSpace = 'display-p3'; } catch(e) {}
    this.gl = gl;

    const compile = (type, src) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.error('[Argus] Shader error:', gl.getShaderInfoLog(s));
        gl.deleteShader(s); return null;
      }
      return s;
    };

    const vs = compile(gl.VERTEX_SHADER,   vsSource);
    const fs = compile(gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    this.program = gl.createProgram();
    gl.attachShader(this.program, vs);
    gl.attachShader(this.program, fs);
    gl.linkProgram(this.program);
    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      console.error('[Argus] Link error:', gl.getProgramInfoLog(this.program)); return;
    }

    this.uniforms = {
      resolution:   gl.getUniformLocation(this.program, 'u_resolution'),
      time:         gl.getUniformLocation(this.program, 'u_time'),
      sunPosition:  gl.getUniformLocation(this.program, 'u_sunPosition'),
      moonPosition: gl.getUniformLocation(this.program, 'u_moonPosition'),
      moonPhase:    gl.getUniformLocation(this.program, 'u_moonPhase'),
      weather:      gl.getUniformLocation(this.program, 'u_weather'),
      cloudOffset:  gl.getUniformLocation(this.program, 'u_cloudOffset'),
      parallax:     gl.getUniformLocation(this.program, 'u_parallax'),
    };

    // Valores default mientras llegan datos de HA
    gl.useProgram(this.program);
    gl.uniform3f(this.uniforms.sunPosition,  0.0, 0.5, -1.0);
    gl.uniform3f(this.uniforms.moonPosition, 0.5, 0.3, -1.0);
    gl.uniform1f(this.uniforms.moonPhase,    1.0);
    gl.uniform4f(this.uniforms.weather,      0.0, 0.0, 0.0, 0.0);
    gl.uniform2f(this.uniforms.cloudOffset,  0.0, 0.0);
    gl.uniform2f(this.uniforms.parallax,     0.0, 0.0);

    const loop = () => {
      if (!this.isConnected) return;
      const now = performance.now();
      const dt  = Math.min((now - (this._lastTime || now)) / 1000, 0.1); // cap 100ms
      this._lastTime = now;

      // Interpolar todos los valores con damp exponencial
      const c = this.current, t = this.target;
      c.sunY      = this._damp(c.sunY,      t.sunY,      0.5,  dt); // lento = amanecer/atardecer
      c.nubes     = this._damp(c.nubes,     t.nubes,     2.0,  dt);
      c.lluvia    = this._damp(c.lluvia,    t.lluvia,    2.0,  dt);
      c.nieve     = this._damp(c.nieve,     t.nieve,     2.0,  dt);
      c.relampagos= this._damp(c.relampagos,t.relampagos,8.0,  dt); // rápido
      c.moonPhase = this._damp(c.moonPhase, t.moonPhase, 1.0,  dt);
      c.parallax.x= this._damp(c.parallax.x,t.parallax.x,6.0, dt);
      c.parallax.y= this._damp(c.parallax.y,t.parallax.y,6.0, dt);

      // Acumular offset de viento en cloudOffset
      this._cloudOffset.x += (t.wind?.x || 0) * dt;
      this._cloudOffset.y += (t.wind?.y || 0) * dt;

      // Enviar uniforms — ÚNICO lugar donde se toca WebGL
      gl.useProgram(this.program);
      gl.uniform2f(this.uniforms.resolution,   canvas.width, canvas.height);
      gl.uniform1f(this.uniforms.time,         (now - this.startTime) / 1000.0);
      gl.uniform3f(this.uniforms.sunPosition,  0.0, c.sunY, -1.0);
      gl.uniform3f(this.uniforms.moonPosition, 0.2, -c.sunY + 0.2, -1.0);
      gl.uniform1f(this.uniforms.moonPhase,    c.moonPhase);
      gl.uniform4f(this.uniforms.weather,      c.nubes, c.lluvia, c.nieve, c.relampagos);
      gl.uniform2f(this.uniforms.cloudOffset,  this._cloudOffset.x, this._cloudOffset.y);
      gl.uniform2f(this.uniforms.parallax,     c.parallax.x, c.parallax.y);

      gl.drawArrays(gl.TRIANGLES, 0, 3);
      this._animationFrame = requestAnimationFrame(loop);
    };
    loop();
  }
}

if (!customElements.get('argus-weather-panel')) {
  customElements.define('argus-weather-panel', ArgusWeatherPanel);
}

// ==========================================
// 3. BRIDGE Y UI OVERRIDES
// ==========================================

function installStyles(panel){
 const isNight = panel._hass?.states?.['sun.sun']?.state === 'below_horizon';
 panel.classList.toggle('daytime-theme', !isNight);
 if(panel.shadowRoot?.getElementById('argus-v2066-style'))return;
 const s=document.createElement('style');s.id='argus-v2066-style';s.textContent=`
:host{--v2066-glass:linear-gradient(135deg,color-mix(in srgb,var(--card-background-color,#101827) 34%,transparent),color-mix(in srgb,var(--card-background-color,#101827) 15%,transparent));--v2066-border:color-mix(in srgb,var(--primary-text-color,#fff) 22%,transparent);--v2066-text:var(--primary-text-color,#f7f9ff);--v2066-muted:var(--secondary-text-color,rgba(247,249,255,.72))}
:host(.daytime-theme){--v2066-glass:linear-gradient(135deg,rgba(255,255,255,.3),rgba(255,255,255,.12));--v2066-border:rgba(0,0,0,.16);--v2066-text:#172033;--v2066-muted:#4c586d}
:host *:not(.wx-webgl):not(.hero-profile-pill):not(#welcome-card):not(#welcome-avatar-flying):not(#welcome-name-flying):not(#fly-avatar):not(#fly-name):not(#bootstrap-overlay):not(.argus-bootstrap-card),:host *::before,:host *::after{animation:none!important;transition:none!important}
.glass,.liquid-glass,.panel,.entry,.mode-section-card,.user-card,.file-card,.log-item,.personalize-section,.sos-configuration,.argus-widget{background:var(--v2066-glass)!important;border:1px solid var(--v2066-border)!important;box-shadow:inset 0 1px 0 color-mix(in srgb,var(--primary-text-color,#fff) 16%,transparent),0 14px 38px rgba(0,0,0,.16)!important;backdrop-filter:blur(24px) saturate(145%)!important;-webkit-backdrop-filter:blur(24px) saturate(145%)!important;color:var(--v2066-text)!important}
.argus-widget .panel{background:transparent!important;border:none!important;box-shadow:none!important;backdrop-filter:none!important;-webkit-backdrop-filter:none!important}
.panel h1,.panel h2,.panel h3,.panel h4,.panel-title,.section-title,.setting-label,.mode-section-title,.widget-title,.settings-section-title,.access-section-title{color:var(--v2066-text)!important;opacity:1!important;text-shadow:none!important}.panel p,.panel small,.hint,.muted,.setting-help,.mode-sensor-none{color:var(--v2066-muted)!important;opacity:1!important}
button,input,select,textarea,.glass-control{color:var(--v2066-text)!important;-webkit-text-fill-color:var(--v2066-text)!important;background-color:color-mix(in srgb,var(--card-background-color,#101827) 38%,transparent)!important;border-color:var(--v2066-border)!important}button{min-height:44px;touch-action:manipulation}button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline:3px solid color-mix(in srgb,var(--primary-color,#2783de) 76%,white)!important;outline-offset:2px!important}
select option {background-color:#101827 !important;color:#f7f9ff !important;-webkit-text-fill-color:#f7f9ff !important;}
:host(.daytime-theme) select option {background-color:#ffffff !important;color:#172033 !important;-webkit-text-fill-color:#172033 !important;}
.user-badge{display:inline-block!important;padding:4px 10px!important;border-radius:6px!important;font-size:10px!important;font-weight:800!important;letter-spacing:.04em!important;text-transform:uppercase!important;background:rgba(255,255,255,0.06)!important;color:var(--v2066-text)!important;border:1px solid var(--v2066-border)!important}
.user-badge.admin{background:rgba(255,215,0,0.12)!important;color:#ffd700!important;border:1px solid rgba(255,215,0,0.25)!important}
:host(.daytime-theme) .user-badge.admin{background:rgba(212,175,55,0.12)!important;color:#8b6508!important;border:1px solid rgba(212,175,55,0.3)!important}
.user-badge[style*="background:#4a148c"]{background:rgba(147,112,219,0.12)!important;color:#b39ddb!important;border:1px solid rgba(147,112,219,0.25)!important}
:host(.daytime-theme) .user-badge[style*="background:#4a148c"]{background:rgba(103,58,183,0.08)!important;color:#5e35b1!important;border:1px solid rgba(103,58,183,0.2)!important}
.user-badge[style*="color:#007aff"]{background:rgba(39,131,222,0.12)!important;color:#4fc3f7!important;border:1px solid rgba(39,131,222,0.25)!important}
:host(.daytime-theme) .user-badge[style*="color:#007aff"]{background:rgba(3,169,244,0.08)!important;color:#0288d1!important;border:1px solid rgba(3,169,244,0.2)!important}
.user-badge[style*="color:#43a047"]{background:rgba(76,175,80,0.12)!important;color:#81c784!important;border:1px solid rgba(76,175,80,0.25)!important}
:host(.daytime-theme) .user-badge[style*="color:#43a047"]{background:rgba(76,175,80,0.08)!important;color:#2e7d32!important;border:1px solid rgba(76,175,80,0.2)!important}
#hero-profile-container {display: flex;align-items: center;justify-content: center;margin-inline: 20px;}
@media(max-width:750px) {#hero-profile-container {margin: 12px 0 6px 0;}}
.hero-profile-pill {display: flex;align-items: center;gap: 10px;padding: 6px 14px 6px 8px;border-radius: 999px;background: var(--v2066-glass);border: 1px solid var(--v2066-border);box-shadow: inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 12px rgba(0,0,0,0.12);backdrop-filter: blur(20px) saturate(140%);-webkit-backdrop-filter: blur(20px) saturate(140%);cursor: pointer;transition: transform 0.25s cubic-bezier(0.2, 1, 0.2, 1) !important;}
.hero-profile-pill:hover {transform: translateY(-1px) !important;}
.hero-profile-pill:active {transform: scale(0.96) !important;}
@keyframes springBounceIn {
  0% { transform: scale(0.85); opacity: 0; }
  50% { transform: scale(1.02); opacity: 0.8; }
  75% { transform: scale(0.98); opacity: 0.95; }
  100% { transform: scale(1); opacity: 1; }
}
.wx-atmosphere{position:absolute;inset:0;overflow:hidden;isolation:isolate;}
.wx-celestial,.wx-cloudfield,.wx-precip,.wx-starfield,.wx-lightning,.wx-fog-real,.wx-seasonal,.wx-horizon{display:none!important}
@media(prefers-color-scheme:light){:host:not(.daytime-theme){--v2066-glass:linear-gradient(135deg,rgba(255,255,255,.56),rgba(255,255,255,.24));--v2066-border:rgba(255,255,255,.72);--v2066-text:var(--primary-text-color,#172033);--v2066-muted:var(--secondary-text-color,#4c586d)}}`;
 panel.shadowRoot?.appendChild(s);
}

function openPanicSelector(panel){
 panel._selectorTarget='panic';panel._selected=Array.isArray(panel._panicOutputs)?[...panel._panicOutputs]:[];
 if(typeof panel._openModal==='function'){panel._openModal('panic');return true;}
 if(typeof panel._openSelector==='function'){panel._openSelector('panic');return true;}
 if(typeof panel._openEntitySelector==='function'){panel._openEntitySelector('panic');return true;}
 return false;
}

function bindSos(panel){
 const root=panel.shadowRoot;if(!root||root.__argusV2066SosBound)return;root.__argusV2066SosBound=true;
 root.addEventListener('click',event=>{const button=event.target?.closest?.('button');if(!button)return;const label=`${button.textContent||''} ${button.getAttribute('aria-label')||''} ${button.title||''}`.toLowerCase();const selector=button.matches('[data-select-sos-output],[data-action="select-panic-outputs"],#select-sos-outputs,#btn-select-sos-outputs')||(/seleccionar|select|añadir|add/.test(label)&&/luces|lights|sirenas|sirens|scripts|acciones sos|sos actions/.test(label));if(selector)queueMicrotask(()=>{if(!root.querySelector('.modal.open,.ios-confirm-backdrop.open,[role="dialog"][open]'))openPanicSelector(panel)});if(button.matches('[data-remove-sos-output]'))queueMicrotask(async()=>{const outputs=[...new Set(panel._panicOutputs||[])],settings={...(panel._panicOutputSettings||{})};Object.keys(settings).forEach(id=>{if(!outputs.includes(id))delete settings[id]});const entry_id=panel._dashboard?.entry_id||panel._dashboard?.entries?.[0]?.entry_id;try{await panel._send?.('argus/save_panic_output_profile',{...(entry_id?{entry_id}:{}),outputs,settings})}catch(error){console.error('Argus v2.0.66 SOS remove failed',error)}})},true);
}

export function applyV2066Webgl2AndUi(C){
 if(!C||C.__argusV2066Webgl2AndUi)return;C.__argusV2066Webgl2AndUi=true;const p=C.prototype,connected=p.connectedCallback,render=p._renderEntries;
 
 p.connectedCallback=function(){installStyles(this);const value=connected?.call(this);bindSos(this);return value};
 p._renderEntries=function(){const value=render?.call(this);installStyles(this);bindSos(this);return value};
 
 // El custom element renderiza todo
 p._renderAtmosphere=function(ws,isNight){
   return `<argus-weather-panel class="wx-atmosphere"></argus-weather-panel>`;
 };
 
 // Inutilizamos el inicializador viejo
 p._initWeatherWebGL=function(canvas){};

 // Interceptamos el setter de hass para sincronizar el componente LitElement
 const origHass = Object.getOwnPropertyDescriptor(p, 'hass');
 Object.defineProperty(p, 'hass', {
   set(hass) {
     if (origHass?.set) origHass.set.call(this, hass);
     installStyles(this);
     const wp = this.shadowRoot?.querySelector('argus-weather-panel');
     if (wp) {
       wp.hass = hass;
       wp.setConfig({ weather_entity: this._config?.weather_entity || 'weather.home' });
     }
   },
   get() {
     return origHass?.get ? origHass.get.call(this) : this._hass;
   }
 });
}
