import './argus-panel.js?v=2.0.11';
import { applyUiAuditFixes } from './argus-ui-audit-fixes.js?v=2.0.11';
import { applyFullscreenPolish } from './argus-fullscreen-polish.js?v=2.0.11';
import { applyMediaClient } from './media-client.js?v=2.0.11';
import { applyPremiumExperience } from './premium-experience.js?v=2.0.11';
import { applySecurityClient } from './security-client.js?v=2.0.11';

const ArgusPanel = customElements.get('argus-panel-v2011');
applyUiAuditFixes(ArgusPanel);
applySecurityClient(ArgusPanel);
applyMediaClient(ArgusPanel);
applyPremiumExperience(ArgusPanel);
applyFullscreenPolish(ArgusPanel);
