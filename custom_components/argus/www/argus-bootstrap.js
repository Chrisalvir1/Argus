import './argus-panel.js?v=2.0.51';

const ArgusPanel=customElements.get('argus-panel-v2018');
import('./react-dist/argus-frontend.js?v=2.0.51')
  .then(({applyArgusFrontend})=>applyArgusFrontend(ArgusPanel))
  .catch(error=>console.error('Argus TypeScript frontend failed to load',error));

