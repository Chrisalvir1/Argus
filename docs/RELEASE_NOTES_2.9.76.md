# Argus 2.9.76

- React owns the slider markup and pointer gesture. Dragging no longer depends on imperative nodes that Home Assistant or React can replace during a render.
- The thumb follows the pointer without a CSS transition while dragging, then returns with its spring animation when released before the confirmation threshold.
- One shared mode palette now supplies the mode controls, 3D core and security crystals. The selected color is applied on the first rendered frame, so the disarmed green and armed-mode colors do not flash gray while the animation starts.
- The Home Assistant frontend bundle cache key is updated to 2.9.76.

Validation: frontend TypeScript compilation, Vite production build and Vitest suite.
