import './argus-panel.js?v=2.0.2';

import { applyMediaClient } from './media-client.js?v=2.0.2';
import { applyPremiumExperience } from './premium-experience.js?v=2.0.2';
import { applySecurityClient } from './security-client.js?v=2.0.2';

const ArgusPanel = customElements.get('argus-panel-v202');
applySecurityClient(ArgusPanel);

applyMediaClient(ArgusPanel);
applyPremiumExperience(ArgusPanel);
