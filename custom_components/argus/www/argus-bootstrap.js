import './argus-panel.js?v=2.0.12';
import { applyUiAuditFixes } from './argus-ui-audit-fixes.js?v=2.0.12';
import { applyGridPolish } from './argus-grid-polish.js?v=2.0.12';
import { applyFullscreenPolish } from './argus-fullscreen-polish.js?v=2.0.12';
import { applyMediaClient } from './media-client.js?v=2.0.12';
import { applyPremiumExperience } from './premium-experience.js?v=2.0.12';
import { applySecurityClient } from './security-client.js?v=2.0.12';

const ArgusPanel = customElements.get('argus-panel-v2012');
applyUiAuditFixes(ArgusPanel);
applySecurityClient(ArgusPanel);
applyMediaClient(ArgusPanel);
applyPremiumExperience(ArgusPanel);
applyGridPolish(ArgusPanel);
applyFullscreenPolish(ArgusPanel);
