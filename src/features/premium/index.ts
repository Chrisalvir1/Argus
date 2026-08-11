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
  const state = Object.values(hass?.states || {}).find(
    item => item.entity_id === 'sensor.moon_phase'
  )?.state;
  const names = [
    'new_moon','waxing_crescent','first_quarter','waxing_gibbous',
    'full_moon','waning_gibbous','last_quarter','waning_crescent'
  ];
  const index = names.indexOf(String(state || '').toLowerCase());
  if (index >= 0) return index / 7;
  const msPerDay = 86400000;
  const synodicDays = 29.53058770576;
  const knownNewMoon = new Date('2000-01-06T18:14:00Z').getTime();
  const elapsed = (Date.now() - knownNewMoon) / msPerDay;
  return (elapsed % synodicDays) / synodicDays;
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
//   m      – weather mode 0-8 (float)
//   n      – night blend 0=day 1=night (float)
//   s      – season 0-3 (float)
//   e      – eclipse mode 0=none 1=solar 2=lunar (float)
//   phase  – moon phase 0-1 (float, 0=new 0.5=full)
// ─────────────────────────────────────────────────────────────────────────────
const FRAGMENT = `precision highp float;
uniform vec2 r;
uniform float t,m,n,s,e,phase;

// ── Noise primitives ──────────────────────────────────────────────────────────
float hash(vec2 p){
  p=fract(p*vec2(.1031,.11369));
  p+=dot(p,p.yx+19.19);
  return fract((p.x+p.y)*p.x);
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

// ── Geometry helpers ──────────────────────────────────────────────────────────
float disk(vec2 p,float z){return 1.-smoothstep(z*.85,z,length(p));}
float ring(vec2 p,float inner,float outer){return disk(p,outer)*(1.-disk(p,inner));}

// SDF segment: distance from point p to segment ab
float sdSeg(vec2 p,vec2 a,vec2 b){
  vec2 pa=p-a,ba=b-a;
  float h=clamp(dot(pa,ba)/dot(ba,ba),0.,1.);
  return length(pa-ba*h);
}

// ── Rayleigh sky ──────────────────────────────────────────────────────────────
vec3 rayleighSky(float cosY,float isNight){
  vec3 zenith =mix(vec3(.08,.22,.52),vec3(.02,.08,.28),isNight);
  vec3 horizon=mix(vec3(.55,.72,.88),vec3(.01,.04,.14),isNight);
  return mix(horizon,zenith,pow(max(cosY,0.),.45));
}

// ── Sun ───────────────────────────────────────────────────────────────────────
vec3 sunContrib(vec2 d,float isNight,bool covered){
  if(isNight>.5||covered)return vec3(0.);
  float dist=length(d);
  float limb=pow(max(1.-dist/.062,0.),.18);
  vec3 sunColour=mix(vec3(.98,.72,.22),vec3(1.,1.,.92),limb);
  float corona=exp(-dist*22.)*(.7-isNight*.5);
  vec3 coronaCol=mix(vec3(1.,.35,.05),vec3(1.,.85,.55),smoothstep(.06,.0,dist))*corona;
  float ld=1.-smoothstep(0.,.062,dist);
  return sunColour*ld+coronaCol;
}

// ── Golden hour ───────────────────────────────────────────────────────────────
vec3 goldenHour(vec2 u,vec2 sunPos,float isNight){
  if(isNight>.4)return vec3(0.);
  float nearHorizon=smoothstep(.28,.08,sunPos.y)*smoothstep(.05,.22,sunPos.y);
  float band=smoothstep(.35,.0,abs(u.y-.14))*nearHorizon;
  return vec3(.92,.42,.08)*band*.55;
}

// ── Clouds ────────────────────────────────────────────────────────────────────
vec2 cloudLayer(vec2 u,float speed,float scale,float offset){
  vec2 uv=u*vec2(scale,scale*.55)+vec2(t*speed+offset,0.);
  float base=fbm(uv,6);
  float cov=smoothstep(.44,.78,base);
  float shadow=smoothstep(.0,.22,u.y)*smoothstep(.9,.55,u.y);
  return vec2(cov,shadow);
}

// ── Moon with phase and craters ───────────────────────────────────────────────
vec3 moonContrib(vec2 d,float ph,float isNight,bool covered){
  if(isNight<.5||covered)return vec3(0.);
  float moonR=.055;
  float body=disk(d,moonR);
  if(body<.001)return vec3(0.);
  float cycle=fract(ph);
  float lit=.5-.5*cos(cycle*6.283185);
  float direction=cycle<.5?1.:-1.;
  float overlap=2.*moonR*(1.-2.*lit)*direction;
  float shade=disk(d+vec2(overlap,0.),moonR);
  float visible=body*(1.-shade*.9999);
  if(visible<.001)return vec3(0.);
  vec2 uv=d/moonR;
  float highland=fbm(uv*3.8+vec2(1.7,2.3),4);
  vec3 lunarBase=mix(vec3(.48,.50,.52),vec3(.72,.72,.68),highland);
  for(int i=0;i<5;i++){
    vec2 center=vec2(hash(vec2(float(i)*1.73,.41))-.5,hash(vec2(float(i)*.97,1.59))-.5)*1.6;
    float cr=.08+hash(vec2(float(i)*2.11,.77))*.14;
    lunarBase=mix(lunarBase,vec3(.22,.22,.21),disk(uv-center,cr*.72)*.55);
    lunarBase+=ring(uv-center,cr*.72,cr)*.12;
  }
  for(int j=0;j<8;j++){
    vec2 cj=vec2(hash(vec2(float(j)*.53,.29+float(j)))-.5,hash(vec2(float(j)*1.13,.77+float(j)))-.5)*1.8;
    float rj=.02+hash(vec2(float(j)*.83,2.1))*.04;
    lunarBase=mix(lunarBase,vec3(.26,.26,.25),disk(uv-cj,rj*.65)*.45);
    lunarBase+=ring(uv-cj,rj*.65,rj)*.08;
  }
  lunarBase*=(.55+.45*pow(max(1.-length(uv),0.),.3));
  float brightness=.15+.85*lit;
  float halo=exp(-length(d)*38.)*lit*.18;
  return lunarBase*brightness*visible+vec3(.80,.86,.96)*halo;
}

// ── Twinkling stars ───────────────────────────────────────────────────────────
vec3 starField(vec2 uv,float isNight,float cloudCover){
  if(isNight<.1)return vec3(0.);
  vec3 stars=vec3(0.);
  vec2 g1=uv*vec2(180.,100.),id1=floor(g1),gf1=fract(g1);
  float seed1=hash(id1);
  if(seed1>.974){
    float tw=.7+.3*sin(t*(2.+seed1*4.)+seed1*6.28);
    float s1=(1.-smoothstep(.0,.1+seed1*.18,length(gf1-.5)))*tw;
    float temp=hash(id1+7.3);
    stars+=s1*mix(mix(vec3(.6,.7,1.),vec3(1.,1.,.9),.5),vec3(1.,.55,.3),temp*temp)*(1.+(seed1-.974)*80.)*.9;
  }
  vec2 g2=uv*vec2(400.,220.),id2=floor(g2),gf2=fract(g2);
  float seed2=hash(id2+3.7);
  if(seed2>.962)stars+=(1.-smoothstep(.0,.08,length(gf2-.5)))*(.5+.5*sin(t*(3.+seed2*6.)+seed2*9.42))*vec3(.78,.85,1.)*.55;
  stars+=step(.993,hash(floor(uv*vec2(900.,500.))+1.1))*vec3(.55,.62,.72)*.28;
  float mw=fbm(uv*vec2(1.8,.4)+vec2(.3,.8),4)*.35;
  stars+=vec3(.38,.45,.68)*mw*smoothstep(.42,.78,mw)*.6;
  return stars*isNight*(1.-cloudCover*.92);
}

// ── Rain drops ────────────────────────────────────────────────────────────────
float rainDrop(vec2 u,float layer,float windX){
  float speed=.7+hash(vec2(layer,0.))*.9+layer*.22;
  vec2 g=u*vec2(26.+layer*8.,11.+layer*3.),id=floor(g),q=fract(g);
  float seed=hash(id+layer*13.7);
  q.y=fract(q.y-t*speed);
  q.x+=sin(q.y*10.+seed*6.28)*.03+windX*.06;
  vec2 p=q-vec2(.5,.28);
  p.x*=2.4;
  return (1.-smoothstep(.01,.04,length(p)))*(1.-smoothstep(.04,.18,abs(p.y)));
}

// ── Snowflakes ────────────────────────────────────────────────────────────────
float snowFlake(vec2 u,float layer){
  float speed=.12+hash(vec2(layer+1.,2.))*.08;
  float sz=.6+hash(vec2(layer,5.3))*.6;
  vec2 g=u*vec2(55.+layer*20.,38.+layer*10.)*sz,id=floor(g),q=fract(g);
  float seed=hash(id+layer*7.1);
  q.y=fract(q.y-t*speed);
  q.x+=sin(q.y*6.28+seed*6.28+t*.8)*.06;
  vec2 p=q-.5;
  return 1.-smoothstep(.04,.12,length(p));
}

// ── Branching lightning bolt ───────────────────────────────────────────────────
// Returns glow intensity [0-1] for a procedural branched bolt.
// Each flash event has randomised top anchor (where bolt starts in clouds)
// and strikes toward a random bottom point. 2 branches split from mid.
float lightningBolt(vec2 uv,float aspect){
  // Flash cadence: discrete events every ~3-7 s
  float period=4.5;
  float eventSeed=floor(t/period);
  float phase_=fract(t/period);
  // Bolt is visible only for a short window at start of period
  float visible=smoothstep(.0,.02,phase_)*smoothstep(.18,.06,phase_);
  if(visible<.001)return 0.;

  // Randomised anchor points (in 0-1 UV space)
  float rx=hash(vec2(eventSeed,0.));
  float ry=hash(vec2(eventSeed,1.));
  vec2 top=vec2(.15+rx*.70,.65+ry*.28); // start in cloud band
  float bx=hash(vec2(eventSeed,2.));
  vec2 bot=vec2(.10+bx*.80,.02);        // strike ground
  vec2 mid=mix(top,bot,.48)+vec2((hash(vec2(eventSeed,3.))-.5)*.18,0.);

  // Correct for aspect ratio when measuring distances
  vec2 av=vec2(aspect,1.);
  float d=min(
    min(sdSeg(uv*av,top*av,mid*av),
        sdSeg(uv*av,mid*av,bot*av)),
    // Branch 1
    sdSeg(uv*av,mid*av,(mid+vec2((hash(vec2(eventSeed,4.))-.5)*.22,-(hash(vec2(eventSeed,5.))*.18+.08)))*av)
  );
  // Branch 2 (thinner)
  float db=sdSeg(uv*av,
    mix(mid,bot,.35)*av,
    (mix(mid,bot,.35)+vec2((hash(vec2(eventSeed,6.))-.5)*.18,-(hash(vec2(eventSeed,7.))*.14+.05)))*av
  );
  d=min(d,db);

  // Core bright channel + wide glow
  float core=smoothstep(.008,.001,d);
  float glow=exp(-d*55.)*0.55;
  return (core+glow)*visible;
}

// ── Flying birds (W-wing silhouette SDF) ─────────────────────────────────────
// A single bird is approximated by two mirrored bezier-like arcs (the W shape
// seen at a distance). We use a compact SDF built from 4 line segments.
float birdWing(vec2 p,float sz){
  // normalise to bird local space
  p/=sz;
  // left wing: two segments forming a downward arc
  float d=sdSeg(p,vec2(-1.,.0),vec2(-.5,-.28));
  d=min(d,sdSeg(p,vec2(-.5,-.28),vec2(.0,.0)));
  // right wing mirrored
  d=min(d,sdSeg(p,vec2(1.,.0),vec2(.5,-.28)));
  d=min(d,sdSeg(p,vec2(.5,-.28),vec2(.0,.0)));
  return d*sz; // back to canvas space
}

// Returns dark silhouette coverage for a flock of birds.
// Each bird follows a smooth sinusoidal glide path.
float birdFlock(vec2 uv,float flockSeed,float height,float speed,float sz,float aspect){
  float cover=0.;
  // 5 birds per flock, offset in x and phase
  for(int i=0;i<5;i++){
    float fi=float(i);
    float xOff=hash(vec2(flockSeed,fi+1.))*.38;
    float phase_=hash(vec2(flockSeed+7.,fi));
    // horizontal travel: wraps 0-1
    float bx=fract(speed*t*.04+xOff+phase_);
    // vertical bob: gentle sine
    float by=height+sin(t*(.8+phase_*.4)+fi*1.1+phase_*6.28)*.018;
    // wing flap: the W opens/closes with time
    float flap=sin(t*(3.+phase_*2.)+fi*2.3+phase_*6.28);
    float flapY=flap*.012*sz; // vertical displacement of wing tips

    vec2 bPos=vec2(bx,by);
    vec2 local=(uv-bPos)*vec2(aspect,1.);

    // Flap animates wing-tip Y
    vec2 lp=local;
    // build flapping wing (shift the mid-dip point)
    float dipL=-.28+flapY/sz;
    float dipR=-.28+flapY/sz;
    float d=sdSeg(lp/sz,vec2(-1.,.0),vec2(-.5,dipL));
    d=min(d,sdSeg(lp/sz,vec2(-.5,dipL),vec2(.0,.0)));
    d=min(d,sdSeg(lp/sz,vec2(1.,.0),vec2(.5,dipR)));
    d=min(d,sdSeg(lp/sz,vec2(.5,dipR),vec2(.0,.0)));
    d*=sz;

    float wing=smoothstep(.006,.001,d);
    cover=max(cover,wing);
  }
  return cover;
}

void main(){
  vec2 u=gl_FragCoord.xy/r;
  float aspect=r.x/r.y;

  bool wet     = m>1.5&&m<4.5;
  bool storm   = m>2.5&&m<4.5;
  bool snowy   = m>4.5&&m<5.5;
  bool foggy   = m>5.5&&m<6.5;
  bool overcast= m>6.5;
  bool partly  = m>7.5;
  bool clear   = m<1.5;  // sunny or clear-night

  // ── Sky base ──
  vec3 c=rayleighSky(u.y,n);
  if(wet)  c=mix(c,vec3(.09,.18,.28),.52);
  if(storm)c=mix(c,vec3(.02,.04,.07),.74);

  // ── Clouds ──
  float cloudOffset=partly?.22:0.;
  float cloudSpeed =storm?.022:(overcast?.018:.013);
  vec2  cl1=cloudLayer(u+vec2(cloudOffset,0.),cloudSpeed,2.6,0.);
  vec2  cl2=cloudLayer(u+vec2(cloudOffset*.7,.05),cloudSpeed*.7,1.8,3.1);
  float cloudCov=clamp((cl1.x*.65+cl2.x*.45)*(storm?.96:(overcast?.85:(partly?.48:.16)))/(partly?.6:1.),0.,1.);
  float shadow=cl1.y*.7+cl2.y*.3;
  vec3 cloudLit =n<.5?vec3(.90,.92,.95):vec3(.18,.22,.28);
  vec3 cloudDark=n<.5?vec3(.52,.57,.64):vec3(.06,.08,.12);
  c=mix(c,mix(cloudLit,cloudDark,shadow*.65),cloudCov);

  // ── Sun ──
  vec2 sunPos=vec2(.78,.72);
  vec2 sunD=(u-sunPos)*vec2(aspect,1.);
  c+=sunContrib(sunD,n,overcast||wet);
  c+=goldenHour(u,sunPos,n);

  // ── Moon + stars ──
  vec2 moonD=(u-vec2(.72,.68))*vec2(aspect,1.);
  c+=moonContrib(moonD,phase,n,overcast);
  c+=starField(u,n,cloudCov);
  if(n>.5){
    float fullness=smoothstep(.35,.5,phase<.5?phase:1.-phase);
    c+=vec3(.05,.07,.12)*fullness*(1.-cloudCov*.8);
  }

  // ── Rain ──
  if(wet){
    float windX=storm?.6:.2;
    float rain=rainDrop(u,0.,windX)*.9+rainDrop(u*1.4+vec2(.2,.1),1.,windX)*.55+rainDrop(u*2.1+vec2(.7,.3),2.,windX)*.28;
    c+=vec3(.52,.76,1.)*rain*(storm?1.05:.72);
    c+=vec3(.55,.78,1.)*rain*smoothstep(.12,.0,u.y)*.35;
  }

  // ── Snow ──
  if(snowy){
    float snow=snowFlake(u,0.)*.9+snowFlake(u*1.5+vec2(.3,.1),1.)*.55+snowFlake(u*2.2+vec2(.8,.4),2.)*.28;
    c+=vec3(1.)*snow;
    c=mix(c,vec3(.88,.92,.96),smoothstep(.08,.0,u.y)*.5);
  }

  // ── Fog ──
  if(foggy){
    float fogMix=smoothstep(.38,.72,fbm(u*vec2(2.2,1.1)+vec2(t*.006,0.),4)*.6+fbm(u*vec2(3.5,1.8)+vec2(t*.009,.5),3)*.4);
    c=mix(c,vec3(.68,.74,.76),fogMix*.52);
    c=mix(c,vec3(.70,.75,.77),smoothstep(.22,.0,u.y)*.65);
  }

  // ── Lightning bolts (storm only) ─────────────────────────────────────────────
  // Visible both day AND night — flash illuminates rain clouds from within
  if(storm){
    // Ambient sky flash (screen-wide)
    float flash=pow(max(0.,sin(t*.67+hash(vec2(floor(t*.67),0.))*4.)),52.);
    c+=flash*vec3(.60,.74,1.15);
    float flash2=pow(max(0.,sin(t*.67+hash(vec2(floor(t*.67),0.))*4.-.8)),80.);
    c+=flash2*vec3(.45,.60,.95)*.5;

    // Branching bolt geometry
    float bolt=lightningBolt(u,aspect);
    // Core: near-white blue-white
    c+=bolt*vec3(.82,.90,1.0)*2.2;
    // Wide electric glow tints the surrounding sky/rain
    c+=bolt*vec3(.30,.52,.95)*.85;
  }

  // ── Flying birds (clear/partly-cloudy day only) ───────────────────────────────
  // Birds disappear in rain, storm, snow, overcast and at night
  if((clear||partly)&&n<.35&&!wet&&!snowy){
    // Flock 1: high altitude, small, fast
    float f1=birdFlock(u,0.,.72,.55,.018,aspect);
    // Flock 2: mid altitude, medium
    float f2=birdFlock(u,1.3,.60,.38,.025,aspect);
    // Flock 3: lower, larger, slow
    float f3=birdFlock(u,2.7,.50,.22,.032,aspect);
    float birds=max(max(f1,f2),f3);
    // Silhouette: darken sky behind birds
    c=mix(c,n<.2?vec3(.04,.05,.06):vec3(.06,.07,.09),birds*.88);
  }

  // ── Eclipse ──
  if(e>0.)c=mix(c,e<1.5?vec3(.06,.045,.018):vec3(.28,.04,.03),.50);

  // ── Horizon haze ──
  float horizonHaze=smoothstep(.12,.0,u.y);
  c=mix(c,n<.5?vec3(.70,.80,.88):vec3(.03,.06,.12),horizonHaze*.28);

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
