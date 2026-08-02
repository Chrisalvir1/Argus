import './argus-panel.js?v=2.0.4';

import { applyMediaClient } from './media-client.js?v=2.0.4';
import { applyPremiumExperience } from './premium-experience.js?v=2.0.4';
import { applySecurityClient } from './security-client.js?v=2.0.4';

const ArgusPanel = customElements.get('argus-panel-v204');
applySecurityClient(ArgusPanel);

applyMediaClient(ArgusPanel);
applyPremiumExperience(ArgusPanel);
