import './argus-panel.js?v=1.9.6';

import { applyMediaClient } from './media-client.js?v=1.9.6';
import { applyPremiumExperience } from './premium-experience.js?v=1.9.6';
import { applySecurityClient } from './security-client.js?v=1.9.6';

const ArgusPanel = customElements.get('argus-panel-v196');
applySecurityClient(ArgusPanel);

applyMediaClient(ArgusPanel);
applyPremiumExperience(ArgusPanel);
