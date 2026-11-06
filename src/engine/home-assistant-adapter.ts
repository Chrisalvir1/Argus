import type { HomeAssistant } from '../core/home-assistant';
import { ActionRegistry } from './action-registry';
import type { ArgusPermission } from './types';

export function registerHomeAssistantActions(actions: ActionRegistry): void {
  actions.register({
    id: 'ha.call_service', label: 'Ejecutar servicio de Home Assistant', permission: 'control_devices' as ArgusPermission,
    async execute(input: { domain: string; service: string; serviceData?: Record<string, unknown> }, context) {
      if (!context.hass.callService) throw new Error('Home Assistant service API is unavailable');
      return context.hass.callService(input.domain, input.service, input.serviceData);
    },
  });
}
