// Adaptive performance profile engine.
// Detects device capabilities and a short main-thread benchmark, then applies
// a visual profile (full/balanced/light/essential) as a host class + dataset
// attribute. Only visual layers (blur, transitions, shield crossfade) are
// throttled here. Security state, sensors, alarm modes, PIN, SOS and
// connectivity are never touched by this module.
const PROFILES=['essential','light','balanced','full'];
const STORAGE_KEY='argus-performance-v1';
const MONITOR_WINDOW_MS=6000;
const MONITOR_LOW_FPS=18;
const MONITOR_MIN_SAMPLES=3;
const MONITOR_COOLDOWN_MS=25000;

const COPY={
  es:['Rendimiento del dispositivo','Automático (recomendado)','Completo','Equilibrado','Ligero','Esencial','Ejecutar diagnóstico','Esto solo ajusta la presentación visual. Las funciones de seguridad de Argus no se ven afectadas.'],
  en:['Device performance','Automatic (recommended)','Full','Balanced','Light','Essential','Run diagnostics','This only adjusts the visual presentation. Argus security functions are never affected.'],
  fr:['Performance de l’appareil','Automatique (recommandé)','Complet','Équilibré','Léger','Essentiel','Lancer le diagnostic','Cela ajuste uniquement la présentation visuelle. Les fonctions de sécurité d’Argus ne sont jamais affectées.'],
  pt:['Desempenho do dispositivo','Automático (recomendado)','Completo','Equilibrado','Leve','Essencial','Executar diagnóstico','Isso ajusta apenas a apresentação visual. As funções de segurança do Argus nunca são afetadas.'],
  it:['Prestazioni del dispositivo','Automatico (consigliato)','Completo','Bilanciato','Leggero','Essenziale','Esegui diagnostica','Questo regola solo la presentazione visiva. Le funzioni di sicurezza di Argus non vengono mai influenzate.'],
  zh:['设备性能','自动（推荐）','完整','均衡','轻量','基础','运行诊断','这仅调整视觉呈现，绝不会影响 Argus 的安防功能。'],
  ru:['Производительность устройства','Автоматически (рекомендуется)','Полный','Сбалансированный','Легкий','Базовый','Запустить диагностику','Это влияет только на визуальное отображение. Функции безопасности Argus никогда не затрагиваются.']
};

const lang=p=>String(p._manualLang||p._hass?.language||p._hass?.locale?.language||'en').toLowerCase().split(/[-_]/)[0];

function fingerprint(){
  try{
    const ua=navigator.userAgent||'';
    const plat=navigator.platform||'';
    const cores=navigator.hardwareConcurrency||0;
    const mem=navigator.deviceMemory||0;
    let hash=0;
    const text=`${ua}|${plat}|${cores}|${mem}`;
    for(let i=0;i<text.length;i++){hash=(hash*31+text.charCodeAt(i))|0}
    return String(hash);
  }catch(_){return 'default'}
}

function readStore(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}')}catch(_){return {}}}
function writeStore(data){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(data))}catch(_){}}

function detectCapabilities(){
  const cores=navigator.hardwareConcurrency||2;
  const memory=navigator.deviceMemory||null;
  const dpr=window.devicePixelRatio||1;
  const reducedMotion=window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches||false;
  let webgl1=false,webgl2=false;
  try{
    const c=document.createElement('canvas');
    webgl1=!!(c.getContext('webgl')||c.getContext('experimental-webgl'));
    webgl2=!!c.getContext('webgl2');
  }catch(_){}
  return {cores,memory,dpr,reducedMotion,webgl1,webgl2,width:window.innerWidth||0,height:window.innerHeight||0};
}

function benchmark(duration=700){
  return new Promise(resolve=>{
    let frames=0;const start=performance.now();
    function tick(now){
      frames++;
      if(now-start<duration){requestAnimationFrame(tick)}
      else{resolve(Math.round((frames*1000)/Math.max(1,now-start)))}
    }
    requestAnimationFrame(tick);
  });
}

function scoreProfile(caps,fps){
  let score=0;
  score+=Math.min(caps.cores||2,8)*8;
  if(caps.memory)score+=Math.min(caps.memory,8)*6;
  if(caps.webgl2)score+=30;else if(caps.webgl1)score+=14;
  score+=Math.min(fps,60)*1.2;
  if(caps.reducedMotion)score-=20;
  if(Math.max(caps.width,caps.height)<800)score-=10;
  if(score>=170)return 'full';
  if(score>=120)return 'balanced';
  if(score>=70)return 'light';
  return 'essential';
}

function clampProfile(name){return PROFILES.includes(name)?name:null}

function installStyles(panel){
  if(panel.shadowRoot?.getElementById('argus-perf-style'))return;
  const style=document.createElement('style');
  style.id='argus-perf-style';
  style.textContent=`
:host(.argus-perf-light) .entry,:host(.argus-perf-essential) .entry{transition-duration:.16s!important}
:host(.argus-perf-essential) .argus-old-shield{display:none!important}
:host(.argus-perf-essential) .entry-icon.argus-shield-changing>svg{animation:none!important}
:host(.argus-perf-light) .entry-icon.argus-shield-changing>svg{animation-duration:.22s!important}
:host(.argus-perf-essential) .liquid-btn,:host(.argus-perf-essential) .console-keypad,:host(.argus-perf-light) .liquid-btn{backdrop-filter:none!important;-webkit-backdrop-filter:none!important}
:host(.argus-perf-essential) .liquid-btn:hover,:host(.argus-perf-light) .liquid-btn:hover{transform:none!important}
:host(.argus-perf-essential) .entry::after{display:none!important}
.pf-performance{grid-area:performance}
.personalize-grid{grid-template-areas:'home temp' 'panel weather' 'hub clock' 'performance performance' 'emergency emergency'!important}
.argus-performance-readout{font-size:11px;opacity:.75;white-space:pre-wrap;margin:6px 0 0}
.argus-performance-note{font-size:11px;opacity:.6;margin:4px 0 0}
@media(max-width:900px){.personalize-grid{grid-template-areas:'home' 'temp' 'weather' 'clock' 'performance' 'panel' 'hub' 'emergency'!important}}
`;
  panel.shadowRoot.appendChild(style);
}

function applyProfile(panel,profile,source){
  panel._argusPerfProfile=profile;
  panel.dataset.argusPerf=profile;
  panel.dataset.argusPerfSource=source||'auto';
  PROFILES.forEach(name=>panel.classList.remove('argus-perf-'+name));
  panel.classList.add('argus-perf-'+profile);
  panel.dispatchEvent(new CustomEvent('argus-performance-profile',{
    bubbles:true,composed:true,
    detail:{profile,source:source||'auto',capabilities:panel._argusPerfCaps||null,fps:panel._argusPerfFps||null}
  }));
}

function localizeField(panel,field){
  const copy=COPY[lang(panel)]||COPY.en;
  const label=field.querySelector('#argus-performance-label');
  const options=field.querySelectorAll('option');
  const button=field.querySelector('#argus-performance-diagnose');
  const note=field.querySelector('.argus-performance-note');
  if(label)label.textContent='⚙️ '+copy[0];
  const optionText=[copy[1],copy[2],copy[3],copy[4],copy[5]];
  options.forEach((option,index)=>{if(optionText[index])option.textContent=optionText[index]});
  if(button)button.textContent=copy[6];
  if(note)note.textContent=copy[7];
  const select=field.querySelector('select');
  if(select)select.value=panel._argusPerfPreference||'auto';
}

function renderReadout(panel,field){
  const readout=field.querySelector('.argus-performance-readout');
  if(!readout)return;
  const caps=panel._argusPerfCaps;
  if(!caps){readout.textContent='';return}
  readout.textContent=[
    `WebGL2: ${caps.webgl2?'sí':'no'} · WebGL1: ${caps.webgl1?'sí':'no'}`,
    `Núcleos: ${caps.cores} · Memoria: ${caps.memory?caps.memory+' GB':'no disponible'}`,
    `FPS medidos: ${panel._argusPerfFps??'—'} · Perfil recomendado: ${panel._argusPerfAuto||'—'}`,
    `Perfil activo: ${panel._argusPerfProfile||'—'} (${panel.dataset.argusPerfSource||'auto'})`
  ].join('\n');
}

function ensureField(panel){
  const root=panel.shadowRoot,grid=root?.querySelector('.personalize-grid');
  if(!grid)return null;
  let field=root.getElementById('argus-performance-field');
  if(!field){
    field=document.createElement('div');
    field.id='argus-performance-field';
    field.className='personalize-field pf-performance';
    field.innerHTML='<label class="setting-label" id="argus-performance-label" for="argus-performance-select"></label>'
      +'<select id="argus-performance-select" class="glass-control">'
      +'<option value="auto"></option><option value="full"></option><option value="balanced"></option><option value="light"></option><option value="essential"></option>'
      +'</select>'
      +'<button type="button" id="argus-performance-diagnose" class="glass-control argus-performance-diagnose"></button>'
      +'<p class="argus-performance-readout"></p>'
      +'<p class="argus-performance-note"></p>';
    grid.appendChild(field);
    field.querySelector('select').addEventListener('change',event=>{
      setPreference(panel,event.target.value);
    });
    field.querySelector('#argus-performance-diagnose').addEventListener('click',()=>{
      runDiagnostics(panel,true);
    });
  }
  localizeField(panel,field);
  renderReadout(panel,field);
  return field;
}

function setPreference(panel,value){
  const store=readStore();
  const key=fingerprint();
  panel._argusPerfPreference=value==='auto'?null:clampProfile(value);
  store[key]={...(store[key]||{}),preference:panel._argusPerfPreference};
  writeStore(store);
  const profile=panel._argusPerfPreference||panel._argusPerfAuto||'balanced';
  applyProfile(panel,profile,panel._argusPerfPreference?'manual':'auto');
  const field=panel.shadowRoot?.getElementById('argus-performance-field');
  if(field)renderReadout(panel,field);
}

async function runDiagnostics(panel,forceApply){
  const caps=detectCapabilities();
  const fps=await benchmark();
  panel._argusPerfCaps=caps;
  panel._argusPerfFps=fps;
  panel._argusPerfAuto=scoreProfile(caps,fps);
  const store=readStore();
  const key=fingerprint();
  store[key]={...(store[key]||{}),auto:panel._argusPerfAuto,checkedAt:Date.now()};
  writeStore(store);
  if(forceApply||!panel._argusPerfPreference){
    applyProfile(panel,panel._argusPerfPreference||panel._argusPerfAuto,panel._argusPerfPreference?'manual':'auto');
  }
  const field=panel.shadowRoot?.getElementById('argus-performance-field');
  if(field){localizeField(panel,field);renderReadout(panel,field)}
}

function startMonitor(panel){
  stopMonitor(panel);
  let windowStart=performance.now();
  let lastFrame=windowStart;
  let lowSamples=0;
  let lastDowngrade=0;
  function tick(now){
    const delta=now-lastFrame;
    lastFrame=now;
    if(delta>0){
      const instant=1000/delta;
      if(now-windowStart>=MONITOR_WINDOW_MS){
        windowStart=now;
        if(instant<MONITOR_LOW_FPS)lowSamples++;else lowSamples=0;
        if(lowSamples>=MONITOR_MIN_SAMPLES&&!panel._argusPerfPreference&&now-lastDowngrade>MONITOR_COOLDOWN_MS){
          const index=Math.max(0,PROFILES.indexOf(panel._argusPerfProfile||'balanced')-1);
          const downgraded=PROFILES[index];
          if(downgraded&&downgraded!==panel._argusPerfProfile){
            panel._argusPerfAuto=downgraded;
            applyProfile(panel,downgraded,'auto-downgrade');
            lastDowngrade=now;
          }
          lowSamples=0;
        }
      }
    }
    panel._argusPerfMonitorFrame=requestAnimationFrame(tick);
  }
  panel._argusPerfMonitorFrame=requestAnimationFrame(tick);
}

function stopMonitor(panel){
  if(panel._argusPerfMonitorFrame){cancelAnimationFrame(panel._argusPerfMonitorFrame);panel._argusPerfMonitorFrame=null}
}

export function applyPerformanceProfile(ArgusPanel){
  if(!ArgusPanel||ArgusPanel.__argusPerformanceProfile)return;
  ArgusPanel.__argusPerformanceProfile=true;
  const proto=ArgusPanel.prototype;
  const connected=proto.connectedCallback;
  const disconnected=proto.disconnectedCallback;
  const load=proto._load;
  const translations=proto._applyTranslations;

  proto.connectedCallback=function(){
    installStyles(this);
    const store=readStore();
    const saved=store[fingerprint()]||{};
    this._argusPerfPreference=clampProfile(saved.preference);
    this._argusPerfAuto=clampProfile(saved.auto)||'balanced';
    applyProfile(this,this._argusPerfPreference||this._argusPerfAuto,this._argusPerfPreference?'manual':'auto');
    const result=connected?.call(this);
    runDiagnostics(this,false);
    startMonitor(this);
    return result;
  };

  proto.disconnectedCallback=function(){
    stopMonitor(this);
    return disconnected?.call(this);
  };

  proto._load=async function(){
    const result=await load?.call(this);
    ensureField(this);
    return result;
  };

  proto._applyTranslations=function(){
    const result=translations?.call(this);
    ensureField(this);
    return result;
  };
}
