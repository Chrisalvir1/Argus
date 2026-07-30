import './argus-panel.js?v=1.9.5';

import { applyMediaClient } from './media-client.js?v=1.9.5';
import { applyPremiumExperience } from './premium-experience.js?v=1.9.5';
import { applySecurityClient } from './security-client.js?v=1.9.5';

const ArgusPanel = customElements.get('argus-panel-v195');
applySecurityClient(ArgusPanel);

applyMediaClient(ArgusPanel);
applyPremiumExperience(ArgusPanel);
