import './argus-panel.js?v=2.0.10';
import { applyUiAuditFixes } from './argus-ui-audit-fixes.js?v=2.0.10';
import { applyMediaClient } from './media-client.js?v=2.0.10';
import { applyPremiumExperience } from './premium-experience.js?v=2.0.10';
import { applySecurityClient } from './security-client.js?v=2.0.10';

const ArgusPanel = customElements.get('argus-panel-v2010');
applyUiAuditFixes(ArgusPanel);
applySecurityClient(ArgusPanel);
applyMediaClient(ArgusPanel);
applyPremiumExperience(ArgusPanel);
