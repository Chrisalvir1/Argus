import './argus-panel.js?v=1.9.7';

import { applyMediaClient } from './media-client.js?v=1.9.7';
import { applyPremiumExperience } from './premium-experience.js?v=1.9.7';
import { applySecurityClient } from './security-client.js?v=1.9.7';

const ArgusPanel = customElements.get('argus-panel-v197');
applySecurityClient(ArgusPanel);

applyMediaClient(ArgusPanel);
applyPremiumExperience(ArgusPanel);
