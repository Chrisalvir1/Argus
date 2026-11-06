import type { HomeAssistant } from '../core/home-assistant';
import { ActionRegistry } from './action-registry';
import { AutomationEngine } from './automation-engine';
import { EntityRegistry } from './entity-registry';
import { ZoneRegistry } from './zone-registry';
import { sendArgus } from '../core/websocket';
import type { ArgusZone } from './types';
import { registerHomeAssistantActions } from './home-assistant-adapter';
import type { ArgusPermission, AuditEvent } from './types';

export class ArgusEngine {
  readonly entities = new EntityRegistry();
  readonly zones = new ZoneRegistry();
  readonly actions = new ActionRegistry();
  readonly automations: AutomationEngine;
  private readonly auditListeners = new Set<(event: AuditEvent) => void>();

  constructor(readonly hass: HomeAssistant) {
    this.entities.replace(hass.states);
    registerHomeAssistantActions(this.actions);
    this.automations = new AutomationEngine(this.actions, event => this.emitAudit(event));
  }

  refresh(states = this.hass.states): void { this.entities.replace(states); }
  async loadZones(entryId?: string): Promise<ArgusZone[]> {
    const response = await sendArgus(this.hass, 'argus/get_zones', { entry_id: entryId });
    this.zones.replace(response.zones);
    return this.zones.list();
  }
  async saveZones(entryId?: string): Promise<ArgusZone[]> {
    const response = await sendArgus(this.hass, 'argus/save_zones', { entry_id: entryId, zones: this.zones.list() });
    this.zones.replace(response.zones);
    return this.zones.list();
  }
  setAutomations(values: Parameters<AutomationEngine['set']>[0]): void { this.automations.set(values); }
  start(actorId: string | undefined, permissions: ReadonlySet<ArgusPermission>): void {
    this.automations.attach(this.hass, actorId, permissions);
  }
  stop(): void { this.automations.detach(); }
  subscribeAudit(listener: (event: AuditEvent) => void): () => void {
    this.auditListeners.add(listener);
    return () => this.auditListeners.delete(listener);
  }
  private emitAudit(event: AuditEvent): void { for (const listener of this.auditListeners) listener(event); }
}
