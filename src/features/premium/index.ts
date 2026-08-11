import type { ArgusPanelConstructor, ArgusPanelHost } from '../../core/panel';

type HassState = { entity_id: string; state: string };
type HassMock = {
  config?: { latitude?: number | string };
  states?: Record<string, HassState>;
};

// ─── Lerped uniform state ───────────────────────────────────────────────────
type WebGLState = {
  frame: number;
  gl: WebGLRenderingContext | WebGL2RenderingContext;
  buffer: WebGLBuffer | null;
  program: WebGLProgram | null;
  observer?: MutationObserver;
  visibility: () => void;
  // smooth transition state
  tStart: number;          // epoch when animation started
  mCur: number;            // current lerped weather mode
  mTgt: number;            // target weather mode
  nCur: number;            // current lerped night blend
  nTgt: number;            // target night blend
  blend: number;           // weather cross-fade 0→1
  hdrActive: boolean;
  overlay?: HTMLCanvasElement;
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

// ─── Special calendar events ────────────────────────────────────────────────
function calendarFlags(): { xmas: number; nye: number; nyePhase: number; newYearStr: string } {
  const now = new Date();
  const mo = now.getMonth() + 1;   // 1-12
  const da = now.getDate();
  const hr = now.getHours();
  const mi = now.getMinutes();
  // Christmas: Dec 1-25 → xmas ramps 0→1 over Dec 1-5, then stays 1 until Dec 25
  const xmas = (mo === 12 && da >= 1 && da <= 25)
    ? Math.min(1, (da - 1) / 4)
    : 0;
  // NYE window: Dec 31 23:58 → Jan 1 00:05
  let nyePhase = 0;
  let nye = 0;
  const minOfDay = hr * 60 + mi;
  if ((mo === 12 && da === 31 && minOfDay >= 23 * 60 + 58) ||
      (mo === 1  && da === 1  && minOfDay <= 5)) {
    nye = 1;
    // 0 = just before midnight, 1 = after midnight (fireworks peak)
    nyePhase = (mo === 1) ? Math.min(1, (minOfDay + 2) / 7) : 0;
  }
  const newYearStr = `${now.getFullYear()}`;
  return { xmas, nye, nyePhase, newYearStr };
}

// ─── HDR canvas detection ───────────────────────────────────────────────────
function tryHDR(canvas: HTMLCanvasElement): WebGLRenderingContext | WebGL2RenderingContext | null {
  // Try WebGL2 with display-p3 first (HDR-capable browsers on P3 displays)
  const ctxOpts2: WebGLContextAttributes = { antialias: false, alpha: false, premultipliedAlpha: false };
  try {
    // @ts-ignore – colorSpace is a non-standard but supported attribute
    const gl2 = canvas.getContext('webgl2', { ...ctxOpts2, colorSpace: 'display-p3' }) as WebGL2RenderingContext | null;
    if (gl2) return gl2;
  } catch { /* ignore */ }
  const gl2 = canvas.getContext('webgl2', ctxOpts2) as WebGL2RenderingContext | null;
  if (gl2) return gl2;
  try {
    const gl1 = canvas.getContext('webgl', ctxOpts2) as WebGLRenderingContext | null;
    if (gl1) return gl1;
  } catch { /* ignore */ }
  return null;
}

const CSS = `
.argus-cinematic-weather{position:absolute;inset:0;overflow:hidden;background:linear-gradient(to bottom,#0c3159,#69a9d5 62%,#c9d4d5)}
.argus-cinematic-weather canvas{width:100%;height:100%;display:block;image-rendering:auto}
.argus-weather-vignette{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at 56% 36%,transparent 16%,rgba(0,7,16,.1) 57%,rgba(0,4,12,.62) 100%)}
.argus-overlay{position:absolute;inset:0;pointer-events:none}
@media(prefers-reduced-motion:reduce){.argus-cinematic-weather{background:#0f172a}}
`;

const VERTEX = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';

// ─────────────────────────────────────────────────────────────────────────────
// PHOTOREALISTIC ATMOSPHERIC FRAGMENT SHADER  v4
// New uniforms vs v3:
//   mp    – previous weather mode (for cross-fade)
//   bl    – blend factor 0→1 (weather transition)
//   xmas  – christmas intensity 0-1
//   nye   – new-year event 0/1
//   nyep  – nye phase 0→1
// ─────────────────────────────────────────────────────────────────────────────
const FRAGMENT = `precision highp float;
uniform vec2 r;
uniform float t,m,mp,bl,n,s,e,phase,xmas,nye,nyep;

// ── Noise ────────────────────────────────────────────────────────────────────
float hash(vec2 p){p=fract(p*vec2(.1031,.11369));p+=dot(p,p.yx+19.19);return fract((p.x+p.y)*p.x);}
float noise(vec2 p){
  vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
  return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.),f.x),f.y);
}
float fbm(vec2 p,int oct){float v=0.,a=.5;for(int i=0;i<8;i++){if(i>=oct)break;v+=a*noise(p);p=p*2.07+vec2(7.1,3.9);a*=.48;}return v;}

// ── Geometry ─────────────────────────────────────────────────────────────────
float disk(vec2 p,float z){return 1.-smoothstep(z*.85,z,length(p));}
float ring(vec2 p,float i,float o){return disk(p,o)*(1.-disk(p,i));}
float sdSeg(vec2 p,vec2 a,vec2 b){vec2 pa=p-a,ba=b-a;return length(pa-ba*clamp(dot(pa,ba)/dot(ba,ba),0.,1.));}

// ── ACES filmic tone-map ──────────────────────────────────────────────────────
vec3 aces(vec3 x){
  return clamp((x*(2.51*x+.03))/(x*(2.43*x+.59)+.14),0.,1.);
}

// ── Sky ──────────────────────────────────────────────────────────────────────
vec3 rayleighSky(float y,float night){
  return mix(mix(vec3(.55,.72,.88),vec3(.01,.04,.14),night),
             mix(vec3(.08,.22,.52),vec3(.02,.08,.28),night),
             pow(max(y,0.),.45));
}

// ── Sun ──────────────────────────────────────────────────────────────────────
vec3 sunContrib(vec2 d,float night,bool cov){
  if(night>.5||cov)return vec3(0.);
  float dist=length(d);
  float limb=pow(max(1.-dist/.062,0.),.18);
  float ld=1.-smoothstep(0.,.062,dist);
  float cor=exp(-dist*22.)*(.7-night*.5);
  return mix(vec3(.98,.72,.22),vec3(1.,1.,.92),limb)*ld
        +mix(vec3(1.,.35,.05),vec3(1.,.85,.55),smoothstep(.06,.0,dist))*cor;
}
vec3 goldenHour(vec2 u,vec2 sp,float night){
  if(night>.4)return vec3(0.);
  float nh=smoothstep(.28,.08,sp.y)*smoothstep(.05,.22,sp.y);
  return vec3(.92,.42,.08)*smoothstep(.35,.0,abs(u.y-.14))*nh*.55;
}

// ── Clouds ────────────────────────────────────────────────────────────────────
vec2 cloudLayer(vec2 u,float spd,float sc,float off){
  vec2 uv=u*vec2(sc,sc*.55)+vec2(t*spd+off,0.);
  float b=fbm(uv,6);
  return vec2(smoothstep(.44,.78,b),smoothstep(.0,.22,u.y)*smoothstep(.9,.55,u.y));
}
float cloudCoverage(vec2 u,float mode){
  bool iStorm =mode>2.5&&mode<4.5;
  bool iOver  =mode>6.5;
  bool iPartly=mode>7.5;
  float spd=iStorm?.022:(iOver?.018:.013);
  float off=iPartly?.22:0.;
  vec2 cl1=cloudLayer(u+vec2(off,0.),spd,2.6,0.);
  vec2 cl2=cloudLayer(u+vec2(off*.7,.05),spd*.7,1.8,3.1);
  float dens=iStorm?.96:(iOver?.85:(iPartly?.48:.16));
  return clamp((cl1.x*.65+cl2.x*.45)*dens/(iPartly?.6:1.),0.,1.);
}

// ── Moon ─────────────────────────────────────────────────────────────────────
vec3 moonContrib(vec2 d,float ph,float night,bool cov){
  if(night<.5||cov)return vec3(0.);
  float mR=.055,body=disk(d,mR);
  if(body<.001)return vec3(0.);
  float cy=fract(ph),lit=.5-.5*cos(cy*6.283185);
  float shd=disk(d+vec2(2.*mR*(1.-2.*lit)*(cy<.5?1.:-1.),0.),mR);
  float vis=body*(1.-shd*.9999);
  if(vis<.001)return vec3(0.);
  vec2 uv=d/mR;
  vec3 lb=mix(vec3(.48,.50,.52),vec3(.72,.72,.68),fbm(uv*3.8+vec2(1.7,2.3),4));
  for(int i=0;i<5;i++){vec2 c2=vec2(hash(vec2(float(i)*1.73,.41))-.5,hash(vec2(float(i)*.97,1.59))-.5)*1.6;float cr=.08+hash(vec2(float(i)*2.11,.77))*.14;lb=mix(lb,vec3(.22,.22,.21),disk(uv-c2,cr*.72)*.55);lb+=ring(uv-c2,cr*.72,cr)*.12;}
  for(int j=0;j<8;j++){vec2 cj=vec2(hash(vec2(float(j)*.53,.29+float(j)))-.5,hash(vec2(float(j)*1.13,.77+float(j)))-.5)*1.8;float rj=.02+hash(vec2(float(j)*.83,2.1))*.04;lb=mix(lb,vec3(.26,.26,.25),disk(uv-cj,rj*.65)*.45);lb+=ring(uv-cj,rj*.65,rj)*.08;}
  lb*=(.55+.45*pow(max(1.-length(uv),0.),.3));
  return lb*(.15+.85*lit)*vis+vec3(.80,.86,.96)*exp(-length(d)*38.)*lit*.18;
}

// ── Stars ─────────────────────────────────────────────────────────────────────
vec3 starField(vec2 uv,float night,float cc){
  if(night<.1)return vec3(0.);
  vec3 st=vec3(0.);
  vec2 g1=uv*vec2(180.,100.),id1=floor(g1),gf1=fract(g1);
  float s1h=hash(id1);
  if(s1h>.974){float tw=.7+.3*sin(t*(2.+s1h*4.)+s1h*6.28);float tmp=hash(id1+7.3);st+=(1.-smoothstep(.0,.1+s1h*.18,length(gf1-.5)))*tw*mix(mix(vec3(.6,.7,1.),vec3(1.,1.,.9),.5),vec3(1.,.55,.3),tmp*tmp)*(1.+(s1h-.974)*80.)*.9;}
  vec2 g2=uv*vec2(400.,220.),id2=floor(g2),gf2=fract(g2);float s2h=hash(id2+3.7);
  if(s2h>.962)st+=(1.-smoothstep(.0,.08,length(gf2-.5)))*(.5+.5*sin(t*(3.+s2h*6.)+s2h*9.42))*vec3(.78,.85,1.)*.55;
  st+=step(.993,hash(floor(uv*vec2(900.,500.))+1.1))*vec3(.55,.62,.72)*.28;
  float mw=fbm(uv*vec2(1.8,.4)+vec2(.3,.8),4)*.35;
  st+=vec3(.38,.45,.68)*mw*smoothstep(.42,.78,mw)*.6;
  return st*night*(1.-cc*.92);
}

// ── Rain ─────────────────────────────────────────────────────────────────────
float rainDrop(vec2 u,float layer,float wx){
  float spd=.7+hash(vec2(layer,0.))*.9+layer*.22;
  vec2 g=u*vec2(26.+layer*8.,11.+layer*3.),id=floor(g),q=fract(g);
  q.y=fract(q.y-t*spd);q.x+=sin(q.y*10.+hash(id+layer*13.7)*6.28)*.03+wx*.06;
  vec2 p=(q-vec2(.5,.28))*vec2(2.4,1.);
  return (1.-smoothstep(.01,.04,length(p)))*(1.-smoothstep(.04,.18,abs(p.y)));
}

// ── Snow ─────────────────────────────────────────────────────────────────────
float snowFlake(vec2 u,float layer){
  float spd=.12+hash(vec2(layer+1.,2.))*.08;
  float sz=.6+hash(vec2(layer,5.3))*.6;
  vec2 g=u*vec2(55.+layer*20.,38.+layer*10.)*sz,id=floor(g),q=fract(g);
  float seed=hash(id+layer*7.1);
  q.y=fract(q.y-t*spd);q.x+=sin(q.y*6.28+seed*6.28+t*.8)*.06;
  return 1.-smoothstep(.04,.12,length(q-.5));
}

// ── Lightning bolt ────────────────────────────────────────────────────────────
float lightningBolt(vec2 uv,float asp){
  float per=4.5,ev=floor(t/per),ph=fract(t/per);
  float vis=smoothstep(.0,.02,ph)*smoothstep(.18,.06,ph);
  if(vis<.001)return 0.;
  vec2 av=vec2(asp,1.);
  vec2 top=vec2(.15+hash(vec2(ev,0.))*.70,.65+hash(vec2(ev,1.))*.28);
  vec2 bot=vec2(.10+hash(vec2(ev,2.))*.80,.02);
  vec2 mid=mix(top,bot,.48)+vec2((hash(vec2(ev,3.))-.5)*.18,0.);
  float d=min(min(sdSeg(uv*av,top*av,mid*av),sdSeg(uv*av,mid*av,bot*av)),
              sdSeg(uv*av,mid*av,(mid+vec2((hash(vec2(ev,4.))-.5)*.22,-(hash(vec2(ev,5.))*.18+.08)))*av));
  d=min(d,sdSeg(uv*av,mix(mid,bot,.35)*av,(mix(mid,bot,.35)+vec2((hash(vec2(ev,6.))-.5)*.18,-(hash(vec2(ev,7.))*.14+.05)))*av));
  return (smoothstep(.008,.001,d)+exp(-d*55.)*.55)*vis;
}

// ── Birds ─────────────────────────────────────────────────────────────────────
float birdFlock(vec2 uv,float fs,float h,float spd,float sz,float asp){
  float cov=0.;
  for(int i=0;i<5;i++){
    float fi=float(i);
    float ph=hash(vec2(fs+7.,fi));
    float bx=fract(spd*t*.04+hash(vec2(fs,fi+1.))*.38+ph);
    float by=h+sin(t*(.8+ph*.4)+fi*1.1+ph*6.28)*.018;
    float flap=sin(t*(3.+ph*2.)+fi*2.3+ph*6.28)*.012*sz;
    vec2 lp=(uv-vec2(bx,by))*vec2(asp,1.)/sz;
    float dip=-.28+flap/sz;
    float d=min(min(sdSeg(lp,vec2(-1.,0.),vec2(-.5,dip)),sdSeg(lp,vec2(-.5,dip),vec2(0.,0.))),
                min(sdSeg(lp,vec2(1.,0.),vec2(.5,dip)),sdSeg(lp,vec2(.5,dip),vec2(0.,0.))))*sz;
    cov=max(cov,smoothstep(.006,.001,d));
  }
  return cov;
}

// ── Christmas: coloured snowflakes + aurora bands ─────────────────────────────
vec3 christmasLayer(vec2 u,float strength){
  if(strength<.01)return vec3(0.);
  vec3 col=vec3(0.);
  // Extra large festive flakes (gold, red, silver)
  for(int k=0;k<3;k++){
    float fk=float(k);
    float spd=.08+hash(vec2(fk+10.,3.))*.06;
    float sz=1.2+hash(vec2(fk,8.))*.8;
    vec2 g=u*vec2(40.+fk*15.,28.+fk*8.)*sz;
    vec2 id=floor(g),q=fract(g);
    float seed=hash(id+fk*5.3);
    q.y=fract(q.y-t*spd);q.x+=sin(q.y*5.+seed*6.28+t*.5)*.05;
    float flake=1.-smoothstep(.05,.15,length(q-.5));
    // colour cycling: gold, red, silver
    vec3 fc=k==0?vec3(1.,.82,.1):(k==1?vec3(.9,.1,.15):vec3(.8,.85,.9));
    col+=flake*fc*.55*strength;
  }
  // Warm reddish-green ambient aurora hint at top of screen (subtle)
  float aurora=fbm(u*vec2(3.,1.)+vec2(t*.012,0.),3);
  float auroraM=smoothstep(.55,.88,u.y)*smoothstep(1.,.72,u.y)*aurora;
  col+=mix(vec3(.1,.55,.15),vec3(.6,.05,.1),sin(u.x*3.+t*.2)*.5+.5)*auroraM*.18*strength;
  return col;
}

// ── New Year firework starburst ───────────────────────────────────────────────
vec3 firework(vec2 uv,float seed,float startT,float hue){
  float age=t-startT;
  if(age<0.||age>2.2)return vec3(0.);
  float fade=smoothstep(0.,.12,age)*smoothstep(2.2,1.4,age);
  float radius=age*.38;
  // Starburst: distance to nearest spoke
  vec2 d=uv-vec2(.2+hash(vec2(seed,0.))*.6,.35+hash(vec2(seed,1.))*.45);
  float angle=atan(d.y,d.x);
  float spokes=12.;
  float spoke=abs(mod(angle,6.2832/spokes)-3.1416/spokes);
  float dist=length(d);
  float ring_=abs(dist-radius);
  float star=smoothstep(.012,.001,ring_)*smoothstep(.55,.0,spoke)*fade;
  float sparkle=smoothstep(.025,.001,ring_)*fade;
  // HSV-like hue to RGB
  vec3 hcol=.5+.5*cos(vec3(0.,2.094,4.189)+hue*6.283185);
  return (star+sparkle*.5)*hcol;
}

vec3 fireworksLayer(vec2 uv,float phase_){
  vec3 col=vec3(0.);
  float intensity=smoothstep(0.,.15,phase_)*smoothstep(1.,.5,phase_);
  if(intensity<.001)return col;
  // 6 fireworks with staggered start times
  for(int i=0;i<6;i++){
    float fi=float(i);
    float startOffset=hash(vec2(fi,99.))*2.0; // stagger 0-2s
    float period_=2.8;
    float localT=mod(t*0.5+startOffset,period_);
    float hue=hash(vec2(fi+13.,7.));
    col+=firework(uv,fi,localT-localT,localT,hue)*intensity; // trick: startT=0, age=localT
  }
  return col;
}

void main(){
  vec2 u=gl_FragCoord.xy/r;
  float asp=r.x/r.y;

  // ── Blend weather states ──
  // We interpolate between previous mode (mp) and current (m) using bl 0→1
  // For smooth transitions all weather booleans are soft floats.
  float mBlend=mix(mp,m,bl);

  float isWet     =smoothstep(1.4,1.6,mBlend)*(1.-smoothstep(4.4,4.6,mBlend));
  float isStorm   =smoothstep(2.4,2.6,mBlend)*(1.-smoothstep(4.4,4.6,mBlend));
  float isSnowy   =smoothstep(4.4,4.6,mBlend)*(1.-smoothstep(5.4,5.6,mBlend));
  float isFoggy   =smoothstep(5.4,5.6,mBlend)*(1.-smoothstep(6.4,6.6,mBlend));
  float isOvercast=smoothstep(6.4,6.6,mBlend);
  float isPartly  =smoothstep(7.4,7.6,mBlend);
  float isClear   =1.-smoothstep(.4,.6,mBlend);

  // ── Sky ──
  vec3 c=rayleighSky(u.y,n);
  c=mix(c,mix(c,vec3(.09,.18,.28),.52),isWet);
  c=mix(c,mix(c,vec3(.02,.04,.07),.74),isStorm);

  // ── Clouds (blended density) ──
  float cc=mix(cloudCoverage(u,mp),cloudCoverage(u,m),bl);
  float shadow=(cloudLayer(u,mix(.022,.013,1.-isStorm),2.6,0.).y*.7
               +cloudLayer(u,mix(.022,.013,1.-isStorm)*.7,1.8,3.1).y*.3);
  vec3 cLit =n<.5?vec3(.90,.92,.95):vec3(.18,.22,.28);
  vec3 cDark=n<.5?vec3(.52,.57,.64):vec3(.06,.08,.12);
  c=mix(c,mix(cLit,cDark,shadow*.65),cc);

  // ── Sun ──
  vec2 sunPos=vec2(.78,.72);
  c+=sunContrib((u-sunPos)*vec2(asp,1.),n,isOvercast+isWet>.5);
  c+=goldenHour(u,sunPos,n);

  // ── Moon + stars ──
  c+=moonContrib((u-vec2(.72,.68))*vec2(asp,1.),phase,n,isOvercast>.5);
  c+=starField(u,n,cc);
  if(n>.5)c+=vec3(.05,.07,.12)*smoothstep(.35,.5,phase<.5?phase:1.-phase)*(1.-cc*.8);

  // ── Rain (intensity driven by isWet/isStorm) ──
  if(isWet>.02){
    float wx=mix(.2,.6,isStorm);
    float rain=rainDrop(u,0.,wx)*.9+rainDrop(u*1.4+vec2(.2,.1),1.,wx)*.55+rainDrop(u*2.1+vec2(.7,.3),2.,wx)*.28;
    c+=vec3(.52,.76,1.)*rain*mix(.72,1.05,isStorm)*isWet;
    c+=vec3(.55,.78,1.)*rain*smoothstep(.12,.0,u.y)*.35*isWet;
  }

  // ── Snow ──
  if(isSnowy>.02){
    float snow=(snowFlake(u,0.)*.9+snowFlake(u*1.5+vec2(.3,.1),1.)*.55+snowFlake(u*2.2+vec2(.8,.4),2.)*.28)*isSnowy;
    c+=vec3(1.)*snow;
    c=mix(c,vec3(.88,.92,.96),smoothstep(.08,.0,u.y)*.5*isSnowy);
  }

  // ── Fog ──
  if(isFoggy>.02){
    float fm=smoothstep(.38,.72,fbm(u*vec2(2.2,1.1)+vec2(t*.006,0.),4)*.6+fbm(u*vec2(3.5,1.8)+vec2(t*.009,.5),3)*.4)*isFoggy;
    c=mix(c,vec3(.68,.74,.76),fm*.52);
    c=mix(c,vec3(.70,.75,.77),smoothstep(.22,.0,u.y)*.65*isFoggy);
  }

  // ── Lightning ──
  if(isStorm>.02){
    float flash=pow(max(0.,sin(t*.67+hash(vec2(floor(t*.67),0.))*4.)),52.)*isStorm;
    c+=flash*vec3(.60,.74,1.15);
    c+=pow(max(0.,sin(t*.67+hash(vec2(floor(t*.67),0.))*4.-.8)),80.)*vec3(.45,.60,.95)*.5*isStorm;
    float bolt=lightningBolt(u,asp)*isStorm;
    c+=bolt*vec3(.82,.90,1.0)*2.2;
    c+=bolt*vec3(.30,.52,.95)*.85;
  }

  // ── Birds ──
  if((isClear+isPartly)>.1&&n<.35&&isWet<.1&&isSnowy<.1){
    float birds=max(max(birdFlock(u,0.,.72,.55,.018,asp),birdFlock(u,1.3,.60,.38,.025,asp)),birdFlock(u,2.7,.50,.22,.032,asp));
    c=mix(c,vec3(.04,.05,.06),birds*.88*(isClear+isPartly)*.5*(1.-n*2.));
  }

  // ── Christmas special ──
  c+=christmasLayer(u,xmas);
  // Warm ambient tint for Christmas
  if(xmas>.01)c=mix(c,c*vec3(1.06,.97,.90),xmas*.18);

  // ── New Year fireworks ──
  if(nye>.5)c+=fireworksLayer(u,nyep);

  // ── Eclipse ──
  if(e>0.)c=mix(c,e<1.5?vec3(.06,.045,.018):vec3(.28,.04,.03),.50);

  // ── Horizon haze ──
  c=mix(c,n<.5?vec3(.70,.80,.88):vec3(.03,.06,.12),smoothstep(.12,.0,u.y)*.28);

  // ── ACES filmic tone-mapping (HDR → display range) ────────────────────────
  c=aces(c*1.05);  // slight exposure boost before ACES

  gl_FragColor=vec4(c,1.);
}
`;

export function shader(
  gl: WebGLRenderingContext | WebGL2RenderingContext,
  type: number,
  source: string
): WebGLShader {
  const value = gl.createShader(type);
  if (!value) throw new Error('Could not create shader');
  gl.shaderSource(value, source);
  gl.compileShader(value);
  if (!gl.getShaderParameter(value, gl.COMPILE_STATUS))
    throw new Error(gl.getShaderInfoLog(value) || 'Shader compilation failed');
  return value;
}

type CanvasWithWebgl = HTMLCanvasElement & { __argusWebgl?: WebGLState };

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
  state.overlay?.remove();
  delete canvas.__argusWebgl;
}

// ─── 2D Canvas NYE year-change overlay ─────────────────────────────────────
function drawYearOverlay(overlay: HTMLCanvasElement, year: string, nyePhase: number): void {
  const ctx = overlay.getContext('2d');
  if (!ctx) return;
  overlay.width = overlay.offsetWidth * devicePixelRatio;
  overlay.height = overlay.offsetHeight * devicePixelRatio;
  ctx.clearRect(0, 0, overlay.width, overlay.height);
  if (nyePhase < 0.05 || nyePhase > 0.95) return;
  const alpha = Math.sin(nyePhase * Math.PI); // fade in then out
  const cx = overlay.width / 2;
  const cy = overlay.height * 0.42;
  const fs = Math.round(overlay.width * 0.13);
  ctx.save();
  ctx.globalAlpha = alpha * 0.92;
  // Glow layer
  ctx.shadowColor = 'rgba(255,200,80,0.9)';
  ctx.shadowBlur = Math.round(overlay.width * 0.04);
  ctx.fillStyle = '#fff8e1';
  ctx.font = `bold ${fs}px system-ui, sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(`🎆 ${year}`, cx, cy);
  // Sub-line
  const fs2 = Math.round(fs * 0.32);
  ctx.font = `${fs2}px system-ui, sans-serif`;
  ctx.shadowBlur = Math.round(overlay.width * 0.015);
  ctx.fillText('¡Feliz Año Nuevo!', cx, cy + fs * 0.72);
  ctx.restore();
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
      if (!this.shadowRoot) return;
      if (!this.shadowRoot.getElementById('argus-premium-style')) {
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
      (root.querySelectorAll('.wx-webgl') as NodeListOf<CanvasWithWebgl>).forEach(dispose);
    }
    return disconnected?.call(this);
  };
}

// ─── Public render entry – call this instead of a raw rAF loop ──────────────
// Attach 60fps loop with smooth uniform interpolation to a WebGL canvas.
// mTarget / nTarget can be updated externally; the loop lerps toward them.
export function startRender(
  canvas: CanvasWithWebgl,
  initialMode: number,
  initialNight: number,
  phase: number,
  season: number,
  eclipse: number
): void {
  // Dispose any existing session
  if (canvas.__argusWebgl) dispose(canvas);

  const gl = tryHDR(canvas);
  if (!gl) return;

  const hdrActive = !!(canvas.getContext as any)('webgl2');

  // Compile shaders
  const vert = shader(gl, gl.VERTEX_SHADER, VERTEX);
  const frag = shader(gl, gl.FRAGMENT_SHADER, FRAGMENT);
  const program = gl.createProgram()!;
  gl.attachShader(program, vert);
  gl.attachShader(program, frag);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS))
    throw new Error(gl.getProgramInfoLog(program) || 'Link failed');

  gl.useProgram(program);
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
  const attr = gl.getAttribLocation(program, 'p');
  gl.enableVertexAttribArray(attr);
  gl.vertexAttribPointer(attr, 2, gl.FLOAT, false, 0, 0);

  // Locate uniforms
  const uLoc = (name: string) => gl.getUniformLocation(program, name);
  const uR=uLoc('r'),uT=uLoc('t'),uM=uLoc('m'),uMP=uLoc('mp'),uBL=uLoc('bl'),
        uN=uLoc('n'),uS=uLoc('s'),uE=uLoc('e'),uPH=uLoc('phase'),
        uXmas=uLoc('xmas'),uNye=uLoc('nye'),uNyep=uLoc('nyep');

  // NYE 2D overlay canvas
  const overlay = document.createElement('canvas');
  overlay.className = 'argus-overlay';
  canvas.parentElement?.appendChild(overlay);

  const state: WebGLState = {
    frame: 0, gl, buffer: buf, program, hdrActive, overlay,
    tStart: performance.now(),
    mCur: initialMode, mTgt: initialMode,
    nCur: initialNight, nTgt: initialNight,
    blend: 1,
    visibility: () => {},
  };
  canvas.__argusWebgl = state;

  // Smooth lerp speeds (seconds to 90% transition)
  const WEATHER_SPEED = 2.0;   // weather mode cross-fade
  const NIGHT_SPEED   = 8.0;   // day/night cycle (gradual)

  let prevMode = initialMode;
  let lastTs = performance.now();

  function loop(ts: number) {
    const dt = Math.min((ts - lastTs) / 1000, 0.1); // cap dt at 100ms
    lastTs = ts;

    const elapsed = (ts - state.tStart) / 1000;

    // Lerp weather mode
    if (state.mCur !== state.mTgt) {
      const alpha = 1 - Math.exp(-dt * (3 / WEATHER_SPEED));
      state.mCur += (state.mTgt - state.mCur) * alpha;
      if (Math.abs(state.mCur - state.mTgt) < 0.005) state.mCur = state.mTgt;
    }
    // Lerp night blend
    if (state.nCur !== state.nTgt) {
      const alpha = 1 - Math.exp(-dt * (3 / NIGHT_SPEED));
      state.nCur += (state.nTgt - state.nCur) * alpha;
      if (Math.abs(state.nCur - state.nTgt) < 0.003) state.nCur = state.nTgt;
    }
    // blend tracks mCur progress toward mTgt
    state.blend = state.mTgt === prevMode ? 1 :
      Math.min(1, 1 - Math.abs(state.mCur - state.mTgt) / (Math.abs(state.mTgt - prevMode) + 0.001));

    // Resize if needed
    const w = canvas.clientWidth  * devicePixelRatio | 0;
    const h = canvas.clientHeight * devicePixelRatio | 0;
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w; canvas.height = h;
      gl.viewport(0, 0, w, h);
    }

    // Calendar flags
    const { xmas, nye, nyePhase, newYearStr } = calendarFlags();

    // Set uniforms
    gl.uniform2f(uR, canvas.width, canvas.height);
    gl.uniform1f(uT, elapsed);
    gl.uniform1f(uM, state.mCur);
    gl.uniform1f(uMP, prevMode);
    gl.uniform1f(uBL, state.blend);
    gl.uniform1f(uN, state.nCur);
    gl.uniform1f(uS, season);
    gl.uniform1f(uE, eclipse);
    gl.uniform1f(uPH, phase);
    gl.uniform1f(uXmas, xmas);
    gl.uniform1f(uNye, nye);
    gl.uniform1f(uNyep, nyePhase);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    // 2D year overlay
    if (nye > 0.5) drawYearOverlay(overlay, newYearStr, nyePhase);
    else { const ctx = overlay.getContext('2d'); ctx?.clearRect(0, 0, overlay.width, overlay.height); }

    state.frame = requestAnimationFrame(loop);
  }

  // Pause when tab hidden to save GPU
  const visibility = () => {
    if (document.hidden) cancelAnimationFrame(state.frame);
    else { lastTs = performance.now(); state.frame = requestAnimationFrame(loop); }
  };
  state.visibility = visibility;
  document.addEventListener('visibilitychange', visibility);

  state.frame = requestAnimationFrame(loop);
}
