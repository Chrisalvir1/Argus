// @ts-nocheck
// Adaptive visual performance profile engine — fully automatic, no manual selector.
// Detects hardware capabilities and applies the best profile silently on load.
const PROFILES=['essential','light','balanced','full'];
const STORAGE_KEY='argus-performance-v1';
const MONITOR_WINDOW_MS=6000;
const MONITOR_LOW_FPS=18;
const MONITOR_MIN_SAMPLES=3;
const MONITOR_COOLDOWN_MS=25000;
// Labels for the auto-detected profile readout (informational only — no selector shown)
const PROFILE_LABELS={
  es:{full:'Completo',balanced:'Equilibrado',light:'Ligero',essential:'Esencial',auto:'detectado automáticamente',note:'Argus ajusta automáticamente la calidad visual según tu hardware. La seguridad nunca se ve afectada.'},
  en:{full:'Full',balanced:'Balanced',light:'Light',essential:'Essential',auto:'auto-detected',note:'Argus automatically adjusts visual quality based on your hardware. Security is never affected.'},
  fr:{full:'Complet',balanced:'Équilibré',light:'Léger',essential:'Essentiel',auto:'détecté automatiquement',note:'Argus ajuste automatiquement la qualité visuelle selon votre matériel. La sécurité n\'est jamais affectée.'},
  pt:{full:'Completo',balanced:'Equilibrado',light:'Leve',essential:'Essencial',auto:'detectado automaticamente',note:'Argus ajusta automaticamente a qualidade visual com base no hardware. A segurança nunca é afetada.'},
  it:{full:'Completo',balanced:'Bilanciato',light:'Leggero',essential:'Essenziale',auto:'rilevato automaticamente',note:'Argus regola automaticamente la qualità visiva in base all\'hardware. La sicurezza non viene mai influenzata.'},
  zh:{full:'完整',balanced:'均衡',light:'轻量',essential:'基础',auto:'自动检测',note:'Argus 根据您的硬件自动调整视觉质量，安全功能从不受影响。'},
  ru:{full:'Полный',balanced:'Сбалансированный',light:'Легкий',essential:'Базовый',auto:'определено автоматически',note:'Argus автоматически настраивает качество отображения. Функции безопасности никогда не затрагиваются.'},
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
.argus-perf-badge{display:inline-flex;align-items:center;gap:6px;font-size:11px;opacity:.72;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:8px;padding:5px 10px;margin-top:4px;white-space:nowrap}
.argus-perf-badge strong{opacity:1;font-weight:700}
@media(max-width:900px){.personalize-grid{grid-template-areas:'home' 'temp' 'weather' 'clock' 'performance' 'panel' 'hub' 'emergency'!important}}
`;panel.shadowRoot.appendChild(style)}
function applyProfile(panel,profile,source){panel._argusPerfProfile=profile;panel.dataset.argusPerf=profile;panel.dataset.argusPerfSource=source||'auto';PROFILES.forEach(name=>panel.classList.remove('argus-perf-'+name));panel.classList.add('argus-perf-'+profile);panel.dispatchEvent(new CustomEvent('argus-performance-profile',{bubbles:true,composed:true,detail:{profile,source:source||'auto',capabilities:panel._argusPerfCaps||null,fps:panel._argusPerfFps||null}}))}
function updateBadge(panel){
  const root=panel.shadowRoot;if(!root)return;
  const badge=root.getElementById('argus-perf-badge');if(!badge)return;
  const l=lang(panel);const copy=(PROFILE_LABELS[l]||PROFILE_LABELS.en);
  const profile=panel._argusPerfProfile||'balanced';
  const profileLabel=copy[profile]||profile;
  badge.innerHTML=`⚙️ <strong>${profileLabel}</strong>&nbsp;(${copy.auto})`;
  badge.title=copy.note;
}
function ensureField(panel){
  const root=panel.shadowRoot,grid=root?.querySelector('.personalize-grid');if(!grid)return null;
  let field=root.getElementById('argus-performance-field');
  if(!field){
    field=document.createElement('div');
    field.id='argus-performance-field';
    field.className='personalize-field pf-performance';
    field.innerHTML='<span class="argus-perf-badge" id="argus-perf-badge" title=""></span>';
    grid.appendChild(field);
  }
  updateBadge(panel);
  return field;
}
async function runDiagnostics(panel){
  const caps=detectCapabilities(),fps=await benchmark();
  panel._argusPerfCaps=caps;panel._argusPerfFps=fps;
  panel._argusPerfAuto=scoreProfile(caps,fps);
  const store=readStore(),key=fingerprint();
  store[key]={...(store[key]||{}),auto:panel._argusPerfAuto,checkedAt:Date.now()};
  writeStore(store);
  applyProfile(panel,panel._argusPerfAuto,'auto');
  ensureField(panel);
}
function startMonitor(panel){stopMonitor(panel);let windowStart=performance.now(),lastFrame=windowStart,lowSamples=0,lastDowngrade=0;function tick(now){const delta=now-lastFrame;lastFrame=now;if(delta>0){const instant=1000/delta;if(now-windowStart>=MONITOR_WINDOW_MS){windowStart=now;if(instant<MONITOR_LOW_FPS)lowSamples++;else lowSamples=0;if(lowSamples>=MONITOR_MIN_SAMPLES&&now-lastDowngrade>MONITOR_COOLDOWN_MS){const index=Math.max(0,PROFILES.indexOf(panel._argusPerfProfile||'balanced')-1),downgraded=PROFILES[index];if(downgraded&&downgraded!==panel._argusPerfProfile){panel._argusPerfAuto=downgraded;applyProfile(panel,downgraded,'auto-downgrade');lastDowngrade=now;ensureField(panel)}lowSamples=0}}}panel._argusPerfMonitorFrame=requestAnimationFrame(tick)}panel._argusPerfMonitorFrame=requestAnimationFrame(tick)}
function stopMonitor(panel){if(panel._argusPerfMonitorFrame){cancelAnimationFrame(panel._argusPerfMonitorFrame);panel._argusPerfMonitorFrame=null}}
export function applyPerformanceProfile(ArgusPanel){
  if(!ArgusPanel||ArgusPanel.__argusPerformanceProfile)return;
  ArgusPanel.__argusPerformanceProfile=true;
  const proto=ArgusPanel.prototype,connected=proto.connectedCallback,disconnected=proto.disconnectedCallback,load=proto._load,translations=proto._applyTranslations;
  proto.connectedCallback=function(){
    installStyles(this);
    const saved=readStore()[fingerprint()]||{};
    // No manual preference — always use auto-detected profile
    this._argusPerfAuto=clampProfile(saved.auto)||'balanced';
    applyProfile(this,this._argusPerfAuto,'auto');
    const result=connected?.call(this);
    runDiagnostics(this);
    startMonitor(this);
    return result
  };
  proto.disconnectedCallback=function(){stopMonitor(this);return disconnected?.call(this)};
  proto._load=async function(){const result=await load?.call(this);ensureField(this);return result};
  proto._applyTranslations=function(){const result=translations?.call(this);ensureField(this);return result};
}
