import './argus-panel.js?v=2.0.5';
import { applyMediaClient } from './media-client.js?v=2.0.5';
import { applyPremiumExperience } from './premium-experience.js?v=2.0.5';
import { applySecurityClient } from './security-client.js?v=2.0.5';

const ArgusPanel = customElements.get('argus-panel-v205');
applySecurityClient(ArgusPanel);

applyMediaClient(ArgusPanel);
applyPremiumExperience(ArgusPanel);
