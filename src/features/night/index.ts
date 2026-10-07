import type { ArgusPanelConstructor } from '../../core/panel';

type Config = { enabled: boolean; deviceSensor: boolean; lights: string[]; lux: string; presence: string; brightness: string; threshold: number; idle: number; start: number; end: number };
const defaults: Config = { enabled: false, deviceSensor: true, lights: [], lux: '', presence: '', brightness: '', threshold: 10, idle: 30, start: 22, end: 7 };

export function applyNightMode(C: ArgusPanelConstructor) {
  const proto = C.prototype as any;
  if (proto.__argusNightInstalled) return;
  proto.__argusNightInstalled = true;
  const connected = proto.connectedCallback, disconnected = proto.disconnectedCallback;
  const render = proto._renderEntries;
  proto._renderEntries = function (...args: unknown[]) {
    if (!this._argusNightCleanup && this.isConnected) this._argusNightCleanup = install(this);
    return render?.apply(this, args);
  };
  proto.connectedCallback = function () {
    const result = connected?.call(this);
    if (!this._argusNightCleanup) this._argusNightCleanup = install(this);
    return result;
  };
  proto.disconnectedCallback = function () {
    this._argusNightCleanup?.();
    this._argusNightCleanup = null;
    return disconnected?.call(this);
  };
}

function install(panel: any) {
  const key = () => `argus:night:${panel._hass?.user?.id || 'anonymous'}:${panel._cardConfig?.entry_id || panel._dashboard?.entry_id || 'default'}`;
  let config = { ...defaults }, loadedKey = '', lastTouch = Date.now(), bright = true, night = false, disposed = false;
  let wakeLock: any = null, requesting = false, blockClickUntil = 0, previousBrightness: number | null = null;
  let ambient: any = null, ambientLux: number | null = null, ambientTried = false;
  let changedEntity = '', lastBrightness: number | null = null, hardwarePending = false;
  const style = document.createElement('style');
  style.textContent = `
    :host(.argus-night-active){background:#080000!important}
    :host(.argus-night-active) .entry{filter:grayscale(1) sepia(1) saturate(20) hue-rotate(310deg) brightness(.65)!important;background:#080000!important}
    :host(.argus-night-active) .wx,:host(.argus-night-active) .wx-webgl{display:none!important}
    :host(.argus-night-active) .entry svg animate{display:none}
    :host(.argus-night-active) .console-hud-right button{background:#171717!important;color:#ddd!important;border:1px solid #888!important}
    :host(.argus-night-active) .entry-icon svg{filter:none!important}
    :host(.argus-night-active) .entry *{animation:none!important}
    :host(.argus-night-active.argus-contrast-high) .entry{filter:none!important;background:#000!important}
    .argus-night-settings{position:fixed;inset:0;z-index:100000001;background:rgba(0,0,0,.8);display:grid;place-items:center;padding:16px;box-sizing:border-box}
    .argus-night-settings form{max-width:440px;width:100%;max-height:85dvh;overflow:auto;background:#161b22;color:#fff;padding:20px;border-radius:16px;box-sizing:border-box}
    .argus-night-settings label{display:grid;gap:6px;margin:12px 0}.argus-night-settings select,.argus-night-settings input{min-height:44px;max-width:100%;background:#242c38;color:white;border:1px solid #8b949e;border-radius:8px;padding:8px;box-sizing:border-box}
    .argus-night-settings button{min-height:44px;margin:6px}
  `;
  panel.shadowRoot.appendChild(style);
  const fullscreen = () => panel.classList.contains('fullscreen-active');
  const states = () => panel._hass?.states || {};
  const validNumber = (s: any) => s && !['unknown','unavailable','offline','disconnected'].includes(s.state) && s.state !== '' && Number.isFinite(Number(s.state));
  function stopAmbient() {
    if (ambient) { try { ambient.stop(); } catch {} ambient = null; }
    ambientLux = null;
  }
  function readDeviceSensor() {
    if (!config.deviceSensor || !config.enabled || !fullscreen() || document.visibilityState !== 'visible') {
      stopAmbient(); ambientTried = false; return;
    }
    if (ambient || ambientTried) return;
    ambientTried = true;
    const Sensor = (window as any).AmbientLightSensor;
    if (!Sensor || !window.isSecureContext) return;
    try {
      const sensor = new Sensor({ frequency: 1 });
      ambient = sensor;
      sensor.addEventListener('reading', () => {
        if (disposed || ambient !== sensor) return;
        const value = sensor.illuminance;
        ambientLux = typeof value === 'number' && Number.isFinite(value) && value >= 0 ? value : null;
      });
      sensor.addEventListener('error', () => { if (ambient === sensor) stopAmbient(); });
      sensor.start();
    } catch { stopAmbient(); }
  }
  async function keepAwake() {
    if (wakeLock || requesting || disposed || !fullscreen() || !config.enabled || document.visibilityState !== 'visible') return;
    const api = (navigator as any).wakeLock;
    if (!api) return;
    requesting = true;
    try {
      const lock = await api.request('screen');
      if (disposed || !fullscreen() || !config.enabled) await lock.release();
      else { wakeLock = lock; lock.addEventListener('release', () => { if (wakeLock === lock) wakeLock = null; }); }
    } catch { /* The browser can reject wake locks, including in low-power mode. */ }
    finally { requesting = false; }
  }
  async function hardware(enter: boolean) {
    if (hardwarePending || !panel._hass?.callService) return;
    hardwarePending = true;
    try {
      if (enter && config.brightness) {
        const s = states()[config.brightness];
        if (!validNumber(s)) return;
        const min = Number(s.attributes?.min ?? 0), max = Number(s.attributes?.max ?? 100);
        const step = Number(s.attributes?.step ?? 1);
        if (!(max > min) || !(step > 0)) return;
        const value = Math.min(max, Math.max(min, min + Math.round(((max - min) * .2) / step) * step));
        previousBrightness = Number(s.state); changedEntity = config.brightness; lastBrightness = value;
        await panel._hass.callService('number','set_value',{entity_id: changedEntity,value});
      } else if (!enter && changedEntity && previousBrightness !== null) {
        const current = states()[changedEntity];
        if (validNumber(current) && (Number(current.state) === lastBrightness || Number(current.state) === previousBrightness)) {
          await panel._hass.callService('number','set_value',{entity_id: changedEntity,value:previousBrightness});
        }
        changedEntity = ''; previousBrightness = null;
      }
    } catch (error) { console.warn('Argus screen brightness update failed', error); }
    finally { hardwarePending = false; if (enter && (disposed || !night)) void hardware(false); }
  }
  function setNight(value: boolean) {
    if (night === value) return;
    night = value;
    panel.shadowRoot.querySelectorAll('.entry-icon svg').forEach((svg: SVGSVGElement) => { if (value) svg.pauseAnimations?.(); else svg.unpauseAnimations?.(); });
    panel.classList.toggle('argus-night-active', value);
    void hardware(value);
  }
  function tick() {
    if (disposed) return;
    const currentKey = key();
    if (loadedKey !== currentKey) {
      setNight(false); loadedKey = currentKey;
      stopAmbient(); ambientTried = false;
      try { config = { ...defaults, ...JSON.parse(localStorage.getItem(currentKey) || '{}') }; } catch { config = { ...defaults }; }
      config.lights = Array.isArray(config.lights) ? [...new Set(config.lights.filter(id => typeof id === 'string' && id.startsWith('light.')))] : [];
    }
    readDeviceSensor();
    if (!config.enabled || !fullscreen() || document.visibilityState !== 'visible') {
      setNight(false); if (wakeLock) { void wakeLock.release(); wakeLock = null; } return;
    }
    const all = states();
    const alarm = (panel._dashboard?.entries || []).some((e: any) => all[e.entity_id]?.state === 'triggered' || all[e.entity_id]?.attributes?.argus_panic_active);
    const presence = config.presence && ['on','home','occupied','detected'].includes(all[config.presence]?.state);
    if (ambientLux !== null || config.lux) {
      const sensor = all[config.lux];
      if (ambientLux === null && !validNumber(sensor)) { setNight(false); return; }
      const lux = ambientLux ?? Number(sensor.state);
      if (lux >= config.threshold * 1.5) bright = true;
      else if (lux <= config.threshold) bright = false;
    } else if (config.lights.length) {
      // Unavailable/missing lights are not evidence of darkness.
      bright = !config.lights.every(id => {
        const light = all[id];
        const a = light?.attributes;
        return light?.state === 'off' && a?.available !== false && a?.online !== false && a?.connected !== false && a?.is_online !== false;
      });
    } else {
      const hour = new Date().getHours();
      bright = !(config.start > config.end ? hour >= config.start || hour < config.end : hour >= config.start && hour < config.end);
    }
    setNight(!panel.classList.contains('argus-contrast-high') && !bright && !presence && !alarm && Date.now() - lastTouch >= config.idle * 1000);
  }
  const activity = (event: Event) => {
    lastTouch = Date.now();
    if (night) { blockClickUntil = Date.now() + 800; event.preventDefault(); event.stopImmediatePropagation(); setNight(false); }
    void keepAwake();
  };
  const click = (event: Event) => { if (Date.now() < blockClickUntil) { event.preventDefault(); event.stopImmediatePropagation(); } };
  panel.shadowRoot.addEventListener('pointerdown', activity, {capture:true});
  panel.shadowRoot.addEventListener('keydown', activity, {capture:true});
  panel.shadowRoot.addEventListener('click', click, {capture:true});
  const transition = () => { tick(); void keepAwake(); };
  panel.addEventListener('argus-fullscreen-changed', transition);
  document.addEventListener('visibilitychange', transition);
  const timer = window.setInterval(tick, 1000);
  panel._openNightSettings = () => {
    setNight(false); lastTouch = Date.now();
    if (panel.shadowRoot.querySelector('.argus-night-settings')) return;
    const overlay = document.createElement('div'); overlay.className = 'argus-night-settings';
    const form = document.createElement('form'); form.setAttribute('role','dialog'); form.setAttribute('aria-modal','true'); form.setAttribute('aria-label','Modo nocturno'); overlay.appendChild(form);
    const title = document.createElement('h2'); title.textContent = 'Modo nocturno · Pantalla completa'; form.appendChild(title);
    const checkbox = document.createElement('input'); checkbox.type='checkbox'; checkbox.checked=config.enabled;
    const label = document.createElement('label'); label.textContent='Activar automáticamente'; label.appendChild(checkbox); form.appendChild(label);
    const intro=document.createElement('p');intro.textContent='En pantalla completa, Argus se vuelve rojo y tenue durante la noche. Toca la pantalla para recuperar los colores. No cambia el modo de la alarma.';form.appendChild(intro);
    function number(text:string,value:number,min:number,max:number,parent:HTMLElement=form) { const label=document.createElement('label');label.textContent=text;const input=document.createElement('input');input.type='number';input.min=String(min);input.max=String(max);input.required=true;input.value=String(value);label.appendChild(input);parent.appendChild(label);return input; }
    function hour(text:string,value:number) {const label=document.createElement('label');label.textContent=text;const input=document.createElement('input');input.type='time';input.required=true;input.step='3600';input.value=String(value).padStart(2,'0')+':00';label.appendChild(input);form.appendChild(label);return input;}
    const start=hour('Desde',config.start), end=hour('Hasta',config.end), idle=number('Volver al rojo tras no tocar la pantalla (segundos)',config.idle,5,600);
    const advanced=document.createElement('details');const summary=document.createElement('summary');summary.textContent='Opciones avanzadas · sensores y brillo';advanced.appendChild(summary);form.appendChild(advanced);
    function select(text:string, domain:string, value:string) {
      const label=document.createElement('label');label.textContent=text;const select=document.createElement('select');
      const empty=document.createElement('option');empty.value='';empty.textContent=domain==='sensor'?'Usar el horario de arriba':'No usar';select.appendChild(empty);
      Object.values(states()).filter((s:any)=>s.entity_id.startsWith(domain+'.') && (domain!=='sensor' || s.attributes?.device_class==='illuminance' || ['lx','lux'].includes(s.attributes?.unit_of_measurement) || s.entity_id===value)).forEach((s:any)=>{const option=document.createElement('option');option.value=s.entity_id;option.textContent=s.attributes?.friendly_name || s.entity_id;select.appendChild(option);});
      select.value=value;label.appendChild(select);advanced.appendChild(label);return select;
    }
    const deviceLabel=document.createElement('label');deviceLabel.textContent='Usar el sensor de luz de este dispositivo si está disponible';
    const deviceSensor=document.createElement('input');deviceSensor.type='checkbox';deviceSensor.checked=config.deviceSensor;deviceLabel.appendChild(deviceSensor);advanced.appendChild(deviceLabel);
    const deviceStatus=document.createElement('p');deviceStatus.textContent=ambientLux !== null ? 'Sensor del dispositivo activo.' : 'Si este navegador no permite leer el sensor, se usará el sensor de HA, las luces elegidas o el horario.';advanced.appendChild(deviceStatus);
    const lightsLabel=document.createElement('label');lightsLabel.textContent='Ponerse rojo cuando todas estas luces estén apagadas';advanced.appendChild(lightsLabel);
    const lightList=document.createElement('div');lightList.style.cssText='max-height:180px;overflow:auto';lightsLabel.appendChild(lightList);
    const lightInputs: HTMLInputElement[]=[];
    const lightIds=[...new Set<string>([...Object.keys(states()).filter(id=>id.startsWith('light.')), ...config.lights])];
    lightIds.forEach(id=>{const row=document.createElement('label');row.style.display='flex';row.style.alignItems='center';const input=document.createElement('input');input.type='checkbox';input.value=id;input.checked=config.lights.includes(id);row.appendChild(input);row.appendChild(document.createTextNode(states()[id]?.attributes?.friendly_name || id));lightList.appendChild(row);lightInputs.push(input);});
    const help=document.createElement('p');help.textContent='Prioridad: sensor del dispositivo, sensor de luz de HA, luces seleccionadas y horario. Una luz encendida o sin conexión conserva los colores cuando se usa la opción de luces. Presencia recupera los colores.';advanced.appendChild(help);
    const lux=select('Detectar oscuridad con un sensor de luz','sensor',config.lux), presence=select('Recuperar colores al detectar presencia','binary_sensor',config.presence), brightness=select('Control de brillo de esta pantalla en HA','number',config.brightness);
    const threshold=number('Umbral de oscuridad (lux)',config.threshold,1,1000,advanced);
    const note=document.createElement('p');note.textContent='Solo funciona en pantalla completa. Con alto contraste conserva la visualización normal. Sin un control de brillo de la pantalla, solo se atenúa el panel.';form.appendChild(note);
    const close=document.createElement('button');close.type='button';close.textContent='Cancelar';close.onclick=()=>overlay.remove();form.appendChild(close);
    const save=document.createElement('button');save.type='submit';save.textContent='Guardar';form.appendChild(save);
    form.onsubmit=event=>{event.preventDefault();stopAmbient();ambientTried=false;config={enabled:checkbox.checked,deviceSensor:deviceSensor.checked,lights:lightInputs.filter(input=>input.checked).map(input=>input.value),lux:lux.value,presence:presence.value,brightness:brightness.value,threshold:Number(threshold.value),idle:Number(idle.value),start:Number(start.value.split(':')[0]),end:Number(end.value.split(':')[0])};try {localStorage.setItem(key(),JSON.stringify(config));}catch{note.textContent='No se pudo guardar la configuración en este navegador.';return;}overlay.remove();transition();};
    overlay.addEventListener('keydown',event=>{
      if(event.key==='Escape') {event.stopPropagation();overlay.remove();}
      if(event.key==='Tab') {const nodes=[...form.querySelectorAll<HTMLElement>('input,select,button,summary')].filter(node=>node.getClientRects().length>0);const first=nodes[0],last=nodes[nodes.length-1];if(event.shiftKey && panel.shadowRoot.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey && panel.shadowRoot.activeElement===last){event.preventDefault();first.focus();}}
    });
    panel.shadowRoot.appendChild(overlay);checkbox.focus();
  };
  tick();
  return () => { disposed=true; stopAmbient(); clearInterval(timer); setNight(false); void hardware(false); if(wakeLock) void wakeLock.release();style.remove();panel.shadowRoot.querySelector('.argus-night-settings')?.remove();panel.shadowRoot.removeEventListener('pointerdown',activity,true);panel.shadowRoot.removeEventListener('keydown',activity,true);panel.shadowRoot.removeEventListener('click',click,true);panel.removeEventListener('argus-fullscreen-changed',transition);document.removeEventListener('visibilitychange',transition); };
}
