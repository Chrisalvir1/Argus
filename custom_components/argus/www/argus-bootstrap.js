import './argus-panel.js?v=1.9.1';

import { applyMediaClient } from './media-client.js?v=1.9.1';
import { applyPremiumExperience } from './premium-experience.js?v=1.9.1';
import { applySecurityClient } from './security-client.js?v=1.9.1';

const ArgusPanel = customElements.get('argus-panel');
applySecurityClient(ArgusPanel);

applyMediaClient(ArgusPanel);
applyPremiumExperience(ArgusPanel);
