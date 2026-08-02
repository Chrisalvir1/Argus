import './argus-panel.js?v=2.0.1';

import { applyMediaClient } from './media-client.js?v=2.0.1';
import { applyPremiumExperience } from './premium-experience.js?v=2.0.1';
import { applySecurityClient } from './security-client.js?v=2.0.1';

const ArgusPanel = customElements.get('argus-panel-v200');
applySecurityClient(ArgusPanel);

applyMediaClient(ArgusPanel);
applyPremiumExperience(ArgusPanel);
