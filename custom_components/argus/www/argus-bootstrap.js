import './argus-panel.js?v=2.0.37';
import { applyUiAuditFixes } from './argus-ui-audit-fixes.js?v=2.0.37';
import { applyGridPolish } from './argus-grid-polish.js?v=2.0.37';
import { applyFullscreenPolish } from './argus-fullscreen-polish.js?v=2.0.37';
import { applyMediaClient } from './media-client.js?v=2.0.37';
import { applyPremiumExperience } from './premium-experience.js?v=2.0.37';
import { applySecurityClient } from './security-client.js?v=2.0.37';
import { applyV2012AuditFixes } from './argus-v2013-audit-fixes.js?v=2.0.37';
import { applyPerformanceProfile } from './argus-performance-profile.js?v=2.0.37';
import { applyVisualContainerFixes } from './argus-visual-container-fixes.js?v=2.0.37';
import { applyCompleteContentFixes } from './argus-complete-content-fixes.js?v=2.0.37';
import { applyRuntimeVisualFixes } from './argus-runtime-visual-fixes.js?v=2.0.37';
import { applyBgSensorAvailabilityFixes } from './argus-bg-sensor-availability-fixes.js?v=2.0.37';
import { applyBatteryUiFixes } from './argus-battery-ui-fixes.js?v=2.0.37';
import { applyDeepRepair } from './argus-deep-repair.js?v=2.0.37';
import { applyLightCapabilityFixes } from './argus-light-capability-fixes.js?v=2.0.37';
import { applyPersonalizationToggleFix } from './argus-personalization-toggle-fix.js?v=2.0.37';

const ArgusPanel = customElements.get('argus-panel-v2018');
applyUiAuditFixes(ArgusPanel);
applySecurityClient(ArgusPanel);
applyMediaClient(ArgusPanel);
applyPremiumExperience(ArgusPanel);
applyGridPolish(ArgusPanel);
applyFullscreenPolish(ArgusPanel);
applyV2012AuditFixes(ArgusPanel);
applyPerformanceProfile(ArgusPanel);
applyVisualContainerFixes(ArgusPanel);
applyCompleteContentFixes(ArgusPanel);
applyRuntimeVisualFixes(ArgusPanel);
applyBgSensorAvailabilityFixes(ArgusPanel);
applyBatteryUiFixes(ArgusPanel);
applyDeepRepair(ArgusPanel);
applyLightCapabilityFixes(ArgusPanel);
applyPersonalizationToggleFix(ArgusPanel);

// React enhances the native dashboard, but it must never prevent the native
// Argus custom element from loading. A rejected optional bundle is isolated.
import('./react-dist/argus-dashboard-react.js?v=react-layout-2')
  .then(({ applyReactDashboardLayout }) => applyReactDashboardLayout(ArgusPanel))
  .catch((error) => console.error('Argus optional dashboard enhancement failed', error));
