import type { ArgusPanelConstructor, ArgusPanelHost } from '../../core/panel';

type HassState = { entity_id: string; state: string };
type HassMock = {
  config?: { latitude?: number | string };
  states?: Record<string, HassState>;
};

type WebGLState = {
  frame: number;
  gl: WebGLRenderingContext | WebGL2RenderingContext;
  buffer: WebGLBuffer | null;
  program: WebGLProgram | null;
  observer?: MutationObserver;
  visibility: () => void;
};

const WEATHER_MODE: Record<string, number> = Object.freeze({
  sunny: 0, 'clear-night': 1, rainy: 2, pouring: 2, 'lightning-rainy': 3,
  lightning: 4, snowy: 5, fog: 6, cloudy: 7, partlycloudy: 8,
  windy: 8, windy_variably_cloudy: 8, exceptional: 4
});

const SEASONS = ['winter', 'spring', 'summer', 'autumn'];

export function seasonFor(hass?: HassMock): string {
  const month = new Date().getMonth();
  const latitude = Number(hass?.config?.latitude);
  const adjusted = Number.isFinite(latitude) && latitude < 0 ? (month + 6) % 12 : month;
  return SEASONS[Math.floor(((adjusted + 1) % 12) / 3)];
}

export function weatherMode(value: string | null | undefined, isNight: boolean): number {
  const condition = String(value || '').toLowerCase();
  if (Object.hasOwn(WEATHER_MODE, condition)) return WEATHER_MODE[condition];
  return isNight ? WEATHER_MODE['clear-night'] : WEATHER_MODE.sunny;
}

export function moonPhase(hass?: HassMock): number {
  // Try HA sensor first
  const state = Object.values(hass?.states || {}).find(
    item => item.entity_id === 'sensor.moon_phase'
  )?.state;
  const names = [
    'new_moon','waxing_crescent','first_quarter','waxing_gibbous',
    'full_moon','waning_gibbous','last_quarter','waning_crescent'
  ];
  const index = names.indexOf(String(state || '').toLowerCase());
  if (index >= 0) return index / 7;
  // Astronomical fallback: synodic month from a known new moon (2000-01-06)
  const msPerDay = 86400000;
  const synodicDays = 29.53058770576;
  const knownNewMoon = new Date('2000-01-06T18:14:00Z').getTime();
  const elapsed = (Date.now() - knownNewMoon) / msPerDay;
  return (elapsed % synodicDays) / synodicDays; // 0=new, 0.5=full
}

export function eclipseMode(hass?: HassMock): number {
  const event = Object.values(hass?.states || {}).find(
    item => /eclipse/i.test(item.entity_id || '')
  )?.state?.toLowerCase();
  return event === 'solar' || event === 'solar_eclipse' ? 1
       : event === 'lunar' || event === 'lunar_eclipse' ? 2 : 0;
}

const CSS = `
.argus-cinematic-weather{position:absolute;inset:0;overflow:hidden;background:linear-gradient(to bottom,#0c3159,#69a9d5 62%,#c9d4d5)}
.argus-cinematic-weather canvas{width:100%;height:100%;display:block}
.argus-weather-vignette{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at 56% 36%,transparent 16%,rgba(0,7,16,.1) 57%,rgba(0,4,12,.62) 100%)}
@media(prefers-reduced-motion:reduce){.argus-cinematic-weather{background:#0f172a}}
`;

const VERTEX = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';

// ─────────────────────────────────────────────────────────────────────────────
// PHOTOREALISTIC ATMOSPHERIC FRAGMENT SHADER
// Uniforms:
//   r      – canvas resolution (vec2)
//   t      – time in seconds (float)
//   m      – weather mode 0-8 (float)   see WEATHER_MODE map above
//   n      – night blend 0=day 1=night (float)
//   s      – season 0-3 (float, unused here but forwarded)
//   e      – eclipse mode 0=none 1=solar 2=lunar (float)
//   phase  – moon phase 0-1 (float, 0=new 0.5=full)
// ─────────────────────────────────────────────────────────────────────────────
const FRAGMENT = `precision highp float;
uniform vec2 r;
uniform float t,m,n,s,e,phase;

// ── Noise primitives ─────────────────────────────────────────────────────────
float hash(vec2 p){
  p=fract(p*vec2(.1031,.11369));
  p+=dot(p,p.yx+19.19);
  return fract((p.x+p.y)*p.x);
}
float hash3(vec3 p){
  p=fract(p*vec3(.1031,.11369,.13787));
  p+=dot(p,p.yzx+19.19);
  return fract((p.x+p.y)*p.z);
}
float noise(vec2 p){
  vec2 i=floor(p),f=fract(p);
  f=f*f*(3.-2.*f);
  return mix(mix(hash(i),hash(i+vec2(1.,0.)),f.x),
             mix(hash(i+vec2(0.,1.)),hash(i+1.),f.x),f.y);
}
float fbm(vec2 p,int oct){
  float v=0.,a=.5;
  for(int i=0;i<8;i++){
    if(i>=oct)break;
    v+=a*noise(p);
    p=p*2.07+vec2(7.1,3.9);
    a*=.48;
  }
  return v;
}

// ── Geometry helpers ─────────────────────────────────────────────────────────
float disk(vec2 p,float z){return 1.-smoothstep(z*.85,z,length(p));}
float ring(vec2 p,float inner,float outer){return disk(p,outer)*(1.-disk(p,inner));}

// ── Rayleigh / Mie sky ───────────────────────────────────────────────────────
// Returns day-sky colour for a given up-angle (0=horizon 1=zenith)
vec3 rayleighSky(float cosY,float isNight){
  // Zenith-to-horizon Rayleigh gradient
  vec3 zenith =mix(vec3(.08,.22,.52),vec3(.02,.08,.28),isNight); // day/night zenith
  vec3 horizon=mix(vec3(.55,.72,.88),vec3(.01,.04,.14),isNight); // day/night horizon
  float blend=pow(max(cosY,0.),.45);
  return mix(horizon,zenith,blend);
}

// ── Sun ──────────────────────────────────────────────────────────────────────
vec3 sunContrib(vec2 d,float isNight,bool covered){
  if(isNight>.5||covered)return vec3(0.);
  float dist=length(d);
  // limb darkening: centre is whiter/hotter, edge yellower
  float ld=1.-smoothstep(0.,.062,dist);
  float limb=pow(max(1.-dist/.062,0.),.18); // limb exponent
  vec3 sunColour=mix(vec3(.98,.72,.22),vec3(1.,1.,.92),limb);
  // corona – chromatic: red outer, blue-white inner
  float corona=exp(-dist*22.)*(.7-isNight*.5);
  vec3 coronaCol=mix(vec3(1.,.35,.05),vec3(1.,.85,.55),smoothstep(.06,.0,dist))*corona;
  // horizon glow (scattering) – orange band low in sky
  return sunColour*ld + coronaCol;
}

// ── Golden hour tint ─────────────────────────────────────────────────────────
vec3 goldenHour(vec2 u,vec2 sunPos,float isNight){
  if(isNight>.4)return vec3(0.);
  // If sun is near horizon (y position 0.1-0.25) add warm scatter band
  float nearHorizon=smoothstep(.28,.08,sunPos.y)*smoothstep(.05,.22,sunPos.y);
  float band=smoothstep(.35,.0,abs(u.y-.14))*nearHorizon;
  return vec3(.92,.42,.08)*band*.55;
}

// ── Clouds ───────────────────────────────────────────────────────────────────
// Returns cloud coverage [0-1] and a soft underside shadow factor
vec2 cloudLayer(vec2 u,float speed,float scale,float offset){
  vec2 uv=u*vec2(scale,scale*.55)+vec2(t*speed+offset,0.);
  float base=fbm(uv,6);
  float cov=smoothstep(.44,.78,base);
  // underside shadow: lower edge is darker
  float shadow=smoothstep(.0,.22,u.y)*smoothstep(.9,.55,u.y); // darker mid-low
  return vec2(cov,shadow);
}

// ── Moon with phase and procedural craters ────────────────────────────────────
vec3 moonContrib(vec2 d,float ph,float isNight,bool covered){
  if(isNight<.5||covered)return vec3(0.);
  float moonR=.055;
  float body=disk(d,moonR);
  if(body<.001)return vec3(0.);

  // ---- Phase silhouette ----
  // ph: 0=new, 0.25=first quarter, 0.5=full, 0.75=last quarter, 1=new
  float cycle=fract(ph);
  float lit=.5-.5*cos(cycle*6.283185); // 0=new 1=full
  // Shadow sphere offset creates crescent/quarter/gibbous naturally
  float direction=cycle<.5?1.:-1.;
  float overlap=2.*moonR*(1.-2.*lit)*direction;
  float shade=disk(d+vec2(overlap,0.),moonR);
  float visible=body*(1.-shade*.9999);
  if(visible<.001)return vec3(0.);

  // ---- Moon surface colour ----
  vec2 uv=d/moonR; // -1 to 1 on disk
  // Base colour: warm grey maria, lighter highlands
  float highland=fbm(uv*3.8+vec2(1.7,2.3),4);
  vec3 lunarBase=mix(vec3(.48,.50,.52),vec3(.72,.72,.68),highland);

  // ---- Procedural craters ----
  // Large craters
  for(int i=0;i<5;i++){
    vec2 center=vec2(hash(vec2(float(i)*1.73,.41))-.5,hash(vec2(float(i)*.97,1.59))-.5)*1.6;
    float cr=.08+hash(vec2(float(i)*2.11,.77))*.14;
    float rim=ring(uv-center,cr*.72,cr);
    float floor_=disk(uv-center,cr*.72);
    lunarBase=mix(lunarBase,vec3(.22,.22,.21),floor_*.55);
    lunarBase+=rim*.12;
  }
  // Small craters
  for(int j=0;j<8;j++){
    vec2 cj=vec2(hash(vec2(float(j)*.53,.29+float(j)))-.5,hash(vec2(float(j)*1.13,.77+float(j)))-.5)*1.8;
    float rj=.02+hash(vec2(float(j)*.83,2.1))*.04;
    float rimj=ring(uv-cj,rj*.65,rj);
    float floorj=disk(uv-cj,rj*.65);
    lunarBase=mix(lunarBase,vec3(.26,.26,.25),floorj*.45);
    lunarBase+=rimj*.08;
  }

  // ---- Limb darkening ----
  float limbD=pow(max(1.-length(uv),0.),.3);
  lunarBase*=(.55+.45*limbD);

  // ---- Phase-based brightness ----
  float brightness=.15+.85*lit; // new moon barely visible, full moon bright
  vec3 moonGlow=lunarBase*brightness;

  // Halo around moon
  float halo=exp(-length(d)*38.)*lit*.18;
  vec3 haloCol=vec3(.80,.86,.96)*halo;

  return moonGlow*visible+haloCol;
}

// ── Twinkling stars ───────────────────────────────────────────────────────────
vec3 starField(vec2 uv,float isNight,float cloudCover){
  if(isNight<.1)return vec3(0.);
  vec3 stars=vec3(0.);

  // Layer 1: bright stars – large, slow twinkle
  vec2 g1=uv*vec2(180.,100.);
  vec2 id1=floor(g1),gf1=fract(g1);
  float seed1=hash(id1);
  if(seed1>.974){
    float twinkle=.7+.3*sin(t*(2.+seed1*4.)+seed1*6.28);
    float starSize=.1+seed1*.18;
    float d1=length(gf1-.5);
    float s1=(1.-smoothstep(.0,starSize,d1))*twinkle;
    // colour temperature: blue-white to yellow-white to red
    float temp=hash(id1+7.3);
    vec3 col=mix(mix(vec3(.6,.7,1.),vec3(1.,1.,.9),.5),vec3(1.,.55,.3),temp*temp);
    stars+=s1*col*(1.+(seed1-.974)*80.)*.9;
  }

  // Layer 2: medium stars
  vec2 g2=uv*vec2(400.,220.);
  vec2 id2=floor(g2),gf2=fract(g2);
  float seed2=hash(id2+3.7);
  if(seed2>.962){
    float twinkle2=.5+.5*sin(t*(3.+seed2*6.)+seed2*9.42);
    float d2=length(gf2-.5);
    float s2=(1.-smoothstep(.0,.08,d2))*twinkle2;
    stars+=s2*vec3(.78,.85,1.)*.55;
  }

  // Layer 3: faint star dust
  vec2 g3=uv*vec2(900.,500.);
  float dust=step(.993,hash(floor(g3)+1.1));
  stars+=dust*vec3(.55,.62,.72)*.28;

  // Milky Way band – diagonal fBm haze
  float mw=fbm(uv*vec2(1.8,.4)+vec2(.3,.8),4)*.35;
  mw*=smoothstep(.42,.78,mw);
  stars+=vec3(.38,.45,.68)*mw*.6;

  // Fade stars when cloudy or daytime
  return stars*isNight*(1.-cloudCover*.92);
}

// ── Rain drops ───────────────────────────────────────────────────────────────
float rainDrop(vec2 u,float layer,float windX){
  float speed=.7+hash(vec2(layer,0.))*.9+layer*.22;
  vec2 g=u*vec2(26.+layer*8.,11.+layer*3.);
  vec2 id=floor(g),q=fract(g);
  float seed=hash(id+layer*13.7);
  q.y=fract(q.y-t*speed);
  q.x+=sin(q.y*10.+seed*6.28)*.03+windX*.06; // wind drift
  vec2 p=q-vec2(.5,.28);
  p.x*=2.4;
  // streak: elongated on Y
  float streak=1.-smoothstep(.01,.04,length(p));
  streak*=1.-smoothstep(.04,.18,abs(p.y));
  return streak;
}

// ── Snowflakes ───────────────────────────────────────────────────────────────
float snowFlake(vec2 u,float layer){
  float speed=.12+hash(vec2(layer+1.,2.))*.08;
  float size=.6+hash(vec2(layer,5.3))*.6; // size variation
  vec2 g=u*vec2(55.+layer*20.,38.+layer*10.)*size;
  vec2 id=floor(g),q=fract(g);
  float seed=hash(id+layer*7.1);
  // drift: gentle side flutter
  q.y=fract(q.y-t*speed);
  q.x+=sin(q.y*6.28+seed*6.28+t*.8)*.06;
  vec2 p=q-.5;
  float flake=1.-smoothstep(.04,.12,length(p));
  return flake*(1.-smoothstep(.0,.06,abs(length(p)-.0)));
}

void main(){
  vec2 u=gl_FragCoord.xy/r;
  float aspect=r.x/r.y;

  // Weather booleans
  bool wet     = m>1.5&&m<4.5;
  bool storm   = m>2.5&&m<4.5;
  bool snowy   = m>4.5&&m<5.5;
  bool foggy   = m>5.5&&m<6.5;
  bool overcast= m>6.5;
  bool partly  = m>7.5;

  // ── Sky base (Rayleigh) ──
  vec3 c=rayleighSky(u.y,n);

  // ── Wet tint ──
  if(wet)  c=mix(c,vec3(.09,.18,.28),.52);
  if(storm)c=mix(c,vec3(.02,.04,.07),.74);

  // ── Clouds ──
  float cloudOffset=partly?.22:0.;
  float cloudSpeed =storm?.022:(overcast?.018:.013);
  vec2  cl1=cloudLayer(u+vec2(cloudOffset,0.),cloudSpeed,2.6,0.);
  vec2  cl2=cloudLayer(u+vec2(cloudOffset*.7,.05),cloudSpeed*.7,1.8,3.1);
  float cloudCov=(cl1.x*.65+cl2.x*.45);
  float cloudDensity=storm?.96:(overcast?.85:(partly?.48:.16));
  cloudCov=clamp(cloudCov*cloudDensity/(partly?.6:1.),0.,1.);
  // Cloud colour: lit top warm-white, shadowed underside dark-blue-grey
  float shadow=cl1.y*.7+cl2.y*.3;
  vec3 cloudLit =n<.5?vec3(.90,.92,.95):vec3(.18,.22,.28);
  vec3 cloudDark=n<.5?vec3(.52,.57,.64):vec3(.06,.08,.12);
  vec3 cloudCol =mix(cloudLit,cloudDark,shadow*.65);
  c=mix(c,cloudCol,cloudCov);

  // ── Sun ──
  vec2 sunPos=vec2(.78,.72); // fixed high position
  vec2 sunD=(u-sunPos)*vec2(aspect,1.);
  c+=sunContrib(sunD,n,overcast||wet);
  c+=goldenHour(u,sunPos,n);

  // ── Moon + stars ──
  vec2 moonPos=vec2(.72,.68);
  vec2 moonD=(u-moonPos)*vec2(aspect,1.);
  c+=moonContrib(moonD,phase,n,overcast);
  c+=starField(u,n,cloudCov);
  // Moonlight ambient: full moon brightens the scene slightly
  if(n>.5){
    float fullness=smoothstep(.35,.5,phase<.5?phase:1.-phase); // 0→0 near new, 1→full
    c+=vec3(.05,.07,.12)*fullness*(1.-cloudCov*.8);
  }

  // ── Rain ──
  if(wet){
    float windX=storm?.6:.2;
    float rain=rainDrop(u,0.,windX)*.9
              +rainDrop(u*1.4+vec2(.2,.1),1.,windX)*.55
              +rainDrop(u*2.1+vec2(.7,.3),2.,windX)*.28;
    float alpha=storm?1.05:.72;
    c+=vec3(.52,.76,1.)*rain*alpha;
    // Shimmer at base (puddle reflection)
    float shimmer=rain*smoothstep(.12,.0,u.y)*.35;
    c+=vec3(.55,.78,1.)*shimmer;
  }

  // ── Snow ──
  if(snowy){
    float snow=snowFlake(u,0.)*.9
              +snowFlake(u*1.5+vec2(.3,.1),1.)*.55
              +snowFlake(u*2.2+vec2(.8,.4),2.)*.28;
    c+=vec3(1.,1.,1.)*snow;
    // Snow on ground glow
    c=mix(c,vec3(.88,.92,.96),smoothstep(.08,.0,u.y)*.5);
  }

  // ── Fog ──
  if(foggy){
    float fog1=fbm(u*vec2(2.2,1.1)+vec2(t*.006,0.),4);
    float fog2=fbm(u*vec2(3.5,1.8)+vec2(t*.009,.5),3);
    float fogMix=smoothstep(.38,.72,fog1*.6+fog2*.4);
    c=mix(c,vec3(.68,.74,.76),fogMix*.52);
    // Ground layer is denser
    c=mix(c,vec3(.70,.75,.77),smoothstep(.22,.0,u.y)*.65);
  }

  // ── Lightning flash ──
  if(storm){
    float flash=pow(max(0.,sin(t*.67+hash(vec2(floor(t*.67),0.))*4.)),52.);
    c+=flash*vec3(.60,.74,1.15);
    // Secondary weaker flash with offset timing
    float flash2=pow(max(0.,sin(t*.67+hash(vec2(floor(t*.67),0.))*4.-.8)),80.);
    c+=flash2*vec3(.45,.60,.95)*.5;
  }

  // ── Eclipse ──
  if(e>0.){
    c=mix(c,e<1.5?vec3(.06,.045,.018):vec3(.28,.04,.03),.50);
  }

  // ── Horizon haze ──
  // Always add subtle atmospheric haze near horizon regardless of weather
  float horizonHaze=smoothstep(.12,.0,u.y);
  vec3 hazeCol=n<.5?vec3(.70,.80,.88):vec3(.03,.06,.12);
  c=mix(c,hazeCol,horizonHaze*.28);

  gl_FragColor=vec4(clamp(c,0.,1.),1.);
}
`;

export function shader(gl: WebGLRenderingContext | WebGL2RenderingContext, type: number, source: string): WebGLShader {
  const value = gl.createShader(type);
  if (!value) throw new Error('Could not create shader');
  gl.shaderSource(value, source);
  gl.compileShader(value);
  if (!gl.getShaderParameter(value, gl.COMPILE_STATUS))
    throw new Error(gl.getShaderInfoLog(value) || 'Shader compilation failed');
  return value;
}

type CanvasWithWebgl = HTMLCanvasElement & {
  __argusWebgl?: WebGLState;
};

export function dispose(canvas: CanvasWithWebgl): void {
  const state = canvas.__argusWebgl;
  if (!state) return;
  cancelAnimationFrame(state.frame);
  state.observer?.disconnect();
  document.removeEventListener('visibilitychange', state.visibility);
  state.gl.deleteBuffer(state.buffer);
  state.gl.deleteProgram(state.program);
  const ext = state.gl.getExtension('WEBGL_lose_context');
  if (ext) ext.loseContext();
  delete canvas.__argusWebgl;
}

type PremiumPrototype = ArgusPanelHost & {
  __argusPremiumExperience?: boolean;
  connectedCallback?: () => void;
  disconnectedCallback?: () => void;
};

export function applyPremiumExperience(C: ArgusPanelConstructor | undefined): void {
  const proto = C?.prototype as PremiumPrototype | undefined;
  if (!proto || proto.__argusPremiumExperience) return;
  proto.__argusPremiumExperience = true;

  const connected = proto.connectedCallback;
  proto.connectedCallback = function (this: ArgusPanelHost) {
    const value = connected?.call(this);
    queueMicrotask(() => {
      if (this.shadowRoot && !this.shadowRoot.getElementById('argus-premium-style')) {
        const style = document.createElement('style');
        style.id = 'argus-premium-style';
        style.textContent = CSS;
        this.shadowRoot.append(style);
      }
    });
    return value;
  };

  const disconnected = proto.disconnectedCallback;
  proto.disconnectedCallback = function (this: ArgusPanelHost) {
    const root = this.shadowRoot;
    if (root) {
      const canvases = root.querySelectorAll('.wx-webgl') as NodeListOf<CanvasWithWebgl>;
      canvases.forEach(dispose);
    }
    return disconnected?.call(this);
  };
}
