import type { HomeAssistant } from '../core/home-assistant';
import { ActionRegistry } from './action-registry';
import type { ArgusPermission, AutomationDefinition, AuditEvent } from './types';

export class AutomationEngine {
  private automations = new Map<string, AutomationDefinition>();
  private unsubs: Array<() => void> = [];
  constructor(private readonly actions: ActionRegistry, private readonly audit?: (event: AuditEvent) => void) {}
  set(values: AutomationDefinition[]): void { this.automations = new Map(values.map(value => [value.id, value])); }
  list(): AutomationDefinition[] { return [...this.automations.values()]; }
  attach(hass: HomeAssistant, actorId: string | undefined, permissions: ReadonlySet<ArgusPermission>): void {
    this.detach();
    const unsubscribe = hass.subscribeEvents?.((event: any) => {
      if (event?.event?.event_type !== 'state_changed') return;
      const data = event.event.data;
      for (const automation of this.automations.values()) void this.evaluate(automation, data, hass, actorId, permissions);
    });
    if (unsubscribe) this.unsubs.push(unsubscribe);
  }
  detach(): void { this.unsubs.splice(0).forEach(unsubscribe => unsubscribe()); }
  private async evaluate(automation: AutomationDefinition, data: any, hass: HomeAssistant, actorId: string | undefined, permissions: ReadonlySet<ArgusPermission>) {
    if (!automation.enabled || data?.entity_id !== automation.trigger.entityId) return;
    const current = data.new_state?.state;
    if (automation.trigger.to && current !== automation.trigger.to) return;
    if (automation.trigger.from && data.old_state?.state !== automation.trigger.from) return;
    for (const condition of automation.conditions || []) if (hass.states[condition.entityId]?.state !== condition.state) return;
    this.audit?.({ type: 'automation_triggered', automationId: automation.id, actorId, timestamp: new Date().toISOString() });
    for (const action of automation.actions) await this.actions.execute(action.actionId, action.input || {}, { hass, actorId, permissions, audit: this.audit });
  }
}
