import type { HassEntityId, HassEntityState } from '../core/home-assistant';
import type { ArgusEntity, EntityDomain } from './types';

const DOMAINS = new Set<EntityDomain>(['sensor', 'binary_sensor', 'lock', 'light', 'switch', 'alarm_control_panel', 'camera', 'other']);

function domainOf(id: HassEntityId): EntityDomain {
  const value = id.split('.')[0] as EntityDomain;
  return DOMAINS.has(value) ? value : 'other';
}

export class EntityRegistry {
  private entities = new Map<HassEntityId, ArgusEntity>();
  private listeners = new Set<(entity: ArgusEntity, previous?: ArgusEntity) => void>();

  replace(states: Readonly<Record<string, HassEntityState>>): void {
    for (const state of Object.values(states)) this.upsert(state);
  }

  upsert(state: HassEntityState): ArgusEntity {
    const previous = this.entities.get(state.entity_id);
    const entity: ArgusEntity = {
      ...state,
      domain: domainOf(state.entity_id),
      friendly_name: typeof state.attributes.friendly_name === 'string' ? state.attributes.friendly_name : undefined,
      area_id: typeof state.attributes.area_id === 'string' ? state.attributes.area_id : null,
      device_id: typeof state.attributes.device_id === 'string' ? state.attributes.device_id : null,
    };
    this.entities.set(entity.entity_id, entity);
    if (!previous || previous.state !== entity.state || previous.last_updated !== entity.last_updated) {
      for (const listener of this.listeners) listener(entity, previous);
    }
    return entity;
  }

  get(entityId: HassEntityId): ArgusEntity | undefined { return this.entities.get(entityId); }
  list(filter?: Partial<Pick<ArgusEntity, 'domain' | 'area_id'>>): ArgusEntity[] {
    return [...this.entities.values()].filter(entity => Object.entries(filter || {}).every(([key, value]) => entity[key as keyof ArgusEntity] === value));
  }
  subscribe(listener: (entity: ArgusEntity, previous?: ArgusEntity) => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
}
