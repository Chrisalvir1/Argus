# Argus v2.0.76 — Patch Release

## Fixed
- **WebGL Transparency & Alpha**: Configured WebGL context using `{ alpha: true, premultipliedAlpha: false }` and call `gl.clearColor(0,0,0,0)` to ensure background transparency works on top of custom CSS gradients.
- **WebGL Frame Clearing**: Clear the canvas buffers on each frame using `gl.clear(gl.COLOR_BUFFER_BIT)` to avoid drawing artifacting.
- **WebGL Fallback**: If WebGL context initialization or shader compilation fails, the canvas is set to `opacity: 0` so the parent CSS animated weather background displays cleanly.
- **Cloudy State Animation**: Render moving semitransparent white cloud ellipses moving slowly from right to left (0.1 to 0.4 px/frame) in the cloudy weather state.
- **Memory Leak Protection**: Cancel active `requestAnimationFrame` loops on component disconnect using `cancelAnimationFrame` in `disconnectedCallback()`.
