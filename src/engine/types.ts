import type { HassEntityId, HassEntityState, HomeAssistant } from '../core/home-assistant';

export type ArgusPermission = 'read_entities' | 'control_devices' | 'manage_automations' | 'security_admin';
export type EntityDomain = 'sensor' | 'binary_sensor' | 'lock' | 'light' | 'switch' | 'alarm_control_panel' | 'camera' | 'other';

export interface ArgusEntity extends HassEntityState {
  domain: EntityDomain;
  friendly_name?: string;
  area_id?: string | null;
  device_id?: string | null;
}

export interface ActionContext {
  hass: HomeAssistant;
  actorId?: string;
  permissions: ReadonlySet<ArgusPermission>;
  audit?: (event: AuditEvent) => void;
}

export interface ArgusAction<Input = Record<string, unknown>, Output = unknown> {
  id: string;
  label: string;
  permission: ArgusPermission;
  execute(input: Input, context: ActionContext): Promise<Output>;
}

export interface AuditEvent {
  type: 'action_started' | 'action_succeeded' | 'action_failed' | 'automation_triggered';
  actionId?: string;
  automationId?: string;
  actorId?: string;
  entityIds?: HassEntityId[];
  timestamp: string;
  error?: string;
}

export interface AutomationDefinition {
  version: 1;
  id: string;
  name: string;
  enabled: boolean;
  trigger: { type: 'state_changed'; entityId: HassEntityId; to?: string; from?: string };
  conditions?: Array<{ entityId: HassEntityId; state: string }>;
  actions: Array<{ actionId: string; input?: Record<string, unknown> }>;
}

export interface EntityChange {
  entity: ArgusEntity;
  previous?: ArgusEntity;
}

export interface ArgusZone {
  id: string;
  number?: number;
  name: string;
  area?: string;
  modes?: Array<'disarmed' | 'home' | 'away' | 'night' | 'sos'>;
  sensor_settings?: Record<string, { condition: 'open' | 'close' | 'motion' | 'detected'; delay: number }>;
  entity_ids: HassEntityId[];
  device_ids: string[];
  enabled: boolean;
  created_at?: string | null;
  updated_at?: string | null;
}
