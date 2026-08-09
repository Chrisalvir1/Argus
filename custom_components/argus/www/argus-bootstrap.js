import './argus-panel.js?v=2.0.50';

const ArgusPanel=customElements.get('argus-panel-v2018');
import('./react-dist/argus-frontend.js?v=2.0.51')
  .then(({applyArgusFrontend})=>applyArgusFrontend(ArgusPanel))
  .catch(error=>console.error('Argus TypeScript frontend failed to load',error));

/*
Bundled compatibility manifest. These modules are bundled once by Vite through
src/legacy/bridge.ts; they are not fetched or applied independently anymore.
argus-ui-audit-fixes.js?v=2.0.50 applyUiAuditFixes(ArgusPanel)
security-client.js?v=2.0.50 applySecurityClient(ArgusPanel)
media-client.js?v=2.0.50 applyMediaClient(ArgusPanel)
premium-experience.js?v=2.0.50 applyPremiumExperience(ArgusPanel)
argus-grid-polish.js?v=2.0.50 applyGridPolish(ArgusPanel)
argus-fullscreen-polish.js?v=2.0.50 applyFullscreenPolish(ArgusPanel)
argus-v2013-audit-fixes.js?v=2.0.50 applyV2012AuditFixes(ArgusPanel)
argus-performance-profile.js?v=2.0.50 applyPerformanceProfile(ArgusPanel)
argus-visual-container-fixes.js?v=2.0.50 applyVisualContainerFixes(ArgusPanel)
argus-complete-content-fixes.js?v=2.0.50 applyCompleteContentFixes(ArgusPanel)
argus-runtime-visual-fixes.js?v=2.0.50 applyRuntimeVisualFixes(ArgusPanel)
argus-bg-sensor-availability-fixes.js?v=2.0.50 applyBgSensorAvailabilityFixes(ArgusPanel)
argus-battery-ui-fixes.js?v=2.0.50 applyBatteryUiFixes(ArgusPanel)
argus-deep-repair.js?v=2.0.50 applyDeepRepair(ArgusPanel)
argus-light-capability-fixes.js?v=2.0.50 applyLightCapabilityFixes(ArgusPanel)
argus-personalization-toggle-fix.js?v=2.0.50 applyPersonalizationToggleFix(ArgusPanel)
argus-dashboard-scroll-fixes.js?v=2.0.50 applyDashboardScrollFixes(ArgusPanel)
argus-v2041-audit-repair.js?v=2.0.50 applyV2041AuditRepair(ArgusPanel)
argus-v2042-stability.js?v=2.0.50 applyV2042Stability(ArgusPanel)
argus-v2043-visual-fix.js?v=2.0.50 applyV2043VisualFix(ArgusPanel)
argus-v2045-trigger-sensors.js?v=2.0.50 applyV2045TriggerSensors(ArgusPanel)
argus-v2046-active-visuals.js?v=2.0.50 applyV2046ActiveVisuals(ArgusPanel)
argus-v2049-responsive-widgets.js?v=2.0.50 applyV2049ResponsiveWidgets(ArgusPanel)
argus-motion-system.js?v=2.0.50 applyMotionSystem(ArgusPanel)
argus-v2050-stable-render.js?v=2.0.50 applyStableInstancesRender(ArgusPanel)
argus-v2050-alarm-visuals.js?v=2.0.50 applyV2050AlarmVisuals(ArgusPanel)
argus-v2050-widget-layouts.js?v=2.0.50 applyV2050WidgetLayouts(ArgusPanel)
import('./react-dist/argus-dashboard-react.js?v=react-layout-3') applyReactDashboardLayout(ArgusPanel)
*/
