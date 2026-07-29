import './argus-panel.js?v=1.8.7';
import { applyAuditClient } from './audit-client.js?v=1.8.7';
import { applyMediaClient } from './media-client.js?v=1.8.7';
import { applyPremiumExperience } from './premium-experience.js?v=1.8.7';
import { applySecurityClient } from './security-client.js?v=1.8.7';

const ArgusPanel = customElements.get('argus-panel');
applySecurityClient(ArgusPanel);
applyAuditClient(ArgusPanel);
applyMediaClient(ArgusPanel);
applyPremiumExperience(ArgusPanel);
