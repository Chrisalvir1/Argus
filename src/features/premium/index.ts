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

// Keep the weather scene semantic: a clear sky is not a cloudy sky with a
// different tint. Each HA condition gets its own celestial and precipitation
// treatment in the shader below.
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
  const state = Object.values(hass?.states || {}).find(item => item.entity_id === 'sensor.moon_phase')?.state;
  const values = ['new_moon', 'waxing_crescent', 'first_quarter', 'waxing_gibbous', 'full_moon', 'waning_gibbous', 'last_quarter', 'waning_crescent'];
  const index = values.indexOf(String(state || '').toLowerCase());
  return index < 0 ? -1 : index / 7;
}

export function eclipseMode(hass?: HassMock): number {
  const event = Object.values(hass?.states || {}).find(item => /eclipse/i.test(item.entity_id || ''))?.state?.toLowerCase();
  return event === 'solar' || event === 'solar_eclipse' ? 1 : event === 'lunar' || event === 'lunar_eclipse' ? 2 : 0;
}

const CSS = `
.argus-cinematic-weather{position:absolute;inset:0;overflow:hidden;background:linear-gradient(to bottom,#0c3159,#69a9d5 62%,#c9d4d5)}
.argus-cinematic-weather canvas{width:100%;height:100%;display:block}.argus-weather-vignette{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at 56% 36%,transparent 16%,rgba(0,7,16,.1) 57%,rgba(0,4,12,.62) 100%)}
@media(prefers-reduced-motion:reduce){.argus-cinematic-weather{background:#0f172a}}
`;

const VERTEX = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
const FRAGMENT = `precision highp float;uniform vec2 r;uniform float t,m,n,s,e,phase;
float h(vec2 p){p=fract(p*vec2(.1031,.11369));p+=dot(p,p.yx+19.19);return fract((p.x+p.y)*p.x);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1.,0.)),f.x),mix(h(i+vec2(0.,1.)),h(i+1.),f.x),f.y);}
float fbm(vec2 p){float v=0.;for(int i=0;i<4;i++){v+=noise(p)*.5;p=p*2.03+7.1;}return v;}
float disk(vec2 p,float z){return 1.-smoothstep(z*.88,z,length(p));}
float cloud(vec2 u,float speed){float q=fbm(u*vec2(2.4,5.)+vec2(t*speed,0.));return smoothstep(.48,.78,q);}
float drop(vec2 u,float layer){vec2 g=u*vec2(22.+layer*10.,9.+layer*4.);vec2 id=floor(g);vec2 q=fract(g);float seed=h(id+layer*17.);q.y=fract(q.y-t*(.7+seed*1.25+layer*.35));q.x+=sin(q.y*8.+seed*6.28)*.035;vec2 p=q-vec2(.5,.32);p.x*=2.2;return (1.-smoothstep(.015,.045,length(p)))*(1.-smoothstep(.06,.24,abs(p.y)));}
float moon(vec2 p,float ph){float body=disk(p,.064);float cycle=ph<0.?0.57:ph;float lit=.5-.5*cos(cycle*6.283185);float direction=cycle<.5?1.:-1.;float shade=disk(p+vec2(direction*(.112*lit-.056),0.),.064);return body*(1.-shade*.97);}
void main(){vec2 u=gl_FragCoord.xy/r;float aspect=r.x/r.y;vec2 sky=u;vec3 day=mix(vec3(.035,.20,.39),vec3(.39,.70,.89),u.y);vec3 night=mix(vec3(.006,.014,.04),vec3(.025,.10,.20),u.y);vec3 c=mix(day,night,n);bool wet=m>1.5&&m<4.5;bool storm=m>2.5&&m<4.5;bool overcast=m>6.5;bool partly=m>7.5;if(wet)c=mix(c,vec3(.12,.22,.30),.55);if(overcast)c=mix(c,vec3(.30,.36,.40),.62);if(storm)c=mix(c,vec3(.025,.045,.08),.76);
vec2 orb=(u-vec2(.77,.74))*vec2(aspect,1.);if(n<.5){float sun=disk(orb,.064);float corona=(1.-smoothstep(.06,.22,length(orb)));c+=corona*vec3(1.,.48,.10)*.24;c+=sun*vec3(1.,.78,.24);if(!overcast&&!wet)c+=sun*vec3(.65,.30,.04);}else{float mbody=moon(orb,phase);c+=mbody*vec3(.88,.90,.82);float stars=step(.9975,h(floor(u*r/4.)));c+=stars*vec3(.68,.80,1.)*(1.-cloud(u,.008));}
float clouds=cloud(u+(partly?vec2(.17,.06):vec2(0.)),.012);float density=storm?.92:((wet||overcast)?.78:(partly?.52:.18));c=mix(c,n<.5?vec3(.58,.64,.68):vec3(.10,.16,.23),clouds*density);
if(wet){float rain=drop(u,t*.0+0.)+drop(u*1.37+vec2(.23,.11),1.)*.58+drop(u*1.9+vec2(.71,.32),2.)*.28;c+=vec3(.55,.78,1.)*rain*(storm?1.15:.72);}if(m>4.5&&m<5.5){float flakes=step(.986,h(floor(u*vec2(80.,52.)+t*.5)));c+=flakes*vec3(1.);}
if(storm){float flash=pow(max(0.,sin(t*.73+h(vec2(floor(t*.73)))*4.)),58.);c+=flash*vec3(.65,.78,1.2);}
if(m>5.5&&m<6.5)c=mix(c,vec3(.67,.74,.76),.24+cloud(u,.006)*.18);if(e>0.)c=mix(c,e<1.5?vec3(.08,.055,.025):vec3(.29,.045,.04),.48);gl_FragColor=vec4(c,1.);}`;

export function shader(gl: WebGLRenderingContext | WebGL2RenderingContext, type: number, source: string): WebGLShader { 
  const value = gl.createShader(type); 
  if (!value) throw new Error('Could not create shader');
  gl.shaderSource(value, source); 
  gl.compileShader(value); 
  if (!gl.getShaderParameter(value, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(value) || 'Shader compilation failed'); 
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
