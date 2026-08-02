import './argus-panel.js?v=2.0.3';

import { applyMediaClient } from './media-client.js?v=2.0.3';
import { applyPremiumExperience } from './premium-experience.js?v=2.0.3';
import { applySecurityClient } from './security-client.js?v=2.0.3';

const ArgusPanel = customElements.get('argus-panel-v203');
applySecurityClient(ArgusPanel);

applyMediaClient(ArgusPanel);
applyPremiumExperience(ArgusPanel);
