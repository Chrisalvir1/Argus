const WEATHER_MODE = Object.freeze({sunny:0,'clear-night':1,rainy:2,pouring:2,'lightning-rainy':3,lightning:4,snowy:5,fog:6,cloudy:7,partlycloudy:7});
const SEASONS = ['winter','spring','summer','autumn'];

function seasonFor(hass) {
  const month = new Date().getMonth();
  const latitude = Number(hass?.config?.latitude);
  const adjusted = Number.isFinite(latitude) && latitude < 0 ? (month + 6) % 12 : month;
  return SEASONS[Math.floor(((adjusted + 1) % 12) / 3)];
}

function weatherMode(value, isNight) {
  const condition = String(value || '').toLowerCase();
  if (Object.hasOwn(WEATHER_MODE, condition)) return WEATHER_MODE[condition];
  return isNight ? WEATHER_MODE['clear-night'] : WEATHER_MODE.sunny;
}

function moonPhase(hass) {
  const state = Object.values(hass?.states || {}).find(item => item.entity_id === 'sensor.moon_phase')?.state;
  const values = ['new_moon','waxing_crescent','first_quarter','waxing_gibbous','full_moon','waning_gibbous','last_quarter','waning_crescent'];
  const index = values.indexOf(String(state || '').toLowerCase());
  return index < 0 ? -1 : index / 7;
}

function eclipseMode(hass) {
  const event = Object.values(hass?.states || {}).find(item => /eclipse/i.test(item.entity_id || ''))?.state?.toLowerCase();
  return event === 'solar' || event === 'solar_eclipse' ? 1 : event === 'lunar' || event === 'lunar_eclipse' ? 2 : 0;
}

const CSS = `
.argus-cinematic-weather{position:absolute;inset:0;overflow:hidden;background:linear-gradient(to bottom, #0f172a, #1e293b)}
.argus-cinematic-weather canvas{width:100%;height:100%;display:block}.argus-weather-vignette{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse,transparent 40%,rgba(0,0,0,.5))}
@media(prefers-reduced-motion:reduce){.argus-cinematic-weather{background:#0f172a}}
`;

const VERTEX = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
const FRAGMENT = `precision highp float;uniform vec2 r;uniform float t,m,n,s,e,phase;
float h(vec2 p){p=fract(p*vec2(0.1318,0.1736));p+=dot(p,p.yx+19.19);return fract((p.x+p.y)*p.x);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);float a=h(i),b=h(i+vec2(1.,0.)),c=h(i+vec2(0.,1.)),d=h(i+vec2(1.,1.));return mix(mix(a,b,f.x),mix(c,d,f.x),f.y);}
float disk(vec2 u,vec2 c,float z,float a){return smoothstep(z,z-.008,length((u-c)*vec2(a,1.)));}
void main(){vec2 u=gl_FragCoord.xy/r;float a=r.x/r.y;vec3 c=mix(vec3(.08,.22,.42),vec3(.01,.03,.08),n);if(m>1.)c*=.62;if(m>6.)c=mix(c,vec3(.42,.48,.54),.6);if(s<.5)c+=vec3(.02,.02,.06);if(s>2.5)c+=vec3(.05,.02,0.);float cloud=smoothstep(.35,.75,noise(u*vec2(5.,2.5)+vec2(t*.04,0.)));if(m>1.||m>6.)c=mix(c,vec3(.55,.58,.62),cloud*.35);vec2 q=vec2(.78,.76);if(n<.5){c+=disk(u,q,.055,a)*vec3(1.,.78,.3);}else{float moon=disk(u,q,.043,a);if(phase>=0.)moon*=smoothstep(-.05,.06,(u.x-q.x)*a+(phase-.5)*.075);c+=moon*vec3(.92,.92,.85);c+=step(.998,h(floor(u*r/3.)))*vec3(.7);}if(m>1.&&m<4.){float rain=step(.88,h(floor(vec2(u.x*100.,u.y*38.+t*20.))));c+=rain*vec3(.45,.67,.8);}if(m>4.&&m<5.){float snow=step(.97,h(floor(u*vec2(75.,55.)+t)));c+=snow*vec3(1.);}if(m>5.&&m<7.)c=mix(c,vec3(.72),.32);if(m>2.&&m<5.)c+=pow(max(0.,sin(t*.7)),60.)*vec3(.8);if(e>0.)c=mix(c,e<1.5?vec3(.13,.08,.04):vec3(.4,.05,.05),.55);gl_FragColor=vec4(c,1.);}`;

function shader(gl, type, source) { const value = gl.createShader(type); gl.shaderSource(value, source); gl.compileShader(value); if (!gl.getShaderParameter(value, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(value)); return value; }

function dispose(canvas) {
  const state = canvas?.__argusWebgl;
  if (!state) return;
  cancelAnimationFrame(state.frame);
  state.observer?.disconnect();
  document.removeEventListener('visibilitychange', state.visibility);
  state.gl.deleteBuffer(state.buffer); state.gl.deleteProgram(state.program);
  state.gl.getExtension('WEBGL_lose_context')?.loseContext();
  delete canvas.__argusWebgl;
}

export function applyPremiumExperience(ArgusPanel) {
  const proto = ArgusPanel?.prototype;
  if (!proto || proto.__argusPremiumExperience) return;
  proto.__argusPremiumExperience = true;
  proto._renderAtmosphere = function(condition, isNight) {
    const season = seasonFor(this._hass), phase = moonPhase(this._hass), eclipse = eclipseMode(this._hass);
    return `<div class="wx argus-cinematic-weather"><canvas class="wx-webgl" aria-hidden="true" data-mode="${weatherMode(condition,isNight)}" data-night="${isNight?1:0}" data-season="${SEASONS.indexOf(season)}" data-phase="${phase}" data-eclipse="${eclipse}"></canvas><div class="argus-weather-vignette"></div></div>`;
  };
  proto._initWeatherWebGL = function(canvas) {
    if (!canvas || canvas.__argusWebgl) return;
    const gl = canvas.getContext('webgl', {alpha:false, antialias:false, powerPreference:'low-power'});
    if (!gl) return;
    try {
      const program = gl.createProgram(), vs = shader(gl,gl.VERTEX_SHADER,VERTEX), fs = shader(gl,gl.FRAGMENT_SHADER,FRAGMENT);
      gl.attachShader(program,vs);gl.attachShader(program,fs);gl.linkProgram(program);gl.deleteShader(vs);gl.deleteShader(fs);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw new Error(gl.getProgramInfoLog(program));
      const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);gl.useProgram(program);const p=gl.getAttribLocation(program,'p');gl.enableVertexAttribArray(p);gl.vertexAttribPointer(p,2,gl.FLOAT,false,0,0);
      const uniforms=Object.fromEntries(['r','t','m','n','s','e','phase'].map(key=>[key,gl.getUniformLocation(program,key)]));
      const state={gl,program,buffer,frame:0,visible:true,onscreen:true,visibility:null,observer:null};
      state.visibility=()=>{state.visible=!document.hidden;}; state.observer=new IntersectionObserver(entries=>{state.onscreen=entries[0]?.isIntersecting??false;},{threshold:0});state.observer.observe(canvas);document.addEventListener('visibilitychange',state.visibility);canvas.__argusWebgl=state;
      const start=performance.now(),reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
      const draw=now=>{if(!canvas.isConnected){dispose(canvas);return;}if(state.visible&&state.onscreen){const dpr=Math.min(devicePixelRatio||1,1.5),w=Math.max(1,Math.floor(canvas.clientWidth*dpr)),h=Math.max(1,Math.floor(canvas.clientHeight*dpr));if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;gl.viewport(0,0,w,h);}gl.uniform2f(uniforms.r,w,h);gl.uniform1f(uniforms.t,(now-start)/1000);for(const key of ['m','n','s','e','phase'])gl.uniform1f(uniforms[key],Number(canvas.dataset[{m:'mode',n:'night',s:'season',e:'eclipse',phase:'phase'}[key]]||0));gl.drawArrays(gl.TRIANGLES,0,6);}if(!reduced)state.frame=requestAnimationFrame(draw);};state.frame=requestAnimationFrame(draw);
    } catch (error) { console.warn('Argus weather uses its CSS fallback.', error); dispose(canvas); }
  };
  const connected=proto.connectedCallback;proto.connectedCallback=function(){const value=connected?.call(this);queueMicrotask(()=>{if(this.shadowRoot&&!this.shadowRoot.getElementById('argus-premium-style')){const style=document.createElement('style');style.id='argus-premium-style';style.textContent=CSS;this.shadowRoot.append(style);}});return value;};
  const disconnected=proto.disconnectedCallback;proto.disconnectedCallback=function(){this.shadowRoot?.querySelectorAll('.wx-webgl').forEach(dispose);return disconnected?.call(this);};
}
