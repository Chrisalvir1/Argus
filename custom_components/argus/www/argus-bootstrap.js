import './argus-panel.js?v=1.9.9';

import { applyMediaClient } from './media-client.js?v=1.9.9';
import { applyPremiumExperience } from './premium-experience.js?v=1.9.9';
import { applySecurityClient } from './security-client.js?v=1.9.9';

const ArgusPanel = customElements.get('argus-panel-v198');
applySecurityClient(ArgusPanel);

applyMediaClient(ArgusPanel);
applyPremiumExperience(ArgusPanel);
