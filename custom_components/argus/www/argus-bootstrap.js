import './argus-panel.js';
import { applyAuditClient } from './audit-client.js';
import { applyMediaClient } from './media-client.js';
import { applyPremiumExperience } from './premium-experience.js';
import { applySecurityClient } from './security-client.js';

const ArgusPanel = customElements.get('argus-panel');
applySecurityClient(ArgusPanel);
applyAuditClient(ArgusPanel);
applyMediaClient(ArgusPanel);
applyPremiumExperience(ArgusPanel);
