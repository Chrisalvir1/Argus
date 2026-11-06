# Argus 2.9.115

Stabilize the Activity History widget in portrait layouts. Its nearly transparent surface exposed the animated page background as rectangular green bands, and its inset highlight could appear as a flashing top edge. Portrait History now uses a steady, opaque Liquid Glass gradient, with no backdrop blur, blend layer, shadow, or transition on its outer surface; activity rows use a matching steady gradient. Native touch scrolling and row content remain intact. The security core is unchanged.

Validation: frontend build, frontend tests, and Python regression contracts. The locally served Home Assistant frontend endpoints return HTTP 200.
