import './argus-panel.js?v=1.8.5';
import { applyAuditClient } from './audit-client.js?v=1.8.5';
import { applyMediaClient } from './media-client.js?v=1.8.5';
import { applyPremiumExperience } from './premium-experience.js?v=1.8.5';
import { applySecurityClient } from './security-client.js?v=1.8.5';

const ArgusPanel = customElements.get('argus-panel');
applySecurityClient(ArgusPanel);
applyAuditClient(ArgusPanel);
applyMediaClient(ArgusPanel);
applyPremiumExperience(ArgusPanel);
