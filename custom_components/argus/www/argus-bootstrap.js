import './argus-panel.js?v=2.0.6';
import { applyMediaClient } from './media-client.js?v=2.0.6';
import { applyPremiumExperience } from './premium-experience.js?v=2.0.6';
import { applySecurityClient } from './security-client.js?v=2.0.6';

const ArgusPanel = customElements.get('argus-panel-v206');
applySecurityClient(ArgusPanel);

applyMediaClient(ArgusPanel);
applyPremiumExperience(ArgusPanel);
