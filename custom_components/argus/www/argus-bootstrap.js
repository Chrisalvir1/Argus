import './argus-panel.js?v=2.0.9';
import { applyMediaClient } from './media-client.js?v=2.0.9';
import { applyPremiumExperience } from './premium-experience.js?v=2.0.9';
import { applySecurityClient } from './security-client.js?v=2.0.9';

const ArgusPanel = customElements.get('argus-panel-v209');
applySecurityClient(ArgusPanel);

applyMediaClient(ArgusPanel);
applyPremiumExperience(ArgusPanel);
