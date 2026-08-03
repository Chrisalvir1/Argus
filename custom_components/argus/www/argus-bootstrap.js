import './argus-panel.js?v=2.0.7';
import { applyMediaClient } from './media-client.js?v=2.0.7';
import { applyPremiumExperience } from './premium-experience.js?v=2.0.7';
import { applySecurityClient } from './security-client.js?v=2.0.7';

const ArgusPanel = customElements.get('argus-panel-v207');
applySecurityClient(ArgusPanel);

applyMediaClient(ArgusPanel);
applyPremiumExperience(ArgusPanel);
