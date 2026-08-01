import './argus-panel.js?v=2.0.0';

import { applyMediaClient } from './media-client.js?v=2.0.0';
import { applyPremiumExperience } from './premium-experience.js?v=2.0.0';
import { applySecurityClient } from './security-client.js?v=2.0.0';

const ArgusPanel = customElements.get('argus-panel-v1911');
applySecurityClient(ArgusPanel);

applyMediaClient(ArgusPanel);
applyPremiumExperience(ArgusPanel);
