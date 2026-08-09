// @ts-nocheck
// Adaptive visual performance profile engine. Capability values describe the
// browser rendering this panel; they do not guess the Home Assistant host model.
const PROFILES=['essential','light','balanced','full'];
const STORAGE_KEY='argus-performance-v1';
const MONITOR_WINDOW_MS=6000;
const MONITOR_LOW_FPS=18;
const MONITOR_MIN_SAMPLES=3;
const MONITOR_COOLDOWN_MS=25000;
const COPY={
  es:['Rendimiento del dispositivo','Automático (recomendado)','Completo','Equilibrado','Ligero','Esencial','Ejecutar diagnóstico','Esto solo ajusta la presentación visual. Las funciones de seguridad de Argus no se ven afectadas.','Medido en este navegador y dispositivo de visualización; no identifica ni supone el modelo del host de Home Assistant.'],
  en:['Device performance','Automatic (recommended)','Full','Balanced','Light','Essential','Run diagnostics','This only adjusts the visual presentation. Argus security functions are never affected.','Measured in this browser and display device; it does not identify or assume the Home Assistant host model.'],
  fr:['Performance de l’appareil','Automatique (recommandé)','Complet','Équilibré','Léger','Essentiel','Lancer le diagnostic','Cela ajuste uniquement la présentation visuelle. Les fonctions de sécurité d’Argus ne sont jamais affectées.','Mesuré dans ce navigateur et cet appareil d’affichage, sans supposer le modèle de l’hôte Home Assistant.'],
  pt:['Desempenho do dispositivo','Automático (recomendado)','Completo','Equilibrado','Leve','Essencial','Executar diagnóstico','Isso ajusta apenas a apresentação visual. As funções de segurança do Argus nunca são afetadas.','Medido neste navegador e dispositivo de exibição, sem presumir o modelo do host Home Assistant.'],
  it:['Prestazioni del dispositivo','Automatico (consigliato)','Completo','Bilanciato','Leggero','Essenziale','Esegui diagnostica','Questo regola solo la presentazione visiva. Le funzioni di sicurezza di Argus non vengono mai influenzate.','Misurato nel browser e dispositivo di visualizzazione, senza presumere il modello host Home Assistant.'],
  zh:['设备性能','自动（推荐）','完整','均衡','轻量','基础','运行诊断','这仅调整视觉呈现，绝不会影响 Argus 的安防功能。','结果来自当前浏览器和显示设备，不识别或假设 Home Assistant 主机型号。'],
  ru:['Производительность устройства','Автоматически (рекомендуется)','Полный','Сбалансированный','Легкий','Базовый','Запустить диагностику','Это влияет только на визуальное отображение. Функции безопасности Argus никогда не затрагиваются.','Измеряется в текущем браузере и устройстве отображения без предположения о модели хоста Home Assistant.']
};
const lang=p=>String(p._manualLang||p._hass?.language||p._hass?.locale?.language||'en').toLowerCase().split(/[-_]/)[0];
function fingerprint(){try{const ua=navigator.userAgent||'',plat=navigator.platform||'',cores=navigator.hardwareConcurrency||0,mem=navigator.deviceMemory||0;let hash=0;const text=`${ua}|${plat}|${cores}|${mem}`;for(let i=0;i<text.length;i++)hash=(hash*31+text.charCodeAt(i))|0;return String(hash)}catch(_){return 'default'}}
function readStore(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}')}catch(_){return {}}}
function writeStore(data){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(data))}catch(_){}}
function detectCapabilities(){
  const cores=navigator.hardwareConcurrency||2,memory=navigator.deviceMemory||null,dpr=window.devicePixelRatio||1,reducedMotion=window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches||false;
  let webgl1=false,webgl2=false;
  try{webgl2=!!document.createElement('canvas').getContext('webgl2') }catch(_){}
  try{const canvas=document.createElement('canvas');webgl1=!!(canvas.getContext('webgl')||canvas.getContext('experimental-webgl'))}catch(_){}
  return {cores,memory,dpr,reducedMotion,webgl1,webgl2,width:window.innerWidth||0,height:window.innerHeight||0};
}
function benchmark(duration=900){return new Promise(resolve=>{let frames=0;const start=performance.now();function tick(now){frames++;if(now-start<duration)requestAnimationFrame(tick);else resolve(Math.round((frames*1000)/Math.max(1,now-start)))}requestAnimationFrame(tick)})}
function scoreProfile(caps,fps){
  let score=0;
  score+=Math.min(caps.cores||2,8)*8;
  score+=caps.memory?Math.min(caps.memory,8)*6:18;
  if(caps.webgl2)score+=30;else if(caps.webgl1)score+=14;
  score+=Math.min(fps,60)*1.2;
  if(fps>=55&&(caps.cores||0)>=4)score+=8;
  if(caps.reducedMotion)score-=20;
  if(Math.max(caps.width,caps.height)<800)score-=10;
  if(score>=170)return 'full';if(score>=120)return 'balanced';if(score>=70)return 'light';return 'essential';
}
function clampProfile(name){return PROFILES.includes(name)?name:null}
function installStyles(panel){if(panel.shadowRoot?.getElementById('argus-perf-style'))return;const style=document.createElement('style');style.id='argus-perf-style';style.textContent=`
:host(.argus-perf-light) .entry,:host(.argus-perf-essential) .entry{transition-duration:.16s!important}
:host(.argus-perf-essential) .argus-old-shield{display:none!important}
:host(.argus-perf-essential) .entry-icon.argus-shield-changing>svg{animation:none!important}
:host(.argus-perf-light) .entry-icon.argus-shield-changing>svg{animation-duration:.22s!important}
:host(.argus-perf-essential) .liquid-btn,:host(.argus-perf-essential) .console-keypad,:host(.argus-perf-light) .liquid-btn{backdrop-filter:none!important;-webkit-backdrop-filter:none!important}
:host(.argus-perf-essential) .liquid-btn:hover,:host(.argus-perf-light) .liquid-btn:hover{transform:none!important}
:host(.argus-perf-essential) .entry::after{display:none!important}
.pf-performance{grid-area:performance}.personalize-grid{grid-template-areas:'home temp' 'panel weather' 'hub clock' 'performance performance' 'emergency emergency'!important}
.argus-performance-readout{font-size:11px;opacity:.78;white-space:pre-wrap;margin:6px 0 0}.argus-performance-context{font-size:10px;opacity:.62;margin:5px 0 0;line-height:1.35}.argus-performance-note{font-size:11px;opacity:.66;margin:5px 0 0}
@media(max-width:900px){.personalize-grid{grid-template-areas:'home' 'temp' 'weather' 'clock' 'performance' 'panel' 'hub' 'emergency'!important}}
`;panel.shadowRoot.appendChild(style)}
function applyProfile(panel,profile,source){panel._argusPerfProfile=profile;panel.dataset.argusPerf=profile;panel.dataset.argusPerfSource=source||'auto';PROFILES.forEach(name=>panel.classList.remove('argus-perf-'+name));panel.classList.add('argus-perf-'+profile);panel.dispatchEvent(new CustomEvent('argus-performance-profile',{bubbles:true,composed:true,detail:{profile,source:source||'auto',capabilities:panel._argusPerfCaps||null,fps:panel._argusPerfFps||null}}))}
function localizeField(panel,field){const copy=COPY[lang(panel)]||COPY.en,label=field.querySelector('#argus-performance-label'),options=field.querySelectorAll('option'),button=field.querySelector('#argus-performance-diagnose'),note=field.querySelector('.argus-performance-note'),context=field.querySelector('.argus-performance-context');if(label)label.textContent='⚙️ '+copy[0];[copy[1],copy[2],copy[3],copy[4],copy[5]].forEach((text,index)=>{if(options[index])options[index].textContent=text});if(button)button.textContent=copy[6];if(note)note.textContent=copy[7];if(context)context.textContent=copy[8];const select=field.querySelector('select');if(select)select.value=panel._argusPerfPreference||'auto'}
function renderReadout(panel,field){const readout=field.querySelector('.argus-performance-readout');if(!readout)return;const caps=panel._argusPerfCaps;if(!caps){readout.textContent='';return}const language=lang(panel);const yes=language==='es'?'sí':'yes',no=language==='es'?'no':'no',memory=caps.memory?`${caps.memory} GB`:(language==='es'?'no expuesta por el navegador':'not exposed by browser'),source=panel.dataset.argusPerfSource||'auto',sourceLabel=source==='manual'?(language==='es'?'manual':'manual'):source;readout.textContent=[`WebGL2: ${caps.webgl2?yes:no} · WebGL1: ${caps.webgl1?yes:no}`,`Núcleos: ${caps.cores} · Memoria: ${memory}`,`FPS medidos: ${panel._argusPerfFps??'—'} · Perfil recomendado: ${panel._argusPerfAuto||'—'}`,`Perfil activo: ${panel._argusPerfProfile||'—'} (${sourceLabel})`].join('\n')}
function ensureField(panel){const root=panel.shadowRoot,grid=root?.querySelector('.personalize-grid');if(!grid)return null;let field=root.getElementById('argus-performance-field');if(!field){field=document.createElement('div');field.id='argus-performance-field';field.className='personalize-field pf-performance';field.innerHTML='<label class="setting-label" id="argus-performance-label" for="argus-performance-select"></label><select id="argus-performance-select" class="glass-control"><option value="auto"></option><option value="full"></option><option value="balanced"></option><option value="light"></option><option value="essential"></option></select><button type="button" id="argus-performance-diagnose" class="glass-control argus-performance-diagnose"></button><p class="argus-performance-readout"></p><p class="argus-performance-context"></p><p class="argus-performance-note"></p>';grid.appendChild(field);field.querySelector('select').addEventListener('change',event=>setPreference(panel,event.target.value));field.querySelector('#argus-performance-diagnose').addEventListener('click',()=>runDiagnostics(panel,true))}localizeField(panel,field);renderReadout(panel,field);return field}
function setPreference(panel,value){const store=readStore(),key=fingerprint();panel._argusPerfPreference=value==='auto'?null:clampProfile(value);store[key]={...(store[key]||{}),preference:panel._argusPerfPreference};writeStore(store);const profile=panel._argusPerfPreference||panel._argusPerfAuto||'balanced';applyProfile(panel,profile,panel._argusPerfPreference?'manual':'auto');const field=panel.shadowRoot?.getElementById('argus-performance-field');if(field)renderReadout(panel,field)}
async function runDiagnostics(panel,forceApply){const caps=detectCapabilities(),fps=await benchmark();panel._argusPerfCaps=caps;panel._argusPerfFps=fps;panel._argusPerfAuto=scoreProfile(caps,fps);const store=readStore(),key=fingerprint();store[key]={...(store[key]||{}),auto:panel._argusPerfAuto,checkedAt:Date.now()};writeStore(store);if(forceApply||!panel._argusPerfPreference)applyProfile(panel,panel._argusPerfPreference||panel._argusPerfAuto,panel._argusPerfPreference?'manual':'auto');const field=panel.shadowRoot?.getElementById('argus-performance-field');if(field){localizeField(panel,field);renderReadout(panel,field)}}
function startMonitor(panel){stopMonitor(panel);let windowStart=performance.now(),lastFrame=windowStart,lowSamples=0,lastDowngrade=0;function tick(now){const delta=now-lastFrame;lastFrame=now;if(delta>0){const instant=1000/delta;if(now-windowStart>=MONITOR_WINDOW_MS){windowStart=now;if(instant<MONITOR_LOW_FPS)lowSamples++;else lowSamples=0;if(lowSamples>=MONITOR_MIN_SAMPLES&&!panel._argusPerfPreference&&now-lastDowngrade>MONITOR_COOLDOWN_MS){const index=Math.max(0,PROFILES.indexOf(panel._argusPerfProfile||'balanced')-1),downgraded=PROFILES[index];if(downgraded&&downgraded!==panel._argusPerfProfile){panel._argusPerfAuto=downgraded;applyProfile(panel,downgraded,'auto-downgrade');lastDowngrade=now}lowSamples=0}}}panel._argusPerfMonitorFrame=requestAnimationFrame(tick)}panel._argusPerfMonitorFrame=requestAnimationFrame(tick)}
function stopMonitor(panel){if(panel._argusPerfMonitorFrame){cancelAnimationFrame(panel._argusPerfMonitorFrame);panel._argusPerfMonitorFrame=null}}
export function applyPerformanceProfile(ArgusPanel){if(!ArgusPanel||ArgusPanel.__argusPerformanceProfile)return;ArgusPanel.__argusPerformanceProfile=true;const proto=ArgusPanel.prototype,connected=proto.connectedCallback,disconnected=proto.disconnectedCallback,load=proto._load,translations=proto._applyTranslations;proto.connectedCallback=function(){installStyles(this);const saved=readStore()[fingerprint()]||{};this._argusPerfPreference=clampProfile(saved.preference);this._argusPerfAuto=clampProfile(saved.auto)||'balanced';applyProfile(this,this._argusPerfPreference||this._argusPerfAuto,this._argusPerfPreference?'manual':'auto');const result=connected?.call(this);runDiagnostics(this,false);startMonitor(this);return result};proto.disconnectedCallback=function(){stopMonitor(this);return disconnected?.call(this)};proto._load=async function(){const result=await load?.call(this);ensureField(this);return result};proto._applyTranslations=function(){const result=translations?.call(this);ensureField(this);return result}}
