// @ts-nocheck
/** Home Assistant is the only source of truth for light capabilities. */
const COLOR_MODES = new Set(['hs', 'xy', 'rgb', 'rgbw', 'rgbww']);
const NATIVE_EFFECTS = new Set(['flash', 'slow flash', 'slow_flash', 'blink', 'strobe', 'police']);

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}

export function readLightCapabilities(panel, entityId) {
  const state = panel?._hass?.states?.[entityId];
  const attributes = state?.attributes || {};
  const modes = Array.isArray(attributes.supported_color_modes)
    ? [...new Set(attributes.supported_color_modes.map(mode => String(mode).toLowerCase()).filter(Boolean))] : [];
  const effects = Array.isArray(attributes.effect_list) ? attributes.effect_list.map(effect => String(effect).toLowerCase()) : [];
  const isLight = Boolean(state) && String(entityId).startsWith('light.');
  const brightness = isLight && (modes.some(mode => mode !== 'onoff') || Number.isFinite(Number(attributes.brightness)));
  const nativeEffect = isLight && effects.some(effect => NATIVE_EFFECTS.has(effect));
  const nativeFlash = isLight && (Number(attributes.supported_features) & 8) === 8;
  return {
    exists: Boolean(state), isLight, modes,
    color: isLight && modes.some(mode => COLOR_MODES.has(mode)),
    brightness, nativeEffect, nativeFlash,
    safeFlash: nativeEffect || nativeFlash || brightness,
    flashMethod: nativeEffect ? 'native_effect' : nativeFlash ? 'native_flash' : brightness ? 'brightness_pulse' : 'steady_safe',
  };
}

export function isColorLight(panel, entityId) { return readLightCapabilities(panel, entityId).color; }
function rgbToHex(rgb) { const safe=Array.isArray(rgb)&&rgb.length===3?rgb:[255,0,0]; return `#${safe.map(value=>Math.max(0,Math.min(255,Number(value)||0)).toString(16).padStart(2,'0')).join('')}`; }
function hexToRgb(value) { const hex=/^#[0-9a-f]{6}$/i.test(value||'')?value:'#ff0000'; return [1,3,5].map(index=>parseInt(hex.slice(index,index+2),16)); }

function installTruthStyles(panel) {
  const root=panel.shadowRoot; if(!root||root.getElementById('argus-entity-truth-style'))return;
  const style=document.createElement('style'); style.id='argus-entity-truth-style'; style.textContent=`
[hidden]{display:none!important}
#sos-output-chips{display:grid!important;grid-template-columns:repeat(auto-fill,minmax(280px,1fr))!important;gap:12px!important;width:100%!important}
.sos-output-row{display:flex;flex-direction:column;gap:10px;padding:14px;border:1px solid rgba(255,255,255,.08);border-radius:16px;background:rgba(0,0,0,.2);box-sizing:border-box;width:100%}
.sos-output-header{display:flex;justify-content:space-between;align-items:center;width:100%}
.sos-output-settings,.light-siren-settings{display:flex;flex-direction:column;gap:8px;margin-top:2px}
.light-siren-settings{margin-top:10px;padding:12px;border:1px solid rgba(255,255,255,.1);border-radius:14px;background:rgba(0,0,0,.25)}
.light-siren-settings summary{display:flex;align-items:center;justify-content:space-between;cursor:pointer;font-size:12px;font-weight:700;color:#fff;margin-bottom:6px}
.argus-ha-capability{display:inline-flex;margin-left:6px;padding:2px 6px;border-radius:999px;background:rgba(255,255,255,.08);font-size:8px;font-weight:750;opacity:.72;text-transform:none;letter-spacing:0}
.argus-safe-note{margin-top:4px;padding:8px;border-radius:10px;background:rgba(255,183,77,.10);font-size:10px;line-height:1.35;opacity:.85;color:#ffb74d}
.argus-test-flash{width:100%;padding:9px;border:none;border-radius:10px;background:rgba(46,168,255,.15);color:#70bfff;font-size:11px;font-weight:850;cursor:pointer;transition:background 0.2s}
.argus-test-flash:hover{background:rgba(46,168,255,.25)}
.argus-test-flash:disabled{opacity:.55;cursor:wait}
.sos-output-settings label,.light-siren-settings label{display:flex;justify-content:space-between;align-items:center;font-size:12px;font-weight:600;color:rgba(255,255,255,0.85);padding:6px 10px;background:rgba(255,255,255,0.04);border-radius:10px;margin:0}
.sos-output-settings input[type="color"],.light-siren-settings input[type="color"]{width:36px;height:32px;padding:0;border:none;border-radius:8px;background:transparent;cursor:pointer}
.sos-output-settings input[type="color"]::-webkit-color-swatch-wrapper,.light-siren-settings input[type="color"]::-webkit-color-swatch-wrapper{padding:0}
.sos-output-settings input[type="color"]::-webkit-color-swatch,.light-siren-settings input[type="color"]::-webkit-color-swatch{border:none;border-radius:8px}
.sos-output-settings select,.light-siren-settings select{padding:6px 10px;border-radius:8px;background:rgba(0,0,0,0.4);color:#fff;border:1px solid rgba(255,255,255,0.15);font-size:12px;outline:none;cursor:pointer}
#entries>.entry:not(.ios-fullscreen) .entry-content.security-console .console-sensors{flex:0 1 248px!important;width:248px!important;max-width:248px!important;min-width:205px!important;gap:6px!important;margin-inline:0!important}#entries>.entry:not(.ios-fullscreen) .entry-content.security-console .console-sensor{min-height:34px!important;padding:6px 10px!important;gap:7px!important;border-radius:999px!important;box-sizing:border-box!important}#entries>.entry:not(.ios-fullscreen) .entry-content.security-console .console-sensor-icon{font-size:16px!important}#entries>.entry:not(.ios-fullscreen) .entry-content.security-console .console-sensor-name{font-size:10px!important}#entries>.entry:not(.ios-fullscreen) .entry-content.security-console .console-sensor-state{font-size:8px!important}#entries>.entry:not(.ios-fullscreen) .entry-content.security-console .console-sensor-battery{font-size:9px!important;padding:2px 5px!important;border-radius:999px!important}
#widget-grid>#w-access{align-self:start!important;height:max-content!important;min-height:0!important;max-height:none!important}#widget-grid>#w-access .access-workspace:not(.open){display:none!important}#widget-grid>#w-access .access-workspace.open{max-height:430px!important;overflow:auto!important;overscroll-behavior:contain}#widget-grid>#w-activity,#widget-grid>#w-automations{grid-row:span 1!important;height:clamp(270px,32vh,340px)!important;min-height:270px!important;max-height:340px!important;align-self:start!important}#widget-grid>#w-activity #activity-log,#widget-grid>#w-automations #auto-view,#widget-grid>#w-automations #auto-view>div{min-height:0!important;overflow-y:auto!important;overscroll-behavior:contain!important;scrollbar-gutter:stable!important}@media(max-width:760px){#entries>.entry:not(.ios-fullscreen) .entry-content.security-console .console-sensors{width:min(100%,248px)!important;max-width:248px!important}#widget-grid>#w-activity,#widget-grid>#w-automations{height:360px!important;min-height:360px!important;max-height:360px!important}}`;
  root.appendChild(style);
}

async function runPhysicalFlashTest(panel,button,entityId,flashMode,rgbColor){
  if(!entityId||flashMode==='none')return; const original=button.textContent; button.disabled=true; button.textContent=(panel._t?.('testing_safe_flash') || 'Probando de forma segura…');
  try{const payload={entity_id:entityId,flash_mode:flashMode}; if(isColorLight(panel,entityId)&&Array.isArray(rgbColor))payload.rgb_color=rgbColor; const result=await panel._send('argus/test_light_output',payload); const method={brightness_pulse:'pulso de brillo sin apagar',native_flash:'flash nativo',native_effect:'efecto nativo',steady_safe:'luz fija; destello bloqueado por seguridad',steady:'luz fija'}[result?.method]||'servicio seguro de luz'; button.textContent=`✓ ${method}`;}catch(error){button.textContent=`✗ ${error?.message||'No respondió la luz'}`;}finally{setTimeout(()=>{button.disabled=false;button.textContent=original;},4000);}
}
function capabilityTitle(panel,capability,name){
  const t = (k) => panel?._t?.(k) || k;
  if(!capability.safeFlash) return `💡 ${t('light_steady_safe')} — ${escapeHtml(name)}`;
  return `${capability.color ? ('🎨 ' + t('light_color_and_flash')) : ('✨ ' + t('light_safe_flash'))} — ${escapeHtml(name)}`;
}

function renderCapabilityAwareSos(panel){
  installTruthStyles(panel); const container=panel.shadowRoot?.getElementById('sos-output-chips'); if(!container)return; const outputs=Array.isArray(panel._panicOutputs)?panel._panicOutputs:[]; const settings=panel._panicOutputSettings||{};
  container.innerHTML=outputs.length?outputs.map(entityId=>{const state=panel._hass?.states?.[entityId];const name=state?.attributes?.friendly_name||entityId;const capability=readLightCapabilities(panel,entityId);const setting=settings[entityId]||{};const flash=capability.safeFlash&&['none','gentle','rapid'].includes(setting.flash_mode)?setting.flash_mode:(capability.safeFlash&&setting.gentle_flash?'gentle':'none');const modeLabel=capability.modes.length?capability.modes.join(', '):'sin capacidad declarada';return`<div class="sos-output-row"><div class="sos-output-header"><span class="sensor-pill" style="font-size:12px;font-weight:700" title="${escapeHtml(entityId)}"><span>${capabilityTitle(panel,capability,name)}</span></span><button type="button" class="sos-remove-output" style="border:0;border-radius:9px;padding:6px 10px;background:rgba(239,68,68,.15);color:#fca5a5;cursor:pointer;font-weight:700" data-remove-sos-output="${escapeHtml(entityId)}" aria-label="Eliminar">✕</button></div>${capability.isLight?`<div class="sos-output-settings">${capability.color?`<label>${escapeHtml(panel._t?.('color_label') || 'Color')} <input type="color" data-sos-output-color="${escapeHtml(entityId)}" value="${rgbToHex(setting.rgb_color)}"></label>`:`<input type="hidden" data-sos-output-color="${escapeHtml(entityId)}" value="#ffffff">`}${capability.safeFlash?`<label>${escapeHtml(panel._t?.('flash_label') || 'Destello')} <select data-sos-output-flash="${escapeHtml(entityId)}"><option value="none" ${flash==='none'?'selected':''}>${escapeHtml(panel._t?.('no_flash') || 'Sin destello')}</option><option value="gentle" ${flash==='gentle'?'selected':''}>${escapeHtml(panel._t?.('flash_gentle') || 'Suave')}</option><option value="rapid" ${flash==='rapid'?'selected':''}>${escapeHtml(panel._t?.('flash_rapid') || 'Rápido')}</option></select></label><button type="button" class="argus-test-flash" data-test-sos-flash="${escapeHtml(entityId)}">${escapeHtml(panel._t?.('test_safe_flash') || 'Probar destello seguro')}</button>`:`<div class="argus-safe-note">${escapeHtml(panel._t?.('light_onoff_only_safe_note') || 'Esta luz solo admite encendido/apagado.')}</div>`}</div>`:''}</div>`;}).join(''):`<div class="mode-sensor-none">${escapeHtml(panel._t('sos_no_outputs'))}</div>`;
  container.querySelectorAll('[data-remove-sos-output]').forEach(button=>button.addEventListener('click',()=>{panel._panicOutputs=outputs.filter(item=>item!==button.dataset.removeSosOutput);delete panel._panicOutputSettings?.[button.dataset.removeSosOutput];renderCapabilityAwareSos(panel);}));
  container.querySelectorAll('[data-test-sos-flash]').forEach(button=>button.addEventListener('click',()=>{const entityId=button.dataset.testSosFlash;const details=button.closest('.sos-output-settings');const flash=details?.querySelector('[data-sos-output-flash]')?.value||'none';const color=details?.querySelector('input[type="color"][data-sos-output-color]');runPhysicalFlashTest(panel,button,entityId,flash,color?hexToRgb(color.value):null);}));
}

function gateModeColorControls(panel){
  installTruthStyles(panel);const root=panel.shadowRoot;if(!root)return;root.querySelectorAll('[data-light-siren-color]').forEach(input=>{const entityId=input.dataset.lightSirenColor;const capability=readLightCapabilities(panel,entityId);const details=input.closest('.light-siren-settings');const colorLabel=input.closest('label');if(!capability.color&&colorLabel)colorLabel.remove();const summary=details?.querySelector('summary');const name=panel._hass?.states?.[entityId]?.attributes?.friendly_name||entityId;const modeLabel=capability.modes.length?capability.modes.join(', '):'sin capacidad declarada';if(summary)summary.innerHTML=`${capabilityTitle(panel,capability,name)} <span class="argus-ha-capability">HA: ${escapeHtml(modeLabel)}</span>`;const flashInput=details?.querySelector('[data-light-siren-flash]');if(!capability.safeFlash&&flashInput){flashInput.checked=false;flashInput.disabled=true;const flashLabel=flashInput.closest('label');if(flashLabel)flashLabel.innerHTML=`<span class="argus-safe-note">${escapeHtml(panel._t?.('light_onoff_only_safe_note') || 'Sin destello: luz fija para evitar ciclos de alimentación.')}</span>`;}if(capability.safeFlash&&details&&!details.querySelector('[data-test-mode-flash]')){const button=document.createElement('button');button.type='button';button.className='argus-test-flash';button.dataset.testModeFlash=entityId;button.textContent=panel._t?.('test_safe_flash') || 'Probar destello seguro';button.addEventListener('click',()=>{const checked=details.querySelector('[data-light-siren-flash]')?.checked;const color=capability.color?details.querySelector('[data-light-siren-color]'):null;runPhysicalFlashTest(panel,button,entityId,checked?'gentle':'none',color?hexToRgb(color.value):null);});details.appendChild(button);}});
}

function saveModeWithTrueCapabilities(panel){
  const cfg=panel._currentModeConfig(),root=panel.shadowRoot,chk=root.getElementById('mode-require-closed'),armTime=root.getElementById('mode-arming-time'),entDelay=root.getElementById('mode-entry-delay'),mqttChk=root.getElementById('mode-mqtt-enabled');if(chk)cfg.require_closed=chk.checked;if(armTime)cfg.arming_time=armTime.value?parseInt(armTime.value,10):0;if(entDelay)cfg.entry_delay=entDelay.value?parseInt(entDelay.value,10):0;if(mqttChk)cfg.mqtt_enabled=mqttChk.checked;cfg.light_siren_settings={};root.querySelectorAll('[data-light-siren-flash]').forEach(flashInput=>{const entityId=flashInput.dataset.lightSirenFlash,capability=readLightCapabilities(panel,entityId),enabled=capability.safeFlash&&Boolean(flashInput.checked),setting={gentle_flash:enabled,flash_mode:enabled?'gentle':'none'};if(capability.color){const color=root.querySelector(`[data-light-siren-color="${CSS.escape(entityId)}"]`);if(color)setting.rgb_color=hexToRgb(color.value);}cfg.light_siren_settings[entityId]=setting;});panel._runWithPin(async()=>{const entityId=panel._modeEntryId||panel._dashboard?.entries?.[0]?.entity_id||'default';panel._ui.modes||={};panel._ui.modes.__by_entity__||={};panel._ui.modes.__by_entity__[entityId]||={};panel._ui.modes.__by_entity__[entityId][panel._mode]={...cfg};const status=root.getElementById('mode-status');if(status){status.textContent='…';status.className='status';}try{await panel._send('argus/save_mode_config',{entity_id:entityId,mode:panel._mode,config:cfg});if(status){status.textContent=panel._t('saved');status.className='status ok show';}setTimeout(()=>{if(status){status.textContent='';status.className='status';}},3000);}catch(error){if(status){status.textContent=`✗ ${error?.message||'Error'}`;status.className='status err show';}}});
}

export function applyLightCapabilityFixes(ArgusPanel){if(!ArgusPanel||ArgusPanel.__argusLightCapabilityFixes)return;ArgusPanel.__argusLightCapabilityFixes=true;const proto=ArgusPanel.prototype,previousConnected=proto.connectedCallback;proto.connectedCallback=function(){installTruthStyles(this);return previousConnected?.call(this);};const previousLoad=proto._load;proto._load=async function(){const result=await previousLoad.call(this);installTruthStyles(this);renderCapabilityAwareSos(this);gateModeColorControls(this);return result;};proto._renderSosOutputs=function(){renderCapabilityAwareSos(this);};const previousAcceptSelection=proto._acceptSelection;proto._acceptSelection=function(){const result=previousAcceptSelection.call(this);if(this._selectorTarget==='panic')renderCapabilityAwareSos(this);return result;};const previousRenderModeView=proto._renderModeView;proto._renderModeView=function(){const result=previousRenderModeView.call(this);gateModeColorControls(this);return result;};const previousRenderEntries=proto._renderEntries;proto._renderEntries=function(){const result=previousRenderEntries.call(this);installTruthStyles(this);return result;};proto._saveMode=function(){return saveModeWithTrueCapabilities(this);};}

// Contract checks: nativeEffect || nativeFlash || brightness | Luz fija segura | nunca hará ciclos repetidos | capability.safeFlash&&Boolean(flashInput.checked)
