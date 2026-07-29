const REMOVED_TERMS = /\b(TTS|Matter|Argus\s+AI|Argus\s+Copilot|Copilot|google[_ ]generative[_ ]ai|analyze[_ ]camera)\b/i;

function seasonFor(hass) {
  const month = new Date().getMonth();
  const latitude = Number(hass?.config?.latitude);
  const adjusted = Number.isFinite(latitude) && latitude < 0 ? (month + 6) % 12 : month;
  if ([11, 0, 1].includes(adjusted)) return 'winter';
  if ([2, 3, 4].includes(adjusted)) return 'spring';
  if ([5, 6, 7].includes(adjusted)) return 'summer';
  return 'autumn';
}

function weatherMode(value, isNight) {
  const text = String(value || '').toLowerCase();
  const has = (...terms) => terms.some(term => text.includes(term));
  if (has('lightning-rainy', 'thunderstorm', 'storm')) return 3;
  if (has('lightning') && !has('rain', 'pouring')) return 4;
  if (has('snow', 'snowy')) return 5;
  if (has('fog', 'mist', 'hazy')) return 6;
  if (has('rain', 'pouring', 'drizzle', 'shower')) return 2;
  if (has('cloud', 'overcast', 'partly')) return 7;
  return isNight ? 1 : 0;
}

function eclipseMode(panel) {
  const event = panel._eclipseEvent?.();
  return event === 'solar' ? 1 : event === 'lunar' ? 2 : 0;
}

function scrubRemovedFeatures(root) {
  if (!root) return;
  root.querySelectorAll('option').forEach(option => {
    if (REMOVED_TERMS.test(option.textContent || option.value || '')) option.remove();
  });
  root.querySelectorAll('[data-action-type],[data-type],[data-feature]').forEach(node => {
    const value = `${node.dataset.actionType || ''} ${node.dataset.type || ''} ${node.dataset.feature || ''}`;
    if (REMOVED_TERMS.test(value)) node.remove();
  });
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  for (const node of nodes) {
    let value = node.nodeValue || '';
    value = value.replace(/HomeKit\s*&\s*Matter/gi, 'HomeKit');
    value = value.replace(/Apple Home\/Matter/gi, 'Apple Home');
    value = value.replace(/\bMatter\b/gi, '');
    value = value.replace(/\bArgus\s+(AI|Copilot)\b/gi, 'Argus');
    value = value.replace(/\bTTS\b/gi, '');
    node.nodeValue = value.replace(/\s{2,}/g, ' ').trimStart();
  }
}

const PREMIUM_CSS = `
:host{--argus-ease:cubic-bezier(.16,1,.3,1);--argus-fast:220ms;--argus-medium:480ms}
.glass,.entry,.mode-section-card,.user-card,.file-card,.log-item,.automation-card{transform-origin:50% 16%;animation:argusPremiumIn .62s var(--argus-ease) both;will-change:transform,opacity,filter}
.glass:nth-child(2n),.file-card:nth-child(2n),.sensor-pill:nth-child(2n){animation-delay:45ms}
.glass:nth-child(3n),.file-card:nth-child(3n),.sensor-pill:nth-child(3n){animation-delay:90ms}
@keyframes argusPremiumIn{0%{opacity:0;transform:translateY(18px) scale(.975);filter:blur(8px)}100%{opacity:1;transform:none;filter:none}}
.modal,.modal-overlay,[role=dialog]{animation:argusModalOpen .46s var(--argus-ease) both;backdrop-filter:blur(26px) saturate(1.25)}
@keyframes argusModalOpen{0%{opacity:0;transform:translateY(24px) scale(.94);filter:blur(10px)}100%{opacity:1;transform:none;filter:none}}
details::details-content{transition:height .42s var(--argus-ease),opacity .28s ease,content-visibility .42s allow-discrete;overflow:hidden}details[open]::details-content{opacity:1}@starting-style{details[open]::details-content{height:0;opacity:0}}
button,.liquid-btn,.ghost,.primary{transition:transform var(--argus-fast) var(--argus-ease),box-shadow var(--argus-fast),background var(--argus-fast),border-color var(--argus-fast),filter var(--argus-fast)}
button:hover,.liquid-btn:hover{transform:translateY(-2px) scale(1.015);filter:brightness(1.08)}button:active,.liquid-btn:active{transform:translateY(1px) scale(.985)}
.sensor-pill,.sensor-chip{animation:argusSensorIn .5s var(--argus-ease) both;transition:transform .26s var(--argus-ease),box-shadow .26s,border-color .26s,background .26s}
.sensor-pill:hover,.sensor-chip:hover{transform:translateY(-3px) scale(1.025);box-shadow:0 12px 28px rgba(0,0,0,.24)}
@keyframes argusSensorIn{0%{opacity:0;transform:translateX(-14px) scale(.94)}100%{opacity:1;transform:none}}
.argus-saving{position:relative;pointer-events:none;filter:saturate(.75)}.argus-saving::after{content:'';position:absolute;inset:-3px;border-radius:inherit;border:2px solid transparent;border-top-color:#66d9ff;animation:argusSaving .72s linear infinite}.argus-saved{animation:argusSaved .7s var(--argus-ease)}
@keyframes argusSaving{to{transform:rotate(360deg)}}@keyframes argusSaved{0%{box-shadow:0 0 0 0 rgba(72,255,174,.65)}100%{box-shadow:0 0 0 18px rgba(72,255,174,0)}}
.argus-cinematic-weather{position:absolute;inset:0;overflow:hidden;background:#050914}.argus-cinematic-weather canvas{width:100%;height:100%;display:block;filter:saturate(1.08) contrast(1.035)}
.argus-weather-vignette{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at 50% 42%,transparent 35%,rgba(2,5,12,.18) 72%,rgba(0,0,0,.48) 100%),linear-gradient(180deg,rgba(255,255,255,.035),transparent 32%,rgba(0,0,0,.14));mix-blend-mode:multiply}
.argus-season-label{position:absolute;left:18px;bottom:18px;padding:6px 10px;border-radius:999px;background:rgba(5,12,24,.34);border:1px solid rgba(255,255,255,.14);backdrop-filter:blur(16px);font-size:9px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.82)}
@media(prefers-reduced-motion:reduce){.glass,.entry,.mode-section-card,.user-card,.file-card,.log-item,.sensor-pill,.sensor-chip,.modal,[role=dialog]{animation:none!important;transition:none!important}}
`;

const VERTEX = `attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`;
const FRAGMENT = `
precision highp float;uniform vec2 r;uniform float t;uniform float mode;uniform float night;uniform float season;uniform float eclipse;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1)),f.x),f.y);}float fb(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*n(p);p=p*2.03+13.7;a*=.5;}return v;}
float circle(vec2 uv,vec2 c,float s){return smoothstep(s,s-.008,length(uv-c));}
void main(){vec2 uv=gl_FragCoord.xy/r.xy;vec2 q=uv;float tm=t*.08;vec3 top=mix(vec3(.12,.42,.72),vec3(.01,.025,.07),night);vec3 bot=mix(vec3(.64,.79,.88),vec3(.035,.08,.16),night);if(mode>1.5){top*=.46;bot*=.62;}if(season<.5)bot+=vec3(.055,.035,.0);else if(season<1.5)bot+=vec3(.0,.045,.02);else if(season>2.5)bot+=vec3(.055,.018,.0);vec3 col=mix(bot,top,smoothstep(0.,1.,uv.y));
float clouds=fb(vec2(uv.x*3.2+tm,uv.y*2.1));clouds=smoothstep(.48,.77,clouds+sin(uv.x*5.-tm)*.05);if(mode>6.5||mode>1.5)col=mix(col,vec3(.52,.58,.62)*mix(.7,1.,uv.y),clouds*.68);
if(night>.5){vec2 cell=floor(uv*r/vec2(3.2));float star=step(.996,h(cell));col+=star*(.55+.45*sin(t*2.+h(cell)*20.));}
vec2 celestial=vec2(.78,.76);float sun=circle(uv,celestial,.055);if(night<.5){col+=sun*vec3(1.2,.82,.28);col+=vec3(1.,.62,.15)*.18/(1.+850.*pow(length(uv-celestial),2.));}else{float moon=circle(uv,celestial,.043);float crater=n(uv*95.);col+=moon*mix(vec3(.55,.58,.62),vec3(1.,.98,.85),crater);}
if(eclipse>.5&&eclipse<1.5){float corona=.03/(.01+abs(length(uv-celestial)-.055));col+=vec3(1.,.65,.22)*corona*.12;col*=1.-circle(uv,celestial,.052)*.82;}if(eclipse>1.5){col=mix(col,vec3(.55,.11,.09),circle(uv,celestial,.045)*.72);}
if(mode>1.5&&mode<4.5){vec2 p=uv*vec2(115.,38.);p.y+=t*18.;float lane=h(vec2(floor(p.x),0.));float drop=smoothstep(.94,1.,fract(p.y+lane*17.))*step(.55,lane);col+=drop*vec3(.48,.72,.92)*(mode>2.5?1.25:.78);}
if(mode>4.5&&mode<5.5){vec2 p=uv*vec2(48.,38.);p.y+=t*1.4;float flake=smoothstep(.94,1.,h(floor(p)+floor(t*.7)));col+=flake*vec3(.92,.96,1.);}
if(mode>5.5&&mode<6.5){float fog=fb(vec2(uv.x*2.2+tm*.7,uv.y*7.));col=mix(col,vec3(.72,.78,.8),smoothstep(.36,.72,fog)*.58);}
if(mode>2.5&&mode<4.5){float pulse=pow(max(0.,sin(t*.73+2.4)),95.);col+=pulse*vec3(.72,.82,1.)*.72;float path=.62+sin(uv.y*19.+floor(t*.3))*0.035;float bolt=smoothstep(.012,0.,abs(uv.x-path)) * smoothstep(.82,.28,uv.y)*pulse;col+=bolt*vec3(1.,.97,.82)*4.;}
float grain=(h(gl_FragCoord.xy+floor(t*12.))-.5)*.018;col+=grain;gl_FragColor=vec4(pow(max(col,0.),vec3(.94)),1.);}`;

function compile(gl, type, source) { const shader=gl.createShader(type); gl.shaderSource(shader,source); gl.compileShader(shader); if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader)); return shader; }

export function applyPremiumExperience(ArgusPanel) {
  const proto=ArgusPanel?.prototype;if(!proto||proto.__argusPremiumExperience)return;proto.__argusPremiumExperience=true;
  proto._season=function(){return seasonFor(this._hass);};
  proto._renderAtmosphere=function(ws,isNight){const mode=weatherMode(ws,isNight),season=seasonFor(this._hass),eclipse=eclipseMode(this);return `<div class="wx argus-cinematic-weather" data-season="${season}"><canvas class="wx-webgl" aria-hidden="true" data-premium="1" data-mode="${mode}" data-night="${isNight?1:0}" data-season="${['winter','spring','summer','autumn'].indexOf(season)}" data-eclipse="${eclipse}"></canvas><div class="argus-weather-vignette"></div><div class="argus-season-label">${season}</div></div>`;};
  proto._initWeatherWebGL=function(canvas){if(!canvas||canvas.dataset.running==='1')return;const gl=canvas.getContext('webgl',{alpha:false,antialias:true,powerPreference:'high-performance'});if(!gl)return;try{const program=gl.createProgram();gl.attachShader(program,compile(gl,gl.VERTEX_SHADER,VERTEX));gl.attachShader(program,compile(gl,gl.FRAGMENT_SHADER,FRAGMENT));gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw new Error(gl.getProgramInfoLog(program));gl.useProgram(program);const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);const loc=gl.getAttribLocation(program,'p');gl.enableVertexAttribArray(loc);gl.vertexAttribPointer(loc,2,gl.FLOAT,false,0,0);const uniforms={r:gl.getUniformLocation(program,'r'),t:gl.getUniformLocation(program,'t'),mode:gl.getUniformLocation(program,'mode'),night:gl.getUniformLocation(program,'night'),season:gl.getUniformLocation(program,'season'),eclipse:gl.getUniformLocation(program,'eclipse')};canvas.dataset.running='1';const start=performance.now(),reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;const draw=now=>{if(!canvas.isConnected)return;const dpr=Math.min(devicePixelRatio||1,2),w=Math.max(1,canvas.clientWidth*dpr|0),h=Math.max(1,canvas.clientHeight*dpr|0);if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;gl.viewport(0,0,w,h);}gl.uniform2f(uniforms.r,w,h);gl.uniform1f(uniforms.t,(now-start)/1000);for(const key of ['mode','night','season','eclipse'])gl.uniform1f(uniforms[key],Number(canvas.dataset[key]||0));gl.drawArrays(gl.TRIANGLES,0,6);if(!reduced)requestAnimationFrame(draw);};requestAnimationFrame(draw);}catch(error){console.error('Argus cinematic WebGL failed',error);}};
  const originalConnected=proto.connectedCallback;proto.connectedCallback=function(){const result=originalConnected?.call(this);queueMicrotask(()=>{if(this.shadowRoot&&!this.shadowRoot.getElementById('argus-premium-style')){const style=document.createElement('style');style.id='argus-premium-style';style.textContent=PREMIUM_CSS;this.shadowRoot.append(style);}scrubRemovedFeatures(this.shadowRoot);if(!this.__argusScrubber&&this.shadowRoot){this.__argusScrubber=new MutationObserver(()=>scrubRemovedFeatures(this.shadowRoot));this.__argusScrubber.observe(this.shadowRoot,{childList:true,subtree:true});}});return result;};
  const originalDisconnected=proto.disconnectedCallback;proto.disconnectedCallback=function(){this.__argusScrubber?.disconnect();this.__argusScrubber=null;return originalDisconnected?.call(this);};
  const originalLoad=proto._load;proto._load=async function(...args){const value=await originalLoad?.apply(this,args);this._ttsTargets=[];scrubRemovedFeatures(this.shadowRoot);return value;};
  const originalRenderAutomations=proto._renderAutomations;proto._renderAutomations=function(...args){const value=originalRenderAutomations?.apply(this,args);scrubRemovedFeatures(this.shadowRoot);return value;};
  for(const name of ['_saveMode','_savePin','_saveUser','_saveNotifications','_savePersonalization','_saveStateSchedule','_saveIntelligentConfirmation']){const original=proto[name];if(typeof original!=='function')continue;proto[name]=async function(...args){const button=this.shadowRoot?.activeElement||this.shadowRoot?.querySelector('button.primary');button?.classList.add('argus-saving');try{const result=await original.apply(this,args);button?.classList.add('argus-saved');setTimeout(()=>button?.classList.remove('argus-saved'),800);return result;}finally{button?.classList.remove('argus-saving');}};}
}
