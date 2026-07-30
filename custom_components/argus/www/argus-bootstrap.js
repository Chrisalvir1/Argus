import './argus-panel.js?v=1.9.10';

import { applyMediaClient } from './media-client.js?v=1.9.10';
import { applyPremiumExperience } from './premium-experience.js?v=1.9.10';
import { applySecurityClient } from './security-client.js?v=1.9.10';

const ArgusPanel = customElements.get('argus-panel-v1910');
applySecurityClient(ArgusPanel);

applyMediaClient(ArgusPanel);
applyPremiumExperience(ArgusPanel);
