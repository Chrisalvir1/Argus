import './argus-panel.js?v=1.9.11';

import { applyMediaClient } from './media-client.js?v=1.9.11';
import { applyPremiumExperience } from './premium-experience.js?v=1.9.11';
import { applySecurityClient } from './security-client.js?v=1.9.11';

const ArgusPanel = customElements.get('argus-panel-v1911');
applySecurityClient(ArgusPanel);

applyMediaClient(ArgusPanel);
applyPremiumExperience(ArgusPanel);
