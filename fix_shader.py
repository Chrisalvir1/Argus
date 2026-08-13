with open("src/legacy/argus-panel.ts", "r") as f:
    content = f.read()

# Replace the cloud rendering in the GLSL shader with a better softer version
# The current blocky clouds use hard dot() distance - replace with fbm-based soft clouds
old_cloudy_shader = """if(cloudy>0.0){
  for(int i=0;i<6;i++){
    vec2 center=cloudPositions[i];
    vec2 size=cloudSizes[i];
    vec2 d=(u-center)/size;
    float dist=dot(d,d);
    if(dist<1.0){
      float intensity=1.0-dist;
      clAlpha=max(clAlpha,cloudAlphas[i]*intensity);
    }
  }
}
if(clAlpha>0.0){col=mix(col,vec3(1.0),clAlpha);alpha=max(alpha,clAlpha);}"""

new_cloudy_shader = """if(cloudy>0.0){
  for(int i=0;i<6;i++){
    vec2 center=cloudPositions[i];
    vec2 size=cloudSizes[i]*1.6;
    vec2 d=(u-center)/size;
    float dist=dot(d,d);
    if(dist<1.0){
      // Soft gaussian-like falloff + fbm noise for fluffy edges
      float base=exp(-dist*3.5);
      float edge=noise(u*8.0+vec2(t*0.05))*0.35;
      float intensity=clamp(base+edge*base,0.0,1.0);
      clAlpha=max(clAlpha,cloudAlphas[i]*intensity*0.65);
    }
  }
}
if(clAlpha>0.0){
  // Clouds: white with slight blue tint for realism
  vec3 cloudColor=mix(vec3(0.85,0.90,0.98),vec3(1.0),clAlpha);
  col=mix(col,cloudColor,clAlpha);
  alpha=max(alpha,clAlpha*0.7);
}"""
content = content.replace(old_cloudy_shader, new_cloudy_shader)

# Also fix the rain layer: make drops more visible with better color tint
old_rain_draw = "if(rain>0.0){float r=rainLayer(u,t,0.0)+rainLayer(u,t,1.0)*0.6+rainLayer(u,t,2.0)*0.4+rainLayer(u,t,3.0)*0.2;col+=vec3(0.7,0.8,0.9)*r*rain;alpha=max(alpha,min(1.0,r*rain));}"
new_rain_draw = "if(rain>0.0){float r=rainLayer(u,t,0.0)+rainLayer(u,t,1.0)*0.65+rainLayer(u,t,2.0)*0.45+rainLayer(u,t,3.0)*0.25;col+=vec3(0.75,0.88,1.0)*r*rain*1.2;alpha=max(alpha,min(1.0,r*rain*1.1));}"
content = content.replace(old_rain_draw, new_rain_draw)

# Fix the sunny-day atmospheric glow (currently too subtle)
old_sunny = "if(night<0.5&&rain==0.0&&fog==0.0&&snow==0.0){float gr=fbm(vec2(u.x*5.0-t*0.1,u.y*0.5))*(1.0-u.y);col+=vec3(1.0,0.95,0.8)*gr*0.75;alpha=max(alpha,gr*0.55);}"
new_sunny = "if(night<0.5&&rain==0.0&&fog==0.0&&snow==0.0){float gr=fbm(vec2(u.x*4.0-t*0.08,u.y*0.4))*(1.0-u.y*0.8);float sunGlow=smoothstep(0.3,0.7,gr);col+=vec3(1.0,0.92,0.72)*sunGlow*0.65;alpha=max(alpha,sunGlow*0.45);}"
content = content.replace(old_sunny, new_sunny)

with open("src/legacy/argus-panel.ts", "w") as f:
    f.write(content)
print("Shader improved!")
