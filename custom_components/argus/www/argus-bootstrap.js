import './argus-panel.js?v=2.0.13';
import { applyUiAuditFixes } from './argus-ui-audit-fixes.js?v=2.0.13';
import { applyGridPolish } from './argus-grid-polish.js?v=2.0.13';
import { applyFullscreenPolish } from './argus-fullscreen-polish.js?v=2.0.13';
import { applyMediaClient } from './media-client.js?v=2.0.13';
import { applyPremiumExperience } from './premium-experience.js?v=2.0.13';
import { applySecurityClient } from './security-client.js?v=2.0.13';
import { applyV2012AuditFixes } from './argus-v2013-audit-fixes.js?v=2.0.13';
import { applyPerformanceProfile } from './argus-performance-profile.js?v=2.0.13';

const ArgusPanel = customElements.get('argus-panel-v2013');
applyUiAuditFixes(ArgusPanel);
applySecurityClient(ArgusPanel);
applyMediaClient(ArgusPanel);
applyPremiumExperience(ArgusPanel);
applyGridPolish(ArgusPanel);
applyFullscreenPolish(ArgusPanel);
applyV2012AuditFixes(ArgusPanel);
applyPerformanceProfile(ArgusPanel);
