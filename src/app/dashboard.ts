import { applyReactDashboardLayout, removeLegacyEditor } from '../features/dashboard';
import { applyReactSecurityConsole } from '../features/dashboard/components';

export function installDashboard(constructor: CustomElementConstructor, panel: HTMLElement) {
  applyReactDashboardLayout(constructor);
  applyReactSecurityConsole(constructor);
  if (panel.shadowRoot) removeLegacyEditor(panel as HTMLElement & { shadowRoot: ShadowRoot });
}
