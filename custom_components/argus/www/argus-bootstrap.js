import './argus-panel.js?v=2.0.8';
import { applyMediaClient } from './media-client.js?v=2.0.8';
import { applyPremiumExperience } from './premium-experience.js?v=2.0.8';
import { applySecurityClient } from './security-client.js?v=2.0.8';

const ArgusPanel = customElements.get('argus-panel-v208');
applySecurityClient(ArgusPanel);

applyMediaClient(ArgusPanel);
applyPremiumExperience(ArgusPanel);
